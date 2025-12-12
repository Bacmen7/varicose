import { ShieldCheck, Zap, Timer } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Verified Doctors Only",
    description:
      "Every specialist is credentialed, experienced, and focused on vein health.",
  },
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
    <section className="py-24 w-full bg-surface">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Header */}
        <div className="mb-14 lg:mb-20 text-center max-w-3xl mx-auto">
          <p className="text-primary font-semibold mb-4 text-sm lg:text-base tracking-wider uppercase">
            WHY CHOOSE US
          </p>
          <h2 className="font-heading text-secondary text-3xl font-medium lg:text-4xl mb-6">
            A simpler way to get the right varicose vein care
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We help you quickly connect with certified vein specialists who
            diagnose, treat, and manage varicose and spider veins with the
            latest minimally invasive options.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-accent-lighter rounded-2xl p-8 transition-transform hover:-translate-y-1 duration-300"
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
