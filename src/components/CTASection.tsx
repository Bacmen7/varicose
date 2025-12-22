import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 w-full" style={{ backgroundColor: '#026460' }}>
      <div className="container mx-auto px-4 max-w-[1200px] text-center">
        <h2 className="font-heading text-white text-3xl lg:text-5xl mb-6">
          Start your journey to pain-free legs today.
        </h2>
        <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Expert care is just one click away.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white hover:bg-gray-100 text-primary font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl group cursor-pointer">
            Book Your Consultation
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 border-2 border-white group cursor-pointer">
            Find a Doctor Near You
          </button>
        </div>
      </div>
    </section>
  );
}
