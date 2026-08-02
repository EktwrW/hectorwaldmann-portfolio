import { en } from "./dict.en";
import { es } from "./dict.es";
import { pt } from "./dict.pt";
import type { Dict } from "./dict.en";

export const locales = ["en", "es", "pt"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** BCP-47 tags used in <html lang> and hreflang. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  es: "es",
  pt: "pt-PT",
};

export const localeName: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português",
};

const dictionaries: Record<Locale, Dict> = { en, es, pt };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale] ?? en;
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * English lives at the root (`/`, `/services`) so the URLs already indexed by
 * Google keep working. The other locales are prefixed.
 */
export function localePath(locale: Locale, path = ""): string {
  const clean = path.replace(/^\/+/, "");
  if (locale === defaultLocale) return "/" + clean;
  return "/" + locale + (clean ? "/" + clean : "");
}

export const SITE_URL = "https://hectorwaldmann.site";

/** `alternates` block shared by every page's metadata. */
export function alternatesFor(locale: Locale, path = "") {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[htmlLang[l]] = SITE_URL + localePath(l, path);
  languages["x-default"] = SITE_URL + localePath(defaultLocale, path);
  return {
    canonical: SITE_URL + localePath(locale, path),
    languages,
  };
}
