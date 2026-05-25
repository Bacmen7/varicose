import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ConditionsTreatSection from "@/components/ConditionsTreatSection";
import PatientReviewsCarousel from "@/components/PatientReviewsCarousel";
import { ArrowRight, Zap, Search, MessageCircle, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-background">

      {/* ── HERO ── */}
      <section
        className="w-full overflow-hidden relative"
        style={{ backgroundColor: "#026460" }}
      >
        <div className="flex flex-col lg:flex-row min-h-[420px] lg:min-h-[460px]">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 px-4 py-10 md:px-8 lg:px-16 xl:px-24 lg:py-12 flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto lg:mr-8">
              <h1 className="font-heading text-white text-3xl md:text-4xl lg:text-5xl font-normal mb-4 leading-tight">
                Relief you can trust.{" "}
                <span className="text-accent-lighter">Care that comes to you.</span>
              </h1>
              <p className="text-white/85 text-base lg:text-lg mb-5 leading-relaxed max-w-lg">
                Varicose veins affect millions of Indians, yet most people wait years before seeking help. At Sira Vascular, we make specialist vascular care simple, accessible, and reassuring for every patient who walks through our doors.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/blog/when-to-see-doctor" className="bg-white text-primary hover:bg-accent-lighter font-semibold text-sm md:text-base py-2.5 px-5 md:py-3 md:px-8 rounded-full flex items-center gap-2 transition-all duration-300 group cursor-pointer w-fit">
                  Meet our specialist
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/blog/when-to-see-doctor" className="border-2 border-white/80 text-white font-semibold text-sm md:text-base py-2.5 px-5 md:py-3 md:px-8 rounded-full flex items-center gap-2 transition-all duration-300 hover:bg-white/10 w-fit">
                  Book consultation
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 h-[300px] lg:h-auto relative">
            <Image src="/hero2.png" alt="Sira Vascular specialist care" fill className="object-cover object-center" priority />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative w-full overflow-hidden bg-primary py-8 sm:py-10">
        <div className="mx-auto max-w-[1200px] px-8 sm:px-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-12">
            {[
              { num: "500+", label: "Patients treated" },
              { num: "01", label: "Dedicated centre, Mumbai" },
              { num: "10+", label: "Years in healthcare" },
            ].map((stat, i) => (
              <div key={i} className="overflow-hidden pl-4 sm:pl-6 lg:pl-8">
                <div className="relative h-[102px] sm:h-[130px] md:h-[155px]">
                  <span className="absolute left-0 top-0 select-none whitespace-nowrap text-[48px] font-bold leading-none tracking-tight text-white/[0.06] sm:text-[64px] md:text-[80px]">
                    {stat.num}
                  </span>
                  <span className="absolute left-0 top-[24px] select-none whitespace-nowrap text-[48px] font-bold leading-none tracking-tight text-white/[0.12] sm:top-[32px] sm:text-[64px] md:top-[40px] md:text-[80px]">
                    {stat.num}
                  </span>
                  <span className="absolute left-0 top-[48px] whitespace-nowrap text-[48px] font-bold leading-none tracking-tight text-white/90 sm:top-[64px] sm:text-[64px] md:top-[76px] md:text-[80px]">
                    {stat.num}
                  </span>
                </div>
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/60 sm:text-[14px]">
                    {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PATIENTS TRUST US ── */}
      <section className="py-10 lg:py-12 w-full bg-surface relative">
        <div className="container mx-auto px-3 md:px-4 max-w-[1320px]">
          <div className="mb-8">
            <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Our Approach</p>
            <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-4">Why patients trust Sira Vascular</h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
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
      <section className="py-12 lg:py-16 w-full bg-background relative">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase text-center">How It Works</p>
          <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-12 text-center">Your care journey in 3 steps</h2>

          <div className="relative flex flex-col md:flex-row gap-10 md:gap-0">
            {/* Connector line */}
            <div className="hidden md:block absolute top-6 left-[calc(16.666%+24px)] right-[calc(16.666%+24px)] h-px bg-primary/30" />

            {[
              { num: 1, title: "Book a consultation", desc: "Call us, WhatsApp, or book online. We usually respond within 24 hours and schedule your visit at your convenience." },
              { num: 2, title: "Diagnosis and scan", desc: "Your specialist reviews your symptoms and performs an ultrasound scan to understand your condition fully." },
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
      <section className="py-12 lg:py-16 w-full bg-surface relative pb-20">
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
                <p className="text-gray-400 text-sm mt-0.5">Sira Vascular, Mumbai</p>
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
                Dr. Sharma believes that no patient should feel rushed or confused during their care. Every consultation at Sira Vascular is unhurried, evidence-based, and focused on finding the right path for each individual.
              </p>

              <Link href="/blog/when-to-see-doctor" className="bg-primary hover:opacity-90 text-white font-semibold text-sm py-3 px-7 rounded-full inline-flex items-center gap-2 transition-all duration-300 group w-fit">
                Book a consultation with Dr. Sharma
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
        {/* Wave → bg-background */}
        <svg className="absolute -bottom-px left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
          <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#F9F9F9" />
        </svg>
      </section>

      <ConditionsTreatSection />

      {/* ── WHY PATIENTS CHOOSE US ── */}
      <section className="py-12 lg:py-16 w-full bg-surface relative pb-20">
        <div className="container mx-auto px-2 md:px-3 max-w-[1360px]">
          <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Why Patients Choose Us</p>
          <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-4">Relief that goes beyond the procedure</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mb-10">
            Choosing the right vascular care centre is about more than just the treatment. It is about feeling heard, supported, and confident in the care you receive at every step.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { image: "/patient.png", title: "No unnecessary surgery", desc: "We recommend a procedure only when it is genuinely needed, with day-care options for most suitable patients." },
                { image: "/talk.png", title: "Honest second opinions", desc: "Already advised treatment elsewhere? We provide an independent review so you can decide with clarity." },
                { image: "/cost.png", title: "Transparent costs", desc: "You receive a clear estimate before treatment, with guidance on insurance and available coverage support." },
                { image: "/teleconsulation.png", title: "Teleconsultation available", desc: "Connect online before visiting the centre, especially if you live outside Mumbai or need initial guidance." },
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary/30 transition-all duration-300 flex flex-col">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image src={item.image} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-secondary text-lg font-normal mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ── PATIENT STORIES ── */}
      <section className="pt-12 pb-28 lg:pt-16 lg:pb-32 w-full bg-background relative">
        <div className="container mx-auto px-2 md:px-3 max-w-[1360px]">
          <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Patient Stories</p>
          <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-4">
            500+ patients.
            <br />
            500+ reasons to seek care earlier.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-10">
            Here is what some of our patients have shared about their experience at Sira Vascular. Real words, real recoveries.
          </p>
          <PatientReviewsCarousel />
        </div>
        {/* Wave → CTASection bg #026460 */}
        <svg className="absolute -bottom-px left-0 w-full block" style={{ height: "60px" }} preserveAspectRatio="none" viewBox="0 0 1440 60" fill="none">
          <path d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z" fill="#026460" />
        </svg>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
