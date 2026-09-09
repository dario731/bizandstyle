import { site } from '@data/site';

const ORG = `${site.url}/#organization`;

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${site.url}${it.path === '/' ? '' : it.path}`,
  })),
});

export const faqLd = (faqs: { q: string; a: string }[]) =>
  faqs.length
    ? {
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }
    : null;

export const serviceLd = (o: { name: string; description: string; path: string; division?: string; serviceType?: string }) => ({
  '@type': 'Service',
  '@id': `${site.url}${o.path}#service`,
  name: o.name,
  description: o.description,
  url: `${site.url}${o.path}`,
  serviceType: o.serviceType ?? o.name,
  provider: { '@id': ORG },
  areaServed: site.areaServed,
  ...(o.division ? { category: o.division } : {}),
});

export const webPageLd = (o: { name: string; description: string; path: string; type?: string }) => ({
  '@type': o.type ?? 'WebPage',
  '@id': `${site.url}${o.path === '/' ? '' : o.path}#webpage`,
  url: `${site.url}${o.path === '/' ? '' : o.path}`,
  name: o.name,
  description: o.description,
  isPartOf: { '@id': `${site.url}/#website` },
  about: { '@id': ORG },
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
