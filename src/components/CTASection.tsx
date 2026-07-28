import { ArrowRight } from "lucide-react";
import Link from "@/compat/Link";

export default function CTASection() {
  return (
    <section className="py-14 md:py-20 w-full relative bg-gradient-to-br from-primary-dark to-[#1a5350]">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8 text-center">
        <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-white mb-6">
          Start your journey to pain-free legs today.
        </h2>
        <p className="text-[15px] md:text-base leading-relaxed text-white/80 mb-10 max-w-2xl mx-auto">
          Expert care is just one click away.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/book-consultation"
            className="bg-cta hover:brightness-105 text-white rounded-full px-6 py-2 text-sm font-semibold flex items-center justify-center gap-2 transition-colors group cursor-pointer"
          >
            Book Your Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/clinics"
            className="hover:bg-white/10 text-white rounded-full px-6 py-2 text-sm font-semibold flex items-center justify-center gap-2 transition-colors border-2 border-white group cursor-pointer"
          >
            Find a Doctor Near You
          </Link>
        </div>
      </div>
    </section>
  );
}
