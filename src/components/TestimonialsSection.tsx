import { useRef, useEffect, useCallback } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    quote: "After years of dealing with painful, swollen varicose veins, I finally found relief. The EVLT procedure was quick and I was back to normal in a day!",
    name: "Priya S.",
    city: "Hyderabad",
  },
  {
    quote: "The team was incredibly professional. My spider veins have completely disappeared and the whole process was painless. Highly recommend!",
    name: "Rahul M.",
    city: "Bengaluru",
  },
  {
    quote: "I had been suffering from leg heaviness and cramps for years. After treatment, I feel like a new person. No more pain at the end of the day.",
    name: "Anita K.",
    city: "Pune",
  },
  {
    quote: "World-class treatment at an affordable price. The doctors explained everything clearly and made me feel comfortable throughout the procedure.",
    name: "Suresh P.",
    city: "Chennai",
  },
  {
    quote: "I was scared about the procedure but it was completely painless under local anaesthesia. Walked out of the clinic the same day!",
    name: "Meera D.",
    city: "Kolkata",
  },
  {
    quote: "My varicose veins have been treated successfully. The follow-up care was excellent and the results are better than I expected.",
    name: "Vikram T.",
    city: "Kochi",
  },
];

function GoogleG({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 18 18" aria-hidden="true">
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.33-1.58-5.04-3.72H.96v2.34A9 9 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.96 10.7A5.4 5.4 0 0 1 3.68 9c0-.59.1-1.16.28-1.7V4.96H.96A9 9 0 0 0 0 9c0 1.45.35 2.82.96 4.04l3-2.34z" />
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.34l2.58-2.58A8.66 8.66 0 0 0 9 0 9 9 0 0 0 .96 4.96l3 2.34C4.67 5.16 6.66 3.58 9 3.58z" />
    </svg>
  );
}

function RatingStars({ size = 14 }: { size?: number }) {
  return (
    <div className="flex items-center gap-1 text-[#FABB05]" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} style={{ width: size, height: size }} className="fill-current" strokeWidth={0} />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const posRef = useRef(0);
  const animRef = useRef<number | null>(null);

  const tripled = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = el.scrollWidth / 3;
    posRef.current = cardWidth;
    el.scrollLeft = cardWidth;

    let lastTime = performance.now();

    const step = (timestamp: number) => {
      const delta = timestamp - lastTime;
      lastTime = timestamp;

      if (!pausedRef.current && el) {
        posRef.current += delta * 0.04;
        el.scrollLeft = posRef.current;

        if (posRef.current >= cardWidth * 2) {
          posRef.current -= cardWidth;
          el.scrollLeft = posRef.current;
        }
      }

      animRef.current = requestAnimationFrame(step);
    };

    animRef.current = requestAnimationFrame(step);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  const handleMouseEnter = useCallback(() => { pausedRef.current = true; }, []);
  const handleMouseLeave = useCallback(() => { pausedRef.current = false; }, []);
  const handleScroll = useCallback(() => {
    if (pausedRef.current && scrollRef.current) {
      posRef.current = scrollRef.current.scrollLeft;
    }
  }, []);

  return (
    <section className="py-14 md:py-20 overflow-hidden relative bg-accent-light">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 text-center mb-10 md:mb-12">
        <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] text-primary mb-3">
          Trusted by thousands of patients
        </p>
        <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-secondary">
          See why patients love us
        </h2>
        <p className="mt-4 text-[15px] md:text-base leading-relaxed text-gray-600 max-w-2xl mx-auto">
          Honest experiences from people who found lasting relief from vein
          problems.
        </p>

        {/* Overall rating row */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="font-heading text-[1.7rem] leading-none text-primary font-semibold">
            4.9
          </span>
          <RatingStars size={18} />
          <span className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-white px-4 py-2 text-[13px] font-medium text-secondary shadow-sm">
            <GoogleG size={15} />
            Based on Google reviews
          </span>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-5 sm:gap-6 px-5 md:px-8 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {tripled.map((r, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[80vw] sm:w-[320px] md:w-[360px] overflow-hidden rounded-xl border border-black/5 bg-white px-6 py-6 sm:px-7 sm:py-7 flex flex-col shadow-[0_12px_32px_-16px_rgba(43,52,69,0.18)]"
            >
              {/* Faint decorative quote */}
              <Quote
                size={64}
                className="pointer-events-none absolute -right-2 -top-2 rotate-180 fill-primary text-primary opacity-[0.06]"
                aria-hidden="true"
              />

              {/* Header: avatar + name + Google */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-lighter font-heading text-[15px] font-semibold text-primary">
                    {r.name
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .replace(".", "")}
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold leading-tight text-secondary">
                      {r.name}
                    </p>
                    <p className="mt-0.5 text-[13px] leading-tight text-gray-500">
                      {r.city}
                    </p>
                  </div>
                </div>
                <GoogleG size={18} />
              </div>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2">
                <RatingStars size={14} />
                <span className="text-[13px] font-semibold text-secondary">
                  5.0
                </span>
              </div>

              {/* Quote */}
              <p className="mt-3 flex-grow text-[17px] leading-[1.45] text-gray-600">
                &ldquo;{r.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
