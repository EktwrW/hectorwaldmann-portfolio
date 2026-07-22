import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#apps369", label: "Apps 369" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[color:var(--header-bg)] backdrop-blur-[14px]">
      <div className="mx-auto flex h-[72px] max-w-content items-center justify-between gap-6 px-8">
        <a href="#top" className="flex items-center gap-[11px] font-display text-[17px] font-semibold tracking-tight">
          <Image src="/apps369-logo.png" alt="Apps 369" width={26} height={26} className="h-[26px] w-auto" priority />
          <span>Hector Waldman</span>
        </a>
        <nav className="flex items-center gap-1">
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
      </div>
    </header>
  );
}
