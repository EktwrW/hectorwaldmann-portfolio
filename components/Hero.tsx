import Image from "next/image";

const AVAILABILITY = [
  "Europe — overlapping US & LATAM hours",
  "Spanish (native) · English (C1) · Portuguese",
];

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-content px-8 pb-[90px] pt-[120px]">
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-[13px] text-text-muted">
          <Image src="/apps369-iso.png" alt="" width={256} height={256} className="h-[18px] w-[18px]" aria-hidden="true" />
          Independent maker &middot; Apps 369
        </div>

        <h1 className="mb-6 max-w-[16ch] font-display text-[clamp(42px,6.2vw,78px)] font-bold leading-[1.02] tracking-tighter text-balance">
          Hector Waldman
          <span className="mt-3.5 block font-display text-[clamp(20px,2.2vw,26px)] font-semibold leading-tight tracking-tight text-accent">
            Senior Flutter Architect &amp; Full-Stack Engineer
          </span>
        </h1>

        <p className="mb-9 max-w-[52ch] text-[17px] leading-relaxed text-text-muted">
          <span className="mb-2.5 block font-display text-[clamp(19px,2vw,23px)] font-bold tracking-tight text-text">
            One codebase. Every surface.
          </span>
          Six years shipping production cross-platform apps — from Flutter architecture and clean state
          management to backend, data, cloud, and the AI running inside them. Pragmatic, senior, and
          shipping-focused.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-[15px] font-semibold text-white shadow-token transition-colors hover:bg-accent-hover"
          >
            Hire me <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 text-[15px] font-semibold text-text transition-colors hover:bg-bg-alt"
          >
            Contact
          </a>
          <a
            href="/Hector_Waldman_CV.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 text-[15px] font-semibold text-text transition-colors hover:bg-bg-alt"
          >
            Download CV
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[13.5px] text-text-muted">
          <span className="inline-flex items-center gap-2 font-semibold text-text">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for freelance, contract &amp; full-time
          </span>
          {AVAILABILITY.map((item) => (
            <span key={item} className="inline-flex items-center gap-2.5">
              <span aria-hidden="true" className="text-[color:var(--border)]">
                &bull;
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
