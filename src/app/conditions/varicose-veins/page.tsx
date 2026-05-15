"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const TOC_SECTIONS = [
  { id: "overview",    label: "What Are Varicose Veins?" },
  { id: "symptoms",   label: "Common Symptoms" },
  { id: "causes",     label: "Why Do They Happen?" },
  { id: "risks",      label: "Are They Dangerous?" },
  { id: "when-to-see", label: "When to Be Concerned" },
  { id: "diagnosis",  label: "How Are They Diagnosed?" },
  { id: "treatment",  label: "Treatment Options" },
  { id: "early-eval", label: "Why Early Evaluation Matters" },
];

function TableOfContents() {
  const [activeId, setActiveId] = useState<string>("overview");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      // Find the topmost visible section
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length > 0) {
        setActiveId(visible[0].target.id);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersect, {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    });

    TOC_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div
      className="rounded-2xl p-5 mb-6"
      style={{ backgroundColor: "#E8F4F8" }}
    >
      <p
        className="text-xs font-semibold uppercase tracking-widest mb-4"
        style={{ color: "#026460" }}
      >
        On This Page
      </p>
      <nav>
        <ul className="space-y-1">
          {TOC_SECTIONS.map(({ id, label }) => {
            const isActive = activeId === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(id)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    setActiveId(id);
                  }}
                  className="block text-sm py-1.5 px-3 rounded-lg transition-colors"
                  style={
                    isActive
                      ? {
                          backgroundColor: "#026460",
                          color: "#ffffff",
                          fontWeight: 600,
                        }
                      : { color: "#48546B" }
                  }
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

function SidebarCTA() {
  return (
    <div
      className="rounded-2xl p-6 text-center"
      style={{ backgroundColor: "#EEF7F5" }}
    >
      <p
        className="font-heading font-semibold text-lg mb-2"
        style={{ color: "#026460" }}
      >
        Ready to Get Help?
      </p>
      <p className="text-sm mb-5" style={{ color: "#48546B" }}>
        Our specialists are here to evaluate your veins and guide you to the
        right treatment.
      </p>
      <a
        href="#"
        className="inline-block text-white font-medium px-6 py-3 rounded-full transition-colors text-sm"
        style={{ backgroundColor: "#2C847F" }}
      >
        Book a Consultation
      </a>
    </div>
  );
}

function BulletItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span
        className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0"
        style={{ backgroundColor: "#2C847F" }}
      />
      <span className="text-[17px] leading-relaxed" style={{ color: "#48546B" }}>
        {children}
      </span>
    </li>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="font-heading text-2xl md:text-3xl font-bold mb-5"
      style={{ color: "#026460" }}
    >
      {children}
    </h2>
  );
}

export default function VaricoseVeinsPage() {
  return (
    <main className="bg-white">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-10 pb-24" style={{ backgroundColor: "#026460" }}>
        <div className="max-w-6xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 text-sm transition-colors"
          >
            <ArrowLeft size={15} />
            All Conditions
          </Link>

          {/* Badge */}
          <div className="mb-4">
            <span
              className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#ffffff" }}
            >
              Venous Condition
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-heading text-4xl md:text-5xl md:leading-[1.15] font-bold text-white mb-3 max-w-2xl"
          >
            What Are Varicose Veins?
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl" style={{ color: "rgba(255,255,255,0.70)" }}>
            A complete patient guide
          </p>
        </div>

        {/* Wave divider */}
        <svg
          className="absolute -bottom-px left-0 w-full block"
          style={{ height: "60px" }}
          preserveAspectRatio="none"
          viewBox="0 0 1440 60"
          fill="none"
        >
          <path
            d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z"
            fill="#ffffff"
          />
        </svg>
      </section>

      {/* ── ARTICLE + SIDEBAR ────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-6 py-14 lg:flex lg:gap-14">
        {/* ── LEFT ARTICLE ─────────────────────────────────── */}
        <article className="flex-1 min-w-0">

          {/* ── SECTION: Overview ────────────────────────── */}
          <section
            id="overview"
            data-toc-section
            className="mb-14 scroll-mt-24"
          >
            <SectionHeading>What Are Varicose Veins?</SectionHeading>

            <p className="text-[17px] leading-relaxed mb-5" style={{ color: "#48546B" }}>
              Varicose veins are enlarged, twisted veins that usually appear on
              the legs and feet. They occur when the one-way valves inside veins
              weaken or fail.
            </p>

            {/* Valve illustration */}
            <div className="my-8 rounded-2xl overflow-hidden">
              <Image
                src="/valve_reflux.png"
                alt="Illustration showing how vein valves work and venous reflux occurs"
                width={700}
                height={420}
                className="w-full h-auto"
              />
            </div>

            <p className="text-[17px] leading-relaxed mb-4" style={{ color: "#48546B" }}>
              When this happens:
            </p>
            <ul className="space-y-3 mb-5">
              <BulletItem>
                Blood flows backward{" "}
                <span style={{ color: "#2C847F" }} className="font-medium">
                  (venous reflux)
                </span>
              </BulletItem>
              <BulletItem>Pressure builds inside the vein</BulletItem>
              <BulletItem>
                The vein stretches, twists, and becomes visible
              </BulletItem>
            </ul>

            <p className="text-base italic" style={{ color: "#48546B" }}>
              This is why varicose veins often worsen with time.
            </p>
          </section>

          {/* ── SECTION: Symptoms ────────────────────────── */}
          <section
            id="symptoms"
            data-toc-section
            className="mb-14 scroll-mt-24"
          >
            <SectionHeading>Common Symptoms</SectionHeading>

            <p className="text-[17px] leading-relaxed mb-6" style={{ color: "#48546B" }}>
              Varicose veins don&apos;t always start visibly. Many people
              experience symptoms years before veins become obvious.
            </p>

            <ul className="space-y-3 mb-6">
              <BulletItem>Aching, burning, or throbbing pain in the legs</BulletItem>
              <BulletItem>Swelling around ankles or calves</BulletItem>
              <BulletItem>Night cramps and restless legs</BulletItem>
              <BulletItem>Itching or irritation near affected veins</BulletItem>
              <BulletItem>
                Skin changes — darkening or dryness near ankles
              </BulletItem>
              <BulletItem>Visible bulging or twisted veins</BulletItem>
            </ul>

            <p className="text-base italic" style={{ color: "#48546B" }}>
              Symptoms often worsen by evening or after long periods of standing
              or sitting.
            </p>
          </section>

          {/* ── SECTION: Causes ──────────────────────────── */}
          <section
            id="causes"
            data-toc-section
            className="mb-14 scroll-mt-24"
          >
            <SectionHeading>Why Do They Happen?</SectionHeading>

            <p className="text-[17px] leading-relaxed mb-7" style={{ color: "#48546B" }}>
              Varicose veins usually develop due to a combination of factors.
            </p>

            {/* 2 × 3 cause cards */}
            <div className="grid sm:grid-cols-2 gap-5 mb-7">
              {[
                {
                  title: "Genetics",
                  desc: "The most common cause",
                },
                {
                  title: "Long Hours Standing or Sitting",
                  desc: "Prolonged pressure on leg veins",
                },
                {
                  title: "Pregnancy & Hormonal Changes",
                  desc: "Increased blood volume and pressure",
                },
                {
                  title: "Age-Related Weakening",
                  desc: "Vein walls weaken over time",
                },
                {
                  title: "Excess Body Weight",
                  desc: "Increases pressure on veins",
                },
                {
                  title: "Lack of Movement",
                  desc: "Reduced blood circulation",
                },
              ].map(({ title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl p-5"
                  style={{ backgroundColor: "#EEF7F5" }}
                >
                  <h3
                    className="font-heading font-semibold text-base mb-1"
                    style={{ color: "#026460" }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm" style={{ color: "#48546B" }}>
                    {desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-base italic" style={{ color: "#48546B" }}>
              They are especially common in people whose work requires them to
              stay on their feet or seated for long hours.
            </p>
          </section>

          {/* ── SECTION: Risks ───────────────────────────── */}
          <section
            id="risks"
            data-toc-section
            className="mb-14 scroll-mt-24"
          >
            <SectionHeading>Are They Dangerous?</SectionHeading>

            <p className="text-[17px] leading-relaxed mb-5" style={{ color: "#48546B" }}>
              Varicose veins are not immediately life-threatening — but they can
              progress if ignored.
            </p>

            <p className="text-[17px] mb-5" style={{ color: "#48546B" }}>
              Without treatment, they may lead to:
            </p>

            <ul className="space-y-3 mb-6">
              <BulletItem>Chronic leg pain and swelling</BulletItem>
              <BulletItem>Skin discoloration and thickening</BulletItem>
              <BulletItem>Eczema-like skin changes</BulletItem>
              <BulletItem>Venous ulcers (non-healing wounds)</BulletItem>
            </ul>

            <p className="text-base italic" style={{ color: "#48546B" }}>
              Early evaluation helps prevent these complications.
            </p>
          </section>

          {/* ── SECTION: When to See ─────────────────────── */}
          <section
            id="when-to-see"
            data-toc-section
            className="mb-14 scroll-mt-24"
          >
            <SectionHeading>When Should You Be Concerned?</SectionHeading>

            <p className="text-[17px] leading-relaxed mb-6" style={{ color: "#48546B" }}>
              You should consider seeing a specialist if:
            </p>

            <ul className="space-y-3 mb-6">
              <BulletItem>Symptoms persist or worsen over time</BulletItem>
              <BulletItem>Swelling occurs daily</BulletItem>
              <BulletItem>
                Skin around the ankles changes color or texture
              </BulletItem>
              <BulletItem>Pain interferes with daily activities</BulletItem>
              <BulletItem>
                One leg feels consistently worse than the other
              </BulletItem>
              <BulletItem>
                You have a family history of varicose veins
              </BulletItem>
            </ul>

            <p className="text-base italic" style={{ color: "#48546B" }}>
              Visible veins alone aren&apos;t the only indicator.
            </p>
          </section>

          {/* ── SECTION: Diagnosis ───────────────────────── */}
          <section
            id="diagnosis"
            data-toc-section
            className="mb-14 scroll-mt-24"
          >
            <SectionHeading>How Are They Diagnosed?</SectionHeading>

            <p className="text-[17px] leading-relaxed mb-5" style={{ color: "#48546B" }}>
              Diagnosis goes beyond visual inspection.
            </p>

            <p className="text-[17px] mb-5" style={{ color: "#48546B" }}>
              A Doppler ultrasound is used to:
            </p>

            <ul className="space-y-3 mb-6">
              <BulletItem>Check blood flow direction</BulletItem>
              <BulletItem>Identify faulty valves</BulletItem>
              <BulletItem>Determine which veins are affected</BulletItem>
            </ul>

            <p className="text-base italic" style={{ color: "#48546B" }}>
              This helps doctors decide whether treatment is needed and which
              option is best.
            </p>
          </section>

          {/* ── SECTION: Treatment ───────────────────────── */}
          <section
            id="treatment"
            data-toc-section
            className="mb-14 scroll-mt-24"
          >
            <SectionHeading>Can They Go Away on Their Own?</SectionHeading>

            <p className="text-[17px] leading-relaxed mb-5" style={{ color: "#48546B" }}>
              Unfortunately, damaged vein valves do not repair themselves.
            </p>

            <p className="text-[17px] mb-4" style={{ color: "#48546B" }}>
              Lifestyle changes like walking, leg elevation, or compression
              stockings can:
            </p>

            <ul className="space-y-3 mb-5">
              <BulletItem>Reduce symptoms</BulletItem>
              <BulletItem>Slow progression</BulletItem>
            </ul>

            <p className="text-[17px] mb-2" style={{ color: "#48546B" }}>
              But they cannot reverse valve damage.
            </p>
            <p className="text-base italic mb-10" style={{ color: "#48546B" }}>
              When symptoms persist, medical treatment may be required.
            </p>

            {/* Modern Treatments sub-section */}
            <h3
              className="font-heading text-xl font-semibold mb-5"
              style={{ color: "#026460" }}
            >
              The Good News: Modern Treatments Are Simple
            </h3>

            <p className="text-[17px] leading-relaxed mb-5" style={{ color: "#48546B" }}>
              Today, most varicose veins are treated with minimally invasive,
              non-surgical procedures.
            </p>

            <p className="text-[17px] mb-4" style={{ color: "#48546B" }}>
              Common treatment options include:
            </p>

            <ul className="space-y-3 mb-8">
              <BulletItem>
                <strong style={{ color: "#2C847F" }}>EVLT</strong> –
                Endovenous Laser Treatment
              </BulletItem>
              <BulletItem>
                <strong style={{ color: "#2C847F" }}>RFA</strong> –
                Radiofrequency Ablation
              </BulletItem>
              <BulletItem>
                <strong style={{ color: "#2C847F" }}>Sclerotherapy</strong> –
                Foam Treatment
              </BulletItem>
              <BulletItem>
                <strong style={{ color: "#2C847F" }}>VenaSeal</strong> – Glue
                Therapy
              </BulletItem>
            </ul>

            <p className="text-[17px] mb-4" style={{ color: "#48546B" }}>
              These treatments:
            </p>

            <ul className="space-y-3">
              <BulletItem>Use only local anesthesia</BulletItem>
              <BulletItem>Take 30–45 minutes</BulletItem>
              <BulletItem>Require no hospital stay</BulletItem>
              <BulletItem>Allow quick recovery</BulletItem>
            </ul>
          </section>

          {/* ── SECTION: Early Eval (dark teal, full-bleed) ── */}
          <section
            id="early-eval"
            data-toc-section
            className="mb-0 scroll-mt-24"
          >
            {/* Negative-margin full-bleed panel */}
            <div
              className="-mx-6 lg:-mx-0 rounded-none lg:rounded-3xl overflow-hidden"
              style={{ backgroundColor: "#1D5E5B" }}
            >
              <div className="flex flex-col lg:flex-row">
                {/* Text side */}
                <div className="flex-1 py-12 px-8 lg:py-14 lg:px-10">
                  <h2
                    className="font-heading text-2xl md:text-3xl font-bold mb-4 text-white"
                  >
                    Why Early Evaluation Matters
                  </h2>
                  <p className="text-lg mb-6 text-white/80">Early diagnosis:</p>
                  <div className="space-y-4">
                    {[
                      "Prevents progression",
                      "Reduces complications",
                      "Makes treatment simpler and more effective",
                      "Improves long-term outcomes",
                    ].map((point) => (
                      <div key={point} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-lg text-white">{point}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-base italic mt-8 text-white/70">
                    Ignoring symptoms often leads to more complex care later.
                  </p>
                </div>

                {/* Image side */}
                <div className="lg:w-2/5 relative min-h-[260px] lg:min-h-0">
                  <Image
                    src="/patient.png"
                    alt="Doctor consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </article>

        {/* ── RIGHT SIDEBAR ─────────────────────────────────── */}
        <aside className="hidden lg:block w-[280px] shrink-0">
          <div className="sticky top-24">
            <TableOfContents />
            <SidebarCTA />
          </div>
        </aside>
      </div>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section>
        <div
          className="border-y pt-10 md:pt-16 lg:pt-20 max-w-full overflow-hidden"
          style={{ borderColor: "rgba(44,132,127,0.20)", backgroundColor: "#EEF7F5" }}
        >
          <div className="max-w-6xl mx-auto px-6 relative flex flex-col md:flex-row md:gap-12">
            {/* Left Content */}
            <div className="mb-72 md:mb-28 md:w-2/3 lg:shrink-0 xl:mb-20 xl:w-1/2">
              <h2
                className="font-heading text-3xl md:text-[40px] md:leading-[48px] mb-4"
                style={{ color: "#026460" }}
              >
                Take the First Step Toward Healthier Legs
              </h2>
              <p
                className="text-lg leading-relaxed mb-4"
                style={{ color: "#48546B" }}
              >
                If your legs feel heavy, painful, or swollen, it&apos;s worth
                getting checked.
              </p>
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "#48546B" }}
              >
                Understanding the problem is the first step toward lasting
                relief.
              </p>
              <a
                href="#"
                className="inline-block text-white font-medium px-6 py-3 rounded-full transition-colors text-base"
                style={{ backgroundColor: "#2C847F" }}
              >
                Find a Varicose vein specialist near you
              </a>
            </div>

            {/* Right – Stacked Cards */}
            <div className="absolute bottom-0 right-1/2 mr-6 h-min w-[110%] max-w-md translate-x-1/2 md:-right-36 md:mr-0 md:w-3/4 md:max-w-xl md:translate-x-0 lg:mt-auto xl:relative xl:right-0 xl:h-full xl:w-full xl:max-w-full">
              <div
                className="relative h-full min-h-64 w-full"
                style={{ aspectRatio: "8/5" }}
              >
                {/* Card 3 – Back */}
                <div
                  className="absolute right-0 top-0 z-10 w-3/5 bg-white shadow-lg rounded-3xl overflow-hidden"
                  style={{
                    aspectRatio: "3/5",
                    transform: "translateX(-24%) translateY(24%) rotate(-30deg)",
                  }}
                >
                  <Image
                    src="/t1.png"
                    alt="Patient consultation"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Card 2 – Middle */}
                <div
                  className="absolute right-0 top-0 z-20 w-3/5 bg-white shadow-xl rounded-3xl overflow-hidden"
                  style={{
                    aspectRatio: "3/5",
                    transform: "translateX(-16%) translateY(8%) rotate(-15deg)",
                  }}
                >
                  <Image
                    src="/t2.png"
                    alt="Treatment procedure"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Card 1 – Front */}
                <div
                  className="absolute right-0 top-0 z-30 w-3/5 bg-white shadow-2xl rounded-3xl overflow-hidden"
                  style={{ aspectRatio: "3/5" }}
                >
                  <Image
                    src="/t3.png"
                    alt="Healthy legs result"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
