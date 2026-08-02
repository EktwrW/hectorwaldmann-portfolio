import Link from "next/link";
import { localePath, type Locale } from "@/lib/i18n";

const LEGAL_LABEL: Record<Locale, string> = {
  en: "Privacy & legal",
  es: "Privacidad y legal",
  pt: "Privacidade e legal",
};

export default function SiteFooter({ locale }: { locale: Locale }) {
  return (
    <footer className="ftr">
      <div className="wrap">
        <span>© {new Date().getFullYear()} Hector Waldman · Apps 369</span>
        <span style={{ flex: 1 }} />
        <Link className="textlink" href={localePath(locale, "legal")}>
          {LEGAL_LABEL[locale] ?? LEGAL_LABEL.en}
        </Link>
        <a className="textlink" href="https://www.linkedin.com/in/ektwr/" rel="me noopener" target="_blank">
          LinkedIn
        </a>
        <a className="textlink" href="https://github.com/EktwrW" rel="me noopener" target="_blank">
          GitHub
        </a>
        <a className="textlink" href="mailto:hector@hectorwaldmann.site">
          hector@hectorwaldmann.site
        </a>
      </div>
    </footer>
  );
}
