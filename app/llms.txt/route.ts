import { SITE_URL } from "@/lib/i18n";
import { en } from "@/lib/dict.en";

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

// The same answers as the "Quick answers" section on the home page, so the
// two can never drift apart.
const QA = ([1, 2, 3, 4, 5, 6] as const)
  .map((n) => `### ${en[`hq.q${n}`]}\n\n${en[`hq.a${n}`]}`)
  .join("\n\n");

const BODY = `# Hector Waldman

Also written Hector Waldmann or Héctor Waldman. Independent studio: Apps 369.

> Senior Flutter architect and full-stack engineer based in Portugal. Builds
> cross-platform apps for iOS, Android and Web from a single codebase, and takes
> over apps that stalled. Fixed scope and fixed price, agreed in writing before
> work starts. Works in English, Spanish and Portuguese.

Available now for full-time, contract and freelance work, remote from Portugal
with overlap into Europe, the United States and Latin America. Six years
shipping production apps to the App Store, Google Play and the web.

## Work

- Foodly (own product, 2024 to now): a platform for local food businesses —
  QR menus from a photo, ordering at the table with a split bill, bookings,
  catering quotes, promotions and a web panel for the business. Flutter for
  iOS, Android and Web, Laravel and PostgreSQL on Google Cloud Run, Stripe.
  Version 2.3.0, October 2026.
  [App Store](https://apps.apple.com/us/app/foodly-solutions-qr-menu/id6761689908) ·
  [Google Play](https://play.google.com/store/apps/details?id=com.foodlysolutions.app) ·
  [Web](https://foodly.solutions/)
- WenekaTón (client, September–October 2026): four-language booking site for a
  Pemón-community tour operator at Angel Falls, Venezuela. Astro, TypeScript and
  Tailwind on Cloudflare Workers; an AI assistant (Claude API) that answers only
  from the site's catalogue; one inbox for web chat and email with translation
  both ways. [wenekaton.com](https://wenekaton.com/)
- Votiva (own product, September 2026 to now): an AI prayer companion for iOS and
  Android in Spanish, English and Portuguese — guided prayers with Bible verses
  and narrated audio. Flutter, FastAPI on Cloud Run, Claude, RevenueCat. Coming
  soon to the App Store and Google Play. [getvotiva.com](https://getvotiva.com/)
- GoTribe Fitness (Band of Coders, 2021–2022): built from scratch in Flutter
  and BLoC over GraphQL, with multi-device Bluetooth LE heart-rate streaming.
  [App Store](https://apps.apple.com/us/app/gotribe-fitness/id6747635444) ·
  [Google Play](https://play.google.com/store/apps/details?id=com.gotribe.app)
- Keel Mind (January 2022 to July 2026): Flutter architect and senior front-end
  on a multi-tenant mental-health platform — the company-wide Flutter design
  system, 1.5 GB uploads on Flutter Web, and GuardianAI, a real-time voice agent
  shipped as an embeddable SDK. Through Band of Coders until August 2024, then a
  direct contract. Those platforms are no longer online.
- Essentiel Outsourcing (now, part-time): IT support specialist in Spain —
  systems, CRM and call-centre telephony configuration.

## Common questions

${QA}

## Pages

- [Home](${SITE_URL}/): the work, one project at a time, then the timeline, the stack and how to get in touch.
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
Next.js, Astro, TypeScript, Node.js, Laravel, PHP, PostgreSQL, Firebase, Google Cloud,
AWS, CI/CD, App Store and Google Play releases, and AI integration including
voice agents and natural language processing.

## Contact

- Email: hector@hectorwaldmann.site
- [LinkedIn](https://www.linkedin.com/in/ektwr/)
- [GitHub](https://github.com/EktwrW)
`;

export function GET() {
  return new Response(BODY, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
