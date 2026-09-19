import type { APIRoute } from 'astro';
import { GhlUpstreamError, loadGhlConfig, writeLeadToGhl, type ScoredLead } from '@lib/ghl';

export const prerender = false;

/**
 * Lead endpoint — GoHighLevel is the primary CRM write (Contact upsert +
 * Opportunity). LEAD_WEBHOOK_URL remains an optional secondary forward.
 *
 * Contact-lock field names (full_name, company_name) stay as the form posts
 * them so the on-page HighLevel tracker still captures name and company.
 */

type Envelope = {
  formId: string;
  persona?: string;
  intent?: string;
  division?: string;
  service?: string;
  program?: string;
  geography?: string;
  language?: string;
  fields: Record<string, string | string[] | boolean>;
  consent: { privacy: boolean; marketing?: boolean; ts?: string };
  attribution?: Record<string, string | undefined>;
  hp?: string; // honeypot
};

const PERSONA_WEIGHT: Record<string, number> = {
  'international-company': 30,
  'us-company': 22,
  'consumer-brand': 26,
  'luxury-company': 24,
  developer: 24,
  investor: 20,
  founder: 16,
  partner: 12,
};

const INTENT_WEIGHT: Record<string, number> = {
  'market-entry': 30,
  distribution: 26,
  'digital-growth': 22,
  'business-development': 20,
  'fractional-executive': 22,
  investor: 20,
  partnership: 12,
  other: 6,
};

const SIZE_WEIGHT: Record<string, number> = {
  'Under $1M': 4,
  '$1M – $10M': 14,
  '$10M – $50M': 22,
  '$50M+': 26,
  'Prefer not to say': 8,
};

function isEmail(v: unknown): v is string {
  return typeof v === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

function envString(name: string): string | undefined {
  const fromProcess = typeof process !== 'undefined' ? process.env[name] : undefined;
  if (fromProcess && fromProcess.trim()) return fromProcess.trim();
  const meta = (import.meta.env as Record<string, unknown>)[name];
  return typeof meta === 'string' && meta.trim() ? meta.trim() : undefined;
}

export const POST: APIRoute = async ({ request }) => {
  let body: Envelope;
  const ct = request.headers.get('content-type') ?? '';
  try {
    if (ct.includes('application/json')) {
      body = (await request.json()) as Envelope;
    } else {
      // No-JS fallback: native form POST (urlencoded / multipart)
      const fd = await request.formData();
      const fields: Record<string, string | string[]> = {};
      fd.forEach((v, k) => {
        if (['persona', 'intent', 'consent', 'hp', 'formId'].includes(k) || typeof v !== 'string') return;
        fields[k] = k in fields ? ([] as string[]).concat(fields[k], v) : v;
      });
      body = {
        formId: String(fd.get('formId') ?? 'tell-us'),
        persona: fd.get('persona')?.toString(),
        intent: fd.get('intent')?.toString(),
        fields,
        consent: { privacy: fd.get('consent') === '1' },
        hp: fd.get('hp')?.toString(),
      };
    }
  } catch {
    return json({ ok: false, error: 'invalid_body' }, 400);
  }

  if (body.hp) return json({ ok: true, id: 'ignored' }, 202); // bot filled the honeypot
  // Form fields use CRM-friendly names (full_name, company_name) so on-page trackers read them; keep the plain keys too.
  if (body.fields && typeof body.fields === 'object') {
    const f = body.fields as Record<string, unknown>;
    if (f.full_name && !f.name) f.name = f.full_name;
    if (f.company_name && !f.company) f.company = f.company_name;
  }
  if (!body.formId || typeof body.fields !== 'object') return json({ ok: false, error: 'missing_fields' }, 422);
  if (!isEmail(body.fields.email)) return json({ ok: false, error: 'invalid_email' }, 422);
  if (!body.consent?.privacy) return json({ ok: false, error: 'consent_required' }, 422);

  const size = String(body.fields.size ?? '');
  const score =
    (PERSONA_WEIGHT[body.persona ?? ''] ?? 8) +
    (INTENT_WEIGHT[body.intent ?? ''] ?? 6) +
    (SIZE_WEIGHT[size] ?? 0) +
    (String(body.fields.message ?? '').length > 120 ? 8 : 0) +
    (body.fields.website ? 4 : 0);

  const lead: ScoredLead = {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    formId: body.formId,
    leadType: body.persona === 'partner' ? 'partner' : 'client',
    persona: body.persona ?? null,
    intent: body.intent ?? null,
    division: body.division ?? inferDivision(body.intent),
    service: body.service ?? null,
    program: body.program ?? null,
    geography: body.geography ?? body.fields.country ?? null,
    language: body.language ?? 'en',
    score,
    tier: score >= 70 ? 'A' : score >= 45 ? 'B' : 'C',
    fields: body.fields,
    consent: { ...body.consent, ts: body.consent.ts ?? new Date().toISOString() },
    attribution: body.attribution ?? {},
    userAgent: request.headers.get('user-agent') ?? undefined,
  };

  const ghlEnv = runtimeGhlEnv();
  const configured = loadGhlConfig(ghlEnv);
  if (!configured.ok) {
    return json({ ok: false, error: 'ghl_not_configured', missing: configured.missing }, 503);
  }

  let ghl;
  try {
    ghl = await writeLeadToGhl(lead, { env: ghlEnv });
  } catch (err) {
    if (err instanceof GhlUpstreamError) {
      const status = err.status >= 400 && err.status < 600 ? err.status : 502;
      return json({ ok: false, error: err.step === 'config' ? 'ghl_not_configured' : 'upstream', step: err.step, status: err.status }, status === 503 ? 503 : 502);
    }
    return json({ ok: false, error: 'upstream_unreachable' }, 502);
  }

  const webhook = envString('LEAD_WEBHOOK_URL');
  let webhookOk: boolean | undefined;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'content-type': 'application/json', ...(envString('LEAD_WEBHOOK_TOKEN') ? { authorization: `Bearer ${envString('LEAD_WEBHOOK_TOKEN')}` } : {}) },
        body: JSON.stringify({ ...lead, ghl }),
      });
      webhookOk = res.ok;
    } catch {
      webhookOk = false;
    }
  }

  return json({ ok: true, id: lead.id, tier: lead.tier, ghl: { contactId: ghl.contactId, opportunityId: ghl.opportunityId, icp: ghl.icp }, webhookOk }, 200);
};

function runtimeGhlEnv(): Record<string, string | undefined> {
  const names = [
    'GHL_PRIVATE_INTEGRATION_TOKEN',
    'GHL_LOCATION_ID',
    'GHL_PIPELINE_ID_DEFAULT',
    'GHL_STAGE_ID_DISCOVERY',
    'GHL_STAGE_ID_NEW',
    'GHL_PIPELINE_ID_INVESTOR',
    'GHL_STAGE_ID_INVESTOR',
    'GHL_STAGE_ID_DISCOVERY_INVESTOR',
    'GHL_PIPELINE_ID_EXEC_RELOCATOR',
    'GHL_STAGE_ID_EXEC_RELOCATOR',
    'GHL_STAGE_ID_DISCOVERY_EXEC_RELOCATOR',
    'GHL_PIPELINE_ID_INTRA_COMPANY',
    'GHL_STAGE_ID_INTRA_COMPANY',
    'GHL_STAGE_ID_DISCOVERY_INTRA_COMPANY',
    'GHL_PIPELINE_ID_DEVELOPER',
    'GHL_STAGE_ID_DEVELOPER',
    'GHL_STAGE_ID_DISCOVERY_DEVELOPER',
    'GHL_PIPELINE_ID_AVIATION',
    'GHL_STAGE_ID_AVIATION',
    'GHL_STAGE_ID_DISCOVERY_AVIATION',
    'GHL_PIPELINE_ID_OVERSEAS',
    'GHL_STAGE_ID_OVERSEAS',
    'GHL_STAGE_ID_DISCOVERY_OVERSEAS',
  ];
  const out: Record<string, string | undefined> = { ...process.env };
  for (const name of names) {
    const v = envString(name);
    if (v) out[name] = v;
  }
  return out;
}

function inferDivision(intent?: string): string | null {
  if (!intent) return null;
  if (['market-entry', 'business-development', 'fractional-executive', 'digital-growth'].includes(intent)) return 'advisory';
  if (intent === 'distribution') return 'commerce';
  if (intent === 'investor') return 'luxury';
  return null;
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: { 'content-type': 'application/json', 'cache-control': 'no-store' } });
}
