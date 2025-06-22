"use client";

import { PricingSection } from "@/components/blocks/pricing-section";
import { motion } from "framer-motion";
import { 
  FileTextIcon, 
  ColorWheelIcon, 
  SpeakerLoudIcon, 
  ReaderIcon, 
  ImageIcon, 
  GlobeIcon, 
  RocketIcon, 
  LayersIcon,
  ChatBubbleIcon,
  GearIcon
} from "@radix-ui/react-icons";

const websiteServices = [
  {
    name: "Custom Website Design",
    description: "",
    included: true,
  },
  {
    name: "Landing Page Development",
    description: "",
    included: true,
  },
  {
    name: "Responsive Design",
    description: "",
    included: true,
  },
  {
    name: "SEO Optimization",
    description: "",
    included: true,
  },
  {
    name: "Content Management",
    description: "",
    included: true,
  },
  {
    name: "Performance Optimization",
    description: "",
    included: true,
  },
  {
    name: "Creative Motion & Interaction Design",
    description: "",
    included: true,
  },
];

const automationServices = [
  {
    name: "Custom Chatbot Development",
    description: "",
    included: true,
  },
  {
    name: "Business Process Automation",
    description: "",
    included: true,
  },
  {
    name: "CRM Integration",
    description: "",
    included: true,
  },
  {
    name: "Email Marketing Automation",
    description: "",
    included: true,
  },
  {
    name: "Data Analytics & Reporting",
    description: "",
    included: true,
  },
  {
    name: "24/7 Support & Maintenance",
    description: "",
    included: true,
  },
  {
    name: "Bespoke AI-Powered Insights",
    description: "",
    included: true,
  },
];

const tiers = [
  {
    name: "Website & Landing Page",
    price: {
      monthly: 0,
      yearly: 0,
    },
    description: "Complete website and landing page development",
    features: websiteServices,
    icon: <GlobeIcon className="w-6 h-6" />,
    bottomText: "Perfect for startups or brands needing a polished presence, fast.",
  },
  {
    name: "Business Automation Suite",
    price: {
      monthly: 0,
      yearly: 0,
    },
    description: "Comprehensive business automation solutions",
    features: automationServices,
    icon: <GearIcon className="w-6 h-6" />,
    highlight: true,
    bottomText: "Ideal for businesses looking to scale operations and improve efficiency.",
  },
];

export default function PowerPackage() {
  return (
    <section className="bg-black text-white min-h-screen w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center py-20 px-8"
      >
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold text-green-500 leading-tight mb-4">
            our services
          </h1>
          <p className="text-xl md:text-3xl text-white">
            we build websites & automate your business
          </p>
        </div>

        <div className="w-full max-w-6xl">
          <PricingSection 
            tiers={tiers} 
            className="bg-black"
          />
        </div>
      </motion.div>
    </section>
  );
}
