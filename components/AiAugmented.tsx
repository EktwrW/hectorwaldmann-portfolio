export default function AiAugmented() {
  return (
    <section aria-labelledby="ai-augmented-title" className="bg-accent-soft">
      <div className="mx-auto grid max-w-content gap-8 px-8 py-[72px] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-16">
        <div>
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">How I work</p>
          <h2
            id="ai-augmented-title"
            className="font-display text-[clamp(24px,2.8vw,32px)] font-bold leading-[1.15] tracking-tight"
          >
            AI-augmented, not AI-dependent.
          </h2>
        </div>

        <div>
          <p className="mb-4 text-[15.5px] leading-relaxed text-text-muted">
            I use AI agents daily as a force multiplier — scaffolding, refactors, test suites, documentation — which
            is how I keep a full-time senior role and an independent product moving at the same time. Architecture,
            code review and final validation stay under my judgment; the tooling accelerates the work, it doesn&rsquo;t
            replace the engineering.
          </p>
          <p className="text-[15.5px] leading-relaxed text-text-muted">
            That&rsquo;s separate from the AI I ship <em>inside</em> products — voice agents, VAD, biomarker scoring,
            NLP — which is engineering in its own right. And yes: this site was built that way too.
          </p>
        </div>
      </div>
    </section>
  );
}
