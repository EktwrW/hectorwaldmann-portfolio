import type { Dict } from "@/lib/dict.en";
import { localePath, type Locale } from "@/lib/i18n";
import ContactForm from "./ContactForm";

const SLIDES = [1, 2, 3, 4, 5, 6, 7, 8];

/**
 * The home page, section for section, exactly as approved in the prototype.
 * Every string comes from the dictionary so the same markup serves all three
 * languages.
 */
export default function HomeSections({ t, locale }: { t: Dict; locale: Locale }) {
  const svc = localePath(locale, "services");
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <span className="hero-eyebrow">
            <img src="/apps369-iso.png" alt="" />
            <span>{t["hero.eyebrow"]}</span>
          </span>
          <h1>
            <span>{t["hero.h1"]}</span>
            <span className="sub">{t["hero.sub"]}</span>
          </h1>
          <p className="lede">{t["hero.lede"]}</p>
          <div className="cta">
            <a className="btn btn-primary" href={svc}>
              <span>{t["hero.cta1"]}</span>
              →
            </a>
            <a className="btn btn-ghost" href="#foodly">{t["hero.cta2"]}</a>
            <a className="textlink" href="/Hector_Waldman_CV.pdf">{t["hero.cta3"]}</a>
          </div>
          <div className="avail">
            <span className="dot"></span>
            <span>{t["hero.avail"]}</span>
          </div>
          <div className="metrics">
            <div>
              <div className="n">6</div>
              <div className="l">{t["m.1"]}</div>
            </div>
            <div>
              <div className="n">2</div>
              <div className="l">{t["m.2"]}</div>
            </div>
            <div>
              <div className="n">3</div>
              <div className="l">{t["m.3"]}</div>
            </div>
            <div>
              <div className="n">&lt;24h</div>
              <div className="l">{t["m.4"]}</div>
            </div>
          </div>
        </div>
      </section>
      <section className="band-alt">
        <div className="wrap">
          <span className="eyebrow">{t["path.eyebrow"]}</span>
          <h2 className="h2">{t["path.h2"]}</h2>
          <div className="paths three">
            <article className="card pathcard">
              <div className="top">
                <span className="tile">◆</span>
                <span className="tag">{t["path.a.tag"]}</span>
              </div>
              <div className="body">
                <h3>{t["path.a.h3"]}</h3>
                <ul className="checks">
                  <li>{t["path.a.1"]}</li>
                  <li>{t["path.a.2"]}</li>
                  <li>{t["path.a.3"]}</li>
                </ul>
              </div>
              <div className="foot">
                <a className="arrowlink" href={svc}>
                  <span>{t["path.a.link"]}</span>
                  <span>→</span>
                </a>
              </div>
            </article>
            <article className="card pathcard">
              <div className="top">
                <span className="tile">↻</span>
                <span className="tag">{t["path.b.tag"]}</span>
              </div>
              <div className="body">
                <h3>{t["path.b.h3"]}</h3>
                <ul className="checks">
                  <li>{t["path.b.1"]}</li>
                  <li>{t["path.b.2"]}</li>
                  <li>{t["path.b.3"]}</li>
                </ul>
              </div>
              <div className="foot">
                <a className="arrowlink" href={svc}>
                  <span>{t["path.b.link"]}</span>
                  <span>→</span>
                </a>
              </div>
            </article>
            <article className="card pathcard">
              <div className="top">
                <span className="tile">▤</span>
                <span className="tag">{t["path.c.tag"]}</span>
              </div>
              <div className="body">
                <h3>{t["path.c.h3"]}</h3>
                <ul className="checks">
                  <li>{t["path.c.1"]}</li>
                  <li>{t["path.c.2"]}</li>
                  <li>{t["path.c.3"]}</li>
                </ul>
              </div>
              <div className="foot">
                <a className="arrowlink" href={svc}>
                  <span>{t["path.c.link"]}</span>
                  <span>→</span>
                </a>
              </div>
            </article>
          </div>
          <div className="recruiter">
            <span>{t["path.rec"]}</span>
            <a className="arrowlink" href="#experience">
              <span>{t["path.rec1"]}</span>
              <span>→</span>
            </a>
            <a className="arrowlink" href="/Hector_Waldman_CV.pdf">
              <span>{t["path.rec2"]}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
      <section id="foodly">
        <div className="wrap">
          <span className="eyebrow">{t["fo.eyebrow"]}</span>
          <h2 className="h2">Foodly</h2>
          <p className="lede">{t["fo.lede"]}</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '22px' }}>
            <span className="pill">{t["fo.p1"]}</span>
            <span className="pill">{t["fo.p2"]}</span>
            <span className="pill">{t["fo.p3"]}</span>
          </div>
        </div>
        <div className="marquee" style={{ marginTop: '44px' }}>
          <ul className="marquee__track">
            {[...SLIDES, ...SLIDES].map((n, i) => (
              <li key={i}>
                <img src={`/foodly/slide-0${n}.webp`} alt="" loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="band-soft">
        <div className="wrap">
          <span className="eyebrow">{t["pr.eyebrow"]}</span>
          <h2 className="h2">{t["pr.h2"]}</h2>
          <div className="steps">
            <div className="step is-first">
              <span className="line"></span>
              <div className="num">01</div>
              <h3>{t["pr.1h"]}</h3>
              <p>{t["pr.1p"]}</p>
              <span className="dur">{t["pr.1d"]}</span>
            </div>
            <div className="step">
              <span className="line"></span>
              <div className="num">02</div>
              <h3>{t["pr.2h"]}</h3>
              <p>{t["pr.2p"]}</p>
              <span className="dur">{t["pr.2d"]}</span>
            </div>
            <div className="step">
              <span className="line"></span>
              <div className="num">03</div>
              <h3>{t["pr.3h"]}</h3>
              <p>{t["pr.3p"]}</p>
              <span className="dur">{t["pr.3d"]}</span>
            </div>
            <div className="step">
              <div className="num">04</div>
              <h3>{t["pr.4h"]}</h3>
              <p>{t["pr.4p"]}</p>
              <span className="dur">{t["pr.4d"]}</span>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <span className="eyebrow">{t["sv.eyebrow"]}</span>
          <h2 className="h2">{t["sv.h2"]}</h2>
          <div className="rows">
            <a className="row" href={svc}>
              <span className="idx">01</span>
              <div>
                <h3>{t["sv.0h"]}</h3>
                <p>{t["sv.0p"]}</p>
              </div>
              <span className="tags">{t["sv.0t"]}</span>
              <span className="arw">→</span>
            </a>
            <a className="row" href={svc}>
              <span className="idx">02</span>
              <div>
                <h3>{t["sv.1h"]}</h3>
                <p>{t["sv.1p"]}</p>
              </div>
              <span className="tags">{t["sv.1t"]}</span>
              <span className="arw">→</span>
            </a>
            <a className="row" href={svc}>
              <span className="idx">03</span>
              <div>
                <h3>{t["sv.2h"]}</h3>
                <p>{t["sv.2p"]}</p>
              </div>
              <span className="tags">{t["sv.2t"]}</span>
              <span className="arw">→</span>
            </a>
            <a className="row" href={svc}>
              <span className="idx">04</span>
              <div>
                <h3>{t["sv.3h"]}</h3>
                <p>{t["sv.3p"]}</p>
              </div>
              <span className="tags">{t["sv.3t"]}</span>
              <span className="arw">→</span>
            </a>
            <a className="row" href={svc}>
              <span className="idx">05</span>
              <div>
                <h3>{t["sv.4h"]}</h3>
                <p>{t["sv.4p"]}</p>
              </div>
              <span className="tags">{t["sv.4t"]}</span>
              <span className="arw">→</span>
            </a>
          </div>
        </div>
      </section>
      <section id="experience" className="band-alt">
        <div className="wrap">
          <span className="eyebrow">{t["ex.eyebrow"]}</span>
          <h2 className="h2">{t["ex.h2"]}</h2>
          <div className="tl">
            <div className="tl-item">
              <div className="when">2024 — 2026</div>
              <h3>{t["ex.1h"]}</h3>
              <div className="org">Keel Mind</div>
              <p>{t["ex.1p"]}</p>
            </div>
            <div className="tl-item">
              <div className="when">2023 — 2026</div>
              <h3>{t["ex.2h"]}</h3>
              <div className="org">Apps 369 · Foodly</div>
              <p>{t["ex.2p"]}</p>
            </div>
            <div className="tl-item">
              <div className="when">2020 — 2024</div>
              <h3>{t["ex.3h"]}</h3>
              <div className="org">GuardianAI · agencies · contract work</div>
              <p>{t["ex.3p"]}</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <span className="eyebrow">{t["sk.eyebrow"]}</span>
          <h2 className="h2">{t["sk.h2"]}</h2>
          <div className="cols4">
            <div>
              <h3>{t["sk.c1"]}</h3>
              <ul>
                <li className="lead">Flutter · Dart</li>
                <li>BLoC · Riverpod</li>
                <li>Clean Architecture</li>
                <li>Design systems</li>
                <li>iOS & Play releases</li>
              </ul>
            </div>
            <div>
              <h3>{t["sk.c2"]}</h3>
              <ul>
                <li className="lead">Laravel · PHP</li>
                <li>PostgreSQL</li>
                <li>Node.js · TypeScript</li>
                <li>REST · WebSockets</li>
                <li>Redis · queues</li>
              </ul>
            </div>
            <div>
              <h3>{t["sk.c3"]}</h3>
              <ul>
                <li className="lead">Voice AI · NLP</li>
                <li>AWS Bedrock</li>
                <li>GCP Cloud Run</li>
                <li>Firebase</li>
                <li>CI/CD pipelines</li>
              </ul>
            </div>
            <div>
              <h3>{t["sk.c4"]}</h3>
              <ul>
                <li className="lead">{t["sk.p1"]}</li>
                <li>{t["sk.p2"]}</li>
                <li>{t["sk.p3"]}</li>
                <li>{t["sk.p4"]}</li>
                <li>{t["sk.p5"]}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="band-alt">
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 300px', gap: '56px', alignItems: 'start' }}>
          <div>
            <span className="eyebrow">{t["ab.eyebrow"]}</span>
            <h2 className="h2">{t["ab.h2"]}</h2>
            <p className="lede">{t["ab.p1"]}</p>
            <p className="lede">{t["ab.p2"]}</p>
          </div>
          <div className="card" style={{ padding: '26px' }}>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '18px', lineHeight: '1.4' }}>{t["ab.quote"]}</p>
            <p className="small muted" style={{ marginTop: '14px' }}>{t["ab.quotesub"]}</p>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="wrap">
          <span className="eyebrow">{t["ct.eyebrow"]}</span>
          <h2 className="h2">{t["ct.h2"]}</h2>
          <p className="lede">{t["ct.lede"]}</p>
          <ContactForm t={t} variant="home" />
        </div>
      </section>
    </>
  );
}
