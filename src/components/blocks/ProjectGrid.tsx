"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    name: "Prestige",
    type: "Construction",
    duration: "2 months",
    image: "/cover/prestige-cover.webp",
  },
  {
    name: "Nexchain AI",
    type: "AI SaaS",
    duration: "Under Development",
    image: "/cover/nexchain.webp",
  },
  {
    name: "Wassup Media Co",
    type: "Content Agency",
    duration: "2 weeks",
    image: "/cover/wassupmedia-cover.webp",
  },
  {
    name: "Spain Academy",
    type: "EdTech",
    duration: "Ongoing",
    image: "/cover/spainacademy-cover.webp",
  },
];

const VISIBLE_COUNT = 3;

const ProjectsShowcase: React.FC = () => {
  const [startIdx, setStartIdx] = useState(0);

  const total = projects.length;

  const handlePrev = () => {
    setStartIdx((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setStartIdx((prev) => (prev + 1) % total);
  };

  const visibleProjects = Array(VISIBLE_COUNT)
    .fill(0)
    .map((_, i) => projects[(startIdx + i) % total]);

  return (
    <div className="bg-black py-10 px-4 md:px-12 lg:px-20 text-white">
      <div className="overflow-hidden">
        <div className="w-full">
          <div className="flex transition-transform duration-500 ease-in-out gap-6">
            {visibleProjects.map((project, index) => (
              <div key={index} className="w-full md:w-1/3 flex-shrink-0 flex flex-col items-center">
                <div className="rounded-xl overflow-hidden w-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="flex w-full justify-between items-end mt-4 px-2">
                  <div className="flex flex-col items-start">
                    <h2 className="text-[18px] md:text-[20px] font-semibold text-green-500">
                      {project.name}
                    </h2>
                    <p className="text-[14px] text-gray-400 mt-1">{project.type}</p>
                  </div>
                  <div className="text-[14px] text-gray-400 font-medium text-right">
                    {project.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-end mt-10 gap-4 pr-4">
        <button className="bg-green-500 rounded-full p-3" onClick={handlePrev}>
          <ChevronLeft className="text-black w-5 h-5" />
        </button>
        <button className="bg-green-500 rounded-full p-3" onClick={handleNext}>
          <ChevronRight className="text-black w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
