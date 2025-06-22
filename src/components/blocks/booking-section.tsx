"use client";
import Cal from "@calcom/embed-react";
import { useCalContext } from "@/lib/CalContext";

export default function BookingSection() {
  const { isCalLoaded } = useCalContext();

  return (
    <div className="relative w-full py-8 sm:py-12 flex flex-col items-center lg:items-start text-center lg:text-left text-white px-4 sm:px-6 lg:px-8">
      <p className="mt-4 text-xl sm:text-2xl ml-0 lg:ml-20">Book a call</p>
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-green-500 mb-6 sm:mb-10 ml-0 lg:ml-20">
        Let's discuss your project!
      </h1>

      {/* Loading Spinner */}
      {!isCalLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/50 backdrop-blur-sm">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-t-2 border-b-2 border-green-500"></div>
        </div>
      )}

      {/* Embedded Calendar */}
      <div className={`w-full transition-opacity duration-300 min-h-[700px] ${isCalLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Cal
          namespace="testing"
          calLink="saurabh-singh-cg9fek/demo"
          style={{
            width: "100%",
            height: "100%",
            minHeight: "400px",
            maxHeight: "600px",
          }}
          config={{
            layout: "month_view",
          }}
        />
      </div>
    </div>
  );
}
