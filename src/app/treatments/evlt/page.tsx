"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

// Simplified Stroke Icons
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
};

function EVLTHero() {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row w-full min-h-[500px] md:h-[600px]">
        {/* Left Content Side */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-0 bg-accent">
          <div className="max-w-xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal mb-8 tracking-tight leading-tight text-secondary">
              Endovenous Laser Treatment (EVLT)
            </h1>
            <div className="w-20 h-px mb-8 bg-primary/40"></div>
            <p className="text-xl lg:text-[22px] leading-relaxed tracking-wide text-primary">
              Gold-Standard Laser Therapy for Varicose Veins
            </p>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
          <Image
            src="/evtl.png"
            alt="EVLT Treatment"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function WhatIsEVLT() {
  const benefits = [
    "No major surgery",
    "No stitches",
    "No hospital admission",
    "Performed under local anesthesia",
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left: Heading & Description */}
          <div className="lg:w-1/2 pt-4">
            <h2 className="font-heading text-4xl md:text-[42px] leading-tight mb-8 font-normal text-secondary">
              What is Endovenous Laser Treatment (EVLT)?
            </h2>
            <div className="text-lg md:text-[20px] leading-relaxed space-y-6 text-gray-600">
              <p>
                Endovenous Laser Treatment (EVLT) is a minimally invasive, gold-standard procedure used to treat Varicose veins at their root cause.
              </p>
              <p>
                Instead of removing veins surgically, EVLT uses laser energy delivered inside the faulty vein to gently seal it shut. Once closed, blood naturally reroutes to healthy veins, relieving symptoms and improving circulation.
              </p>
            </div>
          </div>

          {/* Right: Benefits List */}
          <div className="lg:w-1/2 w-full lg:pt-6">
            <div className="border-t border-gray-200">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-between py-6 group cursor-default border-b border-gray-200">
                  <span className="font-heading text-xl font-medium text-secondary">
                    {benefit}
                  </span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary">
                    <Icons.Check />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyEVLT() {
  const points = [
    { title: "Clinically Proven", desc: "High long-term success rates", icon: <Icons.Proven /> },
    { title: "Precise", desc: "Guided by ultrasound technology", icon: <Icons.Precise /> },
    { title: "Safe", desc: "Minimal risk and complications", icon: <Icons.Safe /> },
    { title: "Quick", desc: "Usually takes 30–45 minutes", icon: <Icons.Quick /> },
    { title: "Effective", desc: "Treats underlying venous reflux", icon: <Icons.Effective /> },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-[42px] leading-tight mb-4 font-normal text-secondary">
            Why EVLT is the Gold Standard
          </h2>
          <p className="text-lg uppercase tracking-widest text-gray-500">
            Superior Results &bull; Minimal Downtime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col items-start group">
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110 text-primary">
                {point.icon}
              </div>
              <h3 className="font-heading text-2xl mb-2 text-secondary">
                {point.title}
              </h3>
              <p className="text-lg leading-relaxed text-gray-600">
                {point.desc}
              </p>
            </div>
          ))}

          {/* Recommendation Block */}
          <div className="flex flex-col justify-center items-start pl-8 border-l-2 border-primary">
            <p className="font-heading text-lg font-medium italic leading-relaxed text-secondary">
              &quot;Widely recommended by vascular surgeons and vein specialists worldwide.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoNeedsEVLT() {
  const symptoms = [
    "Visible, bulging Varicose veins",
    "Persistent leg pain or heaviness",
    "Swelling around ankles or calves",
    "Night cramps or restless legs",
    "Skin darkening or itching near veins",
    "Non-healing venous ulcers",
    "Symptoms worsen after standing",
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Heading & Medical Confirmation */}
          <div className="lg:w-1/2">
            <h2 className="font-heading text-4xl md:text-[42px] leading-tight mb-8 font-normal text-secondary">
              Who Needs EVLT?
            </h2>
            <div className="p-8 rounded-lg bg-white border border-gray-200">
              <p className="text-sm tracking-wide font-bold uppercase mb-3 text-primary">
                Medical Confirmation
              </p>
              <p className="font-heading text-lg leading-relaxed text-secondary">
                A Doppler ultrasound is used to confirm whether EVLT is the right treatment for you.
              </p>
            </div>
          </div>

          {/* Right: Symptoms List */}
          <div className="lg:w-1/2">
            <div className="space-y-5">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-center gap-4 pb-5 border-b border-gray-200">
                  <div className="w-2 h-2 rounded-full flex-shrink-0 bg-primary"></div>
                  <span className="text-xl text-secondary">
                    {symptom}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Ultrasound Mapping", desc: "The doctor identifies the faulty vein and maps blood flow using Doppler ultrasound." },
    { title: "Local Anesthesia", desc: "The area is numbed — you stay awake, comfortable, and pain-free." },
    { title: "Laser Fiber Insertion", desc: "A thin laser fiber is inserted into the vein through a tiny needle puncture." },
    { title: "Laser Activation", desc: "Controlled laser energy seals the vein from inside." },
    { title: "Natural Blood Rerouting", desc: "Blood automatically flows through healthier veins." },
    { title: "Same-Day Discharge", desc: "You walk out shortly after the procedure." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Sticky Image Section */}
          <div className="lg:w-5/12 hidden lg:block relative">
            <div className="sticky top-12">
              <div className="relative">
                <Image
                  src="/steps.png"
                  alt="EVLT Procedure Steps"
                  width={500}
                  height={700}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right: Steps Timeline */}
          <div className="lg:w-7/12">
            <h2 className="font-heading text-4xl md:text-[42px] leading-tight mb-16 font-normal text-secondary">
              How Does EVLT Work?
            </h2>

            <div className="pl-8 md:pl-12 space-y-16 relative border-l border-gray-300">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full transition-colors duration-300 bg-white border-4 border-primary"></div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:items-baseline mb-3">
                    <span className="font-heading text-4xl font-normal transition-colors duration-300 text-primary/30">
                      {`0${index + 1}`}
                    </span>
                    <h3 className="font-heading text-2xl font-normal text-secondary">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-lg leading-relaxed max-w-lg text-gray-600">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TreatedVeinResult() {
  const results = [
    "Is absorbed by body",
    "Is no longer visible",
    "Doesn't cause symptoms",
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-[42px] leading-tight mb-6 font-normal text-secondary">
            What Happens to the Treated Vein?
          </h2>

          <p className="text-xl mb-12 text-gray-600">
            Once sealed, the treated vein is:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="flex flex-col items-center p-8 rounded-2xl group transition-all duration-300 shadow-sm bg-white border border-gray-200">
                <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300 text-primary">
                  <Icons.Check />
                </div>
                <span className="font-heading text-xl font-medium leading-snug text-secondary">
                  {result}
                </span>
              </div>
            ))}
          </div>

          <div className="inline-block relative">
            <div className="absolute inset-x-0 bottom-1 h-3 -z-10 skew-x-12 bg-primary/15"></div>
            <p className="font-heading text-2xl md:text-3xl font-normal leading-relaxed text-secondary">
              Healthy veins take over blood circulation naturally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsOfEVLT() {
  const benefits = [
    { title: "High Success Rate", desc: "95%+ success rate in most cases" },
    { title: "Minimal Discomfort", desc: "Minimal pain and bruising" },
    { title: "No Surgical Scars", desc: "No large incisions or stitches required" },
    { title: "Faster Recovery", desc: "Significantly faster than traditional surgery" },
    { title: "Quick Return to Activity", desc: "Return to normal activity within 24–48 hours" },
    { title: "Long-Term Relief", desc: "Provides lasting symptom relief" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-[42px] leading-tight mb-6 font-normal text-secondary">
            Benefits of EVLT
          </h2>
          <div className="w-16 h-1 mx-auto bg-primary/60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-5 group p-6 rounded-xl transition-colors duration-300 border border-transparent hover:shadow-sm hover:bg-surface hover:border-gray-200">
              <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300 text-primary">
                <Icons.BigCheck />
              </div>
              <div>
                <h3 className="font-heading text-xl font-medium mb-1 text-secondary">
                  {benefit.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EVLTvsSurgery() {
  const comparisons = [
    { evlt: "Minimally invasive", surgery: "Major surgical procedure" },
    { evlt: "Local anesthesia", surgery: "General anesthesia" },
    { evlt: "No stitches", surgery: "Surgical incisions" },
    { evlt: "Same-day discharge", surgery: "Hospital stay required" },
    { evlt: "Faster recovery", surgery: "Longer downtime" },
    { evlt: "Lower complication risk", surgery: "Higher complication risk" },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto mb-10">
          <h2 className="font-heading text-4xl md:text-[42px] leading-tight mb-4 font-normal text-secondary">
            EVLT vs. Traditional Surgery
          </h2>
          <p className="text-lg text-gray-500">
            Why modern technology is the preferred choice
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-sm border border-gray-200 bg-white">
          {/* Table Header */}
          <div className="grid grid-cols-2 border-b border-gray-200">
            <div className="p-4 md:p-5 text-center border-r border-gray-200 bg-primary/10">
              <h3 className="font-heading text-lg md:text-xl font-bold text-primary">EVLT</h3>
            </div>
            <div className="p-4 md:p-5 text-center bg-gray-100">
              <h3 className="font-heading text-lg md:text-xl font-bold text-gray-500">Traditional Surgery</h3>
            </div>
          </div>

          {/* Table Body */}
          <div>
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-2 last:border-0 transition-colors border-b border-gray-100">
                {/* EVLT Side */}
                <div className="py-3 px-4 md:py-4 md:px-5 flex items-center gap-3 border-r border-gray-100 bg-white">
                  <div className="flex-shrink-0 text-primary">
                    <Icons.Check />
                  </div>
                  <span className="text-base md:text-lg font-medium text-secondary">
                    {item.evlt}
                  </span>
                </div>

                {/* Surgery Side */}
                <div className="py-3 px-4 md:py-4 md:px-5 flex items-center gap-3 bg-white">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0"></div>
                  <span className="text-base md:text-lg text-gray-500">
                    {item.surgery}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

function WhyChoosePlatformSection() {
  const benefits = [
    "Verified vein specialists only",
    "Evidence-based treatment protocols",
    "Modern clinics with advanced laser systems",
    "Transparent guidance on costs & insurance",
    "End-to-end patient support",
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left Content - Center Aligned */}
          <div className="lg:w-1/2 flex flex-col items-center">
            <h2 className="font-heading text-4xl md:text-[48px] leading-tight font-normal mb-12 text-center text-secondary">
              Why Choose EVLT Through Our Platform?
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 bg-white text-primary">
                    <Icons.Check />
                  </div>
                  <span className="text-xl font-light text-secondary">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:w-1/2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/check.png"
                alt="EVLT Treatment"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EVLTCTASection() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-normal mb-6 text-white leading-tight">
          Take the First Step Toward Healthier Legs
        </h2>
        <p className="text-lg md:text-xl mb-4 font-light text-white/90">
          Varicose veins don&apos;t have to control your life.
        </p>
        <p className="text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto text-white/90">
          EVLT offers safe, effective, long-lasting relief — without surgery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="font-semibold py-4 px-8 rounded-full transition-colors duration-300 cursor-pointer text-lg bg-white text-primary hover:opacity-90">
            Book a Consultation
          </button>
          <button className="bg-transparent font-semibold py-4 px-8 rounded-full transition-colors duration-300 cursor-pointer text-lg border-2 border-white text-white hover:bg-white/10">
            Find a Vein Specialist Near You
          </button>
        </div>
      </div>
    </section>
  );
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

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
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
          <h4 className="font-heading text-3xl font-normal mb-6 text-secondary">
            Is EVLT Painful?
          </h4>
          <p className="text-xl mb-8 leading-relaxed font-light text-gray-600">
            Most patients describe EVLT as mildly uncomfortable at most, not painful.
          </p>
          <div className="space-y-4">
            {[
              "Local anesthesia prevents pain",
              "You may feel slight pressure or warmth",
              "Post-procedure soreness is minimal and temporary",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-lg font-light text-gray-600">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg font-light text-gray-600 mt-6">
            Pain is usually managed with simple oral medication if needed.
          </p>
        </div>
      ),
    },
    {
      id: "recovery",
      title: "Recovery After EVLT",
      content: (
        <div>
          <h4 className="font-heading text-3xl font-normal mb-8 text-secondary">
            Recovery After EVLT
          </h4>
          <div className="space-y-4">
            {[
              "Walk immediately after the procedure",
              "Resume normal daily activities within 1–2 days",
              "Wear compression stockings as advised",
              "Avoid intense workouts for a short period",
              "Follow-up ultrasound confirms successful closure",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span className="text-lg font-light text-gray-600">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg font-light text-gray-600 mt-6">
            Most patients return to work within 24–48 hours.
          </p>
        </div>
      ),
    },
    {
      id: "safety",
      title: "Is EVLT Safe?",
      content: (
        <div>
          <h4 className="font-heading text-3xl font-normal mb-6 text-secondary">
            Is EVLT Safe?
          </h4>
          <div className="mb-10">
            <p className="font-heading text-xl font-medium mb-4 text-secondary">
              Yes. EVLT is FDA-approved and globally accepted.
            </p>
            <p className="text-lg font-medium mb-6 text-secondary">
              When performed by an experienced specialist:
            </p>
            <div className="space-y-4">
              {[
                "Complications are rare",
                "Infection risk is minimal",
                "Long-term outcomes are excellent",
              ].map((item, idx) => (
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
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="font-heading text-4xl md:text-[56px] leading-[1.1] font-normal mb-20 max-w-3xl text-center mx-auto text-secondary">
          Patient Guide &{" "}
          <span className="italic text-primary">Frequently Asked Questions</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-24">
          {/* Desktop Navigation */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="sticky top-32">
              <div className="flex flex-col">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left py-5 transition-all duration-300 text-lg flex justify-between items-center group cursor-pointer border-b border-gray-200 ${
                      activeTab === section.id ? "text-primary font-medium" : "text-gray-500 hover:text-secondary"
                    }`}
                  >
                    <span
                      className={`${
                        activeTab === section.id ? "translate-x-2" : ""
                      } transition-all duration-300`}
                    >
                      {section.title}
                    </span>
                    <span
                      className={`${
                        activeTab === section.id
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2"
                      } transition-all duration-300 text-primary`}
                    >
                      <Icons.ChevronRight />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            {/* Mobile Accordion */}
            <div className="lg:hidden space-y-4">
              {sections.map((section) => (
                <div key={section.id} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full flex justify-between items-center py-5 text-left text-xl cursor-pointer text-secondary"
                  >
                    <span className="font-heading">{section.title}</span>
                    <div
                      className={`transform transition-transform duration-300 text-primary ${
                        openAccordion === section.id ? "rotate-180" : ""
                      }`}
                    >
                      <Icons.ChevronDown />
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      openAccordion === section.id
                        ? "max-h-[1000px] opacity-100 pb-8"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Scrolling Content */}
            <div className="hidden lg:block space-y-32">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-32">
                  {section.content}
                </div>
              ))}
            </div>
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
      <WhyEVLT />
      <WhoNeedsEVLT />
      <HowItWorks />
      <TreatedVeinResult />
      <BenefitsOfEVLT />
      <EVLTvsSurgery />
      <DiseaseInfoSection />
      <WhyChoosePlatformSection />
      <EVLTCTASection />
      <Footer />
    </main>
  );
}