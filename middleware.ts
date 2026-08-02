import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const LOCALES = ["en", "es", "pt"] as const;
const DEFAULT_LOCALE = "en";
const COOKIE = "NEXT_LOCALE";
const VARY = "Accept-Language, Cookie";

/**
 * Routing rules
 * -------------
 * The app tree lives under `app/[locale]`, but English keeps the URLs Google
 * already indexed (`/`, `/services`). So:
 *
 *   - `/es*` and `/pt*` are served as-is.
 *   - An explicit `/en*` URL is redirected to the stripped path, so the English
 *     page never has two addresses.
 *   - Everything else is *rewritten* (not redirected) to `/en/...`, unless the
 *     visitor's cookie or Accept-Language says they want Spanish or Portuguese,
 *     in which case they are redirected once to the matching prefix.
 *
 * Crawlers send no Accept-Language, so they always get English with a 200.
 */
function preferredLocale(header: string | null): string {
  if (!header) return DEFAULT_LOCALE;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params.find((p) => p.trim().startsWith("q="));
      return { tag: tag.trim().toLowerCase(), q: q ? parseFloat(q.split("=")[1]) : 1 };
    })
    .filter((entry) => entry.tag)
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    if (base === "es") return "es";
    if (base === "pt") return "pt";
    if (base === "en") return "en";
  }
  return DEFAULT_LOCALE;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /en or /en/... — collapse to the root-served English URL.
  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  // Explicit /es or /pt — serve it and remember the choice.
  const prefixed = LOCALES.some(
    (locale) =>
      locale !== DEFAULT_LOCALE && (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))
  );
  if (prefixed) {
    const locale = pathname.split("/")[1];
    const response = NextResponse.next();
    response.cookies.set(COOKIE, locale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return response;
  }

  // Root-served English. Redirect only when we can tell the visitor wants
  // another language.
  const cookie = request.cookies.get(COOKIE)?.value;
  const chosen =
    cookie && (LOCALES as readonly string[]).includes(cookie)
      ? cookie
      : preferredLocale(request.headers.get("accept-language"));

  if (chosen !== DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = `/${chosen}${pathname === "/" ? "" : pathname}`;
    const response = NextResponse.redirect(url);
    response.headers.set("Vary", VARY);
    return response;
  }

  // Serve the English tree without changing the address bar. The cookie is
  // written here too, so a visitor who picks English from the switcher is not
  // redirected back to their browser language on the next request.
  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  const response = NextResponse.rewrite(url);
  response.headers.set("Vary", VARY);
  response.cookies.set(COOKIE, DEFAULT_LOCALE, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
