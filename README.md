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

- Seven sections: Hero, About, Independent Projects (Apps 369 / Foodly), Professional Work, Skills, Contact, Footer.
- Light/dark theme toggle with `localStorage` persistence and a pre-paint anti-flash script.
- Responsive top navigation — inline on tablet/desktop, hamburger menu on mobile.
- Auto-scrolling marquee of real Foodly App Store screenshots (pauses on hover, respects `prefers-reduced-motion`).
- Working contact form wired to Formspree.

## Project structure

```
app/
  layout.tsx        Fonts, theme anti-flash, SEO metadata, JSON-LD, analytics
  page.tsx          Assembles all sections
  globals.css       Theme color variables, marquee + logo-swap styles
  icon.png          Favicon
  apple-icon.png    Apple touch icon
  robots.ts         /robots.txt
  sitemap.ts        /sitemap.xml
components/
  Header.tsx        Nav + logo + theme toggle (responsive / hamburger)
  Hero.tsx
  About.tsx
  IndependentProjects.tsx   Apps 369 / Foodly + screenshot carousel
  ProfessionalWork.tsx      Keel Mind, and other contributions
  Skills.tsx
  Contact.tsx       Formspree contact form + social links
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
