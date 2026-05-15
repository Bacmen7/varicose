"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ContactFormSection() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [concern, setConcern] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, mobile, city, concern });
  };

  return (
    <section className="py-16 w-full bg-accent">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl lg:text-4xl text-secondary mb-4">
            Get Expert Consultation
          </h2>
          <p className="text-gray-600 text-lg">
            Fill in your details and our patient counsellor will call you back
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1.5 text-sm">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1.5 text-sm">Mobile Number</label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter your mobile number"
                pattern="[0-9]{10}"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-1.5 text-sm">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Your city"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1.5 text-sm">Main Concern</label>
              <select
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-gray-600"
              >
                <option value="">Select your concern</option>
                <option value="varicose-veins">Varicose Veins</option>
                <option value="spider-veins">Spider Veins</option>
                <option value="leg-pain">Leg Pain / Heaviness</option>
                <option value="swelling">Leg Swelling</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-7 rounded-full inline-flex items-center gap-2 transition-colors duration-200 cursor-pointer"
            >
              Get A Call Back
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-center text-gray-700 font-semibold pt-2">
            Speak to our Patient Counsellor:{" "}
            <a href="tel:9833943177" className="text-primary hover:underline">
              9833943177
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
