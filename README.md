# Hector Waldman — Portfolio

Personal portfolio of **Hector Waldman**, Senior Flutter Architect & Full-Stack Engineer.

🔗 **Live:** [hectorwaldmann.site](https://hectorwaldmann.site)

A fast, accessible, single-page portfolio with a light/dark theme, built with the Next.js App Router and deployed on Vercel.

## Tech stack

- **Framework:** Next.js 14 (App Router) · React 18 · TypeScript
- **Styling:** Tailwind CSS · CSS custom properties for light/dark theming
- **Fonts:** Space Grotesk (display) + Manrope (body) via `next/font`
- **Forms:** Formspree (contact form)
- **SEO:** metadata + Open Graph/Twitter cards · `robots.ts` · `sitemap.ts` · JSON-LD (Person/WebSite)
- **Analytics:** Vercel Web Analytics + Speed Insights
- **Hosting:** Vercel · domain DNS on Hostinger

## Features

- Eight sections: Hero, Proof bar, About, Flagship Product (Foodly), Experience, Skills, How I work, Contact — plus the footer.
- A hard-metrics proof bar directly under the hero (years shipped, 1.5 GB upload pipeline, 60–80% API-call reduction, org-wide design system).
- Experience combines a **featured case study** (GuardianAI real-time voice AI) with a **career timeline**, so depth and chronology live in one section instead of two.
- Progressive disclosure via native `<details>` — the case study reads compact, with the deep technical breakdown one click away, no extra JavaScript.
- Light/dark theme toggle with `localStorage` persistence and a pre-paint anti-flash script.
- Responsive top navigation — inline on tablet/desktop, hamburger menu on mobile.
- Auto-scrolling marquee of real Foodly App Store screenshots (pauses on hover, respects `prefers-reduced-motion`).
- Working contact form wired to Formspree, plus a plain-text email fallback.

## Project structure

```
app/
  layout.tsx        Fonts, theme anti-flash, SEO metadata, JSON-LD, analytics
  page.tsx          Assembles all sections
  globals.css       Theme color variables, marquee, disclosure + logo-swap styles
  icon.png          Favicon
  apple-icon.png    Apple touch icon
  robots.ts         /robots.txt
  sitemap.ts        /sitemap.xml
components/
  Header.tsx        Nav + logo + theme toggle (responsive / hamburger)
  Hero.tsx          Tagline, availability + languages row
  ProofBar.tsx      Four hard metrics under the hero
  About.tsx
  FlagshipProduct.tsx       Foodly — store links, metrics + screenshot carousel
  Experience.tsx            Featured case study (GuardianAI) + career timeline
  Skills.tsx        Eight skill groups
  AiAugmented.tsx   "How I work" band — AI-augmented, not AI-dependent
  Contact.tsx       Formspree contact form + email + social links
  Footer.tsx
  ThemeToggle.tsx   Light/dark switch (persisted)
  BrandLogo.tsx     Theme-aware Apps 369 logo
  FoodlyCarousel.tsx
  SocialLinks.tsx   LinkedIn + GitHub
public/
  apps369-logo.png / apps369-logo-dark.png   Brand logo (light / dark text)
  foodly-iso-white.png
  foodly/slide-01..08.webp                   App Store screenshots
  og-image.png                               Social share image
  Hector_Waldman_CV.pdf
```

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Deployment

Hosted on **Vercel** with automatic deployments: every push to `main` triggers a new production build and deploy. The custom domain `hectorwaldmann.site` points to Vercel via an `A` record (apex) on Hostinger DNS, with `www` redirecting to the apex.

---

© Hector Waldman · [hectorwaldmann.site](https://hectorwaldmann.site)
