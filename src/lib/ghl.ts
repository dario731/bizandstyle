/**
 * GoHighLevel (LeadConnector) writer for /api/lead.
 *
 * Writes Contact (upsert) + tags + Opportunity. Does not send client-facing
 * SMS/email. Internal team alerts stay in GHL workflows if already configured.
 *
 * Auth: Bearer GHL_PRIVATE_INTEGRATION_TOKEN
 * Version: 2021-07-28 — current Private Integration header (marketplace v3
 * docs label the generation "v3"; the wire value remains 2021-07-28).
 *
 * Live pipeline map (comments only — never used as runtime fallbacks):
 *   GHL_LOCATION_ID                 rnVDtPfXXCeL7FoX5khR
 *   GHL_PIPELINE_ID_DEFAULT         Hn3MtAszhBsXGbf2q6Tl   (Investors — unknown / appointment-led)
 *   GHL_STAGE_ID_DISCOVERY          637e1321-0c7d-4976-8bc0-fb4f2bab6d5b
 *   GHL_STAGE_ID_NEW                7f649cea-935b-4ee9-b6a8-87ff9ad6dae6
 *   INVESTOR        Hn3MtAszhBsXGbf2q6Tl / 637e1321-0c7d-4976-8bc0-fb4f2bab6d5b
 *   EXEC_RELOCATOR  gyRIzoQFKvc5pPSAbLV8 / 5619c439-0996-46fe-86a5-d49b55b45596
 *   INTRA_COMPANY   KuhnLffVgezmQuFtNjII / b53203dd-effe-4906-a17c-3211cf13c322
 *   DEVELOPER       jtQ9bzSStIhoOFBbKa29 / f43bb489-4603-4e6f-b9b1-e4809cb04c5c
 *   AVIATION        qJP3o1NDIiQ62IqoOwR1 / f10eaa6e-f176-416b-96cb-40fb419d1600
 *   OVERSEAS        Hp1aB8C9wBiW7A1qph3c / 5718c64f-daa7-4324-aefe-ef806ead4e28
 */

import { ICP_ENV_SUFFIX, type IcpKey, icpTags, mapIcp } from './ghl-icp.ts';

export const GHL_API_BASE = 'https://services.leadconnectorhq.com';
export const GHL_API_VERSION = '2021-07-28';

export const GHL_REQUIRED_ENV = [
  'GHL_PRIVATE_INTEGRATION_TOKEN',
  'GHL_LOCATION_ID',
  'GHL_PIPELINE_ID_DEFAULT',
  'GHL_STAGE_ID_DISCOVERY',
] as const;

export type GhlEnv = Record<string, string | undefined>;

export type ScoredLead = {
  id: string;
  receivedAt: string;
  formId: string;
  leadType: string;
  persona: string | null;
  intent: string | null;
  division: string | null;
  service: string | null;
  program: string | null;
  geography: unknown;
  language: string;
  score: number;
  tier: string;
  fields: Record<string, string | string[] | boolean>;
  consent: { privacy: boolean; marketing?: boolean; ts?: string };
  attribution: Record<string, string | undefined>;
  userAgent?: string;
};

export type GhlWriteResult = {
  contactId: string;
  opportunityId: string;
  contactNew: boolean;
  icp: IcpKey | null;
  tags: string[];
  pipelineId: string;
  stageId: string;
  noteId?: string;
};

export type GhlConfig = {
  token: string;
  locationId: string;
  pipelineIdDefault: string;
  stageIdDiscovery: string;
  stageIdNew?: string;
};

export function readEnv(name: string, env: GhlEnv = process.env): string | undefined {
  const v = env[name];
  return typeof v === 'string' && v.trim() ? v.trim() : undefined;
}

export function missingGhlEnv(env: GhlEnv = process.env): string[] {
  return GHL_REQUIRED_ENV.filter((name) => !readEnv(name, env));
}

export function loadGhlConfig(env: GhlEnv = process.env): { ok: true; config: GhlConfig } | { ok: false; missing: string[] } {
  const missing = missingGhlEnv(env);
  if (missing.length) return { ok: false, missing };
  return {
    ok: true,
    config: {
      token: readEnv('GHL_PRIVATE_INTEGRATION_TOKEN', env)!,
      locationId: readEnv('GHL_LOCATION_ID', env)!,
      pipelineIdDefault: readEnv('GHL_PIPELINE_ID_DEFAULT', env)!,
      stageIdDiscovery: readEnv('GHL_STAGE_ID_DISCOVERY', env)!,
      stageIdNew: readEnv('GHL_STAGE_ID_NEW', env),
    },
  };
}

/**
 * Per-ICP pipeline/stage only when BOTH matching envs are set.
 * Stage IDs are pipeline-specific — do not mix default Discovery onto an ICP pipeline.
 * Soft/unknown → GHL_STAGE_ID_NEW when set, else Discovery.
 */
export function routeOpportunity(
  icp: IcpKey | null,
  config: GhlConfig,
  env: GhlEnv = process.env,
): { pipelineId: string; stageId: string } {
  if (!icp) {
    return {
      pipelineId: config.pipelineIdDefault,
      stageId: config.stageIdNew ?? config.stageIdDiscovery,
    };
  }
  const suffix = ICP_ENV_SUFFIX[icp];
  const pipelineId = readEnv(`GHL_PIPELINE_ID_${suffix}`, env);
  // Prefer GHL_STAGE_ID_DISCOVERY_* (Netlify / GHL naming), fall back to GHL_STAGE_ID_*.
  const stageId = readEnv(`GHL_STAGE_ID_DISCOVERY_${suffix}`, env) ?? readEnv(`GHL_STAGE_ID_${suffix}`, env);
  if (pipelineId && stageId) return { pipelineId, stageId };
  return { pipelineId: config.pipelineIdDefault, stageId: config.stageIdDiscovery };
}

function fieldString(fields: Record<string, unknown>, ...keys: string[]): string | undefined {
  for (const key of keys) {
    const v = fields[key];
    if (typeof v === 'string' && v.trim()) return v.trim();
    if (Array.isArray(v)) {
      const first = v.find((x) => typeof x === 'string' && x.trim());
      if (typeof first === 'string') return first.trim();
    }
  }
  return undefined;
}

function isoCountry(raw?: string): string | undefined {
  if (!raw) return undefined;
  const t = raw.trim();
  return /^[A-Za-z]{2}$/.test(t) ? t.toUpperCase() : undefined;
}

export function opportunityName(lead: ScoredLead, icp: IcpKey | null): string {
  const company = fieldString(lead.fields, 'company', 'company_name');
  const name = fieldString(lead.fields, 'name', 'full_name');
  const who = company || name || lead.fields.email;
  const icpLabel = icp ? icp.replace(/_/g, ' ') : 'new lead';
  return `${who} — ${icpLabel} — ${lead.formId}`.slice(0, 180);
}

export function contactNoteBody(lead: ScoredLead, icp: IcpKey | null): string {
  const lines = [
    `Site form (${lead.formId}) · score ${lead.score} / tier ${lead.tier} · ICP ${icp ?? 'unknown'}`,
    `Persona: ${lead.persona ?? '—'} · Intent: ${lead.intent ?? '—'} · Division: ${lead.division ?? '—'}`,
    `Geography: ${lead.geography ?? fieldString(lead.fields, 'country', 'geography') ?? '—'} · Lang: ${lead.language}`,
  ];
  const skip = new Set(['email', 'name', 'full_name', 'company', 'company_name', 'phone', 'website', 'consent']);
  for (const [k, v] of Object.entries(lead.fields)) {
    if (skip.has(k) || v === '' || v === false) continue;
    const val = Array.isArray(v) ? v.join(', ') : String(v);
    if (val) lines.push(`${k}: ${val}`);
  }
  const utm = Object.entries(lead.attribution)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}=${v}`)
    .join(' · ');
  if (utm) lines.push(`Attribution: ${utm}`);
  lines.push(`Lead id: ${lead.id} · ${lead.receivedAt}`);
  return lines.join('\n');
}

type GhlFetch = (input: string, init: RequestInit) => Promise<Response>;

async function ghlRequest(
  fetchImpl: GhlFetch,
  token: string,
  path: string,
  body: unknown,
): Promise<{ status: number; json: Record<string, unknown> }> {
  const res = await fetchImpl(`${GHL_API_BASE}${path}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      Version: GHL_API_VERSION,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  let json: Record<string, unknown> = {};
  try {
    json = (await res.json()) as Record<string, unknown>;
  } catch {
    json = {};
  }
  return { status: res.status, json };
}

function asRecord(v: unknown): Record<string, unknown> | undefined {
  return v && typeof v === 'object' && !Array.isArray(v) ? (v as Record<string, unknown>) : undefined;
}

function pickId(...candidates: unknown[]): string | undefined {
  for (const c of candidates) {
    if (typeof c === 'string' && c) return c;
    const rec = asRecord(c);
    if (rec && typeof rec.id === 'string' && rec.id) return rec.id;
  }
  return undefined;
}

export class GhlUpstreamError extends Error {
  step: string;
  status: number;
  constructor(message: string, step: string, status: number) {
    super(message);
    this.name = 'GhlUpstreamError';
    this.step = step;
    this.status = status;
  }
}

export async function writeLeadToGhl(
  lead: ScoredLead,
  options: { env?: GhlEnv; fetchImpl?: GhlFetch } = {},
): Promise<GhlWriteResult> {
  const env = options.env ?? process.env;
  const loaded = loadGhlConfig(env);
  if (!loaded.ok) {
    throw new GhlUpstreamError(`ghl_not_configured:${loaded.missing.join(',')}`, 'config', 503);
  }
  const { config } = loaded;
  const fetchImpl = options.fetchImpl ?? ((input, init) => fetch(input, init));

  const icp = mapIcp(lead.persona, lead.intent, lead.fields);
  const tags = icpTags(icp, lead.formId, lead.attribution);
  const route = routeOpportunity(icp, config, env);
  const name = fieldString(lead.fields, 'name', 'full_name');
  const email = fieldString(lead.fields, 'email');
  const phone = fieldString(lead.fields, 'phone');
  const companyName = fieldString(lead.fields, 'company', 'company_name');
  const website = fieldString(lead.fields, 'website');
  const country = isoCountry(fieldString(lead.fields, 'country', 'geography'));

  // Tags are added in a second call so upsert cannot wipe existing tags.
  const upsertBody: Record<string, unknown> = {
    locationId: config.locationId,
    email,
    source: 'Site Form',
  };
  if (name) upsertBody.name = name;
  if (phone) upsertBody.phone = phone;
  if (companyName) upsertBody.companyName = companyName;
  if (website) upsertBody.website = website;
  if (country) upsertBody.country = country;

  const upsert = await ghlRequest(fetchImpl, config.token, '/contacts/upsert', upsertBody);
  const contact = asRecord(upsert.json.contact) ?? upsert.json;
  const contactId = pickId(contact, upsert.json.contactId, upsert.json.id);
  if (upsert.status >= 400 || !contactId) {
    throw new GhlUpstreamError('ghl_contact_upsert_failed', 'contact_upsert', upsert.status || 502);
  }
  const contactNew = upsert.json.new === true;

  const tagged = await ghlRequest(fetchImpl, config.token, `/contacts/${contactId}/tags`, { tags });
  if (tagged.status >= 400) {
    throw new GhlUpstreamError('ghl_tags_failed', 'tags', tagged.status);
  }

  const opp = await ghlRequest(fetchImpl, config.token, '/opportunities/', {
    locationId: config.locationId,
    pipelineId: route.pipelineId,
    pipelineStageId: route.stageId,
    contactId,
    name: opportunityName(lead, icp),
    status: 'open',
  });
  const opportunity = asRecord(opp.json.opportunity) ?? opp.json;
  const opportunityId = pickId(opportunity, opp.json.opportunityId, opp.json.id);
  if (opp.status >= 400 || !opportunityId) {
    throw new GhlUpstreamError('ghl_opportunity_failed', 'opportunity', opp.status || 502);
  }

  let noteId: string | undefined;
  try {
    const note = await ghlRequest(fetchImpl, config.token, `/contacts/${contactId}/notes`, {
      body: contactNoteBody(lead, icp),
    });
    if (note.status < 400) noteId = pickId(asRecord(note.json.note), note.json);
  } catch {
    // Notes are internal context only — do not fail the lead write.
  }

  return {
    contactId,
    opportunityId,
    contactNew,
    icp,
    tags,
    pipelineId: route.pipelineId,
    stageId: route.stageId,
    noteId,
  };
}
