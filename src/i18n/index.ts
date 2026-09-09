import { en, type Copy } from './en';
import { site, defaultLocale, type Locale } from '@data/site';

/**
 * Locale registry. Only locales listed in `published` are built; the others fall
 * back to English at build time and are not linked, so no machine translation
 * is ever exposed. Flip a locale to published after a native review pass.
 */
const dictionaries: Partial<Record<Locale, Copy>> = { en };
export const published: Locale[] = ['en'];

export function getCopy(locale: Locale = defaultLocale): Copy {
  return dictionaries[locale] ?? en;
}

export function localePath(path: string, locale: Locale = defaultLocale): string {
  if (locale === defaultLocale) return path;
  if (/^https?:\/\//.test(path) || path.startsWith('#')) return path;
  return `/${locale}${path === '/' ? '' : path}`;
}

/** Alternate URLs for hreflang — only published locales plus x-default. */
export function alternates(path: string): { hreflang: string; href: string }[] {
  const list: { hreflang: string; href: string }[] = published.map((l) => ({ hreflang: site.locales[l].hreflang, href: `${site.url}${localePath(path, l)}` }));
  list.push({ hreflang: 'x-default', href: `${site.url}${path}` });
  return list;
}

export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split('/')[1] as Locale;
  return seg && seg in site.locales ? seg : defaultLocale;
}
