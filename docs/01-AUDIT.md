# 01 — AUDIT · Factual inventory

Sources reviewed on 2026-09-09:

1. `bizandstyledna.com` — live site (Gamma-generated, 6 pages + IT page).
2. `BIZ_AND_STYLE_Corporate_Profile_2026.pdf` — 28 pages. **Primary factual source.**
3. `bnsluxuryxdavid.netlify.app` — B&S Luxury strategic conversation (22 slides). **Authoritative for the seven luxury verticals and the digital engine.**
4. `Logo Files/` — SVG/PNG/PDF wordmark (black, white, on-black) + favicons.
5. `DARIO.jpg` — 1024×1024 founder portrait.
6. Sister site `bns-luxury-website` (B&S Luxury, bns-luxury.com) — brand kit reference only.

No existing codebase for the corporate site existed. The current site is a Gamma export
(Chakra runtime, `PPMori` / `Source Sans 3` / `Montserrat`, navy `#002253`). None of it is reused.

---

## A. Supported claims (usable as published)

| Claim | Source |
|---|---|
| Legal entity **BIZ & STYLE DNA INC.** | site footer, disclosures |
| Founded **2017**, Miami Beach | profile p.5 / p.7 |
| HQ **1000 5th St, Suite 200, Miami Beach, FL 33139** (Thyssen Building) | profile p.28, site |
| Contact `info@bizandstyledna.com`, `+1 786 870 7262`, Calendly `calendly.com/dario-bizandstyledna/30min` | site |
| Three divisions: **B&S Advisory · B&S Commerce · B&S Luxury** | profile p.19 |
| Positioning "Business. Wealth. Lifestyle." (in the wordmark) | logo |
| Lineage lines: "Your vision is our mission. Our vision is your success." / "Plug into B&S" | profile running footer |
| **The Investor Journey™** — three stages Business → Wealth → Lifestyle, circular | profile p.18; Luxury deck |
| "Every solution is first tested within our own ventures" | profile p.6, p.24, p.26 |
| Miami HQ since 2017; domestic **and bonded** warehouse in Miami; fulfillment & logistics; technology & CRM; marketing & PR | profile p.14, p.16 |
| Bonded-warehouse mechanics (duty deferral, re-export without U.S. duty, in-bond consolidation) | profile p.16 |
| In-house: business advisory & strategy, commerce/distribution, warehousing & logistics, marketing/CRM/lead gen, luxury real estate & lifestyle | profile p.15 |
| Via licensed partners: corporate & commercial lawyers, tax advisors & accountants, immigration attorneys, financial & wealth advisory (third-party firms), banking partners | profile p.15, p.24 |
| Internationalization: 6 mistakes, 3 ingredients (Executive Team / Real Infrastructure / Proven Experience), Export vs Internationalization table, **Nine Pillars**, **Five phases** (Understand · Build · Enter · Develop · Establish) | profile p.9–13 |
| Advisory services: international expansion, go-to-market, fractional executive, partnership engineering, business development & trade missions, International Expansion Boost | profile p.19–20 |
| Commerce services: import/export, distribution (domestic, travel-retail, e-commerce), marketplace mgmt (Amazon, Shopify), licensing & representation, warehousing & fulfillment, brand expansion (beauty, F&B, accessories, apparel) | profile p.21; site |
| Luxury: luxury real estate, pre-construction, developer partnerships, private clients, focus on Miami luxury/ultra-luxury pre-construction | profile p.22 |
| **Seven luxury verticals**: Luxury Real Estate (core), Private Aviation, Yachting, Interior Design, Luxury Goods, Luxury Media, Celebrity · Sports · Entertainment | Luxury deck slide 3 |
| "This is not concierge" positioning; business-development agreements with partners | Luxury deck slide 4 |
| Digital engine (built, owned, optimized in-house): Google, Meta, SEO, GEO/AI search, international targeting, dedicated websites, landing pages, CRM (capture/qualification/pipeline), automation, retargeting, email, analytics/attribution/optimization | Luxury deck slides 10–11 |
| Fisher Island: proprietary digital acquisition generated HNWI opportunities at the top of the market | Luxury deck slide 12 (usable as a *discreet* reference, no numbers) |
| Miami facts: gateway/capital of Latin America, "Wall Street South", PortMiami & MIA, no state income tax, HNWI influx | profile p.7–8 |
| Founder: Dario Picardi, born in Italy, 15+ years in beauty, consumer goods, real estate, international business; two master's degrees in Management, cum laude; built ventures in NY, Miami, São Paulo, Milan, London, Dubai, Singapore | profile p.26 |
| Dedicated luxury real-estate site: **bns-luxury.com** | sister repo (the old site links `bnsluxury.com`, which is the team-email domain) |
| References available on request, subject to NDA | profile p.25 |

## B. Claims to use with care (statistics)

The brief asks to avoid meaningless statistics. These are in the profile and may be used sparingly, attributed as company statements:
`15+ years international experience` · `$500M+ sales managed in the last decade` · `200+ network of commercial partners` · `50+ countries · 1,000+ flights` · `2 master's cum laude`.
Recommendation: keep **2017**, **15+ years**, **200+ relationships** as quiet facts; no stat wall.

## C. Contradictions — flagged for Dario, NOT resolved by invention

| Topic | Corporate Profile 2026 | Current website | Decision until confirmed |
|---|---|---|---|
| Presence | Three bases: **Miami, Mexico, Brazil** | LATAM: Mexico, Paraguay, Uruguay · UK & Europe: England, Italy, Spain · Middle East: Dubai · "8+ business hubs" | Show **Miami HQ** as the only physical headquarters; Mexico and Brazil as "operating bases" per the newer profile; Europe as *roots and origin markets*, not offices. |
| Numbers | 15+ yrs, $500M+, 200+, 50+ countries | 30+ yrs combined, 200+, 70+ markets, 8+ hubs, 100K+ doors, 20+ trade-show years | Use profile numbers only, sparingly. |
| Luxury verticals | 4 (real estate, yachts, private aviation, celebrity partnerships) | — | Deck's **seven** are authoritative (brief §9). |
| Advisory scope | "Financial & wealth advisory, tax and legal delivered through licensed professionals" | Advisory = "corporate structuring, financial planning, legal compliance" | Profile wins; regulated work is always attributed to licensed third parties. |
| I.E.B. claims | "signature turnkey program" | "90-day acceleration", "reduce entry time by up to 70%", "executive amenities" | The 70% / 90-day claims are **unsupported → excluded**. |
| B&S Luxury leadership | not mentioned | "Dora Kovacs' expertise in premium real estate" | **Excluded** until confirmed (sister repo names a different team). |
| Luxury site domain | — | links to `bnsluxury.com` | Use `bns-luxury.com` (verified in sister repo). |
| Investment / wealth language | "Investment advisory — real estate as a gateway" | "Wealth planning", "asset protection", "offshore companies and trusts" | Present only as *coordination through licensed professionals*; never as B&S advice. The live Disclosures page already says so. |
| The Real Deal Miami Forum | — | Luxury deck: exhibitor 2025 & 2026 (Nov 4–5 2026, Booth C5 per sister site) | Public event; may be shown on the Luxury page **after Dario confirms**. Not on the homepage. |

## D. Existing brand tokens

- **Wordmark**: heavy extended grotesque, all caps, "BIZ & STYLE" + tracked tagline "BUSINESS. WEALTH. LIFESTYLE." Supplied in black, white, white-on-black. Strictly monochrome. Never recolour.
- **Palette in the brand**: black and white only. Sister brand (B&S Luxury): Onyx `#0E0D0B`, Sand `#E8DFCE`, Paper `#FAF6EF`; Cormorant Garamond + Inter.
- Current site's navy `#002253` is a Gamma artefact, not a brand colour → dropped.

## E. Available media

| Asset | Status |
|---|---|
| Wordmark SVG (3 variants) + favicons (Android/iPhone/Browser PNG) | ✔ usable |
| Founder portrait `DARIO.jpg` 1024² | ⚠ usable as placeholder; recommend a real editorial portrait session (see manifest) |
| Thyssen Building photo | only on Gamma CDN → **needs original** |
| Miami / warehouse / logistics / aviation / yachting video or stills | **none supplied** |
| Team photography | none |

## F. Technical stack (decided)

Astro 7 · content collections (Insights, categories, authors) · built-in i18n (`en` default, `it`, `es`, `pt`) · MDX · sitemap · Netlify adapter (only the lead endpoint is server-rendered) · self-hosted variable fonts · no animation library (CSS + IntersectionObserver + small vanilla modules) · GTM-ready `dataLayer` bus with no IDs hard-coded.
