import Image from "next/image";
import FoodlyCarousel from "./FoodlyCarousel";
import BrandLogo from "./BrandLogo";

const FOODLY_TAGS = [
  "Flutter",
  "Dart",
  "Laravel",
  "PostgreSQL",
  "GCP Cloud Run",
  "Stripe",
  "Firebase",
  "Shorebird",
];

const HIGHLIGHTS = [
  {
    metric: "60–80% fewer API calls",
    body: "Geospatial business discovery with Haversine plus SQL bounding-box pre-filtering and a composite coordinate index, behind a Places/Geocoding proxy cached in Postgres.",
  },
  {
    metric: "Menus, digitized",
    body: "A service that turns photographed restaurant menus into structured, editable digital menus — published as public web menus on Firebase Hosting.",
  },
  {
    metric: "Payments across regions",
    body: "A multi-payer order-payment platform on Stripe, with MercadoPago and Binance Pay / USDT in development for LATAM.",
  },
];

const STORE_LINKS = [
  {
    label: "App Store",
    href: "https://api.foodly.solutions/dl/ios",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]" aria-hidden="true">
        <path d="M16.37 1.43c.03 1.13-.4 2.2-1.22 3.02-.85.9-2.05 1.44-3.1 1.35-.12-1.08.42-2.22 1.2-3 .84-.87 2.14-1.5 3.12-1.37Zm3.55 15.69c-.5 1.16-.75 1.68-1.4 2.7-.9 1.44-2.17 3.23-3.75 3.24-1.4.02-1.76-.91-3.67-.9-1.9.01-2.3.92-3.7.9-1.58-.01-2.78-1.62-3.68-3.06-2.53-4.02-2.8-8.73-1.24-11.23 1.11-1.78 2.87-2.83 4.53-2.83 1.7 0 2.76.93 4.16.93 1.36 0 2.19-.93 4.15-.93 1.48 0 3.04.8 4.15 2.19-3.64 2-3.06 7.2.45 8.99Z" />
      </svg>
    ),
  },
  {
    label: "Google Play",
    href: "https://api.foodly.solutions/dl/android",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[17px] w-[17px]" aria-hidden="true">
        <path d="M3.6 2.1a1 1 0 0 0-.6.92v17.96a1 1 0 0 0 .6.92l9.5-9.9-9.5-9.9Zm11 8.44 3.9 2.28c.7.4.7 1.36 0 1.77l-3.9 2.28-2.62-2.73 2.62-2.73v-.87Z" />
        <path d="m14.6 10.54-2.62 2.73-9.05 9.43a1 1 0 0 0 1.07-.06l10.6-6.2-2.62-2.73 2.62-2.73Z" opacity=".75" />
      </svg>
    ),
  },
];

export default function FlagshipProduct() {
  return (
    <section id="foodly" className="border-y border-border bg-bg-alt">
      <div className="mx-auto max-w-content px-8 py-[100px]">
        <div className="mb-11 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">Flagship Product</p>
            <div className="flex items-center gap-3">
              <BrandLogo className="h-9 w-auto" decorative />
              <h2 className="font-display text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.1] tracking-tight">
                Foodly
              </h2>
            </div>
            <p className="mt-3 text-[14.5px] font-semibold text-text-muted">
              Founder &amp; Lead Engineer &middot; Apps 369 &middot; 2024 &ndash; present &middot;{" "}
              <span className="text-accent">Live in beta</span>
            </p>
          </div>
          <p className="max-w-[38ch] text-[15.5px] leading-relaxed text-text-muted">
            The product I build and run independently under my own <strong className="text-text">Apps 369</strong>{" "}
            mark — evenings and weekends, sole full-stack owner since 2025.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-border md:grid-cols-2">
          <div className="flex flex-col justify-center bg-surface p-10">
            <h3 className="mb-3 font-display text-[24px] font-bold">A marketplace I own end to end</h3>
            <p className="mb-6 text-[15.5px] leading-relaxed text-text-muted">
              A cross-platform food marketplace — a Flutter app for iOS, Android and Web on a backend I built and
              run myself: Laravel and PostgreSQL on GCP Cloud Run. In 2025 I took over a stack that wasn&rsquo;t
              production-ready and hardened it end to end — infrastructure, security, third-party APIs and the
              release pipeline.
            </p>
            <div className="mb-7 flex flex-wrap gap-2">
              {FOODLY_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent-soft px-3 py-1.5 text-[13px] font-medium text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mb-5 flex flex-wrap gap-2.5">
              {STORE_LINKS.map((store) => (
                <a
                  key={store.href}
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-alt px-4 py-2.5 text-[14px] font-semibold text-text transition-colors hover:border-accent hover:text-accent"
                >
                  {store.icon}
                  {store.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-x-5 gap-y-1.5">
              <a
                href="https://foodly.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-[14.5px] font-semibold text-accent hover:text-accent-hover"
              >
                foodly.solutions <span aria-hidden="true">&rarr;</span>
              </a>
              <a
                href="https://menu.foodly.solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-1.5 text-[14.5px] font-semibold text-accent hover:text-accent-hover"
              >
                menu.foodly.solutions <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[280px] items-center justify-center bg-gradient-to-br from-[#7a1266] to-[#3f1050] p-10">
            <Image
              src="/foodly-iso-white.png"
              alt="Foodly"
              width={1101}
              height={695}
              className="h-auto w-[190px] max-w-[55%]"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div key={item.metric} className="rounded-2xl border border-border bg-surface p-7">
              <p className="mb-2 font-display text-[17px] font-bold tracking-tight text-accent">{item.metric}</p>
              <p className="text-[14.5px] leading-relaxed text-text-muted">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-6 max-w-[92ch] text-[13.5px] leading-relaxed text-text-muted">
          <strong className="font-semibold text-text">Also shipped:</strong> dual-token Sanctum auth with rotation
          and biometric login &middot; SMS two-factor with autofill and push notifications &middot; reservations, a
          Catering &amp; Chefs module, an AI promo-content generator with per-business quotas, multilingual NLP
          smart-search and UGC moderation &middot; GDPR and Ley 25.326-compliant account deletion &middot; a release
          pipeline with OTA hot-patching (Shorebird), GitHub Actions, TestFlight, Google Play and EU DSA compliance.
        </p>

        <div className="mt-14">
          <p className="mb-5 text-center text-[13px] font-semibold uppercase tracking-[0.12em] text-text-muted">
            Inside the Foodly app
          </p>
          <FoodlyCarousel />
        </div>
      </div>
    </section>
  );
}
