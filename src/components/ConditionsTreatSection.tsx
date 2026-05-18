"use client";

import { useState } from "react";

const conditions = [
  {
    title: "Varicose Veins",
    badge: "Primary focus",
    prompt: "Bulging, twisted veins with heaviness, aching, or swelling.",
    description:
      "Varicose veins are swollen, twisted veins that usually appear on the legs when valves inside the veins stop working properly. Blood can pool in the vein, causing visible bulging, heaviness, aching, swelling, cramps, itching, and skin changes.",
    note:
      "Many people ignore varicose veins for years, but untreated venous disease can affect comfort, mobility, skin health, and wound healing.",
    symptoms: ["Leg heaviness", "Visible bulging veins", "Aching after standing", "Ankle swelling", "Night cramps", "Itching around veins"],
  },
  {
    title: "Spider Veins",
    prompt: "Small red or purple veins visible near the skin surface.",
    description:
      "Spider veins are fine, web-like visible veins that often appear on the legs or face. They are usually smaller than varicose veins, but they may still point to underlying venous pressure in some patients.",
    note:
      "They can be cosmetic, symptomatic, or linked with other vein issues, so assessment helps decide the right next step.",
    symptoms: ["Red or purple lines", "Mild burning", "Cosmetic concern", "Leg tiredness"],
  },
  {
    title: "Chronic Venous Insufficiency (CVI)",
    prompt: "Heavy, tired legs almost every day, especially after standing.",
    description:
      "Chronic venous insufficiency happens when leg veins struggle to return blood efficiently toward the heart. It can cause long-term swelling, heaviness, skin darkening, itching, and discomfort.",
    note:
      "Early diagnosis can reduce the chance of worsening skin changes and ulcers.",
    symptoms: ["Daily heaviness", "Persistent swelling", "Skin darkening", "Itching", "Leg fatigue"],
  },
  {
    title: "Leg Swelling and Venous Oedema",
    prompt: "Ankles or calves feel swollen by the end of the day.",
    description:
      "Venous oedema is swelling caused by poor blood return from the legs. It often worsens after long standing, sitting, travel, or warm weather.",
    note:
      "Swelling should be assessed carefully because it may come from venous reflux, medication, heart, kidney, or lymphatic causes.",
    symptoms: ["Ankle swelling", "Tight socks marks", "End-of-day heaviness", "Calf fullness"],
  },
  {
    title: "Venous Leg Ulcers",
    prompt: "A wound near the ankle that does not heal easily.",
    description:
      "Venous leg ulcers are slow-healing wounds that usually develop around the ankle when long-standing venous pressure damages the skin.",
    note:
      "Treating the underlying vein problem is important along with wound care and compression guidance.",
    symptoms: ["Non-healing wound", "Skin staining", "Fluid discharge", "Pain or irritation"],
  },
  {
    title: "DVT Awareness and Prevention",
    prompt: "Painful swelling or sudden calf pain needs timely attention.",
    description:
      "Deep vein thrombosis awareness is important because a clot in a deep leg vein can be serious. Sudden one-sided swelling, calf pain, warmth, or tenderness should not be ignored.",
    note:
      "We help patients understand warning signs, risk factors, prevention steps, and when urgent evaluation is needed.",
    symptoms: ["Sudden swelling", "Calf pain", "Warmth", "Tenderness", "Travel-related risk"],
  },
];

export default function ConditionsTreatSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = conditions[selectedIndex];

  return (
    <section className="py-12 lg:py-16 w-full bg-background relative pb-20">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <p className="text-primary font-semibold mb-3 text-sm tracking-wider uppercase">What We Treat</p>
        <h2 className="font-heading text-secondary text-3xl lg:text-4xl font-normal mb-4">
          Vascular conditions we specialise in
        </h2>
        <p className="text-gray-600 text-base lg:text-lg leading-relaxed max-w-4xl mb-10">
          Our focus is on venous conditions that affect your legs and quality of life. Varicose veins are our core
          expertise, and we also treat a range of related conditions.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.95fr] gap-5">
          <article className="bg-white rounded-2xl border-2 border-primary px-6 py-6 md:px-8 md:py-8">
            <div className="flex items-start gap-3 mb-5">
              <span className="mt-2 h-2.5 w-2.5 rounded-full bg-primary shrink-0" />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-heading text-secondary text-2xl font-normal">{selected.title}</h3>
                  {selected.badge && (
                    <span className="rounded-full bg-cta px-3 py-1 text-xs font-semibold text-white">
                      {selected.badge}
                    </span>
                  )}
                </div>
                <p className="mt-4 text-gray-600 text-base leading-relaxed">{selected.description}</p>
                <p className="mt-4 text-gray-600 text-base leading-relaxed">{selected.note}</p>
              </div>
            </div>

            <div className="mt-7">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                Symptoms patients commonly report
              </p>
              <div className="flex flex-wrap gap-2">
                {selected.symptoms.map((symptom) => (
                  <span
                    key={symptom}
                    className="rounded-full bg-accent-light px-3 py-1.5 text-sm font-semibold text-primary"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <aside className="bg-white rounded-2xl border border-gray-200 px-6 py-6 md:px-8 md:py-8">
            <h3 className="font-heading text-secondary text-2xl font-normal mb-5">We also specialise in...</h3>
            <div className="divide-y divide-gray-100">
              {conditions.slice(1).map((condition, i) => {
                const actualIndex = i + 1;
                const isActive = selectedIndex === actualIndex;

                return (
                  <button
                    key={condition.title}
                    type="button"
                    onClick={() => setSelectedIndex(actualIndex)}
                    className="w-full py-4 text-left transition-colors hover:bg-accent-lighter/70"
                  >
                    <div className="flex gap-4">
                      <span className={`pt-1 text-sm font-semibold ${isActive ? "text-primary" : "text-primary/50"}`}>
                        {String(actualIndex).padStart(2, "0")}
                      </span>
                      <span>
                        <span className={`block text-base font-semibold ${isActive ? "text-primary" : "text-secondary"}`}>
                          {condition.title}
                        </span>
                        <span className="mt-1 block text-sm italic leading-snug text-gray-500">
                          &quot;{condition.prompt}&quot;
                        </span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
