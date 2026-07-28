"use client";

import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "@/compat/Image";
import Link from "@/compat/Link";

const conditions = [
  {
    badge: "Our primary focus",
    title: "Varicose Veins",
    image: "/user/varicose veins.png",
    desc: "Swollen, twisted veins visible on the legs. When the tiny valves inside veins stop working, blood pools and causes bulging, heaviness, and aching. Left untreated, they worsen over time.",
    chips: [
      "Leg heaviness",
      "Visible bulging veins",
      "Aching after standing",
      "Ankle swelling",
      "Night cramps",
    ],
    cta: "Learn about varicose veins",
    href: "/conditions?c=varicose-veins",
  },
  {
    badge: "Commonly misunderstood",
    title: "Spider Veins",
    image: "/user/spider vein.png",
    desc: "Fine red, blue, or purple thread-like veins just under the skin. Often dismissed as cosmetic, but they can signal early venous insufficiency and cause burning or itching, especially in warm weather.",
    chips: [
      "Visible red or blue threads",
      "Burning sensation",
      "Worse in summer heat",
      "Appears after pregnancy",
    ],
    cta: "Learn about spider veins",
    href: "/conditions?c=spider-veins",
  },
  {
    badge: "Often undiagnosed",
    title: "Chronic Venous Insufficiency",
    image: "/user/chronic venus insufficiency.png",
    desc: "When leg veins can no longer push blood back up to the heart efficiently. The result is persistent heaviness, swelling, and over time, skin darkening around the ankles. Very common in people with standing or desk jobs.",
    chips: [
      "Legs heavy by evening",
      "Ankle swelling daily",
      "Skin darkening",
      "Restless legs at night",
    ],
    cta: "Learn about CVI",
    href: "/conditions?c=chronic-venous-insufficiency",
  },
  {
    badge: "Know the warning signs",
    title: "DVT and Leg Swelling",
    image: "/user/deep vein reflux.png",
    desc: "Sudden one-sided leg swelling, warmth, or redness can signal a deep vein clot and needs urgent attention. We help patients understand when swelling is routine venous disease and when it requires immediate care.",
    chips: [
      "Sudden one-sided swelling",
      "Warmth or redness in calf",
      "Pain after long travel",
      "Unexplained leg heaviness",
    ],
    cta: "Learn about DVT and swelling",
    href: "/conditions?c=dvt-and-leg-swelling",
  },
  {
    badge: "Advanced stage care",
    title: "Swelling, Skin Changes and Ulcers",
    image: "/user/swelling.png",
    desc: "Long-standing vein disease can lead to darkened, hardened skin and slow-healing wounds near the ankle. These need specialist treatment of the underlying vein problem, not just wound dressing.",
    chips: [
      "Non-healing leg ulcers",
      "Hardened or itchy skin",
      "Persistent discolouration",
      "Recurring infections",
    ],
    cta: "Learn about vein ulcers",
    href: "/conditions?c=vein-ulcers",
  },
];

export default function ConditionsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((i) => (i === 0 ? conditions.length - 1 : i - 1));
  const next = () =>
    setCurrent((i) => (i === conditions.length - 1 ? 0 : i + 1));

  return (
    <section className="w-full bg-accent-light py-14 md:py-20">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
        {/* Header */}
        <div className="mb-10 text-center md:mb-12">
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary md:text-[13px]">
            CONDITIONS WE TREAT
          </p>
          <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-secondary">
            Expert care for vein
            <br className="hidden sm:block" />
            symptoms and conditions
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-gray-600 md:text-base">
            Varicose veins aren&apos;t just cosmetic. They signal deeper
            circulation issues. We help you find care for{" "}
            <span className="rounded-[3px] bg-primary px-2 py-0.5 font-semibold text-white">
              vein and circulation conditions
            </span>
            .
          </p>
        </div>

        {/* Condition slider */}
        <div className="relative mx-auto max-w-[1000px]">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {conditions.map((condition) => (
                <div
                  key={condition.title}
                  className="w-full shrink-0 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm md:grid md:grid-cols-[300px_minmax(0,1fr)]"
                >
                  {/* Image */}
                  <div className="relative h-52 md:h-auto md:min-h-[300px]">
                    <Image
                      src={condition.image}
                      alt={condition.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    <span className="inline-flex items-center gap-2 rounded-full bg-accent-lighter px-3 py-1 text-[12px] font-semibold text-primary">
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                      {condition.badge}
                    </span>

                    <h3 className="font-heading mt-3 text-2xl font-normal leading-snug text-secondary">
                      {condition.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                      {condition.desc}
                    </p>

                    {/* Symptom chips */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {condition.chips.map((chip) => (
                        <span
                          key={chip}
                          className="rounded-full bg-accent-light px-3 py-1.5 text-[13px] font-semibold text-primary"
                        >
                          {chip}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex justify-end">
                      <Link
                        href={condition.href}
                        className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                      >
                        {condition.cta}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls: arrows + dots */}
          <div className="mt-7 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous condition"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-md transition hover:bg-primary hover:text-white"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {conditions.map((condition, i) => (
                <button
                  key={condition.title}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to ${condition.title}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-primary" : "w-2 bg-primary/30"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              aria-label="Next condition"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary shadow-md transition hover:bg-primary hover:text-white"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* View all */}
        <div className="mt-8 text-center">
          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 border-b-2 border-primary/30 pb-1 text-sm font-semibold text-primary transition-colors hover:border-primary"
          >
            View all conditions we treat
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
