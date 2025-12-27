import { Zap, Timer } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Minimally Invasive Treatments",
    description:
      "Laser, RF ablation, foam sclerotherapy, glue therapy & more — no long hospital stays.",
  },
  {
    icon: Timer,
    title: "End-to-End Support",
    description:
      "From first symptoms to post-treatment recovery, we guide your care journey.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-8 w-full bg-surface">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Header */}
        <div className="mb-4 lg:mb-6 text-center max-w-3xl mx-auto">
          <p className="text-primary font-semibold mb-4 text-sm lg:text-base tracking-wider uppercase">
            WHY CHOOSE US
          </p>
          <h2 className="font-heading text-secondary text-3xl font-medium lg:text-4xl mb-6">
            Get The Right Varicose Vein Care
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We are a network of clinics with certified vein specialists who diagnose, treat, and manage Varicose and Spider Veins with the latest minimally invasive options.
          </p>
        </div>

        {/* Cards */}
        <div className="flex justify-center gap-8 flex-wrap">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-accent-lighter rounded-2xl p-8 transition-transform hover:-translate-y-1 duration-300 w-full md:w-[calc(50%-1rem)] lg:w-[400px]"
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
