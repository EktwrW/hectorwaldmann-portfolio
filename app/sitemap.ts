import type { MetadataRoute } from "next";
import { locales, localePath, htmlLang, defaultLocale, SITE_URL } from "@/lib/i18n";

const PAGES: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "services", priority: 0.9 },
  // Indexable, because a real legal page is a trust signal, but weighted low
  // so it never competes with the two pages that matter.
  { path: "legal", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PAGES.flatMap(({ path, priority }) => {
    const languages: Record<string, string> = {};
    for (const l of locales) languages[htmlLang[l]] = SITE_URL + localePath(l, path);
    languages["x-default"] = SITE_URL + localePath(defaultLocale, path);

    return locales.map((locale) => ({
      url: SITE_URL + localePath(locale, path),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: locale === defaultLocale ? priority : priority - 0.1,
      alternates: { languages },
    }));
  });
}
