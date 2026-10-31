"use client";

import { useEffect, useRef } from "react";

/**
 * A muted, looping video that only downloads and plays while it is on screen.
 *
 * The poster is always rendered, so the layout and the first impression never
 * depend on the video arriving. The video is skipped entirely for visitors who
 * asked for reduced motion or for less data — they keep the still frame.
 */
export default function BgVideo({
  src,
  poster,
  className = "",
  eager = false,
  label,
}: {
  src: string;
  poster: string;
  className?: string;
  /** The hero starts loading straight away; everything else waits. */
  eager?: boolean;
  /** Only for videos that carry content (screen recordings), not decoration. */
  label?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (reduce || conn?.saveData) return;

    let loaded = false;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!loaded) {
            v.src = src;
            loaded = true;
          }
          v.play().catch(() => {
            /* Autoplay refused (e.g. low-power mode): the poster stays. */
          });
        } else if (loaded) {
          v.pause();
        }
      },
      { rootMargin: eager ? "0px" : "200px 0px" },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [src, eager]);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden={label ? undefined : true}
      aria-label={label}
      tabIndex={-1}
    />
  );
}
