import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full bg-accent overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[550px]">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 px-4 py-12 md:px-8 lg:px-16 xl:px-24 lg:py-16 flex flex-col justify-center">
          <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto lg:mr-8">
            <h1 className="font-heading text-secondary text-3xl md:text-4xl lg:text-5xl font-normal mb-6 leading-tight">
              Relief From Varicose Veins Starts Here
            </h1>

            <p className="text-gray-700 text-base lg:text-lg mb-6 leading-relaxed max-w-lg">
              Find trusted vein specialists near you. Science-backed treatments.
              Modern care you can rely on.
            </p>

            <button className="bg-primary hover:bg-primary-dark text-white font-semibold text-sm md:text-base py-2.5 px-5 md:py-3 md:px-8 rounded-full flex items-center gap-2 transition-all duration-300 group cursor-pointer w-fit">
              Book a Consultation Today
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 h-[350px] lg:h-auto relative">
          <Image
            src="/hero.png"
            alt="Varicose vein treatment"
            fill
            className="object-cover object-left"
            priority
          />
        </div>
      </div>
    </section>
  );
}
