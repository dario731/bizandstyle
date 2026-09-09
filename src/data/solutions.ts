/**
 * Solutions — migrated from bizandstyledna.com/solutions (Sept 2026).
 * Wording kept close to the source; regulated items carry the licensed-
 * professional note required by the brief (§5).
 */
export interface Solution {
  num: string;
  slug: string;
  name: string;
  tagline: string;
  intro: string;
  groups: readonly { title: string; items: readonly string[] }[];
  note?: string;
  regulated?: boolean;
  href: string;
}

export const solutionsIntro = {
  title: ['Tested, turnkey solutions', 'engineered for results.'],
  lede: "We don't just offer services — we provide solutions developed through real-world experience. Whether you're an entrepreneur expanding abroad, an executive entering a new market, or an investor seeking strategic infrastructure, we equip you with everything you need to launch, scale, and succeed.",
  capabilities: 'At BIZ & STYLE, our offerings are designed to function as an integrated ecosystem or as standalone, à la carte services. This flexibility allows us to tailor our support precisely to your needs, providing the right tools at the right time. Five core solution categories, each built to transform complexity into clarity and ambition into reality.',
};

export const solutions: readonly Solution[] = [
  {
    num: '01',
    slug: 'management-business-development',
    name: 'Management & Business Development',
    tagline: 'Your embedded growth engine for new markets.',
    intro: "We act as your embedded growth engine, combining strategy, infrastructure, and execution to drive results in new markets. Whether you're launching, scaling, or repositioning, our team ensures your business has the right partners, positioning, and processes to grow with confidence.",
    groups: [
      { title: 'Strategy & planning', items: ['Market research & feasibility studies', 'Go-to-market strategy planning'] },
      { title: 'Partnership & growth', items: ['Business partner scouting & acquisition', 'Partnership engineering (JVs, licensing)', 'New market development'] },
      { title: 'Execution & operations', items: ['Fractional C-level management', 'Lead generation & CRM setup', 'E-commerce setup & digital marketing', 'PR, event marketing & influencer outreach'] },
    ],
    href: '/advisory',
  },
  {
    num: '02',
    slug: 'corporate-setup-legal',
    name: 'Corporate Setup & Legal Compliance',
    tagline: 'All the formalities handled, so you can focus on growth.',
    intro: 'Navigating the complexities of legal and corporate requirements is critical for success. We coordinate all the essential formalities so you can focus on your core business operations and strategic growth initiatives.',
    groups: [
      { title: 'Company formation', items: ['End-to-end LLC or Corporation registration', 'EIN and all state filings in the U.S.'] },
      { title: 'Financial setup', items: ['Opening of U.S. business bank accounts, also for non-residents', 'Bookkeeping and tax filing services'] },
      { title: 'Legal & IP protection', items: ['Contract drafting and review', 'Compliance', 'Trademark and IP registration and enforcement'] },
    ],
    note: 'Entity formation, banking, bookkeeping, tax filings, contracts and IP are delivered by independent licensed lawyers, accountants and banking partners coordinated by BIZ & STYLE.',
    regulated: true,
    href: '/advisory/international-expansion',
  },
  {
    num: '03',
    slug: 'logistics-operations',
    name: 'Logistics & Operations',
    tagline: 'Activating and managing your complete supply chain.',
    intro: 'We ensure your business is equipped with the resources and capabilities needed to activate and manage every stage of the supply chain. Our solutions ensure your operations are up and running smoothly from day one, providing a seamless bridge between your products and your customers.',
    groups: [
      { title: 'Warehousing & fulfillment', items: ['Bonded and standard facilities in Miami', 'Custom B2B and B2C fulfillment strategies tailored to your business model'] },
      { title: 'International trade & freight', items: ['Import/export setup', 'Customs brokerage', 'Freight forwarding by air and ocean, door to door'] },
      { title: 'Systems & integration', items: ['Flexible soft-ERP systems for inventory, shipping, invoicing and order flow — without enterprise-level complexity'] },
    ],
    note: "Miami Bonded Warehouse Advantage: delay duty payments until goods enter the U.S. market, store merchandise without customs duties, and leverage Miami's position as a gateway to Latin American markets. During periods of supply-chain uncertainty, bonded facilities provide flexibility to navigate tariff changes and keep inventory close to multiple markets without the immediate financial burden of customs duties.",
    href: '/commerce/bonded-warehouse',
  },
  {
    num: '04',
    slug: 'relocation-immigration',
    name: 'Relocation & Immigration',
    tagline: 'Simplifying the transition for executives and founders.',
    intro: "Expanding your business into a new country involves more than corporate setup; it's about successfully transitioning your most valuable assets — your people. We simplify the entire journey for executives, founders, and their families.",
    groups: [
      { title: 'Visa support', items: ['Immigration strategy', 'Documentation preparation', 'Attorney coordination for investor, executive and talent visas (E-2, L-1, O-1)'] },
      { title: 'Executive relocation', items: ['Travel arrangements', 'Temporary or permanent housing', 'A comfortable lifestyle transition to your new base of operations'] },
    ],
    note: 'Visa strategy and filings are delivered by top U.S. immigration law firms in our network; BIZ & STYLE coordinates the process end to end.',
    regulated: true,
    href: '/miami',
  },
  {
    num: '05',
    slug: 'real-estate-wealth-lifestyle',
    name: 'Real Estate, Wealth & Lifestyle',
    tagline: 'White-glove services for investors and executives.',
    intro: 'For high-net-worth individuals, executives, and international investors, luxury real estate serves as the cornerstone of a lasting wealth legacy. We view premium properties not merely as residences, but as strategic business assets that bridge personal lifestyle with investment portfolio diversification. Through our partnerships with exclusive professionals in Miami and globally, we deliver tailored, white-glove services that turn property acquisition into a foundation for generational wealth preservation.',
    groups: [
      { title: 'Private residence & lifestyle', items: ['Strategic acquisition of investment-grade luxury properties, from waterfront estates to branded residences', 'Concierge setup and integration with business operations'] },
      { title: 'Wealth planning', items: ['Property-centred wealth strategy connecting real-estate assets to broader financial objectives', 'Multi-jurisdictional investment vehicles and international holding structures'] },
      { title: 'Asset protection', items: ['Structuring of real-estate holdings through companies and trusts in reputable jurisdictions', 'Optimised tax exposure and a secured legacy for future generations'] },
    ],
    note: 'Wealth planning, structuring, tax and asset-protection matters are delivered by independent licensed financial, legal and tax advisors. Real-estate brokerage is provided through B&S Luxury.',
    regulated: true,
    href: '/luxury',
  },
];
