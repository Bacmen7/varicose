
import { ArrowRight, Phone } from "lucide-react";
import Image from "@/compat/Image";
import { useState } from "react";

export default function ContactFormSection() {
  const [form, setForm] = useState({ name: "", mobile: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="py-14 md:py-20 w-full bg-white relative">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:gap-12">

          {/* Left: heading + form */}
          <div className="flex flex-col justify-center">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-primary md:text-[13px]">
              BOOK A CONSULTATION
            </p>
            <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-secondary mb-3">
              Get Expert Consultation
            </h2>
            <p className="mb-8 text-[15px] leading-relaxed text-gray-600 md:text-base">
              Fill in your details and our patient counsellor will call you back.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="mb-1.5 block text-sm font-semibold text-gray-700">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your mobile number"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Describe your symptoms or concerns"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:w-fit sm:px-8"
              >
                Get A Call Back
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>

            <div className="mt-8 flex items-center gap-3 border-t border-gray-100 pt-6">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-lighter text-primary">
                <Phone size={18} strokeWidth={1.8} />
              </span>
              <p className="text-sm text-gray-600">
                Speak to our Patient Counsellor{" "}
                <a href="tel:9833943177" className="block text-base font-semibold text-primary hover:underline">
                  9833943177
                </a>
              </p>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative hidden min-h-[480px] overflow-hidden rounded-2xl border border-black/5 md:block">
            <Image
              src="/contact-form.png"
              alt="Varicose vein consultation"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
