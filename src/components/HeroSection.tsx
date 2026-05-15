import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section style={{ padding: "0.5rem 1rem 2rem" }}>
      <div className="w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden flex flex-col min-h-[75vh] md:min-h-[calc(100vh-7rem)] lg:min-h-[620px] justify-center" style={{ backgroundColor: "#0D7377" }}>

        <div className="px-5 py-8 md:px-[2.68rem] lg:px-[4rem] md:py-[3.18rem] flex flex-col lg:flex-row justify-between items-start gap-4 md:gap-8 lg:gap-24 w-full">

          {/* Left: heading + button */}
          <div className="flex flex-col items-start max-w-3xl w-full pt-2 lg:pt-4">
            <h1
              className="font-heading text-[2.2rem] leading-[1.2] sm:text-4xl md:text-[3.6rem] lg:text-[4.4rem] md:leading-[1.1] tracking-tight text-white mb-6"
              style={{ fontWeight: 300 }}
            >
              Struggling with Pain,<br />
              Heaviness, or <strong style={{ fontWeight: 700 }}>Swelling</strong><br />
              in Your <strong style={{ fontWeight: 700 }}>Legs</strong>?
            </h1>

            <div className="block lg:hidden mb-6 max-w-[90%]">
              <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "15px", lineHeight: 1.6 }}>
                Find trusted vein specialists near you. Science-backed treatments. Modern care you can rely on.
              </p>
            </div>

            <button className="inline-flex items-center gap-2.5 text-white pl-7 pr-5 py-3.5 rounded-full font-bold text-[15px] tracking-wide transition-all duration-300 hover:opacity-90 cursor-pointer bg-cta">
              Book a Consultation Today
              <span className="w-6 h-6 rounded-full bg-white/20 inline-flex items-center justify-center">
                <ArrowRight size={16} />
              </span>
            </button>
          </div>

          {/* Desktop: subtitle right */}
          <div className="hidden lg:block w-full max-w-[500px] lg:mt-16 xl:mt-20 pr-4">
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "20px", lineHeight: 1.7 }}>
              Diagnosed with varicose veins, chronic venous insufficiency, or leg swelling? Consult a vascular specialist today for expert care and lasting relief.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
