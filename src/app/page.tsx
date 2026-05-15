import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import FeaturesSection from "@/components/FeaturesSection";
import ConditionsSection from "@/components/ConditionsSection";
import ConditionsGridSection from "@/components/ConditionsGridSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import VideoStoriesSection from "@/components/VideoStoriesSection";
import LocationsSection from "@/components/LocationsSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import TestimonialsSection from "@/components/TestimonialsSection";
import KnowledgeCenterSection from "@/components/KnowledgeCenterSection";
import CTASection from "@/components/CTASection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-background">
      <HeroSection />
      <StatsBar />
      <FeaturesSection />
      {/* <ConditionsGridSection /> */}
      <ConditionsSection />
      <TreatmentsSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <VideoStoriesSection />
      <LocationsSection />
      <TestimonialSlider />
      <TestimonialsSection />
      <KnowledgeCenterSection />
      <ContactFormSection />
      <CTASection />
      <Footer />
    </main>
  );
}
