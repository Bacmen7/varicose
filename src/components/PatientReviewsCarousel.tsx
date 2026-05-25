"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";

const reviews = [
  {
    quote:
      "I had been ignoring my leg pain for almost three years. After just one consultation at Sira Vascular, I finally understood what was happening. The EVLT procedure was over in under an hour and I was back home the same day.",
    name: "Priya Verma",
    location: "Andheri, Mumbai",
    initials: "PV",
  },
  {
    quote:
      "I was nervous about surgery. Dr. Sharma explained everything clearly and suggested a minimally invasive option instead. No general anaesthesia, no hospital stay, and my legs feel completely different now.",
    name: "Rajan Khanna",
    location: "Thane, Maharashtra",
    initials: "RK",
  },
  {
    quote:
      "My varicose veins came back after my second pregnancy. The team at Sira Vascular was so understanding. They gave me all the time I needed to ask questions and I never felt rushed or confused.",
    name: "Sunita Mishra",
    location: "Borivali, Mumbai",
    initials: "SM",
  },
  {
    quote:
      "The consultation was calm and clear. I liked that the team explained the scan, the treatment options, and the expected recovery before asking me to decide.",
    name: "Amit Shah",
    location: "Ghatkopar, Mumbai",
    initials: "AS",
  },
  {
    quote:
      "I wanted a second opinion before going ahead with treatment. Sira Vascular gave honest guidance and helped me understand what was necessary and what could wait.",
    name: "Neha Rao",
    location: "Powai, Mumbai",
    initials: "NR",
  },
  {
    quote:
      "The cost was explained upfront and the appointment process was smooth. I felt supported from the first call to the follow-up after treatment.",
    name: "Mahesh Iyer",
    location: "Dadar, Mumbai",
    initials: "MI",
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

export default function PatientReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const visibleReviews = useMemo(
    () => [0, 1, 2].map((offset) => reviews[(current + offset) % reviews.length]),
    [current]
  );

  const prev = () => setCurrent((index) => (index === 0 ? reviews.length - 1 : index - 1));
  const next = () => setCurrent((index) => (index + 1) % reviews.length);

  return (
    <div>
      <div className="grid grid-cols-1 items-stretch md:grid-cols-3 gap-6">
        {visibleReviews.map((review) => (
          <div key={`${review.name}-${review.location}`} className="min-h-[390px] bg-white rounded-2xl p-6 border border-gray-200 flex h-full flex-col gap-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <GoogleIcon />
                <div>
                  <p className="text-secondary text-sm font-semibold leading-none">Google Review</p>
                  <p className="text-gray-400 text-xs mt-1">Verified patient feedback</p>
                </div>
              </div>
              <span className="rounded-full bg-accent-lighter px-3 py-1 text-xs font-semibold text-primary">5.0</span>
            </div>

            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, index) => (
                <svg key={index} width="17" height="17" viewBox="0 0 24 24" fill="#F59E0B" stroke="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-600 text-base leading-relaxed italic flex-1">{review.quote}</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0">
                <span className="text-primary font-semibold text-xs">{review.initials}</span>
              </div>
              <div>
                <p className="font-semibold text-secondary text-sm">{review.name}</p>
                <p className="text-gray-400 text-xs">{review.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-3">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous review"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white text-secondary transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronLeft size={22} strokeWidth={2} />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next review"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-gray-200 bg-white text-secondary transition-colors hover:border-primary hover:text-primary"
        >
          <ChevronRight size={22} strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
