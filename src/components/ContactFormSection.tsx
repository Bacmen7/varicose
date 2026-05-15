"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactFormSection() {
  const [form, setForm] = useState({ name: "", mobile: "", city: "", condition: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="py-16 pb-24 w-full bg-white relative">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-left mb-8">
          <h2 className="font-heading text-3xl lg:text-4xl text-secondary mb-4">
            Get Expert Consultation
          </h2>
          <p className="text-gray-600 text-lg">
            Fill in your details and our patient counsellor will call you back
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Left Side - Form (no card bg) */}
          <div className="p-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-1 text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-1 text-sm">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    value={form.mobile}
                    onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your mobile number"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-gray-700 font-semibold mb-1 text-sm">City</label>
                  <input
                    type="text"
                    id="city"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your city"
                  />
                </div>
                <div>
                  <label htmlFor="condition" className="block text-gray-700 font-semibold mb-1 text-sm">Condition</label>
                  <select
                    id="condition"
                    value={form.condition}
                    onChange={(e) => setForm({ ...form, condition: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary bg-white text-gray-700"
                  >
                    <option value="">Select your condition</option>
                    <option value="varicose-veins">Varicose Veins</option>
                    <option value="spider-veins">Spider Veins</option>
                    <option value="deep-vein-reflux">Deep Vein Reflux</option>
                    <option value="chronic-venous-insufficiency">Chronic Venous Insufficiency</option>
                    <option value="leg-pain">Leg Pain & Heaviness</option>
                    <option value="other">Other</option>
                </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-1 text-sm">Message</label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder="Describe your symptoms or concerns"
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="w-fit bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 px-7 text-sm rounded-full flex items-center gap-2 transition-colors duration-200 cursor-pointer"
              >
                Get A Call Back
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-700 font-semibold">
                Speak to our Patient Counsellor:{" "}
                <a href="tel:9833943177" className="text-primary hover:underline">
                  9833943177
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[500px] md:h-[580px] rounded-2xl overflow-hidden">
            <Image
              src="/hero.png"
              alt="Varicose vein consultation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
