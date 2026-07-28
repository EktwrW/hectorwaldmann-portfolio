const SKILL_GROUPS = [
  {
    title: "Flutter & Mobile",
    items: [
      "Flutter",
      "Dart",
      "go_router",
      "Freezed / Equatable",
      "Retrofit / Dio",
      "Hive",
      "Material 3",
      "Platform channels",
      "Custom Painter",
    ],
  },
  {
    title: "Architecture & State",
    items: [
      "Clean Architecture",
      "BLoC / Cubit",
      "Riverpod",
      "Provider",
      "GetIt",
      "MVVM",
      "Repository pattern",
      "Design systems",
    ],
  },
  {
    title: "Frontend — React / TypeScript",
    items: ["React 19", "TypeScript", "Next.js", "Vite", "Tailwind CSS", "Web Audio API", "WebSocket", "GraphQL"],
  },
  {
    title: "Backend & Data",
    items: [
      "Laravel / PHP",
      "FastAPI / Python",
      "Node.js / Fastify",
      "PostgreSQL",
      "REST & OpenAPI",
      "Geospatial / Haversine",
      "Firebase / Firestore",
      "Redis",
    ],
  },
  {
    title: "AI & ML integration",
    items: [
      "Voice-AI agents",
      "VAD (Silero / ONNX)",
      "AWS Bedrock",
      "Llama 3.1 via SageMaker",
      "LangChain",
      "NLP / transformers",
      "Voice-biomarker scoring",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "GCP Cloud Run",
      "Cloud SQL / GCS",
      "AWS SageMaker / S3",
      "Docker",
      "GitHub Actions",
      "Vercel",
      "Shorebird OTA",
      "Fastlane",
    ],
  },
  {
    title: "Testing & Quality",
    items: [
      "Vitest",
      "bloc_test / mocktail",
      "CI/CD pipelines",
      "Code review",
      "CVE remediation",
      "Multi-tenant white-label",
      "i18n",
    ],
  },
  {
    title: "Languages",
    items: [
      "Dart — expert",
      "TypeScript / JavaScript",
      "Python",
      "PHP",
      "SQL",
      "Spanish — native",
      "English — C1",
      "Portuguese",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-border bg-bg-alt">
      <div className="mx-auto max-w-content px-8 py-[100px]">
        <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">Skills</p>
        <h2 className="mb-4 font-display text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.1] tracking-tight">
          Tools of the trade
        </h2>
        <p className="mb-12 max-w-[56ch] text-[15.5px] leading-relaxed text-text-muted">
          Everything below is something I&rsquo;ve shipped with in production — not a list of things I&rsquo;ve read
          about.
        </p>

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
      </div>
    </section>
  );
}
