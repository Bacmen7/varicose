"use client";

import { useState } from "react";
import Footer from "@/components/Footer";

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
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const update = (key: keyof typeof form, val: string) =>
    setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      setError("Please fill in your name and phone number.");
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
      <div className="mx-auto max-w-[720px] px-5 pb-16 md:px-8">
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

              <Field label="Full Name" required>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={fieldClasses}
                />
              </Field>

              <Field label="Phone Number" required>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={fieldClasses}
                />
              </Field>

              <Field label="Message (optional)">
                <textarea
                  placeholder="Briefly describe your symptoms or any questions for the doctor."
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={`${fieldClasses} min-h-[130px] resize-y`}
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
                className="w-full rounded-full bg-cta py-3.5 text-base font-bold text-white shadow-md transition-all duration-200 hover:brightness-105 cursor-pointer"
              >
                Request My Consultation
              </button>
              <p className="mt-4 text-center text-sm text-gray-500">
                We call back within 1 hour &middot; No spam
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
