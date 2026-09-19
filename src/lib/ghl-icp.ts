/**
 * ICP routing for /api/lead → GoHighLevel.
 * Tags and optional per-ICP pipeline/stage env stubs live here so they stay
 * independent of the HighLevel HTTP client.
 */

export const SOURCE_SITE_FORM_TAG = 'Source: Site Form';

export const ICP_TAGS = {
  investor: 'Investor',
  exec_relocator: 'Exec Relocator',
  intra_company: 'Intra-company',
  developer: 'Developer',
  aviation: 'Aviation Yacht',
  overseas: 'Overseas Frac-Exec Logistics',
} as const;

export type IcpKey = keyof typeof ICP_TAGS;

/** Env suffix for GHL_PIPELINE_ID_* / GHL_STAGE_ID_* stubs. */
export const ICP_ENV_SUFFIX: Record<IcpKey, string> = {
  investor: 'INVESTOR',
  exec_relocator: 'EXEC_RELOCATOR',
  intra_company: 'INTRA_COMPANY',
  developer: 'DEVELOPER',
  aviation: 'AVIATION',
  overseas: 'OVERSEAS',
};

const AVIATION_RE = /\b(aviation|aircraft|yachts?|yachting|private\s+jet)\b/i;
const RELOCATOR_RE = /\b(relocat\w*|immigration|visa|silicon valley|moving to miami)\b/i;

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
 * Map form persona/intent (+ light field text) to an ICP key.
 * Unmatched / soft leads return null → New Lead stage when GHL_STAGE_ID_NEW is set.
 *
 * First match wins:
 * 1. Aviation Yacht — luxury-company, or aviation/yacht language
 * 2. Developer — persona=developer
 * 3. Investor — persona or intent = investor
 * 4. Overseas Frac-Exec Logistics — international-company, frac-exec, market-entry, distribution
 * 5. Exec Relocator — founder, or relocation language
 * 6. Intra-company — us-company
 */
export function mapIcp(persona?: string | null, intent?: string | null, fields: Record<string, unknown> = {}): IcpKey | null {
  const p = (persona ?? '').trim().toLowerCase();
  const i = (intent ?? '').trim().toLowerCase();
  const text = blob(fields, ['category', 'need', 'message', 'industry', 'area', 'build']);

  if (p === 'luxury-company' || AVIATION_RE.test(text) || AVIATION_RE.test(i)) return 'aviation';
  if (p === 'developer') return 'developer';
  if (p === 'investor' || i === 'investor') return 'investor';
  if (
    p === 'international-company' ||
    i === 'fractional-executive' ||
    i === 'market-entry' ||
    i === 'distribution'
  ) {
    return 'overseas';
  }
  if (p === 'founder' || RELOCATOR_RE.test(text)) return 'exec_relocator';
  if (p === 'us-company') return 'intra_company';
  return null;
}

export function icpTags(icp: IcpKey | null): string[] {
  const tags = [SOURCE_SITE_FORM_TAG];
  if (icp) tags.unshift(ICP_TAGS[icp]);
  return tags;
}
