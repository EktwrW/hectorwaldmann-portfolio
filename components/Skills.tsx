const SKILL_GROUPS = [
  { title: "Mobile — Flutter", items: ["Flutter", "Dart", "Riverpod / BLoC", "Native platform channels"] },
  { title: "Frontend — React / TypeScript", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"] },
  { title: "Backend & Data", items: ["Python", "Laravel / PHP", "Node.js", "PostgreSQL"] },
  { title: "AI & Cloud / DevOps", items: ["Voice-AI integration", "LLM APIs", "Docker", "CI/CD", "Vercel", "AWS / GCP"] },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-content px-8 py-[100px]">
      <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">Skills</p>
      <h2 className="mb-12 font-display text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.1] tracking-tight">
        Tools of the trade
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="rounded-2xl border border-border bg-surface p-7">
            <h3 className="mb-4 flex items-center gap-2 text-[16px] font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border bg-bg-alt px-3 py-1.5 text-[13.5px] text-text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
