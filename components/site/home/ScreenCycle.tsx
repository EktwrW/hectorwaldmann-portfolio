"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cross-fades through a set of screenshots inside a device frame. Pauses when
 * off screen, and holds on the first image for reduced-motion visitors.
 */
export default function ScreenCycle({
  images,
  alt,
  interval = 2800,
}: {
  images: string[];
  alt: string;
  interval?: number;
}) {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timer: ReturnType<typeof setInterval> | undefined;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !timer) {
        timer = setInterval(() => setI((n) => (n + 1) % images.length), interval);
      } else if (!entry.isIntersecting && timer) {
        clearInterval(timer);
        timer = undefined;
      }
    });
    io.observe(el);
    return () => {
      io.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [images.length, interval]);

  return (
    <div ref={ref} className="cycle" role="img" aria-label={alt}>
      {images.map((src, n) => (
        <img key={src} src={src} alt="" loading="lazy" decoding="async" className={n === i ? "is-on" : undefined} />
      ))}
    </div>
  );
}
