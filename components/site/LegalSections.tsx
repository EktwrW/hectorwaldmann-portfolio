import type { LegalDoc } from "@/lib/legal";

/**
 * The /legal page: privacy policy, legal notice and terms of use as three
 * anchored sections of one document. One page rather than three keeps the
 * footer quiet and means only one URL per locale to maintain, while the
 * anchors still allow linking straight to the privacy section from the forms.
 */
export default function LegalSections({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <section style={{ paddingBottom: 0 }}>
        <div className="wrap legal-hero">
          <span className="eyebrow">{doc.eyebrow}</span>
          <h1>{doc.h1}</h1>
          <p className="lede">{doc.lede}</p>
          <p className="small muted" style={{ marginTop: 18 }}>
            {doc.updated}
          </p>
          <nav className="legal-toc" aria-label={doc.toc}>
            <span className="k">{doc.toc}</span>
            {doc.sections.map((s) => (
              <a key={s.id} className="textlink" href={`#${s.id}`}>
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {doc.sections.map((section, i) => (
        <section
          key={section.id}
          id={section.id}
          className={i % 2 === 0 ? "band-alt" : undefined}
          style={i === 0 ? { marginTop: "var(--sp-section)" } : undefined}
        >
          <div className="wrap legal-body">
            <h2 className="h2">{section.title}</h2>
            <p className="lede">{section.lede}</p>
            {section.items.map((item) => (
              <div className="legal-item" key={item.h}>
                <h3>{item.h}</h3>
                {item.p.map((paragraph, k) => (
                  <p key={k}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
