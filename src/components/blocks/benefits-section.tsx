import { cn } from "@/lib/utils";
import {
  IconDeviceDesktop,
  IconBolt,
  IconPuzzle,
  IconCreditCard,
  IconUsers,
  IconInfinity,
} from "@tabler/icons-react";

export function BenefitsSection() {
  const benefits = [
    {
      title: "Responsive Design",
      description:
        "Flawless experiences across all devices and screen sizes.",
      icon: <IconDeviceDesktop />,
    },
    {
      title: "Lightning Fast",
      description:
        "Optimized code for speedy load times and smooth interactions.",
      icon: <IconBolt />,
    },
    {
      title: "Custom Solutions",
      description:
        "Tailor-made frontend solutions to match your unique requirements.",
      icon: <IconPuzzle />,
    },
    {
      title: "Modern Frameworks",
      description: "Expertise in React, NextJS, Framer & Webflow.",
      icon: <IconCreditCard />,
    },
    {
      title: "Collaborative Approach",
      description: "We work closely with your team for seamless integration",
      icon: <IconUsers />,
    },
    {
      title: "Ongoing Support",
      description:
        "Continuous maintenance and updates to keep your frontend fresh.",
      icon: <IconInfinity />,
    },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-left mb-12 sm:mb-16">
<div className="w-full py-8 sm:py-12 flex flex-col items-center lg:items-center text-center lg:text-left text-white">
<h3 className="mt-4 text-xl sm:text-2xl text-white">
          Benefits
        </h3>
        <h2 className="scroll-m-20 text-3xl sm:text-4xl font-semibold tracking-tighter lg:text-6xl text-green-accent mb-6 sm:mb-8">
          We run behind results
        </h2>
</div>


  
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10 max-w-7xl mx-auto gap-6 sm:gap-8">
        {benefits.map((benefit, index) => (
          <Benefit key={benefit.title} {...benefit} index={index} />
        ))}
      </div>
    </div>
  );
}

const Benefit = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-6 sm:py-8 lg:py-10 relative group/feature dark:border-neutral-800",
        // Mobile: no borders, Desktop: add borders based on grid position
        "sm:border-r sm:border-b lg:border-r lg:border-b",
        (index === 0 || index === 3) && "sm:border-l lg:border-l dark:border-neutral-800",
        index < 3 && "sm:border-b lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none group-hover/feature:bg-green-500/10" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none group-hover/feature:bg-green-500/10" />
      )}
      <div className="mb-3 sm:mb-4 relative z-10 px-4 sm:px-6 lg:px-10 text-green-500">
        {icon}
      </div>
      <div className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 relative z-10 px-4 sm:px-6 lg:px-10">
        <div className="absolute left-0 inset-y-0 h-4 sm:h-6 group-hover/feature:h-6 sm:group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-green-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-4 sm:px-6 lg:px-10">
        {description}
      </p>
    </div>
  );
}; 