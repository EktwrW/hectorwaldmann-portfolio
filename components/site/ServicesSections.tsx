import type { Dict } from "@/lib/dict.en";
import type { Locale } from "@/lib/i18n";
import ContactForm from "./ContactForm";

/** Static bar heights for the GuardianAI waveform illustration. */
const WAVE = [12,26,44,30,58,72,40,86,64,96,52,78,34,60,88,46,70,24,54,92,38,66,28,80,44,58,20,74,36,62,90,48,26,68,42,84,30,56,18,50];

export default function ServicesSections({ t, locale }: { t: Dict; locale: Locale }) {
  return (
    <>
      <section style={{ paddingBottom: '0' }}>
        <div className="wrap svc-hero">
          <div>
            <span className="eyebrow">{t["s.eyebrow"]}</span>
            <h1>{t["s.h1"]}</h1>
            <p className="lede">{t["s.lede"]}</p>
            <div className="cta" style={{ display: 'flex', gap: '18px', alignItems: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
              <a className="btn btn-primary" href="#s-contact">
                <span>{t["s.cta1"]}</span>
                →
              </a>
              <a className="textlink" href="#s-pricing">{t["s.cta2"]}</a>
            </div>
          </div>
          <div className="card statcard">
            <div className="r">
              <span className="k">{t["s.k1"]}</span>
              <span className="v">{t["s.v1"]}</span>
            </div>
            <div className="r">
              <span className="k">{t["s.k2"]}</span>
              <span className="v">iOS · Android · Web · Desktop</span>
            </div>
            <div className="r">
              <span className="k">{t["s.k3"]}</span>
              <span className="v">{t["s.v3"]}</span>
            </div>
            <div className="r">
              <span className="k">{t["s.k4"]}</span>
              <span className="v">{t["s.v4"]}</span>
            </div>
            <div className="r">
              <span className="k">{t["s.k5"]}</span>
              <span className="v">{t["s.v5"]}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="band-alt" style={{ marginTop: 'var(--sp-section)' }}>
        <div className="wrap">
          <span className="eyebrow">{t["s.two.eyebrow"]}</span>
          <h2 className="h2">{t["s.two.h2"]}</h2>
          <div className="panel" id="new-build">
            <div className="txt">
              <span className="eyebrow">{t["s.nb.tag"]}</span>
              <h3 style={{ marginTop: '12px' }}>{t["s.nb.h3"]}</h3>
              <p className="lede" style={{ fontSize: '15.5px' }}>{t["s.nb.p"]}</p>
              <ul className="checks" style={{ marginTop: '22px' }}>
                <li>{t["s.nb.1"]}</li>
                <li>{t["s.nb.2"]}</li>
                <li>{t["s.nb.3"]}</li>
                <li>{t["s.nb.4"]}</li>
              </ul>
            </div>
            <div className="gfx gfx-build">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '56px', fontWeight: '700', letterSpacing: '-.04em' }}>1</div>
                <div style={{ fontSize: '14px', opacity: '.85', marginTop: '8px' }}>{t["s.nb.gfx"]}</div>
              </div>
            </div>
          </div>
          <div className="panel" id="takeover">
            <div className="gfx gfx-slate">
              <div style={{ textAlign: 'center', width: '100%' }}>
                <div style={{ display: 'flex', gap: '6px', justifyContent: 'center', alignItems: 'center' }}>
                  <span style={{ width: '70px', height: '44px', border: '2px solid rgba(255,255,255,.5)', borderRadius: '6px' }}></span>
                  <span style={{ width: '14px', height: '2px', background: 'rgba(255,255,255,.35)' }}></span>
                  <span style={{ width: '70px', height: '44px', border: '2px dashed rgba(255,255,255,.5)', borderRadius: '6px' }}></span>
                </div>
                <div style={{ fontSize: '14px', opacity: '.85', marginTop: '16px' }}>{t["s.tk.gfx"]}</div>
              </div>
            </div>
            <div className="txt">
              <span className="eyebrow">{t["s.tk.tag"]}</span>
              <h3 style={{ marginTop: '12px' }}>{t["s.tk.h3"]}</h3>
              <p className="lede" style={{ fontSize: '15.5px' }}>{t["s.tk.p"]}</p>
              <ul className="checks" style={{ marginTop: '22px' }}>
                <li>{t["s.tk.1"]}</li>
                <li>{t["s.tk.2"]}</li>
                <li>{t["s.tk.3"]}</li>
                <li>{t["s.tk.4"]}</li>
              </ul>
              <p className="small muted" style={{ marginTop: '20px' }}>{t["s.tk.note"]}</p>
            </div>
          </div>
          <div className="panel" id="web">
            <div className="txt">
              <span className="eyebrow">{t["s.wb.tag"]}</span>
              <h3 style={{ marginTop: '12px' }}>{t["s.wb.h3"]}</h3>
              <p className="lede" style={{ fontSize: '15.5px' }}>{t["s.wb.p"]}</p>
              <ul className="checks" style={{ marginTop: '22px' }}>
                <li>{t["s.wb.1"]}</li>
                <li>{t["s.wb.2"]}</li>
                <li>{t["s.wb.3"]}</li>
                <li>{t["s.wb.4"]}</li>
              </ul>
              <p className="small muted" style={{ marginTop: '20px' }}>{t["s.wb.note"]}</p>
            </div>
            <div className="gfx gfx-web">
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '56px', fontWeight: '700', letterSpacing: '-.04em' }}>1–2</div>
                <div style={{ fontSize: '14px', opacity: '.85', marginTop: '8px' }}>{t["s.wb.gfx"]}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <span className="eyebrow">{t["s.get.eyebrow"]}</span>
          <h2 className="h2">{t["s.get.h2"]}</h2>
          <div className="threecol">
            <div>
              <h3>{t["s.get.c1"]}</h3>
              <ul className="dots">
                <li>{t["s.get.a1"]}</li>
                <li>{t["s.get.a2"]}</li>
                <li>{t["s.get.a3"]}</li>
                <li>{t["s.get.a4"]}</li>
              </ul>
            </div>
            <div>
              <h3>{t["s.get.c2"]}</h3>
              <ul className="dots">
                <li>{t["s.get.b1"]}</li>
                <li>{t["s.get.b2"]}</li>
                <li>{t["s.get.b3"]}</li>
                <li>{t["s.get.b4"]}</li>
              </ul>
            </div>
            <div>
              <h3>{t["s.get.c3"]}</h3>
              <ul className="dots">
                <li>{t["s.get.d1"]}</li>
                <li>{t["s.get.d2"]}</li>
                <li>{t["s.get.d3"]}</li>
                <li>{t["s.get.d4"]}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="band-soft">
        <div className="wrap">
          <span className="eyebrow">{t["s.pr.eyebrow"]}</span>
          <h2 className="h2">{t["s.pr.h2"]}</h2>
          <div className="matrix">
            <div className="step is-first">
              <div className="num">01</div>
              <h3>{t["s.pr.1h"]}</h3>
              <p>{t["s.pr.1p"]}</p>
            </div>
            <div className="step">
              <div className="num">02</div>
              <h3>{t["s.pr.2h"]}</h3>
              <p>{t["s.pr.2p"]}</p>
            </div>
            <div className="step">
              <div className="num">03</div>
              <h3>{t["s.pr.3h"]}</h3>
              <p>{t["s.pr.3p"]}</p>
            </div>
            <div className="step">
              <div className="num">04</div>
              <h3>{t["s.pr.4h"]}</h3>
              <p>{t["s.pr.4p"]}</p>
            </div>
            <div className="step">
              <div className="num">05</div>
              <h3>{t["s.pr.5h"]}</h3>
              <p>{t["s.pr.5p"]}</p>
            </div>
            <div className="step">
              <div className="num">06</div>
              <h3>{t["s.pr.6h"]}</h3>
              <p>{t["s.pr.6p"]}</p>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '40px' }}>
            <span className="pill">{t["s.pr.x1"]}</span>
            <span className="pill">{t["s.pr.x2"]}</span>
            <span className="pill">{t["s.pr.x3"]}</span>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <span className="eyebrow">{t["s.pf.eyebrow"]}</span>
          <h2 className="h2">{t["s.pf.h2"]}</h2>
          <div className="paths">
            <article className="card pathcard">
              <div className="gfx gfx-foodly" style={{ minHeight: '280px' }}>
                <div className="phones">
                  <img src="/foodly/slide-02.webp" alt="" />
                  <img src="/foodly/slide-05.webp" alt="" />
                </div>
              </div>
              <div className="body">
                <h3>Foodly</h3>
                <p className="lede" style={{ fontSize: '15px' }}>{t["s.pf.foodly"]}</p>
                <div style={{ display: 'flex', gap: '10px', marginTop: '18px', flexWrap: 'wrap' }}>
                  <span className="pill">App Store</span>
                  <span className="pill">Google Play</span>
                </div>
              </div>
            </article>
            <article className="card pathcard">
              <div style={{ minHeight: '280px', display: 'grid', placeItems: 'center', padding: '40px', background: 'var(--bg-alt)' }}>
                <div className="wave" aria-hidden="true" style={{ width: "100%" }}>
                  {WAVE.map((h, i) => (
                    <i key={i} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <div className="body">
                <h3>GuardianAI</h3>
                <p className="lede" style={{ fontSize: '15px' }}>{t["s.pf.guardian"]}</p>
                <div style={{ display: 'flex', gap: '10px', marginTop: '18px', flexWrap: 'wrap' }}>
                  <span className="pill">Voice AI</span>
                  <span className="pill">NLP</span>
                  <span className="pill">Cloud Run</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="band-alt" id="s-pricing">
        <div className="wrap">
          <span className="eyebrow">{t["s.pc.eyebrow"]}</span>
          <h2 className="h2">{t["s.pc.h2"]}</h2>
          <p className="lede">{t["s.pc.lede"]}</p>
          <div className="prices">
            <div className="card price">
              <h3>{t["s.pc.0h"]}</h3>
              <div className="from">{t["s.pc.from0"]}</div>
              <div className="amt">700 €</div>
              <div className="when">{t["s.pc.0w"]}</div>
              <ul className="checks" style={{ marginTop: '20px' }}>
                <li>{t["s.pc.0a"]}</li>
                <li>{t["s.pc.0b"]}</li>
                <li>{t["s.pc.0c"]}</li>
                <li>{t["s.pc.0d"]}</li>
              </ul>
            </div>
            <div className="card price">
              <h3>{t["s.pc.1h"]}</h3>
              <div className="from">{t["s.pc.from"]}</div>
              <div className="amt">1.200 €</div>
              <div className="when">{t["s.pc.1w"]}</div>
              <ul className="checks" style={{ marginTop: '20px' }}>
                <li>{t["s.pc.1a"]}</li>
                <li>{t["s.pc.1b"]}</li>
                <li>{t["s.pc.1c"]}</li>
                <li>{t["s.pc.1e"]}</li>
                <li>{t["s.pc.1d"]}</li>
              </ul>
            </div>
            <div className="card price feat">
              <span className="ribbon">{t["s.pc.ribbon"]}</span>
              <h3>{t["s.pc.2h"]}</h3>
              <div className="from">{t["s.pc.from2"]}</div>
              <div className="amt">8.000 €</div>
              <div className="when">{t["s.pc.2w"]}</div>
              <ul className="checks" style={{ marginTop: '20px' }}>
                <li>{t["s.pc.2a"]}</li>
                <li>{t["s.pc.2b"]}</li>
                <li>{t["s.pc.2c"]}</li>
                <li>{t["s.pc.2d"]}</li>
              </ul>
            </div>
            <div className="card price">
              <h3>{t["s.pc.3h"]}</h3>
              <div className="from">{t["s.pc.from3"]}</div>
              <div className="amt">
                600 €
                <small>{t["s.pc.3m"]}</small>
              </div>
              <div className="when">{t["s.pc.3w"]}</div>
              <ul className="checks" style={{ marginTop: '20px' }}>
                <li>{t["s.pc.3a"]}</li>
                <li>{t["s.pc.3b"]}</li>
                <li>{t["s.pc.3c"]}</li>
                <li>{t["s.pc.3d"]}</li>
              </ul>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '34px' }}>
            <span className="pill">{t["s.pc.e1"]}</span>
            <span className="pill">{t["s.pc.e2"]}</span>
            <span className="pill">{t["s.pc.e3"]}</span>
            <span className="pill">{t["s.pc.e4"]}</span>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <span className="eyebrow">{t["s.cmp.eyebrow"]}</span>
          <h2 className="h2">{t["s.cmp.h2"]}</h2>
          <table className="cmp">
            <thead>
              <tr>
                <th />
                <th className="me">{t["s.cmp.cme"]}</th>
                <th>{t["s.cmp.cag"]}</th>
                <th>{t["s.cmp.cof"]}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t["s.cmp.r1"]}</td>
                <td className="me" data-label={t["s.cmp.cme"]}>{t["s.cmp.r1a"]}</td>
                <td data-label={t["s.cmp.cag"]}>{t["s.cmp.r1b"]}</td>
                <td data-label={t["s.cmp.cof"]}>{t["s.cmp.r1c"]}</td>
              </tr>
              <tr>
                <td>{t["s.cmp.r2"]}</td>
                <td className="me" data-label={t["s.cmp.cme"]}>{t["s.cmp.r2a"]}</td>
                <td data-label={t["s.cmp.cag"]}>{t["s.cmp.r2b"]}</td>
                <td data-label={t["s.cmp.cof"]}>{t["s.cmp.r2c"]}</td>
              </tr>
              <tr>
                <td>{t["s.cmp.r3"]}</td>
                <td className="me" data-label={t["s.cmp.cme"]}>{t["s.cmp.r3a"]}</td>
                <td data-label={t["s.cmp.cag"]}>{t["s.cmp.r3b"]}</td>
                <td data-label={t["s.cmp.cof"]}>{t["s.cmp.r3c"]}</td>
              </tr>
              <tr>
                <td>{t["s.cmp.r4"]}</td>
                <td className="me" data-label={t["s.cmp.cme"]}>{t["s.cmp.r4a"]}</td>
                <td data-label={t["s.cmp.cag"]}>{t["s.cmp.r4b"]}</td>
                <td data-label={t["s.cmp.cof"]}>{t["s.cmp.r4c"]}</td>
              </tr>
              <tr>
                <td>{t["s.cmp.r5"]}</td>
                <td className="me" data-label={t["s.cmp.cme"]}>{t["s.cmp.r5a"]}</td>
                <td data-label={t["s.cmp.cag"]}>{t["s.cmp.r5b"]}</td>
                <td data-label={t["s.cmp.cof"]}>{t["s.cmp.r5c"]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className="band-alt">
        <div className="wrap">
          <span className="eyebrow">{t["s.st.eyebrow"]}</span>
          <h2 className="h2">{t["s.st.h2"]}</h2>
          <div className="cols4">
            <div>
              <h3>{t["s.st.c1"]}</h3>
              <ul>
                <li className="lead">Flutter · Dart</li>
                <li>BLoC · Riverpod</li>
                <li>Clean Architecture</li>
                <li>Design systems</li>
              </ul>
            </div>
            <div>
              <h3>{t["s.st.c2"]}</h3>
              <ul>
                <li className="lead">Laravel · PHP</li>
                <li>PostgreSQL</li>
                <li>Node.js · TypeScript</li>
                <li>REST · WebSockets</li>
              </ul>
            </div>
            <div>
              <h3>{t["s.st.c3"]}</h3>
              <ul>
                <li className="lead">GCP Cloud Run</li>
                <li>AWS Bedrock</li>
                <li>Firebase</li>
                <li>Voice AI · NLP</li>
              </ul>
            </div>
            <div>
              <h3>{t["s.st.c4"]}</h3>
              <ul>
                <li className="lead">CI/CD</li>
                <li>App Store · Play</li>
                <li>{t["s.st.d3"]}</li>
                <li>{t["s.st.d4"]}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap faq">
          <div className="sticky">
            <span className="eyebrow">{t["s.faq.eyebrow"]}</span>
            <h2 className="h2">{t["s.faq.h2"]}</h2>
          </div>
          <div>
            <details className="q" open>
              <summary>
                <span>{t["s.faq.q1"]}</span>
                <span className="chev">⌄</span>
              </summary>
              <p>{t["s.faq.a1"]}</p>
            </details>
            <details className="q">
              <summary>
                <span>{t["s.faq.q2"]}</span>
                <span className="chev">⌄</span>
              </summary>
              <p>{t["s.faq.a2"]}</p>
            </details>
            <details className="q">
              <summary>
                <span>{t["s.faq.q3"]}</span>
                <span className="chev">⌄</span>
              </summary>
              <p>{t["s.faq.a3"]}</p>
            </details>
            <details className="q">
              <summary>
                <span>{t["s.faq.q4"]}</span>
                <span className="chev">⌄</span>
              </summary>
              <p>{t["s.faq.a4"]}</p>
            </details>
            <details className="q">
              <summary>
                <span>{t["s.faq.q5"]}</span>
                <span className="chev">⌄</span>
              </summary>
              <p>{t["s.faq.a5"]}</p>
            </details>
            <details className="q">
              <summary>
                <span>{t["s.faq.q6"]}</span>
                <span className="chev">⌄</span>
              </summary>
              <p>{t["s.faq.a6"]}</p>
            </details>
            <details className="q">
              <summary>
                <span>{t["s.faq.q7"]}</span>
                <span className="chev">⌄</span>
              </summary>
              <p>{t["s.faq.a7"]}</p>
            </details>
          </div>
        </div>
      </section>
      <section className="band-soft" id="s-contact">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <span className="eyebrow">{t["s.end.eyebrow"]}</span>
          <h2 className="h2">{t["s.end.h2"]}</h2>
          <p className="lede" style={{ margin: '16px auto 0' }}>{t["s.end.lede"]}</p>
          <ContactForm t={t} locale={locale} variant="services" />
          <p className="small muted" style={{ marginTop: '28px', maxWidth: '60ch', marginLeft: 'auto', marginRight: 'auto' }}>{t["s.end.notfit"]}</p>
        </div>
      </section>
    </>
  );
}
