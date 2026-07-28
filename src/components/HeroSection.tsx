import Image from "@/compat/Image";
import Link from "@/compat/Link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-accent-lighter">
      <div className="grid w-full grid-cols-1 items-stretch lg:grid-cols-2">
        {/* Left: copy + CTA */}
        <div className="flex flex-col justify-center px-5 py-12 md:px-10 lg:py-16 xl:pl-24 xl:pr-16">
          <div className="mx-auto w-full max-w-[600px] lg:mx-0 lg:ml-auto">
            <h1 className="font-heading text-[2.4rem] font-normal leading-[1.13] tracking-tight text-primary-dark sm:text-[3.1rem] lg:text-[3.6rem] xl:text-[3.9rem]">
              Relief from{" "}
              <span className="italic text-primary">Varicose Veins</span> starts
              here
            </h1>

            <p className="mt-7 max-w-[540px] text-[17px] leading-[1.8] text-gray-600">
              Heavy legs, swollen veins or pain after standing for long hours?
              Our vascular specialists offer advanced, minimally invasive
              treatments to help you find lasting relief and get back to your
              daily life with confidence.
            </p>

            <Link
              href="/book-consultation"
              className="group mt-8 inline-flex items-center gap-2.5 rounded-full py-2 pl-6 pr-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:brightness-105"
              style={{ backgroundColor: "#FF7A4D" }}
            >
              Book a Consultation
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight size={13} />
              </span>
            </Link>
          </div>
        </div>

        {/* Right: full-bleed photo */}
        <div className="relative h-[300px] w-full sm:h-[380px] lg:h-auto lg:min-h-[500px]">
          <Image
            src="/heor.png"
            alt="Patient with varicose vein symptoms in the legs"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
