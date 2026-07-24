import { MapPin, ArrowRight } from "lucide-react";
import Link from "@/compat/Link";

const cities = [
  "Hyderabad",
  "Bengaluru",
  "Chennai",
  "Kolkata",
  "Pune",
  "Vizag",
  "Vijayawada",
  "Ludhiana",
  "Kochi",
  "Ahmedabad",
];

export default function LocationsSection() {
  return (
    <section className="w-full py-14 md:py-20 bg-white">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          {/* Left: heading + city chips + CTA */}
          <div className="text-center lg:text-left">
            <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] text-primary">
              Our Clinics
            </p>
            <h2 className="mt-3 font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-secondary">
              Find the Best Vein Specialist{" "}
              <span className="whitespace-nowrap">Near You</span>
            </h2>
            <p className="mt-4 text-[15px] md:text-base leading-relaxed text-gray-600 max-w-xl mx-auto lg:mx-0">
              34 state-of-the-art clinics across India, with expert vein care close
              to where you live.
            </p>

            {/* City chips */}
            <div className="mt-7 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              {cities.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-1.5 rounded-full border border-black/5 bg-surface px-4 py-2 text-[14px] font-medium text-secondary transition-colors hover:bg-accent-light"
                >
                  <MapPin size={14} className="text-primary" />
                  {city}
                </span>
              ))}
            </div>

            <Link
              href="/clinics"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Explore All Clinics
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Right: map panel */}
          <div className="relative overflow-hidden rounded-xl bg-surface border border-black/5">
            <div className="px-6 pt-8 pb-4 md:px-10 md:pt-10">
              <img
                src="/india.svg"
                alt="Sira Vascular clinics across India"
                className="mx-auto h-[280px] w-auto md:h-[360px]"
                style={{
                  filter:
                    "invert(45%) sepia(25%) saturate(1500%) hue-rotate(130deg) brightness(95%) contrast(90%)",
                  opacity: 0.9,
                }}
              />
            </div>
            <div className="grid grid-cols-3 divide-x divide-black/5 border-t border-black/5 bg-white/60">
              <div className="px-4 py-4 text-center">
                <p className="font-heading text-[1.4rem] md:text-[1.7rem] leading-none text-primary font-semibold">
                  34+
                </p>
                <p className="mt-1 text-[12px] md:text-[13px] text-gray-600">
                  Clinics
                </p>
              </div>
              <div className="px-4 py-4 text-center">
                <p className="font-heading text-[1.4rem] md:text-[1.7rem] leading-none text-primary font-semibold">
                  10
                </p>
                <p className="mt-1 text-[12px] md:text-[13px] text-gray-600">
                  Cities
                </p>
              </div>
              <div className="px-4 py-4 text-center">
                <p className="font-heading text-[1.4rem] md:text-[1.7rem] leading-none text-primary font-semibold">
                  Pan-India
                </p>
                <p className="mt-1 text-[12px] md:text-[13px] text-gray-600">
                  Growing network
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
