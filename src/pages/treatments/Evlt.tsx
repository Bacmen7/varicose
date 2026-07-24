
import Link from "@/compat/Link";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Footer from "@/components/Footer";

const tocSections = [
  { id: "overview", label: "Overview" },
  { id: "key-facts", label: "Key Facts" },
  { id: "who-needs", label: "Who Needs EVLT?" },
  { id: "how-it-works", label: "How It Works" },
  { id: "benefits", label: "Benefits" },
  { id: "vs-surgery", label: "EVLT vs Surgery" },
  { id: "recovery", label: "Recovery & Safety" },
  { id: "faq", label: "FAQs" },
];

const keyTakeaways = [
  "EVLT is a minimally invasive, FDA-approved laser procedure that treats varicose veins at their root cause.",
  "It is performed under local anesthesia and takes 30-60 minutes per leg, with no surgery and no stitches.",
  "Most patients walk out the same day and return to work within 24-48 hours.",
  "Long-term closure success rate is above 95% when performed by an experienced specialist.",
];

const symptoms = [
  "Visible, bulging varicose veins",
  "Persistent leg pain or heaviness",
  "Swelling around ankles or calves",
  "Night cramps or restless legs",
  "Skin darkening or itching near veins",
  "Non-healing venous ulcers",
  "Symptoms worsen after standing",
];

const steps = [
  { title: "Ultrasound Mapping", desc: "The doctor identifies the faulty vein and maps blood flow using Doppler ultrasound." },
  { title: "Local Anesthesia", desc: "The area is numbed, so you stay awake, comfortable, and pain-free." },
  { title: "Laser Fiber Insertion", desc: "A thin laser fiber is inserted into the vein through a tiny needle puncture." },
  { title: "Laser Activation", desc: "Controlled laser energy seals the vein from inside." },
  { title: "Natural Blood Rerouting", desc: "Blood automatically flows through healthier veins." },
  { title: "Same-Day Discharge", desc: "You walk out shortly after the procedure." },
];

const benefits = [
  { title: "High Success Rate", desc: "95%+ success rate in most cases" },
  { title: "Minimal Discomfort", desc: "Minimal pain and bruising" },
  { title: "No Surgical Scars", desc: "No large incisions or stitches required" },
  { title: "Faster Recovery", desc: "Significantly faster than traditional surgery" },
  { title: "Quick Return to Activity", desc: "Return to normal activity within 24-48 hours" },
  { title: "Long-Term Relief", desc: "Provides lasting symptom relief" },
];

const comparisons = [
  { evlt: "Minimally invasive", surgery: "Major surgical procedure" },
  { evlt: "Local anesthesia", surgery: "General anesthesia" },
  { evlt: "No stitches", surgery: "Surgical incisions" },
  { evlt: "Same-day discharge", surgery: "Hospital stay required" },
  { evlt: "Faster recovery", surgery: "Longer downtime" },
  { evlt: "Lower complication risk", surgery: "Higher complication risk" },
];

const faqs = [
  { q: "Is EVLT painful?", a: "Most patients describe EVLT as mildly uncomfortable at most. Local anesthesia prevents pain during the procedure. Post-procedure soreness is minimal and temporary." },
  { q: "How long does the procedure take?", a: "EVLT typically takes 30-60 minutes per leg. You can walk immediately afterward and go home the same day." },
  { q: "Is EVLT safe?", a: "Yes. EVLT is FDA-approved and globally accepted. When performed by an experienced specialist, complications are rare and long-term outcomes are excellent." },
  { q: "Will the varicose veins come back?", a: "EVLT has a high long-term success rate. The treated vein is permanently sealed. However, new veins can develop over time, especially without lifestyle changes." },
  { q: "What is the recovery like?", a: "Most patients return to light activity within 24 hours and resume normal work within 1-2 days. Compression stockings are worn for 1-2 weeks." },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function EVLTPage() {
  const [activeSection, setActiveSection] = useState("overview");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [tocOpen, setTocOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0 }
    );
    const sections = document.querySelectorAll("[data-toc-section]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-secondary antialiased font-body">
      <main>

        {/* HERO */}
        <header className="bg-accent-lighter">
          <div className="max-w-7xl mx-auto px-6 pt-5 pb-12 md:pt-8 md:pb-14">
            {/* Breadcrumb */}
            <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-[12px] font-semibold text-gray-500 md:mb-10 md:gap-2 md:text-[13px]">
              <Link href="/" className="transition-colors hover:text-secondary">Sira Vascular</Link>
              <span>&gt;</span>
              <Link href="/treatments-overview" className="transition-colors hover:text-secondary">Treatments</Link>
              <span>&gt;</span>
              <span className="text-secondary">Endovenous Laser Treatment (EVLT)</span>
            </nav>

            <div className="max-w-3xl">
              <h1 className="font-heading mb-4 text-[28px] font-normal leading-[1.15] tracking-tight text-secondary md:mb-5 md:text-4xl lg:text-5xl">
                Endovenous Laser Treatment (EVLT)
              </h1>
              <p className="mb-5 text-base leading-relaxed text-gray-600 md:text-lg">
                Gold-standard minimally invasive laser therapy for varicose veins. No surgery. No stitches. Walk out the same day.
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-x-2 text-[12px] font-semibold leading-6 text-gray-500 md:text-[13px]">
                <span>6 min read</span>
                <span>&bull;</span>
                <span>Written by:</span>
                <span className="underline">Vein Specialist Team</span>
                <span>&bull;</span>
                <span>Reviewed by:</span>
                <span className="underline">Dr. Rajeev Sharma</span>
                <span>&bull;</span>
                <span>Updated: <strong className="text-secondary">May 2026</strong></span>
              </div>

              <a
                href="#"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-10 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-primary-dark md:mt-8 md:inline-flex md:w-auto md:py-3"
              >
                Request an Appointment
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </header>

        {/* Mobile TOC: sticky collapsible bar */}
        <div className="sticky top-0 z-20 border-b border-gray-100 bg-white shadow-sm lg:hidden">
          <div className="mx-auto max-w-7xl px-6">
            <button
              onClick={() => setTocOpen(!tocOpen)}
              className="flex w-full items-center justify-between py-3.5 text-left"
            >
              <span className="text-[15px] font-semibold text-secondary">Here&apos;s what we&apos;ll cover</span>
              <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${tocOpen ? "rotate-180" : ""}`} />
            </button>
            {tocOpen && (
              <div className="max-h-[50vh] space-y-3 overflow-y-auto pb-4">
                {tocSections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setTocOpen(false); scrollToSection(s.id); }}
                    className="block w-full text-left text-[14px] leading-6 text-secondary hover:underline"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ARTICLE + LEFT TOC SIDEBAR */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-10 md:py-16">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-[250px_minmax(0,1fr)]">

              {/* LEFT: Sticky TOC */}
              <aside className="hidden h-fit lg:sticky lg:top-24 lg:block">
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-heading text-xl font-normal leading-none tracking-tight text-secondary">
                    Here&apos;s what we&apos;ll cover
                  </h3>
                </div>
                <div className="space-y-4">
                  {tocSections.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className={`block text-left text-[16px] leading-7 transition-colors hover:underline ${
                        activeSection === s.id ? "font-semibold text-primary" : "text-secondary"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>

                {/* CTA card */}
                <div className="mt-10 rounded-2xl border border-gray-200 bg-white p-6">
                  <h4 className="font-heading mb-3 text-xl font-normal leading-snug text-secondary">
                    You do not have to live with varicose veins
                  </h4>
                  <p className="mb-5 text-sm leading-relaxed text-gray-500">
                    Get started on your path to pain-free legs. See a vein specialist within days.
                  </p>
                  <a href="#" className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark">
                    Book Your First Visit
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </aside>

              {/* RIGHT: Article content */}
              <div className="min-w-0">

                {/* Key takeaways */}
                <div className="mb-10 bg-accent-lighter p-5 md:mb-14 md:p-7">
                  <h3 className="font-heading mb-4 text-xl font-normal leading-none tracking-tight text-secondary md:mb-6 md:text-3xl">
                    Key takeaways
                  </h3>
                  <ul className="space-y-4">
                    {keyTakeaways.map((item, index) => (
                      <li key={index} className="flex gap-3 text-[16px] leading-8 text-secondary">
                        <span>&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* OVERVIEW */}
                <div id="overview" data-toc-section className="mb-8 space-y-4 md:mb-10 md:space-y-6">
                  <p className="text-[16px] leading-[1.7] text-secondary">
                    Endovenous Laser Treatment (EVLT) is a{" "}
                    <strong className="rounded-[3px] bg-accent px-1.5 py-0.5 font-semibold">
                      minimally invasive, gold-standard procedure
                    </strong>{" "}
                    used to treat varicose veins at their root cause.
                  </p>
                  <p className="text-[16px] leading-[1.7] text-secondary/80">
                    Instead of removing veins surgically, EVLT uses laser energy delivered inside the faulty vein to gently seal it shut. Once closed, blood naturally reroutes to healthy veins, relieving symptoms and improving circulation.
                  </p>
                  <p className="text-[16px] leading-[1.7] text-secondary/80">
                    EVLT is performed under local anesthesia. The procedure takes 30-60 minutes, and most patients walk out of the clinic the same day and return to work within 24-48 hours.
                  </p>
                </div>

                {/* KEY FACTS */}
                <div id="key-facts" data-toc-section className="mb-10 md:mb-14">
                  <h2 className="font-heading mb-5 text-2xl font-normal leading-tight tracking-tight text-secondary md:text-3xl">
                    Key facts about EVLT
                  </h2>
                  <div className="border border-accent/60 bg-accent-lighter p-5 md:p-7">
                    <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
                      {[
                        ["Procedure type", "Minimally invasive, day-care"],
                        ["Anesthesia", "Local anesthesia only"],
                        ["Duration", "30-60 minutes per leg"],
                        ["Recovery", "Back to work in 24-48 hours"],
                        ["Success rate", "95%+ long-term closure"],
                        ["Approval", "FDA-approved, globally accepted"],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-gray-400">{label}</p>
                          <p className="text-[16px] text-secondary">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* WHO NEEDS */}
                <div id="who-needs" data-toc-section className="mb-10 md:mb-14">
                  <h2 className="font-heading mb-4 text-2xl font-normal leading-tight tracking-tight text-secondary md:text-3xl">
                    Who needs EVLT?
                  </h2>
                  <p className="mb-5 text-[16px] leading-[1.7] text-secondary/80">
                    EVLT is recommended when a{" "}
                    <strong className="underline decoration-primary decoration-2 underline-offset-[3px]">
                      Doppler ultrasound confirms venous reflux
                    </strong>{" "}
                    in the great or small saphenous vein.
                  </p>
                  <ul className="list-disc space-y-3 pl-6">
                    {symptoms.map((s, i) => (
                      <li key={i} className="pl-1 text-[16px] leading-[1.7] text-secondary">{s}</li>
                    ))}
                  </ul>
                </div>

                {/* HOW IT WORKS */}
                <div id="how-it-works" data-toc-section className="mb-10 md:mb-14">
                  <h2 className="font-heading mb-7 text-2xl font-normal leading-tight tracking-tight text-secondary md:text-3xl">
                    How does EVLT work?
                  </h2>
                  <div className="relative space-y-10 border-l-2 border-accent pl-8">
                    {steps.map((step, index) => (
                      <div key={index} className="relative">
                        <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-primary bg-white" />
                        <div className="mb-2 flex items-baseline gap-3">
                          <span className="font-heading text-3xl font-normal text-primary/30">{`0${index + 1}`}</span>
                          <h3 className="font-heading text-xl font-normal text-secondary md:text-2xl">{step.title}</h3>
                        </div>
                        <p className="text-[16px] leading-[1.7] text-secondary/80">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BENEFITS */}
                <div id="benefits" data-toc-section className="mb-10 md:mb-14">
                  <h2 className="font-heading mb-5 text-2xl font-normal leading-tight tracking-tight text-secondary md:text-3xl">
                    Benefits of EVLT
                  </h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {benefits.map((b, i) => (
                      <div key={i} className="flex gap-4 rounded-xl border border-gray-100 p-5 transition-all hover:border-primary/30 hover:bg-accent-lighter">
                        <div className="mt-0.5 flex-shrink-0 text-primary"><CheckIcon /></div>
                        <div>
                          <p className="mb-0.5 text-[16px] font-semibold text-secondary">{b.title}</p>
                          <p className="text-sm leading-6 text-gray-500">{b.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* VS SURGERY */}
                <div id="vs-surgery" data-toc-section className="mb-10 md:mb-14">
                  <h2 className="font-heading mb-2 text-2xl font-normal leading-tight tracking-tight text-secondary md:text-3xl">
                    EVLT vs. traditional surgery
                  </h2>
                  <p className="mb-5 text-[16px] text-gray-400">Why modern laser therapy is the preferred choice</p>
                  <div className="overflow-hidden rounded-xl border border-gray-200">
                    <div className="grid grid-cols-2 border-b border-gray-200">
                      <div className="border-r border-gray-200 bg-primary/10 p-4 text-center">
                        <p className="text-base font-semibold text-primary">EVLT</p>
                      </div>
                      <div className="bg-gray-50 p-4 text-center">
                        <p className="text-base font-semibold text-gray-400">Traditional Surgery</p>
                      </div>
                    </div>
                    {comparisons.map((item, i) => (
                      <div key={i} className="grid grid-cols-2 border-b border-gray-100 last:border-0">
                        <div className="flex items-center gap-3 border-r border-gray-100 bg-white px-4 py-3">
                          <span className="flex-shrink-0 text-primary"><CheckIcon /></span>
                          <span className="text-sm font-medium text-secondary md:text-base">{item.evlt}</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white px-4 py-3">
                          <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-300" />
                          <span className="text-sm text-gray-400 md:text-base">{item.surgery}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* RECOVERY */}
                <div id="recovery" data-toc-section className="mb-10 md:mb-14">
                  <h2 className="font-heading mb-5 text-2xl font-normal leading-tight tracking-tight text-secondary md:text-3xl">
                    Recovery &amp; safety
                  </h2>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="rounded-xl border border-accent/40 bg-accent-lighter p-6">
                      <h3 className="font-heading mb-4 text-xl font-normal text-secondary">Recovery timeline</h3>
                      <ul className="space-y-3">
                        {["Walk immediately after procedure", "Resume daily activity in 1-2 days", "Wear compression stockings as advised", "Avoid intense workouts for 2 weeks", "Follow-up ultrasound confirms closure"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm leading-6 text-secondary md:text-base">
                            <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-gray-100 bg-white p-6">
                      <h3 className="font-heading mb-4 text-xl font-normal text-secondary">Is it safe?</h3>
                      <p className="mb-4 text-sm leading-relaxed text-gray-500 md:text-base">Yes. EVLT is FDA-approved. When performed by an experienced specialist:</p>
                      <ul className="space-y-3">
                        {["Complications are rare", "Infection risk is minimal", "Long-term outcomes are excellent"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-sm leading-6 text-secondary md:text-base">
                            <span className="flex-shrink-0 text-primary"><CheckIcon /></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* FAQ */}
                <div id="faq" data-toc-section>
                  <h2 className="font-heading mb-5 text-2xl font-normal leading-tight tracking-tight text-secondary md:text-3xl">
                    Frequently asked questions
                  </h2>
                  <div className="space-y-3">
                    {faqs.map((faq, i) => (
                      <div key={i} className="overflow-hidden rounded-xl border border-gray-200">
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="flex w-full cursor-pointer items-center justify-between p-5 text-left transition-colors hover:bg-gray-50"
                        >
                          <span className="pr-4 text-base font-semibold text-secondary">{faq.q}</span>
                          <ChevronDown className={`h-5 w-5 flex-shrink-0 text-gray-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                        </button>
                        {openFaq === i && (
                          <div className="border-t border-gray-100 px-5 pb-5 pt-4 text-[16px] leading-[1.7] text-secondary/80">
                            {faq.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Written by / Last update row */}
                <div className="mt-12 grid grid-cols-2 gap-8 border-t border-gray-200 pt-8">
                  <div>
                    <p className="mb-1 text-[13px] text-gray-400">Written by</p>
                    <p className="text-[15px] font-semibold text-secondary underline">Vein Specialist Team</p>
                  </div>
                  <div className="text-right">
                    <p className="mb-1 text-[13px] text-gray-400">Last update</p>
                    <p className="text-[15px] font-semibold text-secondary">May 2026</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
