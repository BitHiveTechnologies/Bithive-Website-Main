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
    <div className="bg-black py-8 sm:py-10 px-4 md:px-12 lg:px-20 text-white">
      <div className="overflow-hidden">
        <div className="w-full">
          <div className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6">
            {visibleProjects.map((project, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 flex flex-col items-center">
                <div className="rounded-xl overflow-hidden w-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                </div>
                <div className="flex w-full justify-between items-end mt-3 sm:mt-4 px-2">
                  <div className="flex flex-col items-start">
                    <h2 className="text-base sm:text-lg md:text-xl font-semibold text-green-500">
                      {project.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1">{project.type}</p>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 font-medium text-right">
                    {project.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-center sm:justify-end mt-8 sm:mt-10 gap-3 sm:gap-4 px-4 sm:pr-4">
        <button 
          className="bg-green-500 rounded-full p-2 sm:p-3 hover:bg-green-600 transition-colors" 
          onClick={handlePrev}
          aria-label="Previous project"
        >
          <ChevronLeft className="text-black w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <button 
          className="bg-green-500 rounded-full p-2 sm:p-3 hover:bg-green-600 transition-colors" 
          onClick={handleNext}
          aria-label="Next project"
        >
          <ChevronRight className="text-black w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
};

export default ProjectsShowcase;
