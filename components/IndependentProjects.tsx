import Image from "next/image";
import FoodlyCarousel from "./FoodlyCarousel";
import BrandLogo from "./BrandLogo";

const FOODLY_TAGS = ["Flutter", "Dart", "Laravel", "PostgreSQL", "REST API"];

export default function IndependentProjects() {
  return (
    <section id="apps369" className="mx-auto max-w-content px-8 py-[100px]">
      <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">Independent Projects</p>
          <div className="flex items-center gap-3">
            <BrandLogo className="h-9 w-auto" decorative />
            <h2 className="font-display text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.1] tracking-tight">
              Apps 369
            </h2>
          </div>
        </div>
        <p className="max-w-[38ch] text-[15.5px] leading-relaxed text-text-muted">
          Products I build and ship independently under my own <strong className="text-text">Apps 369</strong> mark.
        </p>
      </div>

      <div className="grid overflow-hidden rounded-2xl border border-border md:grid-cols-2">
        <div className="flex flex-col justify-center bg-surface p-10">
          <h3 className="mb-3 font-display text-[26px] font-bold">Foodly</h3>
          <p className="mb-6 text-[15.5px] leading-relaxed text-text-muted">
            A cross-platform food marketplace connecting local vendors and customers. Built end to end — Flutter
            apps for iOS &amp; Android backed by a Laravel + PostgreSQL API powering orders, payments, and real-time
            delivery tracking.
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
          <a
            href="https://foodly.solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 text-[15px] font-semibold text-accent hover:text-accent-hover"
          >
            View project <span aria-hidden="true">&rarr;</span>
          </a>
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

      <div className="mt-12">
        <p className="mb-5 text-center text-[13px] font-semibold uppercase tracking-[0.12em] text-text-muted">
          Inside the Foodly app
        </p>
        <FoodlyCarousel />
      </div>
    </section>
  );
}
