"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

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
      <span className="text-base leading-relaxed" style={{ color: "#48546B" }}>
        {children}
      </span>
    </li>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading text-secondary text-2xl md:text-3xl font-normal mb-5">
      {children}
    </h2>
  );
}

export default function VaricoseVeinsPage() {
  return (
    <main className="bg-white">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#126B73]">
        <div className="mx-auto grid min-h-[340px] max-w-[1180px] grid-cols-1 px-6 pt-8 md:grid-cols-[1fr_360px] lg:grid-cols-[1fr_430px]">
          <div className="relative z-10 pb-12">
            <nav className="mb-9 text-sm text-white/85">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="px-2">&gt;</span>
              <Link href="/conditions" className="hover:text-white">Diseases & Conditions</Link>
              <span className="px-2">&gt;</span>
              <span>Varicose Veins</span>
            </nav>

            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-white/80">
              A Patient Guide For India
            </p>
            <h1 className="font-heading text-5xl font-normal leading-[1.08] text-white md:text-[64px]">
              Varicose Veins
            </h1>
            <p className="mt-4 max-w-2xl font-heading text-xl text-white md:text-2xl">
              What It Is, Symptoms, Causes & Treatment Options
            </p>
          </div>

          <div className="relative hidden md:block">
            <Image
              src="/h2.png"
              alt="Patient with varicose veins"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── TOPIC TABS ───────────────────────────────────────── */}
      <section className="bg-[#0B5660]">
        <div className="mx-auto flex max-w-[1180px] gap-3 overflow-x-auto px-6 py-4">
          {[
            { label: "Causes & Symptoms", href: "#symptoms", active: true },
            { label: "Diagnosis", href: "#diagnosis" },
            { label: "Treatment", href: "#treatment" },
          ].map((tab) => (
            <a
              key={tab.label}
              href={tab.href}
              className={`shrink-0 rounded-full px-6 py-3 text-sm transition-colors ${
                tab.active
                  ? "bg-white text-[#07545D]"
                  : "bg-white/12 text-white hover:bg-white/20"
              }`}
            >
              {tab.label}
            </a>
          ))}
        </div>
      </section>

      {/* ── ARTICLE + SIDEBAR ────────────────────────────────── */}
      <div className="mx-auto max-w-[1180px] px-6 py-20 lg:flex lg:gap-14">
        {/* ── LEFT ARTICLE ─────────────────────────────────── */}
        <article className="flex-1 min-w-0">
          <section className="mb-12">
            <p className="mb-6 text-base leading-8" style={{ color: "#1F2937" }}>
              Have you ever experienced heaviness, aching, swelling, or visible
              twisted veins in your legs? Do these symptoms feel worse after
              long hours of standing or sitting? This guide covers everything
              you need to know.
            </p>
            <p className="mb-6 text-base leading-8" style={{ color: "#1F2937" }}>
              Varicose veins are enlarged veins that usually appear in the legs
              when tiny one-way valves stop working properly. As a result, blood
              flows backward, pressure builds, and veins can stretch or bulge.
            </p>
            <p className="text-base leading-8" style={{ color: "#1F2937" }}>
              They are common in India and often affect people who stand, sit,
              travel, or work for long hours. Early evaluation can prevent
              symptoms from becoming more complex over time.
            </p>
          </section>

          {/* ── SECTION: Overview ────────────────────────── */}
          <section
            id="overview"
            data-toc-section
            className="mb-14 scroll-mt-24"
          >
            <SectionHeading>What Are Varicose Veins?</SectionHeading>

            <p className="text-base leading-relaxed mb-5" style={{ color: "#48546B" }}>
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

            <p className="text-base leading-relaxed mb-4" style={{ color: "#48546B" }}>
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

            <p className="text-base leading-relaxed mb-6" style={{ color: "#48546B" }}>
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

            <p className="text-base leading-relaxed mb-7" style={{ color: "#48546B" }}>
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

            <p className="text-base leading-relaxed mb-5" style={{ color: "#48546B" }}>
              Varicose veins are not immediately life-threatening — but they can
              progress if ignored.
            </p>

            <p className="text-base mb-5" style={{ color: "#48546B" }}>
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

            <p className="text-base leading-relaxed mb-6" style={{ color: "#48546B" }}>
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

            <p className="text-base leading-relaxed mb-5" style={{ color: "#48546B" }}>
              Diagnosis goes beyond visual inspection.
            </p>

            <p className="text-base mb-5" style={{ color: "#48546B" }}>
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

            <p className="text-base leading-relaxed mb-5" style={{ color: "#48546B" }}>
              Unfortunately, damaged vein valves do not repair themselves.
            </p>

            <p className="text-base mb-4" style={{ color: "#48546B" }}>
              Lifestyle changes like walking, leg elevation, or compression
              stockings can:
            </p>

            <ul className="space-y-3 mb-5">
              <BulletItem>Reduce symptoms</BulletItem>
              <BulletItem>Slow progression</BulletItem>
            </ul>

            <p className="text-base mb-2" style={{ color: "#48546B" }}>
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

            <p className="text-base leading-relaxed mb-5" style={{ color: "#48546B" }}>
              Today, most varicose veins are treated with minimally invasive,
              non-surgical procedures.
            </p>

            <p className="text-base mb-4" style={{ color: "#48546B" }}>
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

            <p className="text-base mb-4" style={{ color: "#48546B" }}>
              These treatments:
            </p>

            <ul className="space-y-3">
              <BulletItem>Use only local anesthesia</BulletItem>
              <BulletItem>Take 30–45 minutes</BulletItem>
              <BulletItem>Require no hospital stay</BulletItem>
              <BulletItem>Allow quick recovery</BulletItem>
            </ul>
          </section>

          {/* ── SECTION: Early Eval ── */}
          <section
            id="early-eval"
            data-toc-section
            className="mb-0 scroll-mt-24"
          >
            <div className="rounded-xl border border-cta/20 bg-cta/10 p-6">
              <h2 className="font-heading text-xl md:text-2xl text-secondary mb-4">
                Why Early Evaluation Matters
              </h2>
              <p className="text-[15px] md:text-base leading-7 mb-4" style={{ color: "#48546B" }}>
                Early diagnosis:
              </p>
              <ul className="list-disc list-inside text-[15px] md:text-base leading-7 space-y-2 ml-4" style={{ color: "#48546B" }}>
                <li>Prevents progression</li>
                <li>Reduces complications</li>
                <li>Makes treatment simpler and more effective</li>
                <li>Improves long-term outcomes</li>
              </ul>
              <p className="text-primary font-bold text-[15px] md:text-base mt-4">
                Ignoring symptoms often leads to more complex care later.
              </p>
            </div>
          </section>
        </article>

        {/* ── RIGHT SIDEBAR ─────────────────────────────────── */}
        <aside className="hidden lg:block w-[280px] shrink-0 pt-6">
          <div className="sticky top-32">
            <TableOfContents />
            <SidebarCTA />
          </div>
        </aside>
      </div>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-20 pb-36">
        <svg
          className="absolute -top-px left-0 block w-full rotate-180"
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
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-4">
            Take the First Step Toward Healthier Legs
          </h2>
          <p className="text-[15px] md:text-base leading-7 mb-8 text-white/85">
            Varicose veins happen for real medical reasons — not vanity. Understanding the cause is the first step to lasting relief.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary font-semibold py-3 px-8 rounded-full transition-colors hover:opacity-90">
              Book a Consultation
            </button>
            <button className="bg-transparent text-white font-semibold py-3 px-8 rounded-full transition-colors hover:bg-white/10 border-2 border-white">
              Find a Specialist Near You
            </button>
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-secondary/70">
            From our vein care experts to your inbox
          </p>
          <h2 className="font-heading text-4xl font-normal leading-tight text-primary md:text-5xl">
            Get vein-friendly tips, news, and more
            <br className="hidden md:block" />
            delivered weekly.
          </h2>

          <form className="mx-auto mt-14 flex max-w-[430px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <label htmlFor="condition-newsletter-email" className="sr-only">
              Email Address
            </label>
            <input
              id="condition-newsletter-email"
              type="email"
              placeholder="Email Address*"
              className="h-14 flex-1 rounded-full border border-accent bg-white px-6 text-sm text-secondary outline-none transition-colors placeholder:text-secondary/45 focus:border-primary"
            />
            <button
              type="submit"
              className="h-14 rounded-full bg-cta px-7 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Subscribe →
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
