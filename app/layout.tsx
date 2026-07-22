import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

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

const SITE_URL = "https://hectorwaldmann.site";
const TITLE = "Hector Waldman — Senior Flutter Architect & Full-Stack Engineer";
const DESCRIPTION =
  "Senior Flutter architect and full-stack engineer, and independent maker of Apps 369. I design and ship production-grade cross-platform apps end to end — from Flutter architecture to backend, data, and cloud. Available for remote work across the US, Canada, Europe, and LATAM.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Hector Waldman",
  },
  description: DESCRIPTION,
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
    "TypeScript",
    "Node.js",
    "iOS developer",
    "Android developer",
    "Apps 369",
    "Foodly",
    "remote software engineer",
    "software engineer USA",
    "software engineer Canada",
    "software engineer Europe",
    "software engineer LATAM",
  ],
  authors: [{ name: "Hector Waldman", url: SITE_URL }],
  creator: "Hector Waldman",
  publisher: "Hector Waldman",
  applicationName: "Hector Waldman — Portfolio",
  category: "technology",
  alternates: {
    canonical: "/",
  },
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
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Hector Waldman",
    title: TITLE,
    description:
      "I design and ship production-grade cross-platform apps end to end — from Flutter architecture to backend, data, and cloud.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hector Waldman — Senior Flutter Architect & Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: "I design and ship production-grade cross-platform apps end to end.",
    images: ["/og-image.png"],
  },
};

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

// Structured data (JSON-LD) — helps search engines understand who this is.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Hector Waldman",
      url: SITE_URL,
      image: `${SITE_URL}/og-image.png`,
      jobTitle: "Senior Flutter Architect & Full-Stack Engineer",
      description:
        "Senior Flutter architect and full-stack engineer, and independent maker of Apps 369. Designs and ships production-grade cross-platform apps end to end.",
      knowsAbout: [
        "Flutter",
        "Dart",
        "Mobile app architecture",
        "Full-stack engineering",
        "Laravel",
        "PostgreSQL",
        "React",
        "TypeScript",
        "Node.js",
        "Cloud",
      ],
      brand: {
        "@type": "Brand",
        name: "Apps 369",
      },
      sameAs: [
        "https://www.linkedin.com/in/ektwr/",
        "https://github.com/EktwrW",
      ],
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Place", name: "Europe" },
        { "@type": "Place", name: "Latin America" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Hector Waldman",
      description: DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <div className="bg-blobs" aria-hidden="true" />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
