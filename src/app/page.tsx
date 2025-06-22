import { Hero } from "@/components/Hero";
import Trsustedby from "@/components/Trsustedby";
import ProjectGrid from "@/components/blocks/ProjectGrid";
import PowerPackage from "@/components/package";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { BenefitsSection } from "@/components/blocks/benefits-section";
import BookingSection from "@/components/blocks/booking-section";
import { SingleAccordionDemo } from "@/components/According";
import CtaSection from "@/components/blocks/CtaSection";

export default function Home() {
  return (<>
      <Hero />
      <div className="mt-3">
      <Trsustedby />
      </div>

      <div className="py-8 sm:py-12 lg:py-16">
      <ProjectGrid />
      </div>
      
      <div className="py-8 sm:py-12 lg:py-16">
      <Testimonials />
      </div>

      <div className="pt-12 sm:pt-16 lg:pt-20">
        <BenefitsSection />
        <BookingSection />
        <PowerPackage />
        <div className="my-8 sm:my-10">
          <SingleAccordionDemo />
        </div>
        <CtaSection />
      </div>

      </>
  );
}
