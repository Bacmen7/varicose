"use client";

import { useState } from "react";
import Link from "@/compat/Link";
import { ArrowRight, RotateCcw } from "lucide-react";

const questions = [
  {
    title: "Do your legs feel heavy or achy?",
    subtitle: "Aching, heaviness, or tiredness in your legs after standing",
  },
  {
    title: "Do you see visible twisted or bulging veins?",
    subtitle: "Blue or purple veins that stand out on your legs",
  },
  {
    title: "Do you have swelling in your ankles or feet?",
    subtitle: "Swelling that gets worse by the end of the day",
  },
  {
    title: "Do you get night cramps or restless legs?",
    subtitle: "Leg cramps or an urge to move your legs that disturbs sleep",
  },
  {
    title: "Do you notice skin changes near your ankles?",
    subtitle: "Itching, dryness, or darkening of the skin around the ankles",
  },
  {
    title: "Does the pain worsen after standing or sitting long?",
    subtitle: "Symptoms that flare up after long hours on your feet or at a desk",
  },
];

export default function VeinQuizSection() {
  const [current, setCurrent] = useState(0);
  const [yesCount, setYesCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const answer = (isYes: boolean) => {
    const nextYes = isYes ? yesCount + 1 : yesCount;
    setYesCount(nextYes);
    if (current + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
    }
  };

  const restart = () => {
    setCurrent(0);
    setYesCount(0);
    setFinished(false);
  };

  return (
    <section className="w-full bg-primary-dark py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        {/* Left: heading + description */}
        <div className="text-center lg:text-left">
          <h2 className="font-heading text-[2rem] font-normal leading-[1.15] tracking-tight text-white sm:text-[2.5rem] lg:text-[2.8rem]">
            When should you see a vein specialist?
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/85 mx-auto lg:mx-0">
            Answer a few short questions - we&apos;ll help you understand
            whether a specialist consultation would be beneficial.
          </p>
        </div>

        {/* Right: quiz card */}
        <div className="min-h-[260px]">
          {!finished ? (
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/60">
                Question {current + 1} of {questions.length}
              </p>
              <h3 className="mt-4 font-heading text-[1.35rem] font-semibold leading-snug text-white md:text-[1.5rem]">
                {questions[current].title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {questions[current].subtitle}
              </p>

              <div className="mt-7 flex items-center gap-3">
                <button
                  onClick={() => answer(true)}
                  className="rounded-full bg-cta px-6 py-2 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:brightness-105 cursor-pointer"
                >
                  Yes
                </button>
                <button
                  onClick={() => answer(false)}
                  className="rounded-full border border-white/40 px-6 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 cursor-pointer"
                >
                  No
                </button>
              </div>

              {/* Progress */}
              <div className="mt-9">
                <div className="flex items-center justify-between text-sm text-white/60">
                  <span>Progress</span>
                  <span>
                    {current}/{questions.length}
                  </span>
                </div>
                <div className="mt-2 h-[5px] w-full overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full rounded-full bg-white/80 transition-all duration-300"
                    style={{ width: `${(current / questions.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-white/60">
                Your Result
              </p>
              <h3 className="mt-4 font-heading text-[1.35rem] font-semibold leading-snug text-white md:text-[1.5rem]">
                {yesCount >= 2
                  ? "A consultation is recommended"
                  : "Your symptoms seem mild for now"}
              </h3>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/80">
                {yesCount >= 2
                  ? `You answered yes to ${yesCount} of ${questions.length} questions. These signs are often linked to varicose veins - an early consultation can help you avoid complications.`
                  : "Keep an eye on your legs. If symptoms appear or get worse, a quick check-up with a vein specialist is the safest next step."}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/book-consultation"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-cta py-2 pl-6 pr-3 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:brightness-105"
                >
                  Book a Consultation
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Link>
                <button
                  onClick={restart}
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 cursor-pointer"
                >
                  <RotateCcw size={16} />
                  Retake Quiz
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
