import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const conditions = [
  {
    name: "Varicose Veins",
    href: "/conditions/varicose-veins",
    image: "/user/varicose vein.png",
  },
  {
    name: "Spider Veins",
    href: "/conditions/spider-veins",
    image: "/user/spider.png",
  },
  {
    name: "Deep Vein Reflux",
    href: "/conditions/deep-vein-reflux",
    image: "/user/deep.png",
  },
  {
    name: "Chronic Venous Insufficiency",
    href: "/conditions/chronic-venous-insufficiency",
    image: "/user/chronic.png",
  },
  {
    name: "Leg Pain & Heaviness",
    href: "/conditions/leg-pain-heaviness",
    image: "/user/legpain.png",
  },
  {
    name: "Swelling, Skin Changes, Non-healing Ulcers",
    href: "/conditions/swelling-skin-changes",
    image: "/user/swelling.png",
  },
];

export default function ConditionsSection() {
  return (
    <section className="py-16 md:py-24 w-full" style={{ backgroundColor: '#D6E6E5' }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="font-heading text-3xl md:text-[40px] md:leading-[48px] mb-4" style={{ color: '#026460' }}>
            Conditions We Treat
          </h2>
          <p className="text-lg leading-relaxed" style={{ color: '#48546B' }}>
            Varicose veins aren&apos;t just cosmetic — they signal deeper circulation issues. We help you find care for:
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {conditions.map((condition) => (
            <Link
              key={condition.name}
              href={condition.href}
              className="group bg-white rounded-2xl overflow-hidden"
            >
              <div className="aspect-[3/2] relative">
                <Image
                  src={condition.image}
                  alt={condition.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="font-heading text-[15px] text-secondary group-hover:text-primary transition-colors">
                  {condition.name}
                </span>
                <ArrowRight size={18} className="text-primary shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
