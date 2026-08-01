const SERVICES = [
  {
    title: "Build a new product from zero",
    body: "You have an idea and no codebase. I take it from spec to a production Flutter app on the App Store and Google Play, with the backend, database and cloud behind it — one codebase for iOS, Android and Web.",
    tags: ["MVP", "iOS + Android + Web", "Backend & cloud"],
  },
  {
    title: "Take over an app you already have",
    body: "An existing app that's slow, fragile, half-finished or abandoned by the last team. I audit the codebase, stabilise the release pipeline and keep shipping features on top of it — I've done exactly this with a stack that wasn't production-ready and hardened it end to end.",
    tags: ["Rescue & refactor", "Legacy takeover", "Code audit"],
  },
  {
    title: "Architecture & technical consulting",
    body: "Short, focused engagements: a Flutter architecture review, a design system, a state-management migration, CI/CD and store releases, or a second senior opinion before you commit budget to a direction.",
    tags: ["Clean Architecture", "BLoC", "Design systems", "CI/CD"],
  },
  {
    title: "AI features inside your product",
    body: "Voice agents, speech pipelines, NLP search, moderation and LLM integrations shipped inside real apps — not demos. Built on AWS Bedrock, GCP and OpenAI-class models, with the cost and latency budget planned up front.",
    tags: ["Voice AI", "NLP", "LLM integration"],
  },
];

const ENGAGEMENTS = [
  "Fixed-scope project",
  "Monthly contract (part-time or full-time)",
  "Maintenance retainer",
  "Full-time role",
];

export default function Services() {
  return (
    <section id="services" className="border-y border-border bg-bg-alt">
      <div className="mx-auto max-w-content px-8 py-[100px]">
        <div className="mb-11 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">Work with me</p>
            <h2 className="max-w-[20ch] font-display text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.1] tracking-tight">
              Hire me to build your product — or to fix the one you already have.
            </h2>
          </div>
          <p className="max-w-[40ch] text-[15.5px] leading-relaxed text-text-muted">
            I&rsquo;m available for <strong className="text-text">freelance and contract work</strong> as well as
            full-time roles, working remotely with founders, agencies and product teams across the US, Canada,
            Europe and LATAM.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((service) => (
            <div key={service.title} className="rounded-2xl border border-border bg-surface p-8 shadow-token">
              <h3 className="mb-3 font-display text-[20px] font-bold leading-snug tracking-tight">
                {service.title}
              </h3>
              <p className="mb-5 text-[15px] leading-relaxed text-text-muted">{service.body}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-soft px-3 py-1.5 text-[12.5px] font-medium text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">How we can work</p>
            <div className="flex flex-wrap gap-2.5">
              {ENGAGEMENTS.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3.5 py-1.5 text-[13.5px] font-medium text-text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-[15px] font-semibold text-white shadow-token transition-colors hover:bg-accent-hover"
          >
            Start a project <span aria-hidden="true">&rarr;</span>
          </a>
        </div>

        <p className="mt-6 max-w-[92ch] text-[13.5px] leading-relaxed text-text-muted">
          <strong className="font-semibold text-text">Typical clients:</strong> founders who need a mobile app built
          and shipped, companies whose existing Flutter or React app needs a senior owner, and teams hiring a remote
          senior engineer on contract. First reply usually within 24 hours.
        </p>
      </div>
    </section>
  );
}
