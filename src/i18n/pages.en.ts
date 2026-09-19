/**
 * Copy for hub, about, programme and conversion pages (EN master).
 * Service pages read src/data/services.ts; programmes read src/data/programs.ts.
 */
const TELL = '/tell-us';

export const pages = {
  platform: {
    seo: { title: 'The Platform · Who We Are | BIZ & STYLE', description: 'BIZ & STYLE DNA INC.: Miami business development platform since 2017 — Advisory, Commerce, Luxury. +1 305-549-4289.' },
    faqs: [
      { q: 'What is BIZ & STYLE?', a: 'A Miami-based business development platform founded in 2017 by entrepreneur Dario Picardi — developing ventures and commercial partnerships across the Americas.' },
      { q: 'How is the platform organised?', a: 'BIZ & STYLE DNA INC. in Miami Beach, three operating divisions (Advisory, Commerce, Luxury), and dedicated entities / JVs with strategic partners when needed.' },
      { q: 'What is The Investor Journey™?', a: 'The proprietary framework connecting Business, Wealth and Lifestyle across the platform — detail and trademark narrative live on related journey pages.' },
      { q: 'How is this different from Divisions?', a: 'This page is identity and structure. `/divisions` is the chooser into Advisory, Commerce or Luxury.' },
      { q: 'How do I get in touch?', a: '+1 305-549-4289 · info@bizandstyledna.com · Thyssen Building, 1000 5th Street, Suite 200, Miami Beach, FL 33139.' },
    ],
    relatedLinks: [
      { href: '/divisions', label: 'choose Advisory, Commerce or Luxury', line: 'The three-engines chooser — where to start.' },
      { href: '/miami', label: 'Miami is the platform to the Americas', line: 'The geo hub — HQ since 2017, bonded, operators.' },
      { href: '/solutions', label: 'five turnkey solution categories', line: 'The à la carte map — not this identity page.' },
      { href: '/programs', label: 'three signature programmes', line: 'Expansion · Digital · Fractional — packaged offers.' },
      { href: '/investor-journey', label: 'The Investor Journey™', line: 'Business · Wealth · Lifestyle — the circle of growth.' },
    ],
    hero: { eyebrow: 'The platform', title: ['One platform.', 'Three divisions. Integrated.'], lede: 'A Miami-based business development platform connecting strategy, execution, commerce, technology and high-value relationships across the Americas and beyond.' },
    definition: {
      q: 'Who is BIZ & STYLE?',
      a: [
        'BIZ & STYLE (BIZ & STYLE DNA INC.) is a business development platform founded in Miami Beach in 2017 by entrepreneur Dario Picardi. It develops and operates ventures and commercial partnerships across the Americas and is appointed by international brands and manufacturers as their commercial partner for the United States and Latin America.',
        'The platform operates through three integrated divisions — B&S Advisory (strategy and growth), B&S Commerce (trade and distribution) and B&S Luxury (real estate and high-value ecosystems) — connected by a proprietary framework, The Investor Journey™, and by physical and digital infrastructure already in place in Miami.',
      ],
    },
    mission: { eyebrow: 'Mission & vision', lines: ['Your vision is our mission.', 'Our vision is your success.'], body: ['We shape business, build wealth and elevate lifestyle — turning your vision into action and opportunity into measurable success. Every solution is first tested within our own ventures before it is offered to partners.', 'We do it by redefining traditional business models through innovation, strategic partnerships and global networks — bridging business, wealth and lifestyle into one cohesive platform.'] },
    engines: { eyebrow: 'Three engines', title: 'Not three companies. One system.', items: [
      { name: 'B&S Advisory', line: 'Strategy that ends in execution — business strategy, international expansion, fractional executive, business development, digital growth.', href: '/advisory', tag: 'Strategy & growth' },
      { name: 'B&S Commerce', line: 'From product to market — import/export, distribution, marketplaces, domestic and bonded warehousing, fulfillment, brand expansion.', href: '/commerce', tag: 'Trade & distribution' },
      { name: 'B&S Luxury', line: 'Business development at the highest level — luxury real estate, developer partnerships and a seven-vertical HNWI ecosystem.', href: '/luxury', tag: 'Real estate & ecosystems' },
    ] },
    links: { eyebrow: 'Explore', items: [
      { name: 'How we work', line: 'Built in the real world: what we execute, and where licensed specialists deliver.', href: '/platform/how-we-work' },
      { name: 'The Investor Journey™', line: 'Business → Wealth → Lifestyle → ∞. The circle of growth we lived first.', href: '/investor-journey' },
      { name: 'Internationalization', line: 'Export is not internationalization. Nine pillars, five phases.', href: '/internationalization' },
      { name: 'Digital engine', line: 'From click to client — digital business infrastructure.', href: '/digital-engine' },
      { name: 'Lead generation', line: 'High-ticket acquisition — digital and offline — built in-house.', href: '/lead-generation' },
      { name: 'Infrastructure', line: 'HQ, team, warehouse, logistics, technology, network.', href: '/infrastructure' },
      { name: 'Miami', line: 'The platform to the Americas.', href: '/miami' },
      { name: 'Partner ecosystem', line: 'Great business rarely happens alone.', href: '/partners' },
      { name: 'Signature programs', line: 'Expansion · Digital · Fractional.', href: '/programs' },
    ] },
    cta: { eyebrow: 'Start here', title: ['Tell us', "what you're building."], primary: { label: "Tell us what you're building", href: TELL, name: 'tell_us' }, secondary: { label: 'Become a partner', href: '/become-a-partner', name: 'partner' } },
  },

  howWeWork: {
    seo: { title: 'How We Work · Operators First | BIZ & STYLE', description: 'Every capability is built, operated and tested in our own ventures first — then offered to clients from Miami Beach. +1 305-549-4289.' },
    hero: { eyebrow: 'How we work', title: 'Built in the real world.', lede: 'What BIZ & STYLE recommends is first built, operated, tested and optimized inside its own ventures. Then it is brought to clients from Miami Beach.' },
    inHouseTitle: 'What we operate in-house vs where licensed specialists deliver',
    statement: { lines: ["We don't sell theory.", 'We build it. We operate it.', 'We test it. We optimize it.', 'Then we bring it to our clients.'], body: ['The method comes from firsthand experience: building businesses, operating companies, entering international markets, managing distribution, running a warehouse, building digital acquisition, generating leads, developing commercial relationships, investing, working in real estate and operating inside luxury ecosystems.', 'That is why the platform is organized the way it is — the divisions mirror the journey we lived.'] },
    process: { eyebrow: 'The engagement', title: 'From method to engagement', steps: [
      { name: 'Conversation', line: 'Tell us what you are building. We listen for where you are and where you want to go.' },
      { name: 'Roadmap', line: 'A clear proposal: scope, deliverables, timeline, and who delivers what — in-house or licensed partner.' },
      { name: 'Execution', line: 'The team that designed it runs it: market, distribution, digital, relationships.' },
      { name: 'Optimization', line: 'Continuous review against objectives. The system gets smarter with every interaction.' },
    ] },
    sections: [
      {
        title: 'Tested in our own ventures first',
        paragraphs: [
          'Every capability we offer is built, operated, tested and optimized inside BIZ & STYLE ventures first — then made available to clients from Miami Beach. We do not sell theory or playbooks. Miami, the United States, Latin America and the wider Americas are where those ventures already run.',
          'The method is operators-first: commercial, digital and trade systems in-house. Licensed lawyers, accountants, immigration counsel and other regulated professionals deliver where the law requires.',
        ],
      },
      {
        title: 'How this maps to Advisory · Commerce · Luxury',
        paragraphs: [
          'This page explains our operating method. It is not a Solutions catalogue and not an Advisory sales page. Solutions maps five solution categories à la carte or as an ecosystem. Divisions is the three-engines chooser. The platform page is who we are / the org story.',
          'Advisory, Commerce and Luxury are the three engines that inherit the method. Our story lives on About. Talk to the team from Miami Beach when the next step is a conversation — +1 305-549-4289 or info@bizandstyledna.com.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you sell theory or playbooks?', a: 'No. Every capability we offer is built, operated, tested and optimized inside BIZ & STYLE ventures first — then made available to clients.' },
      { q: 'What do you deliver yourselves vs through specialists?', a: 'We operate commercial, digital and trade systems in-house. Licensed lawyers, accountants, immigration counsel and other regulated professionals deliver where the law requires.' },
      { q: 'Is How We Work the same as Solutions?', a: 'No. This page explains our operating method. /solutions maps five solution categories à la carte or as an ecosystem.' },
      { q: 'How do I start?', a: 'Call or WhatsApp +1 305-549-4289, or email info@bizandstyledna.com.' },
    ],
    relatedLinks: [
      { href: '/platform', label: 'who we are / org story', line: 'One platform. Three divisions. Integrated.' },
      { href: '/solutions', label: 'five solution categories', line: 'À la carte or as an ecosystem — not this method page.' },
      { href: '/divisions', label: 'three engines chooser', line: 'Advisory · Commerce · Luxury.' },
      { href: '/about', label: 'our story', line: 'Built by operators. Not observers.' },
      { href: '/connect', label: 'talk to the team', line: 'Miami Beach HQ — phone, WhatsApp, email.' },
    ],
    cta: { eyebrow: 'Start here', title: ['Tell us', "what you're building."], primary: { label: "Tell us what you're building", href: TELL, name: 'tell_us' }, secondary: { label: "Let's connect", href: '/connect', name: 'connect' } },
  },

  internationalization: {
    seo: { title: 'Internationalization vs Export | BIZ & STYLE', description: 'Export sells products. Internationalization builds market presence. Nine pillars and five phases from Miami · +1 305-549-4289.' },
    hero: { eyebrow: 'Internationalization', title: ['Export is not', 'internationalization.'], lede: 'Export sells products. Internationalization builds a long-term commercial presence — until your company becomes part of the market.' },
    definition: { q: 'What is the difference between export and internationalization?', a: ['Export looks for orders: short-term, transactional, product-focused, price-driven, usually through one distributor, reactive. Internationalization looks for a position in the market: long-term, relationship-driven, market-focused, value-driven, built with the entire ecosystem, proactive.', 'Real internationalization begins when your company is no longer perceived as a foreign supplier, but as a trusted participant in the local business ecosystem.'] },
    mistakes: { eyebrow: 'Why most fail', title: ['International expansion fails when it is treated', 'as an attempt — not a clear objective.'], items: [
      { name: 'Advising from home', line: 'Relying on a consultant in your own country — thousands of miles from the real market.' },
      { name: 'Theory, not execution', line: 'Market entry treated as a study on paper, never as real business action on the ground.' },
      { name: 'No infrastructure', line: 'No warehouse, logistics, banking or legal setup — every step improvised and delayed.' },
      { name: 'No local team', line: 'No executive presence in-market means no accountability, no speed and no trust.' },
      { name: 'Underestimating compliance', line: 'Customs, tax, immigration and regulation are far more complex than expected.' },
      { name: 'No network or credibility', line: 'Arriving as an unknown, struggling to open doors and win serious partners.' },
    ], result: 'The result is always the same: wasted time, wasted capital and lost credibility — before the business ever gets off the ground.' },
    ingredients: { eyebrow: 'The smart way', title: 'Three things you need in-market. We already have all three, in Miami.', items: [
      { name: 'Executive team', line: 'Senior leadership already operating in-market — not consultants, but a team that executes.' },
      { name: 'Real infrastructure', line: 'Offices, domestic and bonded warehousing, logistics, banking and legal partners — ready from day one.' },
      { name: 'Proven experience', line: 'A track record across the U.S. and LATAM — we did it for our own ventures first.' },
    ] },
    pillars: { eyebrow: 'What it actually requires', title: 'The nine pillars.', lede: 'Internationalization means becoming part of the market. It is built on nine capabilities.', items: [
      { name: 'Local presence', line: 'Physically present through offices, partners or regular market visits.' },
      { name: 'Relationships', line: 'Trust built with retailers, distributors, buyers, institutions and industry leaders — over years.' },
      { name: 'Local team', line: 'People who understand the language, culture and business practices of the country.' },
      { name: 'Market intelligence', line: 'Competitors, pricing, regulations, consumer behavior, distribution models and trends.' },
      { name: 'Commercial network', line: 'Knowing exactly who the key decision makers are and how each company operates.' },
      { name: 'Reputation', line: 'Recognized as a reliable long-term partner — not an occasional supplier.' },
      { name: 'Business development', line: 'Creating opportunities before they officially exist, through continuous networking.' },
      { name: 'Infrastructure', line: 'Logistics, compliance, warehousing, legal structure, financial and operational capability.' },
      { name: 'Continuity', line: 'Returning to the market consistently — not only when there is an opportunity.' },
    ] },
    model: { eyebrow: 'How we build it', title: 'The BIZ & STYLE model. Five phases.', steps: [
      { name: 'Understand', items: ['Study the company', 'Define objectives', 'Assess resources', 'Evaluate readiness'] },
      { name: 'Build', items: ['Market strategy', 'Brand positioning', 'Country prioritization', 'Entry model', 'Business plan'] },
      { name: 'Enter', items: ['Introduce the company', 'Meet key accounts', 'Distributors & retailers', 'Trade shows', 'Build visibility'] },
      { name: 'Develop', items: ['Continuous visits', 'Follow-up meetings', 'Training & negotiations', 'Commercial support', 'Relationship management'] },
      { name: 'Establish', items: ['Long-term customers', 'Strong reputation', 'Local network', 'Sustainable sales', 'Organic growth'] },
    ], closing: "This is why BIZ & STYLE is the partner for internationalization — not export. We don't sell introductions or distributor searches; we build the infrastructure, relationships and credibility to make your company part of the market." },
    miamiPlatform: {
      title: 'Miami as platform (U.S. + LATAM; NY/SV adjacency)',
      paragraphs: [
        'Miami is the platform for both the United States and Latin America: U.S. from headquarters; Mexico, the Caribbean, Brazil and wider LATAM through operating bases and the bonded hub. Europe remains the origin market for most of the companies we bring.',
        'Founders relocating from New York or Silicon Valley / California use the same Miami node — team, infrastructure and experience already in-market — so relocation is not a second project from the expansion. Three things you need in-market — Miami already has them.',
      ],
    },
    faqs: [
      { q: 'How long does internationalization take?', a: 'Longer than an export deal and shorter than most companies fear when infrastructure already exists. Enter and Develop phases are where consistency matters most.' },
      { q: 'Can we start with the U.S. and add Latin America later?', a: 'Yes. Miami is the platform for both: U.S. from headquarters; Mexico, Caribbean, Brazil and wider LATAM through operating bases and the bonded hub.' },
      { q: 'Who handles company formation, tax and visas?', a: 'BIZ & STYLE coordinates the sequence; licensed professionals deliver each regulated step.' },
      { q: 'Where do I go to buy the service?', a: 'Start with /advisory/international-expansion for delivery; use /advisory/temporary-export-management for a TEM mandate.' },
      { q: 'Is there a programmes boost offer?', a: 'Yes. International Expansion Boost™ is the packaged market-entry programme at /programs/international-expansion-boost. Other programme options live via Advisory and Programs.' },
    ],
    links: [
      { href: '/advisory/international-expansion', label: 'international expansion service', line: 'The service that delivers U.S. and LATAM expansion.' },
      { href: '/advisory/temporary-export-management', label: 'temporary export manager', line: 'A focused TEM mandate — not the thought hub.' },
      { href: '/miami', label: 'three things in-market — Miami', line: 'Team, infrastructure and experience already on the ground.' },
      { href: '/commerce/bonded-warehouse', label: 'infrastructure · bonded warehouse', line: 'The infrastructure pillar, duty-deferred in Miami.' },
    ],
    cta: { eyebrow: 'Make the U.S. a market. Not an experiment.', title: ['Planning your', 'U.S. expansion?'], primary: { label: 'Assess your expansion', href: `${TELL}?intent=market-entry&persona=international-company`, name: 'assess_expansion' }, secondary: { label: 'International Expansion Boost™', href: '/programs/international-expansion-boost', name: 'ieb' } },
  },

  digitalEngine: {
    seo: { title: 'Digital Engine — From Click to Client | BIZ & STYLE', description: 'Owned digital acquisition: websites, Google & Meta, SEO/GEO, CRM — built in-house. From click to client · Miami · +1 305-549-4289.' },
    hero: { eyebrow: 'Digital engine', title: ['From click', 'to client.'], lede: 'Not a marketing agency. Digital business infrastructure — built, owned and optimized in-house, and run for our own divisions before it is offered to anyone else. Miami-based, with international targeting and GEO for AI search.' },
    definition: { q: 'What is the BIZ & STYLE digital engine?', a: ['The digital engine is an owned acquisition system that connects attention to pipeline: intelligence, positioning, website and landing pages, content with SEO and GEO, Google and Meta acquisition, lead capture, CRM, qualification, automation, nurture, sales pipeline, attribution and optimization — as one loop.', 'B&S Luxury runs on it: proprietary digital acquisition generated high-net-worth opportunities in some of the most relationship-driven segments of the Miami market.'] },
    leadGen: {
      title: 'How the engine connects to lead generation',
      paragraphs: [
        'Lead generation is the high-ticket demand offer at /lead-generation/. The digital engine is the broader owned acquisition infrastructure that can power lead gen and other divisions — Advisory, Commerce and Luxury — from the same Miami-based platform.',
        'If you need the packaged build, the Digital Growth Engine™ programme is the commercial offer. If you need high-ticket demand in aviation, yachts, luxury real estate or B2B, that page stays the offer. This page owns from click to client.',
      ],
    },
    faqs: [
      { q: 'Do you replace our agency?', a: 'We build and operate infrastructure you own — websites, accounts, CRM, data. Agencies can plug into it; the system no longer depends on them.' },
      { q: 'What is GEO?', a: 'Generative Engine Optimization: being understood and cited by AI-search systems. It rewards entity clarity, structured content and consistent facts.' },
      { q: 'Is this the same as lead generation?', a: 'Lead generation is the high-ticket demand offer at /lead-generation/. The digital engine is the broader owned acquisition infrastructure that can power lead gen and other divisions.' },
      { q: 'Where is the packaged programme?', a: 'Digital Growth Engine™ programme: /programs/digital-growth-engine.' },
      { q: 'Who is this for?', a: 'Brands and operators who need owned digital business infrastructure in Miami and across the Americas — not rented campaigns alone.' },
    ],
    links: [
      { href: '/programs/digital-growth-engine', label: 'Digital Growth Engine™ programme', line: 'The packaged programme that builds the engine.' },
      { href: '/lead-generation/', label: 'high-ticket lead generation', line: 'The P5 offer. We do not rewrite that page from here.' },
      { href: '/luxury', label: 'B&S Luxury runs on this engine', line: 'Proof — proprietary digital acquisition on our own division.' },
      { href: '/miami', label: 'Miami-based platform', line: 'HQ, operators and the geo node behind the stack.' },
    ],
    cta: { eyebrow: 'Want to understand where your acquisition system is leaking?', title: ['Request a', 'digital growth review.'], primary: { label: 'Request a digital growth review', href: `${TELL}?intent=digital-growth`, name: 'digital_growth_review' }, secondary: { label: 'Digital Growth Engine™', href: '/programs/digital-growth-engine', name: 'dge' } },
  },

  leadGeneration: {
    seo: {
      title: 'High-Ticket Lead Generation Agency · Miami | BIZ & STYLE',
      description: 'Sophisticated lead generation for high-ticket brands — private aviation, yachts, luxury real estate, and B2B. Online + offline acquisition, Google Ads & Meta, conversion tracking. Integrated agency + business company in Miami serving the Americas.',
    },
    ogImageAlt: 'BIZ & STYLE Lead Generation · Miami · Americas',
    hero: {
      eyebrow: 'Lead generation',
      title: 'Lead generation for sophisticated, high-ticket growth.',
      lede: 'Qualified demand for private aviation, yachts, luxury real estate and high-value B2B — digital and offline, from a Miami business company with an integrated in-house agency.',
    },
    engines: {
      title: 'Online + offline acquisition in one system',
      lede: 'Digital campaigns, web conversion, and events or relationship channels feed one pipeline so Miami and Americas opportunities do not live in separate silos.',
      items: [
        { name: 'Digital', line: 'Websites, landing pages, Google Ads, Meta, capture and conversion tracking — one owned loop.' },
        { name: 'Offline', line: 'Events, introductions and relationship channels in the luxury and international ecosystems we already operate.' },
        { name: 'One pipeline', line: 'Every inquiry carries source, intent and attribution into CRM — not a spreadsheet on the side.' },
      ],
    },
    paid: {
      title: 'Google Ads & Meta for high-intent demand',
      lede: 'Paid search and social are part of the stack, not a campaign rented from a media-buyer shop.',
      items: [
        { name: 'Google Ads', line: 'Search and demand capture for high-ticket categories, including international targeting from Miami.' },
        { name: 'Meta', line: 'Paid social for luxury and international audiences, connected to the same destinations and CRM.' },
        { name: 'Not ads in isolation', line: 'Landing pages, CRM handoff and conversion tracking sit in the same system as the media.' },
      ],
    },
    convert: {
      title: 'Websites that convert — and tracking that proves it',
      lede: 'Destinations and measurement before spend. We design for measurable conversion — forms, calls, CRM — so spend maps to pipeline.',
      items: [
        { name: 'Website creation', line: 'Dedicated sites and landing pages built to convert, not to decorate.' },
        { name: 'Conversion UX', line: 'Forms and offers matched to high-ticket intent — the right depth for the visitor.' },
        { name: 'Conversion tracking', line: 'Source, campaign and landing page on every inquiry. GTM/GA4 property create remains on hold until that workstream is approved.' },
      ],
    },
    verticals: {
      title: 'Built for private aviation, yachts, luxury RE, and B2B',
      lede: 'Category knowledge is part of the offer — these are lanes BIZ & STYLE already works in.',
      items: [
        { name: 'Private aviation', line: 'High-net-worth demand and relationship-driven sales — a B&S Luxury strategic vertical.', href: '/luxury/seven-verticals' },
        { name: 'Yachts', line: 'Introductions and digital demand together, in a category that still runs on relationships.', href: '/luxury/seven-verticals' },
        { name: 'Luxury real estate', line: 'Qualified buyer and investor demand — proprietary digital acquisition tested on our own Miami practice.', href: '/luxury' },
        { name: 'High-value B2B', line: 'International companies, operators and brands who need U.S. and LATAM pipeline, not traffic.', href: '/internationalization' },
      ],
    },
    miami: {
      title: 'An integrated agency + business company in Miami',
      body: [
        'BIZ & STYLE is not a thin media-buyer shop. It is a Miami-based business company with an integrated in-house agency: Advisory, Commerce and Luxury share infrastructure, so lead generation can connect to market entry, distribution and luxury ecosystems across the Americas.',
        'The parallel is the real-estate practice. B&S Luxury is a division of the platform, not an isolated brokerage. Acquisition is the same idea — an operating capability, run on our own ventures first.',
      ],
    },
    folds: {
      title: 'How Lead Gen folds into Advisory, Commerce & Luxury',
      lede: 'The same team that generates the lead can take the company into the market, into distribution, or into the luxury ecosystem.',
      items: [
        { name: 'Digital engine', line: 'The owned loop from click to client — websites, Google and Meta, SEO and GEO, CRM, automation.', href: '/digital-engine' },
        { name: 'Digital Growth Engine™', line: 'The programme that builds that infrastructure as one engagement.', href: '/programs/digital-growth-engine' },
        { name: 'B&S Advisory', line: 'Market entry, fractional executive and business development when the lead is an international company.', href: '/advisory' },
        { name: 'B&S Luxury', line: 'Aviation, yachting and luxury real estate — offline relationships on the same pipeline.', href: '/luxury' },
        { name: 'Miami', line: 'The platform to the Americas — HQ, infrastructure and the market where high-ticket demand concentrates.', href: '/miami' },
        { name: 'Tell us what you are building', line: 'A conversation is where every engagement starts.', href: '/tell-us?intent=digital-growth' },
      ],
    },
    faqs: [
      { q: 'What is “sophisticated” or high-ticket lead generation?', a: 'Demand systems built for expensive, considered purchases — private aviation, yachts, luxury property, B2B services — where trust, qualification, and follow-up matter more than volume.' },
      { q: 'Do you run Google Ads and Meta Ads?', a: 'Yes. Paid search and social are part of an integrated acquisition stack with landing pages, CRM handoff, and conversion tracking — not ads in isolation.' },
      { q: 'Online and offline — how do they connect?', a: 'Digital campaigns, web conversion, and events/relationship channels feed one pipeline so Miami and Americas opportunities don’t live in separate silos.' },
      { q: 'How is BIZ & STYLE different from a typical marketing agency?', a: 'We are an integrated agency and business company: Advisory, Commerce, and Luxury share infrastructure, so lead gen can connect to market entry, distribution, and luxury ecosystems.' },
      { q: 'Who is this for?', a: 'Brands and operators in private aviation, yachting, luxury real estate, and high-value B2B who need qualified demand in Miami and across the Americas.' },
      { q: 'What about tracking and attribution?', a: 'We design for measurable conversion (forms, calls, CRM) so spend maps to pipeline — GTM/GA4 property create remains on hold until Dario/Cathy approve that workstream.' },
    ],
    cta: {
      eyebrow: 'Need qualified demand — not just traffic?',
      title: ['Request a', 'digital growth review.'],
      primary: { label: 'Request a digital growth review', href: `${TELL}?intent=digital-growth`, name: 'leadgen_review' },
      secondary: { label: 'Digital Growth Engine™', href: '/programs/digital-growth-engine', name: 'dge' },
    },
  },

  infrastructure: {
    seo: { title: 'Infrastructure Already in Place | BIZ & STYLE', description: 'Miami HQ since 2017, executive team, bonded + domestic warehouse, fulfillment, CRM, 200+ network — capability already in place. +1 305-549-4289.' },
    hero: { eyebrow: 'Infrastructure', title: ['Not advice from a distance.', 'Capability already in place.'], lede: 'Plug into a complete ecosystem — operational from day one. Miami Beach HQ since 2017, with operating bases in Mexico and Brazil.' },
    definition: { q: 'What infrastructure does BIZ & STYLE operate?', a: ['BIZ & STYLE operates its headquarters in Miami Beach (since 2017), an executive team on the ground, domestic and bonded warehousing in Miami, fulfillment and logistics (customs, freight, B2B and B2C), technology and CRM systems for acquisition and e-commerce, marketing and PR, a proprietary network of more than 200 commercial partners, and a coordinated network of licensed professionals for legal, tax, immigration, banking and financial matters.'] },
    presence: { eyebrow: 'Our presence', title: 'Three bases across the Americas.', items: [
      { name: 'Miami', line: 'Headquarters and bonded warehouse — base to manage the United States, Canada and the Caribbean. PortMiami and MIA sit next door.', tag: 'HQ' },
      { name: 'Mexico', line: 'Operating base to manage Mexico and Central America.', tag: 'Base' },
      { name: 'Brazil', line: 'Operating base to manage Brazil and the wider LATAM region.', tag: 'Base' },
    ] },
    sections: [
      {
        title: 'Miami HQ · executive team · technology & CRM',
        paragraphs: [
          'Headquarters have been in Miami Beach since 2017 — not a mailbox, and not advice delivered from another continent. An in-market executive team runs the platform. Technology and CRM — acquisition, e-commerce and analytics — are built and operated in-house.',
        ],
      },
      {
        title: 'Domestic + bonded warehousing · fulfillment + logistics',
        paragraphs: [
          'Domestic storage holds goods already in U.S. commerce. Bonded storage holds imports until release — duty deferral, re-export without U.S. duty, in-bond consolidation near PortMiami. Fulfillment and logistics cover customs, air and ocean freight, B2B and B2C.',
        ],
      },
      {
        title: 'Commercial network (200+) · licensed professional network',
        paragraphs: [
          'A proprietary network of more than 200 commercial partners across the United States and Latin America. Regulated work — legal, tax, immigration, banking — is delivered by independent licensed professionals. BIZ & STYLE coordinates; they deliver.',
        ],
      },
    ],
    faqs: [
      { q: 'What infrastructure does BIZ & STYLE operate?', a: 'Miami Beach HQ since 2017, an in-market executive team, domestic and bonded warehousing, fulfillment and logistics, in-house technology/CRM, marketing, a 200+ commercial network, and a coordinated licensed professional network.' },
      { q: 'Is this consulting or operating capability?', a: 'Operating capability. Plug into systems and teams already running — not advice delivered from another continent.' },
      { q: 'Do you deliver legal, tax and immigration yourselves?', a: 'No. Regulated disciplines are delivered by independent licensed professionals. BIZ & STYLE coordinates; they deliver.' },
      { q: 'How does this relate to the bonded warehouse page?', a: '/commerce/bonded-warehouse deepens duty-deferral. This page inventories the full stack, including bonded storage as one block.' },
      { q: 'Where are your operating bases?', a: 'HQ Miami (U.S., Canada, Caribbean), Mexico base (Mexico & Central America), Brazil base (Brazil & wider LATAM).' },
      { q: 'How do I start?', a: '/tell-us or /connect · +1 305-549-4289 · info@bizandstyledna.com.' },
    ],
    relatedLinks: [
      { href: '/miami', label: 'Miami platform to the Americas', line: 'The geo hub — HQ, bonded, operators. Not this inventory page.' },
      { href: '/commerce/bonded-warehouse', label: 'bonded warehouse', line: 'Duty-deferral depth — one block in this stack.' },
      { href: '/commerce/warehousing', label: 'domestic warehousing', line: 'Goods already in U.S. commerce.' },
      { href: '/commerce/fulfillment', label: 'fulfillment', line: 'B2B and B2C from the Miami hub.' },
      { href: '/digital-engine', label: 'digital engine', line: 'From click to client — the owned acquisition loop.' },
      { href: '/platform', label: 'the platform', line: 'Who we are — three divisions, integrated.' },
    ],
    cta: { eyebrow: 'Ready to plug in?', title: ['Tell us', "what you're building."], primary: { label: "Tell us what you're building", href: TELL, name: 'tell_us' }, secondary: { label: 'Talk to B&S Commerce', href: `${TELL}?intent=distribution`, name: 'talk_commerce' } },
  },

  miami: {
    seo: { title: 'Miami Platform to the Americas | BIZ & STYLE', description: "Miami is BIZ & STYLE's platform to the Americas — HQ since 2017, bonded hub, NY & Silicon Valley relocation, LATAM reach. Miami Beach · +1 305-549-4289." },
    hero: { eyebrow: 'Miami', title: ['Not just our headquarters.', 'Miami is the platform to the Americas.'], lede: 'For decades Miami has been the business capital of Latin America — the meeting point of North America, LATAM, Europe and the Caribbean. Today it is booming. Headquarters in Miami Beach since 2017.' },
    definition: { q: 'Why is BIZ & STYLE based in Miami?', a: ['Miami is the gateway of the Americas: the historic decision-making hub for Latin America, "Wall Street South" for international capital, home to PortMiami and MIA — the cargo gateway of the Americas — with no state income tax and a constant influx of high-net-worth individuals. Major companies and funds from Silicon Valley and New York are relocating here.', 'BIZ & STYLE has been headquartered in Miami Beach since 2017. Being on the ground here is, in itself, a decisive advantage — and the bonded warehouse turns it into a distribution advantage for the whole region.'] },
    statement: { lines: ['European roots.', 'American execution.', 'Latin American reach.'], body: ['Founded by an Italian entrepreneur, headquartered in Miami, operating across the United States, Mexico, the Caribbean, Brazil and the wider region — with Europe as the origin market for most of the companies we bring to the Americas. Relationships extend to Dubai and Singapore.'] },
    sections: [
      {
        title: 'Why companies choose Miami for the Americas',
        paragraphs: [
          'Companies do not come to Miami for a postcard. They come because Miami is the business capital of Latin America and the trade gateway of the Americas — a city where United States, Latin America / LATAM, the Caribbean and Europe already share calendars, capital and cargo.',
          'Florida has no state income tax. Brickell concentrates international finance — Wall Street South. Decision makers pass through Miami Beach and the mainland every week. For an international company, a U.S. brand expanding into LATAM, or a founder who needs operators — not advisors at a distance — Miami is the shortest path to both northbound and southbound markets.',
          'BIZ & STYLE chose Miami Beach in 2017 for that reason. The headquarters is not a mailbox. It is the platform: executive team, bonded warehouse, digital engine and a commercial network that already works the Americas.',
        ],
      },
      {
        title: 'Gateway of the Americas — PortMiami, MIA, capital flows',
        paragraphs: [
          'PortMiami and Miami International Airport (MIA) make the city the cargo gateway of the Americas. Ocean and air meet one metro; Europe, the United States, Mexico, Brazil, the Caribbean and wider LATAM can be served from a single logistics node.',
          'Capital follows the same map. Family offices, funds and international banks sit in Brickell and Miami Beach. Trade lanes and money lanes occupy the same city — which is why a bonded hub here is not a warehouse story alone. It is a market-entry and redistribution story.',
          'When companies ask where to plant the first serious Americas flag, the answer is rarely “somewhere in the U.S.” It is Miami: gateway infrastructure, international capital, and a talent pool that already speaks the region.',
        ],
      },
      {
        title: 'Europe → Miami → United States · LATAM · Caribbean',
        paragraphs: [
          'The operating pattern is Europe → Miami → the Americas. Most of the companies we bring arrived from Europe with a product and a reputation at home. Miami is where they become part of the United States and, from the same headquarters, open Mexico, the Caribbean, Brazil and wider Latin America.',
          'One HQ serves northbound (United States and Canada) and southbound (LATAM and the Caribbean). Beyond the hemisphere, relationships extend to Dubai and Singapore — useful when the same group already trades those hubs, without pretending Miami is those cities.',
          'Export is not internationalization. Selling a container is not the same as building presence. Miami is where we keep team, infrastructure and experience in-market so the company can stop being a foreign supplier. Read export vs internationalization, then the service that delivers U.S. market entry from Miami.',
        ],
      },
      {
        title: 'NY and Silicon Valley / California relocating to Miami',
        paragraphs: [
          'New York and Silicon Valley / California keep sending founders, funds and headquarters south. The move is not lifestyle-only. Operators want a U.S. base that also opens Latin America — without a second coastal organization.',
          'We coordinate market presence, corporate setup sequencing and local operating infrastructure for founders relocating from New York or Silicon Valley. Licensed professionals deliver regulated legal, tax and immigration steps. The platform supplies what a relocation deck cannot: warehouse, team, digital engine and people to meet.',
          'If you are leaving NY or California for Miami, the question is not whether the city is busy. It is whether you land with operators on the ground. That is the conversation.',
        ],
      },
      {
        title: 'Bonded warehouse + executive team on the ground',
        paragraphs: [
          'Duty-deferred storage near PortMiami and MIA is the commerce proof of the geo thesis: pay U.S. duty only on release, re-export to LATAM without U.S. duty, consolidate while in bond. The bonded warehouse in Miami turns a headquarters into a two-market hub.',
          'The executive team is here — not on a quarterly flight. Temporary export management, international expansion, fractional leadership and the digital engine all run from the same Miami Beach address: Thyssen Building, 1000 5th Street, Suite 200, Miami Beach, FL 33139.',
          'Who should talk to us in Miami: international companies, U.S. brands expanding into LATAM, founders and investors who need operators. Call or WhatsApp +1 305-549-4289, or email info@bizandstyledna.com — or tell us what you\'re building.',
        ],
      },
    ],
    faqs: [
      { q: 'Why is BIZ & STYLE based in Miami?', a: 'Miami is the business capital of Latin America and the trade gateway of the Americas — PortMiami, MIA, international capital, and no state income tax. We have been headquartered in Miami Beach since 2017.' },
      { q: 'Is Miami useful for U.S. market entry and LATAM expansion?', a: 'Yes. One HQ serves the United States and Canada northbound and Mexico, the Caribbean, Brazil and wider LATAM southbound — with Dubai and Singapore relationships beyond.' },
      { q: 'Do you help founders relocating from New York or Silicon Valley?', a: 'We coordinate market presence, corporate setup sequencing and local operating infrastructure; licensed professionals deliver regulated legal, tax and immigration steps.' },
      { q: 'What is the bonded warehouse advantage from Miami?', a: 'Duty-deferred storage near PortMiami and MIA: pay U.S. duty only on release, re-export to LATAM without U.S. duty, consolidate while in bond.' },
      { q: 'Who should talk to BIZ & STYLE in Miami?', a: 'International companies, U.S. brands expanding into LATAM, founders and investors who need operators — not advisors at a distance.' },
      { q: 'How do I contact headquarters?', a: 'Call or WhatsApp +1 305-549-4289, or email info@bizandstyledna.com. Thyssen Building, 1000 5th Street, Suite 200, Miami Beach, FL 33139.' },
    ],
    links: [
      { href: '/commerce/bonded-warehouse', label: 'bonded warehouse in Miami', line: 'Duty-deferred storage near PortMiami and MIA.' },
      { href: '/advisory/international-expansion', label: 'U.S. market entry from Miami', line: 'The service that delivers expansion — five phases, licensed partners.' },
      { href: '/internationalization', label: 'internationalization vs export', line: 'The model: becoming part of the market, not shipping product.' },
      { href: '/tell-us', label: "tell us what you're building", line: 'A conversation is where every engagement starts.' },
    ],
    cta: { eyebrow: 'Coming to Miami?', title: ["Let's meet", 'on the ground.'], primary: { label: "Let's connect", href: '/connect', name: 'connect' }, secondary: { label: "Tell us what you're building", href: TELL, name: 'tell_us' } },
  },

  partners: {
    seo: { title: 'Partner Ecosystem | BIZ & STYLE', description: 'Companies and professionals whose expertise, clients and ambitions intersect with the BIZ & STYLE ecosystem. +1 305-549-4289.' },
    hero: { eyebrow: 'Partner ecosystem', title: 'Great business rarely happens alone.', lede: 'BIZ & STYLE develops long-term relationships with companies and professionals whose expertise, clients and ambitions intersect with our ecosystem — an institutional showcase, not a become-a-partner form.' },
    definition: { q: 'Who partners with BIZ & STYLE?', a: ['Luxury companies, professional firms, real-estate developers, consumer brands, international organizations, technology providers, strategic businesses and qualified specialists — in Miami, across the Americas and in Europe. Relationships are structured for the long term and, where appropriate, governed by business-development agreements.'] },
    audiences: { eyebrow: 'Who we partner with', title: 'Luxury companies · professional firms · developers · brands · technology · specialists', items: [
      { name: 'Luxury companies', line: 'Aviation, yachting, interior design, luxury goods, media, entertainment — serving the same HNWI client.' },
      { name: 'Professional firms', line: 'Corporate lawyers, tax advisors, accountants, immigration attorneys, banks — licensed, independent, vetted.' },
      { name: 'Developers', line: 'Luxury and pre-construction developments in Miami seeking international buyers and strategic programmes.' },
      { name: 'Brands', line: 'Premium consumer brands entering the Americas that need a commercial partner on the ground.' },
      { name: 'International organizations', line: 'Chambers, trade agencies and institutions supporting companies into the U.S. and LATAM.' },
      { name: 'Technology providers', line: 'CRM, e-commerce, logistics and AI platforms that plug into the engine.' },
      { name: 'Strategic businesses', line: 'Distributors, retailers, travel retail and marketplaces across the region.' },
      { name: 'Qualified specialists', line: 'Individuals with expertise and relationships that extend the journey.' },
    ] },
    principles: { lines: ['Relationships are capital.', 'Discretion is part of the relationship.'], body: ['Not every relationship belongs on a website. We selectively showcase collaborations while protecting the confidentiality of our clients, partners and commercial relationships. Selected credentials are available when relevant.'] },
    sections: [
      {
        title: 'How partnership works (discretion)',
        paragraphs: [
          'Discretion is part of the relationship. We do not publish a full partner list. Selected credentials are shared on request and, when appropriate, under NDA. The partner ecosystem is broader institutional relationships — luxury companies, professional firms, developers, brands, technology and specialists — around the platform in Miami, the United States, Latin America and the Americas.',
          'It is not brand expansion (a Commerce capability for consumer-brand licensing and representation) and not the become-a-partner intake form. This page is the ecosystem showcase.',
        ],
      },
      {
        title: 'Become a partner',
        paragraphs: [
          'Companies and professionals whose expertise, clients and ambitions intersect with Advisory, Commerce or Luxury should apply — not cold affiliate spam. Use become-a-partner or tell us what you\'re building, or email info@bizandstyledna.com / call +1 305-549-4289.',
          'The commercial network of 200+ partners powers BD and distribution. The partner ecosystem includes professional firms, developers, tech and specialists around the same platform.',
        ],
      },
      {
        title: 'Miami · Americas network',
        paragraphs: [
          'The network is Miami-based and Americas-wide. Partnership engineering structures JVs when the relationship needs a contract. Developer partnerships is the luxury-development BD programme. Contact HQ when the next step is a conversation, not a directory.',
        ],
      },
    ],
    faqs: [
      { q: 'Do you publish a full partner list?', a: 'No. Discretion is part of the relationship. Selected credentials are shared on request and, when appropriate, under NDA.' },
      { q: 'Who should become a partner?', a: 'Companies and professionals whose expertise, clients and ambitions intersect with Advisory, Commerce or Luxury — not cold affiliate spam.' },
      { q: 'Is this the same as brand expansion / representation?', a: 'Partner ecosystem is broader institutional relationships. Brand expansion is a Commerce capability for consumer brands.' },
      { q: 'How do I apply?', a: 'Use /become-a-partner or /tell-us, or email info@bizandstyledna.com / call +1 305-549-4289.' },
      { q: 'Where do partners sit vs the 200+ commercial network?', a: 'The commercial network powers BD and distribution; the partner ecosystem includes professional firms, developers, tech and specialists around the platform.' },
    ],
    relatedLinks: [
      { href: '/become-a-partner', label: 'become a partner', line: 'The application / intake path — not this showcase.' },
      { href: '/tell-us', label: "tell us what you're building", line: 'Structured intake when the brief is already a project.' },
      { href: '/advisory/partnership-engineering', label: 'partnership engineering', line: 'JVs and contract design when the relationship needs paper.' },
      { href: '/luxury/developer-partnerships', label: 'developer partnerships', line: 'Selected luxury developments — not this showcase.' },
      { href: '/connect', label: 'contact HQ', line: 'Phone, WhatsApp, email — Miami Beach.' },
    ],
    cta: { eyebrow: 'Think our ecosystems intersect?', title: ['Explore', 'a partnership.'], primary: { label: 'Explore a partnership', href: '/become-a-partner', name: 'partner' }, secondary: { label: 'Request credentials', href: '/request-credentials', name: 'credentials' } },
  },

  investorJourney: {
    seo: { title: 'Investor Journey™ | BIZ & STYLE', description: 'Business → Wealth → Lifestyle → ∞ — the BIZ & STYLE framework lived firsthand, then built into a Miami platform. +1 305-549-4289.' },
    hero: { eyebrow: 'The Investor Journey™', title: 'We lived it firsthand.', lede: 'Business. Wealth. Lifestyle. A single circle that keeps turning — the pattern we observed in every successful entrepreneur and investor, and the philosophy the BIZ & STYLE platform was built around.' },
    definition: { q: 'What is The Investor Journey™?', a: ['The Investor Journey™ is BIZ & STYLE’s proprietary framework describing how business, wealth and lifestyle connect. Business — creating, building, entering, expanding, scaling — generates capital, relationships, opportunities, knowledge and networks. That leads to wealth: generating, investing, diversifying, structuring and preserving, through real estate, strategic ventures and capital allocation with qualified professionals. Wealth seeks lifestyle: living, access, experience and connection — luxury real estate, private aviation, yachting, design, hospitality, luxury brands, events.', 'The journey is not linear. Lifestyle creates relationships; relationships create opportunities; opportunities create business. Business → Wealth → Lifestyle → Business. It is a circle of growth, and you can enter at any point.'] },
    how: { eyebrow: 'How the circle turns', lines: ['Where business becomes wealth.', 'And wealth becomes lifestyle.', 'And lifestyle opens new business.'], body: ['As ventures grow, they generate capital, relationships and entrepreneurial networks. Entrepreneurs naturally reinvest — business success leads to real estate, strategic ventures and luxury assets, with many spending increasing time in Miami, where investment and lifestyle converge.', 'The lifestyle, in turn, opens new business. Around this core sit the luxury verticals — real estate, yachting, private aviation, design, goods, media, entertainment — all sharing one denominator: high-net-worth individuals. Each engagement reveals connections often invisible from the outside, and continuously activates new journeys.'] },
    experts: { lines: ['One journey.', 'The right expert at every stage.'], body: ['We understand the Investor Journey because we have lived it firsthand. But understanding the complete journey does not mean pretending to be the specialist in every discipline. BIZ & STYLE executes where it has operating expertise — strategy, internationalization, commerce, distribution, digital growth, business development, luxury real estate — and works with carefully selected licensed professionals for legal, tax, accounting, immigration, banking, financial and wealth advisory.'] },
    entry: { eyebrow: 'Enter at any point', title: 'Three doors. One platform.', items: [
      { name: 'Start with business', line: 'Establish operations in Miami, enter the U.S. or LATAM, build distribution — and, over time, invest in the base that anchors your presence.', href: `${TELL}?intent=market-entry` },
      { name: 'Start with wealth', line: 'Acquire luxury or pre-construction real estate, and as trust grows tap into the ecosystem to launch ventures and expand.', href: `${TELL}?intent=investor&persona=investor` },
      { name: 'Start with lifestyle', line: 'Drawn by Miami’s energy and opportunity; what begins as a personal experience evolves into an investment, a business, a relocation.', href: `${TELL}?intent=investor&persona=investor` },
    ] },
    sections: [
      {
        title: 'Business → Wealth → Lifestyle → ∞',
        paragraphs: [
          'The Investor Journey™ is the BIZ & STYLE framework — Business → Wealth → Lifestyle → ∞ — lived firsthand, then built into a Miami platform. It is not a paid programme and not a fourth signature offer. Business generates wealth, wealth shapes lifestyle, lifestyle opens new business.',
          'Miami and Miami Beach are the origin. The Americas and Latin America are the operating theatre. Relocation is a soft door into the circle, not a visa product on this URL.',
        ],
      },
      {
        title: 'How the framework maps to three divisions',
        paragraphs: [
          'The platform page tells the org story (Business · Wealth · Lifestyle structure). This page defines the trademarked journey framework. Advisory, Commerce and Luxury are how engagements run — not a rewrite of those hubs.',
          'Signature programmes remain three: International Expansion Boost™, Digital Growth Engine™, Fractional Executive. This framework links to them without inventing a fourth.',
        ],
      },
      {
        title: 'Where programmes fit (without inventing a fourth)',
        paragraphs: [
          'Founders, investors and operators who want growth as a circle — not a one-off project — enter through a division or a programme. The founder story and About sit next to this framework so the entity and the trademark stay readable.',
        ],
      },
      {
        title: 'Miami origin',
        paragraphs: [
          'The circle was lived in Miami before it was named. Miami HQ is where the platform still sits. Call +1 305-549-4289 or email info@bizandstyledna.com.',
        ],
      },
    ],
    faqs: [
      { q: 'Is the Investor Journey™ a paid programme?', a: 'No. It is the BIZ & STYLE framework — Business generates Wealth, Wealth shapes Lifestyle, Lifestyle opens new Business. Engagements run through Advisory, Commerce, Luxury or signature programmes.' },
      { q: 'How does it relate to Platform?', a: '/platform tells the org story (Business · Wealth · Lifestyle structure). This page defines the trademarked journey framework.' },
      { q: 'Who is it for?', a: 'Founders, investors and operators who want growth as a circle — not a one-off project.' },
      { q: 'How do I start?', a: '+1 305-549-4289 or info@bizandstyledna.com.' },
    ],
    relatedLinks: [
      { href: '/platform', label: 'one platform · org story', line: 'How the organization is structured.' },
      { href: '/about', label: 'our story', line: 'Operators, not observers — Miami Beach, 2017.' },
      { href: '/about/dario-picardi', label: 'founder', line: 'Dario Picardi · Founder / President.' },
      { href: '/programs', label: 'signature programmes', line: 'Exactly three — never a fourth.' },
      { href: '/miami', label: 'Miami HQ', line: 'The platform to the Americas.' },
    ],
    cta: { eyebrow: 'Where are you on the journey?', title: ['Start your', 'Investor Journey.'], primary: { label: 'Start your Investor Journey', href: `${TELL}?intent=investor&persona=investor`, name: 'start_investor_journey' }, secondary: { label: 'Luxury real estate ↗', href: 'https://bns-luxury.com', name: 'bns_luxury' } },
  },

  programsIndex: {
    seo: { title: 'Signature Programs · Miami | BIZ & STYLE', description: 'Three programmes: International Expansion Boost™, Digital Growth Engine™ and Fractional Executive — Miami. +1 305-549-4289.' },
    hero: { eyebrow: 'Signature programs', title: ['Three ways', 'to start.'], lede: 'Each programme is a complete, understandable engagement — and each connects to the rest of the platform when you need more. Exactly three. Never a fourth.' },
    faqs: [
      { q: 'How many signature programmes are there?', a: 'Three: International Expansion Boost™, Digital Growth Engine™ and Fractional Executive. Each is a complete engagement that can connect to the rest of the platform.' },
      { q: 'Is a programme the same as an Advisory capability page?', a: 'No. Advisory pages explain capabilities. Programmes are packaged commercial offers with defined scope and cadence.' },
      { q: 'Can I start with one programme and add another?', a: 'Yes. Many clients start with Fractional or Digital and layer Expansion — or the reverse — as the market develops.' },
      { q: 'Where is delivery based?', a: 'Miami Beach headquarters, with operating reach across the United States, Latin America and Europe.' },
      { q: 'How do I choose?', a: 'A strategic conversation maps goals to the right programme — contact +1 305-549-4289 or info@bizandstyledna.com.' },
    ],
    relatedLinks: [
      { href: '/programs/international-expansion-boost', label: 'International Expansion Boost™', line: 'Enter America. Build for the long term.' },
      { href: '/programs/digital-growth-engine', label: 'Digital Growth Engine™', line: 'The packaged owned-acquisition programme.' },
      { href: '/programs/fractional-executive', label: 'Fractional Executive programme', line: 'Senior leadership embedded when you need it.' },
      { href: '/advisory', label: 'explore capabilities à la carte', line: 'Advisory explains capabilities; programmes package them.' },
      { href: '/digital-engine', label: 'Digital Engine infrastructure', line: 'The owned loop Digital Growth Engine™ builds.' },
    ],
    sections: [
      {
        title: 'International Expansion Boost™ — enter America, build for the long term',
        paragraphs: [
          'International Expansion Boost™ is the packaged market-entry programme: intelligence, representation, digital, distribution and ongoing execution from Miami Beach. It is the offer. The internationalization hub teaches the model. Advisory international expansion is the service.',
          'United States and Latin America — the Americas — with Europe as the typical origin market. Delivery is from Miami, not a remote workbook.',
        ],
      },
      {
        title: 'Digital Growth Engine™ — owned acquisition system',
        paragraphs: [
          'Digital Growth Engine™ is the packaged programme that builds the owned acquisition loop: web, paid, SEO/GEO, CRM and attribution. The Digital Engine page explains the infrastructure. High-ticket lead generation stays a separate offer.',
        ],
      },
      {
        title: 'Fractional Executive — senior leadership embedded when you need it',
        paragraphs: [
          'Fractional Executive is the packaged programme — role definition, embedded leadership, platform backing, transition. The Advisory fractional page explains the capability. The primary commercial URL is this programme.',
        ],
      },
      {
        title: 'How programmes connect to Advisory, Commerce and the Digital Engine',
        paragraphs: [
          'Advisory pages explain capabilities à la carte. Commerce runs physical trade from the Miami hub. The Digital Engine is the owned infrastructure story. A programme is how those pieces become a named engagement with scope and cadence — still only three programmes, delivered from Miami Beach across the United States, Latin America and Europe.',
        ],
      },
    ],
  },

  about: {
    seo: { title: 'Our Story · Operators | BIZ & STYLE', description: 'Built by operators, not observers — BIZ & STYLE since 2017 in Miami Beach. Three divisions, one platform. +1 305-549-4289.' },
    hero: { eyebrow: 'About', title: 'Built by operators. Not observers.', lede: 'The company comes first. The founder story explains why it is organized the way it is.' },
    definition: { q: 'What is the story of BIZ & STYLE?', a: ['BIZ & STYLE DNA INC. was founded in Miami Beach in 2017 by Dario Picardi, an Italian entrepreneur with more than fifteen years in beauty, consumer goods, real estate and international business. The company began by developing and operating ventures and commercial partnerships across the Americas, appointed by international brands as their commercial partner for the United States and Latin America.', 'Those operations revealed a pattern: business creates wealth, wealth shapes lifestyle, and lifestyle opens new business. That became The Investor Journey™, and the platform — Advisory, Commerce, Luxury — was built around it, on infrastructure that already existed: the Miami headquarters, the warehouse, the technology and a network of relationships built over years.'] },
    timeline: { eyebrow: 'Milestones', title: 'The platform came from the journey.', steps: [
      { name: 'Operating', line: 'Building and scaling premium consumer brands; entering international markets from New York and Miami to São Paulo, Milan, London, Dubai and Singapore.' },
      { name: '2017 · Miami', line: 'BIZ & STYLE founded in Miami Beach. Headquarters in the Thyssen Building.' },
      { name: 'Commerce', line: 'Appointed by international brands as commercial partner for the U.S. and LATAM; domestic and bonded warehousing, logistics and distribution in Miami.' },
      { name: 'Digital', line: 'In-house digital acquisition, CRM and e-commerce systems — built for our own ventures first.' },
      { name: 'Luxury', line: 'B&S Luxury: Miami luxury real estate, developer partnerships and the seven-vertical ecosystem.' },
    ] },
    values: { eyebrow: 'What we believe', title: 'Everything connects.', items: [
      { name: 'Business. Wealth. Lifestyle.', line: 'Business growth, wealth creation and the lifestyle that brings it all together — that’s the BIZ & STYLE way.' },
      { name: 'Built in the real world', line: 'Tested through our own experience first.' },
      { name: 'The right expert at every stage', line: 'We execute what we know; licensed specialists deliver the rest.' },
      { name: 'Relationships are capital', line: 'Discretion is part of the relationship.' },
    ] },
    sections: [
      {
        title: 'Founded in Miami Beach, 2017',
        paragraphs: [
          'BIZ & STYLE was founded in Miami Beach in 2017 by Dario Picardi, after years in international business, consumer goods, distribution, digital growth, investment, real estate and luxury. New York is a soft chapter in that journey; Italy is the founder origin, told fully on the Person page.',
          'About is the origin story and operator identity. Platform explains how the organization is structured (Business · Wealth · Lifestyle) and how divisions fit. Do not duplicate the Platform H1 here.',
        ],
      },
      {
        title: 'From the journey: international business · commerce · digital · investment · luxury',
        paragraphs: [
          'Those operations revealed a pattern: business creates wealth, wealth shapes lifestyle, and lifestyle opens new business. That became the Investor Journey™. Three divisions — Advisory, Commerce, Luxury — sit on one platform, on infrastructure that already existed in Miami: headquarters, warehouse, technology and a network built over years.',
          'Operators, not observers. Capabilities are built and tested in our own ventures first. How we work is the method page.',
        ],
      },
      {
        title: 'Three divisions · one platform',
        paragraphs: [
          'Meet the founder on the Dario Picardi profile. Contact the firm at Miami Beach HQ: +1 305-549-4289 · info@bizandstyledna.com · Connect. The United States, Latin America and the Americas are the operating map.',
        ],
      },
      {
        title: 'How we work',
        paragraphs: [
          'The method page explains what we operate in-house versus where licensed specialists deliver. About stays the origin story. Platform stays the org structure. How we work stays the operating method.',
        ],
      },
    ],
    faqs: [
      { q: 'When and where was BIZ & STYLE founded?', a: 'Miami Beach, 2017 — by Dario Picardi, after years in international business, consumer goods, distribution, digital growth, investment, real estate and luxury.' },
      { q: 'Is About the same as Platform?', a: 'About is the origin story and operator identity. Platform explains how the organization is structured (Business · Wealth · Lifestyle) and how divisions fit.' },
      { q: 'Are you consultants or operators?', a: 'Operators. Capabilities are built and tested in our own ventures first.' },
      { q: 'Where can I read about the founder?', a: '/about/dario-picardi.' },
      { q: 'How do I contact the firm?', a: '+1 305-549-4289 · info@bizandstyledna.com · /connect.' },
    ],
    relatedLinks: [
      { href: '/about/dario-picardi', label: 'Dario Picardi · Founder / President', line: 'The Person profile — not a generic bio fluff page.' },
      { href: '/platform', label: 'one platform', line: 'How the organization is structured.' },
      { href: '/platform/how-we-work', label: 'how we work', line: 'Operators first — in-house vs licensed specialists.' },
      { href: '/investor-journey', label: 'Investor Journey™', line: 'The trademarked framework.' },
      { href: '/connect', label: 'Miami Beach HQ', line: 'Phone, WhatsApp, email, NAP.' },
    ],
    cta: { eyebrow: "Let's build what's next", title: ['Tell us', "what you're building."], primary: { label: "Tell us what you're building", href: TELL, name: 'tell_us' }, secondary: { label: 'Leadership', href: '/about/dario-picardi', name: 'leadership' } },
  },

  dario: {
    seo: { title: 'Dario Picardi · Founder | BIZ & STYLE', description: 'Founder and President of BIZ & STYLE — Miami Beach platform connecting strategy, commerce, technology and luxury. +1 305-549-4289.' },
    hero: { eyebrow: 'Founder / President', title: 'Dario Picardi', lede: 'Founder / President, BIZ & STYLE. Entrepreneur, operator, and the person who lived the Investor Journey before building the platform around it.' },
    definition: { q: 'Who is Dario Picardi?', a: ['Dario Picardi is the founder and president of BIZ & STYLE, the Miami-based business development platform. Born in Italy, he has spent more than fifteen years in beauty, consumer goods, real estate and international business, building and scaling premium consumer brands, structuring investment opportunities and navigating global trade and market entry. He holds two master’s degrees in Management, both earned cum laude.', 'He has personally built ventures and done business across the world’s major business hubs — New York, Miami, São Paulo, Milan, London, Dubai and Singapore — and every BIZ & STYLE solution was first tested in his own ventures.'] },
    journey: { eyebrow: 'The experience behind the platform', title: 'From the journey to the platform.', items: [
      { name: 'International executive experience', line: 'Building and scaling premium consumer brands across markets.' },
      { name: 'Entrepreneurship', line: 'Founding and operating companies, not advising them from a distance.' },
      { name: 'U.S. market entry & distribution', line: 'Entering the United States and Latin America; running distribution and logistics from Miami.' },
      { name: 'Digital growth', line: 'Building in-house acquisition, CRM and e-commerce systems.' },
      { name: 'Investment & real estate', line: 'Real estate as a stage of the journey — and as a business.' },
      { name: 'Luxury & relationships', line: 'Operating inside luxury ecosystems where business, wealth and lifestyle meet.' },
    ] },
    quote: 'Everything connects: business growth, wealth creation, and the lifestyle that brings it all together. That’s the BIZ & STYLE way.',
    sections: [
      {
        title: 'Italy → international business → Miami 2017',
        paragraphs: [
          'Born in Italy, Dario Picardi founded the Miami Beach platform in 2017 after fifteen years across beauty, consumer goods, real estate and international business. New York is already in the bio — one of the hubs he built and traded through, alongside São Paulo, Milan, London, Dubai and Singapore.',
          'This is the founder profile inside the BIZ & STYLE platform, not a personal brand site. Company story lives on About. Engagements go through divisions and programmes.',
        ],
      },
      {
        title: 'Beauty · consumer goods · real estate · international business',
        paragraphs: [
          'Why operators, not observers: every BIZ & STYLE solution was first tested in his own ventures. Two master’s degrees in Management, both earned cum laude, are already on this page — stated, not invented.',
          'The platform today connects strategy, commerce, technology and luxury from Miami Beach. The Investor Journey™ is the framework he lived before naming it.',
        ],
      },
      {
        title: 'Why operators, not observers',
        paragraphs: [
          'The firm line is +1 305-549-4289 · info@bizandstyledna.com. Requests are routed appropriately. Headquarters: Miami Beach, Florida — Thyssen Building, 1000 5th Street, Suite 200. Latin America and the United States are the operating theatre; Italy remains origin.',
        ],
      },
      {
        title: 'BIZ & STYLE platform today',
        paragraphs: [
          'Our story, the platform, the Investor Journey™ and Miami HQ sit next to this Person page so the entity graph stays complete. Contact routes through the team.',
        ],
      },
    ],
    faqs: [
      { q: 'Who is Dario Picardi?', a: 'Founder and President of BIZ & STYLE. Born in Italy; founded the Miami Beach platform in 2017 after fifteen years across beauty, consumer goods, real estate and international business.' },
      { q: 'Is this a personal brand site?', a: 'No. This is the founder profile inside the BIZ & STYLE platform. Company story lives on /about; engagements go through divisions and programmes.' },
      { q: 'How do I contact Dario or the firm?', a: 'Firm line: +1 305-549-4289 · info@bizandstyledna.com. Requests are routed appropriately.' },
      { q: 'Where is the company based?', a: 'Miami Beach, Florida — Thyssen Building, 1000 5th Street, Suite 200.' },
    ],
    relatedLinks: [
      { href: '/about', label: 'our story', line: 'Organization origin — operators, not observers.' },
      { href: '/platform', label: 'the platform', line: 'How the organization is structured.' },
      { href: '/investor-journey', label: 'Investor Journey™', line: 'The framework lived firsthand.' },
      { href: '/miami', label: 'Miami HQ', line: 'The platform to the Americas.' },
      { href: '/connect', label: 'contact', line: 'Phone, WhatsApp, email — Miami Beach HQ.' },
    ],
    cta: { eyebrow: 'Talk to the team', title: ["Let's", 'connect.'], primary: { label: "Let's connect", href: '/connect', name: 'connect' }, secondary: { label: "Tell us what you're building", href: TELL, name: 'tell_us' } },
  },

  relationships: {
    seo: { title: 'Relationships & Discretion | BIZ & STYLE', description: 'Relationships are capital. How BIZ & STYLE protects client and partner confidentiality — and how to request selected credentials. +1 305-549-4289.' },
    hero: { eyebrow: 'Relationships & discretion', title: ['Relationships', 'are capital.'], lede: 'Our ecosystem has been built over years through trusted relationships with companies, executives, entrepreneurs, investors and specialized professionals across multiple industries and markets — United States, Latin America and Miami.' },
    statement: { lines: ['Discretion is part', 'of the relationship.'], body: ['Not every relationship belongs on a website. We selectively showcase collaborations while protecting the confidentiality of our clients, partners and commercial relationships.', 'Our track record spans premium brands, distributors and private clients across the United States and Latin America — market entry, distribution, luxury real estate and brand representation. Detailed references and case studies are available on request, and shared subject to a mutual non-disclosure agreement.'] },
    sections: [
      {
        title: 'What we selectively showcase',
        paragraphs: [
          'This is not a public portfolio page. It explains our discretion standard and how to request relevant proof. Selected credentials and case studies are available on request via /request-credentials, and under NDA when appropriate.',
        ],
      },
    ],
    faqs: [
      { q: 'Why don’t you list every client and partner?', a: 'Not every relationship belongs on a website. Discretion protects clients, partners and commercial relationships.' },
      { q: 'Can I see credentials anyway?', a: 'Yes — selected credentials and case studies are available on request via /request-credentials, and under NDA when appropriate.' },
      { q: 'What geographies does the track record cover?', a: 'United States and Latin America — market entry, distribution, luxury real estate and brand representation.' },
      { q: 'Is this a public portfolio page?', a: 'No. It explains our discretion standard and how to request relevant proof.' },
      { q: 'How do I contact the firm?', a: '+1 305-549-4289 · info@bizandstyledna.com · /connect.' },
    ],
    relatedLinks: [
      { href: '/request-credentials', label: 'request credentials', line: 'The form — selected proof, under NDA when appropriate.' },
      { href: '/about', label: 'our story', line: 'Operators, not observers — Miami Beach, 2017.' },
      { href: '/become-a-partner', label: 'become a partner', line: 'Apply when ecosystems intersect.' },
      { href: '/partners', label: 'partner ecosystem', line: 'The institutional showcase — not this policy page.' },
    ],
    cta: { eyebrow: 'Selected credentials. Available when relevant.', title: ['Request', 'credentials.'], primary: { label: 'Request credentials', href: '/request-credentials', name: 'credentials' }, secondary: { label: 'Become a partner', href: '/become-a-partner', name: 'partner' } },
  },

  insightsIndex: {
    seo: { title: 'Insights for Operators | BIZ & STYLE', description: 'Operator perspectives on internationalization, U.S. market entry, commerce, Miami and luxury — BIZ & STYLE Insights.' },
    hero: { eyebrow: 'Insights', title: ['Intelligence', 'for operators.'], lede: 'Operator perspectives on internationalization, U.S. market entry, commerce, Miami and the luxury economy — written by people who run these systems across the Americas.' },
    faqs: [
      { q: 'Who writes BIZ & STYLE Insights?', a: 'Operators who run internationalization, commerce, digital and luxury systems — not a separate content desk writing about markets it does not touch.' },
      { q: 'Are Insights the same as Advisory pages?', a: 'No. Insights are editorial perspectives. Advisory and Programmes are commercial pages for engagements.' },
      { q: 'How do I talk to the team after reading?', a: '+1 305-549-4289 or info@bizandstyledna.com.' },
    ],
    relatedLinks: [
      { href: '/internationalization', label: 'export is not internationalization', line: 'The model the editorial often returns to.' },
      { href: '/miami', label: 'why Miami', line: 'The geo hub behind the operator view.' },
      { href: '/commerce/bonded-warehouse', label: 'bonded warehouse in Miami', line: 'Duty-deferred proof of the commerce thesis.' },
      { href: '/programs', label: 'signature programmes', line: 'When reading turns into a packaged engagement.' },
    ],
    topicsTitle: 'Topics we write about',
    topicsLede: 'Internationalization, U.S. entry, commerce, Miami, luxury and digital — operator perspectives from the Americas, not a thin content desk.',
    all: 'All insights',
    categories: 'Topics',
    readingTime: 'min read',
    by: 'By',
    published: 'Published',
    updated: 'Updated',
    related: 'Related insights',
    relatedServices: 'Related on the platform',
    sources: 'Sources',
    toc: 'In this article',
    share: 'Share',
  },

  tellUs: {
    seo: { title: "Tell Us What You're Building | BIZ & STYLE", description: "Tell us where you are and where you're going — international company, brand, founder, developer, investor or partner. +1 305-549-4289." },
    sections: [
      {
        title: 'Where you are trying to go',
        paragraphs: [
          'Tell us is structured intake — international company, U.S. company, founder, brand, luxury, developer, investor or partner. It does not compete with Connect for phone NAP. After you submit, the team reviews the brief and routes it to Advisory, Commerce or Luxury.',
          'Commercial briefs are handled with discretion; NDAs are available when appropriate. International companies and Americas-bound operators use this form when the brief is already a project, not a phone call.',
        ],
      },
      {
        title: 'What happens after you submit',
        paragraphs: [
          'Expect a follow-up to scope fit — not an automated spam sequence. Partners can apply here (select partner / ecosystem intent) or visit the partner ecosystem and become-a-partner if that path is live.',
          'Signature programmes sit next to the form when the destination is already a named engagement.',
        ],
      },
      {
        title: 'Prefer to call?',
        paragraphs: [
          'Call or WhatsApp HQ: +1 305-549-4289 · info@bizandstyledna.com. Built by operators — the same team reads the brief. Miami, the United States, Latin America and the Americas are the map.',
        ],
      },
    ],
    faqs: [
      { q: 'What happens after I submit?', a: 'The team reviews your brief and routes it to Advisory, Commerce or Luxury. Expect a follow-up to scope fit — not an automated spam sequence.' },
      { q: 'Is my information confidential?', a: 'Yes. Commercial briefs are handled with discretion; NDAs are available when appropriate.' },
      { q: 'Should I use Tell Us or Connect?', a: 'Use Tell Us for a structured brief. Use Connect for phone, WhatsApp, email or NAP.' },
      { q: 'Can partners apply here?', a: 'Yes — select partner / ecosystem intent, or visit /partners and /become-a-partner if that path is live.' },
      { q: 'How else can I reach you?', a: '+1 305-549-4289 · info@bizandstyledna.com.' },
    ],
    relatedLinks: [
      { href: '/connect', label: 'call or WhatsApp HQ', line: 'Direct contact + NAP — Miami Beach.' },
      { href: '/build', label: 'interactive journey builder', line: 'A chooser that maps live site areas as you pick.' },
      { href: '/partners', label: 'partner ecosystem', line: 'Institutional relationships around the platform.' },
      { href: '/programs', label: 'signature programmes', line: 'Three named engagements — never a fourth.' },
      { href: '/about', label: 'built by operators', line: 'Origin story before the brief.' },
    ],
  },

  becomePartner: {
    seo: { title: 'Become a Partner | BIZ & STYLE', description: 'Partner with BIZ & STYLE — luxury firms, developers, brands, tech and specialists whose clients intersect our Miami–Americas ecosystem. +1 305-549-4289.' },
    hero: { eyebrow: 'Become a partner', title: 'Explore a partnership.', lede: 'Partner with BIZ & STYLE — luxury firms, developers, brands, technology and specialists whose clients intersect our Miami–Americas ecosystem. /partners is the showcase; this page is where you apply.' },
    formTitle: 'Apply',
    sections: [
      {
        title: 'Who this partnership is for',
        paragraphs: [
          'Companies and professionals whose expertise, clients and ambitions already intersect Advisory, Commerce or Luxury — not cold affiliate spam. If your work meets the same rooms we already work in Miami, the United States and Latin America, apply.',
        ],
      },
      {
        title: 'Luxury companies · professional firms · developers · brands · technology · specialists',
        paragraphs: [
          'Luxury companies serving the same high-net-worth client. Licensed professional firms. Developers who need international buyers. Consumer brands entering the Americas. Technology providers that plug into the engine. Qualified specialists whose relationships extend the journey.',
        ],
      },
      {
        title: 'Discretion is part of the relationship',
        paragraphs: [
          'We do not publish every partner. Relationships are capital. Selected credentials may be shared under NDA when relevant. The partner ecosystem showcase lives on /partners — same family, different intent.',
        ],
      },
      {
        title: 'How we review inquiries',
        paragraphs: [
          'Every inquiry is reviewed personally. We look for a real intersection — clients, geography, capability — not volume. Where ecosystems intersect, relationships may be governed by business-development agreements.',
        ],
      },
      {
        title: 'What happens after you apply',
        paragraphs: [
          'If ecosystems intersect, we come back to structure the relationship. If they do not, we will say so. Call or WhatsApp +1 305-549-4289, email info@bizandstyledna.com, or use /connect.',
        ],
      },
    ],
    faqs: [
      { q: 'Who should become a partner?', a: 'Companies and professionals whose expertise, clients and ambitions intersect with Advisory, Commerce or Luxury — not cold affiliate spam.' },
      { q: 'Is this the same as the Partners page?', a: '/partners showcases the ecosystem. /become-a-partner is where you apply. Same family; different intent.' },
      { q: 'Do you publish every partner publicly?', a: 'No. Discretion is part of the relationship. Selected credentials may be shared under NDA when relevant.' },
      { q: 'Are partnerships governed by agreements?', a: 'Where ecosystems intersect, relationships may be governed by business-development agreements.' },
      { q: 'How do I contact someone directly?', a: 'Call or WhatsApp +1 305-549-4289, or email info@bizandstyledna.com. Or use /connect.' },
    ],
    relatedLinks: [
      { href: '/partners', label: 'partner ecosystem', line: 'The institutional showcase — not this intake form.' },
      { href: '/about/relationships', label: 'relationships & discretion', line: 'Why we stay selective — policy voice.' },
      { href: '/advisory/partnership-engineering', label: 'partnership engineering', line: 'JVs and contract design when the relationship needs paper.' },
      { href: '/luxury/developer-partnerships', label: 'developer partnerships', line: 'Selected luxury developments — a programme, not this form.' },
      { href: '/connect', label: 'contact HQ', line: 'Phone, WhatsApp, email — Miami Beach.' },
    ],
    fields: { company: 'Company', name: 'Contact name', email: 'Work email', phone: 'Phone (optional)', website: 'Relevant website', industry: 'Industry', geography: 'Geography', capabilities: 'Capabilities', bring: 'What you bring', build: 'What you want to build together', message: 'Message' },
    industries: [
      { id: 'luxury', label: 'Luxury company' }, { id: 'professional', label: 'Professional firm' }, { id: 'developer', label: 'Developer' }, { id: 'brand', label: 'Brand' },
      { id: 'organization', label: 'International organization' }, { id: 'technology', label: 'Technology provider' }, { id: 'strategic', label: 'Strategic business' }, { id: 'specialist', label: 'Qualified specialist' },
    ],
    submit: 'Explore a partnership',
    consent: 'I agree to be contacted about this inquiry and have read the privacy policy.',
    success: { title: 'Received.', body: 'Thank you. We review every partnership inquiry personally and will come back to you if our ecosystems intersect.' },
    error: 'Something went wrong. Please try again, or email us directly.',
  },

  connect: {
    seo: { title: 'Connect · Miami Beach HQ | BIZ & STYLE', description: 'Call, WhatsApp or email BIZ & STYLE at Miami Beach HQ — Thyssen Building, 1000 5th Street Suite 200. +1 305-549-4289.' },
    hero: { eyebrow: "Let's connect", title: "Let's connect.", lede: 'A conversation is where every engagement starts. Book a call, write to us, or come and see the platform in Miami Beach.' },
    book: 'Book a strategic conversation', email: 'Email', phone: 'Phone · WhatsApp · email', hq: 'Miami Beach headquarters (NAP)', map: 'Open in maps',
    faqs: [
      { q: 'What is the best way to reach you?', a: 'Call or WhatsApp +1 305-549-4289, or email info@bizandstyledna.com. For a structured brief, use /tell-us.' },
      { q: 'Where is the office?', a: 'Thyssen Building, 1000 5th Street, Suite 200, Miami Beach, FL 33139.' },
      { q: 'Do you take international calls?', a: 'Yes — WhatsApp and email are often easiest across time zones; Miami Beach is Eastern Time (ET).' },
      { q: 'Is Connect the same as Tell Us?', a: 'Connect is direct contact + NAP. Tell Us is a structured intake about what you are building.' },
      { q: 'Who will answer?', a: 'The BIZ & STYLE team routes to the right division — Advisory, Commerce or Luxury — after a short scoping conversation.' },
    ],
    relatedLinks: [
      { href: '/tell-us', label: "tell us what you're building", line: 'Structured intake — not this NAP page.' },
      { href: '/build', label: 'build your journey', line: 'Interactive chooser across the platform.' },
      { href: '/about', label: 'our story', line: 'Operators, not observers.' },
      { href: '/miami', label: 'why Miami', line: 'The platform to the Americas.' },
    ],
    formTitle: 'Send a message',
    fields: { name: 'Your name', company: 'Company (optional)', email: 'Email', phone: 'Phone (optional)', message: 'Message' },
    submit: 'Send',
    consent: 'I agree to be contacted about my message and have read the privacy policy.',
    success: { title: 'Received.', body: 'Thank you. A member of the team will come back to you personally.' },
    error: 'Something went wrong. Please try again, or email us directly.',
    alt: { title: "Know what you're building?", body: 'The dynamic form routes you to the right team faster.', cta: "Tell us what you're building" },
  },

  credentials: {
    seo: { title: 'Request Credentials | BIZ & STYLE', description: 'Selected credentials — market entry, distribution, luxury RE, brand representation — on request and under NDA when appropriate. +1 305-549-4289.' },
    hero: { eyebrow: 'Request credentials', title: ['Selected credentials.', 'Available when relevant.'], lede: 'Case studies and detailed references across market entry, distribution, luxury real estate and brand representation — Miami, United States, Latin America and the Americas — on request and, when appropriate, under NDA.' },
    sections: [
      {
        title: 'Areas we can reference',
        paragraphs: [
          'Market entry · distribution · luxury real estate · brand representation · digital growth — only what clients and partners in the United States and Latin America have agreed to share.',
        ],
      },
      {
        title: 'What to tell us you’re evaluating',
        paragraphs: [
          'The project, the geography, and which proof would actually help the decision. We do not send a generic PDF dump. Relationships & Discretion explains why we stay selective; this page is the request form.',
        ],
      },
      {
        title: 'How we respond',
        paragraphs: [
          'We review personally and come back with what is relevant. Call or WhatsApp +1 305-549-4289, email info@bizandstyledna.com, or use /connect.',
        ],
      },
    ],
    faqs: [
      { q: 'Will you share credentials without an NDA?', a: 'Sometimes for high-level references. Detailed case studies are shared subject to a mutual NDA when appropriate.' },
      { q: 'What areas can I request?', a: 'Market entry, distribution, luxury real estate, brand representation and digital growth — only what clients and partners have agreed to share.' },
      { q: 'How is this different from Relationships & Discretion?', a: 'That page explains why we stay selective. This page is the request form.' },
      { q: 'How fast do you respond?', a: 'We review personally and come back with what is relevant to your project — not a generic PDF dump.' },
      { q: 'Other ways to reach you?', a: '+1 305-549-4289 · info@bizandstyledna.com · /connect.' },
    ],
    relatedLinks: [
      { href: '/about/relationships', label: 'relationships & discretion', line: 'Why we stay selective — policy voice, not this form.' },
      { href: '/become-a-partner', label: 'become a partner', line: 'Apply when ecosystems intersect.' },
      { href: '/about', label: 'about BIZ & STYLE', line: 'Operators, not observers.' },
      { href: '/privacy', label: 'privacy policy', line: 'How form data is handled.' },
    ],
    fields: { name: 'Your name', company: 'Company', role: 'Role', email: 'Work email', area: 'Area of interest', context: 'Context — what are you evaluating, and for which project?' },
    areas: [{ id: 'market-entry', label: 'Market entry' }, { id: 'distribution', label: 'Distribution' }, { id: 'luxury-real-estate', label: 'Luxury real estate' }, { id: 'brand-representation', label: 'Brand representation' }, { id: 'digital', label: 'Digital growth' }],
    submit: 'Request credentials',
    consent: 'I understand that references may be shared subject to a mutual NDA, and I agree to be contacted.',
    success: { title: 'Received.', body: 'Thank you. We will come back to you personally with what is relevant to your project.' },
    error: 'Something went wrong. Please try again, or email us directly.',
  },

  disclosures: {
    seo: { title: 'Disclosures & Disclaimers | BIZ & STYLE', description: 'Disclosures for BIZ & STYLE DNA INC.: informational content only; not investment, legal or tax advice. Independent licensed professionals. +1 305-549-4289.' },
    faqs: [
      { q: 'Is website content investment or legal advice?', a: 'No. Content is informational only and should not be interpreted as investment, legal or tax advice, or an offer of any security or professional service.' },
      { q: 'Who delivers regulated professional services?', a: 'Independent licensed professionals. BIZ & STYLE coordinates; they deliver — unless a separate written agreement says otherwise.' },
      { q: 'How do I contact BIZ & STYLE about these disclosures?', a: '+1 305-549-4289 · info@bizandstyledna.com · Thyssen Building, 1000 5th Street, Suite 200, Miami Beach, FL 33139.' },
    ],
    relatedLinks: [
      { href: '/privacy', label: 'privacy policy', line: 'How we collect and use personal data.' },
      { href: '/terms', label: 'terms of use', line: 'Access and use of this website.' },
      { href: '/connect', label: 'contact HQ', line: 'Miami Beach — phone, WhatsApp, email.' },
    ],
  },

  privacy: {
    seo: { title: 'Privacy Policy | BIZ & STYLE', description: 'How BIZ & STYLE DNA INC. collects, uses, stores and discloses personal data on its website and services. Contact: info@bizandstyledna.com.' },
    faqs: [
      { q: 'Who is the data controller?', a: 'BIZ & STYLE DNA INC., based in Florida — contact info@bizandstyledna.com or +1 305-549-4289.' },
      { q: 'Does this policy cover website forms and marketing tools?', a: 'Yes — visitors, digital services, online forms, marketing tools, email communications and third-party integrations as described in the policy.' },
      { q: 'Where are related legal pages?', a: '/terms and /disclosures.' },
    ],
    relatedLinks: [
      { href: '/terms', label: 'terms of use', line: 'Access and use of this website.' },
      { href: '/disclosures', label: 'disclosures', line: 'Informational content only — not advice.' },
      { href: '/connect', label: 'contact HQ', line: 'Miami Beach — phone, WhatsApp, email.' },
    ],
  },

  terms: {
    seo: { title: 'Terms of Use | BIZ & STYLE', description: 'Terms governing access to and use of the website operated by BIZ & STYLE DNA INC. Miami Beach · info@bizandstyledna.com.' },
    faqs: [
      { q: 'What do these Terms cover?', a: 'Access to and use of the website operated by BIZ & STYLE DNA INC. By using the site, you agree to the Terms.' },
      { q: 'Where is the privacy policy?', a: '/privacy.' },
      { q: 'How do I contact you about the Terms?', a: 'info@bizandstyledna.com · +1 305-549-4289.' },
    ],
    relatedLinks: [
      { href: '/privacy', label: 'privacy policy', line: 'How we collect and use personal data.' },
      { href: '/disclosures', label: 'disclosures', line: 'Informational content only — not advice.' },
      { href: '/connect', label: 'contact HQ', line: 'Miami Beach — phone, WhatsApp, email.' },
    ],
  },
} as const;
