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

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ProjectGrid />
      <Testimonials />

            <div className="pt-20">
        <BenefitsSection />
        <BookingSection />
        <PowerPackage />
        <div className="my-10">
          <SingleAccordionDemo />
        </div>
        <CtaSection />
      </div>

      </>

  );
}
