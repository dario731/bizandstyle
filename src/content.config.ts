import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Content model — see docs/02-ARCHITECTURE.md §3.
 * Insights are MDX files: src/content/insights/<locale>/<slug>.mdx
 */
const locale = z.enum(['en', 'it', 'es', 'pt']).default('en');

const seo = z
  .object({
    title: z.string().optional(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonical: z.string().url().optional(),
    noindex: z.boolean().default(false),
  })
  .default({});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/insights' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string().max(240),
      locale,
      hero: z
        .object({
          image: image().optional(),
          video: z.string().optional(),
          alt: z.string(),
          credit: z.string().optional(),
          manifestId: z.string().optional(),
        })
        .optional(),
      author: reference('authors'),
      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      category: reference('categories'),
      tags: z.array(z.string()).default([]),
      sources: z.array(z.object({ label: z.string(), url: z.string().url().optional() })).default([]),
      faqs: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
      related: z.array(reference('insights')).default([]),
      relatedServices: z.array(z.string()).default([]), // service paths, e.g. /internationalization
      cta: z.object({ label: z.string(), href: z.string(), name: z.string() }).optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
      seo,
    }),
});

const categories = defineCollection({
  loader: file('./src/content/categories.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    clusterOf: z.string().optional(), // the service landing page this category strengthens
    locale,
  }),
});

const authors = defineCollection({
  loader: file('./src/content/authors.json'),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    image: z.string().optional(),
    sameAs: z.array(z.string().url()).default([]),
  }),
});

export const collections = { insights, categories, authors };
