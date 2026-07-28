"use client";

import { useEffect, useState } from "react";
import { ArrowRight, HeartPulse } from "lucide-react";
import Image from "@/compat/Image";
import Link from "@/compat/Link";
import Footer from "@/components/Footer";
import type { ConditionContent } from "@/data/conditions";

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "key-facts", label: "Key facts" },
  { id: "symptoms", label: "Symptoms" },
  { id: "causes", label: "Causes" },
  { id: "risk-factors", label: "Risk factors" },
  { id: "diagnosis", label: "Diagnosis" },
  { id: "treatment", label: "Treatment" },
  { id: "prevention", label: "Prevention & daily care" },
  { id: "complications", label: "Complications" },
  { id: "faq", label: "FAQs" },
];

const sectionClasses = "mb-16 border-t border-[#dbe7e6] pt-10";
const h2Classes =
  "font-heading text-[1.65rem] font-normal leading-[1.2] tracking-tight text-secondary sm:text-[1.9rem] mb-5";
const bodyClasses = "text-[17px] leading-[1.8] text-gray-600";

export default function ConditionDetail({
  condition,
}: {
  condition: ConditionContent;
}) {
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const onScroll = () => {
      let current = "overview";
      for (const section of tocSections) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= 160) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <main className="bg-white">
      {/* ── HERO ── */}
      <section className="w-full bg-primary">
        <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[12px] font-semibold text-white">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white" />
              {condition.badge}
            </span>
            <h1 className="font-heading mt-4 text-[2rem] font-normal leading-[1.15] tracking-tight text-white sm:text-[2.6rem]">
              {condition.name}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85">
              {condition.tagline}
            </p>
            <Link
              href="/book-consultation"
              className="group mt-7 inline-flex items-center gap-2 rounded-full bg-cta px-6 py-2 text-sm font-medium text-white shadow-lg transition-all hover:brightness-105"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="relative h-[260px] w-full overflow-hidden rounded-2xl sm:h-[340px]">
            <Image
              src={condition.image}
              alt={condition.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── ARTICLE + SIDEBAR ── */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1320px] px-5 py-12 md:px-8 md:py-16">
          <div className="lg:flex lg:gap-14">
            {/* Article */}
            <article className="min-w-0 flex-1">
              {/* Byline */}
              <div className="mb-10 flex items-center gap-3 border-b border-[#dbe7e6] pb-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-lighter text-primary">
                  <HeartPulse size={20} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-tight text-secondary">
                    Sira Vascular Clinical Team
                  </p>
                  <p className="text-xs text-gray-500">
                    Vascular specialists · Medically reviewed
                  </p>
                </div>
              </div>

              {/* Overview */}
              <div id="overview" className="mb-16 scroll-mt-28">
                {condition.intro.map((para, i) => (
                  <p
                    key={i}
                    className={`${bodyClasses} ${i === 0 ? "text-secondary" : ""} mb-5 last:mb-0`}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* Key facts */}
              <div id="key-facts" className={`${sectionClasses} scroll-mt-28`}>
                <h2 className={h2Classes}>Key facts about {condition.name.toLowerCase()}</h2>
                <div className="rounded-2xl border border-accent bg-surface p-6 md:p-8">
                  <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                    {condition.keyFacts.map((fact) => (
                      <div key={fact.label}>
                        <p className="mb-1 text-xs font-bold uppercase tracking-[0.15em] text-primary">
                          {fact.label}
                        </p>
                        <p className="text-[15px] leading-relaxed text-secondary">
                          {fact.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Symptoms */}
              <div id="symptoms" className={`${sectionClasses} scroll-mt-28`}>
                <h2 className={h2Classes}>Symptoms</h2>
                <p className={`${bodyClasses} mb-6`}>{condition.symptomsIntro}</p>
                <ul className="ml-6 list-disc space-y-4">
                  {condition.symptoms.map((s, i) => (
                    <li key={i} className="pl-1 text-[17px] leading-[1.75] text-secondary">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Causes */}
              <div id="causes" className={`${sectionClasses} scroll-mt-28`}>
                <h2 className={h2Classes}>What causes it</h2>
                <p className={`${bodyClasses} mb-6`}>{condition.causesIntro}</p>
                <ul className="ml-6 list-disc space-y-5">
                  {condition.causes.map((c) => (
                    <li key={c.title} className="pl-1 text-[17px] leading-[1.75] text-secondary">
                      <strong className="font-semibold">{c.title}.</strong>{" "}
                      <span className="text-gray-600">{c.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risk factors */}
              <div id="risk-factors" className={`${sectionClasses} scroll-mt-28`}>
                <h2 className={h2Classes}>Risk factors</h2>
                <ul className="ml-6 list-disc space-y-5">
                  {condition.riskFactors.map((r) => (
                    <li key={r.factor} className="pl-1 text-[17px] leading-[1.75] text-secondary">
                      <strong className="font-semibold">{r.factor}.</strong>{" "}
                      <span className="text-gray-600">{r.detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Diagnosis */}
              <div id="diagnosis" className={`${sectionClasses} scroll-mt-28`}>
                <h2 className={h2Classes}>How it is diagnosed</h2>
                <p className={`${bodyClasses} mb-6`}>
                  Getting the diagnosis right matters, because several other
                  conditions cause similar symptoms and need very different
                  treatment. Here is how your specialist confirms it:
                </p>
                <ul className="ml-6 list-disc space-y-4">
                  {condition.diagnosis.map((d, i) => (
                    <li key={i} className="pl-1 text-[17px] leading-[1.75] text-secondary">
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Treatment */}
              <div id="treatment" className={`${sectionClasses} scroll-mt-28`}>
                <h2 className={h2Classes}>Treatment</h2>
                <div className="space-y-6">
                  {condition.treatmentSteps.map((step) => (
                    <div
                      key={step.number}
                      className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm md:p-7"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                          {step.number}
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-heading text-xl font-normal leading-snug text-secondary">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-base leading-[1.75] text-gray-600">
                            {step.desc}
                          </p>
                          <ul className="mt-4 space-y-2">
                            {step.details.map((d) => (
                              <li key={d} className="flex items-start gap-3">
                                <span className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span className="text-[15px] leading-relaxed text-gray-600">
                                  {d}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Prevention */}
              <div id="prevention" className={`${sectionClasses} scroll-mt-28`}>
                <h2 className={h2Classes}>Prevention and daily care</h2>
                <p className={`${bodyClasses} mb-6`}>
                  Treatment corrects the underlying problem. These daily habits
                  protect the result and slow any further progression:
                </p>
                <ul className="ml-6 list-disc space-y-5">
                  {condition.prevention.map((p) => (
                    <li key={p.title} className="pl-1 text-[17px] leading-[1.75] text-secondary">
                      <strong className="font-semibold">{p.title}.</strong>{" "}
                      <span className="text-gray-600">{p.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Complications */}
              <div id="complications" className={`${sectionClasses} scroll-mt-28`}>
                <h2 className={h2Classes}>Complications if left untreated</h2>
                <ul className="ml-6 list-disc space-y-5">
                  {condition.complications.map((c) => (
                    <li key={c.title} className="pl-1 text-[17px] leading-[1.75] text-secondary">
                      <strong className="font-semibold">{c.title}.</strong>{" "}
                      <span className="text-gray-600">{c.desc}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-7 text-[17px] leading-[1.8] font-semibold text-secondary">
                  Concerned that your symptoms are getting worse?{" "}
                  <Link
                    href="/book-consultation"
                    className="text-primary underline decoration-2 underline-offset-4"
                  >
                    Book a consultation and get a clear answer with a fifteen-minute scan
                  </Link>
                  .
                </p>
              </div>

              {/* FAQs */}
              <div id="faq" className={`${sectionClasses} scroll-mt-28`}>
                <h2 className={h2Classes}>Frequently asked questions</h2>
                <div className="space-y-4">
                  {condition.faqs.map((faq) => (
                    <div
                      key={faq.q}
                      className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
                    >
                      <h3 className="font-heading text-lg font-normal leading-snug text-secondary">
                        {faq.q}
                      </h3>
                      <p className="mt-2 text-base leading-[1.75] text-gray-600">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden w-[280px] shrink-0 lg:block">
              <div
                className="scrollbar-hidden sticky top-28 overflow-y-auto"
                style={{ maxHeight: "calc(100vh - 8rem)" }}
              >
                {/* Table of contents */}
                <div className="mb-6 rounded-2xl bg-surface px-6 py-5">
                  <h3 className="font-heading mb-3 text-xl font-normal leading-tight text-secondary">
                    On this page
                  </h3>
                  <nav className="flex flex-col">
                    {tocSections.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => scrollToSection(s.id)}
                        className="border-b border-black/5 py-2 text-left last:border-0"
                      >
                        <span
                          className={`text-[14px] transition-colors ${
                            activeSection === s.id
                              ? "font-semibold text-primary"
                              : "text-gray-600 hover:text-primary"
                          }`}
                        >
                          {s.label}
                        </span>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* CTA card */}
                <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-accent-lighter text-primary">
                    <HeartPulse size={20} strokeWidth={1.6} />
                  </span>
                  <h4 className="font-heading text-lg font-normal leading-snug text-secondary">
                    You do not have to live with this
                  </h4>
                  <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
                    A short consultation and a painless ultrasound give you a
                    clear diagnosis and a treatment plan you can understand.
                  </p>
                  <Link
                    href="/book-consultation"
                    className="mt-5 block rounded-full bg-cta px-6 py-2 text-center text-sm font-medium text-white transition-all hover:brightness-105"
                  >
                    Book Your First Visit
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="w-full bg-primary py-14 md:py-16">
        <div className="mx-auto w-full max-w-[900px] px-5 text-center md:px-8">
          <h2 className="font-heading text-[1.7rem] font-normal leading-snug text-white sm:text-[2.1rem]">
            Not sure if this is what you have?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/85">
            A short consultation and a painless ultrasound scan give you a clear
            answer and a treatment plan you can understand.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book-consultation"
              className="group inline-flex items-center gap-2 rounded-full bg-cta px-6 py-2 text-sm font-medium text-white shadow-lg transition-all hover:brightness-105"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/conditions"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              View all conditions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
