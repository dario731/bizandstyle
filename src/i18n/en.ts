/**
 * English copy — the master language. Other locales mirror this shape in it.ts / es.ts / pt.ts
 * and are only published when a native review pass is complete.
 * Every claim here traces to docs/01-AUDIT.md §A.
 */
export const en = {
  meta: {
    home: {
      title: 'BIZ & STYLE — Business Development Platform · Miami · Americas',
      description:
        'BIZ & STYLE is a Miami-based business development platform connecting strategy, execution, commerce, technology and high-value relationships across the Americas and beyond. Three integrated divisions: B&S Advisory, B&S Commerce, B&S Luxury.',
    },
  },

  nav: {
    items: [
      {
        label: 'Platform',
        href: '/platform',
        columns: [
          {
            title: 'The platform',
            links: [
              { label: 'Who we are', href: '/platform' },
              { label: 'How we work', href: '/platform/how-we-work' },
              { label: 'The Investor Journey™', href: '/investor-journey' },
              { label: 'Partner ecosystem', href: '/partners' },
            ],
          },
          {
            title: 'Capabilities',
            links: [
              { label: 'Internationalization', href: '/internationalization' },
              { label: 'Digital engine', href: '/digital-engine' },
              { label: 'Infrastructure', href: '/infrastructure' },
              { label: 'Miami / Global reach', href: '/miami' },
            ],
          },
        ],
      },
      { label: 'Solutions', href: '/solutions' },
      {
        label: 'Advisory',
        href: '/advisory',
        columns: [
          {
            title: 'Strategy & growth',
            links: [
              { label: 'Business strategy', href: '/advisory/business-strategy' },
              { label: 'International expansion', href: '/advisory/international-expansion' },
              { label: 'Fractional executive', href: '/advisory/fractional-executive' },
              { label: 'Temporary export management', href: '/advisory/temporary-export-management' },
              { label: 'Business development', href: '/advisory/business-development' },
              { label: 'Partnership engineering', href: '/advisory/partnership-engineering' },
            ],
          },
          {
            title: 'Digital growth',
            links: [
              { label: 'Digital growth', href: '/advisory/digital-growth' },
              { label: 'Lead generation', href: '/advisory/lead-generation' },
              { label: 'CRM & automation', href: '/advisory/crm-automation' },
              { label: 'AI / digital transformation', href: '/advisory/ai-digital-transformation' },
            ],
          },
        ],
      },
      {
        label: 'Commerce',
        href: '/commerce',
        columns: [
          {
            title: 'Trade & distribution',
            links: [
              { label: 'Distribution', href: '/commerce/distribution' },
              { label: 'Import / export', href: '/commerce/import-export' },
              { label: 'E-commerce', href: '/commerce/e-commerce' },
              { label: 'Marketplaces', href: '/commerce/marketplaces' },
            ],
          },
          {
            title: 'Operations',
            links: [
              { label: 'Warehousing', href: '/commerce/warehousing' },
              { label: 'Bonded warehouse', href: '/commerce/bonded-warehouse' },
              { label: 'Fulfillment', href: '/commerce/fulfillment' },
              { label: 'Brand expansion', href: '/commerce/brand-expansion' },
            ],
          },
        ],
      },
      {
        label: 'Luxury',
        href: '/luxury',
        columns: [
          {
            title: 'B&S Luxury',
            links: [
              { label: 'Business development ecosystem', href: '/luxury' },
              { label: 'Seven verticals', href: '/luxury/seven-verticals' },
              { label: 'Developer partnerships', href: '/luxury/developer-partnerships' },
              { label: 'Luxury real estate ↗', href: 'https://bns-luxury.com', external: true },
            ],
          },
        ],
      },
      { label: 'Investor Journey', href: '/investor-journey' },
      { label: 'Insights', href: '/insights' },
      {
        label: 'About',
        href: '/about',
        columns: [
          {
            title: 'About',
            links: [
              { label: 'Our story', href: '/about' },
              { label: 'Dario Picardi', href: '/about/dario-picardi' },
              { label: 'Relationships & discretion', href: '/about/relationships' },
              { label: 'Miami', href: '/miami' },
            ],
          },
          {
            title: 'Connect',
            links: [
              { label: "Tell us what you're building", href: '/tell-us' },
              { label: 'Become a partner', href: '/become-a-partner' },
              { label: "Let's connect", href: '/connect' },
            ],
          },
        ],
      },
    ],
    cta: { label: "Tell us what you're building", href: '/tell-us' },
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
  },

  home: {
    hero: {
      eyebrow: 'Miami · United States · Latin America · Europe',
      title: ['Business.', 'Wealth.', 'Lifestyle.'],
      sub: 'Business development without borders.',
      lede:
        'One platform connecting strategy, execution, commerce, technology and high-value relationships across the Americas and beyond.',
      primary: { label: "Tell us what you're building", href: '/tell-us' },
      secondary: { label: 'Explore the platform', href: '#platform' },
      mediaId: 'HOME-HERO-01',
      scroll: 'Scroll',
    },

    platform: {
      eyebrow: '01 — The platform',
      title: 'One platform. Three engines. Built for growth.',
      definition:
        'BIZ & STYLE is a Miami-based business development platform. It connects strategy, execution, commerce, technology and high-value relationships for companies, founders, investors and private clients operating between Europe, the United States and Latin America.',
      body:
        'Advisory, Commerce and Luxury are not three disconnected companies. They are three operating engines within one platform, sharing the same team, infrastructure, technology and relationships — so that what starts as a market-entry project can become distribution, and what starts as a property can become a business.',
      engines: [
        { num: '01', name: 'B&S Advisory', role: 'Strategy & Growth', line: 'Strategy that ends in execution.', href: '/advisory' },
        { num: '02', name: 'B&S Commerce', role: 'Trade & Distribution', line: 'From product to market.', href: '/commerce' },
        { num: '03', name: 'B&S Luxury', role: 'Real Estate & High-Value Ecosystems', line: 'Business development at the highest level.', href: '/luxury' },
      ],
    },

    realWorld: {
      eyebrow: '02 — Built in the real world',
      lines: ["We don't sell theory.", 'We build it.', 'We operate it.', 'We test it.', 'We optimize it.', 'Then we bring it to our clients.'],
      body:
        'Every capability BIZ & STYLE offers was first used inside its own ventures: entering markets, running distribution, operating a warehouse, building digital acquisition, generating leads, working in real estate and luxury. The method exists because the company lived it — not the other way round.',
      proofEyebrow: 'Operating proof · already in place',
      proof: [
        { k: 'Miami headquarters', v: 'Since 2017' },
        { k: 'Executive team', v: 'On the ground' },
        { k: 'Warehousing', v: 'Domestic + bonded' },
        { k: 'Logistics', v: 'B2B · B2C · customs' },
        { k: 'Technology', v: 'CRM · acquisition · analytics' },
        { k: 'Relationships', v: '200+ commercial partners' },
      ],
    },

    journey: {
      eyebrow: '03 — The Investor Journey™',
      title: 'We lived it firsthand.',
      intro:
        'Through years of creating, operating and testing businesses we observed the same cycle in every successful entrepreneur and investor: three interconnected stages that keep feeding each other.',
      stages: [
        {
          id: 'business',
          name: 'Business',
          verbs: ['Create', 'Build', 'Enter', 'Expand', 'Scale'],
          examples: ['Entrepreneurship', 'Market entry', 'Internationalization', 'Commerce', 'Business development', 'Digital growth', 'Partnerships'],
          generates: 'Business generates capital, relationships, opportunities, knowledge and networks.',
        },
        {
          id: 'wealth',
          name: 'Wealth',
          verbs: ['Generate', 'Invest', 'Diversify', 'Structure', 'Preserve'],
          examples: ['Investment', 'Real estate', 'Strategic ventures', 'Capital allocation', 'Structuring — through qualified professionals'],
          generates: 'Wealth seeks quality of life, access and community — and Miami is where investment and lifestyle converge.',
        },
        {
          id: 'lifestyle',
          name: 'Lifestyle',
          verbs: ['Live', 'Access', 'Experience', 'Connect'],
          examples: ['Luxury real estate', 'Private aviation', 'Yachting', 'Interior design', 'Hospitality', 'Luxury brands', 'Events & experiences'],
          generates: 'Lifestyle creates relationships. Relationships create opportunities. Opportunities create business.',
        },
      ],
      loop: 'Business → Wealth → Lifestyle → Business',
      statement: ['Where business becomes wealth.', 'And wealth becomes lifestyle.', 'And lifestyle opens new business.'],
      tagline: ['Different stages.', 'Different specialists.', 'One connected journey.'],
      closing: ['We lived the journey.', 'We built the platform around it.'],
      cta: { label: 'Explore the Investor Journey', href: '/investor-journey' },
      hint: 'Select a stage',
    },

    divisions: {
      eyebrow: '04 — Three divisions',
      items: [
        {
          num: '01',
          name: 'B&S Advisory',
          statement: 'Strategy that ends in execution.',
          body:
            'Business strategy, international expansion, fractional executive leadership, business development and digital growth — delivered by a team that operates in-market rather than advising from a distance.',
          points: ['Business strategy & go-to-market', 'International expansion · U.S. & LATAM', 'Fractional executive', 'Digital growth · lead generation · CRM'],
          cta: { label: 'Explore B&S Advisory', href: '/advisory' },
          mediaId: 'HOME-DIV-ADV',
          ground: 'paper',
        },
        {
          num: '02',
          name: 'B&S Commerce',
          statement: 'From product to market.',
          body:
            'Import and export, distribution, marketplaces, domestic and bonded warehousing in Miami, B2B and B2C fulfillment and brand representation — the physical engine that lets an international brand operate in the Americas.',
          points: ['Distribution · retail · travel retail · e-commerce', 'Domestic + bonded warehousing, Miami', 'Amazon · Shopify · marketplaces', 'Licensing & brand representation'],
          cta: { label: 'Explore B&S Commerce', href: '/commerce' },
          mediaId: 'HOME-DIV-COM',
          ground: 'onyx',
        },
        {
          num: '03',
          name: 'B&S Luxury',
          statement: 'Business development at the highest level.',
          body:
            'Luxury real estate in Miami, developer partnerships and a business-development ecosystem across seven luxury verticals that serve the same high-net-worth client. Not concierge — a platform where relationships compound.',
          points: ['Luxury & pre-construction real estate', 'Developer partnerships', 'Seven-vertical HNWI ecosystem', 'Proprietary digital acquisition'],
          cta: { label: 'Explore B&S Luxury', href: '/luxury' },
          mediaId: 'HOME-DIV-LUX',
          ground: 'paper',
        },
      ],
    },

    internationalization: {
      eyebrow: '05 — Internationalization',
      title: 'Export is not internationalization.',
      lede: 'Export sells products. Internationalization builds a long-term commercial presence — until a company becomes part of the market.',
      compare: {
        export: { title: 'Export', rows: ['Sell products abroad', 'Looks for orders', 'Short-term · transaction', 'Product and price driven', 'One distributor', 'Reactive'] },
        intl: { title: 'Internationalization', rows: ['Become part of the market', 'Creates opportunities', 'Long-term · relationship', 'Market and value driven', 'The entire ecosystem', 'Proactive'] },
      },
      phasesEyebrow: 'The BIZ & STYLE model · five phases',
      phases: [
        { name: 'Understand', line: 'Study the company, define objectives, assess resources and readiness.' },
        { name: 'Build', line: 'Market strategy, positioning, country prioritization, entry model, business plan.' },
        { name: 'Enter', line: 'Introduce the company: key accounts, distributors, retailers, trade shows, visibility.' },
        { name: 'Develop', line: 'Continuous visits, negotiations, training, commercial support, relationship management.' },
        { name: 'Establish', line: 'Long-term customers, reputation, local network, sustainable and organic growth.' },
      ],
      quote: 'Real internationalization begins when your company is no longer perceived as a foreign supplier, but as a trusted participant in the local business ecosystem.',
      ctaEyebrow: 'Planning your U.S. expansion?',
      cta: { label: 'Assess your market entry', href: '/tell-us?intent=market-entry&persona=international-company' },
      link: { label: 'The internationalization method', href: '/internationalization' },
    },

    digital: {
      eyebrow: '06 — Digital engine',
      title: 'From click to client.',
      lede: 'Digital business infrastructure — built, owned and optimized in-house. Not a marketing agency: an acquisition system that connects attention to pipeline.',
      nodes: ['Intelligence', 'Positioning', 'Website & landing pages', 'Content · SEO · GEO', 'Google + Meta', 'Lead capture', 'CRM', 'Qualification', 'Automation', 'Nurture', 'Sales pipeline', 'Attribution', 'Optimization'],
      loopLabel: 'The system loops',
      statement: 'The system gets smarter with every interaction.',
      capabilities: ['Web strategy', 'Landing pages', 'Google Ads', 'Meta Ads', 'SEO', 'GEO / AI search', 'International targeting', 'Lead capture', 'CRM', 'Lead routing', 'Automation', 'Email & retargeting', 'Analytics & attribution', 'Conversion optimization'],
      ctaEyebrow: 'Want to see where your acquisition system is leaking?',
      cta: { label: 'Request a digital growth review', href: '/tell-us?intent=digital-growth' },
    },

    infrastructure: {
      eyebrow: '07 — Infrastructure',
      title: ['Not advice from a distance.', 'Capability already in place.'],
      modules: [
        { name: 'Miami HQ', line: 'Headquarters in Miami Beach since 2017 — the base for the U.S., Canada and the Caribbean.' },
        { name: 'Executive team', line: 'Senior leadership operating in-market. Not consultants — a team that executes.' },
        { name: 'Technology & CRM', line: 'Acquisition, CRM, e-commerce and analytics systems built and run in-house.' },
        { name: 'Domestic + bonded warehousing', line: 'Standard storage plus duty-deferred bonded storage in Miami — a redistribution hub for LATAM and the Caribbean.' },
        { name: 'Fulfillment + logistics', line: 'Customs, freight forwarding by air and ocean, B2B and B2C fulfillment.' },
        { name: 'Marketing', line: 'Brand, digital, PR and content — from positioning to campaign.' },
        { name: 'Commercial network', line: 'A proprietary network of 200+ commercial partners across the U.S. and Latin America.' },
        { name: 'Specialized professional network', line: 'Corporate lawyers, tax advisors, immigration attorneys, banking and financial partners — licensed, independent, coordinated by us.' },
      ],
      note: 'Regulated disciplines — legal, tax, accounting, immigration, banking, financial and wealth advisory — are delivered by independent licensed professionals. BIZ & STYLE coordinates; they deliver.',
      cta: { label: 'See the infrastructure', href: '/infrastructure' },
    },

    luxury: {
      eyebrow: 'The seven verticals',
      title: 'Business development at the highest level.',
      not: 'This is not concierge.',
      body:
        'We do not send a client to someone who needs a jet, a yacht or a table. B&S Luxury develops structured, long-term relationships among companies that serve the same high-net-worth client — governed, where appropriate, by business-development agreements.',
      centre: 'HNWI',
      sameClient: ['Different industries.', 'The same client.'],
      verticals: [
        { id: 'real-estate', name: 'Luxury real estate', role: 'Core operating division' },
        { id: 'aviation', name: 'Private aviation', role: 'Strategic partner' },
        { id: 'yachting', name: 'Yachting', role: 'Strategic partner' },
        { id: 'interior', name: 'Interior design', role: 'Strategic partner' },
        { id: 'goods', name: 'Luxury goods', role: 'Strategic partner' },
        { id: 'media', name: 'Luxury media', role: 'Strategic partner' },
        { id: 'entertainment', name: 'Celebrity · Sports · Entertainment', role: 'Strategic partner' },
      ],
      relations: ['Relationships', 'Visibility', 'Access', 'Clients', 'Partnerships', 'Opportunities'],
      triplet: ['Business creates relationships.', 'Relationships create opportunities.', 'The ecosystem compounds.'],
      ctaEyebrow: 'Exploring Miami investment opportunities?',
      cta: { label: 'Start your Investor Journey', href: '/tell-us?intent=investor&persona=investor' },
      link: { label: 'Explore B&S Luxury', href: '/luxury' },
      hint: 'Select a vertical to see its connections',
    },

    relationships: {
      eyebrow: '09 — Relationships & discretion',
      title: 'Relationships are capital.',
      body:
        'Our ecosystem has been built over years through trusted relationships with companies, executives, entrepreneurs, investors and specialized professionals across multiple industries and markets.',
      discretion: 'Discretion is part of the relationship.',
      discretionBody:
        'Not every relationship belongs on a website. We selectively showcase collaborations while protecting the confidentiality of our clients, partners and commercial relationships.',
      credentials: ['Selected credentials.', 'Available when relevant.'],
      credentialsBody: 'Case studies and detailed references across market entry, distribution, luxury real estate and brand representation are available on request — and, when appropriate, under NDA.',
      cta: { label: 'Request credentials', href: '/request-credentials' },
    },

    miami: {
      eyebrow: '10 — Miami',
      title: ['Miami is not just our headquarters.', "It's our platform to the Americas."],
      triplet: ['European roots.', 'American execution.', 'Latin American reach.'],
      body:
        'For decades Miami has been the business capital of Latin America — the meeting point of North America, LATAM, Europe and the Caribbean. Our headquarters has been here since 2017. Being on the ground is, in itself, a decisive advantage.',
      nodes: {
        origin: 'Europe',
        hub: 'Miami',
        targets: ['United States', 'Mexico', 'Caribbean', 'Brazil', 'LATAM'],
      },
      facts: [
        { k: 'Gateway', v: 'Capital of Latin America — the natural bridge between the U.S., LATAM, Europe and the Caribbean.' },
        { k: 'Momentum', v: 'Companies and funds from Silicon Valley and New York are relocating here — talent, capital and headquarters follow.' },
        { k: 'Finance', v: '"Wall Street South": Brickell concentrates international capital, private wealth and a fast-growing financial ecosystem.' },
        { k: 'Trade', v: 'PortMiami and MIA — the cargo gateway of the Americas, logistics for three continents.' },
        { k: 'Capital', v: 'No state income tax and a business-friendly framework attracting founders, funds and family offices.' },
        { k: 'Lifestyle', v: 'A constant influx of high-net-worth individuals fuels real estate, retail and premium lifestyle demand.' },
      ],
      presence: [
        { k: 'Miami', v: 'Headquarters & bonded warehouse — U.S., Canada, Caribbean' },
        { k: 'Mexico', v: 'Operating base — Mexico & Central America' },
        { k: 'Brazil', v: 'Operating base — Brazil & wider LATAM' },
      ],
      cta: { label: 'Why Miami', href: '/miami' },
    },

    programs: {
      eyebrow: '11 — Signature programs',
      title: 'Three ways to start.',
      items: [
        {
          num: '01',
          name: 'International Expansion Boost™',
          line: 'Enter America. Build for the long term.',
          body: 'Market intelligence, strategy, positioning, local representation, commercial development, digital infrastructure, distribution, logistics and ongoing execution — with corporate, legal and tax steps handled by licensed specialists.',
          href: '/programs/international-expansion-boost',
        },
        {
          num: '02',
          name: 'Digital Growth Engine™',
          line: 'Turn attention into opportunity and revenue.',
          body: 'Strategy, website and landing pages, Google and Meta, SEO and GEO, CRM, automation, analytics and conversion — one owned acquisition system.',
          href: '/programs/digital-growth-engine',
        },
        {
          num: '03',
          name: 'Fractional Executive',
          line: 'Senior leadership. Embedded when you need it.',
          body: 'Strategy and execution from senior operators, without building an entire in-house leadership organization on day one.',
          href: '/programs/fractional-executive',
        },
      ],
    },

    insights: {
      eyebrow: '12 — Insights',
      title: 'Intelligence for operators.',
      lede: 'Perspectives on internationalization, U.S. market entry, digital growth, commerce, Miami and the luxury economy — written by people who run these systems.',
      cta: { label: 'All insights', href: '/insights' },
      readingTime: 'min read',
    },

    tellUs: {
      eyebrow: '13 — Start here',
      title: ["Tell us", "what you're building."],
      lede: "Every business starts from a different point. Tell us where you are and where you're trying to go.",
      personaLabel: 'I am…',
      personas: [
        { id: 'international-company', label: 'An international company' },
        { id: 'us-company', label: 'A U.S. company' },
        { id: 'founder', label: 'A founder / entrepreneur' },
        { id: 'consumer-brand', label: 'A consumer brand' },
        { id: 'luxury-company', label: 'A luxury company' },
        { id: 'developer', label: 'A real estate developer' },
        { id: 'investor', label: 'An investor / private client' },
        { id: 'partner', label: 'A professional / potential partner' },
      ],
      needs: [
        { id: 'market-entry', label: 'Market entry' },
        { id: 'distribution', label: 'Distribution' },
        { id: 'digital-growth', label: 'Digital growth' },
        { id: 'business-development', label: 'Business development' },
        { id: 'fractional-executive', label: 'Fractional executive' },
        { id: 'investor', label: 'Investment / real estate' },
        { id: 'partnership', label: 'Partnership' },
        { id: 'other', label: 'Other' },
      ],
      fields: {
        name: 'Your name',
        company: 'Company',
        email: 'Work email',
        phone: 'Phone (optional)',
        website: 'Website (optional)',
        country: 'Country / headquarters',
        currentMarkets: 'Current markets',
        targetMarket: 'Target market',
        usPresence: 'Current U.S. presence',
        size: 'Company size / revenue range',
        category: 'Product category',
        channels: 'Current channels',
        budget: 'Investment horizon',
        need: 'What do you need?',
        message: 'Tell us more — where you are, where you want to go',
        consent: 'I agree to be contacted about my request and have read the privacy policy.',
      },
      options: {
        usPresence: ['No presence yet', 'Exporting through a distributor', 'Entity, no team', 'Team on the ground'],
        size: ['Under $1M', '$1M – $10M', '$10M – $50M', '$50M+', 'Prefer not to say'],
        targetMarket: ['United States', 'Latin America', 'United States + LATAM', 'Europe', 'Other'],
        horizon: ['Exploring', 'Within 6 months', 'Within 12 months', 'Ongoing'],
      },
      steps: ['Who you are', 'What you need', 'How to reach you'],
      next: 'Continue',
      back: 'Back',
      submit: "Let's build.",
      sending: 'Sending…',
      success: { title: 'Received.', body: 'Thank you. A member of the team will come back to you personally. If it is urgent, call us or book a call directly.' },
      error: 'Something went wrong. Please try again, or email us directly.',
    },

    partner: {
      eyebrow: '14 — Become a partner',
      title: ['Great business', 'rarely happens alone.'],
      body:
        'BIZ & STYLE develops long-term relationships with companies and professionals whose expertise, clients and ambitions intersect with our ecosystem: luxury companies, professional firms, developers, brands, international organizations, technology providers and qualified specialists.',
      cta: { label: 'Explore a partnership', href: '/become-a-partner' },
    },

    founder: {
      eyebrow: '15 — Built by operators. Not observers.',
      name: 'Dario Picardi',
      role: 'Founder / President',
      title: 'The platform came from the journey.',
      body: [
        'Born in Italy, Dario Picardi built his career over fifteen years in beauty, consumer goods, real estate and international business — building and scaling premium consumer brands, entering the U.S. and Latin American markets, running distribution, building digital acquisition, investing, working in real estate and operating inside luxury ecosystems.',
        'Those experiences kept revealing the same connection: business creates wealth, wealth shapes lifestyle, and lifestyle opens new business. That observation became the BIZ & STYLE philosophy — and the platform was built around it, in Miami, in 2017.',
      ],
      facts: ['Two master’s degrees in Management, cum laude', 'Ventures and business across New York, Miami, São Paulo, Milan, London, Dubai and Singapore', 'Every BIZ & STYLE solution was first tested in his own ventures'],
      cta: { label: 'Leadership', href: '/about/dario-picardi' },
      mediaId: 'FOUNDER-01',
    },

    final: {
      lines: ['We lived the journey.', 'We built the platform.'],
      next: "Now let's build what's next.",
      primary: { label: "Tell us what you're building", href: '/tell-us' },
      secondary: { label: "Let's connect", href: '/connect' },
    },
  },

  footer: {
    statement: 'Business. Wealth. Lifestyle.',
    groups: [
      { title: 'Platform', links: [['Who we are', '/platform'], ['How we work', '/platform/how-we-work'], ['Internationalization', '/internationalization'], ['Digital engine', '/digital-engine'], ['Infrastructure', '/infrastructure'], ['Miami', '/miami'], ['Partner ecosystem', '/partners']] },
      { title: 'Divisions', links: [['B&S Advisory', '/advisory'], ['B&S Commerce', '/commerce'], ['B&S Luxury', '/luxury'], ['The Investor Journey™', '/investor-journey'], ['Luxury real estate ↗', 'https://bns-luxury.com']] },
      { title: 'Programs', links: [['International Expansion Boost™', '/programs/international-expansion-boost'], ['Digital Growth Engine™', '/programs/digital-growth-engine'], ['Fractional Executive', '/programs/fractional-executive']] },
      { title: 'Company', links: [['Our story', '/about'], ['Dario Picardi', '/about/dario-picardi'], ['Relationships & discretion', '/about/relationships'], ['Insights', '/insights'], ['Request credentials', '/request-credentials']] },
      { title: 'Connect', links: [["Tell us what you're building", '/tell-us'], ['Become a partner', '/become-a-partner'], ["Let's connect", '/connect']] },
    ],
    legal: [['Privacy', '/privacy'], ['Terms of use', '/terms'], ['Disclosures & disclaimers', '/disclosures']],
    hq: 'Headquarters',
    rights: 'All rights reserved.',
    disclaimer:
      'BIZ & STYLE DNA INC. delivers business advisory, commerce, logistics, marketing and luxury real-estate services directly. Legal, tax, accounting, immigration, banking, financial and wealth advisory are provided by independent licensed professionals. Nothing on this site constitutes legal, tax, investment or financial advice.',
  },

  common: {
    placeholder: 'Asset pending',
    placeholderNote: 'See docs/05-ASSET-MANIFEST.md',
  },
};

export type Copy = typeof en;
