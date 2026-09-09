# 02 — ARCHITECTURE · Sitemap, routes, content model, components, SEO/GEO, conversion, i18n

## 1. Proposed final sitemap

Visible primary navigation stays at seven items + one persistent CTA. Everything below the first level exists for
search authority and user journeys, not for the menu.

```
/                                   Home
/platform                           The platform — Who we are · How we work (hub page)
/platform/how-we-work               Built in the real world — operator philosophy, in-house vs licensed partners
/internationalization               Export is not internationalization (flagship SEO/GEO landing)
/digital-engine                     From click to client — digital business infrastructure
/infrastructure                     Capability already in place — HQ, warehouse, logistics, technology, network
/miami                              Our platform to the Americas
/partners                           Partner ecosystem hub → Become a partner
/advisory                           B&S Advisory — Strategy that ends in execution
/advisory/business-strategy
/advisory/international-expansion
/advisory/fractional-executive
/advisory/temporary-export-management
/advisory/business-development
/advisory/partnership-engineering
/advisory/digital-growth
/advisory/lead-generation
/advisory/crm-automation
/advisory/ai-digital-transformation
/commerce                           B&S Commerce — From product to market
/commerce/distribution
/commerce/import-export
/commerce/e-commerce
/commerce/marketplaces
/commerce/warehousing
/commerce/bonded-warehouse
/commerce/fulfillment
/commerce/brand-expansion
/luxury                             B&S Luxury — Business development at the highest level
/luxury/real-estate                 → outbound to bns-luxury.com for search/listings
/luxury/seven-verticals
/luxury/developer-partnerships
/luxury/ecosystem
/investor-journey                   The Investor Journey™ (signature experience page)
/programs                           Signature programs hub
/programs/international-expansion-boost
/programs/digital-growth-engine
/programs/fractional-executive
/insights                           Insights index
/insights/[category]                Category landing (internationalization, us-market-entry, digital-growth, …)
/insights/[slug]                    Article
/insights/authors/[author]          Author page (Person authority)
/about                              Our story
/about/dario-picardi                Leadership
/about/relationships                Relationships & discretion → Request credentials
/tell-us                            Tell us what you're building (dynamic lead form)
/become-a-partner                   Partner qualification form
/connect                            Let's connect (direct contact, calendar, phone, address)
/request-credentials                Credential request (NDA-gated references)
/privacy  /terms  /disclosures      Legal (disclosures already exist on the live site — migrate)
/404
/it/… /es/… /pt/…                   Localized mirrors (progressively activated)
sitemap-index.xml · robots.txt · /og/*.png
```

Primary navigation: **PLATFORM · ADVISORY · COMMERCE · LUXURY · INVESTOR JOURNEY · INSIGHTS · ABOUT** + CTA **TELL US WHAT YOU'RE BUILDING**.
Mega-menu columns follow brief §23. Footer carries the full second level + CONNECT group.

## 2. Route structure (Astro)

```
src/pages/
  index.astro                       home (static)
  [...localized]/                   handled through Astro i18n: /it/, /es/, /pt/ prefixes; en unprefixed
  platform/index.astro, how-we-work.astro
  internationalization.astro · digital-engine.astro · infrastructure.astro · miami.astro · partners.astro
  advisory/index.astro + [service].astro (data-driven from content/services)
  commerce/index.astro + [service].astro
  luxury/index.astro + [page].astro
  investor-journey.astro
  programs/index.astro + [program].astro
  insights/index.astro · [slug].astro · category/[category].astro · authors/[author].astro
  about/index.astro · dario-picardi.astro · relationships.astro
  tell-us.astro · become-a-partner.astro · connect.astro · request-credentials.astro
  api/lead.ts                       POST — server-rendered (prerender=false), CRM-agnostic
  robots.txt.ts · og/[...slug].png.ts (later)
```

Everything is static except `api/lead`. Localized routes reuse the same page components with a `locale` prop
and per-locale copy files in `src/i18n/<locale>.json`; page-level content lives in collections with a `locale` field.

## 3. Content model (content collections)

```
insights      title, slug, locale, excerpt, hero{image|video,alt,credit}, author(ref), publishDate, updatedDate,
              category(ref), tags[], readingTime(auto), body(MDX), toc(auto), pullQuotes(MDX component),
              stats(MDX component), sources[]{label,url}, faqs[]{q,a}, related[](refs), relatedServices[](refs),
              cta{name,href,label}, seo{title,description,ogImage,canonical,noindex}, schema{type=Article|…}
categories    slug, locale, name, description, clusterOf(service ref), seo
authors       slug, name, role, bio, image, sameAs[], locale
services      slug, division(advisory|commerce|luxury), locale, title, eyebrow, summary, sections[], faqs[],
              cta, relatedPrograms[], relatedInsights(auto by category), seo, schema(Service)
programs      slug, locale, title, tagline, components[], regulatedNotes, cta, seo
verticals     slug, name, role(core|partner), relations[](slugs), description       ← Luxury ecosystem data
journey       stage, verbs[], examples[], generates[], next                          ← Investor Journey data
site          organization data (single JSON): legal name, address, phone, email, sameAs, founding date, founder
```

Topic clusters: each category declares `clusterOf` → the service page it strengthens; article pages show
"Related services" and service pages pull "Latest insights in this cluster". Internal links are generated, not hand-typed.

## 4. Component architecture

```
layout/      BaseLayout · Seo · GlobalHeader · MegaMenu · MobileMenu · GlobalFooter · SkipLink · Consent (slot)
cinematic/   CinematicHero · CinematicMedia (video+poster+reduced-motion still) · MediaPlaceholder (manifest-aware)
editorial/   SectionIntro · LargeStatement · Eyebrow · QuoteBlock · StatBlock · Rule · Marquee (reduced-motion safe)
system/      DivisionTransition · InvestorJourney (SVG ring, scroll-driven, keyboard/tap) · LuxuryEcosystem (network)
             DigitalEngine (loop) · InternationalizationTimeline (5 phases) · NinePillars · InfrastructureGrid
             GlobalMap (Miami radiating to Europe / U.S. / LATAM) · SignaturePrograms
insights/    InsightCard · InsightGrid · RelatedInsights · Toc · PullQuote · StatCallout · Sources · Faq
conversion/  DynamicLeadForm (persona → adaptive fields) · PartnerForm · CredentialRequest · ContextualCTA · CtaBar
story/       FounderStory
util/        track.ts (dataLayer bus) · reveal.ts (IntersectionObserver) · motion.ts (reduced-motion helper)
```

Components are data-driven: sections receive typed props; copy comes from `src/i18n/*.json` or collections.

## 5. SEO / GEO architecture

Authority clusters → concrete implementation:

| Cluster | Where | How |
|---|---|---|
| Entity | every page | `Organization` JSON-LD from `site` data (legalName, foundingDate 2017, address, founder, sameAs, areaServed, knowsAbout). One canonical definition paragraph on Home and Platform ("BIZ & STYLE is a Miami-based business development platform…"). |
| Service | division + service pages | `Service` JSON-LD with `provider` → Organization; explicit "delivered in-house" vs "coordinated through licensed professionals" blocks (machine-readable definitions). |
| Founder | /about/dario-picardi, author pages | `Person` JSON-LD (`founder` of Organization, `alumniOf` omitted until confirmed, `knowsAbout`, `sameAs`). |
| Geographic | /miami, Organization.address, `areaServed` | Place-level clarity: Miami HQ; U.S., LATAM, Caribbean, Europe as served regions. |
| Content | /insights | `Article` + `BreadcrumbList` JSON-LD, dateModified, author, `about`/`mentions`, FAQ schema only where FAQs exist on-page. |
| Proof / trust | /about/relationships, disclosures | Discretion statement, NDA-gated references, disclosures page (kept). |

Technical: semantic landmarks, one `h1`, ordered headings, server-rendered copy (no JS-only text), canonical + hreflang
(`en`, `it`, `es`, `pt`, `x-default`), OpenGraph/Twitter, sitemap-index, robots, breadcrumbs, `loading=lazy` + explicit
`width/height` on media, `preload` only the hero poster + display font, `prefers-reduced-motion` still frames.

GEO answer blocks: every hub page opens with a 2–3 sentence definition under the h1 ("What is…"/"Who is…"), uses
descriptive `h2`s phrased as questions where natural, dates (published/updated) on Insights, and consistent entity
naming (`BIZ & STYLE`, `B&S Advisory`, `B&S Commerce`, `B&S Luxury`, `The Investor Journey™`).

## 6. Conversion + CRM-ready architecture

Master idea: **TELL US WHAT YOU'RE BUILDING** (persistent header CTA, final CTA on every page).
Intent CTAs per page (brief §15) all resolve to `/tell-us?intent=<x>&persona=<y>` so the form pre-selects.

Form payload (all forms share one envelope, posted to `/api/lead`):

```
{ formId, persona, intent, division, service, program, geography, language,
  fields:{…persona-specific}, consent:{marketing:boolean, privacy:true, ts},
  attribution:{ lead_source, original_source, utm_source, utm_medium, utm_campaign, utm_content, utm_term,
                landing_page, referrer, gclid, fbclid, page_url, page_type, session_first_seen },
  scoring:{ persona_weight, intent_weight, size_band } }
```

Attribution is captured on first visit into `sessionStorage`/first-party cookie by `track.ts`, invisibly.
`/api/lead` validates, computes a provisional lead score, and forwards to `LEAD_WEBHOOK_URL` (env) — CRM vendor
is chosen later (Follow Up Boss already runs for B&S Luxury; HubSpot/others plug in via the same webhook).
Until a webhook exists the endpoint stores nothing and returns `202` with the normalized payload echoed for QA.

dataLayer events (brief §17) are emitted through `track(event, params)`; GTM/GA4 IDs are injected from
`PUBLIC_GTM_ID` only when present. Nothing is hard-coded.

## 7. Multilingual architecture

Astro i18n: `defaultLocale: 'en'`, `locales: ['en','it','es','pt']`, `prefixDefaultLocale: false`, `fallback` → en
with `redirectToDefaultLocale: false` so unfinished locales 404 rather than publish machine text. hreflang emitted
from a single `alternates()` helper; localized slugs supported via collection `slug` per locale. Language switcher
emits `language_change`. Translations ship progressively: EN complete → IT next (largest origin market) → ES → PT.
