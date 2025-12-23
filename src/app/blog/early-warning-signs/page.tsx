"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

const tableOfContents = [
  { id: "why-early-signs-matter", title: "Why Early Signs Matter" },
  { id: "what-are-these-signs", title: "What Are These Signs?" },
  { id: "who-is-at-higher-risk", title: "Who Is at Higher Risk?" },
  { id: "when-to-see-doctor", title: "When Should You See a Doctor?" },
  { id: "early-treatment", title: "Can Early Treatment Prevent Progression?" },
  { id: "takeaway", title: "The Takeaway" },
];

export default function EarlyWarningSignsPage() {
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
            Early Warning Signs of Varicose Veins
          </h1>
          <p className="text-lg md:text-[22px] md:leading-[33px] mt-4 max-w-2xl" style={{ color: '#48546B' }}>
            Subtle symptoms today can prevent serious vein problems tomorrow
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
                <p className="font-medium text-secondary">November 25, 2025</p>
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
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          Most people think Varicose veins appear suddenly as bulging, twisted veins.
        </p>
        <p className="text-2xl font-heading text-[#023936] mb-6">
          They don&apos;t.
        </p>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-12" style={{ color: '#48546B' }}>
          Long before veins become visible, your body starts sending quiet warning signals — signals that are easy to ignore, but <strong className="font-bold">important to recognize early</strong>.
        </p>

        {/* Why Early Signs Matter */}
        <h2 id="why-early-signs-matter" className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28">
          Why Early Signs Matter
        </h2>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          Varicose veins are a <strong className="font-bold">progressive condition</strong>. That means:
        </p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-6 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li>Symptoms start mild</li>
          <li>They gradually worsen over time</li>
          <li><strong className="font-bold">Early intervention can prevent complications</strong></li>
        </ul>
        <div className="bg-cta/10 p-5 rounded-xl mb-12">
          <p className="text-gray-700 font-medium">
            Ignoring early signs can lead to pain, skin damage, and even ulcers later.
          </p>
        </div>

        {/* 10 Warning Signs */}
        <h2 id="what-are-these-signs" className="font-heading text-2xl md:text-3xl text-[#023936] mb-8 scroll-mt-28">
          What Are These Signs?
        </h2>

        <div className="space-y-10 mb-12">

          {/* Sign 1 */}
          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-3">
              1. Heaviness or Tiredness in the Legs
            </h3>
            <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>
              One of the earliest and most common signs. You may notice:
            </p>
            <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
              <li>Legs feel heavy by evening</li>
              <li>Fatigue after standing or sitting long hours</li>
              <li>Relief when you elevate your legs</li>
            </ul>
            <p className="text-base italic" style={{ color: '#48546B' }}>
              This happens because blood starts pooling in the veins instead of flowing upward efficiently.
            </p>
          </div>

          {/* Sign 2 */}
          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-3">
              2. Aching, Throbbing, or Dull Leg Pain
            </h3>
            <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>
              This pain is usually:
            </p>
            <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
              <li>Worse after long periods of standing</li>
              <li>Relieved by rest or leg elevation</li>
              <li>Felt more in calves or behind knees</li>
            </ul>
            <p className="text-base italic" style={{ color: '#48546B' }}>
              It&apos;s often mistaken for muscle strain — but it&apos;s actually <strong className="font-bold">circulation-related</strong>.
            </p>
          </div>

          {/* Sign 3 */}
          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-3">
              3. Swelling Around Ankles or Feet
            </h3>
            <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>
              Mild ankle swelling that:
            </p>
            <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
              <li>Appears by evening</li>
              <li>Improves overnight</li>
              <li>Happens in both legs or one leg</li>
            </ul>
            <p className="text-base italic" style={{ color: '#48546B' }}>
              This occurs when increased vein pressure pushes fluid into surrounding tissues.
            </p>
          </div>

          {/* Sign 4 */}
          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-3">
              4. Night Cramps or Restless Legs
            </h3>
            <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>
              Early vein disease can cause:
            </p>
            <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
              <li>Sudden calf cramps at night</li>
              <li>Restlessness or urge to move legs</li>
              <li>Interrupted sleep</li>
            </ul>
            <p className="text-base italic" style={{ color: '#48546B' }}>
              Poor circulation affects oxygen delivery to muscles, triggering cramps.
            </p>
          </div>

          {/* Sign 5 */}
          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-3">
              5. Itching or Burning Sensation in the Legs
            </h3>
            <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>
              You may feel:
            </p>
            <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
              <li>Persistent itching around calves or ankles</li>
              <li>Mild burning or tingling</li>
              <li>Skin irritation without a visible rash</li>
            </ul>
            <p className="text-base italic" style={{ color: '#48546B' }}>
              This is often an early sign of skin changes caused by venous congestion.
            </p>
          </div>

          {/* Sign 6 */}
          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-3">
              6. Skin Color Changes (Early Stage)
            </h3>
            <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>
              Watch out for:
            </p>
            <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
              <li>Slight darkening around ankles</li>
              <li>Reddish or brownish discoloration</li>
              <li>Skin that looks thinner or shinier</li>
            </ul>
            <p className="text-base italic" style={{ color: '#48546B' }}>
              These are early indicators of chronic venous pressure affecting the skin.
            </p>
          </div>

          {/* Sign 7 */}
          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-3">
              7. Appearance of Spider Veins
            </h3>
            <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>
              Spider veins are:
            </p>
            <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
              <li>Thin, red, blue, or purple lines</li>
              <li>Often the first visible sign</li>
              <li>Not always harmless</li>
            </ul>
            <p className="text-base italic" style={{ color: '#48546B' }}>
              While mostly cosmetic, they can indicate <strong className="font-bold">deeper venous reflux</strong> underneath.
            </p>
          </div>

          {/* Sign 8 */}
          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-3">
              8. Symptoms That Worsen With Heat
            </h3>
            <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>
              If your leg discomfort:
            </p>
            <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
              <li>Feels worse in hot weather</li>
              <li>Increases after hot showers</li>
              <li>Improves in cooler conditions</li>
            </ul>
            <p className="text-base italic" style={{ color: '#48546B' }}>
              It may be due to veins dilating further and worsening blood pooling.
            </p>
          </div>

          {/* Sign 9 */}
          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-3">
              9. One Leg Feels Worse Than the Other
            </h3>
            <p className="text-lg md:text-[22px] md:leading-[33px] mb-3" style={{ color: '#48546B' }}>
              Early vein disease often:
            </p>
            <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-1 ml-4 mb-3" style={{ color: '#48546B' }}>
              <li>Starts in one leg</li>
              <li>Progresses asymmetrically</li>
            </ul>
            <p className="text-cta font-bold text-lg">
              Persistent symptoms in one leg should never be ignored.
            </p>
          </div>

          {/* Sign 10 */}
          <div className="bg-primary/5 p-5 rounded-xl">
            <h3 className="font-heading text-xl text-[#023936] mb-3">
              10. Symptoms That Improve With Compression or Elevation
            </h3>
            <p className="text-lg md:text-[22px] md:leading-[33px]" style={{ color: '#48546B' }}>
              If wearing compression stockings or elevating your legs gives relief, it <strong className="font-bold">strongly suggests a venous circulation issue</strong>.
            </p>
          </div>

        </div>

        {/* Risk Factors */}
        <h2 id="who-is-at-higher-risk" className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28">
          Who Is at Higher Risk?
        </h2>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          Pay closer attention if you:
        </p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-12 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li>Have a family history of Varicose veins</li>
          <li>Stand or sit for long hours</li>
          <li>Are pregnant or recently delivered</li>
          <li>Are overweight</li>
          <li>Are over 40</li>
          <li>Have a sedentary lifestyle</li>
        </ul>

        {/* When to See Doctor */}
        <h2 id="when-to-see-doctor" className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28">
          When Should You See a Doctor?
        </h2>
        <p className="text-lg md:text-[22px] md:leading-[33px] font-bold mb-4" style={{ color: '#48546B' }}>
          Don&apos;t wait for veins to become large or painful.
        </p>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          Seek evaluation if you have:
        </p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-6 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li>Persistent heaviness or pain</li>
          <li>Daily swelling</li>
          <li>Night cramps</li>
          <li>Skin changes</li>
          <li>Visible veins + symptoms</li>
        </ul>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-12" style={{ color: '#48546B' }}>
          A simple <strong className="font-bold text-primary">Doppler ultrasound</strong> can identify the problem early.
        </p>

        {/* Early Treatment */}
        <h2 id="early-treatment" className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28">
          Can Early Treatment Prevent Progression?
        </h2>
        <p className="text-2xl font-heading text-primary mb-4">Yes.</p>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          Early diagnosis allows:
        </p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-12 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li>Lifestyle guidance</li>
          <li>Compression therapy when needed</li>
          <li>Monitoring vein health</li>
          <li><strong className="font-bold">Timely minimally invasive treatment</strong> before complications develop</li>
        </ul>

        {/* Takeaway */}
        <div id="takeaway" className="text-white p-8 rounded-2xl mb-12 scroll-mt-28" style={{ backgroundColor: '#1D5E5B' }}>
          <h2 className="font-heading text-2xl md:text-3xl mb-4">The Takeaway</h2>
          <p className="text-lg md:text-[22px] md:leading-[33px] text-white/90 mb-4">
            Varicose veins rarely start with bulging veins. They start with:
          </p>
          <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] text-white/80 space-y-2 ml-4 mb-4">
            <li>Heaviness</li>
            <li>Swelling</li>
            <li>Aching</li>
            <li>Subtle skin changes</li>
          </ul>
          <p className="text-lg md:text-[22px] md:leading-[33px] text-white font-medium">
            Listening to these early warning signs can save you from years of discomfort later.
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
            Take Action Early
          </h2>
          <p className="text-lg md:text-[22px] md:leading-[33px] mb-8" style={{ color: '#48546B' }}>
            If your legs have been &quot;trying to tell you something,&quot; it&apos;s time to listen.
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
