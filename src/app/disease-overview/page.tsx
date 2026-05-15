"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Search, ChevronRight, ArrowRight } from "lucide-react";

const conditions = [
  { href: "/conditions/varicose-veins", image: "/user/varicose veins.png", category: "Get started", title: "What are varicose veins" },
  { href: "/conditions/varicose-veins#causes", image: "/user/chronic venus insufficiency.png", category: "Get started", title: "Causes of varicose veins" },
  { href: "/treatments", image: "/user/deep vein reflux.png", category: "Treatment", title: "How is varicose vein treated" },
  { href: "/treatments/evlt", image: "/user/leg pain and heaviness.png", category: "Treatment", title: "Is laser treatment for varicose veins painful?" },
  { href: "/blog/when-to-see-doctor", image: "/user/swelling, skin changes, non-healing ulcers swelling, skin changes, non-healing ulcers.png", category: "Recovery", title: "How long does recovery take after vein treatment?" },
];

export default function ConditionsOverviewPage() {
  const [query, setQuery] = useState("");

  return (
    <main className="bg-background">

      {/* ── HERO ── */}
      <section className="w-full bg-accent overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[550px]">
          <div className="w-full lg:w-1/2 px-4 py-12 md:px-8 lg:px-16 xl:px-24 lg:py-16 flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto lg:mr-8">
              <h1 className="font-heading text-secondary text-3xl md:text-4xl lg:text-5xl font-normal mb-6 leading-tight">
                Browse Vein Conditions Reviewed by Experts
              </h1>
              <p className="text-gray-700 text-base lg:text-lg mb-6 leading-relaxed max-w-lg">
                Browse expert-reviewed guides on varicose veins, spider veins, chronic venous insufficiency, and more.
              </p>
              <div className="relative w-full max-w-lg mb-6">
                <input
                  type="text"
                  placeholder="Search conditions..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-xl py-3.5 pl-5 pr-12 text-base outline-none border border-gray-300 bg-white text-gray-800"
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              </div>
              <Link href="/conditions" className="bg-primary hover:bg-primary-dark text-white font-semibold text-sm md:text-base py-2.5 px-5 md:py-3 md:px-8 rounded-full flex items-center gap-2 transition-all duration-300 group cursor-pointer w-fit">
                Explore Conditions
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[350px] lg:h-auto relative">
            <Image src="/user/varicose veins.png" alt="Browse vein conditions" fill className="object-cover object-right" priority />
          </div>
        </div>
      </section>


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
      <section className="py-10 w-full bg-background">
        <div className="container mx-auto px-4 max-w-[900px]">
          <h2 className="font-heading text-secondary text-2xl font-bold mb-6">Explore by subtype</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-2">
            {[
              "Varicose Veins", "Spider Veins", "Chronic Venous Insufficiency",
              "Deep Vein Reflux", "Venous Leg Ulcers", "Post-Pregnancy Veins",
              "Leg Swelling", "Skin Darkening", "Superficial Thrombophlebitis",
              "Reticular Veins", "Pelvic Varicosities", "Venous Eczema",
              "Lipodermatosclerosis",
            ].map((subtype, i) => (
              <Link key={i} href="/conditions/varicose-veins" className="text-gray-600 text-sm hover:text-primary transition-colors py-0.5">
                {subtype}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
