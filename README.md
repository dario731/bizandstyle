# BIZ & STYLE — corporate platform website

Astro 7 · content collections · built-in i18n (EN live; IT / ES / PT prepared) · Netlify.
Design, architecture and factual decisions are documented in `docs/`:

| Doc | What it holds |
|---|---|
| `docs/01-AUDIT.md` | Factual inventory, supported claims, **contradictions flagged for Dario**, brand tokens, available media |
| `docs/02-ARCHITECTURE.md` | Sitemap, routes, content model, components, SEO/GEO, conversion + CRM envelope, multilingual |
| `docs/03-CREATIVE-SYSTEM.md` | Visual direction, typography, colour, spacing, motion, imagery, mobile |
| `docs/04-HOMEPAGE-STORYBOARD.md` | The locked 17-act homepage narrative |
| `docs/05-ASSET-MANIFEST.md` | Every missing photo/video with dimensions, mood, crops and alt intent |

## Run

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/ + Netlify function for /api/lead
npm run preview
npx astro check    # type-check .astro/.ts
```

> On this machine the project path contains `&`, which breaks `npx` shims in cmd. Use `node node_modules/astro/bin/astro.mjs <cmd>` instead.

## Deploy

GitHub `dario731/bizandstyle` → Netlify (build command `npm run build`, publish `dist`, `netlify.toml` included).
Work lands on the **`preview`** branch; production (`main`) is promoted by Dario.

Environment variables (see `.env.example`):

| Var | Purpose |
|---|---|
| `PUBLIC_GTM_ID` | When set, GTM loads and receives every `dataLayer` event from `src/lib/track.ts`. Leave empty until GA4/GTM are configured. |
| `LEAD_WEBHOOK_URL` / `LEAD_WEBHOOK_TOKEN` | Where `/api/lead` forwards normalized, scored leads (Follow Up Boss, HubSpot, Zapier/Make…). Empty = dry run (202 + echo). |

## Where things live

```
src/data/site.ts          entity facts (address, phone, founder, divisions) → JSON-LD + footer + connect page
src/data/services.ts      21 service landing pages (advisory 10 · commerce 8 · luxury 3)
src/data/programs.ts      3 signature programmes
src/i18n/en.ts            homepage + navigation + footer copy
src/i18n/pages.en.ts      hub / about / conversion page copy
src/content/insights/en/  Insights articles (MDX) — see "Publishing" below
src/content/categories.json · authors.json
src/components/           layout · cinematic · editorial · system (Investor Journey, Luxury ecosystem, Digital engine, map…) · insights · conversion · story
src/pages/api/lead.ts     CRM-agnostic lead endpoint (validation, honeypot, scoring, webhook)
src/lib/track.ts          dataLayer bus + first-touch attribution (UTM, gclid, referrer, landing page)
```

## Publishing an Insight

1. Create `src/content/insights/en/<slug>.mdx` with the frontmatter used by the three seed articles (title, excerpt, author, publishDate, category, tags, relatedServices, cta, faqs, sources, hero.manifestId or hero.image).
2. Commit. The article appears on `/insights`, its category page, the author page, the homepage grid, and as "Related insights" on every service/program page in its topic cluster (`categories.json → clusterOf`).
3. Article JSON-LD, breadcrumbs, FAQ schema, reading time and TOC are generated.

## Adding a language

`src/i18n/index.ts → published`. Add `it.ts` mirroring `en.ts`, flip `published = ['en','it']`; hreflang, sitemap and the language switcher follow. Never publish machine translations without a native review.

## Verified facts vs. open items

Everything published traces to `docs/01-AUDIT.md §A`. Items that need Dario's confirmation before they can go live are listed in `§C` (presence outside Miami, statistics, The Real Deal event, B&S Luxury leadership names) and in the asset manifest.
