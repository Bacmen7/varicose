"use client";

import { useState } from "react";
import { ArrowRight, ShieldCheck, Zap, Timer, Check, ChevronDown, Award, TrendingUp, MapPin, FileText, Heart, Users, Phone, Mail, Linkedin } from "lucide-react";
import LocationsSection from "@/components/LocationsSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import TreatmentsSection from "@/components/TreatmentsSection";

export default function Home() {
  // State for the "How it Works" section
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: "step-1",
      title: "Tell us your symptoms",
      description: "Answer a few quick questions so we understand your condition.",
      image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "step-2",
      title: "Get matched to the right specialist",
      description: "We recommend verified vein doctors in your city.",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: "step-3",
      title: "Begin your treatment plan",
      description: "Book a consult, get your evaluation, and start treatment — often completed in 30–45 minutes.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <main className="bg-[#F9F9F9]">
      {/* Hero Section */}
      <div className="w-full flex flex-col lg:flex-row overflow-hidden">

        {/* Left Content Section */}
        <div
          className="w-full lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center items-start"
          style={{ backgroundColor: '#CCE0DF' }}
        >
          <h1
            className="text-[#2B3445] text-3xl lg:text-5xl font-normal mb-6 lg:mb-8 text-left leading-tight"
            style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
          >
            Relief From Varicose Veins Starts Here
          </h1>

          <p
            className="text-gray-700 text-base lg:text-lg mb-6 leading-relaxed max-w-xl"
            style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
          >
            Find trusted vein specialists near you. Science-backed treatments. Modern care you can rely on.
          </p>

          <button
            className="bg-[#2C847F] hover:bg-[#236b67] text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-all duration-300 mb-6 group cursor-pointer"
            style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
          >
            Book a Consultation Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <p
            className="text-sm text-gray-700 font-medium tracking-wide"
            style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
          >
            Safe • Minimally Invasive • Fast Recovery
          </p>
        </div>

        {/* Right Image Section */}
        <div
          className="w-full lg:w-1/2 h-[300px] lg:h-auto lg:min-h-[500px] bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop")'
          }}
        />

      </div>

      {/* --- FEATURE SECTION --- */}
      <section className="py-24 w-full bg-[#FFFFFF]">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="mb-14 lg:mb-20 text-center max-w-3xl mx-auto">
            <p className="text-[#2C847F] font-semibold mb-4 text-sm lg:text-base tracking-wider uppercase">
              WHY CHOOSE US
            </p>
            <h2
              className="text-[#2B3445] text-3xl font-medium lg:text-4xl mb-6"
              style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
            >
              A simpler way to get the right varicose vein care
            </h2>
            <p
              className="text-gray-600 text-lg leading-relaxed"
              style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
            >
              We help you quickly connect with certified vein specialists who diagnose, treat, and manage varicose and spider veins with the latest minimally invasive options.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-[#EEF7F5] rounded-2xl p-8 transition-transform hover:-translate-y-1 duration-300">
              <span className="bg-white mb-6 flex size-14 items-center justify-center rounded-full shadow-sm text-[#2C847F]">
                <ShieldCheck className="size-7" />
              </span>
              <h3
                className="mb-3 text-xl font-medium text-[#2B3445]"
                style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
              >
                Verified Doctors Only
              </h3>
              <p
                className="text-gray-600 leading-7"
                style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
              >
                Every specialist is credentialed, experienced, and focused on vein health.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#EEF7F5] rounded-2xl p-8 transition-transform hover:-translate-y-1 duration-300">
              <span className="bg-white mb-6 flex size-14 items-center justify-center rounded-full shadow-sm text-[#2C847F]">
                <Zap className="size-7" />
              </span>
              <h3
                className="mb-3 text-xl font-medium text-[#2B3445]"
                style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
              >
                Minimally Invasive Treatments
              </h3>
              <p
                className="text-gray-600 leading-7"
                style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
              >
                Laser, RF ablation, foam sclerotherapy, glue therapy & more — no long hospital stays.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#EEF7F5] rounded-2xl p-8 transition-transform hover:-translate-y-1 duration-300">
              <span className="bg-white mb-6 flex size-14 items-center justify-center rounded-full shadow-sm text-[#2C847F]">
                <Timer className="size-7" />
              </span>
              <h3
                className="mb-3 text-xl font-medium text-[#2B3445]"
                style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
              >
                End-to-End Support
              </h3>
              <p
                className="text-gray-600 leading-7"
                style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
              >
                From first symptoms to post-treatment recovery, we guide your care journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONDITIONS SECTION --- */}
      <section className="py-24 w-full" style={{ backgroundColor: '#DBEAE9' }}>
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

            {/* Left Side: Content */}
            <div className="w-full lg:w-1/2">
              <h2
                className="text-[#2B3445] text-3xl font-medium lg:text-4xl mb-6 leading-tight"
                style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
              >
                Varicose veins aren't just cosmetic — they signal deeper circulation issues.
              </h2>
              <p
                className="text-gray-600 text-lg mb-8 leading-relaxed font-medium"
                style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
              >
                We help you find care for:
              </p>

              <button
                className="bg-[#2C847F] hover:bg-[#236b67] text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-all duration-300 group cursor-pointer shadow-md"
                style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
              >
                Explore Conditions
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Side: Conditions Grid */}
            <div className="w-full lg:w-1/2">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Varicose Veins",
                  "Spider Veins",
                  "Deep Vein Reflux",
                  "Chronic Venous Insufficiency",
                  "Leg Pain & Heaviness",
                  "Swelling, Skin Changes, Non-healing Ulcers"
                ].map((condition, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 rounded-xl shadow-sm flex items-start gap-4 transition-all hover:shadow-md border border-transparent hover:border-[#D6E6E6]"
                  >
                    <div className="mt-1 bg-[#D6E6E6] p-1.5 rounded-full text-[#2C847F] shrink-0">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span
                      className="font-semibold text-[#2B3445] text-lg leading-snug"
                      style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
                    >
                      {condition}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- TREATMENTS SECTION --- */}
      <TreatmentsSection />

      {/* --- HOW IT WORKS / STEPS SECTION --- */}
      <section className="py-24 w-full" style={{ backgroundColor: '#E3E6EA' }}>
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col gap-8 lg:flex-row-reverse items-start">

            {/* Right Side (Desktop): Image Display */}
            <div className="w-full lg:w-1/2 aspect-square lg:aspect-[5/6] bg-gray-200 rounded-3xl overflow-hidden shadow-xl sticky top-24 relative">
              {/* Simple Image Switcher */}
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${activeStep === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
              ))}
            </div>

            {/* Left Side (Desktop): Content & Accordion */}
            <div className="w-full lg:w-1/2 flex flex-col lg:pr-24">
              <h2
                className="mb-8 text-[#2B3445] text-3xl font-medium lg:text-5xl leading-tight"
                style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
              >
                Get treated in 3 simple steps
              </h2>

              <div className="flex flex-col space-y-4">
                {steps.map((step, i) => (
                  <div
                    key={step.id}
                    onClick={() => setActiveStep(i)}
                    className={`
                      group relative w-full cursor-pointer p-6 rounded-2xl transition-all duration-300
                      ${activeStep === i ? 'bg-white scale-[1.02]' : 'hover:bg-white/50 border border-transparent'}
                    `}
                  >
                    <div className="flex items-center justify-between gap-x-4">
                      <div className="flex items-center gap-4">
                        <span
                          className={`
                            flex items-center justify-center w-8 h-8 rounded-full text-sm font-bold transition-colors
                            ${activeStep === i ? 'bg-[#2C847F] text-white' : 'bg-gray-200 text-gray-500 group-hover:bg-[#2C847F]/20'}
                          `}
                          style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
                        >
                          {i + 1}
                        </span>
                        <h3
                          className={`text-xl font-medium transition-colors ${activeStep === i ? 'text-[#2C847F]' : 'text-[#2B3445]'}`}
                          style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
                        >
                          {step.title}
                        </h3>
                      </div>

                      <div
                        className={`
                          flex size-8 items-center justify-center rounded-full transition-all duration-300
                          ${activeStep === i ? 'bg-[#2C847F] text-white rotate-180' : 'bg-gray-100 text-gray-500 group-hover:bg-[#2C847F] group-hover:text-white'}
                        `}
                      >
                        <ChevronDown className="size-5 shrink-0" />
                      </div>
                    </div>

                    <div
                      className={`grid transition-all duration-300 ease-in-out ${activeStep === i ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}
                    >
                      <div className="overflow-hidden">
                        <p
                          className="text-gray-600 leading-relaxed text-lg pl-12"
                          style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US? SECTION (No Image, Full Width) --- */}
      <section className="py-24 w-full" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container mx-auto px-4 max-w-[1200px]">

          <div className="flex flex-col items-center">

            {/* Content Centered */}
            <div className="w-full max-w-6xl flex flex-col items-center text-center">
              <p className="font-semibold mb-4 text-sm tracking-wider uppercase" style={{ color: '#2C847F' }}>
                THE DIFFERENCE
              </p>
              <h2
                className="text-[#2B3445] text-3xl lg:text-5xl mb-12"
                style={{ fontFamily: 'Recoleta, serif' }}
              >
                Why patients choose us for their care
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
                {[
                  { icon: Award, text: "Specialists who focus exclusively on venous disorders" },
                  { icon: TrendingUp, text: "High success-rate, low downtime treatments" },
                  { icon: MapPin, text: "Clinics across major Indian cities" },
                  { icon: FileText, text: "Transparent pricing & treatment guidance" },
                  { icon: Heart, text: "Patient-first approach with personalized plans" },
                  { icon: Users, text: "Trusted by thousands seeking real relief" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-white transition-all duration-300 group border border-gray-100 hover:border-[#2C847F]/30"
                  >
                    <div
                      className="p-3 rounded-lg shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: '#EEF7F5', color: '#2C847F' }}
                    >
                      <item.icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3
                      className="text-[#2B3445] text-lg font-medium leading-snug pt-1 group-hover:text-[#2C847F] transition-colors"
                      style={{ fontFamily: 'Recoleta, serif' }}
                    >
                      {item.text}
                    </h3>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <button
                  className="hover:opacity-90 text-white font-semibold py-3.5 px-8 rounded-full flex items-center gap-2 transition-all duration-300 shadow-md group cursor-pointer"
                  style={{ backgroundColor: '#2C847F', fontFamily: '"Proxima Nova", Arial, sans-serif' }}
                >
                  Schedule Your Visit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* --- LOCATIONS SECTION --- */}
      <LocationsSection />

      {/* --- TESTIMONIALS SECTION --- */}
      <TestimonialSlider />

      {/* --- KNOWLEDGE CENTER GRID SECTION (Full Width Background) --- */}
      <section className="py-24 w-full" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="container mx-auto px-4 max-w-[1200px]">

          <h2
            className="text-[#2B3445] text-3xl lg:text-4xl mb-4"
            style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
          >
            Learn everything about varicose veins
          </h2>
          <p
            className="text-gray-600 text-lg mb-10 max-w-2xl"
            style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
          >
            Simple articles and videos that help you understand symptoms, risks, prevention, and treatment options.
          </p>

          {/* Grid - 3 cols, No Shadows, Border on Hover */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                category: "Article",
                title: "Why varicose veins happen",
                image: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&q=80&w=800",
                desc: "Understand the underlying causes of venous insufficiency and how valve failure leads to varicose veins."
              },
              {
                category: "Guide",
                title: "Early warning signs",
                image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2070&auto=format&fit=crop",
                desc: "Learn to spot the subtle symptoms like heaviness, aching, and swelling before visible veins appear."
              },
              {
                category: "Checklist",
                title: "When to see a doctor",
                image: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=800",
                desc: "Knowing the red flags—such as skin changes or persistent pain—that indicate it's time for a professional evaluation."
              }
            ].map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full border border-transparent hover:border-[#2C847F]/20">
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <p
                    className="text-xs font-bold tracking-wider uppercase mb-2 text-[#2C847F]"
                    style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
                  >
                    {item.category}
                  </p>
                  <h3
                    className="text-[#2B3445] text-xl font-medium mb-3 leading-snug group-hover:text-[#2C847F] transition-colors"
                    style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-500 text-base leading-relaxed mb-4 flex-grow line-clamp-3"
                    style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
                  >
                    {item.desc}
                  </p>
                  <span
                    className="text-[#2C847F] font-semibold text-sm flex items-center mt-auto cursor-pointer"
                    style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
                  >
                    Read more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              className="hover:opacity-90 text-white font-semibold py-3 px-10 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
              style={{ backgroundColor: '#2C847F', fontFamily: '"Proxima Nova", Arial, sans-serif' }}
            >
              Visit Knowledge Center
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>

      {/* --- INSURANCE SUPPORT SECTION --- */}
      <section className="w-full" style={{ backgroundColor: '#DBEAE9' }}>
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24">

            {/* Left: Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center py-24">
              <h2
                className="text-[#2B3445] text-3xl lg:text-4xl mb-6"
                style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
              >
                Insurance support made easy
              </h2>
              <p
                className="text-gray-600 text-lg leading-relaxed mb-8"
                style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
              >
                Most modern vein treatments are covered under many insurance plans when medically indicated. We help you:
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Check coverage",
                  "Understand procedure costs",
                  "Get documentation needed for claims"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-white p-1 rounded-full text-[#2C847F]">
                      <Check size={16} strokeWidth={3} />
                    </div>
                    <span
                      className="text-[#2B3445] font-medium text-lg"
                      style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <button
                  className="hover:opacity-90 text-white font-semibold py-3 px-10 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
                  style={{ backgroundColor: '#2C847F', fontFamily: '"Proxima Nova", Arial, sans-serif' }}
                >
                  See Pricing & Insurance
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-0">
              <div className="absolute inset-0 w-full h-full">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
                  alt="Insurance Support"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#2C847F]/10 mix-blend-multiply"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FINAL CTA SECTION --- */}
      <section className="py-24 w-full" style={{ backgroundColor: '#EEF7F5' }}>
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h2
            className="text-[#2B3445] text-3xl lg:text-5xl mb-6"
            style={{ fontFamily: 'Recoleta, Georgia, sans-serif' }}
          >
            Start your journey to pain-free legs today.
          </h2>
          <p
            className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
          >
            Expert care is just one click away.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              className="hover:opacity-90 text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer"
              style={{ backgroundColor: '#2C847F', fontFamily: '"Proxima Nova", Arial, sans-serif' }}
            >
              Book Your Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              className="hover:bg-gray-50 text-[#2C847F] font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 border-2 border-[#2C847F] group cursor-pointer"
              style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
            >
              Find a Doctor Near You
            </button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="w-full pt-16 pb-8" style={{ backgroundColor: '#F9F9F9' }}>
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">

            {/* Left Side: Brand & Description */}
            <div className="text-center md:text-left max-w-md">
              <h3
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: 'Recoleta, Georgia, sans-serif', color: '#2B3445' }}
              >
                Varicose Care
              </h3>
              <p
                className="text-gray-600 leading-relaxed font-medium"
                style={{ fontFamily: '"Proxima Nova", Arial, sans-serif' }}
              >
                Restoring comfort and confidence with expert vein care.
              </p>
            </div>

            {/* Right Side: Contact */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:bg-[#2C847F] hover:text-white text-[#2B3445] transition-all duration-300 group">
                  <Phone size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:bg-[#2C847F] hover:text-white text-[#2B3445] transition-all duration-300 group">
                  <Mail size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-sm hover:bg-[#2C847F] hover:text-white text-[#2B3445] transition-all duration-300 group">
                  <Linkedin size={18} />
                </a>
              </div>
              <p className="text-[#2C847F] font-semibold text-lg hover:underline cursor-pointer">
                (555) 123-4567
              </p>
            </div>

          </div>

          {/* Bottom Section (Copyright) */}
          <div className="border-t border-[#2C847F]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2024 Varicose Care. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#2C847F] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#2C847F] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
