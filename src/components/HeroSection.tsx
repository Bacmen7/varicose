"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const slides = [
  {
    id: 0,
    heading: (
      <>
        Struggling with{" "}
        <span className="font-bold font-body text-[0.85em] whitespace-nowrap inline-block">Pain</span>,{" "}
        <span className="font-bold font-body text-[0.85em] whitespace-nowrap inline-block">Swelling</span>, or{" "}
        <span className="font-bold font-body text-[0.85em] whitespace-nowrap inline-block">Varicose Veins</span>?
      </>
    ),
    image: "/h3.png",
  },
  {
    id: 1,
    heading: (
      <>
        Your path to{" "}
        <span className="font-bold font-body text-[0.85em] whitespace-nowrap inline-block">healthy veins</span>{" "}
        starts{" "}
        <span className="font-bold font-body text-[0.85em] whitespace-nowrap inline-block">here</span>
      </>
    ),
    image: "/h2.png",
  },
  {
    id: 2,
    heading: (
      <span className="inline-flex flex-col">
        <span>Advanced care</span>
        <span>for</span>
        <span>Varicose Vein</span>
      </span>
    ),
    image: "/h1-cutout.png",
    imageWrapClass: "w-[132%] h-full -right-10 md:-right-16 lg:-right-20",
    imageClass: "object-right-bottom p-0",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative" style={{ padding: "0.5rem 1rem 2rem" }}>
      <div
        className="w-full rounded-[1.5rem] md:rounded-[2rem] relative overflow-hidden flex flex-col min-h-[75vh] md:min-h-[calc(100vh-7rem)] lg:min-h-[620px]"
        style={{ backgroundColor: "#2C847F" }}
      >
        {/* Abstract Background Patterns */}
        <div className="absolute top-0 right-0 opacity-15 pointer-events-none">
          <svg width="400" height="400" viewBox="0 0 300 300" fill="none" className="w-[200px] md:w-[400px]">
            <path d="M150 0H300V150C300 67.1573 232.843 0 150 0Z" fill="white" fillOpacity="0.3" />
            <path d="M150 150H0V300C0 217.157 67.1573 150 150 150Z" fill="white" fillOpacity="0.3" />
            <path d="M150 150H300V300C300 217.157 232.843 150 150 150Z" fill="white" fillOpacity="0.1" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 opacity-15 pointer-events-none rotate-180 transform translate-x-8 translate-y-8 md:translate-x-12 md:translate-y-12">
          <svg width="350" height="350" viewBox="0 0 300 300" fill="none" className="w-[150px] md:w-[350px]">
            <path d="M150 0H300V150C300 67.1573 232.843 0 150 0Z" fill="white" fillOpacity="0.3" />
            <path d="M150 150H0V300C0 217.157 67.1573 150 150 150Z" fill="white" fillOpacity="0.3" />
          </svg>
        </div>

        {/* Content Area */}
        <div className="relative z-10 px-5 py-8 md:px-[2.68rem] lg:px-[4rem] md:py-[3.18rem] flex flex-col lg:flex-row justify-between items-start gap-4 md:gap-8 lg:gap-24 w-full h-full flex-grow pb-[280px] md:pb-[3.18rem]">

          {/* Left: Heading + Button */}
          <div className="flex flex-col items-start max-w-3xl w-full pt-2 lg:pt-4">

            {/* Animated Heading */}
            <div className="relative w-full h-[150px] sm:h-[180px] md:h-[280px] lg:h-[340px] max-w-[900px]">
              {slides.map((slide, index) => (
                <div
                  key={`text-${slide.id}`}
                  className={`absolute top-0 left-0 w-full transition-all duration-[800ms] ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 translate-y-6 pointer-events-none"
                  }`}
                >
                  <h1
                    className="font-heading text-white leading-[1.2] text-[2.5rem] sm:text-5xl md:text-[4.2rem] lg:text-[4.8rem] md:leading-[1.1] tracking-tight font-light"
                  >
                    {slide.heading}
                  </h1>
                </div>
              ))}
            </div>

            {/* Mobile subtitle */}
            <div className="block lg:hidden mt-2 mb-6 relative z-20 max-w-[90%]">
              <p style={{ color: "rgba(255,255,255,0.95)", fontSize: "15px", lineHeight: 1.6 }}>
                Find trusted vein specialists near you.
                <br className="hidden sm:block" />
                Science-backed minimally invasive treatments.
                <br className="hidden sm:block" />
                Modern care you can rely on.
              </p>
            </div>

            {/* CTA Button */}
            <button
              className="inline-flex mt-4 md:mt-8 items-center gap-2.5 pl-7 pr-5 py-3.5 rounded-full font-bold text-[15px] tracking-wide transition-all duration-300 hover:bg-gray-100 group shadow-sm z-20 cursor-pointer"
              style={{ backgroundColor: "#ffffff", color: "#2C847F" }}
            >
              Book a Consultation
              <span className="w-6 h-6 rounded-full inline-flex items-center justify-center transition-colors" style={{ backgroundColor: "rgba(44,132,127,0.15)" }}>
                <ArrowRight size={16} />
              </span>
            </button>
          </div>

          {/* Desktop subtitle */}
          <div className="hidden lg:block w-full max-w-[480px] lg:mt-16 xl:mt-20 relative z-20 lg:mr-4 xl:mr-8 pr-4">
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "20px", lineHeight: 1.6 }}>
              Diagnosed with Varicose Veins, Spider Veins, or Venous Insufficiency? Consult a Vein Specialist today for expert care and lasting relief.
            </p>
          </div>
        </div>

        {/* Right Edge: Image */}
        <div className="absolute bottom-0 -right-4 sm:-right-2 md:right-4 lg:right-8 w-[190px] h-[230px] sm:w-[240px] sm:h-[290px] md:w-[310px] md:h-[370px] lg:w-[330px] lg:h-[400px] z-10 overflow-hidden pointer-events-none">
          {slides.map((slide, index) => (
            <div
              key={`img-${slide.id}`}
              className={`absolute bottom-0 right-0 ${slide.imageWrapClass ?? "w-full h-full"} overflow-hidden transition-all duration-[800ms] ease-out ${
                index === currentSlide
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-12 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={`Slide ${index + 1}`}
                fill
                className={`object-contain object-bottom ${slide.imageClass ?? ""}`}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4 z-30">
          {slides.map((_, index) => (
            <button
              key={`indicator-${index}`}
              onClick={() => setCurrentSlide(index)}
              className="group relative h-[3px] w-12 sm:w-16 md:w-24 bg-white/30 rounded-full overflow-hidden cursor-pointer"
              style={{ border: "none", padding: 0 }}
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`absolute top-0 left-0 h-full bg-white rounded-full ${
                  index === currentSlide ? "w-full" : "w-0"
                } ${index < currentSlide ? "w-full duration-0" : ""}`}
                style={{ transition: index === currentSlide ? "width 4500ms linear" : "none" }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
