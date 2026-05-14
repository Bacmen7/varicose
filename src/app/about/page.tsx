import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ArrowRight, Zap, Search, MessageCircle, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-background">

      {/* ── HERO ── */}
      <section className="w-full bg-accent overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[550px]">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 px-4 py-12 md:px-8 lg:px-16 xl:px-24 lg:py-16 flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto lg:mr-8">
              <p className="font-body text-sm font-semibold tracking-widest uppercase mb-3 flex items-center gap-2 text-primary">
                <span className="w-8 h-px bg-primary inline-block" />
                About Varya Health · Mumbai
              </p>
              <h1 className="font-heading text-secondary text-3xl md:text-4xl lg:text-5xl font-normal mb-4 leading-tight">
                Relief you can trust.{" "}
                <span className="text-primary">Care that comes to you.</span>
              </h1>
              <p className="text-gray-700 text-base lg:text-lg mb-6 leading-relaxed max-w-lg">
                Varicose veins affect millions of Indians, yet most people wait years before seeking help. At Varya Health, we make specialist vascular care simple, accessible, and reassuring for every patient who walks through our doors.
              </p>

              {/* Stats */}
              <div className="flex gap-10 mb-6 justify-center">
                {[
                  { num: "500+", label: "Patients treated" },
                  { num: "1", label: "Dedicated centre, Mumbai" },
                  { num: "10+", label: "Years in healthcare" },
                ].map((s, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <span className="font-heading text-secondary text-2xl font-normal">{s.num}</span>
                    <span className="text-gray-500 text-sm mt-1">{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/blog/when-to-see-doctor" className="bg-primary hover:bg-primary-dark text-white font-semibold text-sm md:text-base py-2.5 px-5 md:py-3 md:px-8 rounded-full flex items-center gap-2 transition-all duration-300 group cursor-pointer w-fit">
                  Meet our specialist
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/blog/when-to-see-doctor" className="border-2 border-primary text-primary font-semibold text-sm md:text-base py-2.5 px-5 md:py-3 md:px-8 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-primary/5 w-fit">
                  Book consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 h-[350px] lg:h-auto relative">
            <Image src="/hero.png" alt="Varya Health" fill className="object-cover object-right" priority />
          </div>
        </div>
      </section>

      {/* ── WHY PATIENTS TRUST US ── */}
      <section className="py-12 lg:py-16 w-full bg-surface">
        <div className="container mx-auto px-8 max-w-[1400px]">
          <div className="mb-8">
            <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Our Approach</p>
            <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-4">Why patients trust Varya Health</h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              We believe good care starts with understanding your concerns. That&apos;s why we give every patient enough time to talk, understand their concerns, and get a treatment plan that&apos;s clear and easy to follow. No rushed visits. No complicated medical terms. Just honest advice and caring support from specialists you can trust.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MessageCircle, title: "Clear & Simple Communication", desc: "We explain your condition in easy language, answer your questions patiently, and help you feel confident about your treatment plan." },
              { icon: Search, title: "Early Diagnosis Matters", desc: "Finding vein problems early can help prevent pain, swelling, skin changes, and other complications later." },
              { icon: Zap, title: "Accurate Vein Assessment", desc: "We use safe ultrasound scans and detailed vein evaluations to understand the cause of your symptoms and guide the right treatment." },
              { icon: MapPin, title: "Easy Access to Care", desc: "With flexible appointments and online consultations, getting expert vein care becomes simpler and more convenient." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-primary/30 transition-all duration-300">
                <span className="bg-accent-lighter mb-5 flex size-12 items-center justify-center rounded-xl text-primary">
                  <item.icon className="size-5" strokeWidth={1.5} />
                </span>
                <h3 className="font-heading text-secondary text-lg font-normal mb-2 leading-snug">{item.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-12 lg:py-16 w-full bg-background">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">How It Works</p>
          <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-12">Your care journey in 3 steps</h2>

          <div className="relative flex flex-col md:flex-row gap-10 md:gap-0">
            {/* Connector line */}
            <div className="hidden md:block absolute top-6 left-[calc(16.666%+24px)] right-[calc(16.666%+24px)] h-px bg-primary/30" />

            {[
              { num: 1, title: "Book a consultation", desc: "Call us, WhatsApp, or book online. We usually respond within a few hours and schedule your visit at your convenience." },
              { num: 2, title: "Diagnosis and scan", desc: "Your specialist reviews your symptoms and performs a duplex ultrasound scan to understand your condition fully." },
              { num: 3, title: "Treatment and recovery", desc: "A personalised treatment plan is created. Most procedures are completed in a single visit with minimal downtime." },
            ].map((s, i) => (
              <div key={i} className="flex-1 flex flex-col items-center text-center px-6">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-5 shrink-0 relative z-10">
                  <span className="font-heading text-white text-lg font-normal">{s.num}</span>
                </div>
                <h3 className="font-heading text-primary text-xl font-normal mb-3">{s.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR SPECIALIST ── */}
      <section className="py-12 lg:py-16 w-full bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Our Specialist</p>
          <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-10">Expert care, delivered with clarity</h2>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left: avatar + name card */}
            <div className="shrink-0 w-full lg:w-64 flex flex-col gap-4">
              <div className="w-full aspect-square rounded-2xl bg-accent flex items-center justify-center border border-primary/20 max-w-[260px]">
                <svg width="72" height="72" viewBox="0 0 48 48" fill="none" stroke="#2C847F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="18" r="9"/>
                  <path d="M7 44c0-9.4 7.6-17 17-17s17 7.6 17 17"/>
                </svg>
              </div>
              <div>
                <h3 className="font-heading text-secondary text-xl font-normal">Dr. Rajeev Sharma</h3>
                <p className="text-primary text-sm font-semibold mt-0.5">Vascular Surgeon &amp; Phlebologist</p>
                <p className="text-gray-400 text-sm mt-0.5">Varya Health, Mumbai</p>
              </div>
              <div className="flex flex-col gap-2">
                {["MBBS", "MS — General Surgery", "Fellowship in Vascular Surgery"].map((q, i) => (
                  <span key={i} className="text-sm font-medium text-primary bg-accent px-3 py-1 rounded-md w-fit">{q}</span>
                ))}
              </div>
            </div>

            {/* Right: content */}
            <div className="flex-1">
              {/* Stats row */}
              <div className="flex gap-8 mb-8 pb-8 border-b border-gray-100">
                {[
                  { num: "15+", label: "Years experience" },
                  { num: "1,000+", label: "Procedures performed" },
                  { num: "3", label: "Languages spoken" },
                ].map((s, i) => (
                  <div key={i}>
                    <span className="font-heading text-primary text-2xl font-normal block">{s.num}</span>
                    <span className="text-gray-500 text-sm">{s.label}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Dr. Rajeev Sharma is a vascular surgeon with a focused practice in minimally invasive vein treatments. He has performed over 1,000 procedures including EVLT, RFA, Foam Sclerotherapy, and Venaseal across leading hospitals in Mumbai.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                His approach is thorough, patient-first, and built around helping people understand their condition before any treatment decision is made. He speaks Hindi and English fluently, making consultations comfortable for patients from all backgrounds.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                Dr. Sharma believes that no patient should feel rushed or confused during their care. Every consultation at Varya Health is unhurried, evidence-based, and focused on finding the right path for each individual.
              </p>

              <Link href="/blog/when-to-see-doctor" className="bg-primary hover:opacity-90 text-white font-semibold text-sm py-3 px-7 rounded-full inline-flex items-center gap-2 transition-all duration-300 group w-fit">
                Book a consultation with Dr. Sharma
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONDITIONS ── */}
      <section className="py-12 lg:py-16 w-full bg-background">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Conditions We Treat</p>
          <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-4">Vascular conditions we specialise in</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-10">
            Our focus is on venous and vascular conditions that affect daily life. We treat a wide range of conditions, with varicose veins as our primary area of expertise.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl px-6 py-5 border-2 border-primary flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0" />
              <span className="font-body text-secondary text-base font-bold flex-1">Varicose veins</span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full text-white shrink-0" style={{ backgroundColor: '#FF8968' }}>Primary</span>
            </div>
            <div className="bg-white rounded-2xl px-6 py-5 border border-gray-200 flex flex-col gap-3">
              {["Spider veins", "Chronic venous insufficiency (CVI)", "DVT awareness and prevention", "Venous leg ulcers", "Leg swelling and venous oedema", "Post-pregnancy vein conditions"].map((label, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="font-body text-secondary text-base">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY PATIENTS CHOOSE US ── */}
      <section className="py-12 lg:py-16 w-full bg-surface">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Why Patients Choose Us</p>
          <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-4">Relief that goes beyond the procedure</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mb-10">
            Choosing the right vascular care centre is about more than just the treatment. It is about feeling heard, supported, and confident in the care you receive at every step.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { icon: "check", title: "No unnecessary surgery", desc: "We recommend surgery only when it is genuinely needed. Most patients are treated with day-care procedures and go home the same day." },
              { icon: "shield", title: "Honest second opinions", desc: "If you have already been advised a procedure elsewhere, we are happy to provide an independent clinical review before you decide." },
              { icon: "dollar", title: "Transparent costs", desc: "We share a clear estimate before any procedure. No hidden charges. We also guide patients on PM-JAY and insurance coverage where applicable." },
              { icon: "screen", title: "Teleconsultation available", desc: "Not able to visit in person? Connect with our specialist via video consultation. We serve patients across Maharashtra through eSanjeevani and direct teleconsult." },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-primary/30 transition-all duration-300 flex flex-col gap-4">
                <span className="bg-accent-lighter flex size-11 items-center justify-center rounded-xl text-primary shrink-0">
                  {item.icon === "check" && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>}
                  {item.icon === "shield" && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 4v5c0 4.4-3 8.5-7 10C8 20.5 5 16.4 5 12V7l7-4z"/></svg>}
                  {item.icon === "dollar" && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
                  {item.icon === "screen" && <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>}
                </span>
                <div>
                  <h3 className="font-heading text-secondary text-lg font-normal mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATIENT STORIES ── */}
      <section className="py-12 lg:py-16 w-full bg-background">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Patient Stories</p>
          <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-4">
            500+ patients. 500+ reasons to seek care earlier.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-10">
            Here is what some of our patients have shared about their experience at Varya Health. Real words, real recoveries.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: "I had been ignoring my leg pain for almost three years. After just one consultation at Varya Health, I finally understood what was happening. The EVLT procedure was over in under an hour and I was back home the same day.",
                name: "Priya Verma",
                location: "Andheri, Mumbai",
                initials: "PV",
              },
              {
                quote: "I was nervous about surgery. Dr. Sharma explained everything clearly and suggested a minimally invasive option instead. No general anaesthesia, no hospital stay, and my legs feel completely different now.",
                name: "Rajan Khanna",
                location: "Thane, Maharashtra",
                initials: "RK",
              },
              {
                quote: "My varicose veins came back after my second pregnancy. The team at Varya Health was so understanding. They gave me all the time I needed to ask questions and I never felt rushed or confused.",
                name: "Sunita Mishra",
                location: "Borivali, Mumbai",
                initials: "SM",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col gap-4">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-gray-600 text-base leading-relaxed italic flex-grow">{t.quote}</p>
                <div className="flex items-center gap-3 mt-2">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <span className="text-primary font-semibold text-xs">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-secondary text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                  </div>
                </div>
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
