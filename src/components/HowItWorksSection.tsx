"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const steps = [
  {
    id: "step-1",
    title: "Tell us your symptoms",
    description:
      "Answer a few quick questions so we understand your condition.",
    image: "/a1.png",
  },
  {
    id: "step-2",
    title: "Get matched to the right specialist",
    description: "We recommend verified vein doctors in your city.",
    image: "/a2.png",
  },
  {
    id: "step-3",
    title: "Begin your treatment plan",
    description:
      "Book a consult, get your evaluation, and start treatment — often completed in 30–45 minutes.",
    image: "/a3.png",
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-12 lg:py-16 w-full bg-[#E3E6EA]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col gap-6 lg:flex-row-reverse items-start">
          {/* Right Side (Desktop): Image Display */}
          <div className="hidden lg:block w-full lg:w-1/2 h-[600px] bg-gray-200 rounded-3xl overflow-hidden shadow-xl lg:sticky lg:top-24 relative">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                  activeStep === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            ))}
          </div>

          {/* Left Side: Content & Accordion */}
          <div className="w-full lg:w-1/2 flex flex-col lg:pr-12">
            <h2 className="font-heading mb-4 lg:mb-6 text-secondary text-2xl sm:text-3xl font-medium lg:text-4xl leading-tight">
              Get treated in 3 simple steps
            </h2>

            <div className="flex flex-col space-y-2 lg:space-y-3">
              {steps.map((step, i) => (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(i)}
                  className={`group relative w-full cursor-pointer p-3 sm:p-4 rounded-xl lg:rounded-2xl transition-all duration-300 ${
                    activeStep === i
                      ? "bg-white"
                      : "hover:bg-white/50 border border-transparent"
                  }`}
                >
                  <div className="flex items-start sm:items-center justify-between gap-3 sm:gap-4">
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                      <span
                        className={`font-heading flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full text-sm font-bold transition-colors shrink-0 ${
                          activeStep === i
                            ? "bg-primary text-white"
                            : "bg-gray-200 text-gray-500 group-hover:bg-primary/20"
                        }`}
                      >
                        {i + 1}
                      </span>
                      <h3
                        className={`font-heading text-base sm:text-lg lg:text-xl font-medium transition-colors leading-snug ${
                          activeStep === i ? "text-primary" : "text-secondary"
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    <div
                      className={`flex w-7 h-7 sm:w-8 sm:h-8 items-center justify-center rounded-full transition-all duration-300 shrink-0 ${
                        activeStep === i
                          ? "bg-primary text-white rotate-180"
                          : "bg-gray-100 text-gray-500 group-hover:bg-primary group-hover:text-white"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                    </div>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      activeStep === i
                        ? "grid-rows-[1fr] opacity-100 mt-3 sm:mt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg pl-10 sm:pl-12">
                        {step.description}
                      </p>

                      {/* Mobile Image */}
                      <div className="lg:hidden mt-4 rounded-xl overflow-hidden relative h-48">
                        <Image
                          src={step.image}
                          alt={step.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
