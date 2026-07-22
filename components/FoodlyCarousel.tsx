const SLIDES = Array.from({ length: 8 }, (_, i) => `/foodly/slide-0${i + 1}.webp`);

export default function FoodlyCarousel() {
  // Duplicate the set so the -50% translate loops seamlessly.
  const items = [...SLIDES, ...SLIDES];

  return (
    <div className="marquee" role="img" aria-label="Screenshots of the Foodly app from the App Store">
      <ul className="marquee__track py-2">
        {items.map((src, i) => (
          <li key={i} className="mr-4 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              width={520}
              height={1127}
              loading="eager"
              decoding="async"
              className="h-[420px] w-auto rounded-[20px] border border-border shadow-token"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
