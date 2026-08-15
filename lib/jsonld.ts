import { SITE_URL, localePath, htmlLang, type Locale } from "./i18n";
import { getDict } from "./i18n";

/**
 * Site-wide structured data: who this person is, what he offers and where to
 * find him. Emitted once per page from the layout.
 */
export function personGraph(locale: Locale) {
  const t = getDict(locale);
  const url = SITE_URL + localePath(locale);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Hector Waldman",
        url: SITE_URL,
        image: `${SITE_URL}/og-image.png`,
        jobTitle: "Senior Flutter Architect & Full-Stack Engineer",
        email: "mailto:hector@hectorwaldmann.site",
        description: t["meta.home.desc"],
        knowsAbout: [
          "Flutter",
          "Dart",
          "Mobile app architecture",
          "Design systems",
          "BLoC",
          "Clean Architecture",
          "Full-stack engineering",
          "Laravel",
          "PostgreSQL",
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Python",
          "Cloud",
          "AI integration",
          "Voice AI",
          "Natural language processing",
        ],
        knowsLanguage: [
          { "@type": "Language", name: "Spanish" },
          { "@type": "Language", name: "English" },
          { "@type": "Language", name: "Portuguese" },
        ],
        brand: { "@type": "Brand", name: "Apps 369" },
        hasOccupation: {
          "@type": "Occupation",
          name: "Senior Flutter Architect & Full-Stack Engineer",
          occupationalCategory: "15-1252.00",
          skills:
            "Flutter, Dart, mobile app architecture, Laravel, PostgreSQL, React, TypeScript, Node.js, cloud infrastructure, AI integration",
        },
        makesOffer: offers(locale),
        sameAs: [
          "https://www.linkedin.com/in/ektwr/",
          "https://github.com/EktwrW",
          "https://theorg.com/org/get-a-head/org-chart/hector-waldman",
        ],
        /**
         * Google removed the country-targeting setting from Search Console in
         * 2022, so the only geographic signals left are hreflang and this.
         * Country level on purpose: a freelancer's street address does not
         * belong in public structured data.
         */
        homeLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress", addressCountry: "PT" },
        },
        workLocation: {
          "@type": "Place",
          name: "Remote, from Portugal",
          address: { "@type": "PostalAddress", addressCountry: "PT" },
        },
        areaServed: [
          { "@type": "Country", name: "Portugal" },
          { "@type": "Country", name: "Spain" },
          { "@type": "Place", name: "Europe" },
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Canada" },
          { "@type": "Place", name: "Latin America" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url,
        name: "Hector Waldman",
        description: t["meta.home.desc"],
        publisher: { "@id": `${SITE_URL}/#person` },
        inLanguage: htmlLang[locale],
      },
    ],
  };
}

/**
 * The four productised engagements, with the prices published on /services.
 * `priceSpecification` uses minPrice because every price is a floor ("from X").
 */
export function offers(locale: Locale) {
  const t = getDict(locale);
  const url = SITE_URL + localePath(locale, "services");

  const build = (
    name: string,
    description: string,
    serviceType: string,
    minPrice: number,
    unit?: string
  ) => ({
    "@type": "Offer",
    url,
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
      minPrice,
      ...(unit ? { unitText: unit } : {}),
    },
    availability: "https://schema.org/InStock",
    itemOffered: {
      "@type": "Service",
      name,
      serviceType,
      description,
      provider: { "@id": `${SITE_URL}/#person` },
      areaServed: [
        { "@type": "Country", name: "Portugal" },
        { "@type": "Place", name: "Europe" },
        { "@type": "Country", name: "United States" },
        { "@type": "Place", name: "Latin America" },
      ],
    },
  });

  return [
    build(t["s.pc.0h"], t["s.pc.0a"], "Website and landing page development", 700),
    build(t["s.pc.1h"], t["s.pc.1a"], "Mobile app audit", 1200),
    build(t["s.pc.2h"], t["s.pc.2a"], "Cross-platform app development", 8000),
    build(t["s.pc.3h"], t["s.pc.3a"], "App maintenance and support", 600, "MONTH"),
  ];
}

/** Extra structured data that only makes sense on /services. */
export function servicesGraph(locale: Locale) {
  const t = getDict(locale);
  const url = SITE_URL + localePath(locale, "services");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: t["meta.svc.title"],
        description: t["meta.svc.desc"],
        inLanguage: htmlLang[locale],
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#person` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: [1, 2, 3, 4, 5, 6, 7].map((i) => ({
          "@type": "Question",
          name: t[`s.faq.q${i}` as keyof typeof t],
          acceptedAnswer: {
            "@type": "Answer",
            text: t[`s.faq.a${i}` as keyof typeof t],
          },
        })),
      },
    ],
  };
}
