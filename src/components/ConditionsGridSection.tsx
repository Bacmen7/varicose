import Link from "next/link";
import Image from "next/image";

const conditions = [
  { name: "Varicose Veins", image: "/user/varicose veins.png", href: "/conditions/varicose-veins" },
  { name: "Spider Veins", image: "/user/spider vein.png", href: "/conditions" },
  { name: "Deep Vein Reflux", image: "/user/deep vein reflux.png", href: "/conditions" },
  { name: "Chronic Venous Insufficiency", image: "/user/chronic venus insufficiency.png", href: "/conditions" },
  { name: "Leg Pain & Heaviness", image: "/user/leg pain and heaviness.png", href: "/conditions" },
  { name: "Swelling & Skin Changes", image: "/user/swelling, skin changes, non-healing ulcers swelling, skin changes, non-healing ulcers.png", href: "/conditions" },
];

export default function ConditionsGridSection() {
  return (
    <section className="py-20 md:py-28 bg-background relative pb-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="font-heading text-[2.2rem] md:text-[2.8rem] leading-[1.08] tracking-[-0.5px] text-secondary mb-4">
            Expert care for all vein conditions
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            From visible varicose veins to complex venous insufficiency, we diagnose and treat all vein-related conditions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {conditions.map((c) => (
            <Link
              key={c.name}
              href={c.href}
              className="bg-white rounded-2xl py-8 px-5 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow cursor-pointer border border-transparent hover:border-primary/20"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center relative">
                <Image
                  src={c.image}
                  alt={c.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-secondary leading-snug">{c.name}</p>
            </Link>
          ))}
        </div>
      </div>

      <svg className="absolute -bottom-px left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
        <path d="M0 30C240 62 480 62 720 30C960 -2 1200 -2 1440 30V60H0V30Z" fill="#FFFFFF" />
      </svg>
    </section>
  );
}
