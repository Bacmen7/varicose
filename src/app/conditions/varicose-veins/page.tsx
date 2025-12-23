import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function varicoseVeinsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-surface pt-8 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 text-sm transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h1 className="font-heading text-4xl md:text-[48px] md:leading-[56px] mb-6" style={{ color: '#026460' }}>
                What Are Varicose Veins?
              </h1>
              <p className="text-lg md:text-xl leading-relaxed mb-8" style={{ color: '#48546B' }}>
                Varicose veins are enlarged, twisted veins that usually appear on the legs and feet. They occur when the one-way valves inside veins weaken or fail.
              </p>

              <p className="text-lg md:text-xl leading-relaxed mb-3" style={{ color: '#48546B' }}>
                When this happens:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Blood flows backward <span className="text-primary font-medium">(venous reflux)</span></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Pressure builds inside the vein</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>The vein stretches, twists, and becomes visible</span>
                </li>
              </ul>

              <p className="text-base italic" style={{ color: '#48546B' }}>
                This is why Varicose veins often worsen with time.
              </p>
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2">
              <Image
                src="/valve_reflux.png"
                alt="Illustration showing how vein valves work and venous reflux occurs"
                width={500}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Common Symptoms Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left - Title */}
            <div className="lg:w-2/5">
              <h2 className="font-heading text-3xl md:text-[40px] md:leading-[48px] mb-4" style={{ color: '#026460' }}>
                Common Symptoms
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#48546B' }}>
                Varicose veins don&apos;t always start visibly. Many people experience symptoms years before veins become obvious.
              </p>
            </div>

            {/* Right - Symptoms */}
            <div className="lg:w-3/5">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Aching, burning, or throbbing pain in the legs</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Swelling around ankles or calves</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Night cramps and restless legs</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Itching or irritation near affected veins</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Skin changes — darkening or dryness near ankles</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Visible bulging or twisted veins</span>
                </div>
              </div>

              <p className="text-base italic mt-8" style={{ color: '#48546B' }}>
                Symptoms often worsen by evening or after long periods of standing or sitting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Do VaricoseVeins Happen Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left - Title */}
            <div className="lg:w-2/5">
              <h2 className="font-heading text-3xl md:text-[40px] md:leading-[48px] mb-4" style={{ color: '#026460' }}>
                Why Do Varicose Veins Happen?
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#48546B' }}>
                Varicose veins usually develop due to a combination of factors.
              </p>
            </div>

            {/* Right - Causes */}
            <div className="lg:w-3/5">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading font-medium text-secondary text-lg mb-2">Genetics</h3>
                  <p className="text-gray-500 text-[15px]">The most common cause</p>
                </div>

                <div>
                  <h3 className="font-heading font-medium text-secondary text-lg mb-2">Long Hours Standing or Sitting</h3>
                  <p className="text-gray-500 text-[15px]">Prolonged pressure on leg veins</p>
                </div>

                <div>
                  <h3 className="font-heading font-medium text-secondary text-lg mb-2">Pregnancy & Hormonal Changes</h3>
                  <p className="text-gray-500 text-[15px]">Increased blood volume and pressure</p>
                </div>

                <div>
                  <h3 className="font-heading font-medium text-secondary text-lg mb-2">Age-Related Weakening</h3>
                  <p className="text-gray-500 text-[15px]">Vein walls weaken over time</p>
                </div>

                <div>
                  <h3 className="font-heading font-medium text-secondary text-lg mb-2">Excess Body Weight</h3>
                  <p className="text-gray-500 text-[15px]">Increases pressure on veins</p>
                </div>

                <div>
                  <h3 className="font-heading font-medium text-secondary text-lg mb-2">Lack of Movement</h3>
                  <p className="text-gray-500 text-[15px]">Reduced blood circulation</p>
                </div>
              </div>

              <p className="text-base italic mt-8" style={{ color: '#48546B' }}>
                They are especially common in people whose work requires them to stay on their feet or seated for long hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Are VaricoseVeins Dangerous Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left - Title */}
            <div className="lg:w-2/5">
              <h2 className="font-heading text-3xl md:text-[40px] md:leading-[48px] mb-4" style={{ color: '#026460' }}>
                Are Varicose Veins Dangerous?
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#48546B' }}>
                Varicose veins are not immediately life-threatening — but they can progress if ignored.
              </p>
            </div>

            {/* Right - Info */}
            <div className="lg:w-3/5">
              <p className="text-lg mb-6" style={{ color: '#48546B' }}>
                Without treatment, they may lead to:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Chronic leg pain and swelling</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Skin discoloration and thickening</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Eczema-like skin changes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Venous ulcers (non-healing wounds)</span>
                </div>
              </div>

              <p className="text-base italic mt-8" style={{ color: '#48546B' }}>
                Early evaluation helps prevent these complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When Should You Be Concerned Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left - Title */}
            <div className="lg:w-2/5">
              <h2 className="font-heading text-3xl md:text-[40px] md:leading-[48px] mb-4" style={{ color: '#026460' }}>
                When Should You Be Concerned?
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#48546B' }}>
                You should consider seeing a specialist if:
              </p>
            </div>

            {/* Right - Signs */}
            <div className="lg:w-3/5">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Symptoms persist or worsen over time</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Swelling occurs daily</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Skin around the ankles changes color or texture</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Pain interferes with daily activities</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>One leg feels consistently worse than the other</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>You have a family history of Varicose veins</span>
                </div>
              </div>

              <p className="text-base italic mt-8" style={{ color: '#48546B' }}>
                Visible veins alone aren&apos;t the only indicator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Are VaricoseVeins Diagnosed Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left - Title */}
            <div className="lg:w-2/5">
              <h2 className="font-heading text-3xl md:text-[40px] md:leading-[48px] mb-4" style={{ color: '#026460' }}>
                How Are Varicose Veins Diagnosed?
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#48546B' }}>
                Diagnosis goes beyond visual inspection.
              </p>
            </div>

            {/* Right - Diagnosis Info */}
            <div className="lg:w-3/5">
              <p className="text-lg mb-6" style={{ color: '#48546B' }}>
                A Doppler ultrasound is used to:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Check blood flow direction</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Identify faulty valves</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Determine which veins are affected</span>
                </div>
              </div>

              <p className="text-base italic mt-8" style={{ color: '#48546B' }}>
                This helps doctors decide whether treatment is needed and which option is best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Do VaricoseVeins Go Away Section */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left - Title */}
            <div className="lg:w-2/5">
              <h2 className="font-heading text-3xl md:text-[40px] md:leading-[48px] mb-4" style={{ color: '#026460' }}>
                Do Varicose Veins Go Away on Their Own?
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#48546B' }}>
                Unfortunately, damaged vein valves do not repair themselves.
              </p>
            </div>

            {/* Right - Info */}
            <div className="lg:w-3/5">
              <p className="text-lg mb-6" style={{ color: '#48546B' }}>
                Lifestyle changes like walking, leg elevation, or compression stockings can:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Reduce symptoms</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Slow progression</span>
                </div>
              </div>

              <p className="text-lg mt-6 mb-4" style={{ color: '#48546B' }}>
                But they cannot reverse valve damage.
              </p>

              <p className="text-base italic" style={{ color: '#48546B' }}>
                When symptoms persist, medical treatment may be required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Treatments Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            {/* Left - Title */}
            <div className="lg:w-2/5">
              <h2 className="font-heading text-3xl md:text-[40px] md:leading-[48px] mb-4" style={{ color: '#026460' }}>
                The Good News: Modern Treatments Are Simple
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#48546B' }}>
                Today, most Varicose veins are treated with minimally invasive, non-surgical procedures.
              </p>
            </div>

            {/* Right - Treatments */}
            <div className="lg:w-3/5">
              <p className="text-lg mb-6" style={{ color: '#48546B' }}>
                Common treatment options include:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}><strong className="text-primary">EVLT</strong> – Endovenous Laser Treatment</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}><strong className="text-primary">RFA</strong> – Radiofrequency Ablation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}><strong className="text-primary">Sclerotherapy</strong> – Foam Treatment</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}><strong className="text-primary">VenaSeal</strong> – Glue Therapy</span>
                </div>
              </div>

              <p className="text-lg mt-8 mb-4" style={{ color: '#48546B' }}>
                These treatments:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Use only local anesthesia</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Take 30–45 minutes</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Require no hospital stay</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0"></span>
                  <span className="text-lg" style={{ color: '#48546B' }}>Allow quick recovery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Early Evaluation Matters Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#1D5E5B' }}>
        <div className="flex flex-col lg:flex-row">
          {/* Left - Content */}
          <div className="lg:w-1/2 py-16 md:py-24 px-6 lg:pl-[calc((100vw-72rem)/2+1.5rem)] lg:pr-12">
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl md:text-[40px] md:leading-[48px] mb-4 text-white">
                Why Early Evaluation Matters
              </h2>
              <p className="text-lg mb-6 text-white/80">Early diagnosis:</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-white">Prevents progression</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-white">Reduces complications</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-white">Makes treatment simpler and more effective</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg text-white">Improves long-term outcomes</span>
                </div>
              </div>
              <p className="text-base italic mt-8 text-white/70">
                Ignoring symptoms often leads to more complex care later.
              </p>
            </div>
          </div>

          {/* Right - Full Height Image */}
          <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-0">
            <Image
              src="/t1.png"
              alt="Doctor consultation"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="border-y border-primary/20 bg-surface pt-10 md:pt-16 lg:pt-20 max-w-full overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 relative flex flex-col md:flex-row md:gap-12">
            {/* Left Content */}
            <div className="mb-72 md:mb-28 md:w-2/3 lg:shrink-0 xl:mb-20 xl:w-1/2">
              <h2 className="font-heading text-3xl md:text-[40px] md:leading-[48px] mb-4" style={{ color: '#026460' }}>
                Take the First Step Toward Healthier Legs
              </h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: '#48546B' }}>
                If your legs feel heavy, painful, or swollen, it&apos;s worth getting checked.
              </p>
              <p className="text-lg leading-relaxed mb-8" style={{ color: '#48546B' }}>
                Understanding the problem is the first step toward lasting relief.
              </p>
              <a
                href="#"
                className="inline-block bg-cta hover:bg-cta/90 text-white font-medium px-8 py-4 rounded-full transition-colors text-lg"
              >
                Find a Varicose vein specialist near you
              </a>
            </div>

            {/* Right - Stacked Cards */}
            <div className="absolute bottom-0 right-1/2 mr-6 h-min w-[110%] max-w-md translate-x-1/2 md:-right-36 md:mr-0 md:w-3/4 md:max-w-xl md:translate-x-0 lg:mt-auto xl:relative xl:right-0 xl:h-full xl:w-full xl:max-w-full">
              <div className="relative h-full min-h-64 w-full" style={{ aspectRatio: '8/5' }}>
                {/* Card 3 - Back */}
                <div
                  className="absolute right-0 top-0 z-10 w-3/5 bg-white shadow-lg rounded-3xl overflow-hidden"
                  style={{
                    aspectRatio: '3/5',
                    transform: 'translateX(-24%) translateY(24%) rotate(-30deg)',
                  }}
                >
                  <Image src="/t1.png" alt="Patient consultation" fill className="object-cover" />
                </div>
                {/* Card 2 - Middle */}
                <div
                  className="absolute right-0 top-0 z-20 w-3/5 bg-white shadow-xl rounded-3xl overflow-hidden"
                  style={{
                    aspectRatio: '3/5',
                    transform: 'translateX(-16%) translateY(8%) rotate(-15deg)',
                  }}
                >
                  <Image src="/t2.png" alt="Treatment procedure" fill className="object-cover" />
                </div>
                {/* Card 1 - Front */}
                <div
                  className="absolute right-0 top-0 z-30 w-3/5 bg-white shadow-2xl rounded-3xl overflow-hidden"
                  style={{ aspectRatio: '3/5' }}
                >
                  <Image src="/t3.png" alt="Healthy legs result" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
