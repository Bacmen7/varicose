import { useRef, useEffect, useCallback } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    quote:
      "I had been ignoring my leg pain for almost three years. After just one consultation at Sira Vascular, I finally understood what was happening. The EVLT procedure was over in under an hour and I was back home the same day.",
    name: "Priya Verma",
    location: "Andheri, Mumbai",
  },
  {
    quote:
      "I was nervous about surgery. Dr. Sharma explained everything clearly and suggested a minimally invasive option instead. No general anaesthesia, no hospital stay, and my legs feel completely different now.",
    name: "Rajan Khanna",
    location: "Thane, Maharashtra",
  },
  {
    quote:
      "My varicose veins came back after my second pregnancy. The team at Sira Vascular was so understanding. They gave me all the time I needed to ask questions and I never felt rushed or confused.",
    name: "Sunita Mishra",
    location: "Borivali, Mumbai",
  },
  {
    quote:
      "The consultation was calm and clear. I liked that the team explained the scan, the treatment options, and the expected recovery before asking me to decide.",
    name: "Amit Shah",
    location: "Ghatkopar, Mumbai",
  },
  {
    quote:
      "I wanted a second opinion before going ahead with treatment. Sira Vascular gave honest guidance and helped me understand what was necessary and what could wait.",
    name: "Neha Rao",
    location: "Powai, Mumbai",
  },
  {
    quote:
      "The cost was explained upfront and the appointment process was smooth. I felt supported from the first call to the follow-up after treatment.",
    name: "Mahesh Iyer",
    location: "Dadar, Mumbai",
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

export default function PatientReviewsCarousel() {
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
    <div
      className="relative font-body"
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
                    .join("")}
                </span>
                <div>
                  <p className="text-[15px] font-semibold leading-tight text-secondary">
                    {r.name}
                  </p>
                  <p className="mt-0.5 text-[13px] leading-tight text-gray-500">
                    {r.location}
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
  );
}
