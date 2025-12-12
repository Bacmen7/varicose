"use client";

import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export default function WhyVaricoseVeinsHappenPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-surface pt-8 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 text-sm transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>

          <h1 className="font-heading text-4xl md:text-[56px] md:leading-[73px] mt-4" style={{ color: '#026460' }}>
            Why Do Varicose Veins Happen?
          </h1>
          <p className="text-lg md:text-[22px] md:leading-[33px] mt-4 max-w-2xl" style={{ color: '#48546B' }}>
            Understanding the real cause behind bulging, painful veins
          </p>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">

        {/* Intro */}
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-6" style={{ color: '#48546B' }}>
          Varicose veins don&apos;t appear overnight. And they&apos;re not just a cosmetic issue.
        </p>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-12" style={{ color: '#48546B' }}>
          They are a sign that something isn&apos;t working properly in your leg circulation. Let&apos;s break it down in simple terms.
        </p>

        {/* How Veins Work */}
        <h2 className="font-heading text-2xl md:text-3xl text-[#023936] mb-6">
          First Things First: How Do Veins Normally Work?
        </h2>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          Your veins have a tough job. They carry blood upwards, from your legs back to your heart — <strong className="font-bold">against gravity</strong>.
        </p>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-6" style={{ color: '#48546B' }}>
          To make this possible, veins contain tiny one-way valves that:
        </p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-6 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li>Open to let blood flow upward</li>
          <li>Close to stop blood from flowing backward</li>
        </ul>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-12" style={{ color: '#48546B' }}>
          When these valves work well, blood flows smoothly. When they don&apos;t — varicose veins happen.
        </p>

        {/* Root Cause with Image */}
        <h2 className="font-heading text-2xl md:text-3xl text-[#023936] mb-6">
          The Root Cause: Weak or Damaged Vein Valves
        </h2>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-6" style={{ color: '#48546B' }}>
          Varicose veins occur when the valves inside your veins become weak or damaged. When this happens:
        </p>

        {/* Image Section */}
        <figure className="my-10">
          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/valve_reflux.png"
              alt="Diagram showing normal valve function vs valve reflux in varicose veins"
              fill
              className="object-contain bg-gray-50"
            />
          </div>
          <figcaption className="text-center text-sm text-gray-500 mt-3 italic">
            Normal valve function (left) vs. valve reflux causing varicose veins (right)
          </figcaption>
        </figure>

        <ol className="list-decimal list-inside text-lg md:text-[22px] md:leading-[33px] mb-6 space-y-3 ml-4" style={{ color: '#48546B' }}>
          <li><strong className="font-bold">Blood starts flowing backward</strong> (called venous reflux)</li>
          <li><strong className="font-bold">Blood pools</strong> inside the vein</li>
          <li><strong className="font-bold">Pressure builds up</strong></li>
          <li><strong className="font-bold">The vein stretches, twists,</strong> and becomes visible</li>
        </ol>

        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>Over time, this leads to:</p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-12 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li>Bulging veins</li>
          <li>Leg pain and heaviness</li>
          <li>Swelling</li>
          <li>Skin changes</li>
          <li>In severe cases, ulcers</li>
        </ul>

        {/* Risk Factors */}
        <h2 className="font-heading text-2xl md:text-3xl text-[#023936] mb-6">
          Why Do These Valves Get Weak?
        </h2>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-8" style={{ color: '#48546B' }}>
          There isn&apos;t just one reason. It&apos;s usually a combination of factors:
        </p>

        <div className="space-y-8 mb-12">
          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-2">1. Genetics (The Biggest Factor)</h3>
            <p className="text-lg md:text-[22px] md:leading-[33px]" style={{ color: '#48546B' }}>
              If your parents or close relatives have varicose veins, your risk is significantly higher. You inherit weaker vein walls and poor valve structure. This is why some people develop varicose veins even in their 20s or 30s.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-2">2. Standing or Sitting for Long Hours</h3>
            <p className="text-lg md:text-[22px] md:leading-[33px]" style={{ color: '#48546B' }}>
              Jobs that require long hours of standing (teachers, surgeons, retail workers) or sitting (IT professionals, drivers) reduce blood movement in the legs. <strong className="font-bold">Less movement = more pressure on veins = valve damage over time.</strong>
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-2">3. Pregnancy</h3>
            <p className="text-lg md:text-[22px] md:leading-[33px]" style={{ color: '#48546B' }}>
              During pregnancy, blood volume increases, hormones relax vein walls, and the growing uterus puts pressure on leg veins. This slows blood return and stresses vein valves. While some veins improve after delivery, many don&apos;t fully recover.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-2">4. Ageing</h3>
            <p className="text-lg md:text-[22px] md:leading-[33px]" style={{ color: '#48546B' }}>
              As you age, vein walls lose elasticity and valves weaken naturally. This is why varicose veins become more common after the age of 40 — but age alone isn&apos;t the cause.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-2">5. Obesity or Sudden Weight Gain</h3>
            <p className="text-lg md:text-[22px] md:leading-[33px]" style={{ color: '#48546B' }}>
              Extra weight increases pressure on leg veins and makes it harder for blood to travel upward. This accelerates valve failure, especially if other risk factors are present.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-2">6. Lack of Physical Activity</h3>
            <p className="text-lg md:text-[22px] md:leading-[33px]" style={{ color: '#48546B' }}>
              Movement helps your calf muscles pump blood upward. <strong className="font-bold">A sedentary lifestyle means poor circulation, blood pooling, and faster vein damage.</strong>
            </p>
          </div>

          <div>
            <h3 className="font-heading text-xl text-[#023936] mb-2">7. Hormonal Factors</h3>
            <p className="text-lg md:text-[22px] md:leading-[33px]" style={{ color: '#48546B' }}>
              Hormonal changes due to pregnancy, menopause, or hormonal medications can relax vein walls and weaken valves.
            </p>
          </div>
        </div>

        {/* Why Legs - Highlight Box */}
        <div className="bg-primary/5 p-6 rounded-xl mb-12">
          <h3 className="font-heading text-xl text-[#023936] mb-3">
            Why Do Varicose Veins Usually Appear in the Legs?
          </h3>
          <p className="text-lg md:text-[22px] md:leading-[33px]" style={{ color: '#48546B' }}>
            Because your legs face maximum gravitational pressure. Blood has to travel the longest distance upward from your feet to your heart. <strong className="font-bold">That&apos;s why varicose veins rarely appear in arms — but commonly in calves and thighs.</strong>
          </p>
        </div>

        {/* Spider vs Varicose */}
        <h2 className="font-heading text-2xl md:text-3xl text-[#023936] mb-6">
          Are Spider Veins and Varicose Veins the Same?
        </h2>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          <strong className="font-bold">Not exactly.</strong>
        </p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-6 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li><strong className="font-bold">Spider veins</strong> are smaller, superficial, and usually cosmetic</li>
          <li><strong className="font-bold">Varicose veins</strong> are larger, deeper, and often linked to valve failure</li>
        </ul>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-12" style={{ color: '#48546B' }}>
          Spider veins can be an early warning sign — but varicose veins indicate a deeper circulation issue.
        </p>

        {/* What Happens If Ignored */}
        <h2 className="font-heading text-2xl md:text-3xl text-[#023936] mb-6">
          What Happens If Varicose Veins Are Ignored?
        </h2>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          Untreated varicose veins can progress. Over time, they may cause:
        </p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-6 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li>Chronic leg pain and heaviness</li>
          <li>Persistent swelling</li>
          <li>Skin darkening or thickening</li>
          <li>Itching and eczema-like changes</li>
          <li>Non-healing venous ulcers</li>
          <li>Increased risk of clots in some cases</li>
        </ul>
        <p className="text-lg md:text-[22px] md:leading-[33px] font-bold mb-12" style={{ color: '#48546B' }}>
          That&apos;s why early evaluation matters.
        </p>

        {/* Prevention */}
        <h2 className="font-heading text-2xl md:text-3xl text-[#023936] mb-6">
          Can Varicose Veins Be Prevented?
        </h2>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          You can&apos;t change genetics — but you can slow progression by:
        </p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-6 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li>Staying active</li>
          <li>Avoiding long periods of standing or sitting</li>
          <li>Elevating legs when possible</li>
          <li>Maintaining a healthy weight</li>
          <li>Wearing compression stockings if advised</li>
        </ul>
        <p className="text-lg md:text-[22px] md:leading-[33px] font-bold mb-12" style={{ color: '#48546B' }}>
          But once valves are damaged, lifestyle alone cannot fix them.
        </p>

        {/* Diagnosis */}
        <h2 className="font-heading text-2xl md:text-3xl text-[#023936] mb-6">
          How Are the Real Causes Diagnosed?
        </h2>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          <strong className="font-bold text-primary">A Doppler ultrasound is the gold standard.</strong> It helps doctors:
        </p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-6 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li>See blood flow direction</li>
          <li>Identify faulty valves</li>
          <li>Decide the right treatment</li>
        </ul>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-12" style={{ color: '#48546B' }}>
          Visible veins alone don&apos;t tell the full story — ultrasound does.
        </p>

        {/* Modern Treatments */}
        <h2 className="font-heading text-2xl md:text-3xl text-[#023936] mb-6">
          The Good News: Modern Treatments Fix the Root Cause
        </h2>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>
          Today, treatments like:
        </p>
        <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] mb-6 space-y-2 ml-4" style={{ color: '#48546B' }}>
          <li><Link href="/treatments/evlt" className="text-primary hover:underline font-medium">Endovenous Laser Treatment (EVLT)</Link></li>
          <li>Radiofrequency Ablation (RFA)</li>
          <li>Glue therapy</li>
          <li>Foam sclerotherapy</li>
        </ul>
        <p className="text-lg md:text-[22px] md:leading-[33px] mb-12" style={{ color: '#48546B' }}>
          ...seal faulty veins from the inside, correcting reflux — <strong className="font-bold">without surgery</strong>.
        </p>

        {/* When to See Doctor */}
        <div className="bg-cta/10 border border-cta/20 p-6 rounded-xl mb-12">
          <h2 className="font-heading text-xl md:text-2xl text-[#023936] mb-4">
            When Should You See a Doctor?
          </h2>
          <p className="text-lg md:text-[22px] md:leading-[33px] mb-4" style={{ color: '#48546B' }}>Don&apos;t wait if you have:</p>
          <ul className="list-disc list-inside text-lg md:text-[22px] md:leading-[33px] space-y-2 ml-4" style={{ color: '#48546B' }}>
            <li>Persistent leg pain or heaviness</li>
            <li>Swelling that worsens by evening</li>
            <li>Visible bulging veins</li>
            <li>Skin color changes</li>
            <li>Family history + symptoms</li>
          </ul>
          <p className="text-primary font-bold text-lg md:text-[22px] mt-4">
            Early treatment is simpler, faster, and more effective.
          </p>
        </div>

      </article>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(to bottom, #E8D5A3 0%, #F5E6C3 50%, #FFFFFF 100%)' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-[#023936] mb-4">
            Take the First Step Toward Healthier Legs
          </h2>
          <p className="text-lg md:text-[22px] md:leading-[33px] mb-8" style={{ color: '#48546B' }}>
            Varicose veins happen for real medical reasons — not vanity. Understanding the cause is the first step to lasting relief.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="text-white font-semibold py-3 px-8 rounded-full transition-colors hover:opacity-90" style={{ backgroundColor: '#026460' }}>
              Book a Consultation
            </button>
            <button className="bg-white font-semibold py-3 px-8 rounded-full transition-colors hover:opacity-90" style={{ border: '2px solid #026460', color: '#026460' }}>
              Find a Specialist Near You
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
