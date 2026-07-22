"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import BrandLogo from "./BrandLogo";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#apps369", label: "Apps 369" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[color:var(--header-bg)] backdrop-blur-[14px]">
      <div className="mx-auto flex h-[72px] max-w-content items-center justify-between gap-6 px-6 sm:px-8">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center gap-[11px] font-display text-[17px] font-semibold tracking-tight"
        >
          <BrandLogo className="h-[26px] w-auto" priority />
          <span>Hector Waldman</span>
        </a>

        {/* Desktop / tablet nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3.5 py-2 text-[14.5px] font-medium text-text-muted transition-colors hover:bg-accent-soft hover:text-text"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-lg text-text transition-colors hover:bg-accent-soft"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-border bg-[color:var(--header-bg)] backdrop-blur-[14px] md:hidden"
        >
          <div className="mx-auto flex max-w-content flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-text-muted transition-colors hover:bg-accent-soft hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
