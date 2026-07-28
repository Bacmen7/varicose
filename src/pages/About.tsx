import Image from "@/compat/Image";
import Link from "@/compat/Link";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ConditionsTreatSection from "@/components/ConditionsTreatSection";
import PatientReviewsCarousel from "@/components/PatientReviewsCarousel";
import { ArrowRight, Zap, Search, MessageCircle, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-background">

      {/* ── HERO ── */}
      <section className="w-full overflow-hidden relative bg-accent-lighter">
        <div className="flex flex-col lg:flex-row min-h-[480px] lg:min-h-[560px]">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 px-5 py-14 md:px-8 lg:px-16 xl:px-24 lg:py-20 flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0 lg:ml-auto lg:mr-8">
              <h1 className="font-heading text-primary-dark text-[2.2rem] md:text-[2.8rem] lg:text-[3.3rem] font-normal mb-5 leading-[1.15] tracking-tight">
                Relief you can trust.{" "}
                <span className="italic text-primary">Care that comes to you.</span>
              </h1>
              <p className="text-gray-600 text-base lg:text-lg mb-5 leading-relaxed max-w-lg">
                Varicose veins affect millions of Indians, yet most people wait years before seeking help. At Sira Vascular, we make specialist vascular care simple, accessible, and reassuring for every patient who walks through our doors.
              </p>

              <div className="mt-8">
                <Link href="/book-consultation" className="group inline-flex items-center gap-2 rounded-full bg-cta px-6 py-2 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:brightness-105 w-fit">
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 h-[340px] lg:h-auto relative">
            <Image src="/hero2.png" alt="Sira Vascular specialist care" fill className="object-cover object-center" priority />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="relative w-full overflow-hidden bg-primary py-8 sm:py-10">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-12">
            {[
              { num: "500+", label: "Patients treated" },
              { num: "01", label: "Dedicated centre, Mumbai" },
              { num: "10+", label: "Years in healthcare" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <p
                  className="font-heading leading-none mb-3 text-white"
                  style={{ fontSize: "clamp(38px, 4.8vw, 68px)", fontWeight: 800 }}
                >
                  {stat.num}
                </p>
                <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:text-[14px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY PATIENTS TRUST US ── */}
      <section className="py-14 md:py-20 w-full bg-surface relative">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            {/* Left: image */}
            <div className="relative h-[320px] w-full overflow-hidden rounded-2xl border border-black/5 shadow-sm sm:h-[420px] lg:sticky lg:top-28 lg:h-[560px]">
              <Image
                src="/talk.png"
                alt="Vein specialist explaining a treatment plan to a patient"
                fill
                className="object-cover object-center"
              />
            </div>

            {/* Right: heading + cards */}
            <div>
              <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">Our Approach</p>
              <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-secondary mb-4">Why patients trust Sira Vascular</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                We believe good care starts with understanding your concerns. That&apos;s why we give every patient enough time to talk, understand their concerns, and get a treatment plan that&apos;s clear and easy to follow. No rushed visits. No complicated medical terms. Just honest advice and caring support from specialists you can trust.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: MessageCircle, title: "Clear & Simple Communication", desc: "We explain your condition in easy language, answer your questions patiently, and help you feel confident about your treatment plan." },
                  { icon: Search, title: "Early Diagnosis Matters", desc: "Finding vein problems early can help prevent pain, swelling, skin changes, and other complications later." },
                  { icon: Zap, title: "Accurate Vein Assessment", desc: "We use safe ultrasound scans and detailed vein evaluations to understand the cause of your symptoms and guide the right treatment." },
                  { icon: MapPin, title: "Easy Access to Care", desc: "With flexible appointments and online consultations, getting expert vein care becomes simpler and more convenient." },
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-xl p-6 border border-black/5 shadow-sm hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                    <span className="bg-accent-lighter mb-4 flex size-11 items-center justify-center rounded-xl text-primary">
                      <item.icon className="size-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="font-heading text-secondary text-lg font-normal mb-2 leading-snug">{item.title}</h3>
                    <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="py-14 md:py-20 w-full bg-background relative">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
          <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] text-primary mb-4 text-center">How It Works</p>
          <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-secondary mb-12 text-center">Your care journey in 3 steps</h2>

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
      <section className="py-14 md:py-20 w-full bg-surface relative">
        <div className="mx-auto w-full max-w-[1200px] px-5 md:px-8">
          <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">Our Specialist</p>
          <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-secondary mb-10">Expert care, delivered with clarity</h2>

          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left: avatar + name card */}
            <div className="shrink-0 w-full lg:w-64 flex flex-col gap-4">
              <div className="w-full aspect-square rounded-xl bg-accent flex items-center justify-center border border-primary/20 max-w-[260px]">
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
                {["MBBS", "MS (General Surgery)", "Fellowship in Vascular Surgery"].map((q, i) => (
                  <span key={i} className="text-sm font-medium text-primary bg-accent px-3 py-1 rounded-md w-fit">{q}</span>
                ))}
              </div>
            </div>

            {/* Right: content */}
            <div className="flex-1">
              {/* Stats row */}
              <div className="flex flex-wrap gap-x-10 gap-y-4 mb-8 pb-8 border-b border-gray-100">
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

              <Link href="/blog/when-to-see-doctor" className="bg-primary hover:opacity-90 text-white font-semibold text-sm py-2 px-6 rounded-full inline-flex items-center gap-2 transition-all duration-300 group w-fit">
                Book a consultation with Dr. Sharma
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ConditionsTreatSection />

      {/* ── WHY PATIENTS CHOOSE US ── */}
      <section className="py-14 md:py-20 w-full bg-surface relative">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
          <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">Why Patients Choose Us</p>
          <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-secondary mb-4">Relief that goes beyond the procedure</h2>
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
                <div key={i} className="bg-white rounded-xl overflow-hidden border border-black/5 shadow-sm hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col">
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
      <section className="py-14 md:py-20 w-full bg-background relative">
        <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
          <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">Patient Stories</p>
          <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-secondary mb-4">
            500+ patients.
            <br />
            500+ reasons to seek care earlier.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-10">
            Here is what some of our patients have shared about their experience at Sira Vascular. Real words, real recoveries.
          </p>
        </div>
        <PatientReviewsCarousel />
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
