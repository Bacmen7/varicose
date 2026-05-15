"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { ChevronLeft, ChevronRight, ArrowUpRight, Search } from "lucide-react";

// ── HERO SLIDES ──────────────────────────────────────────────────────────────
const slides = [
  {
    id: 0,
    heading: "Struggling with Pain, Heaviness, or Swelling in Your Legs?",
    image: "/user/varicose veins.png",
  },
  {
    id: 1,
    heading: "Your path to healthier veins starts here",
    image: "/user/chronic venus insufficiency.png",
  },
  {
    id: 2,
    heading: "Advanced care for venous conditions",
    image: "/user/deep vein reflux.png",
  },
];

// ── CONDITIONS DATA ───────────────────────────────────────────────────────────
const conditionsData = [
  {
    id: 0,
    title: "Varicose Veins",
    description:
      "Varicose veins are enlarged, twisted veins that appear on the legs and feet. They occur when the one-way valves inside veins weaken or fail, causing blood to pool and pressure to build inside the vein.",
    url: "/conditions/varicose-veins",
    image: "/user/varicose veins.png",
    videoThumb: "/user/varicose veins.png",
    videoTitle: "Videos on Varicose Veins",
    articleThumb: "/user/chronic venus insufficiency.png",
    articleTitle: "Articles on Varicose Veins",
  },
  {
    id: 1,
    title: "Spider Veins",
    description:
      "Spider veins are small, dilated blood vessels visible near the skin surface. They appear as red or blue web-like patterns, typically on legs or face. While generally not painful, they can indicate underlying venous insufficiency.",
    url: "/conditions/varicose-veins",
    image: "/user/deep vein reflux.png",
    videoThumb: "/user/deep vein reflux.png",
    videoTitle: "Videos on Spider Veins",
    articleThumb: "/user/leg pain and heaviness.png",
    articleTitle: "Articles on Spider Veins",
  },
  {
    id: 2,
    title: "Chronic Venous Insufficiency",
    description:
      "Chronic venous insufficiency (CVI) occurs when leg veins don't allow blood to flow back up to the heart efficiently. This leads to blood pooling in the legs, causing swelling, pain, and skin changes over time.",
    url: "/conditions/varicose-veins",
    image: "/user/chronic venus insufficiency.png",
    videoThumb: "/user/chronic venus insufficiency.png",
    videoTitle: "Videos on Chronic Venous Insufficiency",
    articleThumb: null,
    articleTitle: "",
  },
  {
    id: 3,
    title: "Deep Vein Reflux",
    description:
      "Deep vein reflux is a condition where the valves in the deep veins of the leg fail, causing blood to flow backward. It is a significant cause of chronic venous disease and can lead to serious complications if untreated.",
    url: "/conditions/varicose-veins",
    image: "/user/deep vein reflux.png",
    videoThumb: "/user/deep vein reflux.png",
    videoTitle: "Videos on Deep Vein Reflux",
    articleThumb: "/user/varicose veins.png",
    articleTitle: "Articles on Deep Vein Reflux",
  },
  {
    id: 4,
    title: "Venous Leg Ulcers",
    description:
      "Venous leg ulcers are open wounds that develop when chronic venous insufficiency causes pressure to build in the leg veins. They are typically found near the ankle and require specialized wound care alongside venous treatment.",
    url: "/conditions/varicose-veins",
    image: "/user/swelling, skin changes, non-healing ulcers swelling, skin changes, non-healing ulcers.png",
    videoThumb: "/user/swelling, skin changes, non-healing ulcers swelling, skin changes, non-healing ulcers.png",
    videoTitle: "Videos on Venous Leg Ulcers",
    articleThumb: null,
    articleTitle: "",
  },
  {
    id: 5,
    title: "Leg Swelling & Heaviness",
    description:
      "Persistent leg swelling and heaviness are common signs of venous disease. Blood pooling in the lower extremities causes fluid to leak into surrounding tissue, resulting in edema that worsens throughout the day.",
    url: "/conditions/varicose-veins",
    image: "/user/leg pain and heaviness.png",
    videoThumb: "/user/leg pain and heaviness.png",
    videoTitle: "Videos on Leg Swelling",
    articleThumb: "/user/chronic venus insufficiency.png",
    articleTitle: "Articles on Leg Swelling",
  },
];

// ── SCROLLABLE CONDITION CARDS ────────────────────────────────────────────────
const conditionCards = [
  { name: "Varicose Veins", image: "/user/varicose veins.png" },
  { name: "Spider Veins", image: "/user/deep vein reflux.png" },
  { name: "Chronic Venous Insufficiency", image: "/user/chronic venus insufficiency.png" },
  { name: "Deep Vein Reflux", image: "/user/deep vein reflux.png" },
  { name: "Venous Leg Ulcers", image: "/user/swelling, skin changes, non-healing ulcers swelling, skin changes, non-healing ulcers.png" },
  { name: "Leg Swelling", image: "/user/leg pain and heaviness.png" },
  { name: "Skin Darkening", image: "/user/varicose veins.png" },
  { name: "Post-Pregnancy Veins", image: "/user/chronic venus insufficiency.png" },
];

export default function ConditionsOverviewPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [query, setQuery] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabContainerRef = useRef<HTMLDivElement>(null);

  const tripled = [...conditionCards, ...conditionCards, ...conditionCards];

  const scrollCarousel = (direction: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: direction === "left" ? -400 : 400, behavior: "smooth" });
  };

  const handleTabScrollLeft = () => tabContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  const handleTabScrollRight = () => tabContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });

  const handleTabClick = (index: number, e: React.MouseEvent<HTMLButtonElement>) => {
    setActiveTab(index);
    e.currentTarget.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  };

  const prevSlide = () => setCurrentSlide((i) => (i === 0 ? slides.length - 1 : i - 1));
  const nextSlide = () => setCurrentSlide((i) => (i === slides.length - 1 ? 0 : i + 1));

  return (
    <main className="bg-background">

      {/* ══ ZONE 1: HERO ══════════════════════════════════════════════════════ */}
      <section style={{ padding: "0.5rem 1rem 2rem" }}>
        <div
          className="w-full rounded-[1.5rem] md:rounded-[2rem] relative overflow-hidden flex flex-col min-h-[75vh] md:min-h-[calc(100vh-7rem)] lg:min-h-[620px]"
          style={{ background: "linear-gradient(135deg, #023936 0%, #2C847F 100%)" }}
        >
          {/* Abstract bg patterns */}
          <div className="absolute top-0 right-0 opacity-15 pointer-events-none">
            <svg width="400" height="400" viewBox="0 0 300 300" fill="none" className="w-[200px] md:w-[400px]">
              <path d="M150 0H300V150C300 67.1573 232.843 0 150 0Z" fill="white" fillOpacity="0.3" />
              <path d="M150 150H0V300C0 217.157 67.1573 150 150 150Z" fill="white" fillOpacity="0.3" />
              <path d="M150 150H300V300C300 217.157 232.843 150 150 150Z" fill="white" fillOpacity="0.1" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 opacity-15 pointer-events-none rotate-180 transform translate-x-8 translate-y-8 md:translate-x-12 md:translate-y-12">
            <svg width="350" height="350" viewBox="0 0 300 300" fill="none" className="w-[150px] md:w-[350px]">
              <path d="M150 0H300V150C300 67.1573 232.843 0 150 0Z" fill="white" fillOpacity="0.3" />
              <path d="M150 150H0V300C0 217.157 67.1573 150 150 150Z" fill="white" fillOpacity="0.3" />
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10 px-5 py-8 md:px-[2.68rem] lg:px-[4rem] md:py-[3.18rem] flex flex-col lg:flex-row justify-between items-start gap-4 md:gap-8 lg:gap-24 w-full h-full flex-grow pb-[280px] md:pb-[3.18rem]">
            {/* Left: heading + search + CTA */}
            <div className="flex flex-col items-start max-w-3xl w-full pt-2 lg:pt-4">
              <div className="relative w-full h-[150px] sm:h-[180px] md:h-[280px] lg:h-[320px] max-w-[900px]">
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute top-0 left-0 w-full transition-all duration-[800ms] ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 translate-y-6 pointer-events-none"
                    }`}
                  >
                    <h1
                      className="text-[2.2rem] leading-[1.2] sm:text-4xl md:text-[3.8rem] lg:text-[4.2rem] md:leading-[1.1] tracking-tight font-bold"
                      style={{ color: "#ffffff" }}
                    >
                      {slide.heading}
                    </h1>
                  </div>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full max-w-lg mt-4 md:mt-6 z-20">
                <input
                  type="text"
                  placeholder="Search conditions..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full rounded-xl py-3.5 pl-5 pr-12 text-base outline-none"
                  style={{ backgroundColor: "rgba(255,255,255,0.18)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}
                />
                <Search className="absolute right-4 top-1/2 -translate-y-1/2" size={18} style={{ color: "rgba(255,255,255,0.7)" }} />
              </div>

              {/* CTA button */}
              <Link
                href="/conditions/varicose-veins"
                className="inline-flex mt-6 md:mt-8 items-center gap-2.5 text-white pl-7 pr-5 py-3.5 rounded-full font-bold text-[15px] tracking-wide transition-all duration-300 hover:opacity-90 group shadow-sm z-20"
                style={{ backgroundColor: "#026460" }}
              >
                Explore Conditions
                <span className="w-6 h-6 rounded-full bg-white/20 inline-flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ChevronRight size={16} />
                </span>
              </Link>
            </div>

            {/* Right: subtitle text (desktop) */}
            <div className="hidden lg:block w-full max-w-[520px] lg:mt-16 xl:mt-20 relative z-20 lg:mr-4 xl:mr-8 pr-4">
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "20px", lineHeight: 1.6 }}>
                Diagnosed with varicose veins, chronic venous insufficiency, or leg swelling? Browse expert-reviewed condition guides and find the right care.
              </p>
            </div>
          </div>

          {/* Right edge image */}
          <div className="absolute bottom-0 -right-4 sm:-right-2 md:right-4 lg:right-8 w-[240px] h-[280px] sm:w-[300px] sm:h-[350px] md:w-[380px] md:h-[450px] lg:w-[400px] lg:h-[480px] z-10 overflow-hidden pointer-events-none">
            {slides.map((slide, index) => (
              <div
                key={`img-${slide.id}`}
                className={`absolute bottom-0 right-0 w-full h-full transition-all duration-[800ms] ease-out ${
                  index === currentSlide ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12 pointer-events-none"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.heading}
                  fill
                  className="object-contain object-bottom"
                />
              </div>
            ))}
          </div>

          {/* Slide progress bars */}
          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-[2.68rem] flex gap-3 md:gap-4 z-30">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group relative h-[3px] w-12 sm:w-16 md:w-24 bg-white/30 rounded-full overflow-hidden cursor-pointer"
                style={{ border: "none", padding: 0 }}
              >
                <div
                  className={`absolute top-0 left-0 h-full bg-white rounded-full ${index === currentSlide ? "w-full" : "w-0"}`}
                  style={{ transition: index === currentSlide ? "width 4500ms linear" : "none" }}
                />
              </button>
            ))}
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center z-20 transition-all"
          >
            <ChevronLeft size={20} className="text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center z-20 transition-all md:hidden"
          >
            <ChevronRight size={20} className="text-white" />
          </button>
        </div>
      </section>

      {/* ══ ZONE 2: CONDITION CARDS CAROUSEL ══════════════════════════════════ */}
      <section className="overflow-hidden" style={{ backgroundColor: "#e8f4f2" }}>

        {/* Mobile */}
        <div className="block md:hidden">
          <div className="px-5 pt-12 pb-8 text-center">
            <h2 className="font-heading text-secondary text-[1.85rem] leading-[1.15] font-bold mb-4">
              Expert care for all venous conditions
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              From varicose veins to complex venous insufficiency, we diagnose and treat{" "}
              <strong className="bg-primary text-white px-2 py-0.5 rounded font-semibold">venous and vascular conditions</strong>.
            </p>
          </div>
          <div
            className="flex gap-3 overflow-x-auto px-4 pb-8"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" } as React.CSSProperties}
          >
            {conditionCards.map((c) => (
              <div key={c.name} className="flex-shrink-0 flex flex-col items-center" style={{ width: "155px" }}>
                <div className="w-full overflow-hidden" style={{ height: "210px", borderRadius: "14px" }}>
                  <Image src={c.image} alt={c.name} width={155} height={210} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs font-bold text-secondary mt-2 text-center leading-tight">{c.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:block" style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
          <div className="max-w-7xl mx-auto px-6 text-center" style={{ marginBottom: "3.5rem" }}>
            <h2 className="font-heading text-secondary font-bold mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
              Expert care for all venous
              <br />
              conditions and symptoms
            </h2>
            <p className="text-gray-600 text-base leading-relaxed max-w-xl mx-auto">
              From varicose veins to complex venous insufficiency, we diagnose and treat{" "}
              <strong className="bg-primary text-white px-2 py-0.5 rounded font-semibold">venous and vascular conditions</strong>.
            </p>
          </div>

          <div className="relative">
            <button
              onClick={() => scrollCarousel("left")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
              style={{ border: "2px solid #2C847F", backgroundColor: "transparent" }}
            >
              <ChevronLeft className="w-5 h-5" style={{ color: "#2C847F" }} />
            </button>

            <button
              onClick={() => scrollCarousel("right")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/10 transition-colors"
              style={{ border: "2px solid #2C847F", backgroundColor: "transparent" }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: "#2C847F" }} />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto px-12"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", scrollBehavior: "smooth" } as React.CSSProperties}
            >
              {tripled.map((c, i) => (
                <div
                  key={`${c.name}-${i}`}
                  className="flex-shrink-0 flex flex-col items-center cursor-pointer group"
                  style={{ width: "272px", padding: "0 14px" }}
                >
                  <div className="w-full overflow-hidden" style={{ height: "340px", borderRadius: "20px" }}>
                    <Image
                      src={c.image}
                      alt={c.name}
                      width={244}
                      height={340}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="w-full text-center font-semibold text-secondary mt-4 leading-tight px-1" style={{ fontSize: "16px" }}>
                    {c.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ ZONE 3: KNOW YOUR CONDITION (TABBED) ══════════════════════════════ */}
      <section style={{ backgroundColor: "#f0f8f7", padding: "3rem 0 5rem" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-0">

          {/* Header */}
          <div className="text-center" style={{ marginBottom: "3rem" }}>
            <h2 className="font-heading font-bold text-secondary" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
              Know your <span className="text-primary">condition</span>
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex items-center justify-center w-full" style={{ marginBottom: "2.5rem" }}>
            <button
              onClick={handleTabScrollLeft}
              className="hidden md:flex shrink-0 items-center justify-center rounded-full border transition-colors"
              style={{ width: "40px", height: "40px", borderColor: "rgba(2,100,96,0.3)", color: "#026460" }}
            >
              <ChevronLeft size={20} />
            </button>

            <div
              ref={tabContainerRef}
              className="flex items-center gap-2 md:gap-3 overflow-x-auto py-1 scroll-smooth mx-0 md:mx-3"
              style={{ scrollbarWidth: "none" } as React.CSSProperties}
            >
              <Link
                href="/conditions"
                className="shrink-0 px-6 py-2.5 rounded-full border flex items-center gap-2 transition-colors font-medium text-sm"
                style={{ backgroundColor: "#ffffff", borderColor: "#026460", color: "#026460" }}
              >
                View all
                <ArrowUpRight size={14} />
              </Link>

              {conditionsData.map((condition, index) => (
                <button
                  key={condition.id}
                  onClick={(e) => handleTabClick(index, e)}
                  className="shrink-0 px-5 py-2.5 rounded-full transition-colors whitespace-nowrap font-medium text-sm"
                  style={{
                    backgroundColor: index === activeTab ? "#026460" : "#ffffff",
                    color: index === activeTab ? "#ffffff" : "#026460",
                  }}
                >
                  {condition.title}
                </button>
              ))}
            </div>

            <button
              onClick={handleTabScrollRight}
              className="hidden md:flex shrink-0 items-center justify-center rounded-full border transition-colors"
              style={{ width: "40px", height: "40px", borderColor: "rgba(2,100,96,0.3)", color: "#026460" }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Slide content */}
          <div className="relative w-full" style={{ minHeight: "500px" }}>
            {conditionsData.map((condition, index) => {
              const isActive = index === activeTab;
              return (
                <div
                  key={condition.id}
                  className="w-full transition-all duration-500 ease-in-out"
                  style={{
                    opacity: isActive ? 1 : 0,
                    position: isActive ? "relative" : "absolute",
                    top: 0,
                    left: 0,
                    transform: isActive ? "translateY(0)" : "translateY(16px)",
                    visibility: isActive ? "visible" : "hidden",
                    pointerEvents: isActive ? "auto" : "none",
                    zIndex: isActive ? 10 : 0,
                  }}
                >
                  <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Image left */}
                    <div className="w-full lg:w-[50%] shrink-0 flex justify-center px-4 md:px-0">
                      <Link href={condition.url} className="block overflow-hidden rounded-[2rem] md:rounded-[2.5rem] w-full max-w-[320px] md:max-w-none">
                        <Image
                          src={condition.image}
                          alt={condition.title}
                          width={600}
                          height={500}
                          className="w-full h-auto object-contain"
                          style={{ borderRadius: "2rem" }}
                        />
                      </Link>
                    </div>

                    {/* Content right */}
                    <div className="w-full lg:w-[50%] flex flex-col items-start text-left">
                      <h2 className="font-heading font-bold text-secondary mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)" }}>
                        {condition.title}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-6 text-[15px]">
                        {condition.description}
                      </p>

                      <Link
                        href={condition.url}
                        className="inline-flex items-center gap-2 text-primary font-bold text-[15px] mb-10 transition-colors hover:opacity-80"
                      >
                        Know more
                        <ArrowUpRight size={18} className="text-primary" />
                      </Link>

                      {/* Video & Article thumbnails */}
                      <div className="hidden md:flex flex-col sm:flex-row justify-start gap-6 w-full max-w-xl">
                        <div className="group block w-full sm:w-[48%]">
                          <div className="relative w-full aspect-[16/10] mb-4 overflow-hidden rounded-2xl bg-gray-100">
                            <Image
                              src={condition.videoThumb}
                              alt={condition.videoTitle}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="#026460"><path d="M8 5v14l11-7z"/></svg>
                            </div>
                          </div>
                          <h5 className="text-sm text-gray-600 leading-snug font-medium">{condition.videoTitle}</h5>
                        </div>

                        {condition.articleThumb && (
                          <div className="group block w-full sm:w-[48%]">
                            <div className="relative w-full aspect-[16/10] mb-4 overflow-hidden rounded-2xl bg-gray-100">
                              <Image
                                src={condition.articleThumb}
                                alt={condition.articleTitle}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                              />
                              <div className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#026460" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/></svg>
                              </div>
                            </div>
                            <h5 className="text-sm text-gray-600 leading-snug font-medium">{condition.articleTitle}</h5>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ ZONE 4: HEALTH GUIDE HERO (2-col text + image) ════════════════════ */}
      <section className="relative bg-white overflow-hidden" style={{ marginTop: "-2px" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="pt-8 pb-4 md:py-12 relative z-10">
              <h2 className="font-heading text-secondary font-bold text-4xl md:text-5xl leading-tight mb-4" style={{ letterSpacing: "-0.8px" }}>
                Explore Vein Health Guide
                <br />
                <span className="text-gray-400 font-normal">Reliable, expert-reviewed medical information.</span>
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6 max-w-md">
                Every article and guide is reviewed by our clinical team to ensure accuracy and trustworthiness.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl hover:opacity-90 transition-all text-sm"
              >
                Browse all guides
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <div className="hidden md:block">
              <Image
                src="/patient.png"
                alt="Vein health consultation"
                width={600}
                height={450}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        {/* Mobile bg image */}
        <div className="absolute right-0 top-0 h-full w-full md:hidden opacity-10 pointer-events-none">
          <Image src="/patient.png" alt="" fill className="object-cover object-center" />
        </div>
      </section>

      {/* ══ ZONE 5: EXPLORE BY CATEGORY ═══════════════════════════════════════ */}
      <section className="py-12 w-full bg-background">
        <div className="container mx-auto px-4 max-w-[900px]">
          <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #E5E7EB" }}>
            <div className="px-8 py-6" style={{ borderBottom: "1px solid #E5E7EB" }}>
              <h2 className="font-heading text-secondary text-2xl font-bold">Explore by category</h2>
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
                className="flex items-center justify-between px-8 py-5 hover:bg-gray-50 transition-colors group"
                style={{ borderBottom: "1px solid #E5E7EB" }}
              >
                <span className="font-heading text-lg font-medium" style={{ color: "#023936" }}>{item.label}</span>
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#EDEDF5" }}>
                  <ChevronRight size={18} style={{ color: "#6B6B9A" }} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ZONE 6: EDITORIAL PROCESS + NEWSLETTER CTA ════════════════════════ */}
      <section className="py-8 w-full bg-background">
        <div className="container mx-auto px-4 max-w-[900px] space-y-6">

          {/* Editorial Process */}
          <div
            className="bg-white rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{ border: "1px solid #E5E7EB" }}
          >
            <div>
              <h3 className="font-heading text-secondary text-xl font-bold mb-2">Our Editorial Process</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Every piece of educational content is thoroughly reviewed by a member of{" "}
                <Link href="/about" className="text-primary font-medium hover:underline">Varya&apos;s Clinical Team</Link>.
              </p>
            </div>
            <Link
              href="/about"
              className="bg-primary hover:opacity-90 text-white font-semibold text-sm py-3 px-7 rounded-xl whitespace-nowrap transition-all shrink-0"
            >
              Learn more
            </Link>
          </div>

          {/* Newsletter CTA */}
          <div
            className="rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            style={{ background: "linear-gradient(135deg, #023936 0%, #2C847F 100%)" }}
          >
            <div>
              <h3 className="font-heading text-white text-xl font-bold mb-2">Stay updated on vein health</h3>
              <p className="text-white/80 text-base leading-relaxed">
                Get expert-reviewed guides, treatment updates, and patient stories in your inbox.
              </p>
            </div>
            <Link
              href="/blog"
              className="bg-white hover:opacity-90 text-secondary font-semibold text-sm py-3 px-7 rounded-xl whitespace-nowrap transition-all shrink-0"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </section>

      {/* ══ ZONE 7: EXPLORE BY SUBTYPE ════════════════════════════════════════ */}
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
