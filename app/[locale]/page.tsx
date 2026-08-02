import type { Metadata } from "next";
import { getDict, alternatesFor, htmlLang, isLocale, SITE_URL, localePath, type Locale } from "@/lib/i18n";
import HomeSections from "@/components/site/HomeSections";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : "en") as Locale;
  const t = getDict(locale);
  const url = SITE_URL + localePath(locale);

  return {
    title: t["meta.home.title"],
    description: t["meta.home.desc"],
    alternates: alternatesFor(locale),
    openGraph: {
      type: "website",
      url,
      siteName: "Hector Waldman",
      title: t["meta.home.title"],
      description: t["meta.home.desc"],
      locale: htmlLang[locale].replace("-", "_"),
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hector Waldman" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t["meta.home.title"],
      description: t["meta.home.desc"],
      images: ["/og-image.png"],
    },
  };
}

export default function HomePage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = getDict(locale);
  return <HomeSections t={t} locale={locale} />;
}
