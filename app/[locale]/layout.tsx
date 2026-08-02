import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { notFound } from "next/navigation";
import "../globals.css";
import { locales, isLocale, htmlLang, getDict, SITE_URL, type Locale } from "@/lib/i18n";
import { personGraph } from "@/lib/jsonld";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hector Waldman — Senior Flutter Architect & Full-Stack Engineer",
    template: "%s · Hector Waldman",
  },
  keywords: [
    "Hector Waldman",
    "Flutter architect",
    "Flutter developer",
    "senior Flutter engineer",
    "full-stack engineer",
    "mobile app developer",
    "cross-platform apps",
    "Dart",
    "Laravel",
    "PostgreSQL",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "iOS developer",
    "Android developer",
    "Apps 369",
    "Foodly",
    "Flutter design system",
    "BLoC",
    "Clean Architecture",
    "voice AI engineer",
    "AI integration engineer",
    "AWS Bedrock",
    "GCP Cloud Run",
    "hire a Flutter developer",
    "freelance Flutter developer",
    "freelance mobile app developer",
    "contract Flutter developer",
    "Flutter consultant",
    "app development services",
    "MVP app development",
    "take over existing app",
    "legacy app maintenance",
    "mobile app rescue",
    "landing page developer",
    "desarrollador Flutter freelance",
    "programador de apps",
    "desenvolvedor Flutter freelancer",
    "remote software engineer",
    "software engineer Europe",
    "software engineer LATAM",
  ],
  authors: [{ name: "Hector Waldman", url: SITE_URL }],
  creator: "Hector Waldman",
  publisher: "Hector Waldman",
  applicationName: "Hector Waldman — Portfolio",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

// Runs before paint to avoid a flash of the wrong theme.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: { locale: string } }>) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const t = getDict(locale);

  return (
    <html
      lang={htmlLang[locale]}
      data-theme="dark"
      className={`${spaceGrotesk.variable} ${manrope.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personGraph(locale)) }}
        />
      </head>
      <body>
        <div className="bg-blobs" aria-hidden="true" />
        <div className="page">
          <SiteHeader t={t} locale={locale} />
          <main id="main">{children}</main>
          <SiteFooter locale={locale} />
        </div>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
