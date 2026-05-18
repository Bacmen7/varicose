"use client";
import { useRef, useEffect, useCallback } from "react";

const reviews = [
  {
    quote: "After years of dealing with painful, swollen varicose veins, I finally found relief. The EVLT procedure was quick and I was back to normal in a day!",
    name: "Priya S.",
  },
  {
    quote: "The team was incredibly professional. My spider veins have completely disappeared and the whole process was painless. Highly recommend!",
    name: "Rahul M.",
  },
  {
    quote: "I had been suffering from leg heaviness and cramps for years. After treatment, I feel like a new person. No more pain at the end of the day.",
    name: "Anita K.",
  },
  {
    quote: "World-class treatment at an affordable price. The doctors explained everything clearly and made me feel comfortable throughout the procedure.",
    name: "Suresh P.",
  },
  {
    quote: "I was scared about the procedure but it was completely painless under local anaesthesia. Walked out of the clinic the same day!",
    name: "Meera D.",
  },
  {
    quote: "My varicose veins have been treated successfully. The follow-up care was excellent and the results are better than I expected.",
    name: "Vikram T.",
  },
];

function GoogleIcon() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white border border-gray-100">
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z" />
        <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.84.86-3.04.86-2.34 0-4.33-1.58-5.04-3.72H.96v2.34A9 9 0 0 0 9 18z" />
        <path fill="#FBBC05" d="M3.96 10.7A5.4 5.4 0 0 1 3.68 9c0-.59.1-1.16.28-1.7V4.96H.96A9 9 0 0 0 0 9c0 1.45.35 2.82.96 4.04l3-2.34z" />
        <path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.34l2.58-2.58A8.66 8.66 0 0 0 9 0 9 9 0 0 0 .96 4.96l3 2.34C4.67 5.16 6.66 3.58 9 3.58z" />
      </svg>
    </span>
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
    <section className="py-20 md:py-28 bg-white overflow-hidden relative pb-24">
      <div className="max-w-[1200px] mx-auto text-center mb-10 md:mb-14 px-6">
        <p className="text-xs uppercase tracking-[0.25em] font-semibold text-gray-400 mb-3">
          Trusted by thousands of patients
        </p>
        <h2 className="font-heading text-3xl sm:text-[2.5rem] md:text-[3rem] leading-[1.08] tracking-tight text-secondary">
          See why patients love us
        </h2>
      </div>

      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 px-6 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {tripled.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[75vw] sm:w-[300px] md:w-[340px] p-5 sm:p-8 flex flex-col justify-between bg-surface rounded-2xl"
            >
              <div>
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <GoogleIcon />
                    <span className="text-sm font-semibold text-secondary">Google Review</span>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary">5.0</span>
                </div>
                <p className="text-[15px] sm:text-[17px] leading-[1.7] font-medium text-secondary">
                  {r.quote}
                </p>
              </div>
              <p className="mt-4 sm:mt-6 text-[12px] sm:text-[13px] uppercase tracking-[0.2em] font-semibold text-gray-400">
                — {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
