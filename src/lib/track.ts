/**
 * Centralised tracking bus. Pushes typed events to window.dataLayer for the
 * sitewide GTM container (GTM-P456JCB9 in BaseLayout). GA4 is loaded by GTM;
 * this file does not load gtag.js. Attribution is captured once per session
 * and attached to every lead payload — invisibly to the visitor.
 *
 * `generate_lead` is not a general track() event. Call `trackGenerateLead`
 * only after a lead submit actually succeeds.
 */
export type TrackEvent =
  | 'cta_click'
  | 'navigation_click'
  | 'form_start'
  | 'form_step'
  | 'form_submit'
  | 'qualified_lead'
  | 'calendar_click'
  | 'phone_click'
  | 'email_click'
  | 'partner_inquiry'
  | 'credentials_request'
  | 'division_view'
  | 'service_view'
  | 'program_view'
  | 'investor_journey_interaction'
  | 'luxury_vertical_interaction'
  | 'article_view'
  | 'article_engaged'
  | 'article_cta_click'
  | 'language_change'
  | 'contact_drawer_open'
  | 'whatsapp_click'
  | 'outbound_click';

export interface TrackParams {
  page_type?: string;
  division?: string;
  service?: string;
  program?: string;
  persona?: string;
  cta_name?: string;
  cta_location?: string;
  language?: string;
  article_category?: string;
  lead_type?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface Attribution {
  lead_source: string;
  original_source: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  landing_page: string;
  referrer: string;
  page_url: string;
  session_first_seen: string;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const ATTR_KEY = 'bs_attribution';
const FIRST_KEY = 'bs_first_touch';

function classifySource(ref: string, params: URLSearchParams): string {
  if (params.get('utm_source')) return `${params.get('utm_source')}/${params.get('utm_medium') ?? 'utm'}`;
  if (params.get('gclid')) return 'google/cpc';
  if (params.get('fbclid')) return 'meta/paid-social';
  if (!ref) return 'direct';
  try {
    const host = new URL(ref).hostname.replace(/^www\./, '');
    if (/google\./.test(host)) return 'google/organic';
    if (/bing\.com|duckduckgo|yahoo\./.test(host)) return `${host}/organic`;
    if (/linkedin|instagram|facebook|x\.com|twitter|youtube|tiktok/.test(host)) return `${host}/social`;
    if (/chatgpt|openai|perplexity|claude\.ai|gemini/.test(host)) return `${host}/ai-search`;
    return `${host}/referral`;
  } catch {
    return 'referral';
  }
}

/** Capture attribution on first paint. Safe to call on every page. */
export function captureAttribution(): Attribution | null {
  if (typeof window === 'undefined') return null;
  try {
    const params = new URLSearchParams(window.location.search);
    const ref = document.referrer && !document.referrer.startsWith(window.location.origin) ? document.referrer : '';
    const now = new Date().toISOString();
    const pick = (k: string) => params.get(k) ?? undefined;

    let first = window.localStorage.getItem(FIRST_KEY);
    const session = window.sessionStorage.getItem(ATTR_KEY);

    const current: Attribution = session
      ? JSON.parse(session)
      : {
          lead_source: classifySource(ref, params),
          original_source: '',
          utm_source: pick('utm_source'),
          utm_medium: pick('utm_medium'),
          utm_campaign: pick('utm_campaign'),
          utm_content: pick('utm_content'),
          utm_term: pick('utm_term'),
          gclid: pick('gclid'),
          fbclid: pick('fbclid'),
          landing_page: window.location.pathname,
          referrer: ref,
          page_url: window.location.href,
          session_first_seen: now,
        };

    if (!first) {
      first = current.lead_source;
      window.localStorage.setItem(FIRST_KEY, first);
    }
    current.original_source = first;
    current.page_url = window.location.href;
    window.sessionStorage.setItem(ATTR_KEY, JSON.stringify(current));
    return current;
  } catch {
    return null;
  }
}

export function getAttribution(): Attribution | null {
  try {
    const raw = window.sessionStorage.getItem(ATTR_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : captureAttribution();
  } catch {
    return null;
  }
}

export function track(event: TrackEvent, params: TrackParams = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({
    event,
    language: document.documentElement.lang,
    page_type: document.body.dataset.pageType,
    ...params,
  });
}

/**
 * GA4 recommended lead event. Call only after /api/lead returns ok for a real
 * lead, or after the GoHighLevel calendar posts `msgsndr-booking-complete`.
 * Not for clicks, validation failures, pageviews, or the honeypot reply.
 */
export function trackGenerateLead(formName: string): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: 'generate_lead', form_name: formName });
}

/** /api/lead accepted a stored lead. `{ ok: true, id: 'ignored' }` is the honeypot, not a lead. */
export function leadStored(statusOk: boolean, data: { ok?: unknown; id?: unknown } | null | undefined): boolean {
  return statusOk && !!data && data.ok === true && data.id !== 'ignored';
}

const GHL_BOOKING_COMPLETE = 'msgsndr-booking-complete';

function isTrustedGhlOrigin(origin: string): boolean {
  let url: URL;
  try {
    url = new URL(origin);
  } catch {
    return false;
  }
  if (url.protocol !== 'https:') return false;
  const host = url.hostname;
  return host === 'leadconnectorhq.com' || host.endsWith('.leadconnectorhq.com') || host === 'msgsndr.com' || host.endsWith('.msgsndr.com');
}

/**
 * Documented GoHighLevel calendar completion postMessage:
 * `['msgsndr-booking-complete', { calendarId }]`.
 * Other widget messages (resize, form-field echoes) are not completions.
 */
export function isGhlBookingCompleteMessage(origin: string, data: unknown): boolean {
  return isTrustedGhlOrigin(origin) && Array.isArray(data) && data[0] === GHL_BOOKING_COMPLETE;
}

/** Listen for a completed DNA Discovery Call inside a `.ghl-booking` iframe. */
export function bindGhlBookingLeadTracking(): void {
  if (typeof window === 'undefined') return;
  const flag = window as Window & { __bsGhlLeadBound?: boolean };
  if (flag.__bsGhlLeadBound) return;
  flag.__bsGhlLeadBound = true;
  const seen = new WeakSet<object>();
  window.addEventListener('message', (event) => {
    if (!isGhlBookingCompleteMessage(event.origin, event.data)) return;
    const source = event.source;
    if (source && typeof source === 'object') {
      if (seen.has(source)) return;
      seen.add(source);
    }
    const frame = Array.from(document.querySelectorAll<HTMLIFrameElement>('iframe.ghl-booking')).find((el) => el.contentWindow === source);
    trackGenerateLead(frame?.id || 'ghl-booking');
  });
}

/** Wire declarative tracking: any element with data-track="event" and data-track-* params. */
export function bindDeclarativeTracking(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-track]').forEach((el) => {
    if (el.dataset.trackBound) return;
    el.dataset.trackBound = '1';
    el.addEventListener('click', () => {
      const event = el.dataset.track as TrackEvent;
      const params: TrackParams = {};
      for (const [k, v] of Object.entries(el.dataset)) {
        if (k.startsWith('track') && k !== 'track' && k !== 'trackBound') {
          const key = k.slice(5).replace(/^[A-Z]/, (m) => m.toLowerCase()).replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`);
          params[key] = v;
        }
      }
      track(event, params);
    });
  });

  root.querySelectorAll<HTMLAnchorElement>('a[href^="http"]').forEach((a) => {
    if (a.dataset.outboundBound) return;
    a.dataset.outboundBound = '1';
    try {
      if (new URL(a.href).origin !== window.location.origin) {
        a.addEventListener('click', () => track('outbound_click', { cta_name: a.hostname, cta_location: a.closest('section')?.id }));
      }
    } catch {
      /* ignore */
    }
  });
}
