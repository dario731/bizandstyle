/**
 * Service landing pages — data-driven. Every claim traces to docs/01-AUDIT.md §A.
 * `regulated` marks where licensed third parties deliver; it is rendered verbatim.
 */
export type Division = 'advisory' | 'commerce' | 'luxury';

export interface Service {
  slug: string;
  division: Division;
  title: string;
  eyebrow: string;
  lede: string;
  definition: { q: string; a: readonly string[] };
  modules: readonly { name: string; line: string }[];
  regulated?: string;
  statement?: readonly string[];
  faqs: readonly { q: string; a: string }[];
  cta: { eyebrow: string; label: string; href: string; name: string };
  programs?: readonly string[];
  mediaId: string;
  seoTitle: string;
  seoDescription: string;
  /** Canonical public path when it is not `/{division}/{slug}`. */
  href?: string;
  /** Hide from hub grids and static paths (demoted / redirected URLs). */
  unlisted?: boolean;
  /** Extra H2 body sections (content deepen). */
  sections?: readonly { title: string; paragraphs: readonly string[] }[];
  /** Differentiated internal links. */
  relatedLinks?: readonly { href: string; label: string; line?: string }[];
  /** H2 over the modules grid (Wave 2 leaves). */
  modulesTitle?: string;
  schema?: {
    serviceName?: string;
    serviceType?: string;
    areaServed?: readonly string[];
    url?: string;
    offers?: { url: string; availability?: string };
    knowsAbout?: readonly string[];
    audience?: string;
    webPageType?: string | readonly string[];
    webPageAbout?: unknown;
    breadcrumbParent?: string;
    breadcrumbName?: string;
    itemList?: { id: string; name: string; items: readonly { name: string }[] };
  };
}

const TELL = '/tell-us';

export const services: readonly Service[] = [
  // ─────────────────────────── ADVISORY ───────────────────────────
  {
    slug: 'business-strategy',
    division: 'advisory',
    title: 'Business strategy',
    eyebrow: 'B&S Advisory · Strategy & growth',
    lede: 'Go-to-market, market intelligence, growth strategy and partnership engineering — built by people who then stay to execute it.',
    definition: {
      q: 'What does business strategy at BIZ & STYLE include?',
      a: [
        'BIZ & STYLE business strategy covers market research and feasibility, go-to-market planning, positioning, country prioritization, entry model and business plan for companies growing between Europe, the United States and Latin America.',
        'The difference from conventional consulting is continuity: the same team that writes the strategy runs the market entry, the distribution and the digital acquisition that follow it.',
      ],
    },
    modules: [
      { name: 'Market intelligence', line: 'Competitors, pricing, regulation, consumer behavior, distribution models and trends — researched in-market.' },
      { name: 'Feasibility & readiness', line: 'Study the company, define objectives, assess resources and evaluate readiness before committing capital.' },
      { name: 'Go-to-market', line: 'Positioning, channel selection, entry model and a business plan built to be executed, not presented.' },
      { name: 'Growth strategy', line: 'Regional expansion sequencing across the U.S., Mexico, Brazil and the wider LATAM region.' },
      { name: 'Partnership engineering', line: 'Joint ventures, alliances and deal structures built to last.' },
      { name: 'Business development', line: 'Creating opportunities before they officially exist through continuous networking.' },
    ],
    modulesTitle: 'What it includes (GTM · market intelligence · growth design)',
    statement: ['Strategy that', 'ends in execution.'],
    faqs: [
      { q: 'Is this a consulting slide deck?', a: 'No. Strategy at BIZ & STYLE is designed by operators who also run Commerce, Digital and Luxury — and it ends in sequenced execution.' },
      { q: 'How is this different from International Expansion?', a: 'Business strategy is the framing and GTM design capability. International expansion is the market-entry service; International Expansion Boost™ is the packaged programme.' },
      { q: 'Which markets do you cover?', a: 'Europe into the Americas, U.S. domestic growth, and LATAM / Caribbean — from Miami Beach HQ.' },
      { q: 'Do licensed professionals draft legal/tax plans?', a: 'Yes where regulated. We design commercial logic; licensed counsel delivers legal, tax and immigration steps.' },
      { q: 'How do I start?', a: '+1 305-549-4289 or info@bizandstyledna.com.' },
    ],
    cta: { eyebrow: 'Building a growth plan for the Americas?', label: "Tell us what you're building", href: `${TELL}?intent=business-development`, name: 'strategy_tell_us' },
    programs: ['international-expansion-boost', 'fractional-executive'],
    mediaId: 'HOME-DIV-ADV',
    seoTitle: 'Business Strategy Americas | BIZ & STYLE',
    seoDescription: 'Go-to-market, market intelligence and growth strategy for Europe to U.S. to LATAM — designed and executed by Miami operators. +1 305-549-4289.',
    sections: [
      {
        title: 'Strategy that ends in execution',
        paragraphs: [
          'Business strategy at BIZ & STYLE is go-to-market, market intelligence and growth design — written by operators who then stay to execute it. It is not a consulting slide deck. The same Miami team that frames the plan runs Commerce, Digital and Luxury, so the strategy ends in sequenced work rather than a PDF left on a table.',
          'Market research and feasibility, positioning, country prioritization, entry model and a business plan sit in one brief. Continuity is the difference: the people who design GTM also open the market, place the product and attach acquisition when those steps are in scope.',
        ],
      },
      {
        title: 'Europe ↔ United States ↔ Latin America',
        paragraphs: [
          'The corridor is Europe into the Americas, U.S. domestic growth, and LATAM / Caribbean — from Miami Beach HQ. Brazil and Mexico are operating realities, not footnotes. Companies growing between those markets get a framing that already knows how Miami sits as the node.',
          'Europe → Americas is the typical origin story. U.S. brands expanding south use the same operators. Strategy names the sequence; licensed counsel delivers legal, tax and immigration steps where the law requires. We design commercial logic. We do not pretend to be the regulated professional.',
        ],
      },
      {
        title: 'How strategy connects to programmes and Commerce',
        paragraphs: [
          'Business strategy is the framing and GTM design capability. International expansion is the market-entry service. International Expansion Boost™ is the packaged programme. This page does not become a programme sales page — it explains the capability that sits upstream of those offers.',
          'Export is not internationalization. When the brief is “become part of the market,” the model lives on the internationalization hub and the expansion service delivers it. Business development opens partners and key accounts. Commerce takes from product to market when inventory and channels are the next step.',
          'Who this is for: mid-sized companies and international brands that need operator-written GTM for Europe ↔ United States ↔ Latin America — not observers writing from another continent. Call +1 305-549-4289 or email info@bizandstyledna.com.',
        ],
      },
      {
        title: 'Who this is for',
        paragraphs: [
          'Founders and commercial leaders entering the United States or Latin America from Europe; U.S. companies sequencing Mexico, Brazil, the Caribbean and wider LATAM; operators who want market intelligence that a Miami team will still be holding when execution starts.',
          'The Miami platform to the Americas is the geo fact behind the capability. Strategy that ends in execution is the operating fact. Those two are why this leaf exists under Advisory — not as a fourth programme.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/advisory/international-expansion', label: 'international expansion service', line: 'The market-entry service this GTM capability frames.' },
      { href: '/programs/international-expansion-boost', label: 'International Expansion Boost™', line: 'The packaged programme — not this capability page.' },
      { href: '/internationalization', label: 'export is not internationalization', line: 'The model: becoming part of the market, not shipping product.' },
      { href: '/advisory/business-development', label: 'business development', line: 'Partner scouting and key accounts once the GTM is set.' },
      { href: '/miami', label: 'Miami platform to the Americas', line: 'Why the geo hub and the strategy team share one city.' },
    ],
    schema: {
      serviceName: 'Business Strategy — Americas',
      serviceType: 'Go-to-market / growth strategy',
      areaServed: ['Miami', 'United States', 'Latin America', 'Europe', 'Caribbean'],
      breadcrumbParent: 'Advisory',
      breadcrumbName: 'Business Strategy',
    },
  },
  {
    slug: 'international-expansion',
    division: 'advisory',
    title: 'International expansion',
    eyebrow: 'B&S Advisory · Internationalization',
    lede: 'U.S. market entry and LATAM expansion with an executive team, real infrastructure and a commercial network already operating in Miami — including founders relocating from New York and Silicon Valley / California.',
    definition: {
      q: 'What is international expansion with BIZ & STYLE?',
      a: [
        'International expansion is the process of making a company part of a new market — not merely selling into it. BIZ & STYLE delivers it through five phases (Understand, Build, Enter, Develop, Establish) and nine pillars, from Miami, with a team on the ground.',
        'Corporate formation, tax, legal, banking and immigration steps are coordinated by us and delivered by licensed professionals.',
      ],
    },
    modules: [
      { name: 'U.S. market entry', line: 'Enter the United States with local presence, a local team and credibility from day one.' },
      { name: 'LATAM expansion', line: 'Use Miami as the platform to reach Mexico, the Caribbean, Brazil and the wider region.' },
      { name: 'Local representation', line: 'A senior executive presence in-market — accountability, speed and trust.' },
      { name: 'Trade missions', line: 'Structured market visits: key accounts, distributors, retailers, trade shows.' },
      { name: 'Partner development', line: 'Distributor and partner scouting, negotiation and long-term relationship management.' },
      { name: 'Continuity', line: 'Returning to the market consistently — not only when there is an opportunity.' },
    ],
    regulated: 'Entity formation, EIN and licences, U.S. bank accounts, tax filings and immigration are delivered by independent licensed professionals whom BIZ & STYLE coordinates.',
    statement: ['Make the U.S. a market.', 'Not an experiment.'],
    faqs: [
      { q: 'Do you help with company formation and visas?', a: 'We coordinate the sequence — entity, EIN, bank account, licences, contracts, visa strategy — and licensed lawyers, accountants and immigration attorneys deliver each regulated step.' },
      { q: 'Why start from Miami?', a: 'Miami is the capital of Latin America and the trade gateway of the Americas: PortMiami, MIA, bonded distribution, international capital and decision makers. HQ since 2017.' },
      { q: 'Can this support founders moving from New York or California / Silicon Valley?', a: 'Yes. Many clients use Miami as operating base while entering the U.S. and LATAM; we sequence presence, infrastructure and partner introductions.' },
      { q: 'How is this different from the internationalization page?', a: '/internationalization explains the model (export vs internationalization, nine pillars). This page is the service that delivers U.S. and LATAM expansion.' },
      { q: 'What about temporary export management?', a: 'TEM is a focused export-manager mandate. International expansion covers the fuller Enter → Establish journey.' },
    ],
    cta: { eyebrow: 'Planning your U.S. expansion?', label: 'Assess your market entry', href: `${TELL}?intent=market-entry&persona=international-company`, name: 'assess_market_entry' },
    programs: ['international-expansion-boost'],
    mediaId: 'HOME-MIAMI-01',
    seoTitle: 'International Expansion from Miami | BIZ & STYLE',
    seoDescription: 'U.S. market entry and LATAM expansion with Miami team, infrastructure and network. Five phases, licensed partners · +1 305-549-4289.',
    sections: [
      {
        title: 'Five phases — Understand → Establish',
        paragraphs: [
          'Understand: study the company, define objectives, assess resources and readiness for the United States and Latin America. Build: market strategy, brand positioning, country prioritization, entry model and a business plan meant to be executed.',
          'Enter: introduce the company to key accounts, distributors, retailers and trade shows. Develop: continuous visits, negotiations, training and relationship management. Establish: long-term customers, reputation, local network and organic growth — Europe → Americas, not a one-off shipment.',
        ],
      },
      {
        title: 'Why start from Miami (incl. NY / Silicon Valley relocators)',
        paragraphs: [
          'Miami is the capital of Latin America and the trade gateway of the Americas: PortMiami, MIA, bonded distribution, international capital and a constant flow of decision makers. Headquarters has been here since 2017 — operators on the ground, not a slide deck from abroad.',
          'Founders relocating from New York or Silicon Valley / California use Miami as the operating base while they enter the U.S. market and open LATAM — Mexico, the Caribbean, Brazil and wider Latin America — with presence, infrastructure and partner introductions sequenced together.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/internationalization', label: 'export is not internationalization', line: 'The model: export vs internationalization, nine pillars, five phases.' },
      { href: '/miami', label: 'why Miami', line: 'The geo hub — platform to the Americas.' },
      { href: '/advisory/temporary-export-management', label: 'temporary export management', line: 'A focused TEM mandate for U.S. and LATAM development.' },
      { href: '/programs/fractional-executive', label: 'fractional expansion leadership', line: 'Embed senior expansion leadership when the mandate is broader than TEM.' },
      { href: '/commerce/bonded-warehouse', label: 'bonded hub', line: 'Duty-deferred storage next to PortMiami and MIA.' },
    ],
    schema: {
      serviceName: 'International Expansion & U.S. Market Entry',
      serviceType: 'International expansion / market entry',
      areaServed: ['Miami', 'United States', 'Latin America', 'Caribbean', 'Europe'],
    },
  },
  {
    slug: 'fractional-executive',
    division: 'advisory',
    title: 'Fractional executive',
    eyebrow: 'B&S Advisory · Capability',
    lede: 'Capability — how a fractional executive works in the Americas: senior commercial, expansion and project leadership from Miami, without building an entire executive organization on day one.',
    definition: {
      q: 'What is a fractional executive from BIZ & STYLE?',
      a: [
        'A fractional executive is a senior operator who takes an executive role in your company part-time or for a defined mandate: commercial leadership, international expansion leadership, strategic project leadership or market representation in the Americas.',
        'BIZ & STYLE fractional executives bring the platform with them — infrastructure, network, technology — so leadership arrives with capability already in place.',
      ],
    },
    modules: [
      { name: 'Fractional commercial leadership', line: 'A senior head of commerce or business development for the Americas.' },
      { name: 'International expansion leadership', line: 'One executive owning the market-entry programme end to end.' },
      { name: 'Strategic project leadership', line: 'Launches, repositioning, channel builds, partnerships.' },
      { name: 'Market representation', line: 'Your company represented by a senior executive in Miami and the region.' },
    ],
    statement: ['Senior leadership.', 'Embedded when you need it.'],
    faqs: [
      { q: 'How does a fractional mandate work?', a: 'We define the role, objectives and cadence. The executive works inside your organization with your team and reports to your leadership, backed by the BIZ & STYLE platform.' },
      { q: 'Is it suitable for smaller companies?', a: 'Yes. It is designed for companies that need senior capability before they can justify a full executive team in a new market.' },
      { q: 'What roles can a fractional executive cover?', a: 'Fractional commercial leadership, international expansion leadership, strategic project leadership, or market representation in the Americas.' },
      { q: 'Where do I buy / start the programme?', a: 'The packaged Fractional Executive programme lives at /programs/fractional-executive — role definition, embedded leadership, platform backing and transition.' },
      { q: 'How is this different from temporary export management?', a: 'Fractional is senior leadership across commercial/expansion/projects. TEM is specifically export-market development for U.S./LATAM.' },
    ],
    cta: { eyebrow: 'Ready to embed senior leadership?', label: 'Start with the Fractional Executive programme', href: '/programs/fractional-executive', name: 'fractional_programme' },
    programs: ['fractional-executive'],
    mediaId: 'HOME-DIV-ADV',
    seoTitle: 'Fractional Executive Explained · Americas | BIZ & STYLE',
    seoDescription: 'What a fractional executive does in the Americas — commercial, expansion and project leadership from Miami. Capability · +1 305-549-4289.',
    sections: [
      {
        title: 'Capability vs programme — when to start the programme',
        paragraphs: [
          'This page explains the capability: what a fractional executive is and how the mandate works inside your company. It is not a package SKU, not pricing, and not the place to “buy a programme.”',
          'When you are ready to start — role definition, embedded leadership, platform backing and a transition plan — the packaged Fractional Executive programme is the commercial offer. Start there. This page stays the explainer.',
        ],
      },
      {
        title: 'Market representation in Miami and the Americas',
        paragraphs: [
          'A fractional executive can represent your company in Miami and across the Americas: United States and Latin America, with a senior presence that buyers, distributors and partners can meet.',
          'Leadership arrives with the platform — so market representation is not a lone consultant with a laptop. It is an operator backed by headquarters, infrastructure and a commercial network already on the ground.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/programs/fractional-executive', label: 'Start with the Fractional Executive programme', line: 'The packaged programme — role, cadence, platform, transition.' },
      { href: '/advisory/temporary-export-management', label: 'temporary export management', line: 'Export-market development for U.S. and LATAM — a different mandate.' },
      { href: '/advisory/international-expansion', label: 'international expansion leadership', line: 'The fuller Enter → Establish service when the brief is market entry.' },
    ],
    schema: {
      serviceName: 'Fractional Executive Capability',
      serviceType: 'Fractional executive / embedded senior leadership',
      areaServed: ['Miami', 'United States', 'Latin America'],
      url: 'https://bizandstyledna.com/programs/fractional-executive',
      webPageAbout: 'Capability explainer — what a fractional executive does for Americas expansion from Miami.',
    },
  },
  {
    slug: 'temporary-export-management',
    division: 'advisory',
    title: 'Temporary export management',
    eyebrow: 'B&S Advisory · Internationalization',
    lede: 'A temporary export manager who runs your U.S. and LATAM development from Miami — until the market is established enough to justify your own structure.',
    definition: {
      q: 'What is temporary export management?',
      a: [
        'Temporary export management (TEM) places an experienced export manager inside your company for a defined period to open and develop the U.S. and Latin American markets: prospecting, key accounts, distributors, trade shows, negotiations and follow-up.',
        'At BIZ & STYLE the TEM operates from Miami with warehousing, logistics and a commercial network already in place, so development is not limited to introductions.',
      ],
    },
    modules: [
      { name: 'Market prospecting', line: 'Identify and qualify distributors, retailers and key accounts.' },
      { name: 'Commercial development', line: 'Meetings, negotiations, pricing and terms, in-market.' },
      { name: 'Trade shows & visits', line: 'Presence where the market looks — consistently.' },
      { name: 'Handover', line: 'Documented relationships and a structure you can take in-house.' },
    ],
    statement: ['Export management', 'with infrastructure behind it.'],
    faqs: [
      { q: 'How long is a typical TEM engagement?', a: 'Long enough to move from introduction to established customers — usually more than one season. Cadence is agreed at the start and reviewed against objectives.' },
      { q: 'What does a temporary export manager actually do?', a: 'Prospect and qualify distributors, retailers and key accounts; run commercial development in-market; cover trade shows and visits; document relationships for handover.' },
      { q: 'How is TEM different from a fractional executive?', a: 'TEM is export- and market-development focused for U.S./LATAM. Fractional executive is broader senior commercial, expansion or project leadership. See both pages — pick by mandate.' },
      { q: 'Why Miami?', a: 'Warehousing, logistics and a commercial network already operate here, so development is not limited to introductions.' },
      { q: 'Who is TEM for?', a: 'Brands ready to open the Americas seriously but not yet ready to hire a full in-house export organization.' },
    ],
    cta: { eyebrow: 'Looking for a temporary export manager for the Americas?', label: 'Assess your market entry', href: `${TELL}?intent=market-entry&persona=international-company`, name: 'tem_tell_us' },
    programs: ['international-expansion-boost'],
    mediaId: 'HOME-DIV-COM',
    seoTitle: 'Temporary Export Manager · U.S. & LATAM | BIZ & STYLE',
    seoDescription: 'Temporary export manager from Miami for U.S. and LATAM: prospecting, key accounts, trade shows, handover. Infrastructure included · +1 305-549-4289.',
    sections: [
      {
        title: 'Why TEM from Miami beats remote export consultants',
        paragraphs: [
          'A remote export consultant writes lists. A temporary export manager from Miami works the market: distributors, retailers and key accounts in the United States, LATAM and the Caribbean — Mexico and Brazil included — with trade-show cadence and in-market visits.',
          'Warehousing, logistics and a commercial network already operate here. Development is not limited to introductions. The temporary export manager can move product conversation into real operating infrastructure when the account is ready.',
        ],
      },
      {
        title: 'U.S. and LATAM development with infrastructure behind it',
        paragraphs: [
          'TEM at BIZ & STYLE is export- and market-development focused: prospecting, qualification, commercial development, trade shows and documented handover. It is not “fractional” and it is not the internationalization thought-hub — those live on their own pages.',
          'United States and Latin America share one Miami cadence. The same temporary export manager can open northbound and southbound accounts without standing up a second organization, because the platform — team, warehouse, network — is already on the ground.',
        ],
      },
      {
        title: 'Handover — when your own structure takes over',
        paragraphs: [
          'The engagement lasts long enough to move from introduction to established customers — usually more than one season. Cadence is agreed at the start and reviewed against objectives.',
          'Handover is the point: documented relationships, terms, next actions and a structure your own export organization can take in-house when the Americas justify the hire. TEM is temporary by design.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/programs/fractional-executive', label: 'broader fractional executive programme', line: 'When the mandate is senior commercial, expansion or project leadership — not TEM.' },
      { href: '/advisory/international-expansion', label: 'full international expansion service', line: 'The fuller Enter → Establish journey beyond an export-manager mandate.' },
      { href: '/commerce/bonded-warehouse', label: 'Miami bonded infrastructure', line: 'Duty-deferred storage behind the commercial development.' },
      { href: '/internationalization', label: 'export vs internationalization', line: 'The model that explains why TEM is not the same as becoming part of the market.' },
    ],
    schema: {
      serviceName: 'Temporary Export Management',
      serviceType: 'Temporary export manager / export management',
      areaServed: ['United States', 'Latin America', 'Caribbean', 'Miami'],
    },
  },
  {
    slug: 'business-development',
    division: 'advisory',
    title: 'Business development',
    eyebrow: 'B&S Advisory · Growth',
    lede: 'Creating opportunities before they officially exist — through relationships, continuous networking and a commercial network built over years in the Americas.',
    definition: {
      q: 'What does BIZ & STYLE business development mean?',
      a: [
        'Business development at BIZ & STYLE is the continuous creation of commercial opportunity: partner scouting and acquisition, key-account development, trade missions, and the cultivation of relationships with retailers, distributors, buyers, institutions and industry leaders.',
        'It is delivered through a proprietary network of more than 200 commercial partners across the United States and Latin America — from Miami Beach headquarters, with trade-mission cadence across key cities and buyer concentrations.',
      ],
    },
    modules: [
      { name: 'Partner scouting & acquisition', line: 'The right distributors, agents and partners — qualified, met, negotiated.' },
      { name: 'Key-account development', line: 'Decision makers identified, relationships built, opportunities followed through.' },
      { name: 'Trade missions', line: 'Structured, repeated presence in the market.' },
      { name: 'Commercial network', line: '200+ commercial partners across the U.S. and LATAM.' },
    ],
    modulesTitle: 'What it includes',
    statement: ['Relationships', 'are capital.'],
    faqs: [
      { q: 'Do you publish your partner list?', a: 'No. Discretion is part of the relationship. Selected credentials are available on request and, when appropriate, under NDA.' },
      { q: 'Is this the same as the International Expansion Boost™ programme?', a: 'No. This page explains the BD capability. International Expansion Boost™ is the packaged market-entry programme that can include BD among other workstreams.' },
      { q: 'Which markets do you cover?', a: 'United States and Latin America from Miami HQ — with trade-mission cadence across key cities and buyer concentrations.' },
      { q: 'Who is business development for?', a: 'Brands and manufacturers who need distributors, agents, retailers and key accounts opened — not a slide deck of “introductions.”' },
      { q: 'How do I start?', a: 'Call or WhatsApp +1 305-549-4289, or email info@bizandstyledna.com. A strategic conversation scopes whether capability engagement or a signature programme fits.' },
    ],
    cta: { eyebrow: 'Need doors opened in the Americas?', label: "Tell us what you're building", href: `${TELL}?intent=business-development`, name: 'bd_tell_us' },
    programs: ['international-expansion-boost', 'fractional-executive'],
    mediaId: 'HOME-DIV-ADV',
    seoTitle: 'Business Development Americas | BIZ & STYLE',
    seoDescription: 'Partner scouting, key accounts, trade missions and a 200+ commercial network across the U.S. and LATAM — from Miami. +1 305-549-4289.',
    sections: [
      {
        title: 'Relationships are capital — how the Americas network works',
        paragraphs: [
          'A list of names is not a network. The BIZ & STYLE commercial network is more than 200 commercial partners across the United States and Latin America — distributors, agents, retailers, buyers and institutions cultivated over years of being in the room, not emailed from another continent.',
          'Discretion is part of the relationship. We do not publish a partner directory. Selected credentials are available on request and, when appropriate, under NDA. What we do publish is the method: partner scouting and acquisition, key-account development, and trade missions that return to the same cities until doors stay open.',
          'Business development here is not a slide deck of “introductions.” Brands and manufacturers who need distributors, agents, retailers and key accounts opened get operators who already know how those accounts buy — and who will follow through after the first meeting.',
        ],
      },
      {
        title: 'From Miami: U.S. · LATAM · Caribbean presence',
        paragraphs: [
          'Miami Beach is the platform. From headquarters we cover the United States and Latin America — LATAM in the commercial sense, including Mexico, Brazil and the Caribbean — with trade-mission cadence across key cities and buyer concentrations.',
          'Europe → Americas is the typical motion: a company that already has a product and a reputation at home uses Miami as the node where U.S. and LATAM accounts can be opened without standing up a second organization. Presence is repeated. Continuity is the product.',
          'The same Miami calendar serves northbound and southbound markets. That is why BD sits inside B&S Advisory as a capability — not as a travelling consultant’s itinerary — and why the 200+ commercial partners are an Americas network, not a U.S.-only Rolodex.',
        ],
      },
      {
        title: 'How BD connects to programmes and Commerce',
        paragraphs: [
          'This page explains the BD capability. It is not a programmes sales page. International Expansion Boost™ is the packaged market-entry programme that can include BD among other workstreams. Partnership engineering structures the lasting commercial relationship once the right counterpart is found.',
          'When the opportunity becomes physical — product, inventory, channels — B&S Commerce takes from product to market: distribution, warehousing and fulfillment from the same Miami platform to the Americas. Advisory opens the door; Commerce moves the goods.',
          'A strategic conversation scopes whether a capability engagement or a signature programme fits. Call or WhatsApp +1 305-549-4289, or email info@bizandstyledna.com.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/advisory', label: 'B&S Advisory capabilities', line: 'The capability index — strategy and growth, à la carte.' },
      { href: '/advisory/partnership-engineering', label: 'partnership engineering for JVs and distribution', line: 'Structure the relationship once the right counterpart is found.' },
      { href: '/programs/international-expansion-boost', label: 'International Expansion Boost™ programme', line: 'The packaged market-entry offer that can include BD.' },
      { href: '/commerce', label: 'from product to market', line: 'Trade and distribution when the opportunity becomes physical.' },
      { href: '/miami', label: 'Miami platform to the Americas', line: 'Why the geo hub and the commercial network share one city.' },
    ],
    schema: {
      serviceName: 'Business Development — Americas',
      serviceType: 'Business development / partner acquisition',
      areaServed: ['Miami', 'United States', 'Latin America', 'Caribbean'],
      breadcrumbParent: 'Advisory',
      breadcrumbName: 'Business Development',
    },
  },
  {
    slug: 'partnership-engineering',
    division: 'advisory',
    title: 'Partnership engineering',
    eyebrow: 'B&S Advisory · Structures',
    lede: 'Joint ventures, alliances, licensing and distribution agreements designed to last — with the commercial logic done by us and the contracts by lawyers.',
    definition: {
      q: 'What is partnership engineering?',
      a: [
        'Partnership engineering is the design of the commercial relationship between two companies: the model (joint venture, alliance, licensing, distribution, representation), the economics, the responsibilities and the governance.',
        'BIZ & STYLE engineers the partnership commercially; contract drafting and legal compliance are delivered by licensed corporate lawyers.',
      ],
    },
    modules: [
      { name: 'Joint ventures & alliances', line: 'Structures that align incentives over years, not quarters.' },
      { name: 'Licensing & representation', line: 'Agreements that expand brand presence across markets.' },
      { name: 'Distribution agreements', line: 'Exclusivity, territories, targets and performance clauses that work in practice.' },
      { name: 'Governance', line: 'Reporting, reviews and exits designed before they are needed.' },
    ],
    modulesTitle: 'What it includes',
    regulated: 'Contracts, legal compliance and intellectual-property registration are delivered by independent licensed lawyers coordinated by BIZ & STYLE.',
    faqs: [
      { q: 'Do you draft the contracts?', a: 'We design the commercial structure and coordinate the process. Contracts are drafted and reviewed by licensed corporate and commercial lawyers from our network.' },
      { q: 'What types of partnerships do you engineer?', a: 'Joint ventures, alliances, licensing, distribution and representation — with economics, territories, targets, exclusivity and exits designed before they are needed.' },
      { q: 'Is this the same as business development?', a: 'BD creates and opens opportunities. Partnership engineering structures the lasting commercial relationship once the right counterpart is found.' },
      { q: 'Who is this for?', a: 'Brands and manufacturers entering the U.S. or LATAM who need durable partner models — not one-off intro emails.' },
      { q: 'How do I start?', a: 'Contact info@bizandstyledna.com or +1 305-549-4289 for a scoping conversation.' },
    ],
    cta: { eyebrow: 'Structuring a partnership in the Americas?', label: "Tell us what you're building", href: `${TELL}?intent=partnership`, name: 'pe_tell_us' },
    programs: ['international-expansion-boost'],
    mediaId: 'HOME-DIV-ADV',
    seoTitle: 'Partnership Engineering | BIZ & STYLE',
    seoDescription: 'JVs, licensing, distribution and alliances engineered commercially in Miami — contracts by licensed lawyers. +1 305-549-4289.',
    sections: [
      {
        title: 'Commercial logic first — then contracts',
        paragraphs: [
          'BIZ & STYLE engineers commercial logic; licensed lawyers draft contracts. The sequence matters. Economics, territories, targets, exclusivity and exits are designed as a commercial model before anyone opens a word processor — so the paper describes a relationship that can actually operate in the United States, Latin America and the wider Americas.',
          'Joint ventures, alliances, licensing, distribution and representation each need a different shape. We pick the model, align incentives over years rather than quarters, and write the responsibilities so both sides can live with them. This is not legal advice. It is commercial design from Miami, for brands and manufacturers entering the U.S. or LATAM who need durable partner models — not one-off intro emails.',
        ],
      },
      {
        title: 'Delivered with licensed professionals',
        paragraphs: [
          'Contracts are drafted and reviewed by licensed corporate and commercial lawyers from our network. Intellectual-property registration and legal compliance follow the same rule: we coordinate the process; they deliver and remain responsible.',
          'Territories and exclusivity are commercial terms in that design — who sells where, against what targets, with what exit — not a substitute for counsel. Europe-origin companies using Miami as the Americas node get one commercial structure that licensed professionals can then paper for the jurisdictions that apply.',
        ],
      },
      {
        title: 'When BD becomes a structured partnership',
        paragraphs: [
          'Business development and partner scouting create and open opportunities. Partnership engineering starts when the right counterpart is found and the relationship has to last: governance, reporting, reviews and exits designed before they are needed.',
          'Brand expansion and representation on the Commerce side is often the operating expression of that structure. International expansion service delivers U.S. and LATAM presence; the packaged market-entry programme can include partnership workstreams when the brief is a named engagement rather than a single agreement.',
          'A scoping conversation maps which of those doors fits. Contact info@bizandstyledna.com or +1 305-549-4289.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/advisory/business-development', label: 'business development and partner scouting', line: 'BD creates and opens the opportunity this page then structures.' },
      { href: '/commerce/brand-expansion', label: 'brand expansion and representation', line: 'How a structured partnership often runs on the Commerce side.' },
      { href: '/advisory/international-expansion', label: 'international expansion service', line: 'U.S. and LATAM delivery when the brief is market entry.' },
      { href: '/programs/international-expansion-boost', label: 'packaged market-entry programme', line: 'The named Boost™ offer that can include partnership workstreams.' },
      { href: '/advisory', label: 'B&S Advisory', line: 'The capability hub — strategy and growth.' },
    ],
    schema: {
      serviceName: 'Partnership Engineering',
      serviceType: 'Joint venture / licensing / distribution agreement design',
      areaServed: ['Miami', 'United States', 'Latin America', 'Europe'],
      breadcrumbParent: 'Advisory',
      breadcrumbName: 'Partnership Engineering',
    },
  },
  {
    slug: 'digital-growth',
    division: 'advisory',
    title: 'Digital growth',
    eyebrow: 'B&S Advisory · Digital engine',
    lede: 'Digital business infrastructure — websites, landing pages, Google and Meta, SEO and GEO, CRM and automation — built, owned and optimized in-house.',
    definition: {
      q: 'What is digital growth at BIZ & STYLE?',
      a: [
        'Digital growth is the acquisition system that connects attention to pipeline: intelligence and positioning, website and landing pages, content and SEO/GEO, Google and Meta campaigns, lead capture, CRM, qualification, automation, nurture, attribution and optimization — in one loop.',
        'BIZ & STYLE runs the same system for its own divisions, including B&S Luxury, before offering it to clients.',
      ],
    },
    modules: [
      { name: 'Web strategy & landing pages', line: 'Dedicated websites and pages designed to convert, not to decorate.' },
      { name: 'Google & Meta', line: 'Paid acquisition with international targeting.' },
      { name: 'SEO & GEO', line: 'Search and AI-search visibility built on entity clarity and structured content.' },
      { name: 'CRM & automation', line: 'Capture, qualification, routing, nurture, retargeting, email.' },
      { name: 'Analytics & attribution', line: 'Know what created every opportunity.' },
      { name: 'Conversion optimization', line: 'The system gets smarter with every interaction.' },
    ],
    statement: ['From click', 'to client.'],
    faqs: [
      { q: 'Is BIZ & STYLE a marketing agency?', a: 'No. We build and operate digital business infrastructure — acquisition connected to CRM and pipeline — and we run it for our own ventures first.' },
    ],
    cta: { eyebrow: 'Want to see where your acquisition system is leaking?', label: 'Request a digital growth review', href: `${TELL}?intent=digital-growth`, name: 'digital_growth_review' },
    programs: ['digital-growth-engine'],
    mediaId: 'HOME-DIV-ADV',
    unlisted: true,
    seoTitle: 'Digital Growth — Digital Business Infrastructure | BIZ & STYLE',
    seoDescription: 'Websites, landing pages, Google and Meta, SEO and GEO, CRM and automation — an owned acquisition system built and optimized in-house in Miami.',
  },
  {
    slug: 'lead-generation',
    division: 'advisory',
    title: 'Lead generation',
    eyebrow: 'B&S Advisory · Digital engine',
    lede: 'Qualified demand from Google, Meta, search and AI search — captured, scored, routed and nurtured into pipeline.',
    definition: {
      q: 'How does BIZ & STYLE generate leads?',
      a: [
        'Lead generation combines paid acquisition (Google, Meta, international targeting), organic and AI-search visibility, dedicated landing pages, and a CRM that captures, qualifies and routes every inquiry with its attribution.',
        'The same system generated high-net-worth opportunities for B&S Luxury in some of the most relationship-driven segments of the Miami market.',
      ],
    },
    modules: [
      { name: 'Acquisition', line: 'Google, Meta, SEO, GEO / AI search, international targeting.' },
      { name: 'Destinations', line: 'Dedicated websites, landing pages, development pages.' },
      { name: 'Capture & qualification', line: 'Forms that adapt to the visitor, scoring and routing rules.' },
      { name: 'Nurture', line: 'Automation, retargeting and email until the lead is ready.' },
    ],
    faqs: [
      { q: 'Which CRM do you work with?', a: 'The architecture is CRM-agnostic. Forms capture source, UTM, landing page, persona and intent so any CRM can segment and score.' },
    ],
    cta: { eyebrow: 'Need qualified demand, not just traffic?', label: 'Request a digital growth review', href: `${TELL}?intent=digital-growth`, name: 'leadgen_review' },
    programs: ['digital-growth-engine'],
    mediaId: 'HOME-DIV-ADV',
    href: '/lead-generation',
    seoTitle: 'Lead Generation Systems — Google, Meta, SEO, CRM | BIZ & STYLE',
    seoDescription: 'Qualified lead generation from paid, organic and AI search, captured and nurtured through CRM — built and operated in-house by BIZ & STYLE.',
  },
  {
    slug: 'crm-automation',
    division: 'advisory',
    title: 'CRM & automation',
    eyebrow: 'B&S Advisory · Digital engine',
    lede: 'The system of record for every relationship — capture, qualification, pipeline, automation and attribution, connected to acquisition.',
    definition: {
      q: 'What does CRM and automation at BIZ & STYLE cover?',
      a: [
        'CRM and automation means designing how leads enter, are scored, routed, nurtured and followed up — with lead source, campaign, persona and intent recorded from the first visit — and automating the steps that should not depend on someone remembering.',
        'It is a capability under Advisory that feeds the Digital Engine — vendor-agnostic, operated from Miami Beach HQ for companies across the Americas.',
      ],
    },
    modules: [
      { name: 'CRM setup', line: 'Pipeline, stages, fields and segmentation designed around your sales reality.' },
      { name: 'Lead routing & scoring', line: 'The right lead to the right person, ranked by fit and intent.' },
      { name: 'Automation & nurture', line: 'Email, retargeting and task automation that keep relationships warm.' },
      { name: 'Attribution & reporting', line: 'From click to closed opportunity.' },
    ],
    modulesTitle: 'What it includes',
    faqs: [
      { q: 'Can you integrate with our existing CRM?', a: 'Yes. The lead architecture is vendor-agnostic and forwards normalized, scored leads to any CRM or automation platform through a webhook.' },
      { q: 'Is this a marketing-agency retainer?', a: 'No. We design and operate CRM and automation as part of digital business infrastructure — the same loop we run for our own divisions.' },
      { q: 'How does this relate to the Digital Growth Engine™?', a: 'CRM & automation is a capability. Digital Growth Engine™ is the packaged programme that can include CRM with web, paid, SEO/GEO and attribution.' },
      { q: 'Do you replace our sales team’s process?', a: 'We design stages, fields, scoring and automation around your sales reality — then connect capture to pipeline so follow-up does not depend on memory.' },
      { q: 'How do I start?', a: 'Email info@bizandstyledna.com or call +1 305-549-4289. Most clients enter via Digital Engine or a signature programme scoping call.' },
    ],
    cta: { eyebrow: 'Is your CRM a database or a system?', label: 'Request a digital growth review', href: `${TELL}?intent=digital-growth`, name: 'crm_review' },
    programs: ['digital-growth-engine'],
    mediaId: 'HOME-DIV-ADV',
    seoTitle: 'CRM & Marketing Automation | BIZ & STYLE',
    seoDescription: 'CRM setup, lead routing, nurture and attribution connected to acquisition — vendor-agnostic from Miami. +1 305-549-4289.',
    sections: [
      {
        title: 'Connected to acquisition — not a standalone tool project',
        paragraphs: [
          'A CRM that nobody feeds is a database. BIZ & STYLE designs CRM and automation as part of digital business infrastructure — the same loop we run for our own divisions — so capture, scoring, routing and nurture sit next to acquisition rather than in a side project.',
          'Stages, fields and automation are built around your sales reality in the United States and Latin America. Follow-up does not depend on memory. Attribution runs from click to closed opportunity. This is not a marketing-agency retainer and not a competing acquisition SERP.',
        ],
      },
      {
        title: 'Vendor-agnostic architecture (webhook → your CRM)',
        paragraphs: [
          'The lead architecture is vendor-agnostic. Normalized, scored leads forward to any CRM or automation platform through a webhook — your stack, your fields, your owners.',
          'From Miami Beach HQ we implement the handshake: source, campaign, landing page, persona and intent on the first visit, then routing rules that send the right lead to the right person. You keep the system of record. We keep the loop honest.',
        ],
      },
      {
        title: 'Where this sits vs Digital Engine and Lead Generation',
        paragraphs: [
          'CRM & automation is a capability under Advisory. Digital business infrastructure — the owned loop from click to client — lives on the Digital Engine. Digital Growth Engine™ is the packaged programme that can include CRM with web, paid, SEO/GEO and attribution.',
          'High-ticket lead generation remains a separate offer. This page does not rewrite it. Most clients enter via Digital Engine or a signature programme scoping call. Email info@bizandstyledna.com or call +1 305-549-4289.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/digital-engine', label: 'digital business infrastructure', line: 'The owned loop this capability feeds — from click to client.' },
      { href: '/programs/digital-growth-engine', label: 'Digital Growth Engine™ programme', line: 'The packaged programme that can include CRM with the rest of the stack.' },
      { href: '/lead-generation/', label: 'high-ticket lead generation', line: 'The dedicated demand offer — we do not rewrite that URL.' },
      { href: '/advisory', label: 'B&S Advisory', line: 'The capability hub this leaf sits under.' },
    ],
    schema: {
      serviceName: 'CRM & Marketing Automation',
      serviceType: 'CRM setup / marketing automation',
      areaServed: ['Miami', 'United States', 'Latin America', 'Americas'],
      breadcrumbParent: 'Advisory',
      breadcrumbName: 'CRM & Automation',
    },
  },
  {
    slug: 'ai-digital-transformation',
    division: 'advisory',
    title: 'AI & digital transformation',
    eyebrow: 'B&S Advisory · Digital engine',
    lede: 'AI-enabled workflows inside sales, marketing and operations — applied where they save time and create opportunity, not as a slogan.',
    definition: {
      q: 'How does BIZ & STYLE apply AI in business?',
      a: [
        'BIZ & STYLE applies AI-enabled workflows to the parts of a business where they create measurable leverage: content and SEO/GEO production, lead qualification and routing, CRM enrichment, reporting, and operational automation in commerce and logistics.',
        'We use the same tools inside our own divisions before recommending them.',
      ],
    },
    modules: [
      { name: 'AI in acquisition', line: 'Content systems, GEO / AI-search optimization, campaign intelligence.' },
      { name: 'AI in sales', line: 'Qualification, enrichment, follow-up drafting and pipeline hygiene.' },
      { name: 'AI in operations', line: 'Order, inventory and reporting automation with soft-ERP tooling.' },
      { name: 'Governance', line: 'What to automate, what to keep human, and how to measure it.' },
    ],
    modulesTitle: 'What it includes (acquisition · sales · operations workflows)',
    faqs: [
      { q: 'Is this a separate AI agency engagement?', a: 'No. AI & digital transformation is an Advisory capability — applied where workflows create leverage, inside the same platform that runs Digital Engine and Commerce.' },
      { q: 'How does this relate to the Digital Engine?', a: 'The Digital Engine is owned acquisition infrastructure. This page covers AI-enabled workflows that can sit on top of that infrastructure — sales, ops and attribution loops.' },
      { q: 'Do you replace our team with bots?', a: 'No. We apply AI where it removes friction and scoring/routing delay — humans keep judgment on high-ticket and relationship work.' },
      { q: 'Who is this for?', a: 'Mid-sized companies and international brands that already have (or are building) digital infrastructure and want operator-tested AI leverage — not slideware.' },
      { q: 'How do I start?', a: 'Email info@bizandstyledna.com or call +1 305-549-4289. Most clients enter via Digital Engine or a signature programme scoping call.' },
    ],
    cta: { eyebrow: 'Where could AI actually move your numbers?', label: 'Request a digital growth review', href: `${TELL}?intent=digital-growth`, name: 'ai_review' },
    programs: ['digital-growth-engine'],
    mediaId: 'HOME-DIV-ADV',
    seoTitle: 'AI & Digital Transformation | BIZ & STYLE',
    seoDescription: 'AI workflows in acquisition, sales and ops — applied where they create leverage, tested first inside BIZ & STYLE. Miami · +1 305-549-4289.',
    sections: [
      {
        title: 'Where AI creates leverage for mid-sized companies',
        paragraphs: [
          'AI & digital transformation is an Advisory capability — not a separate AI agency engagement and not a rewrite of the Digital Engine. We apply AI-enabled workflows in acquisition, sales and operations where they remove friction: content and GEO production, lead qualification and routing, CRM enrichment, reporting, and operational automation in commerce and logistics.',
          'Humans keep judgment on high-ticket and relationship work. Bots do not replace the team. The point is leverage — scoring and routing delay, draft follow-up, inventory and reporting loops — tested first inside BIZ & STYLE ventures in Miami before it is offered to clients across the Americas, the United States and Latin America.',
        ],
      },
      {
        title: 'Tested first inside BIZ & STYLE ventures',
        paragraphs: [
          'The same tools run inside our own divisions — including Commerce and Luxury — before we recommend them. That is the operator rule for this leaf: no slideware, no “AI transformation” theatre. Mid-sized companies and international brands that already have (or are building) digital infrastructure get workflows that have already lived on a real pipeline.',
          'Where custom development is needed we work with qualified technology partners. We design and implement on top of existing platforms. Miami Beach is where those loops are operated.',
        ],
      },
      {
        title: 'How this sits vs Digital Engine and programmes',
        paragraphs: [
          'The Digital Engine is owned acquisition infrastructure — the “from click to client” story. This page never competes with that H1. AI-enabled workflows can sit on top of that infrastructure: sales, ops and attribution loops. Digital Growth Engine™ is the packaged programme that builds the owned stack.',
          'High-ticket lead generation stays on its own URL. CRM & automation is the neighbouring capability for capture, scoring and nurture. Most clients enter via Digital Engine or a signature programme scoping call — not a standalone AI retainer.',
        ],
      },
      {
        title: 'From Miami to the Americas',
        paragraphs: [
          'Delivery is from Miami and Miami Beach, for companies operating across the United States, Latin America and the wider Americas. The capability lives inside the same platform that runs Digital Engine and Commerce — one team, one stack, operator-tested leverage.',
          'Email info@bizandstyledna.com or call +1 305-549-4289 to scope whether AI workflows attach to an existing engine or to a programme build.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/digital-engine', label: 'digital business infrastructure', line: 'The owned acquisition loop — primary digital URL.' },
      { href: '/programs/digital-growth-engine', label: 'Digital Growth Engine™ programme', line: 'The packaged programme that can include these workflows.' },
      { href: '/advisory/crm-automation', label: 'CRM & automation capability', line: 'Capture, scoring and nurture next to AI leverage.' },
      { href: '/lead-generation/', label: 'high-ticket lead generation', line: 'The dedicated high-ticket demand offer — unchanged.' },
      { href: '/advisory', label: 'B&S Advisory', line: 'The capability hub this leaf sits under.' },
    ],
    schema: {
      serviceName: 'AI & Digital Transformation',
      serviceType: 'AI-enabled business workflows / digital transformation',
      areaServed: ['Miami', 'United States', 'Latin America', 'Americas'],
      breadcrumbParent: 'Advisory',
      breadcrumbName: 'AI & Digital Transformation',
    },
  },

  // ─────────────────────────── COMMERCE ───────────────────────────
  {
    slug: 'distribution',
    division: 'commerce',
    title: 'Distribution',
    eyebrow: 'B&S Commerce · Trade & distribution',
    lede: 'Domestic retail, travel retail and e-commerce distribution in the United States and Latin America for premium consumer brands — from one Miami hub.',
    definition: {
      q: 'What distribution does B&S Commerce provide?',
      a: [
        'B&S Commerce distributes premium consumer goods — beauty and personal care, food and beverage, accessories, apparel — across domestic retail (department stores, malls, chains, drugstores), travel retail (duty-free, cruise lines, in-flight) and e-commerce (brand sites, marketplaces, social commerce).',
        'Distribution is operated from domestic and bonded warehousing in Miami, with fulfillment and logistics in-house.',
      ],
    },
    modules: [
      { name: 'Domestic retail', line: 'Department stores, shopping malls, retail chains, drugstores.' },
      { name: 'Travel retail', line: 'Duty-free, cruise lines, in-flight.' },
      { name: 'E-commerce', line: 'Brand .com, marketplaces, social commerce.' },
      { name: 'Focus categories', line: 'Beauty & personal care · Food & beverage · Accessories · Apparel.' },
    ],
    modulesTitle: 'What it includes (retail · travel retail · e-commerce placement)',
    statement: ['From product', 'to market.'],
    faqs: [
      { q: 'Which channels do you cover?', a: 'Domestic retail (department stores, malls, chains, drugstores), travel retail (duty-free, cruise, in-flight) and e-commerce (brand .com, marketplaces, social commerce).' },
      { q: 'Do you only place product, or also operate inventory?', a: 'Placement and ongoing supply. Inventory can sit in domestic or bonded Miami facilities depending on duty and re-export needs.' },
      { q: 'Is Amazon included?', a: 'Amazon and other marketplaces are covered on /commerce/marketplaces. Distribution here is the broader channel map including retail and travel retail.' },
      { q: 'Europe brands entering the Americas?', a: 'Yes — common path is Europe → Miami hub → U.S. and/or LATAM distribution.' },
      { q: 'How do I start?', a: '+1 305-549-4289 or info@bizandstyledna.com.' },
    ],
    cta: { eyebrow: 'Looking for U.S. or LATAM distribution?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution&persona=consumer-brand`, name: 'talk_commerce' },
    mediaId: 'HOME-DIV-COM',
    seoTitle: 'U.S. & LATAM Distribution | B&S Commerce',
    seoDescription: 'Domestic retail, travel retail and e-commerce distribution across the U.S. and LATAM from Miami warehousing. +1 305-549-4289.',
    sections: [
      {
        title: 'United States and Latin America from one Miami hub',
        paragraphs: [
          'Distribution at B&S Commerce is channel placement — domestic retail, travel retail and e-commerce — across the United States and Latin America from one Miami hub. PortMiami cargo and a warehouse already in the city make placement and ongoing supply the same conversation, not a broker introduction followed by a scramble for inventory.',
          'Europe brands entering the Americas commonly land Europe → Miami hub → U.S. and/or LATAM distribution. Brazil, Mexico and the Caribbean sit on that map. Duty-free, cruise and in-flight travel retail are channels we actually work, not a slide labelled “travel.”',
        ],
      },
      {
        title: 'Domestic vs bonded inventory behind distribution',
        paragraphs: [
          'Placement is not the whole job. Inventory can sit in domestic warehousing in Miami or in a duty-deferred bonded hub depending on whether goods enter U.S. commerce or re-export to LATAM and the Caribbean. We design which SKUs go where so the channel map is not starved by the wrong duty status.',
          'This page does not clone bonded or warehousing. Those leaves own duty-deferral and domestic facility ops. Distribution owns the channel: department stores, malls, chains, drugstores; duty-free and cruise; brand .com, marketplaces and social commerce as placement — with Amazon operations detailed on the marketplaces leaf.',
        ],
      },
      {
        title: 'Categories and channel fit',
        paragraphs: [
          'Focus categories are beauty and personal care, food and beverage, accessories and apparel — premium consumer brands. Channel fit is designed per category: a travel-retail set is not a drugstore plan, and a marketplace listing is not a department-store programme.',
          'Contracts and agency-versus-distributor structures are engineered case by case; licensed lawyers paper the agreement. The commercial work is opening and supplying the channel from Miami.',
        ],
      },
      {
        title: 'How distribution connects to brand expansion',
        paragraphs: [
          'Licensing and representation often sit next to distribution: brand expansion is the Commerce capability for being appointed in-market; this page is the channel map that follows. The Commerce hub is from product to market — import, warehouse, place, fulfil.',
          'Call +1 305-549-4289 or email info@bizandstyledna.com to scope U.S. and LATAM placement from the Miami hub.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/commerce/warehousing', label: 'domestic warehousing in Miami', line: 'Facility and inventory ops behind placement.' },
      { href: '/commerce/bonded-warehouse', label: 'duty-deferred bonded hub', line: 'Re-export and duty deferral — not this channel page.' },
      { href: '/commerce/marketplaces', label: 'Amazon & marketplace management', line: 'Third-party channel operations, distinct from retail placement.' },
      { href: '/commerce/brand-expansion', label: 'licensing & representation', line: 'How a brand is appointed in-market next to distribution.' },
      { href: '/commerce', label: 'B&S Commerce hub', line: 'From product to market — the capability index.' },
    ],
    schema: {
      serviceName: 'U.S. & LATAM Distribution',
      serviceType: 'Consumer brand distribution',
      areaServed: ['Miami', 'United States', 'Latin America', 'Caribbean'],
      breadcrumbParent: 'Commerce',
      breadcrumbName: 'Distribution',
    },
  },
  {
    slug: 'import-export',
    division: 'commerce',
    title: 'Import / export',
    eyebrow: 'B&S Commerce · Trade',
    lede: 'Freight forwarding by air and ocean, customs brokerage and cross-border trade setup between Europe, the United States and Latin America.',
    definition: {
      q: 'What import and export services does B&S Commerce offer?',
      a: [
        'B&S Commerce manages import/export setup, freight forwarding by air and ocean, customs and door-to-door shipping for consumer goods moving between Europe, the United States, the Caribbean and Latin America — with Miami as the hub.',
      ],
    },
    modules: [
      { name: 'Freight forwarding', line: 'Air and ocean, consolidated or dedicated.' },
      { name: 'Customs', line: 'Brokerage and compliance for U.S. entry and re-export.' },
      { name: 'Trade setup', line: 'Importer of record, documentation, labelling requirements.' },
      { name: 'Door to door', line: 'From factory to warehouse to customer.' },
    ],
    modulesTitle: 'What it includes (freight · customs · trade setup)',
    faqs: [
      { q: 'Do you handle air and ocean?', a: 'Yes — freight forwarding by air and ocean coordinated with customs brokerage for consumer-brand cargo.' },
      { q: 'Is this the same as Temporary Export Management?', a: 'No. Import/export is the physical trade and freight capability. TEM is an Advisory export-manager mandate (prospecting, distributors, trade shows).' },
      { q: 'Can goods go bonded on arrival?', a: 'Yes when duty deferral or LATAM re-export without U.S. duty is the plan — see bonded warehouse.' },
      { q: 'Which corridors?', a: 'Europe ↔ Miami ↔ United States / Latin America / Caribbean is the core pattern.' },
      { q: 'How do I start?', a: '+1 305-549-4289 or info@bizandstyledna.com.' },
    ],
    cta: { eyebrow: 'Moving goods into the Americas?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution`, name: 'talk_commerce' },
    mediaId: 'HOME-DIV-COM',
    seoTitle: 'Import / Export via Miami | B&S Commerce',
    seoDescription: 'Air and ocean freight, customs brokerage and cross-border trade setup Europe to U.S. to LATAM through Miami. +1 305-549-4289.',
    sections: [
      {
        title: 'Why Miami (PortMiami · MIA)',
        paragraphs: [
          'Import / export at B&S Commerce is freight, customs and cross-border trade setup — air and ocean — through Miami. PortMiami and MIA make the city the cargo gateway of the Americas: inbound Europe and outbound United States, Latin America and Caribbean share one node.',
          'Freight forwarding by air and ocean is coordinated with customs brokerage for consumer-brand cargo. Importer of record, documentation and labelling sit in the same commercial loop as door-to-door movement from factory to warehouse to customer.',
        ],
      },
      {
        title: 'Europe ↔ Americas flows',
        paragraphs: [
          'The core corridor is Europe ↔ Miami ↔ United States / Latin America / Caribbean. Goods can go bonded on arrival when duty deferral or LATAM re-export without U.S. duty is the plan. Domestic warehousing holds what has entered U.S. commerce.',
          'This is physical trade — not Temporary Export Management. TEM is an Advisory export-manager mandate: prospecting, distributors, trade shows. Import/export moves the cargo. The two connect when a brand needs both a manager in-market and a freight/customs operation behind them.',
        ],
      },
      {
        title: 'How import/export feeds warehousing and distribution',
        paragraphs: [
          'Freight into Miami is only useful if inventory and channels are ready. Domestic warehousing and the bonded warehouse receive the cargo; distribution places it into retail, travel retail and e-commerce. One Miami platform to the Americas — not a forwarder who disappears at the dock.',
          'Call +1 305-549-4289 or email info@bizandstyledna.com to scope air, ocean and customs for a Europe–Americas flow.',
        ],
      },
      {
        title: 'Where Temporary Export Management sits',
        paragraphs: [
          'When the brief is “someone to open distributors and run trade shows,” that is TEM under Advisory. When the brief is “air and ocean, brokerage, and trade setup through Miami,” that is this page. Soft adjacency — TEM remains the primary for the export-manager mandate.',
          'Miami is the platform: PortMiami, MIA, warehouse and the commercial network that distribution uses once the cargo is in.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/commerce/bonded-warehouse', label: 'Miami bonded warehouse', line: 'Duty-deferred arrival and LATAM re-export without U.S. duty.' },
      { href: '/commerce/warehousing', label: 'domestic warehousing', line: 'Facility ops once goods enter U.S. commerce.' },
      { href: '/commerce/distribution', label: 'distribution channels', line: 'Retail, travel retail and e-commerce placement after arrival.' },
      { href: '/advisory/temporary-export-management', label: 'temporary export management', line: 'The Advisory export-manager mandate — not freight.' },
      { href: '/miami', label: 'Miami platform to the Americas', line: 'Why PortMiami, MIA and HQ share one city.' },
    ],
    schema: {
      serviceName: 'Import / Export & Freight — Miami',
      serviceType: 'Import/export / freight forwarding / customs',
      areaServed: ['Miami', 'United States', 'Latin America', 'Caribbean', 'Europe'],
      breadcrumbParent: 'Commerce',
      breadcrumbName: 'Import / Export',
    },
  },
  {
    slug: 'e-commerce',
    division: 'commerce',
    title: 'E-commerce',
    eyebrow: 'B&S Commerce · Digital channels',
    lede: 'Direct-to-consumer stores, Shopify operations and B2C fulfillment for international brands selling in the United States.',
    definition: {
      q: 'What e-commerce services does B&S Commerce provide?',
      a: [
        'B&S Commerce sets up and operates direct-to-consumer e-commerce for international brands in the U.S.: store setup, catalogue, payments, B2C fulfillment from Miami, returns, and the digital acquisition that drives it — connected to the same CRM and analytics used across the platform.',
      ],
    },
    modules: [
      { name: 'DTC setup', line: 'Shopify and brand stores, catalogue, payments, tax settings.' },
      { name: 'B2C fulfillment', line: 'Pick, pack and ship from Miami; returns handling.' },
      { name: 'Digital acquisition', line: 'Google, Meta, SEO and email connected to the store.' },
      { name: 'Soft-ERP integration', line: 'Inventory, orders, invoicing and shipping without enterprise complexity.' },
    ],
    modulesTitle: 'What it includes (store setup · B2C fulfillment · connected acquisition)',
    faqs: [
      { q: 'Do you build and operate Shopify stores?', a: 'Yes — store setup and ongoing DTC operations paired with Miami B2C fulfillment when inventory sits with Commerce.' },
      { q: 'Is this the same as Amazon management?', a: 'No. Amazon and other marketplaces live on /commerce/marketplaces. This page is brand .com / DTC.' },
      { q: 'Can you connect paid acquisition?', a: 'Yes — through Digital Engine / Digital Growth Engine™ when owned acquisition infrastructure is in scope. High-ticket lead-gen stays on /lead-generation/.' },
      { q: 'Where does inventory ship from?', a: 'Miami domestic warehousing and fulfillment — same facility family as retail and marketplace orders when configured that way.' },
      { q: 'How do I start?', a: '+1 305-549-4289 or info@bizandstyledna.com.' },
    ],
    cta: { eyebrow: 'Selling direct to U.S. consumers?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution&persona=consumer-brand`, name: 'talk_commerce' },
    mediaId: 'HOME-DIV-COM',
    seoTitle: 'E-commerce & DTC from Miami | B&S Commerce',
    seoDescription: 'Shopify and DTC setup, B2C fulfillment from Miami and connected digital acquisition for brands selling in the U.S. +1 305-549-4289.',
    sections: [
      {
        title: 'Brand .com / DTC vs marketplaces',
        paragraphs: [
          'E-commerce at B&S Commerce is brand .com / DTC — Shopify and store setup, catalogue, payments, B2C fulfillment from Miami — not Amazon management. Marketplaces are a third-party channel and live on their own leaf. A brand can run both from the same inventory when configured that way; the stories stay distinct so search and clients do not confuse DTC with 3P.',
          'International brands selling into the United States use Miami as the fulfilment node for consumer parcels. Soft-ERP keeps inventory, orders, invoicing and shipping visible without enterprise complexity.',
        ],
      },
      {
        title: 'Fulfillment from Miami',
        paragraphs: [
          'Pick, pack and ship — and returns — sit in the same facility family as retail and marketplace orders when Commerce holds the stock. Fulfillment is the order-execution layer; this page owns the store and DTC loop that creates those orders.',
          'Domestic warehousing in Miami is where units wait. B2B and B2C fulfillment is how they leave. The distinction matters: a warehouse story is not a Shopify story.',
        ],
      },
      {
        title: 'How digital acquisition attaches',
        paragraphs: [
          'Connected digital acquisition — Google, Meta, SEO and email — attaches through the Digital Engine when owned infrastructure is in scope. Digital Growth Engine™ is the packaged programme. High-ticket lead generation stays on its own URL and is not rewritten here.',
          'The same CRM and analytics used across the platform can sit behind the store so DTC is not a disconnected channel.',
        ],
      },
      {
        title: 'International brands selling into the U.S.',
        paragraphs: [
          'Europe and Latin America origin brands selling DTC into the United States get store operations plus Miami fulfilment — Americas reach without standing up a second e-commerce organization. Call +1 305-549-4289 or email info@bizandstyledna.com.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/commerce/marketplaces', label: 'Amazon & marketplace management', line: 'Third-party channels — not brand .com / DTC.' },
      { href: '/commerce/fulfillment', label: 'B2B & B2C fulfillment', line: 'The order-execution layer on the Miami facility.' },
      { href: '/commerce/warehousing', label: 'domestic warehousing', line: 'Where DTC units sit before they ship.' },
      { href: '/digital-engine', label: 'owned digital infrastructure', line: 'How paid and organic acquisition attach to the store.' },
      { href: '/commerce', label: 'B&S Commerce', line: 'From product to market — the hub.' },
    ],
    schema: {
      serviceName: 'E-commerce & DTC Operations',
      serviceType: 'E-commerce / DTC operations',
      areaServed: ['Miami', 'United States', 'Latin America'],
      breadcrumbParent: 'Commerce',
      breadcrumbName: 'E-commerce',
    },
  },
  {
    slug: 'marketplaces',
    division: 'commerce',
    title: 'Marketplaces',
    eyebrow: 'B&S Commerce · Digital channels',
    lede: 'Amazon and global marketplace strategy and management — listings, inventory, fulfillment and advertising from a single Miami operation.',
    definition: {
      q: 'What marketplace management does B&S Commerce offer?',
      a: [
        'B&S Commerce manages Amazon and global marketplace presence for consumer brands: account and listing setup, content, inventory and fulfillment from Miami, advertising and performance management.',
      ],
    },
    modules: [
      { name: 'Amazon', line: 'Account, listings, content, inventory, advertising.' },
      { name: 'Global marketplaces', line: 'Marketplace selection and management by category and market.' },
      { name: 'Inventory & fulfillment', line: 'One inventory in Miami serving DTC, marketplaces and retail.' },
      { name: 'Performance', line: 'Advertising, pricing and reviews management.' },
    ],
    modulesTitle: 'What it includes (listings · inventory · FBA/3P · advertising)',
    faqs: [
      { q: 'Do you only do Amazon?', a: 'Amazon is the core U.S. marketplace; we also work other global marketplaces when they fit the brand’s channel mix.' },
      { q: 'Is this the same as e-commerce / DTC?', a: 'No. Brand .com / Shopify lives on /commerce/e-commerce. Marketplaces are third-party channels.' },
      { q: 'Do you manage advertising on Amazon?', a: 'Yes — listings, inventory posture, fulfillment path and advertising as one operated loop when in scope.' },
      { q: 'Can inventory sit bonded?', a: 'Marketplace units that enter U.S. commerce typically need domestic status; bonded remains for duty-deferred / re-export paths — we design which SKUs go where.' },
      { q: 'How do I start?', a: '+1 305-549-4289 or info@bizandstyledna.com.' },
    ],
    cta: { eyebrow: 'Launching on Amazon in the U.S.?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution&persona=consumer-brand`, name: 'talk_commerce' },
    mediaId: 'HOME-DIV-COM',
    seoTitle: 'Amazon & Marketplaces | B&S Commerce',
    seoDescription: 'Amazon and marketplace strategy — listings, inventory, fulfillment and advertising — for consumer brands from Miami. +1 305-549-4289.',
    sections: [
      {
        title: 'Amazon is a channel, not a strategy',
        paragraphs: [
          'Marketplaces at B&S Commerce are Amazon and third-party channel management — listings, inventory, FBA/3P fulfillment and advertising — from Miami. Amazon is the core U.S. marketplace; other global marketplaces enter when they fit the brand’s mix. Amazon is a channel, not a strategy: it does not replace brand .com, retail or travel retail.',
          'That editorial line is how we keep this leaf from cannibalizing DTC. Brand .com / Shopify lives on e-commerce. This page is 3P.',
        ],
      },
      {
        title: 'How marketplaces sit next to brand .com',
        paragraphs: [
          'A consumer brand in the Americas often needs both: a store it owns and a marketplace it operates. Content, pricing and inventory posture differ. We run them as related channels from one Miami operation when that is the brief — without merging the URLs or the H1s.',
          'Retail and travel retail distribution is the broader channel map. Marketplaces are the 3P slice of that map, operated with listings and advertising, not only “placement.”',
        ],
      },
      {
        title: 'Miami inventory and fulfillment behind the channel',
        paragraphs: [
          'Units that enter U.S. commerce typically need domestic status. Bonded remains for duty-deferred and re-export paths — we design which SKUs go where. Domestic warehousing and B2B/B2C fulfillment sit behind the marketplace so FBA, 3P and shared inventory are a planned loop, not a surprise stockout.',
          'Categories that fit are the same Commerce focus set: beauty, F&B, accessories, apparel — premium consumer brands whose marketplace economics can support the operation.',
        ],
      },
      {
        title: 'Categories that fit',
        paragraphs: [
          'Listings, inventory posture, fulfillment path and advertising as one operated loop when in scope. Call +1 305-549-4289 or email info@bizandstyledna.com to scope Amazon and marketplace management from Miami.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/commerce/e-commerce', label: 'brand .com & DTC', line: 'Shopify and owned store — not this 3P leaf.' },
      { href: '/commerce/fulfillment', label: 'B2B & B2C fulfillment', line: 'Order execution behind marketplace and retail units.' },
      { href: '/commerce/warehousing', label: 'domestic warehousing', line: 'Domestic status inventory for U.S. marketplace units.' },
      { href: '/commerce/distribution', label: 'retail & travel retail distribution', line: 'The broader channel map including malls and duty-free.' },
      { href: '/insights', label: 'Amazon is a channel, not a strategy', line: 'Editorial — operator view, not a thin post rebuild.' },
    ],
    schema: {
      serviceName: 'Amazon & Marketplace Management',
      serviceType: 'Marketplace / Amazon management',
      areaServed: ['Miami', 'United States', 'Latin America'],
      breadcrumbParent: 'Commerce',
      breadcrumbName: 'Marketplaces',
    },
  },
  {
    slug: 'warehousing',
    division: 'commerce',
    title: 'Warehousing',
    eyebrow: 'B&S Commerce · Operations',
    lede: 'Domestic warehousing in Miami for B2B and B2C operations — storage, labelling, kitting and fulfillment close to the U.S. and LATAM markets.',
    definition: {
      q: 'What warehousing does B&S Commerce operate?',
      a: [
        'B&S Commerce operates domestic (standard) warehousing in Miami alongside bonded storage: receiving, storage, labelling and repackaging, kitting, B2B and B2C fulfillment, and returns — one facility serving retail, marketplaces and DTC.',
      ],
    },
    modules: [
      { name: 'Storage', line: 'Standard storage for goods cleared into the U.S. market.' },
      { name: 'Value-added services', line: 'Labelling, repackaging, kitting, compliance preparation.' },
      { name: 'B2B & B2C fulfillment', line: 'Retail replenishment and consumer orders from one inventory.' },
      { name: 'Systems', line: 'Soft-ERP for inventory, orders and shipping visibility.' },
    ],
    modulesTitle: 'What domestic warehousing includes',
    faqs: [
      { q: 'How is this different from the bonded warehouse?', a: 'Domestic warehousing is for goods in U.S. commerce — labelling, kitting, B2B/B2C fulfillment and returns. Bonded is duty-deferred storage and LATAM/Caribbean re-export without U.S. duty.' },
      { q: 'Can I use both?', a: 'Often yes — SKUs and flows are designed so some inventory stays bonded and some enters domestic as needed.' },
      { q: 'Is fulfillment included?', a: 'Fulfillment is the order-execution layer on the facility — see /commerce/fulfillment. This page owns the warehouse ops story.' },
      { q: 'Where is the facility?', a: 'Miami — positioned for PortMiami and MIA cargo and for U.S. + LATAM distribution.' },
      { q: 'How do I start?', a: '+1 305-549-4289 or info@bizandstyledna.com.' },
    ],
    cta: { eyebrow: 'Need inventory close to your U.S. customers?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution`, name: 'talk_commerce' },
    mediaId: 'INFRA-WAREHOUSE',
    seoTitle: 'Domestic Warehousing Miami | B&S Commerce',
    seoDescription: 'Domestic warehousing in Miami: labelling, kitting, B2B/B2C fulfillment and returns for retail, marketplaces and DTC. +1 305-549-4289.',
    sections: [
      {
        title: 'Labelling · kitting · returns',
        paragraphs: [
          'Domestic warehousing in Miami is facility and inventory ops for goods already in U.S. commerce: receiving, storage, labelling, repackaging, kitting, B2B/B2C storage and returns. It is not the bonded warehouse. Bonded owns duty-deferral and LATAM/Caribbean re-export without U.S. duty. Cross-link; do not clone that H1.',
          'Value-added work — labelling, kitting, compliance preparation — sits on the domestic floor so retail, marketplace and DTC units leave correctly marked. Soft-ERP gives inventory, orders and shipping visibility.',
        ],
      },
      {
        title: 'Domestic vs bonded — which path',
        paragraphs: [
          'Often both. SKUs and flows are designed so some inventory stays bonded and some enters domestic as needed. Marketplace units that enter U.S. commerce typically need domestic status. Re-export and duty-deferred holds stay bonded. Import/export is how cargo arrives; this page is where domestic stock lives.',
          'Fulfillment is the order-execution layer on the facility — pick, pack, ship, returns. This page owns the warehouse ops story. The two titles stay distinct on purpose.',
        ],
      },
      {
        title: 'Serving retail, marketplaces and DTC from one facility',
        paragraphs: [
          'One Miami facility family can serve retail replenishment, marketplace orders and DTC parcels when inventory is configured that way. Distribution is the channel map; warehousing is the floor those channels pull from.',
          'Domestic vs bonded is the duty question. Retail vs marketplace vs DTC is the channel question. Both are designed from the same hub.',
        ],
      },
      {
        title: 'Miami hub advantage',
        paragraphs: [
          'The facility is in Miami — positioned for PortMiami and MIA cargo and for U.S. + LATAM distribution. That is the hub advantage: inbound ocean and air, outbound domestic and regional, without a second warehouse organization.',
          'Call +1 305-549-4289 or email info@bizandstyledna.com to scope domestic warehousing next to bonded when the brief needs both.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/commerce/bonded-warehouse', label: 'duty-deferred bonded warehouse', line: 'W1 proof leaf — re-export without U.S. duty, not this page.' },
      { href: '/commerce/fulfillment', label: 'B2B & B2C fulfillment', line: 'Order execution sitting on the facility.' },
      { href: '/commerce/distribution', label: 'distribution channels', line: 'Retail, travel retail and e-commerce placement.' },
      { href: '/commerce/import-export', label: 'import / export', line: 'Air and ocean into the Miami hub.' },
      { href: '/commerce', label: 'B&S Commerce hub', line: 'From product to market.' },
    ],
    schema: {
      serviceName: 'Domestic Warehousing — Miami',
      serviceType: 'Domestic warehousing / inventory operations',
      areaServed: ['Miami', 'United States', 'Latin America'],
      breadcrumbParent: 'Commerce',
      breadcrumbName: 'Warehousing',
    },
  },
  {
    slug: 'bonded-warehouse',
    division: 'commerce',
    title: 'Bonded warehouse',
    eyebrow: 'B&S Commerce · Miami bonded hub',
    lede: 'Duty-deferred storage in Miami: pay U.S. duty only when goods enter the market, re-export to Latin America without paying it, and consolidate while in bond.',
    definition: {
      q: 'What is the Miami bonded warehouse advantage?',
      a: [
        'A bonded warehouse lets imported goods be held without immediately paying U.S. duties or taxes. Duty is due only when, and if, goods enter U.S. commerce. Goods re-exported to Latin America or the Caribbean leave without ever paying U.S. import duty, and can be stored, sorted, labelled and repackaged while in bond.',
        'With PortMiami and MIA next door, this makes Miami the natural redistribution point of the Americas: one warehouse, two markets.',
      ],
    },
    modules: [
      { name: 'Duty & tax deferral', line: 'Preserve cash flow — pay only when goods enter U.S. commerce.' },
      { name: 'Re-export with no U.S. duty', line: 'Use Miami as the redistribution point for LATAM and the Caribbean.' },
      { name: 'Consolidation & flexibility', line: 'Store, sort, label and repackage while still in bond.' },
      { name: 'Strategic position', line: 'PortMiami and MIA — logistics for three continents.' },
    ],
    statement: ['One warehouse.', 'Two markets.'],
    faqs: [
      { q: 'How does bonded storage help during tariff changes?', a: 'Duty is only paid on release — goods can wait in bond while tariff conditions change, or be redirected to Latin America without U.S. duty.' },
      { q: 'Can I sell the same stock into the U.S. and LATAM?', a: 'Yes. Release part into U.S. commerce when it makes sense and re-export the rest duty-efficiently from a single Miami hub.' },
      { q: 'Where is the warehouse positioned?', a: 'Miami — strategic access to PortMiami and MIA for logistics across the Americas.' },
      { q: 'Who is this for?', a: 'Brands distributing into the United States and Latin America / Caribbean who need cash-flow-efficient, duty-aware storage and consolidation.' },
    ],
    cta: { eyebrow: 'Distributing across the U.S. and LATAM?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution`, name: 'talk_commerce' },
    mediaId: 'INFRA-WAREHOUSE',
    seoTitle: 'Miami Bonded Warehouse · LATAM Hub | B&S Commerce',
    seoDescription: 'Duty-deferred Miami bonded warehouse: re-export to LATAM without U.S. duty, consolidate in bond near PortMiami & MIA · +1 305-549-4289.',
    sections: [
      {
        title: 'One warehouse. Two markets (U.S. + LATAM)',
        paragraphs: [
          'Duty-deferred storage in Miami means you pay U.S. duty only on release into U.S. commerce. Re-export to Latin America and the Caribbean without U.S. duty. Consolidate, sort, label and repackage while still in bond.',
          'One Miami hub serves two markets: release what belongs in the United States; move the rest duty-efficiently into LATAM. Cash-flow stays with the goods until the market decision is made.',
        ],
      },
      {
        title: 'PortMiami · MIA · tariff flexibility',
        paragraphs: [
          'The warehouse sits with strategic access to PortMiami and MIA — the cargo gateway of the Americas — so inbound ocean and air and outbound U.S. and LATAM legs share one node.',
          'Tariff conditions change. Duty deferral is the flexibility: goods wait in bond, or redirect to Latin America, without having prepaid a U.S. entry that no longer makes sense.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/commerce/warehousing', label: 'domestic warehousing in Miami', line: 'Labelling, kitting, B2B/B2C storage — not duty-deferral.' },
      { href: '/miami', label: 'Miami platform to the Americas', line: 'Why the geo hub and the bonded hub are the same decision.' },
      { href: '/advisory/international-expansion', label: 'distribution with market entry', line: 'Bonded infrastructure as part of U.S. and LATAM expansion.' },
      { href: '/internationalization', label: 'infrastructure pillar', line: 'Warehousing is one of the nine pillars of internationalization.' },
    ],
    schema: {
      serviceName: 'Miami Bonded Warehouse',
      serviceType: 'Bonded warehouse / duty-deferred storage',
      areaServed: ['Miami', 'United States', 'Latin America', 'Caribbean'],
    },
  },
  {
    slug: 'fulfillment',
    division: 'commerce',
    title: 'Fulfillment',
    eyebrow: 'B&S Commerce · Operations',
    lede: 'B2B and B2C fulfillment from Miami — retail replenishment, marketplace and DTC orders, returns — with customs and freight handled in the same operation.',
    definition: {
      q: 'What fulfillment does B&S Commerce provide?',
      a: [
        'B&S Commerce fulfils B2B orders to retailers and distributors and B2C orders from DTC stores and marketplaces, from domestic warehousing in Miami, with customs, freight forwarding and returns managed in-house.',
      ],
    },
    modules: [
      { name: 'B2B fulfillment', line: 'Retail and distributor replenishment, compliance labelling, EDI-ready processes.' },
      { name: 'B2C fulfillment', line: 'Pick, pack and ship for DTC and marketplaces.' },
      { name: 'Returns', line: 'Inspection, restocking and reporting.' },
      { name: 'Freight & customs', line: 'Air and ocean, inbound and outbound, in one operation.' },
    ],
    modulesTitle: 'What it includes (B2B · B2C · returns · connected freight)',
    faqs: [
      { q: 'Is fulfillment the same as warehousing?', a: 'No. Warehousing is facility and inventory ops. Fulfillment is order execution — pick, pack, ship and returns — sitting on that facility.' },
      { q: 'Do you do B2B and B2C?', a: 'Yes. Same Miami operation can serve retail POs, marketplace orders and DTC parcels.' },
      { q: 'When does bonded matter?', a: 'When goods should defer U.S. duty or re-export to LATAM/Caribbean without entering U.S. commerce — see /commerce/bonded-warehouse.' },
      { q: 'Are customs and freight included?', a: 'Coordinated in the same commercial loop with import/export when cross-border moves are in scope.' },
      { q: 'How do I start?', a: '+1 305-549-4289 or info@bizandstyledna.com.' },
    ],
    cta: { eyebrow: 'Need a U.S. fulfillment partner that also understands LATAM?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution`, name: 'talk_commerce' },
    mediaId: 'INFRA-WAREHOUSE',
    seoTitle: 'B2B & B2C Fulfillment | B&S Commerce',
    seoDescription: 'B2B and B2C fulfillment from Miami with customs, freight and returns in one operation — retail, marketplaces, DTC. +1 305-549-4289.',
    sections: [
      {
        title: 'Pick / pack / ship from Miami',
        paragraphs: [
          'Fulfillment is order execution — pick, pack, ship and returns — from Miami. It is not warehousing (facility and inventory ops) and not bonded (duty status). The same operation can serve retail POs, marketplace orders and DTC parcels: B2B replenishment and B2C parcels in one loop.',
          'Customs, freight and returns sit in the same commercial loop when cross-border moves are in scope — coordinated with import/export rather than handed to a third party who never saw the PO.',
        ],
      },
      {
        title: 'How fulfillment uses warehousing (and when bonded applies)',
        paragraphs: [
          'Fulfillment sits on the facility. Domestic warehousing is where labelled, kitted, in-commerce stock lives. Bonded matters when goods should defer U.S. duty or re-export to LATAM and the Caribbean without entering U.S. commerce.',
          'PortMiami and MIA make Miami the node: inbound freight, outbound U.S. and regional parcels, returns inspected and restocked. EDI-ready B2B processes and consumer pick/pack share the floor when configured that way.',
        ],
      },
      {
        title: 'Retail, marketplaces and DTC in one operation',
        paragraphs: [
          'Retail, marketplaces and DTC are channels. Fulfillment is how orders leave. Brand .com and Amazon management stay on their own leaves; this page is the execution layer those channels call.',
          'Shopify and marketplace orders can flow into the warehouse system with inventory visibility across channels when that integration is in scope.',
        ],
      },
      {
        title: 'Cross-border realities',
        paragraphs: [
          'United States, Latin America and the Caribbean are the outbound map. Freight inbound and outbound — air and ocean — is coordinated rather than bolted on. Call +1 305-549-4289 or email info@bizandstyledna.com to scope B2B and B2C fulfillment from Miami.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/commerce/warehousing', label: 'domestic warehousing', line: 'Facility and inventory ops — not pick/pack/ship.' },
      { href: '/commerce/bonded-warehouse', label: 'bonded warehouse', line: 'Duty-deferral sibling when re-export is the plan.' },
      { href: '/commerce/import-export', label: 'import / export via Miami', line: 'Freight and customs in the same commercial loop.' },
      { href: '/commerce/e-commerce', label: 'DTC & e-commerce', line: 'Brand .com orders this layer can fulfil.' },
      { href: '/commerce/marketplaces', label: 'marketplace fulfillment', line: 'Amazon and 3P orders from the same Miami operation.' },
    ],
    schema: {
      serviceName: 'B2B & B2C Fulfillment — Miami',
      serviceType: 'Order fulfillment',
      areaServed: ['Miami', 'United States', 'Latin America', 'Caribbean'],
      breadcrumbParent: 'Commerce',
      breadcrumbName: 'Fulfillment',
    },
  },
  {
    slug: 'brand-expansion',
    division: 'commerce',
    title: 'Brand expansion',
    eyebrow: 'B&S Commerce · Brand growth',
    lede: 'Licensing, brand representation and commercial development for beauty, food and beverage, accessories and apparel brands entering the Americas.',
    definition: {
      q: 'What is brand expansion with B&S Commerce?',
      a: [
        'Brand expansion is the commercial development of a consumer brand in a new market: representation, licensing agreements, channel strategy, retail and travel-retail introductions and the marketing and PR that build presence.',
        'B&S Commerce acts as the plug-in for international brands entering the Americas — appointed as their commercial partner for the United States and Latin America.',
      ],
    },
    modules: [
      { name: 'Brand representation', line: 'BIZ & STYLE as your appointed commercial partner in the Americas.' },
      { name: 'Licensing', line: 'Securing and developing agreements that expand brand presence.' },
      { name: 'Channel strategy', line: 'Retail, travel retail, e-commerce and marketplaces sequenced by category.' },
      { name: 'Marketing & PR', line: 'Brand, digital and influencer reach connected to distribution.' },
    ],
    modulesTitle: 'What it includes (licensing · representation · commercial development)',
    faqs: [
      { q: 'Is this the same as Advisory business development?', a: 'No. Advisory BD opens partners and key accounts. Brand expansion on Commerce is licensing, representation and commercial development for consumer brands in-market.' },
      { q: 'Which categories?', a: 'Beauty and personal care, food and beverage, accessories (watches, jewelry, bags, lifestyle) and apparel — premium consumer brands.' },
      { q: 'Do you take exclusive representation automatically?', a: 'Scope is designed per brand — exclusive, non-exclusive or project-based — after a commercial fit conversation.' },
      { q: 'How does this connect to warehousing?', a: 'Representation often pairs with domestic or bonded Miami warehousing so inventory and fulfilment sit behind the commercial push.' },
      { q: 'How do I start?', a: '+1 305-549-4289 or info@bizandstyledna.com.' },
    ],
    cta: { eyebrow: 'Bringing a consumer brand to the Americas?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution&persona=consumer-brand`, name: 'talk_commerce' },
    programs: ['international-expansion-boost'],
    mediaId: 'HOME-DIV-COM',
    seoTitle: 'Brand Expansion Americas | B&S Commerce',
    seoDescription: 'Licensing, brand representation and commercial development for beauty, F&B, accessories and apparel in the Americas. +1 305-549-4289.',
    sections: [
      {
        title: 'Categories we work with',
        paragraphs: [
          'Brand expansion on Commerce is licensing, representation and commercial development for consumer brands in-market — beauty and personal care, food and beverage, accessories (watches, jewelry, bags, lifestyle) and apparel. It is not Advisory business development (partner scouting and key accounts) and not partnership-engineering (JV and contract design). Soft cross-link only.',
          'B&S Commerce acts as the plug-in for international brands entering the Americas — appointed as commercial partner for the United States and Latin America when the fit is there. Exclusive, non-exclusive or project-based scope is designed per brand after a commercial conversation — never automatic exclusivity.',
        ],
      },
      {
        title: 'Americas coverage from Miami',
        paragraphs: [
          'Europe → Miami is a common origin. Coverage is the United States, Latin America, the Caribbean and the wider Americas from the Miami hub. Channel strategy sequences retail, travel retail, e-commerce and marketplaces by category so representation is not a logo on a slide.',
          'Marketing and PR attach when presence needs to be built in-market — connected to distribution, not a separate campaign island.',
        ],
      },
      {
        title: 'How brand expansion sits next to distribution and BD',
        paragraphs: [
          'U.S. and LATAM distribution is the channel-placement sibling. Advisory BD opens partners and key accounts. Partnership engineering structures JVs and licensing design on the Advisory side. This leaf is the Commerce operating expression: representation and commercial development for the brand in-market.',
          'From product to market is the hub story. Brand expansion is how a consumer brand is appointed inside that story.',
        ],
      },
      {
        title: 'From product to market',
        paragraphs: [
          'Representation often pairs with domestic or bonded Miami warehousing so inventory and fulfilment sit behind the commercial push. Call +1 305-549-4289 or email info@bizandstyledna.com to talk licensing and representation in the Americas.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/commerce', label: 'from product to market', line: 'The Commerce hub this leaf sits under.' },
      { href: '/commerce/distribution', label: 'U.S. & LATAM distribution', line: 'Channel placement next to representation.' },
      { href: '/advisory/business-development', label: 'partner scouting & key accounts', line: 'Advisory BD — not this Commerce leaf.' },
      { href: '/advisory/partnership-engineering', label: 'JVs, licensing design', line: 'Commercial structure and contracts — Advisory.' },
      { href: '/commerce/bonded-warehouse', label: 'Miami bonded warehouse', line: 'Inventory behind the commercial push when duty status matters.' },
    ],
    schema: {
      serviceName: 'Brand Expansion — Licensing & Representation',
      serviceType: 'Brand licensing / representation',
      areaServed: ['Miami', 'United States', 'Latin America', 'Caribbean'],
      breadcrumbParent: 'Commerce',
      breadcrumbName: 'Brand Expansion',
    },
  },

  // ─────────────────────────── LUXURY ───────────────────────────
  {
    slug: 'seven-verticals',
    division: 'luxury',
    title: 'Seven verticals',
    eyebrow: 'B&S Luxury · The ecosystem',
    lede: 'Luxury real estate at the core, six strategic-partner verticals around it, one client in the centre: the high-net-worth individual.',
    definition: {
      q: 'What are the seven B&S Luxury verticals?',
      a: [
        'The B&S Luxury ecosystem is built intentionally around seven verticals that serve the same high-net-worth client: luxury real estate (the core operating division), private aviation, yachting, interior design, luxury goods, luxury media, and celebrity, sports and entertainment.',
        'Between them B&S Luxury develops structured business relationships — visibility, access, clients, partnerships and opportunities — rather than referrals.',
      ],
    },
    modules: [
      { name: 'Luxury real estate', line: 'Core operating division — Miami luxury and pre-construction, international buyers, developer partnerships.' },
      { name: 'Private aviation', line: 'Strategic partner vertical connecting clients across the U.S., LATAM and Europe.' },
      { name: 'Yachting', line: 'Strategic partner vertical — a signature of the Miami lifestyle.' },
      { name: 'Interior design', line: 'Strategic partner vertical — from acquisition to residence.' },
      { name: 'Luxury goods', line: 'Strategic partner vertical — brands serving the same client.' },
      { name: 'Luxury media', line: 'Strategic partner vertical — visibility where the market looks.' },
      { name: 'Celebrity · Sports · Entertainment', line: 'Strategic partner vertical — collaborations that open doors within elite circles.' },
    ],
    modulesTitle: 'The seven verticals listed',
    statement: ['Different industries.', 'The same client.'],
    faqs: [
      { q: 'What are the seven verticals?', a: 'Luxury real estate, private aviation, yachting, interior design, luxury goods, luxury media, and celebrity / sports / entertainment.' },
      { q: 'Why group them?', a: 'They share the same high-net-worth client — one relationship surface, one BD ecosystem.' },
      { q: 'Where do I buy or list property?', a: 'Listings and search: bns-luxury.com. Developer BD programmes: /luxury/developer-partnerships.' },
      { q: 'How do I start?', a: '+1 305-549-4289 or info@bizandstyledna.com.' },
    ],
    cta: { eyebrow: 'Serving the same client in Miami?', label: 'Explore a partnership', href: '/become-a-partner', name: 'luxury_partner' },
    mediaId: 'HOME-DIV-LUX',
    seoTitle: 'Seven Luxury Verticals | BIZ & STYLE',
    seoDescription: 'Real estate, aviation, yachting, design, goods, media and celebrity/sports — one HNWI client, one Miami ecosystem. +1 305-549-4289.',
    sections: [
      {
        title: 'One HNWI client across categories',
        paragraphs: [
          'The seven verticals are the category taxonomy: luxury real estate, private aviation, yachting, interior design, luxury goods, luxury media, and celebrity / sports / entertainment. They share the same high-net-worth client — one relationship surface, one Miami ecosystem. This is not a listings page. Search stays on bns-luxury.com.',
          'Real estate sits at the core. The other six are strategic-partner verticals around the same HNWI. Grouping them is a BD fact, not a concierge menu.',
        ],
      },
      {
        title: 'Why verticals share one BD ecosystem',
        paragraphs: [
          'How luxury BD works — offline network plus in-house digital acquisition — lives on the ecosystem leaf. This page is the vertical map. Developer partnerships is the real-estate BD programme. The three stay distinct: how, which, and the developer offer.',
          'Aviation and yachting high-ticket demand can soft-bridge to lead generation without rewriting that URL. The luxury economy in Miami, Miami Beach, Latin America and the Americas is the geo frame.',
        ],
      },
      {
        title: 'Real estate & developer partnerships',
        paragraphs: [
          'Luxury real estate is the core operating division — Miami luxury and pre-construction, international buyers, developer partnerships. Listings and search: bns-luxury.com. Developer BD programmes sit on the developer-partnerships leaf.',
          'Call +1 305-549-4289 or email info@bizandstyledna.com when the brief is the map, the ecosystem, or a selected development.',
        ],
      },
      {
        title: 'Miami · Americas luxury economy',
        paragraphs: [
          'Miami and Miami Beach concentrate the luxury economy those verticals already share. Latin America and the wider Americas send the same HNWI through the city. One client. Seven categories. One BD surface.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/luxury/ecosystem', label: 'how luxury BD works', line: 'Offline ecosystem + in-house digital acquisition.' },
      { href: '/luxury/developer-partnerships', label: 'developer partnerships', line: 'Not registration — relationship with selected developments.' },
      { href: '/luxury', label: 'B&S Luxury', line: 'The division hub.' },
      { href: '/lead-generation/', label: 'high-ticket lead generation', line: 'Soft bridge for aviation and yacht demand — unchanged.' },
    ],
    schema: {
      breadcrumbParent: 'Luxury',
      breadcrumbName: 'Seven Verticals',
      webPageAbout: 'Real estate, aviation, yachting, design, goods, media and celebrity/sports — one HNWI client, one Miami ecosystem.',
      itemList: {
        id: 'https://bizandstyledna.com/luxury/seven-verticals#verticals',
        name: 'B&S Luxury Seven Verticals',
        items: [
          { name: 'Luxury real estate' },
          { name: 'Private aviation' },
          { name: 'Yachting' },
          { name: 'Interior design' },
          { name: 'Luxury goods' },
          { name: 'Luxury media' },
          { name: 'Celebrity / sports / entertainment' },
        ],
      },
    },
  },
  {
    slug: 'developer-partnerships',
    division: 'luxury',
    title: 'Developer partnerships',
    eyebrow: 'B&S Luxury · Real estate',
    lede: 'Not registration. Relationship. Dedicated business-development and marketing programmes with selected luxury developments in Miami.',
    definition: {
      q: 'How does B&S Luxury work with developers?',
      a: [
        'Registering buyers with developments is the baseline. B&S Luxury pursues deeper strategic relationships with selected luxury and ultra-luxury developments: dedicated development pages, proprietary digital acquisition targeting international buyers, events and ecosystem introductions — selective, strategic, long term.',
      ],
    },
    modules: [
      { name: 'Proprietary digital acquisition', line: 'Google, Meta, SEO and GEO with international targeting; dedicated development pages; CRM nurture.' },
      { name: 'International buyer ecosystem', line: 'The buyer of Miami rarely lives in Miami — local, out of state, international.' },
      { name: 'Events & visibility', line: 'Luxury events, advertising and market presence where the industry meets.' },
      { name: 'Ecosystem introductions', line: 'Aviation, yachting, design, media and entertainment partners serving the same client.' },
    ],
    statement: ['Not registration.', 'Relationship.'],
    faqs: [
      { q: 'Where is the property search?', a: 'Listings, neighbourhoods and new developments live on bns-luxury.com. This page explains the business-development relationship.' },
      { q: 'Is this just buyer registration?', a: 'No. Baseline registration is not the offer — we pursue selective, long-term BD and marketing programmes with selected luxury and ultra-luxury developments.' },
      { q: 'What does proprietary digital acquisition include?', a: 'Google, Meta, SEO and GEO with international targeting; dedicated development pages; CRM nurture — connected to the wider BIZ & STYLE engine.' },
      { q: 'Which Miami segments do you focus on?', a: 'Luxury and ultra-luxury pre-construction and selected developments serving international and HNW buyers across Miami Beach, Brickell and the wider Miami market.' },
    ],
    cta: { eyebrow: 'Developing a luxury project in Miami?', label: "Tell us what you're building", href: `${TELL}?persona=developer&intent=partnership`, name: 'developer_tell_us' },
    mediaId: 'HOME-DIV-LUX',
    seoTitle: 'Developer Partnerships · Miami Luxury | BIZ & STYLE',
    seoDescription: 'Not registration — relationship. Dedicated BD and marketing programmes with selected Miami luxury developments · +1 305-549-4289.',
    sections: [
      {
        title: 'Proprietary digital acquisition for international buyers',
        paragraphs: [
          'The buyer of Miami rarely lives in Miami — local, out of state, and international, including LATAM and Europe. Developer partnerships include proprietary digital acquisition: Google, Meta, SEO and GEO with international targeting; dedicated development pages; CRM nurture.',
          'That stack is the same BIZ & STYLE engine — not a rented campaign and not a rewrite of high-ticket lead generation. Property search stays on bns-luxury.com. This page is the business-development relationship with the development.',
        ],
      },
      {
        title: 'Ecosystem introductions (aviation · yachts · design · media)',
        paragraphs: [
          'B&S Luxury sits inside a seven-vertical ecosystem: luxury real estate at the core, plus private aviation, yachting, interior design, luxury goods, luxury media, and celebrity · sports · entertainment.',
          'Developer partnerships open those introductions for selected Miami Beach, Brickell and wider Miami luxury and ultra-luxury pre-construction — HNW and international buyers who already move through the same rooms.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/luxury', label: 'B&S Luxury ecosystem', line: 'Seven verticals. One HNW client. The division hub.' },
      { href: '/digital-engine', label: 'proprietary digital acquisition', line: 'The owned engine behind development-page demand.' },
      { href: '/lead-generation/', label: 'high-ticket lead generation', line: 'The dedicated high-ticket demand offer — unchanged.' },
      { href: 'https://bns-luxury.com', label: 'property search', line: 'Listings, neighbourhoods and new developments.' },
    ],
    schema: {
      serviceName: 'Developer Partnerships — B&S Luxury',
      serviceType: 'Luxury developer business development and marketing programmes',
      areaServed: ['Miami', 'Miami Beach', 'Brickell', 'United States', 'Latin America'],
      audience: 'Luxury real estate developers',
    },
  },
  {
    slug: 'ecosystem',
    division: 'luxury',
    title: 'Business development ecosystem',
    eyebrow: 'B&S Luxury · How it works',
    lede: 'Two engines — an offline luxury ecosystem and an in-house digital acquisition engine — feeding one platform with multiple sources of opportunity.',
    definition: {
      q: 'How does the B&S Luxury ecosystem generate business?',
      a: [
        'B&S Luxury generates business through two connected engines. Offline: strategic partnerships, events, developer relationships, luxury brands, private aviation and yachting — network, visibility and HNWI relationships. Online: in-house digital acquisition — Google, Meta, SEO, GEO / AI search, dedicated websites and landing pages, CRM, automation, retargeting, email and international targeting.',
        'Business creates relationships. Relationships create opportunities. The ecosystem compounds.',
      ],
    },
    modules: [
      { name: 'Offline engine', line: 'Strategic partnerships · events · developer relationships · luxury brands · aviation · yachting.' },
      { name: 'Online engine', line: 'Google · Meta · SEO · GEO / AI search · dedicated sites · landing pages · CRM · automation · retargeting · email.' },
      { name: 'Built in-house', line: 'Built in-house. Owned in-house. Optimized in-house.' },
      { name: 'Proof', line: 'Proprietary digital acquisition generated HNWI opportunities at the very top of the Miami market.' },
    ],
    modulesTitle: 'Offline luxury ecosystem',
    faqs: [
      { q: 'Is this a concierge service?', a: 'No. B&S Luxury is business development for luxury verticals — relationships and acquisition systems, not lifestyle concierge.' },
      { q: 'Where do I search listings?', a: 'Property search lives on bns-luxury.com. This site is the advisory / BD platform.' },
      { q: 'How does digital acquisition fit?', a: 'An in-house engine feeds the same luxury BD platform — soft bridge to Digital Engine / lead-gen without replacing those pages.' },
      { q: 'How does this relate to the seven verticals?', a: 'Ecosystem = how we generate business. Seven verticals = which luxury categories share the same HNWI client.' },
      { q: 'How do I start?', a: '+1 305-549-4289 or info@bizandstyledna.com.' },
    ],
    cta: { eyebrow: 'Think our ecosystems intersect?', label: 'Explore a partnership', href: '/become-a-partner', name: 'luxury_partner' },
    mediaId: 'HOME-DIV-LUX',
    seoTitle: 'Luxury BD Ecosystem | BIZ & STYLE',
    seoDescription: 'How B&S Luxury generates business: offline luxury ecosystem + in-house digital acquisition feeding one Miami platform. +1 305-549-4289.',
    sections: [
      {
        title: 'In-house digital acquisition',
        paragraphs: [
          'The luxury business-development ecosystem has two engines. Offline: strategic partnerships, events, developer relationships, luxury brands, private aviation and yachting — network, visibility and HNWI relationships in Miami, Miami Beach and Brickell. Online: in-house digital acquisition — Google, Meta, SEO, GEO / AI search, dedicated sites, landing pages, CRM, automation, retargeting, email and international targeting.',
          'This is not a concierge service. B&S Luxury is business development for luxury verticals — relationships and acquisition systems. Listings stay on bns-luxury.com. High-ticket lead generation is not rewritten here; it is a soft bridge.',
        ],
      },
      {
        title: 'One platform · one HNWI client',
        paragraphs: [
          'Business creates relationships. Relationships create opportunities. The ecosystem compounds because the same high-net-worth client moves across real estate, aviation, yachts, design, goods, media and entertainment. One Miami platform. One client. Multiple sources of opportunity.',
          'International buyers and LATAM / Americas capital already use Miami as the meeting city. Pre-construction is a soft part of the real-estate core — not a listings feed on this URL.',
        ],
      },
      {
        title: 'How ecosystem feeds developer partnerships',
        paragraphs: [
          'Developer partnerships is the selected-development BD programme — not registration. The ecosystem is how BD is generated so those programmes have somewhere to live: offline rooms and an in-house engine feeding the same pipeline.',
          'Seven verticals is the category map. Ecosystem is how we generate business. Keep the H1s apart.',
        ],
      },
      {
        title: 'Miami · Brickell · Americas buyers',
        paragraphs: [
          'Miami, Miami Beach and Brickell are the geo. Latin America / LATAM and the Americas send buyers who rarely live in the building they buy. The Miami platform is the node. Call +1 305-549-4289 or email info@bizandstyledna.com.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/luxury', label: 'B&S Luxury hub', line: 'The division — real estate and high-value ecosystems.' },
      { href: '/luxury/seven-verticals', label: 'seven luxury verticals', line: 'The category map that shares one HNWI client.' },
      { href: '/luxury/developer-partnerships', label: 'developer partnerships', line: 'Selected developments — not registration.' },
      { href: '/lead-generation/', label: 'high-ticket lead generation', line: 'Soft bridge — do not rewrite that URL.' },
      { href: '/miami', label: 'Miami platform', line: 'Why the city is the luxury and trade node.' },
    ],
    schema: {
      serviceName: 'B&S Luxury Business Development Ecosystem',
      serviceType: 'Luxury business development',
      areaServed: ['Miami', 'Miami Beach', 'Brickell', 'United States', 'Latin America'],
      breadcrumbParent: 'Luxury',
      breadcrumbName: 'Ecosystem',
    },
  },
];

export const byDivision = (d: Division) => services.filter((s) => s.division === d && !s.unlisted);
export const getService = (d: Division, slug: string) => services.find((s) => s.division === d && s.slug === slug);
export const servicePath = (s: Service) => s.href ?? `${divisionMeta[s.division].path}/${s.slug}`;

export const divisionMeta: Record<Division, { name: string; role: string; path: string; ground: 'onyx' | 'paper' }> = {
  advisory: { name: 'B&S Advisory', role: 'Strategy & Growth', path: '/advisory', ground: 'paper' },
  commerce: { name: 'B&S Commerce', role: 'Trade & Distribution', path: '/commerce', ground: 'onyx' },
  luxury: { name: 'B&S Luxury', role: 'Real Estate & High-Value Ecosystems', path: '/luxury', ground: 'onyx' },
};
