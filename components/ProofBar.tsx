const METRICS = [
  {
    value: "6 yrs",
    label: "Shipping production cross-platform apps",
  },
  {
    value: "1.5 GB",
    label: "Max single-file upload shipped on Flutter Web",
  },
  {
    value: "60–80%",
    label: "Drop in third-party API calls after geospatial caching",
  },
  {
    value: "1 design system",
    label: "Adopted by every Flutter app in the org",
  },
];

export default function ProofBar() {
  return (
    <section aria-label="Key results" className="border-y border-border bg-bg-alt">
      <div className="mx-auto grid max-w-content grid-cols-2 gap-x-8 gap-y-9 px-8 py-11 lg:grid-cols-4">
        {METRICS.map((metric) => (
          <div key={metric.value}>
            <p className="mb-1.5 font-display text-[clamp(24px,2.6vw,30px)] font-bold leading-none tracking-tight text-accent">
              {metric.value}
            </p>
            <p className="max-w-[26ch] text-[13.5px] leading-snug text-text-muted">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
