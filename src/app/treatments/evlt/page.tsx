"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "key-facts", label: "Key Facts" },
  { id: "who-needs", label: "Who Needs EVLT?" },
  { id: "how-it-works", label: "How It Works" },
  { id: "benefits", label: "Benefits" },
  { id: "vs-surgery", label: "EVLT vs Surgery" },
  { id: "recovery", label: "Recovery & Safety" },
  { id: "faq", label: "FAQs" },
];

const navTabs = [
  { label: "Overview", id: "overview" },
  { label: "How It Works", id: "how-it-works" },
  { label: "Benefits", id: "benefits" },
];

const symptoms = [
  "Visible, bulging varicose veins",
  "Persistent leg pain or heaviness",
  "Swelling around ankles or calves",
  "Night cramps or restless legs",
  "Skin darkening or itching near veins",
  "Non-healing venous ulcers",
  "Symptoms worsen after standing",
];

const steps = [
  { title: "Ultrasound Mapping", desc: "The doctor identifies the faulty vein and maps blood flow using Doppler ultrasound." },
  { title: "Local Anesthesia", desc: "The area is numbed — you stay awake, comfortable, and pain-free." },
  { title: "Laser Fiber Insertion", desc: "A thin laser fiber is inserted into the vein through a tiny needle puncture." },
  { title: "Laser Activation", desc: "Controlled laser energy seals the vein from inside." },
  { title: "Natural Blood Rerouting", desc: "Blood automatically flows through healthier veins." },
  { title: "Same-Day Discharge", desc: "You walk out shortly after the procedure." },
];

const benefits = [
  { title: "High Success Rate", desc: "95%+ success rate in most cases" },
  { title: "Minimal Discomfort", desc: "Minimal pain and bruising" },
  { title: "No Surgical Scars", desc: "No large incisions or stitches required" },
  { title: "Faster Recovery", desc: "Significantly faster than traditional surgery" },
  { title: "Quick Return to Activity", desc: "Return to normal activity within 24-48 hours" },
  { title: "Long-Term Relief", desc: "Provides lasting symptom relief" },
];

const comparisons = [
  { evlt: "Minimally invasive", surgery: "Major surgical procedure" },
  { evlt: "Local anesthesia", surgery: "General anesthesia" },
  { evlt: "No stitches", surgery: "Surgical incisions" },
  { evlt: "Same-day discharge", surgery: "Hospital stay required" },
  { evlt: "Faster recovery", surgery: "Longer downtime" },
  { evlt: "Lower complication risk", surgery: "Higher complication risk" },
];

const faqs = [
  { q: "Is EVLT painful?", a: "Most patients describe EVLT as mildly uncomfortable at most. Local anesthesia prevents pain during the procedure. Post-procedure soreness is minimal and temporary." },
  { q: "How long does the procedure take?", a: "EVLT typically takes 30-60 minutes per leg. You can walk immediately afterward and go home the same day." },
  { q: "Is EVLT safe?", a: "Yes. EVLT is FDA-approved and globally accepted. When performed by an experienced specialist, complications are rare and long-term outcomes are excellent." },
  { q: "Will the varicose veins come back?", a: "EVLT has a high long-term success rate. The treated vein is permanently sealed. However, new veins can develop over time, especially without lifestyle changes." },
  { q: "What is the recovery like?", a: "Most patients return to light activity within 24 hours and resume normal work within 1-2 days. Compression stockings are worn for 1-2 weeks." },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function EVLTPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    const sections = document.querySelectorAll("[data-toc-section]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-secondary antialiased font-body">
      <main>

        {/* HERO */}
        <header>
          <div style={{ backgroundColor: "#2C847F" }} className="text-white">
            <div className="max-w-7xl mx-auto px-6 pt-6 pb-12 flex flex-col items-start">
              <Link href="/treatments-overview" className="inline-flex items-center text-white/80 text-sm font-medium mb-10 hover:text-white hover:underline">
                <svg className="w-2.5 h-2.5 mr-2 fill-current" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                </svg>
                Treatments
              </Link>
              <h1 className="font-heading mb-4 text-4xl font-normal leading-[1.08] text-white md:text-5xl lg:text-[56px]">
                Endovenous Laser Treatment
                <br /><span className="text-[0.65em] opacity-75">(EVLT)</span>
              </h1>
              <p className="mb-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                Gold-standard minimally invasive laser therapy for varicose veins. No surgery. No stitches. Walk out the same day.
              </p>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-white hover:opacity-80 hover:underline md:text-base">
                <Calendar className="w-[22px] h-[22px] mr-3" strokeWidth={1.5} />
                Request an Appointment
              </a>
            </div>
          </div>
          <div style={{ backgroundColor: "#236b67" }} className="border-t border-white/20">
            <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto">
              {navTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); scrollToSection(tab.id); }}
                  className={`inline-block rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${activeTab === tab.id ? "bg-white text-secondary" : "bg-white/[0.12] text-white hover:bg-white/20"}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* ARTICLE + SIDEBAR */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 md:py-16">
            <div className="lg:flex lg:gap-14">

              {/* LEFT: Article */}
              <div className="flex-1 min-w-0">

                {/* Author */}
                <div className="flex items-center gap-3 mb-10 pb-6 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-primary font-bold text-sm">VS</div>
                  <div>
                    <p className="text-sm font-semibold text-secondary leading-tight">Vein Specialist Team</p>
                    <p className="text-xs text-gray-400">Phlebologist · Reviewed May 2026</p>
                  </div>
                </div>

                {/* OVERVIEW */}
                <div id="overview" data-toc-section className="mb-20">
                  <p className="mb-5 text-base leading-8 text-secondary">
                    Endovenous Laser Treatment (EVLT) is a{" "}
                    <strong className="font-semibold" style={{ background: "#CCE0DF", padding: "2px 6px", borderRadius: "3px" }}>
                      minimally invasive, gold-standard procedure
                    </strong>{" "}
                    used to treat varicose veins at their root cause.
                  </p>
                  <p className="mb-5 text-base leading-8 text-gray-500">
                    Instead of removing veins surgically, EVLT uses laser energy delivered inside the faulty vein to gently seal it shut. Once closed, blood naturally reroutes to healthy veins, relieving symptoms and improving circulation.
                  </p>
                  <p className="text-base leading-8 text-gray-500">
                    EVLT is performed under local anesthesia. The procedure takes 30-60 minutes, and most patients walk out of the clinic the same day and return to work within 24-48 hours.
                  </p>
                </div>

                {/* KEY FACTS */}
                <div id="key-facts" data-toc-section style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #e8ecf0" }}>
                  <h2 className="font-heading mb-6 text-3xl font-normal leading-tight text-secondary lg:text-4xl">
                    Key facts about EVLT
                  </h2>
                  <div className="bg-accent-lighter border border-accent/60 p-6 md:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                      {[
                        ["Procedure type", "Minimally invasive, day-care"],
                        ["Anesthesia", "Local anesthesia only"],
                        ["Duration", "30-60 minutes per leg"],
                        ["Recovery", "Back to work in 24-48 hours"],
                        ["Success rate", "95%+ long-term closure"],
                        ["Approval", "FDA-approved, globally accepted"],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-gray-400">{label}</p>
                          <p className="text-base text-secondary">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* WHO NEEDS */}
                <div id="who-needs" data-toc-section style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #e8ecf0" }}>
                  <h2 className="font-heading mb-4 text-3xl font-normal leading-tight text-secondary lg:text-4xl">
                    Who needs EVLT?
                  </h2>
                  <p className="mb-6 text-base leading-8 text-gray-500">
                    EVLT is recommended when a{" "}
                    <strong style={{ textDecoration: "underline", textDecorationColor: "#2C847F", textUnderlineOffset: "3px", textDecorationThickness: "2px" }}>
                      Doppler ultrasound confirms venous reflux
                    </strong>{" "}
                    in the great or small saphenous vein.
                  </p>
                  <ul className="space-y-4" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                    {symptoms.map((s, i) => (
                      <li key={i} className="pl-1 text-base leading-8 text-secondary">{s}</li>
                    ))}
                  </ul>
                </div>

                {/* HOW IT WORKS */}
                <div id="how-it-works" data-toc-section style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #e8ecf0" }}>
                  <h2 className="font-heading mb-8 text-3xl font-normal leading-tight text-secondary lg:text-4xl">
                    How does EVLT work?
                  </h2>
                  <div className="pl-8 space-y-12 relative border-l-2 border-accent">
                    {steps.map((step, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-primary" />
                        <div className="flex items-baseline gap-3 mb-2">
                          <span className="font-heading text-3xl font-normal text-primary/30">{`0${index + 1}`}</span>
                          <h3 className="font-heading text-xl font-normal text-secondary md:text-2xl">{step.title}</h3>
                        </div>
                        <p className="text-base leading-relaxed text-gray-500">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BENEFITS */}
                <div id="benefits" data-toc-section style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #e8ecf0" }}>
                  <h2 className="font-heading mb-6 text-3xl font-normal leading-tight text-secondary lg:text-4xl">
                    Benefits of EVLT
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {benefits.map((b, i) => (
                      <div key={i} className="flex gap-4 p-5 rounded-xl border border-gray-100 hover:border-primary/30 hover:bg-accent-lighter transition-all">
                        <div className="flex-shrink-0 mt-0.5 text-primary"><CheckIcon /></div>
                        <div>
                          <p className="mb-0.5 text-base font-semibold text-secondary">{b.title}</p>
                          <p className="text-sm leading-6 text-gray-500">{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* VS SURGERY */}
                <div id="vs-surgery" data-toc-section style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #e8ecf0" }}>
                  <h2 className="font-heading mb-2 text-3xl font-normal leading-tight text-secondary lg:text-4xl">
                    EVLT vs. traditional surgery
                  </h2>
                  <p className="mb-6 text-base text-gray-400">Why modern laser therapy is the preferred choice</p>
                  <div className="rounded-xl overflow-hidden border border-gray-200">
                    <div className="grid grid-cols-2 border-b border-gray-200">
                      <div className="p-4 text-center border-r border-gray-200 bg-primary/10">
                        <p className="font-semibold text-base text-primary">EVLT</p>
                      </div>
                      <div className="p-4 text-center bg-gray-50">
                        <p className="font-semibold text-base text-gray-400">Traditional Surgery</p>
                      </div>
                    </div>
                    {comparisons.map((item, i) => (
                      <div key={i} className="grid grid-cols-2 border-b border-gray-100 last:border-0">
                        <div className="py-3 px-4 flex items-center gap-3 border-r border-gray-100 bg-white">
                          <span className="text-primary flex-shrink-0"><CheckIcon /></span>
                          <span className="text-sm font-medium text-secondary md:text-base">{item.evlt}</span>
                        </div>
                        <div className="py-3 px-4 flex items-center gap-3 bg-white">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                          <span className="text-sm text-gray-400 md:text-base">{item.surgery}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RECOVERY */}
                <div id="recovery" data-toc-section style={{ marginBottom: "5rem", paddingTop: "2.5rem", borderTop: "1px solid #e8ecf0" }}>
                  <h2 className="font-heading mb-6 text-3xl font-normal leading-tight text-secondary lg:text-4xl">
                    Recovery & safety
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="p-6 rounded-xl bg-accent-lighter border border-accent/40">
                      <h3 className="font-heading mb-4 text-xl font-normal text-secondary">Recovery timeline</h3>
                      <ul className="space-y-3">
                        {["Walk immediately after procedure", "Resume daily activity in 1-2 days", "Wear compression stockings as advised", "Avoid intense workouts for 2 weeks", "Follow-up ultrasound confirms closure"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm leading-6 text-secondary md:text-base">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="p-6 rounded-xl bg-white border border-gray-100">
                      <h3 className="font-heading mb-4 text-xl font-normal text-secondary">Is it safe?</h3>
                      <p className="mb-4 text-sm leading-relaxed text-gray-500 md:text-base">Yes. EVLT is FDA-approved. When performed by an experienced specialist:</p>
                      <ul className="space-y-3">
                        {["Complications are rare", "Infection risk is minimal", "Long-term outcomes are excellent"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm leading-6 text-secondary md:text-base">
                            <span className="text-primary flex-shrink-0"><CheckIcon /></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div id="faq" data-toc-section style={{ paddingTop: "2.5rem", borderTop: "1px solid #e8ecf0" }}>
                  <h2 className="font-heading mb-6 text-3xl font-normal leading-tight text-secondary lg:text-4xl">
                    Frequently asked questions
                  </h2>
                  <div className="space-y-3">
                    {faqs.map((faq, i) => (
                      <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                          <span className="pr-4 text-base font-semibold text-secondary">{faq.q}</span>
                          <svg className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>
                        {openFaq === i && (
                          <div className="border-t border-gray-100 px-5 pb-5 pt-4 text-base leading-relaxed text-gray-500">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* RIGHT: Sticky Sidebar */}
              <div className="hidden lg:block w-[280px] xl:w-[300px] flex-shrink-0">
                <div className="sticky top-[88px]" style={{ maxHeight: "calc(100vh - 112px)", overflowY: "auto" }}>

                  {/* TOC */}
                  <div className="bg-accent-lighter py-5 px-6 mb-5 rounded-xl">
                    <h3 className="font-heading mb-3 text-xl font-normal text-secondary">
                      Table of Contents
                    </h3>
                    <nav className="flex flex-col">
                      {tocSections.map((s) => (
                        <button key={s.id} onClick={() => scrollToSection(s.id)} className="text-left py-2 border-b border-secondary/5 last:border-0 cursor-pointer">
                          <span className={`text-sm underline underline-offset-4 decoration-1 transition-colors ${activeSection === s.id ? "text-secondary font-semibold" : "text-gray-400 hover:text-secondary"}`}>
                            {s.label}
                          </span>
                        </button>
                      ))}
                    </nav>
                  </div>

                  {/* CTA Card */}
                  <div className="bg-white p-6 border border-gray-200 rounded-xl">
                    <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center mb-5">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-heading mb-3 text-xl font-normal leading-snug text-secondary">
                      You do not have to live with varicose veins
                    </h4>
                    <p className="mb-5 text-sm leading-relaxed text-gray-500">
                      Get started on your path to pain-free legs. See a vein specialist within days.
                    </p>
                    <a href="#" className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-white hover:opacity-90">
                      Book Your First Visit
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Quick Stats */}
                  <div className="mt-5 p-5 bg-white border border-gray-200 rounded-xl space-y-4">
                    {[["Success rate", "95%+"], ["Procedure time", "30-60 min"], ["Recovery", "24-48 hrs"]].map(([label, value]) => (
                      <div key={label} className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wide text-gray-400">{label}</span>
                        <span className="font-heading text-primary text-lg font-medium">{value}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
