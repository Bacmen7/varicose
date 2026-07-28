"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  CircleUserRound,
  MapPin,
  MessageCircle,
  Network,
  Smartphone,
  Stethoscope,
} from "lucide-react";
import Footer from "@/components/Footer";

const stepLabels = [
  "Which veins concern you most?",
  "How do your veins look?",
  "How long have you had this?",
  "Specialist Consultation",
];

const concernOptions = [
  { label: "My leg veins", icon: Stethoscope },
  { label: "My facial veins", icon: CircleUserRound },
  { label: "I have a venous ulcer", icon: MapPin },
  { label: "Multiple areas", icon: Network },
];

const appearanceOptions = [
  "Small, red or purple and spider-like",
  "Lumpy, bumpy and bulging (legs only)",
  "Swollen, heavy and causing leg pain or aching",
  "The veins on my leg have progressed to a sore or ulcer",
];

const durationOptions = [
  "Less than 1 year",
  "Less than 3 years",
  "More than 3 years",
  "I am not sure",
];

const consultationOptions = [
  {
    label: "Yes, as soon as possible",
    help: "I need urgent advice from a specialist",
    icon: Stethoscope,
  },
  {
    label: "Yes, within the next few weeks",
    help: "I'd like to book a planned consultation",
    icon: CalendarDays,
  },
  {
    label: "Not yet - just want information",
    help: "I'm exploring my options at the moment",
    icon: MessageCircle,
  },
  {
    label: "Yes, via online / teleconsultation",
    help: "I prefer a remote consultation from home",
    icon: Smartphone,
  },
];

type FormData = {
  concern: string;
  appearance: string;
  duration: string;
  consultation: string;
};

const initialData: FormData = {
  concern: "Multiple areas",
  appearance: "The veins on my leg have progressed to a sore or ulcer",
  duration: "I am not sure",
  consultation: "",
};

function Sidebar({ step }: { step: number }) {
  return (
    <aside className="bg-[#026460] px-7 pb-9 pt-[72px] text-white sm:px-10 lg:w-[46.6%] lg:px-12 lg:pt-[89px]">
      <div className="max-w-[380px]">
        <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-white/75">
          SIRA VASCULAR - INDIA
        </p>
        <h1 className="font-heading text-4xl font-normal leading-[1.15] lg:text-[2.5rem]">
          Complete Quick
          <br />
          Online <span className="text-white/65">Assessment</span>
        </h1>
        <p className="mb-[30px] mt-6 max-w-[330px] text-base leading-relaxed text-white/85">
          Answer a few simple questions so our vascular specialists can understand your condition
          and recommend the right care for you.
        </p>
        <ol className="space-y-[10px]">
          {stepLabels.map((label, index) => {
            const number = index + 1;
            const active = number === step;

            return (
              <li key={label} className="flex items-center gap-[10px] text-sm">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm ${
                    active ? "bg-cta text-white" : "bg-white/20 text-white/80"
                  }`}
                >
                  {number}
                </span>
                <span className={active ? "font-semibold text-white" : "text-white/78"}>{label}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </aside>
  );
}

function SelectOption({
  selected,
  onClick,
  children,
  icon: Icon,
  compact = false,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
  icon?: typeof Stethoscope;
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-4 rounded-lg border px-[17px] text-left text-base font-semibold transition ${
        compact ? "min-h-[54px]" : "min-h-[68px]"
      } ${
        selected
          ? "border-[#026460] bg-[#026460] text-white"
          : "border-[#d9e4e5] bg-white text-[#354850] hover:border-[#90b9b8]"
      }`}
    >
      {Icon ? (
        <span
          className={`flex h-[39px] w-[39px] items-center justify-center rounded-lg ${
            selected ? "bg-white/15" : "bg-[#e7f4f4] text-[#18827d]"
          }`}
        >
          <Icon size={20} strokeWidth={1.7} />
        </span>
      ) : null}
      {children}
    </button>
  );
}

export default function BookAppointmentPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(initialData);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormData, value: string) => {
    setData((current) => ({ ...current, [field]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (step < 4) {
      setStep((current) => current + 1);
      return;
    }
    // Assessment complete - hand the patient over to the consultation form
    setSubmitted(true);
    router.push("/book-consultation");
  };

  return (
    <main className="bg-white font-body">
      <div className="mx-auto overflow-hidden border-b border-[#d9e6e5]">
        <div className="flex min-h-[calc(100vh-82px)] flex-col lg:flex-row">
          <Sidebar step={step} />

          <section className="flex-1 bg-[#f7fbfa] px-5 py-8 sm:px-10 lg:px-[54px] lg:pb-10 lg:pt-[52px]">
            <form onSubmit={onSubmit} className="flex min-h-[calc(100vh-230px)] w-full flex-col">
              <div className="mb-[32px]">
                <div className="h-[3px] bg-[#d8e7e6]">
                  <div
                    className="h-[3px] bg-primary transition-all"
                    style={{ width: `${step * 25}%` }}
                  />
                </div>
                <p className="mt-[7px] text-xs text-[#66777b]">Step {step} of 4</p>
              </div>

              {submitted ? (
                <div className="rounded-xl bg-white p-10 text-center shadow-sm">
                  <h2 className="font-heading text-3xl text-[#104d4a]">Thank you</h2>
                  <p className="mt-3 text-base text-[#68787c]">
                    Our vascular specialist will contact you shortly.
                  </p>
                </div>
              ) : (
                <>
                  {step === 1 && (
                    <div>
                      <h2 className="font-heading text-3xl text-[#104d4a]">
                        Which veins are causing you the most concern?
                      </h2>
                      <p className="mb-[21px] mt-2 text-base leading-relaxed text-[#718287]">
                        Select the option that best describes your situation
                      </p>
                      <div className="space-y-[10px]">
                        {concernOptions.map(({ label, icon }) => (
                          <SelectOption
                            key={label}
                            icon={icon}
                            selected={data.concern === label}
                            onClick={() => update("concern", label)}
                          >
                            {label}
                          </SelectOption>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <h2 className="font-heading text-3xl text-[#104d4a]">My veins are...</h2>
                      <p className="mb-[21px] mt-2 text-base leading-relaxed text-[#718287]">
                        How would you describe the appearance of your veins?
                      </p>
                      <div className="space-y-[9px]">
                        {appearanceOptions.map((label) => (
                          <SelectOption
                            key={label}
                            compact
                            selected={data.appearance === label}
                            onClick={() => update("appearance", label)}
                          >
                            {label}
                          </SelectOption>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h2 className="font-heading text-3xl text-[#104d4a]">
                        I have had this problem for...
                      </h2>
                      <p className="mb-[21px] mt-2 text-base leading-relaxed text-[#718287]">
                        This helps us understand the severity of your condition
                      </p>
                      <div className="space-y-[9px]">
                        {durationOptions.map((label) => (
                          <SelectOption
                            key={label}
                            compact
                            selected={data.duration === label}
                            onClick={() => update("duration", label)}
                          >
                            {label}
                          </SelectOption>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div>
                      <h2 className="font-heading text-3xl text-[#104d4a]">
                        Do you require a specialist consultation right now?
                      </h2>
                      <p className="mb-[21px] mt-2 text-base leading-relaxed text-[#718287]">
                        Our vascular specialists are available across 10 cities in India
                      </p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {consultationOptions.map(({ label, help, icon: Icon }) => (
                          <button
                            type="button"
                            key={label}
                            onClick={() => update("consultation", label)}
                            className={`min-h-[136px] rounded-[11px] border bg-white p-4 text-center transition ${
                              data.consultation === label
                                ? "border-[#096965] ring-1 ring-[#096965]"
                                : "border-[#d9e4e5]"
                            }`}
                          >
                            <Icon className="mx-auto mb-3 text-[#9274e5]" size={28} />
                            <span className="block text-base font-semibold text-[#155b59]">{label}</span>
                            <span className="mt-1 block text-sm text-[#738287]">{help}</span>
                          </button>
                        ))}
                      </div>
                      <p className="mt-5 text-sm text-[#f26932]">
                        Please select an option to continue.
                      </p>
                    </div>
                  )}

                  <div className="mt-auto flex justify-start gap-3 pt-10">
                    <button
                      type="button"
                      onClick={() => setStep((current) => Math.max(1, current - 1))}
                      className={`h-11 min-w-[112px] rounded-full px-6 text-sm font-semibold text-white ${
                        step === 1 ? "bg-[#92aaaa]" : "bg-primary"
                      }`}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="h-11 min-w-[148px] rounded-full bg-cta px-8 text-sm font-semibold text-white transition hover:brightness-105"
                    >
                      {step === 4 ? "Submit" : "Next"}
                    </button>
                  </div>
                </>
              )}
            </form>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}

