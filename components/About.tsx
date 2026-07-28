export default function About() {
  return (
    <section id="about">
      <div className="mx-auto grid max-w-content gap-10 px-8 py-[100px] md:grid-cols-2 md:gap-16">
        <div>
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">About Me</p>
          <h2 className="font-display text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.1] tracking-tight">
            Pragmatic builder, self-taught craft.
          </h2>
        </div>

        <div>
          <p className="mb-5 text-[17px] leading-relaxed text-text-muted">
            I&rsquo;m a self-taught engineer with <strong className="text-text">6 years</strong> building and
            shipping production cross-platform applications. I&rsquo;ve owned features from architecture to release
            — mobile, backend, and everything in between.
          </p>
          <p className="mb-5 text-[17px] leading-relaxed text-text-muted">
            Most of that went into one platform. I joined a Toronto mental-health product in 2022 through a US
            agency and stayed <strong className="text-text">four and a half years</strong> — long enough that the
            client bought my contract out of the agency to keep me on directly. In parallel I build and run{" "}
            <strong className="text-text">Foodly</strong>, my own marketplace, as sole full-stack owner.
          </p>
          <p className="text-[17px] leading-relaxed text-text-muted">
            I care about clean architecture, shipping velocity, and maintainable systems that scale with the
            product. Not flashy — just solid engineering that holds up in the real world.
          </p>
        </div>
      </div>
    </section>
  );
}
