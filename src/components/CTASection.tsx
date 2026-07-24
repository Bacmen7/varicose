import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-14 md:py-20 w-full relative bg-primary">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 text-center">
        <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-white mb-6">
          Start your journey to pain-free legs today.
        </h2>
        <p className="text-[15px] md:text-base leading-relaxed text-white/80 mb-10 max-w-2xl mx-auto">
          Expert care is just one click away.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white hover:bg-gray-100 text-primary rounded-full px-6 py-3 text-[14px] font-semibold flex items-center justify-center gap-2 transition-colors group cursor-pointer">
            Book Your Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="hover:bg-white/10 text-white rounded-full px-6 py-3 text-[14px] font-semibold flex items-center justify-center gap-2 transition-colors border-2 border-white group cursor-pointer">
            Find a Doctor Near You
          </button>
        </div>
      </div>
    </section>
  );
}
