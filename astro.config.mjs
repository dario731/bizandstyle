// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

/**
 * BIZ & STYLE — corporate platform.
 * Static by default; only /api/lead is server-rendered (prerender = false).
 * Locales: EN (unprefixed) · IT · ES · PT. Unfinished locales are simply not built —
 * nothing machine-translated is ever published by default.
 */
export default defineConfig({
  site: 'https://bizandstyledna.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  adapter: netlify({ devFeatures: { environmentVariables: false, images: false, edgeFunctions: false } }),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it', 'es', 'pt'],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', it: 'it-IT', es: 'es', pt: 'pt-BR' },
      },
      filter: (page) => !page.includes('/api/') && !page.includes('/request-credentials/thanks'),
    }),
  ],
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
  vite: { build: { cssMinify: 'lightningcss' } },
});
