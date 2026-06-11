"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

const tableOfContents = [
  { id: "why-return", title: "Why Do Varicose Veins Return?" },
  { id: "lowest-comeback", title: "Treatments With Lowest Comeback Rates" },
  { id: "compression", title: "Can Compression Stockings Help?" },
  { id: "lower-risk", title: "How to Lower Your Risk of Recurrence" },
  { id: "follow-up", title: "When to Schedule Follow-Up Duplex Scans" },
  { id: "veins-coming-back", title: "What to Do If You Notice Veins Coming Back" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "stay-ahead", title: "Stay Ahead of Recurrence" },
];

const faqs = [
  {
    q: "How likely is it that my varicose veins will come back?",
    a: "The recurrence rate of varicose veins is about 20% to 50% within 5 to 10 years, but the recurrence mainly depends on your individual tendency, your job profile, habits and overall lifestyle. Good habits and regular follow-up may lower your risk further.",
  },
  {
    q: "Does recurrence mean my treatment failed?",
    a: "Rarely. In most cases, what you see as recurrence is actually new veins forming because the underlying causes, such as genetics, lifestyle, habits and profession, are still present and lead to their formation earlier. Sometimes you are prone to developing them. With modern techniques, the chance of your treated vein reopening is almost negligible.",
  },
  {
    q: "Which treatment lasts the longest?",
    a: "The minimally invasive thermal treatments, such as endovenous laser ablation (EVLA) and radiofrequency ablation (RFA), generally have the lowest long-term recurrence of about 5 to 10%. Sclerotherapy is considered excellent for smaller veins. Traditional methods like vein stripping have the highest recurrence rate. Only your surgeon could recommend what suits your particular veins best based on your lifestyle, habits and profession.",
  },
  {
    q: "How long do I need to wear compression stockings after treatment?",
    a: "The duration of wearing compression socks completely depends on your treatment and your surgeon's advice, and there is no single answer for everyone. Follow the specific guidance your specialist gives you, as it is tailored to your situation.",
  },
  {
    q: "Can lifestyle changes really prevent varicose veins from returning?",
    a: "Lifestyle changes will not guarantee veins never return, but they can reduce the pressure on your legs, which can meaningfully lower the risk of recurrence. Staying active, managing your weight, elevating your legs, breaking up long hours of standing or sitting, and staying hydrated all reduce the pressure on your leg veins.",
  },
  {
    q: "How often should I get a follow-up scan?",
    a: "Your surgeon will set the schedule based on your treatment and how your veins responded, often a visit in the months after your procedure and then as needed. The follow-ups are important as they detect the early venous reflux before it becomes a visible problem. The simple and low-effort way to protect your vein for a long duration.",
  },
];

const sources = [
  {
    text: "Brittenden J, et al. Five-Year Outcomes of a Randomized Trial of Treatments for Varicose Veins. New England Journal of Medicine. 2019.",
    href: "https://www.nejm.org/doi/full/10.1056/NEJMoa1805186",
  },
  {
    text: "A review of current treatment strategies for varicose veins. (PubMed).",
    href: "https://pubmed.ncbi.nlm.nih.gov/18537763/",
  },
  {
    text: "Society for Vascular Surgery. Varicose Veins and Venous Disease patient resources. vascular.org.",
    href: "https://vascular.org",
  },
  {
    text: "NHS. Varicose Veins: Treatment. nhs.uk. 2023.",
    href: "https://www.nhs.uk/conditions/varicose-veins/treatment/",
  },
  {
    text: "Cleveland Clinic. Varicose Veins: Causes & Treatment. clevelandclinic.org. 2024.",
    href: "https://my.clevelandclinic.org/health/diseases/4722-varicose-veins",
  },
  {
    text: "Vascular Society of India. Guidance on venous disease. vsi.org.in.",
    href: "https://vsi.org.in",
  },
];

export default function CanVaricoseVeinsComeBackPage() {
  const [activeSection, setActiveSection] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = tableOfContents.map((item) => item.id);
      let currentSection = sectionIds[0];

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <main className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-surface pt-8 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 text-sm transition-colors"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <h1
            className="font-heading text-4xl md:text-[56px] md:leading-[73px] mt-4"
            style={{ color: "#026460" }}
          >
            Can Varicose Veins Come Back? A Guide to Recurrence and Prevention
          </h1>
          <p
            className="text-[15px] md:text-base leading-7 mt-4 max-w-2xl"
            style={{ color: "#48546B" }}
          >
            Learn why varicose veins sometimes return after treatment, which options have
            the lowest recurrence, and simple ways to lower your risk.
          </p>

          {/* Author Info */}
          <div
            className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-sm md:text-base"
            style={{ color: "#48546B" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Written by</p>
                <p className="font-medium text-secondary">Dr. Priya Sharma</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Medically reviewed by</p>
                <p className="font-medium text-secondary">Dr. Rajesh Kumar, MD</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Last Updated</p>
                <p className="font-medium text-secondary">June 11, 2026</p>
              </div>
            </div>
          </div>
        </div>
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

      {/* Article Content with Sidebar */}
      <div className="relative bg-white pb-20">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Article */}
            <article className="lg:w-2/3">
              {/* Intro */}
              <p
                className="text-[15px] md:text-base leading-7 mb-6"
                style={{ color: "#48546B" }}
              >
                After varicose vein treatments, your legs finally started feeling better.
                Then one day, you notice a small vein again. Instantly, your mind starts
                questioning: Is varicose vein coming back again? Was the treatment worth
                it? Will the veins end up the same as before?
              </p>
              <p
                className="text-[15px] md:text-base leading-7 mb-6"
                style={{ color: "#48546B" }}
              >
                Varicose veins can come back for some people. The return of varicose veins
                is more related to the nature of the condition rather than a treatment
                failure. Sometimes, you are prone to developing them. Studies suggest that
                varicose veins have a high recurrence rate:{" "}
                <strong className="font-bold">
                  60% of people develop new varicose veins within 5 years of treatment
                </strong>
                . Recurrence does not mean your treatment has failed. People who experience
                recurrence may do so because it mainly depends on their lifestyle, genetics
                or treating only visible veins.
              </p>
              <p
                className="text-[15px] md:text-base leading-7 mb-12"
                style={{ color: "#48546B" }}
              >
                This guide will walk you through why varicose veins keep coming back, what
                treatment options have the highest recurrence, what you can do to reduce
                the risk and when to visit your vascular surgeon.
              </p>

              {/* Why Return */}
              <h2
                id="why-return"
                className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28"
              >
                Why Do Varicose Veins Return After Treatment?
              </h2>
              <p
                className="text-[15px] md:text-base leading-7 mb-8"
                style={{ color: "#48546B" }}
              >
                Most available treatment options for varicose veins have high success rates
                and are often permanent. But, in some people, varicose veins may come back
                if new veins become affected, a treated vein reopens, or smaller untreated
                veins gradually develop into varicose veins.
              </p>

              <h3 className="font-heading text-xl text-[#023936] mb-3">
                New Vein Formation — The Most Common Reason
              </h3>
              <p
                className="text-[15px] md:text-base leading-7 mb-8"
                style={{ color: "#48546B" }}
              >
                Most of the time, what looks like a return are actually new veins. New vein
                formation is generally influenced by factors such as your genes, habits,
                work, and your general lifestyle. The originally treated vein is closed,
                but new varicose veins may have formed because your body may be prone to
                developing them. So over the years, new veins can surface elsewhere. This
                is very common and does not mean the treatment has failed.
              </p>

              <h3 className="font-heading text-xl text-[#023936] mb-3">
                A Treated Vein Reopens — Uncommon Today
              </h3>
              <p
                className="text-[15px] md:text-base leading-7 mb-8"
                style={{ color: "#48546B" }}
              >
                A vein may have been treated, but sometimes it is not fully sealed, and
                blood flow slowly returns to it. It was very common earlier, but with
                recent advances and precise ultrasound guidance, this is very rare
                nowadays. Even if it happens, it is usually detected at a follow-up visit
                and treated early, before it progresses.
              </p>

              <h3 className="font-heading text-xl text-[#023936] mb-3">
                Untreated Smaller Veins or New Vessel Formation
              </h3>
              <p
                className="text-[15px] md:text-base leading-7 mb-12"
                style={{ color: "#48546B" }}
              >
                Smaller veins that were not treated earlier may become tortuous and bulge
                later. Tiny new vessels may also develop near the original site. These are
                treated with simple procedures when they appear.
              </p>

              {/* Lowest Comeback */}
              <h2
                id="lowest-comeback"
                className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28"
              >
                Which Treatments Have the Lowest Comeback Rates?
              </h2>
              <p
                className="text-[15px] md:text-base leading-7 mb-6"
                style={{ color: "#48546B" }}
              >
                The chances of recurrence may vary between treatments. Some are discussed
                below:
              </p>
              <ul
                className="text-[15px] md:text-base leading-7 mb-6 space-y-4"
                style={{ color: "#48546B" }}
              >
                <li>
                  <strong className="font-bold">
                    <Link
                      href="/treatments/evlt"
                      className="text-primary hover:underline"
                    >
                      Endovenous laser ablation (EVLT)
                    </Link>{" "}
                    and radiofrequency ablation (RFA)
                  </strong>{" "}
                  — These are minimally invasive procedures with only a 5–10% chance of
                  recurrence. They work by directly sealing the swollen and twisted vein.
                  So there is very little chance of reopening.
                </li>
                <li>
                  <strong className="font-bold">Sclerotherapy</strong> — This is an
                  injection method that works well for smaller veins, but when used for
                  larger veins, it results in a higher recurrence rate. Foam sclerotherapy
                  has shown rising recurrence rates over the years.
                </li>
                <li>
                  <strong className="font-bold">Vein Stripping</strong> — It is an old,
                  traditional method, which carries a higher recurrence rate of around
                  20–30% or more. Due to the high recurrence rate, this procedure is rarely
                  performed.
                </li>
              </ul>
              <p
                className="text-[15px] md:text-base leading-7 mb-12"
                style={{ color: "#48546B" }}
              >
                A 5 year follow up study was conducted in the UK for patients who underwent
                various treatments for varicose veins. They compared laser therapy, foam
                sclerotherapy and surgery. The treatments had similar recurrence rates and
                quality of life during the first 2–3 years. However, with a 5-year
                long-term follow-up, the differences between the treatments became more
                noticeable.
              </p>

              {/* Compression */}
              <h2
                id="compression"
                className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28"
              >
                Can Compression Stockings Help Prevent Recurrence?
              </h2>
              <p
                className="text-[15px] md:text-base leading-7 mb-6"
                style={{ color: "#48546B" }}
              >
                Compression stockings are among the simplest tools that work by gently
                squeezing the legs. This helps blood flow upward and takes some of the
                strain off your veins. They are easy to overuse once your legs feel fine.
              </p>
              <p
                className="text-[15px] md:text-base leading-7 mb-12"
                style={{ color: "#48546B" }}
              >
                After treatment, your surgeon may advise you to wear compression stockings
                to support healing by keeping the pressure down in the remaining veins.
                They are helpful, especially on days when you are on your feet a lot. They
                are not a cure on their own, and in most cases you will not need them
                forever.
              </p>

              {/* Lower Risk */}
              <h2
                id="lower-risk"
                className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28"
              >
                What Can You Do to Lower Your Risk of Recurrence?
              </h2>
              <p
                className="text-[15px] md:text-base leading-7 mb-4"
                style={{ color: "#48546B" }}
              >
                Changing your lifestyle can make a huge difference. Even if you are
                naturally prone to developing varicose veins, small lifestyle changes can
                make a big difference. By keeping the pressure in your leg veins as low as
                possible, you can reduce the chances of new veins forming.
              </p>
              <p
                className="text-[15px] md:text-base leading-7 mb-6"
                style={{ color: "#48546B" }}
              >
                Making small, steady changes to your habits will help you in the long run
                by improving your vein health. A few habits make a real difference:
              </p>

              <ul
                className="text-[15px] md:text-base leading-7 mb-8 space-y-3"
                style={{ color: "#48546B" }}
              >
                <li>
                  <strong className="font-bold">Stay Active</strong> — Regular walking is
                  best for your veins.
                </li>
                <li>
                  <strong className="font-bold">Maintain Weight</strong> — Keeping your
                  weight in the healthy range (BMI) prevents added pressure on your legs.
                </li>
                <li>
                  <strong className="font-bold">Leg Elevation</strong> — Elevating your leg
                  whenever possible, or especially at the end of the day, helps venous
                  reflux, i.e., helps blood flow back to the heart.
                </li>
                <li>
                  <strong className="font-bold">Short Breaks</strong> — Take short walk
                  breaks after every hour in between long stretches of sitting or standing.
                </li>
                <li>
                  <strong className="font-bold">Hydration</strong> — Staying hydrated,
                  especially in India&apos;s hot summers, supports overall circulation and
                  general health.
                </li>
              </ul>

              <p
                className="text-[15px] md:text-base leading-7 mb-6"
                style={{ color: "#48546B" }}
              >
                Many jobs in India require long periods of sitting or standing. If you are
                a teacher, factory worker, shopkeeper, corporate employee, or in any job
                where you need to sit or stand for a long time, it is best to take short
                walking breaks to improve blood flow in your legs.
              </p>
              <p
                className="text-[15px] md:text-base leading-7 mb-12"
                style={{ color: "#48546B" }}
              >
                These small changes in your habits and lifestyle can lower the risk of
                developing and recurring varicose veins.
              </p>

              {/* Follow Up */}
              <h2
                id="follow-up"
                className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28"
              >
                When to Schedule Follow-Up Duplex Scans?
              </h2>
              <p
                className="text-[15px] md:text-base leading-7 mb-6"
                style={{ color: "#48546B" }}
              >
                Follow-up after the treatment helps in long-term vein health. They help in
                diagnosing any returning reflux early, often before you would even notice a
                vein. This will help in early prevention and treatment while it is still
                small.
              </p>
              <p
                className="text-[15px] md:text-base leading-7 mb-12"
                style={{ color: "#48546B" }}
              >
                Usually, your vascular surgeon will suggest a follow-up based on your
                treatment and your vein health. During the check-up, they will use a duplex
                ultrasound, the same painless scan that they used when they were diagnosing
                you in the first place, with no needles and no discomfort.
              </p>

              {/* Veins Coming Back */}
              <h2
                id="veins-coming-back"
                className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28"
              >
                What to Do If You Notice Veins Coming Back?
              </h2>
              <p
                className="text-[15px] md:text-base leading-7 mb-6"
                style={{ color: "#48546B" }}
              >
                If you do notice a new vein, do not consider it a treatment failure. It is
                common in some people who are living with a venous tendency, and it is
                manageable.
              </p>
              <p
                className="text-[15px] md:text-base leading-7 mb-12"
                style={{ color: "#48546B" }}
              >
                These recurrent veins can usually be treated with modern and minimally
                invasive methods. Your doctor will recommend laser, RFA, VenaSeal, or
                sclerotherapy for smaller veins based on your health condition, rather than
                pushing one option. You must visit the doctor immediately. The earlier you
                mention it to your surgeon, the faster the recovery can happen. A quick
                check is always better than waiting and wondering.
              </p>

              {/* FAQ */}
              <h2
                id="faq"
                className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28"
              >
                Frequently Asked Questions
              </h2>
              <div className="mb-12 space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 bg-surface hover:bg-accent-lighter transition-colors"
                    >
                      <span
                        className="font-heading text-base md:text-lg text-[#023936]"
                      >
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-primary transition-transform ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openFaq === i && (
                      <div
                        className="px-5 py-4 text-[15px] leading-7 bg-white"
                        style={{ color: "#48546B" }}
                      >
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Stay Ahead */}
              <h2
                id="stay-ahead"
                className="font-heading text-2xl md:text-3xl text-[#023936] mb-6 scroll-mt-28"
              >
                Worried About Recurrence? Stay Ahead of It
              </h2>
              <p
                className="text-[15px] md:text-base leading-7 mb-6"
                style={{ color: "#48546B" }}
              >
                If the thought of veins returning has been worrying you, make it a reason
                to stay connected with your health. People who maintain a healthy lifestyle
                and visit their doctor regularly can almost prevent recurrence. Recurrence
                is very common, but it&apos;s manageable.
              </p>
              <p
                className="text-[15px] md:text-base leading-7 mb-12"
                style={{ color: "#48546B" }}
              >
                When you are due for a follow-up, or if you have noticed something new,
                schedule an appointment with a vascular specialist and stay ahead of it.
              </p>

              {/* Sources */}
              <div className="bg-surface rounded-xl p-6 md:p-8 mb-8">
                <h3 className="font-heading text-2xl md:text-3xl text-[#023936] mb-6">
                  Sources and References
                </h3>
                <ol
                  className="list-decimal list-outside ml-5 text-[15px] md:text-base leading-7 space-y-4"
                  style={{ color: "#48546B" }}
                >
                  {sources.map((s, i) => (
                    <li key={i} className="pl-2">
                      {s.text}{" "}
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline break-all"
                      >
                        {s.href}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Disclaimer */}
              <div className="border-l-4 border-primary/30 pl-5 py-3 mb-8">
                <h4 className="font-heading text-xl md:text-2xl text-[#023936] mb-3">
                  Medical Disclaimer
                </h4>
                <p
                  className="text-[15px] md:text-base leading-7"
                  style={{ color: "#48546B" }}
                >
                  This content has been written for informational purposes only and is not
                  a substitute for professional medical advice, diagnosis, or treatment.
                  Always consult a qualified vascular specialist or healthcare provider if
                  you have questions about a medical condition or treatment plan.
                </p>
              </div>
            </article>

            {/* Table of Contents Sidebar */}
            <aside className="hidden lg:block lg:w-1/3">
              <div className="sticky top-28 bg-surface rounded-2xl p-6">
                <h3 className="font-heading text-xl text-secondary mb-6">
                  Table of Contents
                </h3>
                <nav>
                  {tableOfContents.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left transition-all cursor-pointer py-3 border-b-2 font-heading ${
                        activeSection === item.id
                          ? "text-primary text-base font-medium border-primary"
                          : "text-gray-600 hover:text-primary text-sm border-gray-200"
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>
          </div>
        </div>
        <svg
          className="absolute -bottom-px left-0 w-full block"
          style={{ height: "60px" }}
          preserveAspectRatio="none"
          viewBox="0 0 1440 60"
          fill="none"
        >
          <path
            d="M0 60H1440V30C1200 -2 960 -2 720 30C480 62 240 62 0 30V60Z"
            fill="#2C847F"
          />
        </svg>
      </div>

      {/* CTA Section */}
      <section className="relative pt-32 md:pt-40 pb-36 bg-primary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
            Stay Ahead of Recurrence
          </h2>
          <p className="text-lg md:text-xl leading-8 mb-10 text-white/90 max-w-2xl mx-auto">
            Notice a new vein or due for a follow-up? Schedule a quick check with a
            vascular specialist — early action keeps recurrence simple and manageable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-appointment"
              className="bg-white text-primary text-base md:text-lg font-semibold py-4 px-10 rounded-full transition-colors hover:opacity-90"
            >
              Book a Consultation
            </Link>
            <Link
              href="/clinics"
              className="bg-transparent text-white text-base md:text-lg font-semibold py-4 px-10 rounded-full transition-colors hover:bg-white/10 border-2 border-white"
            >
              Find a Specialist Near You
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
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
            <label htmlFor="vein-newsletter-email" className="sr-only">
              Email Address
            </label>
            <input
              id="vein-newsletter-email"
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
