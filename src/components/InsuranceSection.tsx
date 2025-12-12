import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "Check coverage",
  "Understand procedure costs",
  "Get documentation needed for claims",
];

export default function InsuranceSection() {
  return (
    <section className="w-full bg-accent-light">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24">
          {/* Left: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center py-24">
            <h2 className="font-heading text-secondary text-3xl lg:text-4xl mb-6">
              Insurance support made easy
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Most modern vein treatments are covered under many insurance plans
              when medically indicated. We help you:
            </p>

            <div className="space-y-4 mb-10">
              {benefits.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="bg-white p-1 rounded-full text-primary">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="font-heading text-secondary font-medium text-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <button className="bg-primary hover:opacity-90 text-white font-semibold py-3 px-10 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer">
                See Pricing & Insurance
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-0">
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
                alt="Insurance Support"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
