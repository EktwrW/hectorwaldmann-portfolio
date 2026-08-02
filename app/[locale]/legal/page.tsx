import type { Metadata } from "next";
import { alternatesFor, htmlLang, isLocale, SITE_URL, localePath, type Locale } from "@/lib/i18n";
import { getLegal } from "@/lib/legal";
import LegalSections from "@/components/site/LegalSections";

const META: Record<Locale, { title: string; desc: string }> = {
  en: {
    title: "Privacy, legal notice and terms",
    desc: "How this site handles your data, who is behind it, and what the published prices do and do not commit either of us to.",
  },
  es: {
    title: "Privacidad, aviso legal y términos",
    desc: "Cómo trata esta web tus datos, quién está detrás y a qué comprometen — y a qué no — los precios publicados.",
  },
  pt: {
    title: "Privacidade, aviso legal e termos",
    desc: "Como este site trata os seus dados, quem está por trás e a que obrigam — e a que não obrigam — os preços publicados.",
  },
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  const locale = (isLocale(params.locale) ? params.locale : "en") as Locale;
  const meta = META[locale];
  const url = SITE_URL + localePath(locale, "legal");

  return {
    title: meta.title,
    description: meta.desc,
    alternates: alternatesFor(locale, "legal"),
    openGraph: {
      type: "website",
      url,
      siteName: "Hector Waldman",
      title: meta.title,
      description: meta.desc,
      locale: htmlLang[locale].replace("-", "_"),
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Hector Waldman" }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.desc,
      images: ["/og-image.png"],
    },
  };
}

export default function LegalPage({ params }: { params: { locale: string } }) {
  const locale = params.locale as Locale;
  return <LegalSections doc={getLegal(locale)} />;
}
