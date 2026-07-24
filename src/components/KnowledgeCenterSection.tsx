import Image from "@/compat/Image";
import Link from "@/compat/Link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "Article",
    title: "Why Varicose veins happen",
    image: "/valve_reflux.png",
    desc: "Understand the underlying causes of venous insufficiency and how valve failure leads to Varicose veins.",
    href: "/blog/why-varicose-veins-happen",
  },
  {
    category: "Guide",
    title: "Early warning signs",
    image: "/i2.png",
    desc: "Learn to spot the subtle symptoms like heaviness, aching, and swelling before visible veins appear.",
    href: "/blog/early-warning-signs",
  },
  {
    category: "Checklist",
    title: "When Should You See a Doctor for Varicose Veins?",
    image: "/v2.png",
    desc: "Knowing the red flags, such as skin changes or persistent pain, that indicate it's time for a professional evaluation.",
    href: "/blog/when-to-see-doctor",
  },
];

export default function KnowledgeCenterSection() {
  return (
    <section className="py-14 md:py-20 w-full bg-surface relative">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
        <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-secondary mb-4">
          Learn everything about Varicose veins
        </h2>
        <p className="text-[15px] md:text-base leading-relaxed text-gray-600 mb-10 max-w-2xl">
          Simple articles and videos that help you understand symptoms, risks,
          prevention, and treatment options.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-white rounded-xl overflow-hidden transition-all duration-300 flex flex-col h-full border border-black/5 shadow-sm hover:shadow-md"
            >
              <div className="h-40 overflow-hidden relative rounded-t-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] mb-2 text-primary">
                  {item.category}
                </p>
                <h3 className="font-heading text-secondary text-xl font-medium mb-3 leading-snug group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-base leading-relaxed mb-4 flex-grow line-clamp-3">
                  {item.desc}
                </p>
                <span className="text-primary font-semibold text-sm flex items-center mt-auto cursor-pointer">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-primary text-white rounded-full px-6 py-3 text-[14px] font-semibold hover:bg-primary-dark transition-colors flex items-center gap-2 group cursor-pointer">
            Visit Knowledge Center
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
