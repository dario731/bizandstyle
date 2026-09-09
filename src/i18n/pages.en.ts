/**
 * Copy for hub, about, programme and conversion pages (EN master).
 * Service pages read src/data/services.ts; programmes read src/data/programs.ts.
 */
const TELL = '/tell-us';

export const pages = {
  platform: {
    seo: { title: 'The Platform — Who We Are | BIZ & STYLE', description: 'BIZ & STYLE is a Miami-based business development platform: three integrated divisions, one Investor Journey™, one team operating between Europe, the United States and Latin America.' },
    hero: { eyebrow: 'The platform', title: ['One platform.', 'Three engines.'], lede: 'A Miami-based business development platform connecting strategy, execution, commerce, technology and high-value relationships across the Americas and beyond.' },
    definition: {
      q: 'Who is BIZ & STYLE?',
      a: [
        'BIZ & STYLE (BIZ & STYLE DNA INC.) is a business development platform founded in Miami Beach in 2017 by entrepreneur Dario Picardi. It develops and operates ventures and commercial partnerships across the Americas and is appointed by international brands and manufacturers as their commercial partner for the United States and Latin America.',
        'The platform operates through three integrated divisions — B&S Advisory (strategy and growth), B&S Commerce (trade and distribution) and B&S Luxury (real estate and high-value ecosystems) — connected by a proprietary framework, The Investor Journey™, and by physical and digital infrastructure already in place in Miami.',
      ],
    },
    mission: { eyebrow: 'Mission & vision', lines: ['Your vision is our mission.', 'Our vision is your success.'], body: ['Mission: to shape business, build wealth and elevate lifestyle — turning vision into action and opportunity into measurable success. Every solution is first tested within our own ventures before it is offered to partners.', 'Vision: to redefine traditional business models through innovation, strategic partnerships and a smart approach that leverages global networks — bridging business, wealth and lifestyle into one cohesive platform.'] },
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
      { name: 'Infrastructure', line: 'HQ, team, warehouse, logistics, technology, network.', href: '/infrastructure' },
      { name: 'Miami', line: 'Our platform to the Americas.', href: '/miami' },
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
    seo: { title: 'Internationalization — Export Is Not Internationalization | BIZ & STYLE', description: 'Export sells products. Internationalization builds a long-term commercial presence until your company becomes part of the market. Six mistakes, three ingredients, nine pillars, five phases — delivered from Miami.' },
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
    faqs: [
      { q: 'How long does internationalization take?', a: 'Longer than an export deal and shorter than most companies fear when infrastructure already exists. The five phases run from understanding the company to established, organic growth; the Enter and Develop phases are where consistency matters most.' },
      { q: 'Can we start with the U.S. and add Latin America later?', a: 'Yes. Miami is the platform for both: the U.S. market from the headquarters, and Mexico, the Caribbean, Brazil and the wider region through our operating bases and the bonded hub.' },
      { q: 'Who handles company formation, tax and visas?', a: 'BIZ & STYLE coordinates the sequence; licensed lawyers, accountants and immigration attorneys from our vetted network deliver each regulated step.' },
    ],
    cta: { eyebrow: 'Make the U.S. a market. Not an experiment.', title: ['Planning your', 'U.S. expansion?'], primary: { label: 'Assess your expansion', href: `${TELL}?intent=market-entry&persona=international-company`, name: 'assess_expansion' }, secondary: { label: 'International Expansion Boost™', href: '/programs/international-expansion-boost', name: 'ieb' } },
  },

  digitalEngine: {
    seo: { title: 'Digital Engine — From Click to Client | BIZ & STYLE', description: 'Digital business infrastructure built, owned and optimized in-house: website, landing pages, Google and Meta, SEO and GEO, CRM, automation, attribution — one loop that gets smarter with every interaction.' },
    hero: { eyebrow: 'Digital engine', title: ['From click', 'to client.'], lede: 'Not a marketing agency. Digital business infrastructure — built, owned and optimized in-house, and run for our own divisions before it is offered to anyone else.' },
    definition: { q: 'What is the BIZ & STYLE digital engine?', a: ['The digital engine is an owned acquisition system that connects attention to pipeline: intelligence, positioning, website and landing pages, content with SEO and GEO, Google and Meta acquisition, lead capture, CRM, qualification, automation, nurture, sales pipeline, attribution and optimization — as one loop.', 'B&S Luxury runs on it: proprietary digital acquisition generated high-net-worth opportunities in some of the most relationship-driven segments of the Miami market.'] },
    faqs: [
      { q: 'Do you replace our agency?', a: 'We build and operate infrastructure you own — websites, accounts, CRM, data. Agencies can plug into it; the system no longer depends on them.' },
      { q: 'What is GEO?', a: 'Generative Engine Optimization: being understood and cited by AI-search systems. It rewards entity clarity, structured content and consistent facts — the same discipline that makes classic SEO work.' },
    ],
    cta: { eyebrow: 'Want to understand where your acquisition system is leaking?', title: ['Request a', 'digital growth review.'], primary: { label: 'Request a digital growth review', href: `${TELL}?intent=digital-growth`, name: 'digital_growth_review' }, secondary: { label: 'Digital Growth Engine™', href: '/programs/digital-growth-engine', name: 'dge' } },
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
    seo: { title: 'Miami — Our Platform to the Americas | BIZ & STYLE', description: 'Miami is the business capital of Latin America and the gateway of the Americas. Why BIZ & STYLE has been headquartered here since 2017, and how it connects Europe, the U.S., the Caribbean and LATAM.' },
    hero: { eyebrow: 'Miami', title: ['Not just our headquarters.', 'Our platform to the Americas.'], lede: 'For decades Miami has been the business capital of Latin America — the meeting point of North America, LATAM, Europe and the Caribbean. Today it is booming.' },
    definition: { q: 'Why is BIZ & STYLE based in Miami?', a: ['Miami is the gateway of the Americas: the historic decision-making hub for Latin America, "Wall Street South" for international capital, home to PortMiami and MIA — the cargo gateway of the Americas — with no state income tax and a constant influx of high-net-worth individuals. Major companies and funds from Silicon Valley and New York are relocating here.', 'BIZ & STYLE has been headquartered in Miami Beach since 2017. Being on the ground here is, in itself, a decisive advantage — and the bonded warehouse turns it into a distribution advantage for the whole region.'] },
    statement: { lines: ['European roots.', 'American execution.', 'Latin American reach.'], body: ['Founded by an Italian entrepreneur, headquartered in Miami, operating across the United States, Mexico, the Caribbean, Brazil and the wider region — with Europe as the origin market for most of the companies we bring to the Americas.'] },
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
    seo: { title: 'Signature Programs — Expansion · Digital · Fractional | BIZ & STYLE', description: 'International Expansion Boost™, Digital Growth Engine™ and the Fractional Executive programme — three understandable ways to start with BIZ & STYLE.' },
    hero: { eyebrow: 'Signature programs', title: ['Three ways', 'to start.'], lede: 'Each programme is a complete, understandable engagement — and each connects to the rest of the platform when you need more.' },
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
    seo: { title: 'Insights — Intelligence for Operators | BIZ & STYLE', description: 'Perspectives on internationalization, U.S. market entry, business development, digital growth, commerce, Miami and the luxury economy — written by people who run these systems.' },
    hero: { eyebrow: 'Insights', title: ['Intelligence', 'for operators.'], lede: 'Perspectives on internationalization, U.S. market entry, digital growth, commerce, Miami and the luxury economy — written by people who run these systems.' },
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
