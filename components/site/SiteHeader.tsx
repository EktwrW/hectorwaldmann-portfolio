"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import type { Dict } from "@/lib/dict.en";
import { localePath, locales, type Locale } from "@/lib/i18n";

/**
 * Picking a language is an explicit choice, so it is written to the same cookie
 * the middleware reads. Without this, the middleware would keep redirecting a
 * visitor back to whatever their browser asked for. The links are plain anchors
 * (a real navigation) so the cookie is always in place before the request.
 */
function rememberLocale(locale: Locale) {
  try {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
  } catch {
    // Cookies blocked — the visitor still lands on the right page, it just
    // won't be remembered on the next visit.
  }
}

/**
 * Sticky site header: brand, section navigation, language switcher and the
 * theme toggle. The language buttons keep the visitor on the same page — they
 * only swap the locale segment of the current path.
 */
export default function SiteHeader({ t, locale }: { t: Dict; locale: Locale }) {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    if (current === "light" || current === "dark") setTheme(current);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      // localStorage unavailable — the theme just won't persist across visits
    }
  }

  const home = localePath(locale);
  const svc = localePath(locale, "services");

  // Strip the locale prefix so the switcher can rebuild the same page in
  // another language. The English pages are served from the root.
  const bare = (() => {
    const parts = pathname.split("/").filter(Boolean);
    if (parts.length && (locales as readonly string[]).includes(parts[0])) parts.shift();
    return parts.join("/");
  })();

  // Same order as the sections on the home page.
  const links = [
    { href: `${home}#experience`, label: t["nav.exp"] },
    { href: `${home}#about`, label: t["nav.about"] },
    { href: `${home}#foodly`, label: t["nav.foodly"] },
    { href: svc, label: t["nav.services"], primary: true },
    { href: `${home}#contact`, label: t["nav.contact"] },
  ];

  return (
    <>
      <a className="skip" href="#main">
        {t["nav.skip"]}
      </a>
      <header className="hdr">
        <div className="wrap">
          <Link className="brand" href={home}>
            <img src="/apps369-iso.png" alt="" width={26} height={26} />
            Hector Waldman
          </Link>
          <nav className="nav">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={l.primary ? "is-primary" : undefined}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="ctrls">
            <div className="lang" role="group" aria-label="Language">
              {locales.map((l) => (
                <a
                  key={l}
                  href={localePath(l, bare)}
                  hrefLang={l}
                  aria-current={l === locale ? "true" : "false"}
                  onClick={() => rememberLocale(l)}
                >
                  {l.toUpperCase()}
                </a>
              ))}
            </div>
            <button className="tgl" onClick={toggleTheme} aria-label={t["nav.theme"]} aria-pressed={theme === "dark"}>
              ◐
            </button>
            <button
              className="burger"
              onClick={() => setOpen((v) => !v)}
              aria-label={t["nav.menu"]}
              aria-expanded={open}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>
      <div className={open ? "mnav is-open" : "mnav"}>
        <div className="wrap">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
