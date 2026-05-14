"use client";

import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import { ArrowRight, Globe, User, Stethoscope, FileText, Eye, Layers, Droplets, Bandage, Flame, AlertCircle, Heart, Baby } from "lucide-react";

const conditionCards = [
  {
    href: "/conditions/varicose-veins",
    image: "/user/varicose veins.png",
    title: "Varicose Veins",
    description: "Twisted, enlarged veins that appear just under the skin. Often triggered by prolonged standing, pregnancy, or family history.",
  },
  {
    href: "/conditions/spider-veins",
    image: "/user/spider vein.png",
    title: "Spider Veins",
    description: "Small, web-like veins visible through the skin, typically red or blue. Common on the legs and face.",
  },
  {
    href: "/conditions/chronic-venous-insufficiency",
    image: "/user/chronic venus insufficiency.png",
    title: "Chronic Venous Insufficiency",
    description: "Vein valves fail to push blood back to the heart effectively. Causes persistent swelling, skin changes, and leg heaviness.",
  },
  {
    href: "/conditions/deep-vein-reflux",
    image: "/user/deep vein reflux.png",
    title: "DVT Awareness",
    description: "Deep Vein Thrombosis involves blood clots forming in deep leg veins. A potentially serious condition requiring prompt attention.",
  },
  {
    href: "/conditions/swelling-skin-changes",
    image: "/user/swelling, skin changes, non-healing ulcers swelling, skin changes, non-healing ulcers.png",
    title: "Venous Leg Ulcers",
    description: "Slow-healing open sores that typically develop around the ankle. A late-stage complication of untreated venous disease.",
  },
  {
    href: "/conditions/leg-pain-heaviness",
    image: "/user/leg pain and heaviness.png",
    title: "Post-Pregnancy Vein Conditions",
    description: "Hormonal changes and increased blood volume during pregnancy often cause varicose or spider veins.",
  },
];

const consultationSteps = [
  {
    icon: Globe,
    step: "Step 01",
    title: "Symptom Assessment",
    description: "Your doctor reviews your symptoms, daily routine, work habits, and family history. If you stand for long hours or have had pregnancies, mention this early.",
    tags: ["Medical history", "Lifestyle review", "Family history"],
  },
  {
    icon: User,
    step: "Step 02",
    title: "Physical Examination",
    description: "The specialist examines your legs while you stand. They check for visible veins, swelling, skin texture changes, and areas of tenderness.",
    tags: ["Visual inspection", "Swelling check", "Skin assessment"],
  },
  {
    icon: Stethoscope,
    step: "Step 03",
    title: "Doppler Ultrasound",
    description: "A painless scan maps your veins and identifies which valves are faulty. The gold standard for diagnosing venous reflux — done in the same visit.",
    tags: ["Non-invasive", "Same-day results", "Maps reflux"],
  },
  {
    icon: FileText,
    step: "Step 04",
    title: "Treatment Plan",
    description: "Based on your results, the doctor explains your options clearly — from lifestyle changes to minimally invasive procedures.",
    tags: ["Personalised", "Evidence-based", "No surgery needed"],
  },
];

const treatmentRows = [
  { name: "Compression Therapy", sub: "First step for most patients", bestFor: "Mild symptoms & post-procedure support", recovery: "None — wear daily", level: "Conservative", levelColor: "#64B5AE", dots: 1 },
  { name: "Sclerotherapy", sub: "Spider & small varicose veins", bestFor: "Cosmetic veins, minor reflux", recovery: "Walk same day", level: "Injection", levelColor: "#2C847F", dots: 2 },
  { name: "Foam Sclerotherapy", sub: "Larger veins, stronger effect", bestFor: "Veins too large for liquid injection", recovery: "Walk same day", level: "Injection", levelColor: "#2C847F", dots: 3 },
  { name: "Venaseal", sub: "No heat, no numbing injections", bestFor: "Truncal veins, heat-sensitive patients", recovery: "1 to 2 days", level: "Advanced", levelColor: "#026460", dots: 3 },
  { name: "RFA", sub: "Radiofrequency Ablation", bestFor: "Large saphenous veins, venous reflux", recovery: "1 to 2 days", level: "Advanced", levelColor: "#026460", dots: 4 },
  { name: "EVLT", sub: "Endovenous Laser Treatment", bestFor: "Severe varicose veins, large saphenous vein", recovery: "1 to 2 days", level: "Advanced", levelColor: "#026460", dots: 4 },
];

const warningSigns = [
  { icon: Eye, text: "Visible bulging or twisted veins on the legs" },
  { icon: Layers, text: "Persistent leg aching, heaviness, or tiredness" },
  { icon: Droplets, text: "Leg swelling that worsens by end of the day" },
  { icon: Bandage, text: "Skin darkening or thickening near the ankle" },
  { icon: Flame, text: "Itching or burning sensation along a vein" },
  { icon: AlertCircle, text: "A slow-healing sore or wound on the lower leg" },
  { icon: Heart, text: "Sudden redness, warmth, or pain in the calf" },
  { icon: Baby, text: "Vein symptoms worsening after pregnancy" },
];

export default function BlogOverviewPage() {
  return (
    <main className="bg-background">

      {/* ── HERO ── */}
      <section className="w-full overflow-hidden bg-accent">
        <div className="flex flex-col lg:flex-row min-h-[500px] lg:min-h-[560px]">
          <div className="w-full lg:w-1/2 px-6 py-14 lg:px-16 xl:px-24 lg:py-20 flex flex-col justify-center bg-surface">
            <div className="max-w-lg mx-auto lg:mx-0 lg:ml-auto lg:mr-10">
              <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full mb-6 bg-accent text-primary">
                <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                Varicose Vein Health Guide
              </span>
              <h1 className="font-heading text-secondary text-4xl md:text-5xl lg:text-[52px] lg:leading-[1.15] font-normal mb-5">
                Explore Health Guide{" "}
                <span className="text-primary">Varicose Vein</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Reliable, vascular-focused medical information. Written and reviewed by certified vascular specialists. Evidence-based guides to help you take an active role in your care.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#conditions" className="bg-primary hover:opacity-90 text-white font-semibold text-sm py-3 px-7 rounded-full flex items-center gap-2 transition-all duration-300 group">
                  Explore Conditions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/treatments" className="border-2 border-primary text-primary font-semibold text-sm py-3 px-7 rounded-full hover:bg-primary/5 transition-all duration-300">
                  Browse Treatments
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 h-[350px] lg:h-auto relative">
            <Image src="/AAAhero.png" alt="Varicose Vein Health Guide" fill className="object-cover object-center" priority />
          </div>
        </div>
      </section>

      {/* ── CONDITION CARDS ── */}
      <section id="conditions" className="py-12 md:py-16 lg:py-20 w-full" style={{ backgroundColor: '#D6E6E5' }}>
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="text-center mb-10">
            <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Condition Guides</p>
            <h2 className="font-heading text-secondary text-3xl lg:text-4xl mb-4">Your Vein Health, Explained Clearly</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Each guide covers symptoms, causes, diagnosis, treatment options, and recovery. Written in plain language for patients and caregivers across India.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditionCards.map((card) => (
              <Link key={card.href} href={card.href} className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full border border-transparent hover:border-primary/20">
                <div className="h-44 overflow-hidden relative">
                  <Image src={card.image} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-heading text-secondary text-xl font-medium mb-3 leading-snug group-hover:text-primary transition-colors">{card.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed mb-4 flex-grow line-clamp-3">{card.description}</p>
                  <span className="text-primary font-semibold text-sm flex items-center mt-auto">
                    Read the guide
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHEN TO SEE SPECIALIST ── */}
      <section className="py-12 md:py-16 lg:py-20 w-full" style={{ backgroundColor: '#026460' }}>
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="lg:w-2/5 flex flex-col justify-center">
              <p className="font-semibold mb-3 text-sm tracking-wider uppercase" style={{ color: '#8FBFBA' }}>Know the Signs</p>
              <h2 className="font-heading text-white text-3xl lg:text-4xl font-normal mb-5">When Should You See a Vascular Specialist?</h2>
              <p className="leading-relaxed mb-8 text-lg" style={{ color: '#CCE0DF' }}>
                Many people in India live with vein symptoms for years, thinking it is just tiredness or aging. Some signs should not be ignored.
              </p>
              <Link href="/blog/when-to-see-doctor" className="border-2 border-white text-white font-semibold text-sm py-3 px-7 rounded-full w-fit hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-2">
                Talk to a Specialist <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {warningSigns.map((sign, i) => {
                const Icon = sign.icon;
                return (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                    <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}>
                      <Icon size={18} strokeWidth={1.5} className="text-white" />
                    </div>
                    <p className="text-base leading-relaxed pt-2" style={{ color: '#CCE0DF' }}>{sign.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ── */}
      <section className="py-12 md:py-16 lg:py-20 w-full bg-background">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="lg:w-2/5">
              <div className="sticky top-28">
                <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Your First Visit</p>
                <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-5">What to Expect at a Vascular Consultation</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Your first appointment is straightforward and pressure-free. Here is exactly what happens, step by step.
                </p>
                <Link href="/blog/when-to-see-doctor" className="bg-primary hover:opacity-90 text-white font-semibold text-sm py-3 px-7 rounded-full flex items-center gap-2 w-fit transition-all duration-300 group">
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="lg:w-3/5 flex flex-col">
              {consultationSteps.map((s, i) => {
                const Icon = s.icon;
                const isLast = i === consultationSteps.length - 1;
                return (
                  <div key={i} className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <div className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center bg-primary">
                        <Icon size={18} strokeWidth={1.5} className="text-white" />
                      </div>
                      {!isLast && <div className="w-px flex-1 my-2 bg-gray-300" />}
                    </div>
                    <div className="pb-8">
                      <p className="text-primary font-semibold text-xs tracking-wider uppercase mb-1 mt-2">{s.step}</p>
                      <h3 className="font-heading text-secondary text-xl font-medium mb-2">{s.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-3">{s.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {s.tags.map((tag) => (
                          <span key={tag} className="text-xs px-3 py-1 rounded-full border border-primary/40 text-primary">{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── TREATMENT TABLE ── */}
      <section className="py-12 md:py-16 lg:py-20 w-full bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">Treatment Options</p>
          <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-4">How Varicose Veins Are Treated</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl">
            Most treatments today take under an hour and do not need a hospital stay. The right option depends on your vein type, severity, and how your body responds.
          </p>
          <div className="rounded-2xl overflow-hidden border border-gray-100">
            <div className="grid px-6 py-4 text-xs font-bold tracking-widest uppercase text-white bg-primary" style={{ gridTemplateColumns: '30% 35% 20% 15%' }}>
              <div>Treatment</div>
              <div>Works Best For</div>
              <div>Recovery</div>
              <div>Level</div>
            </div>
            {treatmentRows.map((row, i) => (
              <div key={i} className="grid px-6 py-4 items-center border-t border-gray-100 hover:bg-surface transition-colors" style={{ gridTemplateColumns: '30% 35% 20% 15%' }}>
                <div>
                  <p className="font-heading font-medium text-secondary text-base">{row.name}</p>
                  <p className="text-sm italic mt-0.5 text-primary">{row.sub}</p>
                </div>
                <div className="text-gray-600 text-base pr-6">{row.bestFor}</div>
                <div className="text-gray-600 text-base whitespace-nowrap">{row.recovery}</div>
                <div>
                  <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full text-white mb-2 whitespace-nowrap" style={{ backgroundColor: row.levelColor }}>{row.level}</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, d) => (
                      <div key={d} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: d < row.dots ? row.levelColor : '#E5E7EB' }} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 w-full" style={{ backgroundColor: '#026460' }}>
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2 className="font-heading text-white text-3xl lg:text-5xl mb-6">
            Not sure which treatment is right for you?
          </h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            A duplex ultrasound and a 30-minute consultation is all it takes to get a clear answer from a vascular specialist.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/blog/when-to-see-doctor" className="bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group">
              Talk to a Specialist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/treatments" className="hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 border-2 border-white">
              Browse Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <div className="py-12 w-full bg-surface">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <p className="font-heading text-secondary text-2xl mb-4">varya health</p>
          <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
            This content is created for patient education only and is not a substitute for professional medical advice. Always consult a qualified vascular specialist for diagnosis and treatment decisions. Content verified against Mayo Clinic, Cleveland Clinic, NHS, and Indian vascular references.
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}
