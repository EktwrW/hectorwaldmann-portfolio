import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-content px-8 pb-[110px] pt-[120px]">
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-2 text-[13px] text-text-muted">
          <Image src="/apps369-logo.png" alt="" width={16} height={16} className="h-4 w-auto" aria-hidden="true" />
          Independent maker &middot; Apps 369
        </div>

        <h1 className="mb-6 max-w-[14ch] font-display text-[clamp(42px,6.2vw,78px)] font-bold leading-[1.02] tracking-tighter text-balance">
          Hector Waldman
        </h1>

        <p className="mb-6 font-display text-[clamp(20px,2.2vw,26px)] font-semibold text-accent">
          Senior Flutter Architect &amp; Full-Stack Engineer
        </p>

        <p className="mb-9 max-w-[52ch] text-[17px] leading-relaxed text-text-muted">
          I design and ship production-grade cross-platform apps end to end — from Flutter architecture and clean
          state management to backend, data, and cloud. Pragmatic, senior, and shipping-focused.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-[15px] font-semibold text-white shadow-token transition-colors hover:bg-accent-hover"
          >
            Contact <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href="/Hector_Waldman_CV.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-6 py-3.5 text-[15px] font-semibold text-text transition-colors hover:bg-bg-alt"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
