import { ArrowRight } from "lucide-react";
import Image from "@/compat/Image";
import Link from "@/compat/Link";

const symptoms = [
  "Leg heaviness",
  "Visible bulging veins",
  "Aching after standing",
  "Ankle swelling",
  "Night cramps",
];

export default function ConditionsSection() {
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

        {/* Featured condition card */}
        <div className="mx-auto max-w-[1000px] overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm md:grid md:grid-cols-[380px_minmax(0,1fr)]">
          {/* Image */}
          <div className="relative h-56 md:h-auto md:min-h-[360px]">
            <Image
              src="/user/varicose veins.png"
              alt="Varicose veins on a leg"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 380px"
            />
          </div>

          {/* Content */}
          <div className="p-6 md:p-9">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-lighter px-3 py-1 text-[12px] font-semibold text-primary">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Our primary focus
            </span>

            <h3 className="font-heading mt-4 text-2xl font-normal leading-snug text-secondary md:text-3xl">
              Varicose Veins
            </h3>

            <p className="mt-3 text-[15px] leading-relaxed text-gray-600 md:text-base">
              Varicose veins are swollen, twisted veins that appear on the legs
              when valves inside the veins stop working properly. Blood pools in
              the vein, causing visible bulging, heaviness, aching, swelling,
              and skin changes. Left untreated, they can affect comfort,
              mobility, and skin health over time.
            </p>

            {/* Symptom chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              {symptoms.map((symptom) => (
                <span
                  key={symptom}
                  className="rounded-full bg-accent-light px-3 py-1.5 text-[13px] font-semibold text-primary"
                >
                  {symptom}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/conditions/varicose-veins"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-primary-dark"
              >
                Learn about varicose veins
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/conditions"
                className="text-[14px] font-semibold text-primary underline-offset-4 hover:underline"
              >
                View all conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
