"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Footer from "@/components/Footer";

const Icons = {
  Proven: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <path d="M9 15l2 2 4-4"></path>
    </svg>
  ),
  Precise: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="22" y1="12" x2="18" y2="12"></line>
      <line x1="6" y1="12" x2="2" y2="12"></line>
      <line x1="12" y1="6" x2="12" y2="2"></line>
      <line x1="12" y1="22" x2="12" y2="18"></line>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  ),
  Safe: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="M9 12l2 2 4-4"></path>
    </svg>
  ),
  Quick: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
  ),
  Effective: () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  ),
  Check: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
  BigCheck: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  ),
  ChevronDown: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  ),
  ChevronRight: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  ),
  ArrowLeft: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
  ArrowRight: () => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  ),
};

function ArrowButton({ direction, onClick }: { direction: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer flex-shrink-0"
    >
      {direction === "left" ? <Icons.ArrowLeft /> : <Icons.ArrowRight />}
    </button>
  );
}

/* ── SECTION 1: HERO ── */
function EVLTHero() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        <div style={{ paddingTop: "5rem", paddingBottom: "7rem" }}>
          <p className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.6)", letterSpacing: "0.16em" }}>
            Treatment Guide
          </p>
          <h1 className="font-heading text-white mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, letterSpacing: "-0.5px", lineHeight: 1.1 }}>
            Endovenous Laser Treatment<br />(EVLT)
          </h1>
          <p className="font-body" style={{ fontSize: "18px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: "560px" }}>
            Gold-standard laser therapy for varicose veins — minimally invasive, same-day procedure with no hospital stay and fast recovery.
          </p>
        </div>
      </div>
      {/* Wave bottom */}
      <div style={{ position: "absolute", bottom: "-1px", left: 0, width: "100%", overflow: "hidden", lineHeight: 0 }}>
        <svg style={{ position: "relative", display: "block", width: "calc(100% + 1.3px)", height: "60px" }} viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}

/* ── SECTION 2: WHAT IS EVLT — split card (merlin diagnosis layout) ── */
function WhatIsEVLT() {
  const diagnosisScrollRef = useRef<HTMLDivElement>(null);

  const scrollDiagnosis = (direction: "left" | "right") => {
    if (diagnosisScrollRef.current) {
      diagnosisScrollRef.current.scrollBy({ left: direction === "left" ? -260 : 260, behavior: "smooth" });
    }
  };

  const steps = [
    { title: "No major surgery", desc: "Vein sealed from inside using laser — no cutting or stripping needed.", img: "/ev1.png" },
    { title: "No stitches", desc: "Only a tiny needle puncture is used — heals on its own naturally.", img: "/ev2.png" },
    { title: "No hospital admission", desc: "Walk in, walk out. Performed in a clinic setting, same day.", img: "/ev3.png" },
    { title: "Local anesthesia only", desc: "You remain awake and comfortable throughout the procedure.", img: "/ev15.png" },
  ];

  return (
    <section className="bg-white" style={{ paddingTop: "5rem", paddingBottom: "2rem" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Step One</p>
          <h2 className="font-heading text-secondary" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, letterSpacing: "-0.5px", lineHeight: 1.12, marginBottom: "0.75rem" }}>
            What is EVLT?
          </h2>
          <p className="text-gray-500 mx-auto" style={{ fontSize: "1rem", lineHeight: 1.75, maxWidth: "520px" }}>
            Endovenous Laser Treatment uses laser energy to seal faulty veins from inside — no surgery, no scars.
          </p>
        </div>

        {/* Split card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden rounded-[10px] border border-gray-200">
          {/* Left — dark */}
          <div className="flex flex-col justify-center bg-primary" style={{ padding: "clamp(1.5rem, 4vw, 3rem)" }}>
            <h3 className="font-heading text-white mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.5px" }}>
              Getting the <span style={{ color: "rgba(255,255,255,0.6)" }}>right diagnosis</span>
            </h3>
            <p style={{ fontSize: "16px", lineHeight: 1.75, color: "rgba(255,255,255,0.55)", marginBottom: "28px" }}>
              There is no single test. Diagnosis is built from your symptoms, an examination, and a Doppler ultrasound — together they confirm whether EVLT is right for you.
            </p>
            <button className="inline-flex mt-2 self-start items-center gap-2.5 rounded-full pl-7 pr-5 py-3.5 text-[15px] font-bold tracking-wide text-white transition-all duration-300 hover:opacity-90 cursor-pointer bg-cta">
              Book your consultation
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <Icons.ArrowRight />
              </span>
            </button>
          </div>

          {/* Right — scrollable cards */}
          <div className="bg-white" style={{ padding: "clamp(1.25rem, 4vw, 2.5rem)" }}>
            <h3 className="font-heading text-primary pb-3 mb-5 border-b border-gray-200" style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.5px" }}>
              What makes EVLT different
            </h3>
            <div className="flex items-center justify-between gap-3 mb-5">
              <p className="text-gray-500" style={{ fontSize: "15px", lineHeight: 1.75 }}>
                Swipe through the key advantages of EVLT over traditional surgery.
              </p>
              <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
                <ArrowButton direction="left" onClick={() => scrollDiagnosis("left")} />
                <ArrowButton direction="right" onClick={() => scrollDiagnosis("right")} />
              </div>
            </div>
            <div ref={diagnosisScrollRef} className="flex gap-4 overflow-x-auto pb-2 scroll-smooth" style={{ scrollbarWidth: "none" }}>
              {steps.map((step, i) => (
                <div key={i} className="group w-[210px] min-w-[210px] sm:w-[230px] sm:min-w-[230px] flex-shrink-0 overflow-hidden rounded-[16px] border border-gray-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-primary">
                  <div className="h-[165px] overflow-hidden bg-gray-100">
                    <Image src={step.img} alt={step.title} width={230} height={165} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                  </div>
                  <div className="p-3">
                    <h4 className="text-secondary font-semibold mb-1.5" style={{ fontSize: "16px", lineHeight: 1.4 }}>{step.title}</h4>
                    <p className="text-gray-500" style={{ fontSize: "14px", lineHeight: 1.55 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="sm:hidden flex items-center justify-center gap-2 mt-4">
              <ArrowButton direction="left" onClick={() => scrollDiagnosis("left")} />
              <ArrowButton direction="right" onClick={() => scrollDiagnosis("right")} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 3: BENEFITS — treatment cards carousel (merlin treatment options layout) ── */
function BenefitsOfEVLT() {
  const cardScrollRef = useRef<HTMLDivElement>(null);

  const scrollCards = (direction: "left" | "right") => {
    if (cardScrollRef.current) {
      cardScrollRef.current.scrollBy({ left: direction === "left" ? -320 : 320, behavior: "smooth" });
    }
  };

  const cards = [
    { title: "High Success Rate", desc: "95%+ success rate in most cases. Clinically proven and globally accepted with excellent long-term outcomes.", img: "/ev2a.png" },
    { title: "No Surgical Scars", desc: "No large incisions or stitches — only a tiny needle puncture that heals naturally. Minimal bruising, no visible scarring.", img: "/evlt.png" },
    { title: "Faster Recovery", desc: "Return to normal activity within 24–48 hours. Significantly faster recovery than traditional vein stripping surgery.", img: "/ev3y.png" },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Step Two</p>
          <h2 className="font-heading text-secondary mb-3" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400 }}>
            Benefits of EVLT
          </h2>
          <p className="text-gray-500 mx-auto mb-8" style={{ fontSize: "1rem", lineHeight: 1.75, maxWidth: "520px" }}>
            EVLT combines precision, safety, and fast recovery — making it the preferred choice for treating varicose veins.
          </p>
          <div className="hidden sm:flex justify-center gap-2">
            <ArrowButton direction="left" onClick={() => scrollCards("left")} />
            <ArrowButton direction="right" onClick={() => scrollCards("right")} />
          </div>
        </div>

        <div ref={cardScrollRef} className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible" style={{ scrollbarWidth: "none" }}>
          {cards.map((card, i) => (
            <div
              key={i}
              className="w-[300px] min-w-[300px] lg:w-auto lg:min-w-0 flex-shrink-0 lg:flex-shrink flex flex-col bg-white overflow-hidden group rounded-[10px] border border-gray-100 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden">
                <Image src={card.img} alt={card.title} width={400} height={224} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading text-secondary text-xl mb-2" style={{ fontWeight: 400 }}>{card.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed flex-grow mb-3">{card.desc}</p>
                <span className="inline-flex items-center gap-2 text-base font-bold text-secondary">
                  Learn more
                  <span className="w-7 h-7 rounded-full bg-accent flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icons.ArrowRight />
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="sm:hidden flex justify-center gap-2 mt-4">
          <ArrowButton direction="left" onClick={() => scrollCards("left")} />
          <ArrowButton direction="right" onClick={() => scrollCards("right")} />
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 4: HOW IT WORKS — image card left + accordion right (merlin getting started layout) ── */
function HowItWorks() {
  const [openIdx, setOpenIdx] = useState(0);

  const steps = [
    { title: "1. Ultrasound Mapping", content: "The doctor identifies the faulty vein and maps blood flow using Doppler ultrasound. This confirms the vein to be treated and guides the procedure.", list: null },
    { title: "2. Local Anesthesia", content: "The area is numbed — you stay awake, comfortable, and pain-free throughout the procedure. No general anesthesia required.", list: ["Minimal discomfort", "You can talk to your doctor throughout", "No recovery from anesthesia needed"] },
    { title: "3. Laser Fiber Insertion", content: "A thin laser fiber is inserted into the vein through a tiny needle puncture — no incision, no stitches.", list: null },
    { title: "4. Laser Activation", content: "Controlled laser energy is delivered inside the vein, gently sealing it shut from within. Blood automatically reroutes to healthy veins.", list: null },
    { title: "5. Same-Day Discharge", content: "You walk out shortly after the procedure and can return to normal activity within 24–48 hours. Compression stockings are advised for a short period.", list: ["Walk immediately after", "Back to work in 1–2 days", "Follow-up ultrasound confirms success"] },
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] items-start gap-10 lg:gap-16">
          {/* Left — image card */}
          <div className="bg-gray-50 overflow-hidden border border-gray-100 rounded-[10px]">
            <div className="h-56 overflow-hidden">
              <Image src="/steps.png" alt="EVLT procedure steps" width={600} height={224} className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-6">
              <h3 className="font-heading text-secondary text-xl mb-3" style={{ fontWeight: 400 }}>Your EVLT procedure</h3>
              <blockquote className="text-sm leading-relaxed mb-3" style={{ color: "#2C847F", borderLeft: "3px solid #2C847F", paddingLeft: "0.9rem" }}>
                &quot;The procedure took less than an hour — I walked out the same day and was back at work the next morning.&quot;
              </blockquote>
              <p className="text-sm text-gray-500 leading-relaxed">
                Most EVLT procedures take 30–45 minutes under local anesthesia. Same-day discharge is standard.
              </p>
            </div>
          </div>

          {/* Right — title + accordion */}
          <div>
            <h2 className="font-heading text-secondary mb-6" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400 }}>
              How Does EVLT Work?
            </h2>
            <div>
              {steps.map((step, i) => {
                const isOpen = openIdx === i;
                return (
                  <div key={i} style={{ borderBottom: "1.5px solid #e0e0e0" }}>
                    <button
                      onClick={() => setOpenIdx(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between text-left cursor-pointer"
                      style={{ padding: "1rem 0" }}
                    >
                      <h4 className="font-semibold text-primary" style={{ fontSize: "16px" }}>{step.title}</h4>
                      <svg
                        className="w-4 h-4 flex-shrink-0 text-gray-400"
                        style={{ transition: "transform 0.25s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isOpen && (
                      <div style={{ paddingBottom: "1rem" }}>
                        <p className="text-base text-gray-600 leading-relaxed">{step.content}</p>
                        {step.list && (
                          <ul style={{ listStyle: "none", marginTop: "0.6rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                            {step.list.map((item, j) => (
                              <li key={j} className="text-base text-secondary flex gap-2 items-start">
                                <span className="text-primary flex-shrink-0">✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 5: EVLT VS SURGERY — condition table (merlin treatment-by-condition layout) ── */
function EVLTvsSurgery() {
  const comparisons = [
    { aspect: "Procedure Type", evlt: "Minimally invasive", surgery: "Major surgical procedure" },
    { aspect: "Anesthesia", evlt: "Local anesthesia", surgery: "General anesthesia" },
    { aspect: "Incisions", evlt: "No stitches — tiny puncture only", surgery: "Surgical incisions required" },
    { aspect: "Hospital Stay", evlt: "Same-day discharge", surgery: "Hospital stay required" },
    { aspect: "Recovery Time", evlt: "24–48 hours", surgery: "Weeks of downtime" },
    { aspect: "Complication Risk", evlt: "Lower complication risk", surgery: "Higher complication risk" },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-secondary mb-3" style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", fontWeight: 400 }}>
            EVLT vs. Traditional Surgery
          </h2>
          <p className="text-gray-500 mx-auto" style={{ fontSize: "1rem", lineHeight: 1.75, maxWidth: "520px" }}>
            See why modern laser technology is the preferred choice over conventional vein stripping.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: 0 }}>
            <thead>
              <tr className="bg-primary">
                <th className="text-left text-[11px] font-bold tracking-widest uppercase" style={{ padding: "16px 20px", color: "rgba(255,255,255,0.45)", borderRadius: "6px 0 0 0" }}>Aspect</th>
                <th className="text-left text-[11px] font-bold tracking-widest uppercase" style={{ padding: "16px 20px", color: "rgba(255,255,255,0.45)" }}>EVLT</th>
                <th className="text-left text-[11px] font-bold tracking-widest uppercase" style={{ padding: "16px 20px", color: "rgba(255,255,255,0.45)" }}>Traditional Surgery</th>
                <th style={{ padding: "16px 20px", borderRadius: "0 6px 0 0", width: "50px" }}></th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, i) => (
                <tr
                  key={i}
                  className="bg-white cursor-pointer"
                  style={{ transition: "background 0.15s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).querySelectorAll("td").forEach(td => (td as HTMLTableCellElement).style.backgroundColor = "#f0f7f8"); }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).querySelectorAll("td").forEach(td => (td as HTMLTableCellElement).style.backgroundColor = ""); }}
                >
                  <td className="font-heading text-primary" style={{ padding: "14px 20px", fontWeight: 400, fontSize: "15px", borderBottom: i < comparisons.length - 1 ? "1px solid #e0e0e0" : "none", borderRadius: i === comparisons.length - 1 ? "0 0 0 6px" : undefined }}>
                    {row.aspect}
                  </td>
                  <td className="text-base text-secondary font-medium" style={{ padding: "14px 20px", borderBottom: i < comparisons.length - 1 ? "1px solid #e0e0e0" : "none" }}>
                    <span className="flex items-center gap-2">
                      <Icons.Check />
                      {row.evlt}
                    </span>
                  </td>
                  <td className="text-base text-gray-500" style={{ padding: "14px 20px", borderBottom: i < comparisons.length - 1 ? "1px solid #e0e0e0" : "none" }}>
                    {row.surgery}
                  </td>
                  <td style={{ padding: "14px 20px", textAlign: "center", borderBottom: i < comparisons.length - 1 ? "1px solid #e0e0e0" : "none", borderRadius: i === comparisons.length - 1 ? "0 0 6px 0" : undefined }}>
                    <svg className="w-4 h-4 text-primary inline-block" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 6: FAQ — sticky sidebar (kept as-is, works well) ── */
interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

function DiseaseInfoSection() {
  const [activeTab, setActiveTab] = useState("pain");
  const [openAccordion, setOpenAccordion] = useState("");

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? "" : id);
  };

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["pain", "recovery", "safety"];
      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 400) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections: Section[] = [
    {
      id: "pain",
      title: "Is EVLT Painful?",
      content: (
        <div>
          <h4 className="font-heading text-3xl font-normal mb-6 text-secondary">Is EVLT Painful?</h4>
          <p className="text-xl mb-8 leading-relaxed font-light text-gray-600">Most patients describe EVLT as mildly uncomfortable at most, not painful.</p>
          <div className="space-y-4">
            {["Local anesthesia prevents pain", "You may feel slight pressure or warmth", "Post-procedure soreness is minimal and temporary"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-lg font-light text-gray-600">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg font-light text-gray-600 mt-6">Pain is usually managed with simple oral medication if needed.</p>
        </div>
      ),
    },
    {
      id: "recovery",
      title: "Recovery After EVLT",
      content: (
        <div>
          <h4 className="font-heading text-3xl font-normal mb-8 text-secondary">Recovery After EVLT</h4>
          <div className="space-y-4">
            {["Walk immediately after the procedure", "Resume normal daily activities within 1–2 days", "Wear compression stockings as advised", "Avoid intense workouts for a short period", "Follow-up ultrasound confirms successful closure"].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-lg font-light text-gray-600">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg font-light text-gray-600 mt-6">Most patients return to work within 24–48 hours.</p>
        </div>
      ),
    },
    {
      id: "safety",
      title: "Is EVLT Safe?",
      content: (
        <div>
          <h4 className="font-heading text-3xl font-normal mb-6 text-secondary">Is EVLT Safe?</h4>
          <div className="mb-10">
            <p className="font-heading text-xl font-medium mb-4 text-secondary">Yes. EVLT is FDA-approved and globally accepted.</p>
            <p className="text-lg font-medium mb-6 text-secondary">When performed by an experienced specialist:</p>
            <div className="space-y-4">
              {["Complications are rare", "Infection risk is minimal", "Long-term outcomes are excellent"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-lg font-light text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="font-heading text-4xl md:text-[56px] leading-[1.1] font-normal mb-20 max-w-3xl text-center mx-auto text-secondary">
          Patient Guide &{" "}
          <span className="italic text-primary">Frequently Asked Questions</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-24">
          <div className="hidden lg:block lg:w-1/4">
            <div className="sticky top-32">
              <div className="flex flex-col">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left py-5 transition-all duration-300 text-lg flex justify-between items-center group cursor-pointer border-b border-gray-200 ${activeTab === section.id ? "text-primary font-medium" : "text-gray-500 hover:text-secondary"}`}
                  >
                    <span className={`${activeTab === section.id ? "translate-x-2" : ""} transition-all duration-300`}>{section.title}</span>
                    <span className={`${activeTab === section.id ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"} transition-all duration-300 text-primary`}>
                      <Icons.ChevronRight />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-3/4">
            <div className="lg:hidden space-y-4">
              {sections.map((section) => (
                <div key={section.id} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full flex justify-between items-center py-5 text-left text-xl cursor-pointer text-secondary"
                  >
                    <span className="font-heading">{section.title}</span>
                    <div className={`transform transition-transform duration-300 text-primary ${openAccordion === section.id ? "rotate-180" : ""}`}>
                      <Icons.ChevronDown />
                    </div>
                  </button>
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openAccordion === section.id ? "max-h-[1000px] opacity-100 pb-8" : "max-h-0 opacity-0"}`}>
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden lg:block space-y-32">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32">{section.content}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 7: CTA BANNER — merlin split layout ── */
function EVLTCTASection() {
  return (
    <section className="pb-20 md:pb-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-0 md:px-6">
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-center rounded-none md:rounded-[10px] bg-primary"
          style={{ padding: "clamp(1.5rem, 5vw, 4rem) clamp(1.25rem, 5vw, 4.5rem)", gap: "3rem" }}
        >
          <div>
            <h2 className="font-heading text-white leading-[1.2] mb-2" style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 400 }}>
              Take the First Step<br />
              <span className="text-white">Toward Healthier Legs</span>
            </h2>
            <p className="text-sm leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
              Varicose veins don&apos;t have to control your life. EVLT offers safe, effective, long-lasting relief — without surgery. Our specialists will create a plan tailored to you.
            </p>
          </div>
          <div className="flex flex-col items-center flex-shrink-0" style={{ gap: "0.5rem" }}>
            <button className="inline-block rounded-full font-semibold text-[15px] text-white whitespace-nowrap transition-all hover:opacity-90 cursor-pointer bg-cta" style={{ padding: "14px 28px" }}>
              Book a Consultation
            </button>
            <span className="text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
              Most patients seen within 2 weeks
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EVLTPage() {
  return (
    <main className="bg-white">
      <EVLTHero />
      <WhatIsEVLT />
      <BenefitsOfEVLT />
      <HowItWorks />
      <EVLTvsSurgery />
      <DiseaseInfoSection />
      <EVLTCTASection />
      <Footer />
    </main>
  );
}
