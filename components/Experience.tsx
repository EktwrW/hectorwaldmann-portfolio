import type { ReactNode } from "react";

const CASE_STACK = [
  "React 19",
  "TypeScript",
  "Web Audio API",
  "WebSocket",
  "Silero / ONNX",
  "Fastify",
  "AWS Bedrock",
  "Redis",
  "Vitest",
];

const CASE_COLUMNS: { title: string; body: ReactNode }[] = [
  {
    title: "The problem",
    body: (
      <>
        A mental-wellness platform for first responders needed a conversational voice assistant that felt like
        talking to a person — low latency, interruptible mid-sentence, and droppable into products the team
        didn&rsquo;t control.
      </>
    ),
  },
  {
    title: "What I built",
    body: (
      <>
        The real-time streaming voice pipeline, from scratch: a gapless Web Audio PCM playback scheduler, a fully
        typed WebSocket protocol with heartbeat keep-alive and exponential-backoff reconnect, and Silero/ONNX
        voice-activity detection for barge-in.
      </>
    ),
  },
  {
    title: "The outcome",
    body: (
      <>
        Shipped as an embeddable SDK with separate React and drop-in embed entry points, backed by a Fastify
        WebSocket service on AWS Bedrock Agent Runtime with Redis session state. Live today inside the National
        Peer Support Network.
      </>
    ),
  },
];

const CASE_DETAIL: { title: string; body: string }[] = [
  {
    title: "Gapless playback",
    body: "Naïvely queued audio buffers leave audible seams between chunks. I scheduled PCM chunks on one continuous Web Audio timeline so streamed speech plays as a single uninterrupted voice.",
  },
  {
    title: "Barge-in",
    body: "Silero VAD running through ONNX in the browser detects the moment the user starts speaking and cuts playback mid-sentence — the difference between a conversation and a recording.",
  },
  {
    title: "A protocol that survives bad networks",
    body: "Fully typed WebSocket messages, heartbeat keep-alive and exponential-backoff reconnection, so a dropped connection resumes the session instead of ending it.",
  },
  {
    title: "Two entry points, one core",
    body: "The same pipeline ships as a React package and as a drop-in embed, so integrating teams pick either without forking the implementation.",
  },
  {
    title: "Tested where it matters",
    body: "A Vitest suite covers the audio scheduler and the protocol layer — the two places where real-time bugs are hardest to reproduce by hand.",
  },
];

type Role = {
  company: string;
  title: string;
  period: string;
  place: string;
  note?: string;
  bullets: ReactNode[];
  links: { label: string; href: string }[];
};

const ROLES: Role[] = [
  {
    company: "Keel Mind",
    title: "Flutter Architect & Senior Flutter Developer",
    period: "Jan 2022 – Jul 2026",
    place: "Remote · Toronto, Canada · multi-tenant mental-health platform",
    note: "Placed with the client as a Band of Coders consultant until Aug 2024, then contracted directly after Keel bought the engagement out of the agency to keep me exclusively. Same product, same team, no break in the work.",
    bullets: [
      <>
        Architected <strong className="text-text">km_fl_common_ui</strong> from scratch — the company-wide Flutter
        design system and shared-component library consumed by every Flutter app in the org, with an
        override-ready color architecture that powers white-label rebranding.
      </>,
      <>
        Built a media-upload pipeline for files up to <strong className="text-text">1.5 GB</strong> on Flutter Web:
        bypassed the HTTP client for the browser&rsquo;s native XHR/Blob API and staged bytes through IndexedDB so
        the Dart heap never held the payload — with a multi-file queue, per-file progress and cancellation unified
        across web and native.
      </>,
      <>
        Delivered the complete MVP of <strong className="text-text">Pressio</strong>, a transcript-analysis product
        — React 19 · Vite · TypeScript over a Fastify service on AWS Bedrock, with OpenAPI docs and a Dockerised
        test suite. Handed over production-ready.
      </>,
      <>
        Led the data-layer modernization of the org&rsquo;s main production Flutter app, set team-wide engineering
        standards — CI/CD, code review, documentation — and mentored 2+ developers.
      </>,
      <>
        Integrated production AI/ML end to end: a voice-biomarker scoring pipeline across Flutter, Python and Node,
        and an NLP service that auto-generates clinical notes from therapy transcripts.
      </>,
    ],
    links: [
      { label: "National Peer Support Network", href: "https://app.npsn.org/" },
      { label: "White-label build", href: "https://caccfgambling.support-mind.com/" },
    ],
  },
  {
    company: "Band of Coders LLC",
    title: "Flutter Developer",
    period: "Feb 2021 – Jan 2022",
    place: "Remote · Atlanta, Georgia · software agency",
    bullets: [
      <>
        Built <strong className="text-text">GoTribe Fitness</strong> from scratch for an agency client — Flutter
        and BLoC on a GraphQL backend, with multi-device BLE connectivity for real-time heart-rate and training
        metrics plus deep native-platform integrations. Live on the App Store and Google Play.
      </>,
      <>
        Flutter delivery for US agency clients, ending in the full-time placement with the client that ran for the
        next four and a half years.
      </>,
    ],
    links: [
      { label: "GoTribe · iOS", href: "https://apps.apple.com/in/app/gotribe-fitness/id6747635444" },
      { label: "GoTribe · Android", href: "https://play.google.com/store/apps/details?id=com.gotribe.app" },
    ],
  },
  {
    company: "Native App",
    title: "Flutter Developer",
    period: "Jul 2020 – Jan 2021",
    place: "Remote · Bogotá, Colombia",
    bullets: [
      <>
        Built the reusable widget library behind Native.App&rsquo;s no-code app builder — my first design system,
        and the direct antecedent of km_fl_common_ui at Keel.
      </>,
      <>
        Shipped responsive Web, PWA, iOS and Android modules with advanced BLoC patterns, Firestore integrations
        and Cloud Functions.
      </>,
    ],
    links: [{ label: "universodecreadores.com", href: "https://universodecreadores.com" }],
  },
];

export default function Experience() {
  return (
    <section id="work" className="mx-auto max-w-content px-8 py-[100px]">
      <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.12em] text-accent">Experience</p>
      <h2 className="mb-4 font-display text-[clamp(30px,3.6vw,42px)] font-bold leading-[1.1] tracking-tight">
        Where I&rsquo;ve shipped
      </h2>
      <p className="mb-12 max-w-[56ch] text-[15.5px] leading-relaxed text-text-muted">
        Six years across three teams — an agency in Atlanta, a no-code startup in Bogotá, and four and a half years
        on one mental-health platform in Toronto.
      </p>

      {/* Featured case study */}
      <article className="mb-16 overflow-hidden rounded-2xl border border-border bg-surface shadow-token">
        <div className="border-b border-border bg-accent-soft px-8 py-7 sm:px-10">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.14em] text-accent">Featured case study</p>
          <h3 className="mb-2 font-display text-[clamp(21px,2.4vw,28px)] font-bold leading-tight tracking-tight">
            GuardianAI — real-time voice AI, built from scratch
          </h3>
          <p className="text-[14.5px] text-text-muted">
            Keel Mind &middot; shipped as an embeddable SDK &middot; live in the National Peer Support Network
          </p>
        </div>

        <div className="grid gap-8 px-8 py-9 sm:px-10 md:grid-cols-3">
          {CASE_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="mb-2.5 flex items-center gap-2 text-[14px] font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {column.title}
              </h4>
              <p className="text-[14.5px] leading-relaxed text-text-muted">{column.body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 px-8 pb-8 sm:px-10">
          {CASE_STACK.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-border bg-bg-alt px-2.5 py-1 text-[12.5px] text-text-muted"
            >
              {item}
            </span>
          ))}
        </div>

        <details className="disclosure border-t border-border">
          <summary className="flex items-center justify-between gap-4 px-8 py-5 text-[14.5px] font-semibold transition-colors hover:bg-bg-alt sm:px-10">
            <span>How it works, in detail</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="disclosure__chevron h-4 w-4 shrink-0 text-text-muted"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </summary>
          <div className="grid gap-6 border-t border-border px-8 py-8 sm:px-10 md:grid-cols-2">
            {CASE_DETAIL.map((item) => (
              <div key={item.title}>
                <h4 className="mb-1.5 text-[14px] font-bold">{item.title}</h4>
                <p className="text-[14.5px] leading-relaxed text-text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </details>

        <div className="border-t border-border px-8 py-5 sm:px-10">
          <a
            href="https://app.npsn.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-accent hover:text-accent-hover"
          >
            See it live — app.npsn.org <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </article>

      {/* Career timeline */}
      <ol className="relative ml-1 border-l border-border">
        {ROLES.map((role) => (
          <li key={role.company} className="relative pb-12 pl-8 last:pb-0 sm:pl-10">
            <span
              className="absolute -left-[5.5px] top-[7px] h-[11px] w-[11px] rounded-full bg-accent ring-4 ring-bg"
              aria-hidden="true"
            />

            <div className="mb-1 flex flex-col gap-x-4 gap-y-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-[19px] font-bold leading-snug tracking-tight">
                {role.title} <span className="text-accent">· {role.company}</span>
              </h3>
              <p className="shrink-0 text-[13.5px] font-semibold text-text-muted">{role.period}</p>
            </div>
            <p className="mb-4 text-[13.5px] text-text-muted">{role.place}</p>

            {role.note && (
              <p className="mb-5 rounded-xl border border-border bg-surface px-4 py-3 text-[13.5px] leading-relaxed text-text-muted">
                {role.note}
              </p>
            )}

            <ul className="mb-5 grid gap-2.5">
              {role.bullets.map((bullet, index) => (
                <li key={index} className="flex gap-3 text-[14.5px] leading-relaxed text-text-muted">
                  <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-x-5 gap-y-1.5">
              {role.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-accent hover:text-accent-hover"
                >
                  {link.label} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
