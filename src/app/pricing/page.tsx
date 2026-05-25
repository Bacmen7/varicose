import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheckBig,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Treatments & Pricing | Sira Vascular",
  description: "Transparent vein treatment pricing and specialist consultation options.",
};

type Procedure = {
  name: string;
  description: string;
  firstPrice: string;
  firstLabel: string;
  secondPrice: string;
  secondLabel: string;
  badge?: string;
};

const surgicalProcedures: Procedure[] = [
  {
    name: "EVLT - Endovenous Laser Treatment",
    description: "Laser energy seals the affected vein from inside",
    firstPrice: "₹60k - ₹1.15L",
    firstLabel: "per leg",
    secondPrice: "₹1.10L - ₹2.20L",
    secondLabel: "both legs",
    badge: "Most Popular",
  },
  {
    name: "RFA - Radiofrequency Ablation",
    description: "Radiofrequency heat collapses and closes the vein wall",
    firstPrice: "₹65k - ₹1.20L",
    firstLabel: "per leg",
    secondPrice: "₹1.20L - ₹2.20L",
    secondLabel: "both legs",
  },
  {
    name: "VenaSeal - Medical Glue Closure",
    description: "Medical adhesive seals the vein instantly - no heat involved",
    firstPrice: "₹1.50L - ₹2.50L",
    firstLabel: "per leg",
    secondPrice: "₹2.80L - ₹4.50L",
    secondLabel: "both legs",
    badge: "Advanced",
  },
  {
    name: "Foam Sclerotherapy",
    description: "Foamed solution injected under ultrasound to close medium veins",
    firstPrice: "₹15k - ₹40k",
    firstLabel: "per session",
    secondPrice: "₹25k - ₹70k",
    secondLabel: "2 to 3 sessions",
  },
];

const otherProcedures: Procedure[] = [
  {
    name: "Sclerotherapy - Liquid Injection",
    description: "Chemical solution injected to shrink and fade small or spider veins",
    firstPrice: "₹10k - ₹30k",
    firstLabel: "per session",
    secondPrice: "₹20k - ₹50k",
    secondLabel: "2 to 4 sessions",
  },
  {
    name: "Compression Therapy - Medical Stockings",
    description: "Prescribed stockings to manage symptoms and support recovery",
    firstPrice: "₹800 - ₹3,500",
    firstLabel: "per pair",
    secondPrice: "₹1,500 - ₹6,000",
    secondLabel: "both legs",
  },
];

const consultationIncludes = [
  "Duplex ultrasound scan",
  "Personalised treatment plan",
  "Fixed, transparent price offer",
  "1-on-1 with your vascular specialist",
  "EMI options available on request",
];

const insuranceItems = [
  {
    title: "PM-JAY / Ayushman Bharat",
    body: "EVLT and RFA may be covered for eligible beneficiaries at empanelled hospitals when medically necessary.",
  },
  {
    title: "Private Health Insurance",
    body: "Most Indian health policies cover varicose vein treatment when medically necessary.",
  },
  {
    title: "CGHS / ESI Schemes",
    body: "Government employees can access treatment at approved rates. Pre-authorisation may be required.",
  },
  {
    title: "Corporate Group Insurance",
    body: "Coverage depends on your policy and employer benefits.",
  },
];

function PriceBox({ amount, label }: { amount: string; label: string }) {
  return (
    <div className="rounded-lg border border-[#cde7e6] bg-[#e3f2f2] px-3 py-3 text-center">
      <p className="text-sm font-semibold text-[#116965] sm:text-base">{amount}</p>
      <p className="mt-1 text-xs text-[#607578]">{label}</p>
    </div>
  );
}

function ProcedureTable({
  title,
  pill,
  icon: Icon,
  columnOne,
  columnTwo,
  procedures,
}: {
  title: string;
  pill: string;
  icon: typeof CircleCheckBig;
  columnOne: string;
  columnTwo: string;
  procedures: Procedure[];
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-[#d6e8e8] bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 bg-[#e6f4f3] px-5 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
            <Icon size={18} />
          </span>
          <h2 className="font-heading text-xl font-normal text-secondary sm:text-2xl">{title}</h2>
        </div>
        <span className="rounded-full bg-[#08736d] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
          {pill}
        </span>
      </div>

      <div className="hidden grid-cols-[minmax(250px,1fr)_155px_155px_28px] border-b border-[#dce9e8] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#637578] md:grid">
        <p>Procedure</p>
        <p className="text-center">{columnOne}</p>
        <p className="text-center">{columnTwo}</p>
        <span />
      </div>

      {procedures.map((procedure) => (
        <div
          key={procedure.name}
          className="grid gap-4 border-b border-[#e0ebeb] px-5 py-4 last:border-b-0 md:grid-cols-[minmax(250px,1fr)_155px_155px_28px] md:items-center md:px-6"
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-heading text-lg font-normal text-secondary sm:text-xl">
                {procedure.name}
              </h3>
              {procedure.badge ? (
                <span className="rounded-full bg-[#d8efec] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-dark">
                  {procedure.badge}
                </span>
              ) : null}
            </div>
            <p className="mt-1 text-sm leading-relaxed text-[#607578]">{procedure.description}</p>
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#66797b] md:hidden">
              {columnOne}
            </p>
            <PriceBox amount={procedure.firstPrice} label={procedure.firstLabel} />
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#66797b] md:hidden">
              {columnTwo}
            </p>
            <PriceBox amount={procedure.secondPrice} label={procedure.secondLabel} />
          </div>
          <ChevronDown className="hidden text-[#7f9597] md:block" size={18} />
        </div>
      ))}
    </article>
  );
}

export default function PricingPage() {
  return (
    <main className="bg-[#f1fafa] font-body">
      <section className="relative overflow-hidden bg-gradient-to-br from-[#054f4d] to-[#087b78] px-5 py-14 text-white sm:px-10 lg:px-[5.5rem] lg:pb-14 lg:pt-16">
        <div className="absolute -right-24 -top-36 h-[360px] w-[360px] rounded-full bg-white/[0.055]" />
        <div className="absolute bottom-[-80px] left-[43%] h-[170px] w-[170px] rounded-full bg-white/[0.055]" />
        <div className="relative max-w-2xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
            Sira Vascular - Treatments &amp; Pricing
          </p>
          <h1 className="font-heading text-4xl font-normal leading-[1.18] text-white sm:text-5xl">
            Clear Pricing.
            <br />
            Expert Vein Care.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/82">
            Every patient receives a personalised treatment plan after a detailed consultation
            and duplex ultrasound scan. All procedures are performed by experienced vascular
            specialists with no hidden fees.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-10 lg:py-14">
        <div className="mx-auto grid max-w-[1200px] items-start gap-6 lg:grid-cols-[1fr_310px]">
          <div className="space-y-7">
            <ProcedureTable
              title="Surgical Procedure Options"
              pill="Minimally Invasive"
              icon={CircleCheckBig}
              columnOne="One Leg"
              columnTwo="Both Legs"
              procedures={surgicalProcedures}
            />
            <ProcedureTable
              title="Other Procedures"
              pill="Non-Surgical"
              icon={Stethoscope}
              columnOne="Per Session"
              columnTwo="Multiple Sessions"
              procedures={otherProcedures}
            />

            <section className="flex flex-col justify-between gap-6 rounded-2xl bg-[#075d59] px-6 py-6 text-white sm:flex-row sm:items-center">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
                  Sira Vascular
                </p>
                <h2 className="font-heading text-2xl font-normal">Doctor&apos;s Consultation</h2>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/75">
                  Includes clinical assessment and symptom review with your vascular specialist.
                  A duplex ultrasound scan is typically recommended before finalising any treatment plan.
                </p>
              </div>
              <p className="shrink-0 font-heading text-4xl font-normal">
                ₹500
                <span className="block text-right font-body text-sm font-normal text-white/70">per visit</span>
              </p>
            </section>
          </div>

          <div className="space-y-5 lg:sticky lg:top-5">
            <aside className="overflow-hidden rounded-2xl border border-[#d6e8e8] bg-white shadow-sm">
              <div className="bg-[#d9efee] px-5 py-4">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-primary">
                  Specialist Consultation
                </p>
              </div>
              <div className="border-b border-[#dce9e8] px-5 py-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#526e70]">
                  Consultation Fee
                </p>
                <p className="font-heading mt-3 text-4xl font-normal text-[#094f4c]">₹500</p>
                <p className="mt-1 text-sm leading-relaxed text-[#677b7e]">
                  No hidden fees. Transparent pricing always.
                </p>
              </div>
              <div className="px-5 py-5">
                <Link
                  href="/book-appointment"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#f26932] px-4 py-4 text-base font-semibold text-white transition-colors hover:bg-[#df5924]"
                >
                  Schedule Appointment
                  <ArrowRight size={18} />
                </Link>
                <p className="mt-4 text-center text-sm leading-relaxed text-[#677b7e]">
                  We use duplex ultrasound to accurately assess the severity of your varicose
                  veins before recommending any treatment.
                </p>
                <ul className="mt-5 space-y-3 border-t border-[#e2eeee] pt-5">
                  {consultationIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[#557174]">
                      <Check className="mt-0.5 shrink-0 text-[#26a481]" size={16} strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center gap-2 text-sm text-[#557174]">
                  <span className="flex -space-x-2">
                    {["RS", "PM", "AK"].map((initials) => (
                      <span
                        key={initials}
                        className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#d3e9e7] text-[10px] font-semibold text-primary-dark"
                      >
                        {initials}
                      </span>
                    ))}
                  </span>
                  <span>4.9 overall patient rating</span>
                </div>
              </div>
            </aside>

            <aside className="overflow-hidden rounded-2xl border border-[#d6e8e8] bg-white shadow-sm">
              <div className="flex items-center gap-3 bg-[#08736d] px-5 py-4 text-white">
                <ShieldCheck size={20} />
                <div>
                  <h2 className="font-heading text-xl font-normal">Insurance Coverage</h2>
                  <p className="text-xs text-white/78">Check your eligibility before booking</p>
                </div>
              </div>
              <div className="space-y-4 px-5 py-5">
                {insuranceItems.map((item) => (
                  <div key={item.title}>
                    <h3 className="flex items-start gap-2 text-sm font-semibold text-primary-dark">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#25a382]" />
                      {item.title}
                    </h3>
                    <p className="ml-3.5 mt-1 text-sm leading-relaxed text-[#63777a]">{item.body}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
