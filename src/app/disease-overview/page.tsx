"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";


const conditions = [
  {
    href: "/conditions/varicose-veins",
    image: "/user/varicose veins.png",
    category: "Get started",
    title: "What are varicose veins",
  },
  {
    href: "/conditions/varicose-veins#causes",
    image: "/user/chronic venus insufficiency.png",
    category: "Get started",
    title: "Causes of varicose veins",
  },
  {
    href: "/treatments",
    image: "/user/deep vein reflux.png",
    category: "Treatment",
    title: "How is varicose vein treated",
  },
  {
    href: "/treatments/evlt",
    image: "/user/leg pain and heaviness.png",
    category: "Treatment",
    title: "Is laser treatment for varicose veins painful?",
  },
  {
    href: "/blog/when-to-see-doctor",
    image: "/user/swelling, skin changes, non-healing ulcers swelling, skin changes, non-healing ulcers.png",
    category: "Recovery",
    title: "How long does recovery take after vein treatment?",
  },
];

export default function ConditionsOverviewPage() {
  const [query, setQuery] = useState("");
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((i) => (i === 0 ? conditions.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === conditions.length - 1 ? 0 : i + 1));

  return (
    <main className="bg-background">

      {/* ── HERO WITH SEARCH ── */}
      <section className="py-16 w-full" style={{ background: 'linear-gradient(135deg, #023936 0%, #2C847F 100%)' }}>
        <div className="container mx-auto px-4 max-w-[800px] text-center">
          <h1 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Browse vein conditions reviewed by experts
          </h1>
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-xl py-4 pl-6 pr-14 text-base outline-none"
              style={{ backgroundColor: 'rgba(255,255,255,0.18)', color: 'white', border: '1px solid rgba(255,255,255,0.25)' }}
            />
            <Search className="absolute right-5 top-1/2 -translate-y-1/2" size={20} style={{ color: 'rgba(255,255,255,0.7)' }} />
          </div>
        </div>
      </section>

      {/* ── FEATURED CAROUSEL ── */}
      {query === "" && (
        <section className="py-12 w-full bg-background">
          <div className="container mx-auto px-4 max-w-[800px]">
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '380px' }}>
              <Image
                src={conditions[current].image}
                alt={conditions[current].title}
                fill
                className="object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Prev */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all"
              >
                <ChevronLeft size={20} className="text-secondary" />
              </button>

              {/* Next */}
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-all"
              >
                <ChevronRight size={20} className="text-secondary" />
              </button>

              {/* Content overlay */}
              <Link href={conditions[current].href} className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-white/80 text-sm font-medium mb-1">{conditions[current].category}</p>
                <h2 className="font-heading text-white text-2xl md:text-3xl font-normal mb-4">
                  {conditions[current].title}
                </h2>
                {/* Dots */}
                <div className="flex gap-2">
                  {conditions.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => { e.preventDefault(); setCurrent(i); }}
                      className="w-2.5 h-2.5 rounded-full transition-all"
                      style={{ backgroundColor: i === current ? '#2C847F' : 'rgba(255,255,255,0.5)' }}
                    />
                  ))}
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}


      {/* ── EXPLORE BY CATEGORY ── */}
      <section className="py-12 w-full bg-background">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="bg-white rounded-2xl overflow-hidden" style={{ border: '1px solid #E5E7EB' }}>
            <div className="px-8 py-6" style={{ borderBottom: '1px solid #E5E7EB' }}>
              <h2 className="font-heading text-secondary text-3xl font-bold">Explore by category</h2>
            </div>
            {[
              { label: "Common subtypes & symptoms", href: "/conditions/varicose-veins" },
              { label: "Treatment options", href: "/treatments" },
              { label: "Vein health stats & science", href: "/blog/why-varicose-veins-happen" },
              { label: "Living with varicose veins", href: "/blog/early-warning-signs" },
              { label: "Related symptoms & conditions", href: "/blog/when-to-see-doctor" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="flex items-center justify-between px-8 py-6 hover:bg-gray-50 transition-colors group"
                style={{ borderBottom: '1px solid #E5E7EB' }}
              >
                <span className="font-heading text-xl" style={{ color: '#023936' }}>{item.label}</span>
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: '#EDEDF5' }}>
                  <ChevronRight size={18} style={{ color: '#6B6B9A' }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPLORE VIDEOS ── */}
      <section className="py-12 w-full bg-background">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <h2 className="font-heading text-secondary text-2xl md:text-3xl font-bold text-center mb-8">Explore videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { image: "/user/varicose veins.png", title: "What Are Varicose Veins? Causes, Symptoms & When To See A Doctor" },
              { image: "/user/deep vein reflux.png", title: "Spider Veins vs Varicose Veins — What's the difference?" },
              { image: "/user/leg pain and heaviness.png", title: "How to Recognise Venous Disease in Yourself or Others: Key Signs" },
            ].map((video, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer group flex flex-col">
                {/* Thumbnail — separate block, fixed height */}
                <div className="w-full h-48 relative overflow-hidden rounded-t-2xl flex-shrink-0">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                {/* Content below thumbnail */}
                <div className="p-5 flex flex-col gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full w-fit" style={{ backgroundColor: '#CCE0DF', color: '#026460' }}>
                    Video
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </span>
                  <h3 className="font-sans text-secondary text-base font-bold leading-snug line-clamp-2">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL PROCESS ── */}
      <section className="py-8 w-full bg-background">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="bg-white rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6" style={{ border: '1px solid #E5E7EB' }}>
            <div>
              <h3 className="font-heading text-secondary text-xl font-bold mb-2">Our Editorial Process</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Every piece of educational content we publish has been thoroughly reviewed by a member of{" "}
                <Link href="/about" className="text-primary font-medium hover:underline">Varya&apos;s Clinical Team</Link>.
              </p>
            </div>
            <Link href="/about" className="bg-primary hover:opacity-90 text-white font-semibold text-sm py-3 px-7 rounded-xl whitespace-nowrap transition-all shrink-0">
              Learn more
            </Link>
          </div>
        </div>
      </section>

      {/* ── EXPLORE BY SUBTYPE ── */}
      <section className="py-14 md:py-16 w-full" style={{ backgroundColor: '#F7F6F1' }}>
        <div className="container mx-auto px-4 max-w-[1120px]">
          <h2 className="font-heading text-[40px] leading-tight font-normal mb-9" style={{ color: '#16383A' }}>Explore by subtype</h2>
          <div className="flex flex-wrap gap-3 md:gap-x-4 md:gap-y-3">
            {[
              "Varicose Veins", "Spider Veins", "Chronic Venous Insufficiency",
              "Deep Vein Reflux", "Venous Leg Ulcers", "Post-Pregnancy Veins",
              "Leg Swelling", "Skin Darkening", "Superficial Thrombophlebitis",
              "Reticular Veins", "Pelvic Varicosities", "Venous Eczema",

            ].map((subtype, i) => (
              <Link
                key={i}
                href="/conditions/varicose-veins"
                className="inline-flex min-h-[54px] items-center gap-3 rounded-full border border-[#DDEBEA] bg-white px-6 text-[20px] font-normal leading-none text-[#244247] shadow-[0_1px_4px_rgba(22,56,58,0.04)] transition-all hover:border-primary hover:text-primary hover:shadow-[0_4px_14px_rgba(44,132,127,0.12)]"
              >
                <span className="h-2 w-2 rounded-full bg-[#9DE5D4]" aria-hidden="true" />
                <span>{subtype}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
