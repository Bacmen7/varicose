import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { ArrowRight, Zap, Search, MessageCircle, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-background">

      {/* ── HERO — merlin 12-col grid ── */}
      <section className="relative overflow-hidden bg-accent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center min-h-[80vh]">
            <div className="lg:col-span-6 py-20 lg:py-28">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-8 bg-secondary/30" />
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-primary">Our Mission</span>
              </div>
              <h1 className="font-heading text-secondary text-5xl md:text-6xl lg:text-7xl leading-[0.96] tracking-tight mb-8 font-normal">
                Relief you can trust. Care that comes to you.
              </h1>
              <p className="text-gray-700 text-xl leading-relaxed mb-10 max-w-lg">
                At Varya Health, we make specialist vascular care simple, accessible, and reassuring for every patient.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/blog/when-to-see-doctor" className="bg-primary hover:opacity-90 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-all duration-300 group cursor-pointer">
                  Meet Our Specialist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/blog/when-to-see-doctor" className="border-2 border-primary text-primary font-semibold py-3 px-8 rounded-full inline-flex items-center gap-2 transition-all duration-300 hover:bg-primary hover:text-white cursor-pointer">
                  Book Consultation
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 relative hidden lg:block">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/hero.png"
                  alt="Varya Health specialist vascular care"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SPECIALIST — merlin CEO quote layout (dark section) ── */}
      <section className="bg-secondary text-white relative overflow-hidden py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            <div className="w-full md:w-5/12">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <div className="w-full h-full bg-accent/20 flex items-center justify-center">
                  <svg width="120" height="120" viewBox="0 0 48 48" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="24" cy="18" r="9"/>
                    <path d="M7 44c0-9.4 7.6-17 17-17s17 7.6 17 17"/>
                  </svg>
                </div>
              </div>
              <div className="mt-5">
                <h3 className="font-heading text-white text-xl font-normal">Dr. Rajeev Sharma</h3>
                <p className="text-primary text-sm font-semibold mt-1">Vascular Surgeon &amp; Phlebologist</p>
                <p className="text-white/40 text-sm mt-0.5">Varya Health, Mumbai</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["MBBS", "MS — General Surgery", "Fellowship in Vascular Surgery"].map((q, i) => (
                    <span key={i} className="text-xs font-medium text-white bg-white/10 px-3 py-1 rounded-md">{q}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-7/12">
              {/* Stats */}
              <div className="flex gap-8 mb-10 pb-10 border-b border-white/10">
                {[
                  { num: "15+", label: "Years experience" },
                  { num: "1,000+", label: "Procedures performed" },
                  { num: "3", label: "Languages spoken" },
                ].map((s, i) => (
                  <div key={i}>
                    <span className="font-heading text-primary text-3xl font-normal block">{s.num}</span>
                    <span className="text-white/50 text-sm">{s.label}</span>
                  </div>
                ))}
              </div>
              <blockquote className="font-heading text-3xl md:text-[2.5rem] leading-[1.25] font-normal mb-8 text-white">
                &quot;No patient should feel rushed or confused during their care. Every consultation at Varya Health is unhurried, evidence-based, and focused on finding the right path for each individual.&quot;
              </blockquote>
              <cite className="not-italic flex items-center gap-3 font-semibold text-[15px] text-white/60">
                <span className="w-6 h-[1px] bg-primary block" />
                Dr. Rajeev Sharma, Vascular Surgeon
              </cite>
              <Link href="/blog/when-to-see-doctor" className="mt-10 inline-flex items-center gap-2 bg-primary hover:opacity-90 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 group">
                Book a consultation with Dr. Sharma
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY PATIENTS TRUST US — merlin mission split layout ── */}
      <section className="py-24 md:py-36 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Our Approach</p>
              <h2 className="font-heading text-secondary text-4xl md:text-5xl leading-[1.05] tracking-tight font-normal">
                Why patients trust Varya Health
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-gray-600 text-lg leading-[1.8] mb-8">
                We believe good care starts with understanding your concerns. That&apos;s why we give every patient enough time to talk, understand their concerns, and get a treatment plan that&apos;s clear and easy to follow.
              </p>
              <p className="text-gray-600 text-lg leading-[1.8] mb-8">
                No rushed visits. No complicated medical terms. Just honest advice and caring support from specialists you can trust.
              </p>
              <p className="text-secondary text-lg leading-[1.8] font-semibold">
                Our goal is simple: every patient should leave their consultation feeling confident about their care.
              </p>
            </div>
          </div>

          {/* 4-col cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { icon: MessageCircle, title: "Clear & Simple Communication", desc: "We explain your condition in easy language, answer your questions patiently, and help you feel confident about your treatment plan." },
              { icon: Search, title: "Early Diagnosis Matters", desc: "Finding vein problems early can help prevent pain, swelling, skin changes, and other complications later." },
              { icon: Zap, title: "Accurate Vein Assessment", desc: "We use safe ultrasound scans and detailed vein evaluations to understand the cause of your symptoms and guide the right treatment." },
              { icon: MapPin, title: "Easy Access to Care", desc: "With flexible appointments and online consultations, getting expert vein care becomes simpler and more convenient." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 flex flex-col items-center text-center shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
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

      {/* ── HOW IT WORKS — merlin personal story 2-col ── */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">How It Works</p>
              <h2 className="font-heading text-secondary text-4xl md:text-5xl leading-[1.05] tracking-tight font-normal mb-14">
                Your care journey in 3 steps
              </h2>
              <div className="flex flex-col" style={{ gap: "32px" }}>
                {[
                  { num: "01", title: "Book a consultation", desc: "Call us, WhatsApp, or book online. We usually respond within a few hours and schedule your visit at your convenience." },
                  { num: "02", title: "Diagnosis and scan", desc: "Your specialist reviews your symptoms and performs a duplex ultrasound scan to understand your condition fully." },
                  { num: "03", title: "Treatment and recovery", desc: "A personalised treatment plan is created. Most procedures are completed in a single visit with minimal downtime." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="font-heading text-primary/30 text-4xl font-normal shrink-0 leading-none">{s.num}</span>
                    <div>
                      <h3 className="font-heading text-secondary text-xl font-normal mb-2">{s.title}</h3>
                      <p className="text-gray-600 text-base leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/hero.png"
                  alt="Vein care journey"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY PATIENTS CHOOSE US — merlin core values 3-col grid ── */}
      <section className="relative overflow-hidden py-28 md:py-36 bg-surface">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Why Patients Choose Us</p>
            <h2 className="font-heading text-secondary text-4xl md:text-5xl leading-[1.05] tracking-tight font-normal text-center mb-4">
              Relief that goes beyond the procedure
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto text-center">
              Choosing the right vascular care centre is about more than just the treatment — it&apos;s about feeling heard, supported, and confident at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "check", title: "No unnecessary surgery", desc: "We recommend surgery only when it is genuinely needed. Most patients are treated with day-care procedures and go home the same day." },
              { icon: "shield", title: "Honest second opinions", desc: "If you have already been advised a procedure elsewhere, we are happy to provide an independent clinical review before you decide." },
              { icon: "dollar", title: "Transparent costs", desc: "We share a clear estimate before any procedure. No hidden charges. We also guide patients on PM-JAY and insurance coverage where applicable." },
              { icon: "screen", title: "Teleconsultation available", desc: "Not able to visit in person? Connect with our specialist via video consultation across Maharashtra." },
              { icon: "check", title: "Evidence-based protocols", desc: "Every treatment decision at Varya Health is backed by clinical evidence and international vascular surgery guidelines." },
              { icon: "shield", title: "End-to-end patient support", desc: "From first consultation through recovery, our team is with you at every stage — never leaving you to figure things out alone." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 flex flex-col items-center text-center shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                <div className="relative w-[70px] h-[74px] flex items-center justify-center mb-5">
                  <div className="absolute inset-0 rounded-full bg-accent-lighter" />
                  <span className="relative z-10 text-primary">
                    {item.icon === "check" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12l3 3 5-5"/></svg>}
                    {item.icon === "shield" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l7 4v5c0 4.4-3 8.5-7 10C8 20.5 5 16.4 5 12V7l7-4z"/></svg>}
                    {item.icon === "dollar" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>}
                    {item.icon === "screen" && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>}
                  </span>
                </div>
                <h3 className="font-heading text-secondary text-xl font-normal mb-2 tracking-tight">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONDITIONS — merlin medical advisors layout ── */}
      <section className="py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="w-full md:w-1/3">
              <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Conditions We Treat</p>
              <h2 className="font-heading text-secondary text-4xl md:text-5xl leading-[1.05] tracking-tight font-normal">
                Vascular conditions we specialise in
              </h2>
            </div>
            <div className="w-full md:w-2/3 flex items-center">
              <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
                Our focus is on venous and vascular conditions that affect daily life. We treat a wide range, with varicose veins as our{" "}
                <span className="bg-accent px-1 rounded-sm">primary area of expertise</span>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Varicose Veins", tag: "Primary", desc: "Enlarged, twisted veins usually in the legs — our core specialty, treated with minimally invasive laser and RF procedures." },
              { name: "Spider Veins", tag: "Common", desc: "Small, visible red or blue veins near the skin surface — treated effectively with foam sclerotherapy." },
              { name: "Chronic Venous Insufficiency", tag: "CVI", desc: "Faulty vein valves causing blood to pool — leads to swelling, skin changes, and ulcers if untreated." },
              { name: "Venous Leg Ulcers", tag: "Advanced", desc: "Non-healing wounds caused by venous hypertension — managed with compression and correcting underlying reflux." },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-heading text-secondary text-lg font-normal tracking-tight">{item.name}</h3>
                  <span className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded bg-accent text-primary">{item.tag}</span>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PATIENT STORIES — merlin press section ── */}
      <section className="py-24 md:py-36 bg-surface">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16">
            <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Patient Stories</p>
            <h2 className="font-heading text-secondary text-4xl md:text-5xl leading-[1.05] tracking-tight font-normal">
              500+ patients. 500+ reasons to seek care earlier.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-gray-200">
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
              <div key={i} className="bg-white p-8 md:p-10 flex flex-col">
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p className="text-lg md:text-xl leading-[1.7] text-gray-600 mb-8 flex-1">
                  &quot;{t.quote}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <span className="text-primary font-semibold text-xs">{t.initials}</span>
                  </div>
                  <div>
                    <span className="block font-semibold text-secondary">{t.name}</span>
                    <span className="text-sm text-gray-400">{t.location}</span>
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
