import Image from "@/compat/Image";
import Link from "@/compat/Link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-primary">
      {/* Concentric rings behind the photo */}
      <svg
        className="pointer-events-none absolute -right-24 bottom-[-120px] hidden w-[620px] opacity-[0.12] lg:block"
        viewBox="0 0 600 600"
        fill="none"
      >
        <circle cx="300" cy="300" r="299" stroke="white" strokeWidth="1.5" />
        <circle cx="300" cy="300" r="235" stroke="white" strokeWidth="1.5" />
        <circle cx="300" cy="300" r="170" stroke="white" strokeWidth="1.5" />
      </svg>

      <div className="relative z-10 mx-auto grid w-full max-w-[1320px] grid-cols-1 items-stretch gap-0 px-5 md:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Left: copy + CTAs + trust */}
        <div className="flex flex-col items-center pt-11 pb-4 text-center md:pt-14 lg:items-start lg:justify-center lg:py-20 lg:pr-6 lg:text-left">
          <h1 className="max-w-[580px] font-heading text-[2.1rem] font-light leading-[1.17] tracking-tight text-white sm:text-[2.7rem] lg:max-w-none lg:text-[3.2rem] xl:text-[3.5rem]">
            Say goodbye to{" "}
            <span className="whitespace-nowrap italic" style={{ color: "#CCE0DF" }}>
              Varicose Veins
            </span>
            , without major surgery
          </h1>

          <p className="mt-5 max-w-[540px] text-[15px] leading-relaxed text-white/85 sm:text-[17px]">
            Pain, swelling, or visible veins? Get science-backed, minimally
            invasive treatment from expert vein specialists — walk in, walk
            out, most procedures take under an hour.
          </p>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              href="/book-appointment"
              className="group inline-flex items-center gap-2.5 rounded-full py-3 pl-6 pr-4 text-[14px] font-bold tracking-wide text-white shadow-lg transition-all duration-300 hover:brightness-105"
              style={{ backgroundColor: "#FF8968" }}
            >
              Book a Consultation
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={15} />
              </span>
            </Link>
            <Link
              href="/treatments-overview"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-3 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-white/10"
            >
              Explore Treatments
            </Link>
          </div>

        </div>

        {/* Right: photo anchored to the bottom edge */}
        <div className="relative flex items-end justify-center lg:justify-end">
          {/* Soft platform glow behind the couple */}
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 h-[78%] w-[92%] -translate-x-1/2 rounded-t-full"
            style={{
              background:
                "radial-gradient(ellipse at bottom, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0.05) 55%, rgba(255,255,255,0) 100%)",
            }}
          />

          <div className="relative h-[340px] w-full max-w-[580px] sm:h-[420px] lg:h-[545px] lg:max-w-[690px]">
            <Image
              src="/h1.png"
              alt="Happy patients after varicose vein treatment"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
      <svg className="pointer-events-none absolute -bottom-px left-0 block w-full" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none" aria-hidden="true">
        <path d="M0 30C240 62 480 62 720 30C960 -2 1200 -2 1440 30V60H0V30Z" fill="#F9F9F9" />
      </svg>
    </section>
  );
}
