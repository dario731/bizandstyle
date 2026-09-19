/**
 * ICP routing for /api/lead → GoHighLevel.
 * Tag strings match the Alan / GHL package table exactly.
 */

/** Official source tags from the Alan package. /api/lead always applies Site Form. */
export const SOURCE_TAGS = {
  site_form: 'Source: Site Form',
  ghl_calendar: 'Source: GHL Calendar',
  whatsapp: 'Source: WhatsApp',
  offline: 'Source: Offline',
  partner: 'Source: Partner',
} as const;

export const SOURCE_SITE_FORM_TAG = SOURCE_TAGS.site_form;

/** Official ICP tags — prefix is part of the GHL tag name. */
export const ICP_TAGS = {
  investor: 'ICP: Investor',
  exec_relocator: 'ICP: Exec Relocator',
  intra_company: 'ICP: Intra-company',
  developer: 'ICP: Developer',
  aviation: 'ICP: Aviation Yacht',
  overseas: 'ICP: Overseas Frac-Exec Logistics',
} as const;

export type IcpKey = keyof typeof ICP_TAGS;

/** Env suffix for GHL_PIPELINE_ID_* / GHL_STAGE_ID_DISCOVERY_* stubs. */
export const ICP_ENV_SUFFIX: Record<IcpKey, string> = {
  investor: 'INVESTOR',
  exec_relocator: 'EXEC_RELOCATOR',
  intra_company: 'INTRA_COMPANY',
  developer: 'DEVELOPER',
  aviation: 'AVIATION',
  overseas: 'OVERSEAS',
};

const AVIATION_RE = /\b(aviation|aircraft|yachts?|yachting|private\s+jet|sponsor)\b/i;
const RELOCATOR_RE = /\b(relocat\w*|immigration|visa|silicon valley|moving to miami|exec relocator)\b/i;
const OVERSEAS_RE = /\b(overseas|frac[- ]?exec|logistics|bonded|warehouse|warehousing)\b/i;
const INTRA_RE = /\b(intra[- ]?company|transfer)\b/i;

function blob(fields: Record<string, unknown>, keys: string[]): string {
  return keys
    .map((k) => {
      const v = fields[k];
      if (typeof v === 'string') return v;
      if (Array.isArray(v)) return v.filter((x) => typeof x === 'string').join(' ');
      return '';
    })
    .join(' ');
}

/**
 * Map form persona/intent (+ field text) to an ICP key.
 * Unmatched / soft leads return null → New Lead stage when GHL_STAGE_ID_NEW is set.
 *
 * Package table (first match wins):
 * 1. Aviation Yacht — luxury-company, aviation / yacht / sponsor
 * 2. Developer — persona=developer
 * 3. Investor — persona or intent = investor
 * 4. Overseas Frac-Exec Logistics — international-company, frac-exec, market-entry, distribution, bonded / warehouse / logistics
 * 5. Exec Relocator — founder, SV / relocation language
 * 6. Intra-company — us-company, transfer
 */
export function mapIcp(persona?: string | null, intent?: string | null, fields: Record<string, unknown> = {}): IcpKey | null {
  const p = (persona ?? '').trim().toLowerCase();
  const i = (intent ?? '').trim().toLowerCase();
  const text = blob(fields, ['category', 'need', 'message', 'industry', 'area', 'build', 'capabilities']);

  if (p === 'luxury-company' || AVIATION_RE.test(text) || AVIATION_RE.test(i)) return 'aviation';
  if (p === 'developer') return 'developer';
  if (p === 'investor' || i === 'investor') return 'investor';
  if (
    p === 'international-company' ||
    i === 'fractional-executive' ||
    i === 'market-entry' ||
    i === 'distribution' ||
    OVERSEAS_RE.test(text)
  ) {
    return 'overseas';
  }
  if (p === 'founder' || RELOCATOR_RE.test(text)) return 'exec_relocator';
  if (p === 'us-company' || INTRA_RE.test(text)) return 'intra_company';
  return null;
}

export function sourceTags(formId?: string | null, attribution: Record<string, string | undefined> = {}): string[] {
  const tags = new Set<string>([SOURCE_TAGS.site_form]);
  const form = (formId ?? '').toLowerCase();
  if (form === 'partner' || form === 'become-a-partner') tags.add(SOURCE_TAGS.partner);

  const hay = Object.values(attribution)
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
  if (/\bwhatsapp\b/.test(hay)) tags.add(SOURCE_TAGS.whatsapp);
  if (/\b(calendar|booking|ghl)\b/.test(hay)) tags.add(SOURCE_TAGS.ghl_calendar);
  if (/\b(offline|event|in[- ]person)\b/.test(hay)) tags.add(SOURCE_TAGS.offline);
  if (/\bpartner\b/.test(hay)) tags.add(SOURCE_TAGS.partner);
  return [...tags];
}

export function icpTags(
  icp: IcpKey | null,
  formId?: string | null,
  attribution: Record<string, string | undefined> = {},
): string[] {
  const tags = sourceTags(formId, attribution);
  if (icp) tags.unshift(ICP_TAGS[icp]);
  return tags;
}
