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
    statement: ['Strategy that', 'ends in execution.'],
    faqs: [
      { q: 'How is BIZ & STYLE different from a strategy consultancy?', a: 'We are operators. Every strategy we recommend was first tested inside our own ventures, and the team that designs it stays on to execute it through B&S Advisory, B&S Commerce and the digital engine.' },
      { q: 'Which markets do you cover?', a: 'The United States, Canada and the Caribbean from our Miami headquarters; Mexico and Central America; Brazil and the wider Latin American region; and European companies entering the Americas.' },
    ],
    cta: { eyebrow: 'Building a growth plan for the Americas?', label: "Tell us what you're building", href: `${TELL}?intent=business-development`, name: 'strategy_tell_us' },
    programs: ['international-expansion-boost', 'fractional-executive'],
    mediaId: 'HOME-DIV-ADV',
    seoTitle: 'Business Strategy for the Americas — B&S Advisory | BIZ & STYLE',
    seoDescription: 'Go-to-market, market intelligence and growth strategy for companies expanding between Europe, the U.S. and Latin America — designed and executed by operators in Miami.',
  },
  {
    slug: 'international-expansion',
    division: 'advisory',
    title: 'International expansion',
    eyebrow: 'B&S Advisory · Internationalization',
    lede: 'U.S. market entry and LATAM expansion with an executive team, real infrastructure and a commercial network already operating in Miami.',
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
      { q: 'Do you help with company formation and visas?', a: 'We coordinate the whole sequence — entity, EIN, bank account, licences, contracts, visa strategy — and licensed lawyers, accountants and immigration attorneys from our vetted network deliver each regulated step.' },
      { q: 'Why start from Miami?', a: 'Miami is the capital of Latin America and the trade gateway of the Americas: PortMiami, MIA, a bonded warehouse for duty-efficient distribution, international capital and a constant flow of decision makers. Our HQ has been here since 2017.' },
    ],
    cta: { eyebrow: 'Planning your U.S. expansion?', label: 'Assess your market entry', href: `${TELL}?intent=market-entry&persona=international-company`, name: 'assess_market_entry' },
    programs: ['international-expansion-boost'],
    mediaId: 'HOME-MIAMI-01',
    seoTitle: 'International Expansion & U.S. Market Entry from Miami | BIZ & STYLE',
    seoDescription: 'U.S. market entry and LATAM expansion delivered by an executive team, real infrastructure and a 200+ commercial network already operating in Miami.',
  },
  {
    slug: 'fractional-executive',
    division: 'advisory',
    title: 'Fractional executive',
    eyebrow: 'B&S Advisory · Leadership',
    lede: 'Senior commercial, expansion and project leadership — embedded in your company when you need it, without building an entire executive organization on day one.',
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
      { q: 'How does a fractional mandate work?', a: 'We define the role, the objectives and the cadence. The executive works inside your organization with your team and reports to your leadership, backed by the BIZ & STYLE platform.' },
      { q: 'Is it suitable for smaller companies?', a: 'Yes. It is designed for companies that need senior capability before they can justify a full executive team in a new market.' },
    ],
    cta: { eyebrow: 'Need senior leadership in the Americas?', label: 'Discuss a fractional mandate', href: `${TELL}?intent=fractional-executive`, name: 'fractional_tell_us' },
    programs: ['fractional-executive'],
    mediaId: 'HOME-DIV-ADV',
    seoTitle: 'Fractional Executive for the Americas | BIZ & STYLE',
    seoDescription: 'Fractional commercial, expansion and project leadership embedded in your company — senior operators backed by the BIZ & STYLE platform in Miami.',
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
      { q: 'How long is a typical TEM engagement?', a: 'Long enough to move from introduction to established customers — usually more than one season. The cadence is agreed at the start and reviewed against objectives.' },
    ],
    cta: { eyebrow: 'Looking for a temporary export manager for the Americas?', label: 'Assess your market entry', href: `${TELL}?intent=market-entry&persona=international-company`, name: 'tem_tell_us' },
    programs: ['international-expansion-boost'],
    mediaId: 'HOME-DIV-COM',
    seoTitle: 'Temporary Export Manager for the U.S. and LATAM | BIZ & STYLE',
    seoDescription: 'Temporary export management from Miami: prospecting, distributors, key accounts and trade shows, backed by warehousing and logistics already in place.',
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
        'It is delivered through a proprietary network of more than 200 commercial partners across the United States and Latin America.',
      ],
    },
    modules: [
      { name: 'Partner scouting & acquisition', line: 'The right distributors, agents and partners — qualified, met, negotiated.' },
      { name: 'Key-account development', line: 'Decision makers identified, relationships built, opportunities followed through.' },
      { name: 'Trade missions', line: 'Structured, repeated presence in the market.' },
      { name: 'Commercial network', line: '200+ commercial partners across the U.S. and LATAM.' },
    ],
    statement: ['Relationships', 'are capital.'],
    faqs: [
      { q: 'Do you publish your partner list?', a: 'No. Discretion is part of the relationship. Selected credentials are available on request and, when appropriate, under NDA.' },
    ],
    cta: { eyebrow: 'Need doors opened in the Americas?', label: "Tell us what you're building", href: `${TELL}?intent=business-development`, name: 'bd_tell_us' },
    programs: ['international-expansion-boost', 'fractional-executive'],
    mediaId: 'HOME-DIV-ADV',
    seoTitle: 'Business Development in the U.S. and Latin America | BIZ & STYLE',
    seoDescription: 'Partner scouting, key-account development and trade missions through a 200+ commercial network in the United States and Latin America.',
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
    regulated: 'Contracts, legal compliance and intellectual-property registration are delivered by independent licensed lawyers coordinated by BIZ & STYLE.',
    faqs: [
      { q: 'Do you draft the contracts?', a: 'We design the commercial structure and coordinate the process. Contracts are drafted and reviewed by licensed corporate and commercial lawyers from our network.' },
    ],
    cta: { eyebrow: 'Structuring a partnership in the Americas?', label: "Tell us what you're building", href: `${TELL}?intent=partnership`, name: 'pe_tell_us' },
    programs: ['international-expansion-boost'],
    mediaId: 'HOME-DIV-ADV',
    seoTitle: 'Partnership Engineering — JVs, Licensing, Distribution | BIZ & STYLE',
    seoDescription: 'Joint ventures, alliances, licensing and distribution agreements engineered to last, with the commercial design by BIZ & STYLE and contracts by licensed lawyers.',
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
      ],
    },
    modules: [
      { name: 'CRM setup', line: 'Pipeline, stages, fields and segmentation designed around your sales reality.' },
      { name: 'Lead routing & scoring', line: 'The right lead to the right person, ranked by fit and intent.' },
      { name: 'Automation & nurture', line: 'Email, retargeting and task automation that keep relationships warm.' },
      { name: 'Attribution & reporting', line: 'From click to closed opportunity.' },
    ],
    faqs: [
      { q: 'Can you integrate with our existing CRM?', a: 'Yes. The lead architecture is vendor-agnostic and forwards normalized, scored leads to any CRM or automation platform through a webhook.' },
    ],
    cta: { eyebrow: 'Is your CRM a database or a system?', label: 'Request a digital growth review', href: `${TELL}?intent=digital-growth`, name: 'crm_review' },
    programs: ['digital-growth-engine'],
    mediaId: 'HOME-DIV-ADV',
    seoTitle: 'CRM & Marketing Automation for Growth | BIZ & STYLE',
    seoDescription: 'CRM design, lead routing and scoring, automation, nurture and attribution connected to acquisition — implemented by operators who run it themselves.',
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
    faqs: [
      { q: 'Do you build custom AI products?', a: 'We design and implement AI-enabled workflows on top of existing platforms. Where custom development is needed we work with qualified technology partners.' },
    ],
    cta: { eyebrow: 'Where could AI actually move your numbers?', label: 'Request a digital growth review', href: `${TELL}?intent=digital-growth`, name: 'ai_review' },
    programs: ['digital-growth-engine'],
    mediaId: 'HOME-DIV-ADV',
    seoTitle: 'AI & Digital Transformation for Mid-Sized Companies | BIZ & STYLE',
    seoDescription: 'AI-enabled workflows in acquisition, sales and operations — applied where they create leverage, tested first inside BIZ & STYLE ventures.',
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
    statement: ['From product', 'to market.'],
    faqs: [
      { q: 'Do you take products on a distribution basis or as an agent?', a: 'Both models exist, depending on category, channel and brand strategy. The structure is engineered case by case, with contracts by licensed lawyers.' },
    ],
    cta: { eyebrow: 'Looking for U.S. or LATAM distribution?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution&persona=consumer-brand`, name: 'talk_commerce' },
    mediaId: 'HOME-DIV-COM',
    seoTitle: 'U.S. & LATAM Distribution for Consumer Brands | B&S Commerce',
    seoDescription: 'Domestic retail, travel retail and e-commerce distribution in the United States and Latin America, operated from domestic and bonded warehousing in Miami.',
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
    faqs: [
      { q: 'Can goods be re-exported to Latin America without paying U.S. duty?', a: 'Yes, when held in our bonded warehouse: goods re-exported to Latin America or the Caribbean leave without ever paying U.S. import duty.' },
    ],
    cta: { eyebrow: 'Moving goods into the Americas?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution`, name: 'talk_commerce' },
    mediaId: 'HOME-DIV-COM',
    seoTitle: 'Import / Export & Freight Forwarding via Miami | B&S Commerce',
    seoDescription: 'Freight forwarding by air and ocean, customs brokerage and cross-border trade setup between Europe, the U.S. and Latin America through Miami.',
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
    faqs: [
      { q: 'Do you also handle marketplaces?', a: 'Yes — Amazon and global marketplaces are covered under Marketplaces, and can run alongside a DTC store from the same inventory.' },
    ],
    cta: { eyebrow: 'Selling direct to U.S. consumers?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution&persona=consumer-brand`, name: 'talk_commerce' },
    mediaId: 'HOME-DIV-COM',
    seoTitle: 'E-commerce & DTC Operations in the U.S. | B&S Commerce',
    seoDescription: 'Shopify and DTC store setup, B2C fulfillment from Miami and connected digital acquisition for international brands selling in the United States.',
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
    faqs: [
      { q: 'Can you run marketplaces and retail from the same stock?', a: 'Yes. Domestic warehousing in Miami serves marketplaces, DTC and B2B retail from one inventory.' },
    ],
    cta: { eyebrow: 'Launching on Amazon in the U.S.?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution&persona=consumer-brand`, name: 'talk_commerce' },
    mediaId: 'HOME-DIV-COM',
    seoTitle: 'Amazon & Marketplace Management in the U.S. | B&S Commerce',
    seoDescription: 'Amazon and global marketplace strategy and management for consumer brands — listings, inventory, fulfillment and advertising from Miami.',
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
    faqs: [
      { q: 'What is the difference between domestic and bonded warehousing?', a: 'Domestic storage holds goods already cleared into U.S. commerce. Bonded storage holds imported goods without paying U.S. duty until they enter the U.S. market — or without ever paying it if they are re-exported.' },
    ],
    cta: { eyebrow: 'Need inventory close to your U.S. customers?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution`, name: 'talk_commerce' },
    mediaId: 'INFRA-WAREHOUSE',
    seoTitle: 'Domestic Warehousing & Fulfillment in Miami | B&S Commerce',
    seoDescription: 'Domestic warehousing in Miami with labelling, kitting, B2B and B2C fulfillment and returns — one facility serving retail, marketplaces and DTC.',
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
      { q: 'How does bonded storage help during tariff changes?', a: 'Because duty is only paid on release, goods can wait in bond while tariff conditions change, and be redirected to Latin America without U.S. duty if the U.S. release no longer makes sense.' },
      { q: 'Can I sell the same stock into the U.S. and LATAM?', a: 'Yes. Release part of the inventory into U.S. commerce when it makes sense and re-export the rest duty-efficiently — from a single Miami hub.' },
    ],
    cta: { eyebrow: 'Distributing across the U.S. and LATAM?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution`, name: 'talk_commerce' },
    mediaId: 'INFRA-WAREHOUSE',
    seoTitle: 'Miami Bonded Warehouse — Duty-Deferred LATAM Hub | B&S Commerce',
    seoDescription: 'Bonded warehousing in Miami: defer U.S. duty, re-export to Latin America and the Caribbean without paying it, consolidate in bond. One warehouse, two markets.',
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
    faqs: [
      { q: 'Do you integrate with Shopify and Amazon?', a: 'Yes — orders flow from store and marketplace into the warehouse system with inventory visibility across channels.' },
    ],
    cta: { eyebrow: 'Need a U.S. fulfillment partner that also understands LATAM?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution`, name: 'talk_commerce' },
    mediaId: 'INFRA-WAREHOUSE',
    seoTitle: 'B2B & B2C Fulfillment from Miami | B&S Commerce',
    seoDescription: 'B2B and B2C fulfillment from Miami with customs, freight and returns in the same operation — serving retail, marketplaces and DTC.',
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
    faqs: [
      { q: 'Which categories do you represent?', a: 'Beauty and personal care, food and beverage, accessories, and apparel — premium consumer brands with a long-term view of the Americas.' },
    ],
    cta: { eyebrow: 'Bringing a consumer brand to the Americas?', label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution&persona=consumer-brand`, name: 'talk_commerce' },
    programs: ['international-expansion-boost'],
    mediaId: 'HOME-DIV-COM',
    seoTitle: 'Brand Expansion, Licensing & Representation in the Americas | B&S Commerce',
    seoDescription: 'Licensing, brand representation and commercial development for beauty, food & beverage, accessories and apparel brands entering the U.S. and Latin America.',
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
    statement: ['Different industries.', 'The same client.'],
    faqs: [
      { q: 'Is this a concierge service?', a: 'No. We do not send a client to someone who needs a jet, a yacht or a table. We work with companies and strategic partners to create business — relationships, partnerships, visibility and commercial opportunity — because they serve the same client we do.' },
    ],
    cta: { eyebrow: 'Serving the same client in Miami?', label: 'Explore a partnership', href: '/become-a-partner', name: 'luxury_partner' },
    mediaId: 'HOME-DIV-LUX',
    seoTitle: 'The Seven Luxury Verticals — B&S Luxury Ecosystem | BIZ & STYLE',
    seoDescription: 'Luxury real estate, private aviation, yachting, interior design, luxury goods, luxury media and celebrity/sports/entertainment — one HNWI client, one business-development ecosystem in Miami.',
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
      { q: 'Where is the property search?', a: 'Listings, neighbourhoods and new developments live on the dedicated B&S Luxury site, bns-luxury.com. This page explains the business-development relationship.' },
    ],
    cta: { eyebrow: 'Developing a luxury project in Miami?', label: "Tell us what you're building", href: `${TELL}?persona=developer&intent=partnership`, name: 'developer_tell_us' },
    mediaId: 'HOME-DIV-LUX',
    seoTitle: 'Developer Partnerships — B&S Luxury Miami | BIZ & STYLE',
    seoDescription: 'Strategic business-development and marketing programmes with selected luxury developments in Miami: proprietary digital acquisition, international buyers, events and ecosystem.',
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
    faqs: [
      { q: 'What kind of partners does B&S Luxury look for?', a: 'Companies and professionals serving high-net-worth clients in Miami and internationally — aviation, yachting, design, luxury goods, media, entertainment, developers and brokerages — whose ambitions intersect with ours.' },
    ],
    cta: { eyebrow: 'Think our ecosystems intersect?', label: 'Explore a partnership', href: '/become-a-partner', name: 'luxury_partner' },
    mediaId: 'HOME-DIV-LUX',
    seoTitle: 'B&S Luxury Business Development Ecosystem | BIZ & STYLE',
    seoDescription: 'How B&S Luxury generates business: an offline luxury ecosystem and an in-house digital acquisition engine feeding one platform in Miami.',
  },
];

export const byDivision = (d: Division) => services.filter((s) => s.division === d);
export const getService = (d: Division, slug: string) => services.find((s) => s.division === d && s.slug === slug);

export const divisionMeta: Record<Division, { name: string; role: string; path: string; ground: 'onyx' | 'paper' }> = {
  advisory: { name: 'B&S Advisory', role: 'Strategy & Growth', path: '/advisory', ground: 'paper' },
  commerce: { name: 'B&S Commerce', role: 'Trade & Distribution', path: '/commerce', ground: 'onyx' },
  luxury: { name: 'B&S Luxury', role: 'Real Estate & High-Value Ecosystems', path: '/luxury', ground: 'onyx' },
};
