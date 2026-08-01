const SLIDES = [
  {
    src: "/foodly/slide-01.webp",
    alt: "Foodly app screenshot — restaurant owner dashboard with menus, QR code and bookings for My Pizzeria",
  },
  {
    src: "/foodly/slide-02.webp",
    alt: "Foodly app screenshot — a digital restaurant menu customers open by scanning a QR code",
  },
  {
    src: "/foodly/slide-03.webp",
    alt: "Foodly app screenshot — table reservations and service requests managed in a single bookings inbox",
  },
  {
    src: "/foodly/slide-04.webp",
    alt: "Foodly app screenshot — a restaurant promotion with validity dates, shown to nearby customers",
  },
  {
    src: "/foodly/slide-05.webp",
    alt: "Foodly app screenshot — real-time analytics with daily reservation trends and a conversion funnel",
  },
  {
    src: "/foodly/slide-06.webp",
    alt: "Foodly app screenshot — business categories from cafés to catering, with a featured restaurant nearby",
  },
  {
    src: "/foodly/slide-07.webp",
    alt: "Foodly app screenshot — local discovery screen with restaurants and promotions near the user",
  },
  {
    src: "/foodly/slide-08.webp",
    alt: "Foodly app screenshot — booking a table by choosing a date, time and party size",
  },
];

export default function FoodlyCarousel() {
  // Duplicate the set so the -50% translate loops seamlessly. The second pass
  // is hidden from assistive tech so screen readers don't hear it twice.
  const items = [
    ...SLIDES.map((slide) => ({ ...slide, duplicate: false })),
    ...SLIDES.map((slide) => ({ ...slide, duplicate: true })),
  ];

  return (
    <div className="marquee">
      <ul className="marquee__track py-2" aria-label="Screenshots of the Foodly app">
        {items.map((slide, i) => (
          <li key={i} className="mr-4 shrink-0" aria-hidden={slide.duplicate || undefined}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={slide.duplicate ? "" : slide.alt}
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
