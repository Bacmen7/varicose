"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ArrowUpRight } from "lucide-react";

const filters = [
  "Featured",
  "Latest Research",
  "Specialist Insights",
  "Patient Journeys",
  "Women’s Vein Health",
];

const blogPosts = [
  {
    category: "Article",
    tag: "Latest Research",
    featured: true,
    title: "Why Varicose Veins Happen",
    desc: "Understand the underlying causes of venous insufficiency and how valve failure leads to varicose veins.",
    image: "/user/varicose veins.png",
    href: "/blog/why-varicose-veins-happen",
    readTime: "8 min read",
  },
  {
    category: "Guide",
    tag: "Specialist Insights",
    title: "Early Warning Signs",
    desc: "Learn to spot subtle symptoms like heaviness, aching, and swelling before visible veins appear.",
    image: "/user/leg pain and heaviness.png",
    href: "/blog/early-warning-signs",
    readTime: "5 min read",
  },
  {
    category: "Checklist",
    tag: "Specialist Insights",
    title: "When Should You See a Doctor for Varicose Veins?",
    desc: "The red flags — skin changes or persistent pain — that indicate it is time for a professional evaluation.",
    image: "/user/swelling, skin changes, non-healing ulcers swelling, skin changes, non-healing ulcers.png",
    href: "/blog/when-to-see-doctor",
    readTime: "4 min read",
  },
  {
    category: "Guide",
    tag: "Latest Research",
    title: "EVLT vs RFA — Which One Is Right for You?",
    desc: "Both use heat to close faulty veins in under an hour. A plain-language breakdown for patients.",
    image: "/user/deep vein reflux.png",
    href: "/treatments/evlt",
    readTime: "5 min read",
  },
  {
    category: "Article",
    tag: "Patient Journeys",
    title: "What to Expect in the Week After Treatment",
    desc: "Bruising, tightness, and that cord-like feeling along the treated vein — what is normal and what is not.",
    image: "/user/chronic venus insufficiency.png",
    href: "/blog/when-to-see-doctor",
    readTime: "4 min read",
  },
  {
    category: "Article",
    tag: "Women’s Vein Health",
    title: "Varicose Veins During and After Pregnancy",
    desc: "Hormones, weight, and posture all play a role. Here is when veins improve on their own — and when they do not.",
    image: "/user/spider vein.png",
    href: "/blog/early-warning-signs",
    readTime: "6 min read",
  },
];

export default function BlogOverviewPage() {
  const [activeFilter, setActiveFilter] = useState("Featured");

  const filtered = activeFilter === "Featured"
    ? blogPosts.filter((p) => p.featured)
    : blogPosts.filter((p) => p.tag === activeFilter);

  return (
    <main className="bg-background">

      {/* ── HERO ── */}
      <section className="w-full bg-surface py-16 lg:py-20">
        <div className="container mx-auto max-w-[1200px]">
          <div className="max-w-2xl">
            <p className="text-primary font-semibold mb-4 text-sm tracking-wider uppercase">
              Vein Health Blog
            </p>
            <h1 className="font-heading text-secondary text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.1] font-normal mb-6">
              Learn everything about varicose veins
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Simple articles and guides written for patients, not doctors. Understand symptoms, treatments, and how to take care of your vein health.
            </p>
          </div>
        </div>
      </section>

      {/* ── FILTER + ARTICLES ── */}
      <section className="py-12 md:py-16 w-full bg-background">
        <div className="container mx-auto px-4 max-w-[1200px]">

          {/* Filter pills */}
          <div className="mb-10 flex items-center gap-4 overflow-x-auto border-b border-accent px-4 pb-8 [-ms-overflow-style:none] [scrollbar-width:none] sm:px-0 [&::-webkit-scrollbar]:hidden">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`shrink-0 rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                  activeFilter === f
                    ? "border-primary bg-primary text-white"
                    : "border-accent bg-white text-secondary hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Article cards */}
          <div className="mx-auto flex max-w-[900px] flex-col gap-5 px-0">
            {filtered.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="group grid overflow-hidden rounded-2xl border border-primary/35 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:shadow-[0_10px_28px_rgba(44,132,127,0.10)] sm:grid-cols-[190px_1fr]"
              >
                <div className="relative min-h-[150px] overflow-hidden bg-accent-light">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/10 transition-colors group-hover:bg-primary/0" />
                </div>

                <div className="flex flex-col justify-center px-6 py-5 sm:px-7">
                  {item.featured && (
                    <span className="mb-2 w-fit rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      Featured
                    </span>
                  )}
                  <h3 className="font-heading text-[22px] font-normal leading-snug text-secondary transition-colors group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[570px] text-sm leading-6 text-gray-600">
                    {item.desc}
                  </p>
                  <span className="mt-4 flex items-center gap-1 text-xs font-semibold text-gray-400">
                    {item.readTime}
                    <ArrowUpRight className="size-3.5 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Load more */}
          <div className="flex justify-center mt-12">
            <button className="bg-primary hover:opacity-90 text-white font-semibold py-3 px-10 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer">
              Load more articles
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
