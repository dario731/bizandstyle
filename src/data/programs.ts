export interface Program {
  slug: string;
  num: string;
  name: string;
  tagline: string;
  lede: string;
  definition: { q: string; a: readonly string[] };
  components: readonly { name: string; line: string }[];
  regulated?: string;
  who: readonly string[];
  faqs: readonly { q: string; a: string }[];
  cta: { eyebrow: string; label: string; href: string; name: string };
  services: readonly string[]; // paths
  mediaId: string;
  seoTitle: string;
  seoDescription: string;
  sections?: readonly { title: string; paragraphs: readonly string[] }[];
  relatedLinks?: readonly { href: string; label: string; line?: string }[];
  schema?: {
    serviceName?: string;
    serviceType?: string;
    areaServed?: readonly string[];
    offers?: { url: string; availability?: string };
  };
}

export const programs: readonly Program[] = [
  {
    slug: 'international-expansion-boost',
    num: '01',
    name: 'International Expansion Boost™',
    tagline: 'Enter America. Build for the long term.',
    lede: 'The BIZ & STYLE signature programme to deploy an international company in the United States and Latin America with an executive team, real infrastructure and a commercial network from day one.',
    definition: {
      q: 'What is International Expansion Boost™?',
      a: [
        'International Expansion Boost™ is BIZ & STYLE’s turnkey market-entry programme for international companies entering the Americas. It combines market intelligence, strategy and positioning, local representation, commercial development, digital infrastructure and lead generation, distribution and logistics from the Miami hub, CRM and ongoing business development — executed by the BIZ & STYLE team on the ground.',
        'Corporate, legal, tax, banking and immigration steps are coordinated by BIZ & STYLE and delivered by licensed professionals.',
      ],
    },
    components: [
      { name: 'Market intelligence', line: 'Competitors, pricing, regulation, channels, buyers.' },
      { name: 'Strategy & positioning', line: 'Entry model, country sequence, business plan, brand positioning for the market.' },
      { name: 'Local representation', line: 'A senior executive presence in Miami representing your company.' },
      { name: 'Commercial development', line: 'Key accounts, distributors, retailers, trade shows, negotiations.' },
      { name: 'Digital infrastructure', line: 'Website, landing pages, Google and Meta, SEO and GEO, CRM.' },
      { name: 'Distribution & logistics', line: 'Domestic and bonded warehousing, fulfillment, customs and freight.' },
      { name: 'CRM & lead generation', line: 'Every relationship captured, qualified and nurtured.' },
      { name: 'Ongoing execution', line: 'Continuity: returning to the market consistently until it is established.' },
    ],
    regulated: 'Entity formation, EIN and licences, U.S. bank accounts, contracts, tax filings and immigration are delivered by independent licensed professionals coordinated by BIZ & STYLE.',
    who: ['International companies and consumer brands entering the U.S. or LATAM', 'Companies that have exported to the U.S. through a distributor and want to become part of the market', 'Founders relocating a business to Miami'],
    faqs: [
      { q: 'How is the programme structured?', a: 'It follows the BIZ & STYLE five-phase model — Understand, Build, Enter, Develop, Establish — with scope, deliverables and cadence defined in a proposal after a strategic conversation.' },
      { q: 'Does it include company formation?', a: 'The programme coordinates it; licensed lawyers and accountants deliver it. The same applies to tax, banking and immigration.' },
    ],
    cta: { eyebrow: 'Planning your U.S. expansion?', label: 'Assess your market entry', href: '/tell-us?intent=market-entry&persona=international-company', name: 'ieb_assess' },
    services: ['/internationalization', '/advisory/international-expansion', '/commerce/bonded-warehouse', '/digital-engine'],
    mediaId: 'HOME-MIAMI-01',
    seoTitle: 'International Expansion Boost™ — U.S. Market Entry Programme | BIZ & STYLE',
    seoDescription: 'A turnkey programme to enter the United States and Latin America with an executive team, infrastructure, digital acquisition, distribution and business development from Miami.',
  },
  {
    slug: 'digital-growth-engine',
    num: '02',
    name: 'Digital Growth Engine™',
    tagline: 'Build the infrastructure that turns attention into opportunity and revenue.',
    lede: 'One owned acquisition system: strategy, website and landing pages, Google and Meta, SEO and GEO, CRM, automation, analytics and conversion — built, owned and optimized in-house.',
    definition: {
      q: 'What is Digital Growth Engine™?',
      a: [
        'Digital Growth Engine™ is the BIZ & STYLE programme that builds a company’s digital business infrastructure as one loop: intelligence, positioning, website and landing pages, content with SEO and GEO, Google and Meta acquisition, lead capture, CRM, qualification, automation, nurture, sales pipeline, attribution and optimization.',
        'It is the same system BIZ & STYLE runs for its own divisions, including B&S Luxury.',
      ],
    },
    components: [
      { name: 'Strategy & positioning', line: 'Who you are for, what you say, where you show up.' },
      { name: 'Website & landing pages', line: 'Fast, indexable, conversion-driven destinations.' },
      { name: 'Google & Meta', line: 'Paid acquisition with international targeting.' },
      { name: 'SEO & GEO', line: 'Search and AI-search visibility.' },
      { name: 'CRM & automation', line: 'Capture, qualification, routing, nurture, retargeting, email.' },
      { name: 'Analytics & conversion', line: 'Attribution and optimization — the system gets smarter with every interaction.' },
    ],
    who: ['Companies whose acquisition depends on agencies they do not control', 'International companies that need U.S. demand before they have a U.S. team', 'Luxury and real-estate businesses reaching international buyers'],
    faqs: [
      { q: 'Do we own the system afterwards?', a: 'Yes. Websites, accounts, CRM and data are built in your name. BIZ & STYLE can continue to operate and optimize, or hand it over.' },
      { q: 'What is included?', a: 'Strategy and positioning, website and landing pages, Google and Meta, SEO and GEO, CRM and automation, analytics and conversion.' },
      { q: 'How is this different from the Digital Engine page?', a: '/digital-engine explains the system. This page is the packaged Digital Growth Engine™ programme to build it.' },
      { q: 'How does this relate to lead generation?', a: 'The programme can power high-ticket lead generation; the dedicated lead-gen offer remains at /lead-generation/.' },
      { q: 'Is BIZ & STYLE a marketing agency?', a: 'No. We build and operate digital business infrastructure — acquisition connected to CRM and pipeline — run on our own ventures first.' },
    ],
    cta: { eyebrow: 'Want to see where your acquisition system is leaking?', label: 'Request a digital growth review', href: '/tell-us?intent=digital-growth', name: 'dge_review' },
    services: ['/digital-engine', '/lead-generation', '/advisory/crm-automation', '/luxury'],
    mediaId: 'HOME-DIV-ADV',
    seoTitle: 'Digital Growth Engine™ Programme | BIZ & STYLE',
    seoDescription: 'Digital Growth Engine™: strategy, sites, Google/Meta, SEO/GEO, CRM and attribution as one owned loop. Programme · +1 305-549-4289.',
    sections: [
      {
        title: 'You own the system afterwards',
        paragraphs: [
          'Websites, accounts, CRM and data are built in your name. BIZ & STYLE can continue to operate and optimize, or hand the loop over. That is the difference from a rented agency stack.',
          'The programme is how you build the engine. /digital-engine explains the system. High-ticket lead generation remains a separate offer at /lead-generation/. Miami-based, with international targeting and SEO / GEO for AI search across the Americas.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/digital-engine', label: 'from click to client — the engine', line: 'The primary system page — owned acquisition infrastructure.' },
      { href: '/lead-generation/', label: 'high-ticket lead generation', line: 'The dedicated P5 offer. This programme can power it; that page stays the offer.' },
      { href: '/advisory/fractional-executive', label: 'fractional executive capability', line: 'Operator plus digital — when leadership and the engine travel together.' },
      { href: '/luxury', label: 'same system B&S Luxury runs', line: 'Proof the engine was operated on our own division first.' },
    ],
    schema: {
      serviceName: 'Digital Growth Engine™ Programme',
      serviceType: 'Digital growth / owned acquisition programme',
      areaServed: ['Miami', 'United States', 'Latin America'],
      offers: { url: 'https://bizandstyledna.com/programs/digital-growth-engine' },
    },
  },
  {
    slug: 'fractional-executive',
    num: '03',
    name: 'Fractional Executive',
    tagline: 'Senior leadership. Embedded when you need it.',
    lede: 'Strategy and execution from senior operators inside your company — without building an entire in-house leadership organization on day one.',
    definition: {
      q: 'What is the BIZ & STYLE Fractional Executive programme?',
      a: [
        'The Fractional Executive programme places a senior BIZ & STYLE operator in an executive role in your company — commercial leadership, international expansion leadership, strategic project leadership or market representation — for a defined mandate, backed by the platform’s infrastructure, technology and network.',
      ],
    },
    components: [
      { name: 'Role definition', line: 'Objectives, scope, cadence and reporting agreed up front.' },
      { name: 'Embedded leadership', line: 'The executive works inside your organization with your team.' },
      { name: 'Platform behind the person', line: 'Miami HQ, warehouse and logistics, digital engine, commercial network.' },
      { name: 'Transition', line: 'Build the internal organization when the market justifies it.' },
    ],
    who: ['Companies entering the Americas that need a senior lead before a full team', 'Founders who need commercial leadership while they focus on product', 'Businesses running a strategic project without a senior owner'],
    faqs: [
      { q: 'How much time does the executive dedicate?', a: 'It depends on the mandate — from a few days a month to a majority of the week during a launch. Cadence is defined with objectives and reviewed regularly.' },
      { q: 'What is included in the programme?', a: 'Role definition, embedded leadership inside your organization, the BIZ & STYLE platform behind the person, and a transition plan when you build in-house.' },
      { q: 'Do we get infrastructure or only a person?', a: 'Leadership arrives with capability — Miami HQ, warehouse and logistics, digital engine and commercial network.' },
      { q: 'How is the programme different from the advisory page?', a: '/advisory/fractional-executive explains the capability. This page is the packaged programme to start with.' },
      { q: 'How do we begin?', a: 'Contact info@bizandstyledna.com or +1 305-549-4289 to define role, objectives and cadence.' },
    ],
    cta: { eyebrow: 'Need senior leadership in the Americas?', label: 'Discuss a fractional mandate', href: '/tell-us?intent=fractional-executive', name: 'fx_tell_us' },
    services: ['/advisory/fractional-executive', '/miami', '/digital-engine', '/commerce/bonded-warehouse'],
    mediaId: 'HOME-DIV-ADV',
    seoTitle: 'Fractional Executive Programme | BIZ & STYLE',
    seoDescription: 'Embed a senior BIZ & STYLE operator as your fractional executive — role, cadence, platform backing, transition. Programme offer · +1 305-549-4289.',
    sections: [
      {
        title: 'Platform behind the person (Miami HQ, warehouse, digital, network)',
        paragraphs: [
          'The Fractional Executive programme is the commercial offer: a senior BIZ & STYLE operator embedded in your company for a defined mandate — commercial, expansion or project leadership — across the Americas.',
          'Leadership arrives with capability already in place: Miami headquarters, warehouse and logistics, the digital engine, and a commercial network in the United States and Latin America. Not a lone consultant. The platform behind the person.',
        ],
      },
      {
        title: 'Transition — build internal organization when the market justifies it',
        paragraphs: [
          'The programme includes a transition plan. When the United States or Latin America justifies an in-house organization, the fractional executive helps you hire and hand over — HQ, warehouse and network still available as infrastructure.',
          'Start here when you want the packaged programme. Read what a fractional executive is on the capability page if you are still mapping the role.',
        ],
      },
    ],
    relatedLinks: [
      { href: '/advisory/fractional-executive', label: 'what a fractional executive is', line: 'The capability explainer — not the programme SKU.' },
      { href: '/miami', label: 'Miami platform behind the person', line: 'HQ, bonded hub and the geo reason the executive is not remote.' },
      { href: '/digital-engine', label: 'digital engine', line: 'Owned acquisition infrastructure the executive can run.' },
      { href: '/commerce/bonded-warehouse', label: 'warehouse and logistics', line: 'Duty-deferred Miami infrastructure behind commercial leadership.' },
    ],
    schema: {
      serviceName: 'Fractional Executive Programme',
      serviceType: 'Fractional executive programme',
      areaServed: ['Miami', 'United States', 'Latin America', 'Americas'],
      offers: { url: 'https://bizandstyledna.com/programs/fractional-executive', availability: 'https://schema.org/InStock' },
    },
  },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);
