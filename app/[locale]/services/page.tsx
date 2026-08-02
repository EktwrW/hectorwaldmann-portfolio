import type { Metadata } from "next";
import { getDict, alternatesFor, htmlLang, isLocale, SITE_URL, localePath, type Locale } from "@/lib/i18n";
import { servicesGraph } from "@/lib/jsonld";
import ServicesSections from "@/components/site/ServicesSections";

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : "en") as Locale;
  const t = getDict(locale);
  const url = SITE_URL + localePath(locale, "services");

  return {
    title: t["meta.svc.title"],
    description: t["meta.svc.desc"],
    alternates: alternatesFor(locale, "services"),
    openGraph: {
      type: "website",
      url,
      siteName: "Hector Waldman",
      title: t["meta.svc.title"],
      description: t["meta.svc.desc"],
      locale: htmlLang[locale].replace("-", "_"),
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hector Waldman" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t["meta.svc.title"],
      description: t["meta.svc.desc"],
      images: ["/og-image.png"],
    },
  };
}

export default function ServicesPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  const t = getDict(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesGraph(locale)) }}
      />
      <ServicesSections t={t} locale={locale} />
    </>
  );
}
