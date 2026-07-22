const STATS = [
  { value: "5+", label: "Years shipping production apps" },
  { value: "iOS + Android", label: "Cross-platform from one codebase" },
  { value: "Full-stack", label: "Frontend, backend, cloud & AI" },
];

export default function About() {
  return (
    <section id="about" className="border-y border-border bg-bg-alt">
      <div className="mx-auto grid max-w-content gap-10 px-8 py-[100px] md:grid-cols-2 md:gap-16">
        <div>
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">About Me</p>
          <h2 className="font-display text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.1] tracking-tight">
            Pragmatic builder, self-taught craft.
          </h2>
        </div>

        <div>
          <p className="mb-5 text-[17px] leading-relaxed text-text-muted">
            I&rsquo;m a self-taught engineer with <strong className="text-text">5+ years</strong> building and
            shipping production cross-platform applications. I&rsquo;ve owned features from architecture to release
            — mobile, backend, and everything in between.
          </p>
          <p className="mb-8 text-[17px] leading-relaxed text-text-muted">
            I care about clean architecture, shipping velocity, and maintainable systems that scale with the
            product. Not flashy — just solid engineering that holds up in the real world.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-surface p-5">
                <p className="mb-1.5 font-display text-[22px] font-bold text-accent">{stat.value}</p>
                <p className="text-[13.5px] leading-snug text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
