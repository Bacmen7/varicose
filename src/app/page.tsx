import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ConditionsSection from "@/components/ConditionsSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import LocationsSection from "@/components/LocationsSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import KnowledgeCenterSection from "@/components/KnowledgeCenterSection";
import InsuranceSection from "@/components/InsuranceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <FeaturesSection />
      <ConditionsSection />
      <TreatmentsSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <LocationsSection />
      <TestimonialSlider />
      <KnowledgeCenterSection />
      <InsuranceSection />
      <CTASection />
      <Footer />
    </main>
  );
}
