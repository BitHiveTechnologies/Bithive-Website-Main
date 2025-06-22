"use client";
import React from "react";
import { motion } from "framer-motion";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, image, name, role }, i) => (
              <div
                className="relative cursor-pointer overflow-hidden rounded-xl border p-4 mb-4 bg-[#0d0d0d] border-white/10 hover:bg-[#1a1a1a] transition-colors duration-300"
                key={`${index}-${i}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    width={40}
                    height={40}
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-white leading-tight text-base">{name}</div>
                    <div className="text-xs text-gray-400 leading-tight">{role}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-300">{text}</div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
