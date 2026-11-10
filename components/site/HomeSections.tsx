import type { Dict } from "@/lib/dict.en";
import { localePath, type Locale } from "@/lib/i18n";
import { getWork, LINKS, type Fact } from "@/lib/work";
import ContactForm from "./ContactForm";
import BgVideo from "./home/BgVideo";
import ScreenCycle from "./home/ScreenCycle";
import ChapterRail from "./home/ChapterRail";

const SLIDES = [1, 2, 3, 4, 5, 6, 7, 8];
const GOTRIBE = [1, 2, 3, 4].map((n) => `/work/gotribe-0${n}.webp`);
const QA = [1, 2, 3, 4, 5, 6] as const;
const VOTIVA = [1, 2, 3, 4, 5, 6].map((n) => `/work/votiva-0${n}.webp`);

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" fill="currentColor">
      <path d="M16.37 12.6c-.02-2.2 1.8-3.26 1.88-3.31-1.03-1.5-2.62-1.7-3.18-1.73-1.35-.14-2.64.8-3.33.8-.69 0-1.74-.78-2.87-.76-1.47.02-2.83.86-3.59 2.18-1.53 2.66-.39 6.6 1.1 8.76.73 1.05 1.6 2.24 2.73 2.2 1.1-.05 1.51-.71 2.84-.71 1.32 0 1.7.71 2.86.69 1.18-.02 1.93-1.07 2.65-2.13.84-1.22 1.18-2.4 1.2-2.46-.03-.01-2.3-.88-2.32-3.5zM14.2 6.13c.6-.73 1.01-1.75.9-2.76-.87.04-1.92.58-2.54 1.31-.56.64-1.05 1.67-.92 2.66.97.08 1.96-.49 2.56-1.21z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true" fill="currentColor">
      <path d="M4.2 2.4c-.2.2-.3.6-.3 1v17.2c0 .4.1.8.3 1l9.5-9.6-9.5-9.6zm10.6 10.7 2.7 2.7-11.3 6.4c-.4.2-.8.3-1.1.2l9.7-9.3zm0-2.2L5.1 1.6c.3-.1.7 0 1.1.2l11.3 6.4-2.7 2.7zm3.9 4.1-3-3 3-3 3.1 1.8c.9.5.9 1.4 0 1.9l-3.1 2.3z" />
    </svg>
  );
}

/** An outbound link that says where it goes, for people and for crawlers. */
function Out({
  href,
  children,
  className = "cbtn",
  hint,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  hint: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener" title={hint}>
      {children}
      <span className="cbtn__arw" aria-hidden="true">↗</span>
    </a>
  );
}

function Facts({ facts }: { facts: Fact[] }) {
  return (
    <dl className="facts">
      {facts.map((f) => (
        <div key={f.k}>
          <dt>{f.k}</dt>
          <dd>{f.v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Phone({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone__screen">{children}</div>
      <span className="phone__island" aria-hidden="true" />
    </div>
  );
}

function Browser({ url, children, className = "" }: { url: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`browser ${className}`}>
      <div className="browser__bar" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{url}</span>
      </div>
      <div className="browser__view">{children}</div>
    </div>
  );
}

/**
 * The home page as a sequence of chapters: a short opening, five pieces of
 * work told one at a time over their own footage, then the credits and the
 * ways to work together. Every string comes from the dictionary or from
 * lib/work.ts, so the same markup serves all three languages.
 */
export default function HomeSections({ t, locale }: { t: Dict; locale: Locale }) {
  const svc = localePath(locale, "services");
  const w = getWork(locale);

  const chapters = [
    { id: "foodly", n: "01", name: "Foodly" },
    { id: "wenekaton", n: "02", name: "WenekaTón" },
    { id: "votiva", n: "03", name: "Votiva" },
    { id: "gotribe", n: "04", name: "GoTribe" },
    { id: "keel", n: "05", name: "Keel Mind" },
  ];

  return (
    <>
      {/* ---------------- opening ---------------- */}
      <section className="opening cine">
        <div className="opening__bg" aria-hidden="true">
          <BgVideo src="/media/hero-lisbon.mp4" poster="/media/hero-lisbon.webp" eager className="cover" />
          <div className="shade shade--hero" />
          <div className="grain" />
        </div>
        <div className="wrap opening__in">
          <p className="opening__eyebrow">
            <img src="/apps369-iso.png" alt="" width={22} height={22} />
            <span>{t["hero.eyebrow"]}</span>
          </p>
          <h1 className="opening__h1">
            <span className="l1">{t["hero.h1"]}</span>
            <em className="l2">{t["hero.sub"]}</em>
          </h1>
          <p className="opening__lede">{t["hero.lede"]}</p>
          <div className="opening__cta">
            <a className="cbtn cbtn--solid" href={svc}>
              {t["hero.cta1"]} <span aria-hidden="true">→</span>
            </a>
            <a className="cbtn" href="#work">
              {t["hero.cta2"]} <span aria-hidden="true">↓</span>
            </a>
            <a className="cbtn cbtn--quiet" href="/Hector_Waldman_CV.pdf" download>
              {t["hero.cta3"]}
            </a>
          </div>
          <p className="opening__avail">
            <span className="dot" aria-hidden="true" />
            {t["hero.avail"]}
          </p>
        </div>
        <div className="ticker" aria-label={w.ticker.join(" · ")}>
          <div className="ticker__track" aria-hidden="true">
            {[...w.ticker, ...w.ticker].map((s, i) => (
              <span key={i}>
                <i className="ticker__dot" />
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div id="work" className="chapters">
        <ChapterRail label={w.rail} items={chapters} />

        {/* ---------------- 01 Foodly ---------------- */}
        <section id="foodly" className="chapter cine ch-foodly" aria-labelledby="foodly-h">
          <div className="chapter__bg" aria-hidden="true">
            <BgVideo src="/media/foodly-table.mp4" poster="/media/foodly-table.webp" className="cover" />
            <div className="shade" />
            <div className="grain" />
          </div>
          <span className="chapter__num" aria-hidden="true">01</span>
          <div className="wrap chapter__grid">
            <div className="chapter__text">
              <p className="kicker">{w.foodly.kicker}</p>
              <h2 id="foodly-h" className="chapter__title">Foodly</h2>
              <p className="tagline">{w.foodly.tagline}</p>
              <p className="body">{w.foodly.p1}</p>
              <p className="body">{w.foodly.p2}</p>
              <Facts facts={w.foodly.facts} />
              <div className="links">
                <Out href={LINKS.foodlyIos} className="cbtn cbtn--solid" hint={`App Store — ${w.open}`}>
                  <AppleIcon /> App Store
                </Out>
                <Out href={LINKS.foodlyAndroid} className="cbtn cbtn--solid" hint={`Google Play — ${w.open}`}>
                  <PlayIcon /> Google Play
                </Out>
                <Out href={LINKS.foodlyWeb} hint={w.open}>
                  {w.foodly.web}
                </Out>
              </div>
            </div>
            <div className="stage stage--foodly">
              <figure className="stage__browser">
                <Browser url="foodly.solutions · panel">
                  <BgVideo src="/media/foodly-panel.mp4" poster="/media/foodly-panel.webp" label={w.foodly.panelCap} />
                </Browser>
                <figcaption>{w.foodly.panelCap}</figcaption>
              </figure>
              <figure className="stage__phone">
                <Phone>
                  <BgVideo src="/media/foodly-app-tour.mp4" poster="/media/foodly-app-tour.webp" label={w.foodly.phoneCap} />
                </Phone>
                <figcaption>{w.foodly.phoneCap}</figcaption>
              </figure>
            </div>
          </div>
          <div className="strip" aria-label={w.foodly.stripCap}>
            <ul className="strip__track">
              {[...SLIDES, ...SLIDES].map((n, i) => (
                <li key={i} aria-hidden={i >= SLIDES.length ? true : undefined}>
                  <img src={`/foodly/slide-0${n}.webp`} alt="" loading="lazy" decoding="async" width={520} height={1127} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- 02 WenekaTón ---------------- */}
        <section id="wenekaton" className="chapter cine ch-wenekaton" aria-labelledby="wenekaton-h">
          <div className="chapter__bg" aria-hidden="true">
            <BgVideo src="/media/wenekaton-canaima.mp4" poster="/media/wenekaton-canaima.webp" className="cover" />
            <div className="shade" />
            <div className="grain" />
          </div>
          <span className="chapter__num" aria-hidden="true">02</span>
          <div className="wrap chapter__grid chapter__grid--flip">
            <div className="chapter__text">
              <p className="kicker">{w.wenekaton.kicker}</p>
              <h2 id="wenekaton-h" className="chapter__title">WenekaTón</h2>
              <p className="tagline">{w.wenekaton.tagline}</p>
              <p className="body">{w.wenekaton.p1}</p>
              <p className="body">{w.wenekaton.p2}</p>
              <Facts facts={w.wenekaton.facts} />
              <div className="links">
                <Out href={LINKS.wenekaton} className="cbtn cbtn--solid" hint={w.open}>
                  {w.wenekaton.visit}
                </Out>
              </div>
            </div>
            <div className="stage stage--weneka">
              <Browser url="wenekaton.com" className="stage__browser">
                <img src="/work/wenekaton-site.webp" alt="WenekaTón — home page with the AI concierge open" loading="lazy" decoding="async" width={1440} height={900} />
              </Browser>
              <Phone className="stage__phone">
                <img src="/work/wenekaton-mobile.webp" alt="" loading="lazy" decoding="async" width={520} height={1126} />
              </Phone>
            </div>
          </div>
        </section>

        {/* ---------------- 03 Votiva ---------------- */}
        <section id="votiva" className="chapter cine ch-votiva" aria-labelledby="votiva-h">
          <div className="chapter__bg" aria-hidden="true">
            <div className="candle" />
            <BgVideo src="/media/votiva-church.mp4" poster="/media/votiva-church.webp" className="cover" />
            <div className="shade" />
            <div className="grain" />
          </div>
          <span className="chapter__num" aria-hidden="true">03</span>
          <div className="wrap chapter__grid">
            <div className="chapter__text">
              <p className="kicker">{w.votiva.kicker}</p>
              <h2 id="votiva-h" className="chapter__title">Votiva</h2>
              <p className="tagline">{w.votiva.tagline}</p>
              <p className="body">{w.votiva.p1}</p>
              <p className="body">{w.votiva.p2}</p>
              <Facts facts={w.votiva.facts} />
              <div className="links">
                <Out href={LINKS.votivaIos} className="cbtn cbtn--solid" hint={`App Store — ${w.open}`}>
                  <AppleIcon /> App Store
                </Out>
                <Out href={LINKS.votivaAndroid} className="cbtn cbtn--solid" hint={`Google Play — ${w.open}`}>
                  <PlayIcon /> Google Play
                </Out>
                <Out href={w.votiva.site} hint={w.open}>
                  {w.votiva.visit}
                </Out>
              </div>
            </div>
            <div className="stage stage--votiva">
              <figure className="clip">
                <BgVideo src="/media/votiva-rosary.mp4" poster="/media/votiva-rosary.webp" />
                <figcaption>{w.votiva.clipCap}</figcaption>
              </figure>
              <figure className="prayer">
                <span className="prayer__mark" aria-hidden="true">✦</span>
                <blockquote>{w.votiva.card}</blockquote>
                <figcaption>{w.votiva.cardSub}</figcaption>
              </figure>
            </div>
          </div>
          <div className="strip" aria-label={w.votiva.stripCap}>
            <ul className="strip__track">
              {[...VOTIVA, ...VOTIVA].map((src, i) => (
                <li key={i} aria-hidden={i >= VOTIVA.length ? true : undefined}>
                  <img src={src} alt="" loading="lazy" decoding="async" width={520} height={1130} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- 04 GoTribe ---------------- */}
        <section id="gotribe" className="chapter cine ch-gotribe" aria-labelledby="gotribe-h">
          <div className="chapter__bg" aria-hidden="true">
            <div className="glow" />
            <div className="grain" />
          </div>
          <span className="chapter__num" aria-hidden="true">04</span>
          <div className="wrap chapter__grid chapter__grid--flip">
            <div className="chapter__text">
              <p className="kicker">{w.gotribe.kicker}</p>
              <h2 id="gotribe-h" className="chapter__title">GoTribe</h2>
              <p className="tagline">{w.gotribe.tagline}</p>
              <p className="body">{w.gotribe.p1}</p>
              <p className="body">{w.gotribe.p2}</p>
              <Facts facts={w.gotribe.facts} />
              <div className="links">
                <Out href={LINKS.gotribeIos} className="cbtn cbtn--solid" hint={`App Store — ${w.open}`}>
                  <AppleIcon /> App Store
                </Out>
                <Out href={LINKS.gotribeAndroid} className="cbtn cbtn--solid" hint={`Google Play — ${w.open}`}>
                  <PlayIcon /> Google Play
                </Out>
                <Out href={LINKS.bandOfCoders} hint={w.open}>
                  {w.gotribe.agency}
                </Out>
              </div>
            </div>
            <div className="stage stage--gotribe">
              <Phone className="tilt-l">
                <ScreenCycle images={GOTRIBE} alt="GoTribe Fitness — app screens" />
              </Phone>
              <Phone className="tilt-r">
                <ScreenCycle images={[...GOTRIBE.slice(2), ...GOTRIBE.slice(0, 2)]} alt="" interval={3400} />
              </Phone>
            </div>
          </div>
        </section>

        {/* ---------------- 05 Keel Mind ---------------- */}
        <section id="keel" className="chapter cine ch-keel" aria-labelledby="keel-h">
          <div className="chapter__bg" aria-hidden="true">
            <div className="glow" />
            <BgVideo src="/media/keel-code.mp4" poster="/media/keel-code.webp" className="cover keel__video" />
            <div className="voice">
              {Array.from({ length: 56 }, (_, i) => (
                <i key={i} style={{ animationDelay: `${(i % 14) * -0.11}s`, ["--h" as string]: `${18 + ((i * 37) % 64)}%` }} />
              ))}
            </div>
            <div className="grain" />
          </div>
          <span className="chapter__num" aria-hidden="true">05</span>
          <div className="wrap">
            <div className="chapter__text chapter__text--wide">
              <p className="kicker">{w.keel.kicker}</p>
              <h2 id="keel-h" className="chapter__title">Keel Mind</h2>
              <p className="tagline">{w.keel.tagline}</p>
              <p className="body">{w.keel.p1}</p>
            </div>
            <div className="notes">
              {w.keel.notes.map((n) => (
                <article key={n.h} className="note">
                  <h3>{n.h}</h3>
                  <p>{n.p}</p>
                </article>
              ))}
            </div>
            <p className="keel__foot">
              <span>{w.keel.note}</span>
              <Out href={LINKS.linkedinRecs} hint={w.open} className="cbtn cbtn--quiet">
                {w.keel.recs}
              </Out>
            </p>
          </div>
        </section>
      </div>

      {/* ---------------- interlude ---------------- */}
      <section id="about" className="interlude cine">
        <div className="chapter__bg" aria-hidden="true">
          <BgVideo src="/media/about-code.mp4" poster="/media/about-code.webp" className="cover" />
          <div className="shade shade--about" />
          <div className="grain" />
        </div>
        <div className="wrap interlude__in">
          <span className="eyebrow">{t["ab.eyebrow"]}</span>
          <h2 className="interlude__h2">{t["ab.h2"]}</h2>
          <div className="interlude__cols">
            <p>{t["ab.p1"]}</p>
            <p>{t["ab.p2"]}</p>
          </div>
          <figure className="interlude__quote">
            <blockquote>{t["ab.quote"]}</blockquote>
            <figcaption>{t["ab.quotesub"]}</figcaption>
          </figure>
        </div>
      </section>

      {/* ---------------- credits ---------------- */}
      <section id="experience" className="credits">
        <div className="wrap">
          <span className="eyebrow">{w.credits.eyebrow}</span>
          <h2 className="credits__h2">{w.credits.h2}</h2>
          <ol className="roll">
            {w.credits.items.map((c) => (
              <li key={c.org + c.when}>
                <span className="roll__when">{c.when}</span>
                <span className="roll__role">{c.role}</span>
                <span className="roll__org">{c.org}</span>
                {c.note && (
                  <span className="roll__note">
                    {c.note}
                    {c.link && (
                      <>
                        {" "}
                        <a href={c.link.href} target="_blank" rel="noopener" className="textlink" title={w.open}>
                          {c.link.label} ↗
                        </a>
                      </>
                    )}
                  </span>
                )}
              </li>
            ))}
          </ol>
          <h3 className="credits__h3">{w.credits.stackH}</h3>
          <dl className="tools">
            {w.credits.stack.map((s) => (
              <div key={s.k}>
                <dt>{s.k}</dt>
                <dd>{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------- work with me ---------------- */}
      <section className="band-alt">
        <div className="wrap">
          <span className="eyebrow">{t["path.eyebrow"]}</span>
          <h2 className="h2">{t["path.h2"]}</h2>
          <div className="paths three">
            {(["a", "b", "c"] as const).map((p, i) => (
              <article className="card pathcard" key={p}>
                <div className="top">
                  <span className="tile">{["◆", "↻", "▤"][i]}</span>
                  <span className="tag">{t[`path.${p}.tag`]}</span>
                </div>
                <div className="body">
                  <h3>{t[`path.${p}.h3`]}</h3>
                  <ul className="checks">
                    <li>{t[`path.${p}.1`]}</li>
                    <li>{t[`path.${p}.2`]}</li>
                    <li>{t[`path.${p}.3`]}</li>
                  </ul>
                </div>
                <div className="foot">
                  <a className="arrowlink" href={svc}>
                    <span>{t[`path.${p}.link`]}</span>
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="recruiter">
            <span>{t["path.rec"]}</span>
            <a className="arrowlink" href="/Hector_Waldman_CV.pdf" download>
              <span>{t["path.rec2"]}</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- services ---------------- */}
      <section>
        <div className="wrap">
          <span className="eyebrow">{t["sv.eyebrow"]}</span>
          <h2 className="h2">{t["sv.h2"]}</h2>
          {/* Ordered by the client journey, not by key number: build → take
              over → maintain → review → secure → extend with AI. */}
          <div className="rows">
            {(["sv.0", "sv.1", "sv.2", "sv.5", "sv.3", "sv.6", "sv.4"] as const).map((k, i) => (
              <a className="row" href={svc} key={k}>
                <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{t[`${k}h` as keyof Dict]}</h3>
                  <p>{t[`${k}p` as keyof Dict]}</p>
                </div>
                <span className="tags">{t[`${k}t` as keyof Dict]}</span>
                <span className="arw">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- quick answers ----------------
          Written answer-first, one self-contained answer per question, because
          this is the shape AI assistants lift into their replies. The same
          text is published as FAQPage data just below. */}
      <section id="answers" className="answers">
        <div className="wrap">
          <span className="eyebrow">{t["hq.eyebrow"]}</span>
          <h2 className="h2">{t["hq.h2"]}</h2>
          <dl className="qa">
            {QA.map((n) => (
              <div key={n}>
                <dt>{t[`hq.q${n}`]}</dt>
                <dd>{t[`hq.a${n}`]}</dd>
              </div>
            ))}
          </dl>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: QA.map((n) => ({
                "@type": "Question",
                name: t[`hq.q${n}`],
                acceptedAnswer: { "@type": "Answer", text: t[`hq.a${n}`] },
              })),
            }),
          }}
        />
      </section>

      <section id="contact" className="band-alt">
        <div className="wrap">
          <span className="eyebrow">{t["ct.eyebrow"]}</span>
          <h2 className="h2">{t["ct.h2"]}</h2>
          <p className="lede">{t["ct.lede"]}</p>
          <ContactForm t={t} locale={locale} variant="home" />
        </div>
      </section>
    </>
  );
}
