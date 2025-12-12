import {
  ArrowRight,
  Award,
  TrendingUp,
  MapPin,
  FileText,
  Heart,
  Users,
} from "lucide-react";

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
    <section className="py-24 w-full bg-background">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col items-center">
          <div className="w-full max-w-6xl flex flex-col items-center text-center">
            <p className="text-primary font-semibold mb-4 text-sm tracking-wider uppercase">
              THE DIFFERENCE
            </p>
            <h2 className="font-heading text-secondary text-3xl lg:text-5xl mb-12">
              Why patients choose us for their care
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full text-left">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white transition-all duration-300 group border border-gray-100 hover:border-primary/30"
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
              <button className="bg-primary hover:opacity-90 text-white font-semibold py-3.5 px-8 rounded-full flex items-center gap-2 transition-all duration-300 shadow-md group cursor-pointer">
                Schedule Your Visit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
