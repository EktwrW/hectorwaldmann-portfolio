"use client";

import { useEffect, useState } from "react";

/**
 * The fixed chapter index on the left edge of wide screens. It only appears
 * while a chapter is on screen, and marks the one you are in.
 */
export default function ChapterRail({
  label,
  items,
}: {
  label: string;
  items: { id: string; n: string; name: string }[];
}) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = items
      .map((it) => document.getElementById(it.id))
      .filter((el): el is HTMLElement => !!el);
    const visible = new Map<string, number>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) visible.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
        let best: string | null = null;
        let bestRatio = 0;
        visible.forEach((r, id) => {
          if (r > bestRatio) {
            best = id;
            bestRatio = r;
          }
        });
        setActive(best);
      },
      { threshold: [0, 0.15, 0.3, 0.5, 0.7] },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className={`rail${active ? " is-shown" : ""}`} aria-label={label}>
      <ol>
        {items.map((it) => (
          <li key={it.id}>
            <a href={`#${it.id}`} aria-current={active === it.id ? "true" : undefined}>
              <span className="rail__n">{it.n}</span>
              <span className="rail__name">{it.name}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
