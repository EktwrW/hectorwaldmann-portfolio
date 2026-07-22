import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Hector Waldman — Senior Flutter Architect & Full-Stack Engineer",
  description:
    "Senior Flutter architect and full-stack engineer. Independent maker of Apps 369. I design and ship production-grade cross-platform apps end to end.",
  metadataBase: new URL("https://hectorwaldmann.site"),
  openGraph: {
    title: "Hector Waldman — Senior Flutter Architect & Full-Stack Engineer",
    description:
      "I design and ship production-grade cross-platform apps end to end — from Flutter architecture to backend, data, and cloud.",
    url: "https://hectorwaldmann.site",
    siteName: "Hector Waldman",
    type: "website",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-body antialiased">
        <div className="bg-blobs" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
