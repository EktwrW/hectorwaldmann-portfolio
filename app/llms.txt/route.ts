import { SITE_URL } from "@/lib/i18n";

/**
 * /llms.txt — a plain-text summary of the site for language models.
 *
 * Worth being clear-eyed about what this does. Google has said publicly that
 * llms.txt is not used by AI Overviews or AI Mode, and that its crawlers do not
 * request the file. Anthropic and Perplexity are the ones reported to read it.
 * So this is a cheap bet on the assistants that do honour it, not an SEO tactic.
 *
 * The middleware matcher excludes any path containing a dot, so this route is
 * reached directly and never rewritten into the /[locale] tree.
 */
export const dynamic = "force-static";

const BODY = `# Hector Waldman

> Senior Flutter architect and full-stack engineer based in Portugal. Builds
> cross-platform apps for iOS, Android and Web from a single codebase, and takes
> over apps that stalled. Fixed scope and fixed price, agreed in writing before
> work starts. Works in English, Spanish and Portuguese.

Available now for full-time, contract and freelance work, remote from Portugal
with overlap into Europe, the United States and Latin America. Six years
shipping production apps to the App Store and Google Play.

Most recently Flutter architect at a mental-health platform, where he built the
design system every app in the company runs on and a real-time voice AI pipeline
delivered as an embeddable SDK. Built and launched Foodly, a marketplace live on
both stores, alone: Flutter clients, Laravel API, PostgreSQL, cloud
infrastructure and both store listings.

## Pages

- [Home](${SITE_URL}/): who he is, the experience timeline, the stack and how to get in touch.
- [Services and pricing](${SITE_URL}/services): the fixed-price engagements, what each one includes and what it costs.
- [Legal](${SITE_URL}/legal): terms of service and privacy policy.

## Other languages

- [Español](${SITE_URL}/es) — [servicios](${SITE_URL}/es/services)
- [Português](${SITE_URL}/pt) — [serviços](${SITE_URL}/pt/services)

## Services

- New cross-platform app in Flutter: one codebase for iOS, Android and Web, from architecture through to the store release. From EUR 8,000.
- App rescue and audit: a release stuck in review, a crash nobody can reproduce, a codebase whose author left. From EUR 1,200.
- Website and landing page development. From EUR 700.
- Ongoing maintenance and support. From EUR 600 per month.

## Stack

Flutter, Dart, BLoC, Clean Architecture, design systems, React, React Native,
Next.js, TypeScript, Node.js, Laravel, PHP, PostgreSQL, Firebase, Google Cloud,
AWS, CI/CD, App Store and Google Play releases, and AI integration including
voice agents and natural language processing.

## Contact

- Email: hector@hectorwaldmann.site
- [LinkedIn](https://www.linkedin.com/in/ektwr/)
- [GitHub](https://github.com/EktwrW)

## Optional

- [Foodly](https://foodly.solutions/): the marketplace he designed, built, launched and maintains on his own. Live on Google Play and the App Store.
`;

export function GET() {
  return new Response(BODY, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
