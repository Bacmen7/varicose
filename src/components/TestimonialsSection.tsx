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
                <svg className="w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-5 text-primary/30" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M10.4 28.8c-2.4 0-4.27-.73-5.6-2.2C3.47 25.13 2.8 23.2 2.8 20.8c0-2.93.87-5.6 2.6-8 1.73-2.4 4.07-4.33 7-5.8l1.6 2.4c-2.13 1.2-3.73 2.53-4.8 4-.93 1.47-1.4 2.93-1.4 4.4.27-.13.73-.2 1.4-.2 1.6 0 2.93.53 4 1.6 1.07 1.07 1.6 2.47 1.6 4.2 0 1.6-.6 3-1.8 4.2-1.2 1.07-2.73 1.6-4.6 1.6zm17.6 0c-2.4 0-4.27-.73-5.6-2.2-1.33-1.47-2-3.4-2-5.8 0-2.93.87-5.6 2.6-8 1.73-2.4 4.07-4.33 7-5.8l1.6 2.4c-2.13 1.2-3.73 2.53-4.8 4-.93 1.47-1.4 2.93-1.4 4.4.27-.13.73-.2 1.4-.2 1.6 0 2.93.53 4 1.6 1.07 1.07 1.6 2.47 1.6 4.2 0 1.6-.6 3-1.8 4.2-1.2 1.07-2.73 1.6-4.6 1.6z" />
                </svg>
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
