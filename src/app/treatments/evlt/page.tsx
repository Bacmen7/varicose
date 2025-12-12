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
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-0" style={{ backgroundColor: '#C5DAD8' }}>
          <div className="max-w-xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-normal mb-8 tracking-tight leading-tight" style={{ color: '#026460' }}>
              Endovenous Laser Treatment (EVLT)
            </h1>
            <div className="w-20 h-px mb-8 opacity-40" style={{ backgroundColor: '#026460' }}></div>
            <p className="text-xl lg:text-[22px] leading-relaxed tracking-wide" style={{ color: '#026460' }}>
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
    <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* Left: Heading & Description */}
          <div className="lg:w-1/2 pt-4">
            <h2 className="font-heading text-4xl md:text-[42px] leading-tight mb-8 font-normal" style={{ color: '#026460' }}>
              What is Endovenous Laser Treatment?
            </h2>
            <div className="text-lg md:text-[20px] leading-relaxed space-y-6" style={{ color: 'rgba(2, 100, 96, 0.8)' }}>
              <p>
                EVLT is a minimally invasive, gold-standard procedure used to treat varicose veins at their root cause.
              </p>
              <p>
                Instead of removing veins surgically, EVLT uses laser energy delivered inside the faulty vein to gently seal it shut. Once closed, blood naturally reroutes to healthy veins, , relieving symptoms and improving circulation.

              </p>
            </div>
          </div>

          {/* Right: Benefits List */}
          <div className="lg:w-1/2 w-full lg:pt-6">
            <div style={{ borderTop: '1px solid #D4E5E4' }}>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center justify-between py-6 group cursor-default" style={{ borderBottom: '1px solid #D4E5E4' }}>
                  <span className="font-heading text-xl font-medium" style={{ color: '#026460' }}>
                    {benefit}
                  </span>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: '#026460' }}>
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
    <section className="py-24" style={{ backgroundColor: '#E8EEEE' }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-[42px] leading-tight mb-4 font-normal" style={{ color: '#026460' }}>
            Why EVLT is the Gold Standard
          </h2>
          <p className="text-lg uppercase tracking-widest" style={{ color: 'rgba(2, 100, 96, 0.6)' }}>
            Superior Results &bull; Minimal Downtime
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col items-start group">
              <div className="mb-6 transition-transform duration-300 group-hover:scale-110" style={{ color: '#026460' }}>
                {point.icon}
              </div>
              <h3 className="font-heading text-2xl mb-2" style={{ color: '#026460' }}>
                {point.title}
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'rgba(2, 100, 96, 0.7)' }}>
                {point.desc}
              </p>
            </div>
          ))}

          {/* Recommendation Block */}
          <div className="flex flex-col justify-center items-start pl-8" style={{ borderLeft: '2px solid #026460' }}>
            <p className="font-heading text-lg font-medium italic leading-relaxed" style={{ color: '#026460' }}>
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
    "Visible, bulging varicose veins",
    "Persistent leg pain or heaviness",
    "Swelling around ankles or calves",
    "Night cramps or restless legs",
    "Skin darkening or itching near veins",
    "Non-healing venous ulcers",
    "Symptoms worsen after standing",
  ];

  return (
    <section className="py-24" style={{ backgroundColor: '#D8DCDF' }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left: Heading & Medical Confirmation */}
          <div className="lg:w-1/2">
            <h2 className="font-heading text-4xl md:text-[42px] leading-tight mb-8 font-normal" style={{ color: '#026460' }}>
              Who Needs EVLT?
            </h2>
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'rgba(2, 100, 96, 0.08)' }}>
              <p className="text-sm tracking-wide font-bold uppercase mb-3" style={{ color: '#026460' }}>
                Medical Confirmation
              </p>
              <p className="font-heading text-lg leading-relaxed" style={{ color: '#026460' }}>
                A Doppler ultrasound is used to confirm whether EVLT is the right treatment for you.
              </p>
            </div>
          </div>

          {/* Right: Symptoms List */}
          <div className="lg:w-1/2">
            <div className="space-y-5">
              {symptoms.map((symptom, index) => (
                <div key={index} className="flex items-center gap-4 pb-5" style={{ borderBottom: '1px solid rgba(2, 100, 96, 0.15)' }}>
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#026460' }}></div>
                  <span className="text-xl" style={{ color: 'rgba(2, 100, 96, 0.9)' }}>
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
    <section className="py-24" style={{ backgroundColor: '#C5DAD8' }}>
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
            <h2 className="font-heading text-4xl md:text-[42px] leading-tight mb-16 font-normal" style={{ color: '#026460' }}>
              How Does EVLT Work?
            </h2>

            <div className="pl-8 md:pl-12 space-y-16 relative" style={{ borderLeft: '1px solid rgba(2, 100, 96, 0.3)' }}>
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full transition-colors duration-300" style={{ backgroundColor: '#C5DAD8', border: '4px solid #026460' }}></div>

                  <div className="flex flex-col sm:flex-row gap-4 sm:items-baseline mb-3">
                    <span className="font-heading text-4xl font-normal transition-colors duration-300" style={{ color: 'rgba(2, 100, 96, 0.3)' }}>
                      {`0${index + 1}`}
                    </span>
                    <h3 className="font-heading text-2xl font-normal" style={{ color: '#026460' }}>
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-lg leading-relaxed max-w-lg" style={{ color: 'rgba(2, 100, 96, 0.8)' }}>
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
    <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-[42px] leading-tight mb-6 font-normal" style={{ color: '#026460' }}>
            What Happens to the Treated Vein?
          </h2>

          <p className="text-xl mb-12" style={{ color: 'rgba(2, 100, 96, 0.8)' }}>
            Once sealed, the treated vein is:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="flex flex-col items-center p-8 rounded-2xl group transition-all duration-300 shadow-sm" style={{ backgroundColor: '#E8EEEE', border: '1px solid #C5DAD8' }}>
                <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300" style={{ color: '#026460' }}>
                  <Icons.Check />
                </div>
                <span className="font-heading text-xl font-medium leading-snug" style={{ color: '#026460' }}>
                  {result}
                </span>
              </div>
            ))}
          </div>

          <div className="inline-block relative">
            <div className="absolute inset-x-0 bottom-1 h-3 -z-10 skew-x-12" style={{ backgroundColor: 'rgba(2, 100, 96, 0.15)' }}></div>
            <p className="font-heading text-2xl md:text-3xl font-normal leading-relaxed" style={{ color: '#026460' }}>
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
    <section className="py-24" style={{ backgroundColor: '#D8DCDF' }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-[42px] leading-tight mb-6 font-normal" style={{ color: '#026460' }}>
            Benefits of EVLT
          </h2>
          <div className="w-16 h-1 mx-auto opacity-60" style={{ backgroundColor: '#026460' }}></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex gap-5 group p-6 rounded-xl transition-colors duration-300 border border-transparent hover:shadow-sm" style={{ backgroundColor: 'transparent' }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#FFFFFF'; e.currentTarget.style.borderColor = '#D4E5E4'; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'transparent'; }}>
              <div className="flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" style={{ color: '#026460' }}>
                <Icons.BigCheck />
              </div>
              <div>
                <h3 className="font-heading text-xl font-medium mb-1" style={{ color: '#026460' }}>
                  {benefit.title}
                </h3>
                <p className="text-lg" style={{ color: 'rgba(2, 100, 96, 0.8)' }}>
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
    <section className="py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 lg:px-24">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-[42px] leading-tight mb-4 font-normal" style={{ color: '#026460' }}>
            EVLT vs. Traditional Surgery
          </h2>
          <p className="text-lg" style={{ color: 'rgba(2, 100, 96, 0.6)' }}>
            Why modern technology is the preferred choice
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-sm" style={{ border: '1px solid #C5DAD8', backgroundColor: '#FFFFFF' }}>
          {/* Table Header */}
          <div className="grid grid-cols-2" style={{ borderBottom: '1px solid #C5DAD8' }}>
            <div className="p-6 md:p-8 text-center" style={{ borderRight: '1px solid #C5DAD8', backgroundColor: '#C5DAD8' }}>
              <h3 className="font-heading text-xl md:text-2xl font-bold" style={{ color: '#026460' }}>EVLT</h3>

            </div>
            <div className="p-6 md:p-8 text-center" style={{ backgroundColor: '#D8DCDF' }}>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-gray-600">Traditional Surgery</h3>

            </div>
          </div>

          {/* Table Body */}
          <div>
            {comparisons.map((item, index) => (
              <div key={index} className="grid grid-cols-2 last:border-0 transition-colors" style={{ borderBottom: '1px solid rgba(212, 229, 228, 0.5)' }}>
                {/* EVLT Side */}
                <div className="p-6 md:p-8 flex items-center gap-4" style={{ borderRight: '1px solid rgba(212, 229, 228, 0.5)', backgroundColor: '#FFFFFF' }}>
                  <div className="flex-shrink-0" style={{ color: '#026460' }}>
                    <Icons.Check />
                  </div>
                  <span className="text-lg font-medium" style={{ color: '#026460' }}>
                    {item.evlt}
                  </span>
                </div>

                {/* Surgery Side */}
                <div className="p-6 md:p-8 flex items-center gap-4" style={{ backgroundColor: '#FFFFFF' }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0"></div>
                  <span className="text-lg text-gray-500">
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
    <section className="py-24" style={{ backgroundColor: '#C5DAD8' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left Content - Center Aligned */}
          <div className="lg:w-1/2 flex flex-col items-center">
            <h2 className="font-heading text-4xl md:text-[48px] leading-tight font-normal mb-12 text-center" style={{ color: '#026460' }}>
              Why Choose EVLT Through Our Platform?
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-5 group"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300" style={{ backgroundColor: '#FFFFFF', color: '#026460' }}>
                    <Icons.Check />
                  </div>
                  <span className="text-xl font-light" style={{ color: 'rgba(2, 100, 96, 0.9)' }}>
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
    <section className="py-24" style={{ backgroundColor: '#026460' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 text-center">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-[56px] font-normal mb-6 text-white leading-tight">
          Take the First Step Toward Healthier Legs
        </h2>
        <p className="text-xl md:text-2xl mb-4 font-light" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
          Varicose veins don&apos;t have to control your life.
        </p>
        <p className="text-lg md:text-xl mb-12 font-light max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          EVLT offers safe, effective, long-lasting relief — without surgery.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="font-semibold py-4 px-8 rounded-full transition-colors duration-300 cursor-pointer text-lg" style={{ backgroundColor: '#FF8968', color: '#FFFFFF' }}>
            Book a Consultation
          </button>
          <button className="bg-transparent font-semibold py-4 px-8 rounded-full transition-colors duration-300 cursor-pointer text-lg" style={{ border: '2px solid #FFFFFF', color: '#FFFFFF' }}>
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
      const sectionIds = ["pain", "recovery", "safety", "insurance"];
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
          <h4 className="font-heading text-3xl font-normal mb-6" style={{ color: '#026460' }}>
            Is EVLT Painful?
          </h4>
          <p className="text-xl mb-8 leading-relaxed font-light" style={{ color: 'rgba(2, 100, 96, 0.8)' }}>
            Most patients describe EVLT as mildly uncomfortable at most, not painful.
          </p>
          <div className="space-y-4">
            {[
              "Local anesthesia prevents pain",
              "You may feel slight pressure or warmth",
              "Post-procedure soreness is minimal and temporary",
              "Pain is usually managed with simple oral medication if needed",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#026460' }}></div>
                <span className="text-lg font-light" style={{ color: 'rgba(2, 100, 96, 0.8)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "recovery",
      title: "Recovery After EVLT",
      content: (
        <div>
          <h4 className="font-heading text-3xl font-normal mb-8" style={{ color: '#026460' }}>
            Recovery After EVLT
          </h4>
          <div className="space-y-4">
            {[
              "Walk immediately after the procedure",
              "Resume normal daily activities within 1–2 days",
              "Wear compression stockings as advised",
              "Avoid intense workouts for a short period",
              "Follow-up ultrasound confirms successful closure",
              "Most patients return to work within 24–48 hours",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#026460' }}></div>
                <span className="text-lg font-light" style={{ color: 'rgba(2, 100, 96, 0.8)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "safety",
      title: "Is EVLT Safe?",
      content: (
        <div>
          <h4 className="font-heading text-3xl font-normal mb-6" style={{ color: '#026460' }}>
            Is EVLT Safe?
          </h4>
          <div className="mb-10">
            <p className="font-heading text-xl font-medium mb-4" style={{ color: '#026460' }}>
              Yes. EVLT is FDA-approved and globally accepted.
            </p>
            <p className="text-lg font-medium mb-6" style={{ color: '#026460' }}>
              When performed by an experienced specialist:
            </p>
            <div className="space-y-4">
              {[
                "Complications are rare",
                "Infection risk is minimal",
                "Long-term outcomes are excellent",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#026460' }}></div>
                  <span className="text-lg font-light" style={{ color: 'rgba(2, 100, 96, 0.8)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "insurance",
      title: "Insurance Coverage",
      content: (
        <div>
          <h4 className="font-heading text-3xl font-normal mb-6" style={{ color: '#026460' }}>
            Is EVLT Covered by Insurance?
          </h4>
          <p className="text-xl mb-8 leading-relaxed font-light" style={{ color: 'rgba(2, 100, 96, 0.8)' }}>
            In many cases, EVLT is covered by insurance when varicose veins are medically necessary (pain, swelling, ulcers, venous reflux).
          </p>
          <p className="text-lg font-medium mb-6" style={{ color: '#026460' }}>
            Our team can help you:
          </p>
          <div className="space-y-4">
            {["Check eligibility", "Understand coverage", "Get required documentation"].map(
              (item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#026460' }}></div>
                  <span className="text-lg font-light" style={{ color: 'rgba(2, 100, 96, 0.8)' }}>{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-32" style={{ backgroundColor: '#E8EEEE' }}>
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="font-heading text-4xl md:text-[56px] leading-[1.1] font-normal mb-20 max-w-3xl text-center mx-auto" style={{ color: '#026460' }}>
          Patient Guide &{" "}
          <span className="italic" style={{ color: '#026460' }}>Frequently Asked Questions</span>
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
                    className="text-left py-5 transition-all duration-300 text-lg flex justify-between items-center group cursor-pointer"
                    style={{ borderBottom: '1px solid rgba(2, 100, 96, 0.2)' }}
                  >
                    <span
                      className={`${
                        activeTab === section.id
                          ? "font-medium translate-x-2"
                          : "group-hover:opacity-100"
                      } transition-all duration-300`}
                      style={{ color: activeTab === section.id ? '#026460' : 'rgba(2, 100, 96, 0.6)' }}
                    >
                      {section.title}
                    </span>
                    <span
                      className={`${
                        activeTab === section.id
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-2"
                      } transition-all duration-300`}
                      style={{ color: '#026460' }}
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
                <div key={section.id} style={{ borderBottom: '1px solid rgba(2, 100, 96, 0.2)' }}>
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full flex justify-between items-center py-5 text-left text-xl cursor-pointer"
                    style={{ color: '#026460' }}
                  >
                    <span className="font-heading">{section.title}</span>
                    <div
                      className={`transform transition-transform duration-300 ${
                        openAccordion === section.id ? "rotate-180" : ""
                      }`}
                      style={{ color: '#026460' }}
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