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
    seo: { title: 'How We Work — Built in the Real World | BIZ & STYLE', description: 'We do not sell theory. Every BIZ & STYLE capability is built, operated, tested and optimized in our own ventures first. What we execute in-house, and where licensed specialists deliver.' },
    hero: { eyebrow: 'How we work', title: ['Built in', 'the real world.'], lede: 'What BIZ & STYLE recommends is first built, operated, tested and optimized inside its own ventures. Then it is brought to clients.' },
    statement: { lines: ["We don't sell theory.", 'We build it. We operate it.', 'We test it. We optimize it.', 'Then we bring it to our clients.'], body: ['The method comes from firsthand experience: building businesses, operating companies, entering international markets, managing distribution, running a warehouse, building digital acquisition, generating leads, developing commercial relationships, investing, working in real estate and operating inside luxury ecosystems.', 'That is why the platform is organized the way it is — the divisions mirror the journey we lived.'] },
    process: { eyebrow: 'The engagement', title: 'From conversation to execution.', steps: [
      { name: 'Conversation', line: 'Tell us what you are building. We listen for where you are and where you want to go.' },
      { name: 'Roadmap', line: 'A clear proposal: scope, deliverables, timeline, and who delivers what — in-house or licensed partner.' },
      { name: 'Execution', line: 'The team that designed it runs it: market, distribution, digital, relationships.' },
      { name: 'Optimization', line: 'Continuous review against objectives. The system gets smarter with every interaction.' },
    ] },
    faqs: [
      { q: 'What makes BIZ & STYLE different from traditional consulting or advisory firms?', a: 'We are operators, not observers. We provide the infrastructure — team, warehouse, technology, network — and we execute, rather than handing over a plan. Everything we offer has been tested in our own ventures first.' },
      { q: 'Does BIZ & STYLE provide legal, tax or immigration advice?', a: 'No. Legal, tax, accounting, immigration, banking, financial and wealth advisory are delivered by independent licensed professionals from our vetted network. We coordinate; they deliver and remain responsible for their services.' },
      { q: 'Is BIZ & STYLE only for large corporations?', a: 'No. The platform is modular — a founder can start with a fractional executive or a digital engine; an international company can start with market entry; an investor can start with real estate — and expand as ambitions grow.' },
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
    seo: { title: 'Infrastructure — Capability Already in Place | BIZ & STYLE', description: 'Miami HQ since 2017, an executive team on the ground, domestic and bonded warehousing, fulfillment and logistics, technology and CRM, marketing, a 200+ commercial network and a licensed professional network.' },
    hero: { eyebrow: 'Infrastructure', title: ['Not advice from a distance.', 'Capability already in place.'], lede: 'Plug into a complete ecosystem — operational from day one.' },
    definition: { q: 'What infrastructure does BIZ & STYLE operate?', a: ['BIZ & STYLE operates its headquarters in Miami Beach (since 2017), an executive team on the ground, domestic and bonded warehousing in Miami, fulfillment and logistics (customs, freight, B2B and B2C), technology and CRM systems for acquisition and e-commerce, marketing and PR, a proprietary network of more than 200 commercial partners, and a coordinated network of licensed professionals for legal, tax, immigration, banking and financial matters.'] },
    presence: { eyebrow: 'Our presence', title: 'Three bases to cover the Americas.', items: [
      { name: 'Miami', line: 'Headquarters and bonded warehouse — base to manage the United States, Canada and the Caribbean.', tag: 'HQ' },
      { name: 'Mexico', line: 'Operating base to manage Mexico and Central America.', tag: 'Base' },
      { name: 'Brazil', line: 'Operating base to manage Brazil and the wider LATAM region.', tag: 'Base' },
    ] },
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
    seo: { title: 'Partner Ecosystem | BIZ & STYLE', description: 'BIZ & STYLE develops long-term relationships with companies and professionals whose expertise, clients and ambitions intersect with its ecosystem — luxury companies, professional firms, developers, brands, technology providers, qualified specialists.' },
    hero: { eyebrow: 'Partner ecosystem', title: ['Great business', 'rarely happens alone.'], lede: 'BIZ & STYLE develops long-term relationships with companies and professionals whose expertise, clients and ambitions intersect with our ecosystem.' },
    definition: { q: 'Who partners with BIZ & STYLE?', a: ['Luxury companies, professional firms, real-estate developers, consumer brands, international organizations, technology providers, strategic businesses and qualified specialists — in Miami, across the Americas and in Europe. Relationships are structured for the long term and, where appropriate, governed by business-development agreements.'] },
    audiences: { eyebrow: 'Who we work with', title: 'Ecosystems that intersect.', items: [
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
    cta: { eyebrow: 'Think our ecosystems intersect?', title: ['Explore', 'a partnership.'], primary: { label: 'Explore a partnership', href: '/become-a-partner', name: 'partner' }, secondary: { label: 'Request credentials', href: '/request-credentials', name: 'credentials' } },
  },

  investorJourney: {
    seo: { title: 'The Investor Journey™ — Business → Wealth → Lifestyle → ∞ | BIZ & STYLE', description: 'The Investor Journey™ is the BIZ & STYLE framework: business generates wealth, wealth shapes lifestyle, and lifestyle opens new business. A circle of growth — lived firsthand, then built into a platform.' },
    hero: { eyebrow: 'The Investor Journey™', title: ['We lived it', 'firsthand.'], lede: 'Business. Wealth. Lifestyle. A single circle that keeps turning — the pattern we observed in every successful entrepreneur and investor, and the philosophy the BIZ & STYLE platform was built around.' },
    definition: { q: 'What is The Investor Journey™?', a: ['The Investor Journey™ is BIZ & STYLE’s proprietary framework describing how business, wealth and lifestyle connect. Business — creating, building, entering, expanding, scaling — generates capital, relationships, opportunities, knowledge and networks. That leads to wealth: generating, investing, diversifying, structuring and preserving, through real estate, strategic ventures and capital allocation with qualified professionals. Wealth seeks lifestyle: living, access, experience and connection — luxury real estate, private aviation, yachting, design, hospitality, luxury brands, events.', 'The journey is not linear. Lifestyle creates relationships; relationships create opportunities; opportunities create business. Business → Wealth → Lifestyle → Business. It is a circle of growth, and you can enter at any point.'] },
    how: { eyebrow: 'How the circle turns', lines: ['Where business becomes wealth.', 'And wealth becomes lifestyle.', 'And lifestyle opens new business.'], body: ['As ventures grow, they generate capital, relationships and entrepreneurial networks. Entrepreneurs naturally reinvest — business success leads to real estate, strategic ventures and luxury assets, with many spending increasing time in Miami, where investment and lifestyle converge.', 'The lifestyle, in turn, opens new business. Around this core sit the luxury verticals — real estate, yachting, private aviation, design, goods, media, entertainment — all sharing one denominator: high-net-worth individuals. Each engagement reveals connections often invisible from the outside, and continuously activates new journeys.'] },
    experts: { lines: ['One journey.', 'The right expert at every stage.'], body: ['We understand the Investor Journey because we have lived it firsthand. But understanding the complete journey does not mean pretending to be the specialist in every discipline. BIZ & STYLE executes where it has operating expertise — strategy, internationalization, commerce, distribution, digital growth, business development, luxury real estate — and works with carefully selected licensed professionals for legal, tax, accounting, immigration, banking, financial and wealth advisory.'] },
    entry: { eyebrow: 'Enter at any point', title: 'Three doors. One platform.', items: [
      { name: 'Start with business', line: 'Establish operations in Miami, enter the U.S. or LATAM, build distribution — and, over time, invest in the base that anchors your presence.', href: `${TELL}?intent=market-entry` },
      { name: 'Start with wealth', line: 'Acquire luxury or pre-construction real estate, and as trust grows tap into the ecosystem to launch ventures and expand.', href: `${TELL}?intent=investor&persona=investor` },
      { name: 'Start with lifestyle', line: 'Drawn by Miami’s energy and opportunity; what begins as a personal experience evolves into an investment, a business, a relocation.', href: `${TELL}?intent=investor&persona=investor` },
    ] },
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
    seo: { title: 'Our Story — Built by Operators, Not Observers | BIZ & STYLE', description: 'BIZ & STYLE was founded in Miami Beach in 2017 by Dario Picardi. The platform came from the journey: international business, consumer goods, distribution, digital growth, investment, real estate and luxury.' },
    hero: { eyebrow: 'About', title: ['Built by operators.', 'Not observers.'], lede: 'The company comes first. The founder story explains why it is organized the way it is.' },
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
    cta: { eyebrow: "Let's build what's next", title: ['Tell us', "what you're building."], primary: { label: "Tell us what you're building", href: TELL, name: 'tell_us' }, secondary: { label: 'Leadership', href: '/about/dario-picardi', name: 'leadership' } },
  },

  dario: {
    seo: { title: 'Dario Picardi — Founder / President | BIZ & STYLE', description: 'Dario Picardi, born in Italy, founded BIZ & STYLE in Miami in 2017 after fifteen years in beauty, consumer goods, real estate and international business. Two master’s degrees in Management, cum laude.' },
    hero: { eyebrow: 'Leadership', title: ['Dario', 'Picardi'], lede: 'Founder / President, BIZ & STYLE. Entrepreneur, operator, and the person who lived the Investor Journey before building the platform around it.' },
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
    cta: { eyebrow: 'Talk to the team', title: ["Let's", 'connect.'], primary: { label: "Let's connect", href: '/connect', name: 'connect' }, secondary: { label: "Tell us what you're building", href: TELL, name: 'tell_us' } },
  },

  relationships: {
    seo: { title: 'Relationships & Discretion | BIZ & STYLE', description: 'Relationships are capital. Not every relationship belongs on a website. How BIZ & STYLE protects the confidentiality of its clients, partners and commercial relationships — and how to request credentials.' },
    hero: { eyebrow: 'Relationships & discretion', title: ['Relationships', 'are capital.'], lede: 'Our ecosystem has been built over years through trusted relationships with companies, executives, entrepreneurs, investors and specialized professionals across multiple industries and markets.' },
    statement: { lines: ['Discretion is part', 'of the relationship.'], body: ['Not every relationship belongs on a website. We selectively showcase collaborations while protecting the confidentiality of our clients, partners and commercial relationships.', 'Our track record spans premium brands, distributors and private clients across the United States and Latin America — market entry, distribution, luxury real estate and brand representation. Detailed references and case studies are available on request, and shared subject to a mutual non-disclosure agreement.'] },
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
    seo: { title: "Tell Us What You're Building | BIZ & STYLE", description: 'Every business starts from a different point. Tell us where you are and where you are trying to go — international company, U.S. company, founder, consumer brand, luxury company, developer, investor or partner.' },
  },

  becomePartner: {
    seo: { title: 'Become a Partner | BIZ & STYLE', description: 'BIZ & STYLE develops long-term relationships with companies and professionals whose expertise, clients and ambitions intersect with its ecosystem. Explore a partnership.' },
    hero: { eyebrow: 'Become a partner', title: ['Great business', 'rarely happens alone.'], lede: 'BIZ & STYLE develops long-term relationships with companies and professionals whose expertise, clients and ambitions intersect with our ecosystem.' },
    formTitle: 'Explore a partnership',
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
    seo: { title: "Let's Connect | BIZ & STYLE", description: 'BIZ & STYLE, 1000 5th Street, Suite 200, Miami Beach, FL 33139. Book a call, email or phone the team.' },
    hero: { eyebrow: "Let's connect", title: ["Let's", 'connect.'], lede: 'A conversation is where every engagement starts. Book a call, write to us, or come and see the platform in Miami.' },
    book: 'Book a call', email: 'Email', phone: 'Phone', hq: 'Headquarters', map: 'Open in maps',
    formTitle: 'Send a message',
    fields: { name: 'Your name', company: 'Company (optional)', email: 'Email', phone: 'Phone (optional)', message: 'Message' },
    submit: 'Send',
    consent: 'I agree to be contacted about my message and have read the privacy policy.',
    success: { title: 'Received.', body: 'Thank you. A member of the team will come back to you personally.' },
    error: 'Something went wrong. Please try again, or email us directly.',
    alt: { title: "Know what you're building?", body: 'The dynamic form routes you to the right team faster.', cta: "Tell us what you're building" },
  },

  credentials: {
    seo: { title: 'Request Credentials | BIZ & STYLE', description: 'Selected credentials — market entry, distribution, luxury real estate, brand representation — available on request and, when appropriate, under NDA.' },
    hero: { eyebrow: 'Request credentials', title: ['Selected credentials.', 'Available when relevant.'], lede: 'Case studies and detailed references across market entry, distribution, luxury real estate and brand representation are available on request — and, when appropriate, under a mutual non-disclosure agreement.' },
    fields: { name: 'Your name', company: 'Company', role: 'Role', email: 'Work email', area: 'Area of interest', context: 'Context — what are you evaluating, and for which project?' },
    areas: [{ id: 'market-entry', label: 'Market entry' }, { id: 'distribution', label: 'Distribution' }, { id: 'luxury-real-estate', label: 'Luxury real estate' }, { id: 'brand-representation', label: 'Brand representation' }, { id: 'digital', label: 'Digital growth' }],
    submit: 'Request credentials',
    consent: 'I understand that references may be shared subject to a mutual NDA, and I agree to be contacted.',
    success: { title: 'Received.', body: 'Thank you. We will come back to you personally with what is relevant to your project.' },
    error: 'Something went wrong. Please try again, or email us directly.',
  },
} as const;
