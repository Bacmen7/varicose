"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Footer from "@/components/Footer";

const concerns = [
  "Varicose Veins",
  "Spider Veins",
  "Leg Swelling / Heaviness",
  "Night Cramps / Restless Legs",
  "Skin Discoloration near Ankles",
  "Venous Ulcer",
  "Not sure / Need a diagnosis",
  "Other",
];

const fieldClasses =
  "w-full rounded-lg border border-[#d9e4e4] bg-white px-3.5 py-3 text-sm text-[#2b3a3a] outline-none transition-all focus:border-primary focus:ring-[3px] focus:ring-accent-lighter";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <label className="mb-1.5 block text-[15px] font-semibold text-[#2b3a3a]">
        {label} {required && <span className="text-cta">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function BookConsultation() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    phone: "",
    concern: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (key: keyof typeof form, val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = () => {
    if (!form.name || !form.age || !form.phone || !form.concern) {
      setError("Please fill in your name, age, phone number and concern.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-background font-body">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark px-5 pb-24 pt-14 text-center md:pt-16">
        <div className="mx-auto max-w-[720px]">
          <h1 className="font-heading text-[2.1rem] font-normal leading-[1.2] text-white sm:text-[2.7rem]">
            Book a Consultation
          </h1>
          <p className="mx-auto mt-3 max-w-[520px] text-sm leading-relaxed text-white/85">
            Share your details and we will get in touch to confirm your visit.
          </p>
        </div>
      </section>

      {/* Card */}
      <div className="mx-auto max-w-[960px] px-5 pb-16 md:px-8">
        <div className="-mt-16 rounded-2xl border border-black/5 bg-white p-8 shadow-[0_10px_30px_rgba(13,115,119,0.08)] sm:p-12 md:p-16">
          {!submitted ? (
            <>
              <h2 className="text-center font-heading text-[1.6rem] font-normal text-primary-dark md:text-[2rem]">
                Tell Us About You
              </h2>
              <p className="mx-auto mb-9 mt-2 max-w-lg text-center text-sm leading-relaxed text-gray-600">
                Fill in a few details below and our team will reach out shortly
                to arrange a time that works for you.
              </p>

              <div className="grid gap-x-5 sm:grid-cols-[2fr_1fr]">
                <Field label="Full Name" required>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className={fieldClasses}
                  />
                </Field>
                <Field label="Age" required>
                  <input
                    type="number"
                    min={1}
                    max={120}
                    placeholder="e.g. 42"
                    value={form.age}
                    onChange={(e) => update("age", e.target.value)}
                    className={fieldClasses}
                  />
                </Field>
              </div>

              <div className="grid gap-x-5 sm:grid-cols-2">
                <Field label="Phone Number" required>
                  <input
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className={fieldClasses}
                  />
                </Field>
                <Field label="Concern" required>
                  <div className="relative">
                    <select
                      value={form.concern}
                      onChange={(e) => update("concern", e.target.value)}
                      className={`${fieldClasses} appearance-none pr-11`}
                    >
                      <option value="">Select your concern</option>
                      {concerns.map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-primary"
                    />
                  </div>
                </Field>
              </div>

              <Field label="Message (optional)">
                <textarea
                  placeholder="Briefly describe your symptoms or any questions for the doctor."
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={`${fieldClasses} min-h-[120px] resize-y`}
                />
              </Field>

              {error && (
                <p className="mb-4 text-center text-[15px] font-medium text-cta">
                  {error}
                </p>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                className="mx-auto block rounded-full px-6 py-2 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:brightness-105 cursor-pointer"
                style={{ backgroundColor: "#FF7A4D" }}
              >
                Request My Consultation
              </button>
              <p className="mt-4 text-center text-sm text-gray-500">
                Your details are kept private and used only to arrange your
                appointment.
              </p>
            </>
          ) : (
            <div className="px-5 py-8 text-center">
              <div className="mx-auto mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-accent-lighter">
                <svg
                  width="28"
                  height="28"
                  fill="none"
                  stroke="#2C847F"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="font-heading text-[1.6rem] font-normal text-primary-dark md:text-[1.9rem]">
                Request Received
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Thank you. Our team will contact you shortly to confirm your
                consultation time.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
