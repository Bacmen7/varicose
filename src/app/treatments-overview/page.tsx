import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowRight, User, FileText, CheckCircle, Activity, Globe, Stethoscope } from "lucide-react";

const diagSteps = [
  { icon: User, step: "Step 01", title: "Symptom history", desc: "We understand your symptoms, daily routine, and medical history" },
  { icon: FileText, step: "Step 02", title: "Physical examination", desc: "Your doctor examines your legs and checks the visible veins" },
  { icon: Activity, step: "Step 03", title: "Scans", desc: "A painless ultrasound scan checks blood flow in your veins" },
  { icon: CheckCircle, step: "Step 04", title: "Treatment plan", desc: "We create a treatment plan based on your vein condition" },
];

const approachCards = [
  {
    type: "Conservative",
    image: "/r1.png",
    title: "Compression Therapy",
    desc: "The starting point. Medically graded stockings that reduce swelling and slow progression.",
    items: ["Graduated compression stockings", "Lifestyle and elevation advice", "Used alongside other treatments"],
  },
  {
    type: "Injection",
    image: "/r2.png",
    title: "Injection Therapies",
    desc: "For spider veins and smaller varicose veins. Done in-clinic, no anaesthesia needed.",
    items: ["Sclerotherapy — liquid injection", "Foam sclerotherapy — larger veins", "Walk same day, no downtime"],
  },
  {
    type: "Advanced",
    image: "/r3.png",
    title: "Advanced Procedures",
    desc: "For larger varicose veins with significant reflux. Minimally invasive, under local anaesthesia.",
    items: ["EVLT — endovenous laser treatment", "RFA — radiofrequency ablation", "Venaseal — medical glue closure"],
  },
];

const accordionSteps = [
  { num: "1.", title: "Your first appointment", body: "Your specialist takes your history, examines your legs, and arranges the duplex scan. Bring a list of symptoms and any questions you have." },
  { num: "2.", title: "Your duplex ultrasound scan", body: "A painless 20 to 30 minute scan that maps which veins are leaking and by how much. This determines exactly which treatment is right for you." },
  { num: "3.", title: "Your treatment session", body: "Most procedures take 30 to 60 minutes. You will be awake throughout. There is mild discomfort at most. You go home the same day and walk normally." },
  { num: "4.", title: "Recovery and follow-up", body: "Most patients return to work the next day. Compression stockings are worn for 1 to 2 weeks. A follow-up scan at 6 weeks confirms the vein has closed." },
  { num: "5.", title: "Long-term care and prevention", body: "Treated veins do not come back. New veins can develop over time. Staying active and wearing compression when standing long hours reduces the risk." },
];

const conditionRows = [
  { condition: "Varicose Veins", badge: "Venous", badgeColor: "#CCE0DF", badgeText: "#026460", first: "Compression + duplex scan", next: "EVLT or RFA — same day procedure", href: "/treatments/evlt" },
  { condition: "Spider Veins", badge: "Cosmetic", badgeColor: "#FEF3C7", badgeText: "#92400E", first: "Sclerotherapy — liquid injection", next: "Foam sclerotherapy, 2 to 3 sessions", href: "/treatments/evlt" },
  { condition: "Chronic Venous Insufficiency", badge: "CVI", badgeColor: "#FDE8D8", badgeText: "#A03D12", first: "Compression + lifestyle changes", next: "Ablation to treat underlying reflux", href: "/treatments/rfa" },
  { condition: "DVT Awareness", badge: "Urgent", badgeColor: "#DBEAFE", badgeText: "#1E40AF", first: "Urgent referral — do not wait", next: "Anticoagulant therapy, specialist review", href: "/conditions/varicose-veins" },
  { condition: "Venous Leg Ulcers", badge: "Advanced", badgeColor: "#FDE8D8", badgeText: "#A03D12", first: "Compression bandaging + wound care", next: "Ablation once ulcer heals", href: "/conditions/varicose-veins" },
  { condition: "Post-Pregnancy Veins", badge: "Hormonal", badgeColor: "#FCE7F3", badgeText: "#9D174D", first: "Wait 3 to 6 months post-delivery", next: "Sclerotherapy or EVLT if veins persist", href: "/treatments/evlt" },
];

export default function TreatmentsOverviewPage() {
  return (
    <main className="bg-background">

      {/* ── HERO ── */}
      <section className="w-full overflow-hidden bg-accent">
        <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[560px]">
          <div className="w-full lg:w-1/2 px-6 py-14 lg:px-16 xl:px-24 lg:py-20 flex flex-col justify-center bg-surface">
            <div className="max-w-lg mx-auto lg:mx-0 lg:ml-auto lg:mr-10">
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-6 bg-accent text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                Varicose Vein Treatments
              </span>
              <h1 className="font-heading text-secondary text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.15] font-normal mb-5">
                Vein Treatment: What You Should Know
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Minimally invasive, walk-in walk-out procedures. No long hospital stays. Our vascular specialists choose the right treatment for your vein type and severity.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#treatments" className="bg-primary hover:opacity-90 text-white font-semibold text-sm py-3 px-7 rounded-full flex items-center gap-2 transition-all duration-300 group">
                  Explore Treatments
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/blog/when-to-see-doctor" className="border-2 border-primary text-primary font-semibold text-sm py-3 px-7 rounded-full hover:bg-primary/5 transition-all duration-300">
                  Book a Consultation
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[350px] lg:h-auto relative">
            <Image src="/AAAhero.png" alt="Varicose Vein Treatments" fill className="object-cover object-center" priority />
          </div>
        </div>
      </section>

      {/* ── HOW IS IT DIAGNOSED ── */}
      <section className="py-16 lg:py-20 w-full bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Step One</p>
            <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-4">How is it diagnosed?</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">There is no single test. Your specialist builds the picture from four key steps.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            {/* Dark card */}
            <div className="rounded-2xl p-10 relative overflow-hidden" style={{ backgroundColor: '#026460' }}>
              <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-10 bg-white translate-x-1/3 translate-y-1/3" />
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.5)' }}>Getting the right diagnosis</p>
              <h3 className="font-heading text-white text-3xl font-normal mb-4 leading-snug">Getting the right picture</h3>
              <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
                Varicose veins can look simple on the outside but involve deeper valve problems underneath. A proper diagnosis makes sure the right vein is treated — and nothing is missed.
              </p>
              <Link href="/blog/when-to-see-doctor" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary font-semibold text-sm py-3 px-7 rounded-full transition-all group">
                Book your first appointment
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            {/* Steps */}
            <div className="flex flex-col gap-3">
              {diagSteps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={i} className="flex items-center gap-4 bg-surface rounded-2xl p-5 border border-transparent hover:border-primary/30 transition-all">
                    <div className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center bg-primary">
                      <Icon size={18} strokeWidth={1.5} className="text-white" />
                    </div>
                    <div>
                      <p className="text-primary font-semibold text-xs tracking-wider uppercase mb-1">{s.step} — {s.title}</p>
                      <p className="text-gray-600 text-base leading-snug">{s.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── THREE TREATMENT APPROACHES ── */}
      <section id="treatments" className="py-16 lg:py-20 w-full bg-surface">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Step Two</p>
            <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-4">Personalised treatment</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">Three main approaches — most patients need just one, chosen after their scan.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {approachCards.map((card, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                  <span className="absolute top-4 left-4 inline-block text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full text-white" style={{ backgroundColor: '#026460' }}>{card.type}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-secondary text-2xl font-normal mb-3">{card.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-4">{card.desc}</p>
                  <div className="flex flex-col gap-2">
                    {card.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GETTING STARTED ACCORDION ── */}
      <section className="py-16 lg:py-20 w-full bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left visual */}
            <div className="rounded-2xl p-10 relative overflow-hidden" style={{ backgroundColor: '#026460' }}>
              <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full opacity-10 bg-white translate-x-1/3 translate-y-1/3" />
              <h3 className="font-heading text-white text-2xl font-normal mb-6 relative z-10">Your treatment journey</h3>
              <div className="border-l-2 pl-4 mb-6 relative z-10" style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
                <p className="font-heading text-lg italic leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>"Knowing what came next made the whole thing far less daunting."</p>
              </div>
              <p className="text-sm leading-relaxed mb-6 relative z-10" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Most patients with varicose veins are treated and back to normal within a week. The steps below show what that journey looks like from start to finish.
              </p>
              <div className="grid grid-cols-2 gap-3 relative z-10">
                {[
                  { num: "1 hr", label: "Average procedure time" },
                  { num: "1–2 days", label: "Back to normal" },
                  { num: "Same day", label: "Return home" },
                  { num: "6 weeks", label: "Follow-up scan" },
                ].map((s, i) => (
                  <div key={i} className="rounded-xl p-4" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p className="font-heading text-white text-xl font-normal">{s.num}</p>
                    <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right accordion */}
            <div>
              <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-8">Getting started with treatment</h2>
              <div className="rounded-2xl overflow-hidden border border-gray-200">
                {accordionSteps.map((s, i) => (
                  <details key={i} className="group border-b border-gray-200 last:border-b-0" open={i === 0}>
                    <summary className="flex items-center gap-4 px-6 py-5 cursor-pointer hover:bg-surface transition-colors list-none">
                      <span className="font-heading text-xl font-normal text-primary w-7 shrink-0">{s.num}</span>
                      <span className="font-body font-medium text-secondary flex-1">{s.title}</span>
                      <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </summary>
                    <div className="px-6 pb-5 pl-[4.25rem] text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-4">
                      {s.body}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TREATMENT BY CONDITION ── */}
      <section className="py-16 lg:py-20 w-full bg-surface">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Treatment by Condition</p>
            <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-4">Find your condition</h2>
            <p className="text-gray-600 text-lg max-w-xl mx-auto">See what is typically recommended first — and what comes next if that is not enough.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="grid px-6 py-4 text-xs font-semibold tracking-widest uppercase text-white" style={{ backgroundColor: '#026460', gridTemplateColumns: '28% 28% 36% 8%' }}>
              <div>Condition</div>
              <div>First treatment</div>
              <div>If that is not enough</div>
              <div></div>
            </div>
            {conditionRows.map((row, i) => (
              <Link key={i} href={row.href} className="grid px-6 py-4 items-center bg-white border-t border-gray-100 hover:bg-surface transition-colors" style={{ gridTemplateColumns: '28% 28% 36% 8%' }}>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-heading text-secondary text-base font-normal">{row.condition}</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ backgroundColor: row.badgeColor, color: row.badgeText }}>{row.badge}</span>
                </div>
                <div className="text-gray-600 text-sm pr-4">{row.first}</div>
                <div className="text-gray-600 text-sm pr-4">{row.next}</div>
                <div className="flex justify-end">
                  <ArrowRight size={16} className="text-gray-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 w-full bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="rounded-2xl p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative overflow-hidden" style={{ backgroundColor: '#026460' }}>
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5 bg-white -translate-y-1/3 translate-x-1/3" />
            <div className="relative z-10">
              <h2 className="font-heading text-white text-3xl lg:text-4xl font-normal mb-2">Ready to start your treatment?</h2>
              <p className="text-base" style={{ color: 'rgba(255,255,255,0.65)' }}>Most patients are seen within 1 to 2 weeks. Early treatment means faster recovery.</p>
            </div>
            <div className="relative z-10 flex flex-col items-start md:items-end gap-2 shrink-0">
              <Link href="/blog/when-to-see-doctor" className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-primary font-semibold text-sm py-3 px-8 rounded-full transition-all group shadow-lg">
                Book a Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>Most patients seen within 2 weeks</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
