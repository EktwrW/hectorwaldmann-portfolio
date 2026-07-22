"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
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
      // localStorage unavailable — theme just won't persist across visits
    }
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className="relative ml-2 h-[30px] w-[54px] shrink-0 cursor-pointer rounded-full border border-border bg-bg-alt transition-colors duration-300"
    >
      <span
        className="absolute top-[3px] block h-[22px] w-[22px] rounded-full bg-accent transition-transform duration-300 ease-out"
        style={{ transform: isDark ? "translateX(27px)" : "translateX(3px)" }}
      />
      <span className="sr-only">{isDark ? "Switch to light theme" : "Switch to dark theme"}</span>
    </button>
  );
}
