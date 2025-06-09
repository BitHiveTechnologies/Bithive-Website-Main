import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import Trsustedby from "@/components/Trsustedby";
import ProjectGrid from "@/components/blocks/ProjectGrid";
import PowerPackage from "@/components/package";
import { motion } from "framer-motion";
import Testimonials from "@/components/Testimonials";
import { feature } from "@/components/feature";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";

export default function Home() {
  return (<>
      <Navbar />

      <Hero />
      <Trsustedby />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ProjectGrid />
      <PowerPackage />
      <Testimonials />

      <div className="pt-20"  >
        <div>
        <FeaturesSectionWithHoverEffects />

        </div>
      </div>


      </>

  );
}
