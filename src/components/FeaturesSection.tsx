import { Zap, Timer, ShieldCheck, MapPin } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Minimally Invasive Treatments",
    description:
      "Laser, RF ablation, foam sclerotherapy, glue therapy & more, with no long hospital stays.",
  },
  {
    icon: Timer,
    title: "End-to-End Support",
    description:
      "From first symptoms to post-treatment recovery, we guide your care journey.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Vein Specialists",
    description:
      "Our doctors are trained in advanced venous care and use evidence-based protocols for every patient.",
  },
  {
    icon: MapPin,
    title: "Clinics Near You",
    description:
      "A growing network of vein care centres across India, with expert help close to where you live.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-14 md:py-20 w-full bg-surface relative">
      <div className="mx-auto w-full max-w-[1320px] px-5 md:px-8">
        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.18em] text-primary mb-4">
            WHY CHOOSE US
          </p>
          <h2 className="font-heading font-normal tracking-tight leading-[1.15] text-[1.9rem] sm:text-[2.3rem] text-secondary mb-6">
            Get The Right Varicose Vein Care
          </h2>
          <p className="text-[15px] md:text-base leading-relaxed text-gray-600 max-w-2xl mx-auto">
            We are a network of clinics with certified vein specialists who diagnose, treat, and manage Varicose and Spider Veins with the latest minimally invasive options.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border border-black/5 bg-white shadow-sm p-8 transition-transform hover:-translate-y-1 duration-300"
            >
              <span className="bg-white mb-6 flex size-14 items-center justify-center rounded-full shadow-sm text-primary">
                <feature.icon className="size-7" />
              </span>
              <h3 className="font-heading mb-3 text-xl font-medium text-secondary">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-7">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
