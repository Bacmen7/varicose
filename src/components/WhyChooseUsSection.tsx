import {
  ArrowRight,
  Award,
  TrendingUp,
  MapPin,
  FileText,
  Heart,
  Users,
} from "lucide-react";
import Link from "@/compat/Link";

const benefits = [
  {
    icon: Award,
    text: "Specialists who focus exclusively on venous disorders",
  },
  { icon: TrendingUp, text: "High success-rate, low downtime treatments" },
  { icon: MapPin, text: "Clinics across major Indian cities" },
  { icon: FileText, text: "Transparent pricing & treatment guidance" },
  { icon: Heart, text: "Patient-first approach with personalized plans" },
  { icon: Users, text: "Trusted by thousands seeking real relief" },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-14 md:py-20 w-full bg-background relative">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
        <div className="flex flex-col items-center">
          <div className="w-full flex flex-col items-center text-center">
            <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">
              THE DIFFERENCE
            </p>
            <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-secondary mb-12">
              Why patients choose us for their care
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl border border-black/5 bg-white shadow-sm transition-all duration-300 group hover:border-primary/30"
                >
                  <div className="p-3 rounded-lg shrink-0 bg-accent-lighter text-primary group-hover:scale-110 transition-transform duration-300">
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-secondary text-lg font-medium leading-snug pt-1 group-hover:text-primary transition-colors">
                    {item.text}
                  </h3>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/book-consultation"
                className="bg-cta text-white rounded-full px-6 py-2 text-sm font-semibold hover:brightness-105 transition-colors inline-flex items-center gap-2 group cursor-pointer"
              >
                Schedule Your Visit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
