import { ArrowRight } from "lucide-react";
import Link from "next/link";

const conditions = [
  {
    name: "Varicose Veins",
    href: "/conditions/varicose-veins",
    description: "Enlarged, twisted veins visible under the skin"
  },
  {
    name: "Spider Veins",
    href: "#",
    description: "Small, thin blood vessels visible on skin surface"
  },
  {
    name: "Deep Vein Reflux",
    href: "#",
    description: "Blood flowing backward in deep leg veins"
  },
  {
    name: "Venous Insufficiency",
    href: "#",
    description: "Poor blood return from legs to heart"
  },
  {
    name: "Leg Pain & Heaviness",
    href: "#",
    description: "Chronic discomfort and tired legs"
  },
  {
    name: "Non-healing Ulcers",
    href: "#",
    description: "Open wounds that don't heal properly"
  },
];

export default function ConditionsSection() {
  return (
    <section className="py-20 w-full bg-accent-light">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold mb-4 text-sm lg:text-base tracking-wider uppercase">
            Conditions We Treat
          </p>
          <h2 className="font-heading text-secondary text-3xl font-medium lg:text-4xl mb-4 leading-tight max-w-3xl mx-auto">
            Varicose veins aren&apos;t just cosmetic — they signal deeper circulation issues
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            We help you find specialized care for various vein conditions
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((condition) => (
            <Link
              key={condition.name}
              href={condition.href}
              className="bg-white p-6 rounded-2xl flex flex-col transition-all border-2 border-transparent hover:border-primary/30 cursor-pointer group"
            >
              <h3 className="font-heading font-semibold text-secondary text-xl mb-2 group-hover:text-primary transition-colors">
                {condition.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4 flex-grow">
                {condition.description}
              </p>
              <div className="flex items-center text-primary font-medium text-sm group-hover:gap-3 gap-2 transition-all">
                Learn more
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
