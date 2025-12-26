"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactFormSection() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, mobile });
  };

  return (
    <section className="py-16 w-full bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl text-secondary mb-4">
            Get Expert Consultation
          </h2>
          <p className="text-gray-600 text-lg">
            Fill in your details and our patient counsellor will call you back
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Form */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-10 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-2">
                  Mobile Number:
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter your mobile number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-colors duration-200 cursor-pointer"
              >
                Get A Call Back
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-300 text-center">
              <p className="text-gray-700 font-semibold">
                Speak to our Patient Counsellor:{" "}
                <a href="tel:9833943177" className="text-primary hover:underline">
                  9833943177
                </a>
              </p>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
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
