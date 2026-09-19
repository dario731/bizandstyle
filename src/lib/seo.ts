import { site } from '@data/site';

const ORG = `${site.url}/#organization`;

export const absoluteUrl = (path: string) => `${site.url}${path === '/' ? '' : path}`;

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: absoluteUrl(it.path),
  })),
});

export const faqLd = (faqs: { q: string; a: string }[], id?: string) =>
  faqs.length
    ? {
        '@type': 'FAQPage',
        ...(id ? { '@id': id } : {}),
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }
    : null;

export const itemListLd = (id: string, items: { name: string; url?: string }[]) => ({
  '@type': 'ItemList',
  '@id': id,
  numberOfItems: items.length,
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    ...(it.url ? { url: it.url } : {}),
  })),
});

export const serviceLd = (o: {
  name: string;
  description: string;
  path: string;
  division?: string;
  serviceType?: string;
  areaServed?: readonly string[];
  url?: string;
  offers?: { url: string; availability?: string };
  knowsAbout?: readonly string[];
  audience?: string;
}) => ({
  '@type': 'Service',
  '@id': `${absoluteUrl(o.path)}#service`,
  name: o.name,
  description: o.description,
  url: o.url ?? absoluteUrl(o.path),
  serviceType: o.serviceType ?? o.name,
  provider: { '@id': ORG },
  telephone: site.phoneSchema,
  areaServed: o.areaServed ?? site.areaServed,
  ...(o.division ? { category: o.division } : {}),
  ...(o.offers
    ? {
        offers: {
          '@type': 'Offer',
          url: o.offers.url,
          ...(o.offers.availability ? { availability: o.offers.availability } : {}),
        },
      }
    : {}),
  ...(o.knowsAbout ? { knowsAbout: [...o.knowsAbout] } : {}),
  ...(o.audience ? { audience: { '@type': 'Audience', audienceType: o.audience } } : {}),
});

export const webPageLd = (o: { name: string; description: string; path: string; type?: string | readonly string[]; about?: unknown }) => ({
  '@type': o.type ?? 'WebPage',
  '@id': `${absoluteUrl(o.path)}#webpage`,
  url: absoluteUrl(o.path),
  name: o.name,
  description: o.description,
  isPartOf: { '@id': `${site.url}/#website` },
  about: o.about ?? { '@id': ORG },
  inLanguage: 'en',
});

export const personLd = () => ({
  '@type': 'Person',
  '@id': `${site.url}/about/dario-picardi#person`,
  name: site.founder.name,
  jobTitle: site.founder.role,
  worksFor: { '@id': ORG },
  url: `${site.url}/about/dario-picardi`,
  nationality: 'Italian',
  knowsAbout: ['Business development', 'Internationalization', 'U.S. market entry', 'Consumer goods', 'Distribution', 'Digital growth', 'Real estate', 'Luxury'],
  ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
});

export const articleLd = (o: {
  title: string;
  description: string;
  path: string;
  published: Date;
  modified?: Date;
  authorName: string;
  authorPath?: string;
  image?: string;
  section?: string;
  tags?: string[];
}) => ({
  '@type': 'Article',
  '@id': `${site.url}${o.path}#article`,
  headline: o.title,
  description: o.description,
  url: `${site.url}${o.path}`,
  mainEntityOfPage: `${site.url}${o.path}`,
  datePublished: o.published.toISOString(),
  dateModified: (o.modified ?? o.published).toISOString(),
  author: { '@type': o.authorName === site.name ? 'Organization' : 'Person', name: o.authorName, ...(o.authorPath ? { url: `${site.url}${o.authorPath}` } : {}) },
  publisher: { '@id': ORG },
  ...(o.image ? { image: o.image } : {}),
  ...(o.section ? { articleSection: o.section } : {}),
  ...(o.tags?.length ? { keywords: o.tags.join(', ') } : {}),
  inLanguage: 'en',
});

/** Removes nulls so optional graphs (e.g. faqLd with no FAQs) can be spread safely. */
export const graph = (...items: (Record<string, unknown> | null | undefined)[]) => items.filter(Boolean) as Record<string, unknown>[];
