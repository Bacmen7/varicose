import { ArrowRight, Check } from "lucide-react";

const conditions = [
  "Varicose Veins",
  "Spider Veins",
  "Deep Vein Reflux",
  "Venous Insufficiency",
  "Leg Pain & Heaviness",
  "Non-healing Ulcers",
];

export default function ConditionsSection() {
  return (
    <section className="py-24 w-full bg-accent-light">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-heading text-secondary text-3xl font-medium lg:text-4xl mb-6 leading-tight">
              Varicose veins aren&apos;t just cosmetic — they signal deeper
              circulation issues.
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed font-medium">
              We help you find care for:
            </p>

            <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-all duration-300 group cursor-pointer shadow-md">
              Explore Conditions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Side: Conditions Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid sm:grid-cols-2 gap-4">
              {conditions.map((condition) => (
                <div
                  key={condition}
                  className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4 transition-all hover:shadow-md border border-transparent hover:border-accent-light"
                >
                  <div className="bg-accent-light p-1.5 rounded-full text-primary shrink-0">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="font-heading font-semibold text-secondary text-lg leading-snug">
                    {condition}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
