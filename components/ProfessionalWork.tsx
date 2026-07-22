type Project = {
  title: string;
  tagline: string;
  description: React.ReactNode;
  links: { label: string; href: string }[];
};

const PROJECTS: Project[] = [
  {
    title: "National Peer Support Network",
    tagline: "Flutter Architecture & AI Integration",
    description: (
      <>
        Led Flutter architecture and integrated <strong className="text-text">GuardianAI</strong>, a voice-AI
        assistant, into a mental-wellness platform supporting first responders.
      </>
    ),
    links: [{ label: "View details", href: "https://app.npsn.org/" }],
  },
  {
    title: "CACCF Gambling Support",
    tagline: "Multi-tenant White-label Theming",
    description:
      "Engineered a white-label, multi-tenant theming system enabling per-organization branding across the same platform family as NPSN.",
    links: [{ label: "View details", href: "https://caccfgambling.support-mind.com/" }],
  },
  {
    title: "GoTribe Fitness",
    tagline: "Frontend & GraphQL Integration",
    description:
      "Built frontend features and integrated GraphQL APIs with the backend for a fitness coaching app delivering personalized training programs.",
    links: [
      { label: "iOS", href: "https://apps.apple.com/in/app/gotribe-fitness/id6747635444" },
      { label: "Android", href: "https://play.google.com/store/apps/details?id=com.gotribe.app" },
    ],
  },
];

export default function ProfessionalWork() {
  return (
    <section id="work" className="border-y border-border bg-bg-alt">
      <div className="mx-auto max-w-content px-8 py-[100px]">
        <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">Professional Work</p>
        <h2 className="mb-4 font-display text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.1] tracking-tight">
          Selected Contributions
        </h2>
        <p className="mb-12 max-w-[52ch] text-[15.5px] leading-relaxed text-text-muted">
          Products I&rsquo;ve contributed to as part of professional engineering teams.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-2xl border border-border bg-surface p-7"
            >
              <h3 className="mb-1 font-display text-[19px] font-bold leading-snug">{project.title}</h3>
              <p className="mb-3 text-[13.5px] font-semibold text-accent">{project.tagline}</p>
              <p className="mb-6 flex-1 text-[14.5px] leading-relaxed text-text-muted">{project.description}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-fit items-center gap-1.5 text-[14.5px] font-semibold text-accent hover:text-accent-hover"
                  >
                    {link.label} <span aria-hidden="true">&rarr;</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
