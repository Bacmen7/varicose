import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    category: "Article",
    title: "Why varicose veins happen",
    image:
      "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
    desc: "Understand the underlying causes of venous insufficiency and how valve failure leads to varicose veins.",
    href: "/blog/why-varicose-veins-happen",
  },
  {
    category: "Guide",
    title: "Early warning signs",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
    desc: "Learn to spot the subtle symptoms like heaviness, aching, and swelling before visible veins appear.",
    href: "/blog/early-warning-signs",
  },
  {
    category: "Checklist",
    title: "When Should You See a Doctor for Varicose Veins?",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800",
    desc: "Knowing the red flags—such as skin changes or persistent pain—that indicate it's time for a professional evaluation.",
    href: "/blog/when-to-see-doctor",
  },
];

export default function KnowledgeCenterSection() {
  return (
    <section className="pt-12 pb-16 w-full bg-surface">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <h2 className="font-heading text-secondary text-3xl lg:text-4xl mb-4">
          Learn everything about varicose veins
        </h2>
        <p className="text-gray-600 text-lg mb-10 max-w-2xl">
          Simple articles and videos that help you understand symptoms, risks,
          prevention, and treatment options.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full border border-transparent hover:border-primary/20"
            >
              <div className="h-40 overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <p className="text-xs font-bold tracking-wider uppercase mb-2 text-primary">
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
          <button className="bg-primary hover:opacity-90 text-white font-semibold py-3 px-10 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer">
            Visit Knowledge Center
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
