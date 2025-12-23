"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

const tableOfContents = [
  { id: "symptoms", title: "You Should See a Doctor If You Have Any of These Symptoms" },
  { id: "risk-factors", title: "What If You Have Risk Factors" },
  { id: "doctor-visit", title: "What Happens During a Doctor Visit?" },
  { id: "too-early", title: "Is It Ever Too Early to See a Doctor?" },
  { id: "wait-too-long", title: "What Happens If You Wait Too Long?" },
  { id: "bottom-line", title: "The Bottom Line" },
];

export default function WhenToSeeDoctorPage() {
  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id: string) => {
    setActiveSection(id);
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
      const sectionIds = tableOfContents.map(item => item.id);
      let currentSection = sectionIds[0];

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-surface pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 text-sm transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <h1 className="font-heading text-4xl md:text-[56px] md:leading-[73px] mt-4" style={{ color: '#026460' }}>
            When Should You See a Doctor for Varicose Veins?
          </h1>
          <p className="text-lg md:text-[22px] md:leading-[33px] mt-4 max-w-2xl" style={{ color: '#48546B' }}>
            Knowing the right time can prevent long-term damage
          </p>

          {/* Author Info */}
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm md:text-base" style={{ color: '#48546B' }}>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Written by</p>
                <p className="font-medium text-secondary">Dr. Priya Sharma</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Medically reviewed by</p>
                <p className="font-medium text-secondary">Dr. Rajesh Kumar, MD</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Last Updated</p>
                <p className="font-medium text-secondary">November 30, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content with Sidebar */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Article */}
          <article className="lg:w-2/3">

        {/* Intro */}
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-6" style={{ color: '#48546B' }}>
          Many people live with leg discomfort for years, assuming it&apos;s just part of aging, long work hours, or fatigue.
        </p>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-6" style={{ color: '#48546B' }}>
          But when it comes to Varicose veins, <strong className="font-bold">waiting too long can allow a manageable condition to become a chronic one</strong>.
        </p>
        <p className="text-lg md:text-[22px] md:leading-[33px] font-bold mb-12" style={{ color: '#48546B' }}>
          So how do you know when it&apos;s time to see a doctor? Let&apos;s break it down.
        </p>

        {/* A Simple Truth */}
        <h2 className="font-heading text-2xl md:text-3xl text-[#023936] mb-6">
          First: A Simple Truth
        </h2>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          <strong className="font-bold">Varicose veins are not just a cosmetic problem.</strong>
        </p>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          They are caused by faulty vein valves and abnormal blood flow. Once valves are damaged, they do not heal on their own.
        </p>
        <div className="bg-primary/5 p-6 rounded-xl mb-12">
          <p className="text-lg md:text-[22px] md:leading-[33px]" style={{ color: '#48546B' }}>
            The goal of seeing a doctor early is not always immediate treatment — it&apos;s <strong className="font-bold">early diagnosis and prevention of progression</strong>.
          </p>
        </div>

        {/* Symptoms List */}
        <h2 id="symptoms" className="font-heading text-2xl md:text-3xl text-[#023936] mb-8 scroll-mt-28">
          You Should See a Doctor If You Have Any of These Symptoms
        </h2>

        {/* Symptom 1 */}
        <div className="mb-10">
          <h3 className="font-heading text-xl text-[#023936] mb-3">
            1. Persistent Heaviness or Tiredness in the Legs
          </h3>
          <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>If your legs:</p>
          <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
            <li>Feel heavy or fatigued by evening</li>
            <li>Improve only when you elevate them</li>
            <li>Feel worse after standing or sitting long hours</li>
          </ul>
          <p className="text-base italic" style={{ color: '#48546B' }}>
            This is often one of the earliest signs of venous reflux and should not be ignored if it happens regularly.
          </p>
        </div>

        {/* Symptom 2 */}
        <div className="mb-10">
          <h3 className="font-heading text-xl text-[#023936] mb-3">
            2. Leg Pain, Aching, or Throbbing That Keeps Returning
          </h3>
          <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>
            Occasional leg pain can be normal. But see a doctor if:
          </p>
          <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
            <li>Pain is recurring</li>
            <li>Pain worsens by the end of the day</li>
            <li>Pain is relieved by rest or elevation</li>
          </ul>
          <p className="text-base italic" style={{ color: '#48546B' }}>
            This pattern strongly suggests a <strong className="font-bold">circulation-related issue</strong> rather than muscle strain.
          </p>
        </div>

        {/* Symptom 3 */}
        <div className="mb-10">
          <h3 className="font-heading text-xl text-[#023936] mb-3">
            3. Swelling in the Ankles or Feet
          </h3>
          <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>Mild swelling that:</p>
          <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
            <li>Appears daily</li>
            <li>Is worse in the evening</li>
            <li>Improves overnight</li>
          </ul>
          <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>
            is a red flag for increasing pressure inside the veins.
          </p>
          <p className="text-primary font-bold text-lg">
            Swelling means the condition is no longer just superficial.
          </p>
        </div>

        {/* Symptom 4 */}
        <div className="mb-10">
          <h3 className="font-heading text-xl text-[#023936] mb-3">
            4. Visible Varicoseor Spider Veins With Symptoms
          </h3>
          <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>
            Not all visible veins need treatment. But you should consult a doctor if visible veins are accompanied by:
          </p>
          <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
            <li>Pain</li>
            <li>Heaviness</li>
            <li>Swelling</li>
            <li>Skin irritation</li>
          </ul>
          <p className="text-base italic" style={{ color: '#48546B' }}>
            <strong className="font-bold">Visible veins + symptoms</strong> usually indicate underlying vein valve failure.
          </p>
        </div>

        {/* Symptom 5 */}
        <div className="mb-10">
          <h3 className="font-heading text-xl text-[#023936] mb-3">
            5. Night Cramps or Restless Legs
          </h3>
          <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>Frequent:</p>
          <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
            <li>Calf cramps at night</li>
            <li>Restlessness that disturbs sleep</li>
          </ul>
          <p className="text-base italic" style={{ color: '#48546B' }}>
            can be linked to poor venous circulation and should be evaluated, especially if combined with daytime leg symptoms.
          </p>
        </div>

        {/* Symptom 6 - Warning */}
        <div className="mb-10 bg-cta/10 p-6 rounded-xl">
          <h3 className="font-heading text-xl text-[#023936] mb-3">
            6. Skin Changes Around the Ankles or Calves
          </h3>
          <p className="text-lg md:text-[22px] md:leading-[33px] font-bold mb-3" style={{ color: '#48546B' }}>See a doctor immediately if you notice:</p>
          <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
            <li>Darkening or brownish skin</li>
            <li>Redness or itching</li>
            <li>Thickened or shiny skin</li>
            <li>Eczema-like patches</li>
          </ul>
          <p className="text-lg md:text-[22px] md:leading-[33px] font-bold" style={{ color: '#48546B' }}>
            These are signs of chronic venous insufficiency, not just &quot;skin issues.&quot;
          </p>
        </div>

        {/* Symptom 7 - Urgent */}
        <div className="mb-10 bg-red-50 p-6 rounded-xl">
          <h3 className="font-heading text-xl text-[#023936] mb-3">
            7. Non-Healing Wounds or Ulcers
          </h3>
          <p className="text-red-600 font-bold text-lg mb-3">This is an urgent sign.</p>
          <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>Open wounds near the ankles that:</p>
          <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
            <li>Heal very slowly</li>
            <li>Keep reopening</li>
            <li>Are painless but persistent</li>
          </ul>
          <p className="text-lg md:text-[22px] md:leading-[33px] font-bold" style={{ color: '#48546B' }}>
            often indicate advanced vein disease and require prompt medical care.
          </p>
        </div>

        {/* Symptom 8 */}
        <div className="mb-12">
          <h3 className="font-heading text-xl text-[#023936] mb-3">
            8. Symptoms in Only One Leg
          </h3>
          <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>
            Varicose vein disease often starts unevenly. If one leg consistently feels:
          </p>
          <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
            <li>More painful</li>
            <li>More swollen</li>
            <li>Heavier than the other</li>
          </ul>
          <p className="text-base italic" style={{ color: '#48546B' }}>
            it&apos;s important to rule out significant venous reflux or other vascular conditions.
          </p>
        </div>

        {/* Risk Factors */}
        <h2 id="risk-factors" className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28">
          What If You Have Risk Factors — Even Mild Symptoms Matter
        </h2>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          You should consider early evaluation if you:
        </p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-6 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li>Have a family history of Varicose veins</li>
          <li>Stand or sit for long hours daily</li>
          <li>Are pregnant or recently delivered</li>
          <li>Are overweight</li>
          <li>Are over 40</li>
        </ul>
        <p className="text-lg md:text-[22px] md:leading-[33px] font-bold mb-12" style={{ color: '#48546B' }}>
          In these cases, even mild symptoms deserve attention.
        </p>

        {/* What Happens During Visit */}
        <h2 id="doctor-visit" className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28">
          What Happens During a Doctor Visit?
        </h2>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          Seeing a doctor does not automatically mean treatment. Typically, it involves:
        </p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-6 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li>Symptom discussion</li>
          <li>Physical examination</li>
          <li><strong className="font-bold">Doppler ultrasound</strong> to assess blood flow</li>
        </ul>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>This helps identify:</p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-12 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li>Whether valves are faulty</li>
          <li>Which veins are affected</li>
          <li>Whether treatment is needed now or later</li>
        </ul>

        {/* Too Early? */}
        <h2 id="too-early" className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28">
          Is It Ever Too Early to See a Doctor?
        </h2>
        <p className="text-2xl font-heading text-primary mb-4">No.</p>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>Early evaluation can:</p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-6 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li>Confirm whether symptoms are vein-related</li>
          <li>Provide reassurance if treatment isn&apos;t needed</li>
          <li>Prevent complications</li>
          <li>Help you plan treatment at the right time</li>
        </ul>
        <p className="text-lg md:text-[22px] md:leading-[33px] font-bold mb-12" style={{ color: '#48546B' }}>
          It&apos;s always easier to treat vein disease early than late.
        </p>

        {/* What If Wait Too Long */}
        <h2 id="wait-too-long" className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28">
          What Happens If You Wait Too Long?
        </h2>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          Untreated Varicose veins can progress to:
        </p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-6 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li>Chronic pain and swelling</li>
          <li>Skin discoloration and damage</li>
          <li>Recurrent infections</li>
          <li>Venous ulcers</li>
          <li>Reduced mobility and quality of life</li>
        </ul>
        <p className="text-lg md:text-[22px] md:leading-[33px] font-bold mb-12" style={{ color: '#48546B' }}>
          Modern treatments are simple — but advanced disease requires more care.
        </p>

        {/* Bottom Line */}
        <div id="bottom-line" className="text-white p-8 rounded-2xl mb-12 scroll-mt-28" style={{ backgroundColor: '#1D5E5B' }}>
          <h2 className="font-heading text-2xl mb-4">The Bottom Line</h2>
          <p className="text-white/90 text-lg md:text-[22px] md:leading-[33px] mb-4">See a doctor for Varicose veins if:</p>
          <ul className="list-disc list-inside text-white/80 text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-4">
            <li>Symptoms are persistent</li>
            <li>Your legs affect your daily comfort</li>
            <li>Skin changes appear</li>
            <li>Swelling becomes regular</li>
            <li>You&apos;re unsure what&apos;s causing your symptoms</li>
          </ul>
          <p className="text-white font-bold text-lg md:text-[22px]">
            Listening to your body early can save you years of discomfort later.
          </p>
        </div>

          </article>

          {/* Table of Contents Sidebar */}
          <aside className="hidden lg:block lg:w-1/3">
            <div className="sticky top-28 bg-surface rounded-2xl p-6">
              <h3 className="font-heading text-xl text-secondary mb-6">Table of Contents</h3>
              <nav>
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left transition-all cursor-pointer py-3 border-b-2 font-heading ${activeSection === item.id ? 'text-primary text-base font-medium border-primary' : 'text-gray-600 hover:text-primary text-sm border-gray-200'}`}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(to bottom, #E8D5A3 0%, #F5E6C3 50%, #FFFFFF 100%)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-[#023936] mb-4">
            Take the Next Step
          </h2>
          <p className="text-lg md:text-[22px] md:leading-[33px] mb-8" style={{ color: '#48546B' }}>
            If your legs have been bothering you — even quietly — it&apos;s worth getting them checked.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-white font-semibold py-3 px-8 rounded-full transition-colors hover:opacity-90" style={{ backgroundColor: '#026460' }}>
              Book a Consultation
            </button>
            <button className="bg-white font-semibold py-3 px-8 rounded-full transition-colors hover:opacity-90" style={{ border: '2px solid #026460', color: '#026460' }}>
              Find a Specialist Near You
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
