import ContactForm from "@/components/contact-form";
import HeroSection from "@/sections/HeroSection";
import FeaturesSection from "@/sections/FeaturesSection";
import BenefitsSection from "@/sections/BenefitsSection";
import CTASection from "@/sections/CTASection";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <CTASection />
      <ContactForm />
    </div>
  );
}
