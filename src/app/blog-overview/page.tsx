"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ArrowRight, Search } from "lucide-react";

const filters = ["All", "About the condition", "Treatment options", "After treatment", "Staying well", "Patient stories", "During pregnancy"];

const blogPosts = [
  {
    category: "Article",
    tag: "About the condition",
    title: "Why Varicose Veins Happen",
    desc: "Understand the underlying causes of venous insufficiency and how valve failure leads to varicose veins.",
    image: "/user/varicose veins.png",
    href: "/blog/why-varicose-veins-happen",
    readTime: "8 min read",
  },
  {
    category: "Guide",
    tag: "About the condition",
    title: "Early Warning Signs",
    desc: "Learn to spot subtle symptoms like heaviness, aching, and swelling before visible veins appear.",
    image: "/user/leg pain and heaviness.png",
    href: "/blog/early-warning-signs",
    readTime: "5 min read",
  },
  {
    category: "Checklist",
    tag: "About the condition",
    title: "When Should You See a Doctor for Varicose Veins?",
    desc: "The red flags — skin changes or persistent pain — that indicate it is time for a professional evaluation.",
    image: "/user/swelling, skin changes, non-healing ulcers swelling, skin changes, non-healing ulcers.png",
    href: "/blog/when-to-see-doctor",
    readTime: "4 min read",
  },
  {
    category: "Guide",
    tag: "Treatment options",
    title: "EVLT vs RFA — Which One Is Right for You?",
    desc: "Both use heat to close faulty veins in under an hour. A plain-language breakdown for patients.",
    image: "/user/deep vein reflux.png",
    href: "/treatments/evlt",
    readTime: "5 min read",
  },
  {
    category: "Article",
    tag: "After treatment",
    title: "What to Expect in the Week After Treatment",
    desc: "Bruising, tightness, and that cord-like feeling along the treated vein — what is normal and what is not.",
    image: "/user/chronic venus insufficiency.png",
    href: "/blog/when-to-see-doctor",
    readTime: "4 min read",
  },
  {
    category: "Article",
    tag: "During pregnancy",
    title: "Varicose Veins During and After Pregnancy",
    desc: "Hormones, weight, and posture all play a role. Here is when veins improve on their own — and when they do not.",
    image: "/user/spider vein.png",
    href: "/blog/early-warning-signs",
    readTime: "6 min read",
  },
];

export default function BlogOverviewPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.tag === activeFilter);

  return (
    <main className="bg-background">

      {/* ── HERO ── */}
      <section className="w-full bg-accent overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[550px]">
          <div className="w-full lg:w-1/2 px-4 py-12 md:px-8 lg:px-16 xl:px-24 lg:py-16 flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto lg:mr-8">
              <h1 className="font-heading text-secondary text-3xl md:text-4xl lg:text-5xl font-normal mb-6 leading-tight">
                Learn Everything About Varicose Veins
              </h1>
              <p className="text-gray-700 text-base lg:text-lg mb-6 leading-relaxed max-w-lg">
                Simple articles and guides written for patients. Understand symptoms, treatments, and how to take care of your vein health.
              </p>
              <Link href="#articles" className="bg-primary hover:bg-primary-dark text-white font-semibold text-sm md:text-base py-2.5 px-5 md:py-3 md:px-8 rounded-full flex items-center gap-2 transition-all duration-300 group cursor-pointer w-fit">
                Browse All Articles
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[350px] lg:h-auto relative">
            <Image src="/user/varicose veins.png" alt="Learn about varicose veins" fill className="object-cover object-right" priority />
          </div>
        </div>
      </section>

      {/* ── FILTER + ARTICLES ── */}
      <section id="articles" className="py-12 md:py-16 w-full bg-background">
        <div className="container mx-auto px-4 max-w-[1200px]">

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="text-sm font-semibold px-5 py-2 rounded-full border-2 transition-all duration-200"
                style={{
                  borderColor: activeFilter === f ? '#2C847F' : '#E5E7EB',
                  backgroundColor: activeFilter === f ? '#2C847F' : 'transparent',
                  color: activeFilter === f ? 'white' : '#6B7280',
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Cards grid — exactly like KnowledgeCenterSection */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full border border-transparent hover:border-primary/20"
              >
                <div className="h-44 overflow-hidden relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-xs font-bold tracking-wider uppercase text-primary">{item.category}</p>
                    <span className="text-xs text-gray-400">{item.readTime}</span>
                  </div>
                  <h3 className="font-heading text-secondary text-xl font-normal mb-3 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-4 flex-grow line-clamp-3">
                    {item.desc}
                  </p>
                  <span className="text-primary font-semibold text-sm flex items-center mt-auto">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Load more */}
          <div className="flex justify-center mt-12">
            <button className="bg-primary hover:opacity-90 text-white font-semibold py-3 px-10 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer">
              Load more articles
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 w-full bg-surface">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase text-center">Varya Health — Vein Care in India</p>
          <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal text-center mb-12">Trusted by patients across India</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { num: "12,000+", label: "Patients educated through our guides" },
              { num: "6", label: "Vein conditions covered" },
              { num: "6", label: "Minimally invasive treatment options" },
            ].map((s, i) => (
              <div key={i} className="p-8 text-center">
                <span className="font-heading text-primary font-normal block mb-2" style={{ fontSize: 'clamp(40px, 5vw, 60px)', lineHeight: '1' }}>{s.num}</span>
                <span className="text-gray-500 text-base">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
