/**
 * Single source of truth for entity data. Everything here is verified against
 * the Corporate Profile 2026 and the live site (see docs/01-AUDIT.md).
 * Nothing unverified belongs in this file.
 */
export const site = {
  name: 'BIZ & STYLE',
  legalName: 'BIZ & STYLE DNA INC.',
  url: 'https://bizandstyledna.com',
  tagline: 'Business. Wealth. Lifestyle.',
  description:
    'BIZ & STYLE is a Miami-based business development platform connecting strategy, execution, commerce, technology and high-value relationships across the Americas and beyond, through three integrated divisions: B&S Advisory, B&S Commerce and B&S Luxury.',
  foundingDate: '2017',
  email: 'info@bizandstyledna.com',
  phone: '+1 786 870 7262',
  phoneHref: 'tel:+17868707262',
  calendly: 'https://calendly.com/dario-bizandstyledna/30min',
  address: {
    streetAddress: '1000 5th Street, Suite 200',
    addressLocality: 'Miami Beach',
    addressRegion: 'FL',
    postalCode: '33139',
    addressCountry: 'US',
    building: 'Thyssen Building',
    mapsUrl: 'https://www.google.com/maps/place/1000+5th+St,+Miami+Beach,+FL+33139',
  },
  founder: {
    name: 'Dario Picardi',
    role: 'Founder / President',
    slug: 'dario-picardi',
  },
  divisions: [
    { slug: 'advisory', name: 'B&S Advisory', role: 'Strategy & Growth' },
    { slug: 'commerce', name: 'B&S Commerce', role: 'Trade & Distribution' },
    { slug: 'luxury', name: 'B&S Luxury', role: 'Real Estate & High-Value Ecosystems' },
  ],
  luxurySite: 'https://bns-luxury.com',
  /** Verified social profiles only. Add when Dario confirms the URLs. */
  sameAs: [] as string[],
  areaServed: ['United States', 'Latin America', 'Caribbean', 'Europe'],
  locales: {
    en: { label: 'English', short: 'EN', hreflang: 'en' },
    it: { label: 'Italiano', short: 'IT', hreflang: 'it' },
    es: { label: 'Español', short: 'ES', hreflang: 'es' },
    pt: { label: 'Português', short: 'PT', hreflang: 'pt' },
  },
} as const;

export type Locale = keyof typeof site.locales;
export const defaultLocale: Locale = 'en';
