"use client";

import { motion } from "framer-motion";

export default function PowerPackage() {
  const items = [
    "Copy writing",
    "Design systems",
    "Pitch decks",
    "Brand guides",
    "Graphic design",
    "Full websites",
    "Landing page",
    "Application",
    <span className="text-gray-500">Landing page</span>,
  ];

  // Duplicate items for seamless looping
  const loopItems = items.concat(items);
  const visibleCount = 6;
  const itemHeight = 64; // px, h-16 = 64px
  const containerHeight = itemHeight * visibleCount;

  return (
    <section className="bg-black text-white min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-10 p-0 m-0">
      {/* Left Side */}
      <div className="flex flex-col items-start w-full md:w-1/2 px-8 md:px-24">
        <h1 className="text-5xl md:text-7xl font-extrabold text-green-500 leading-tight whitespace-nowrap">
          the power package
        </h1>
        <p className="text-1xl md:text-3xl mt-4 text-white">
          we cater all your needs.
        </p>
      </div>

      {/* Right Side */}
      <div className="overflow-hidden flex-1 min-w-[300px] pl-10 flex items-center justify-end" style={{ height: containerHeight }}>
        <motion.ul
          className="flex flex-col"
          animate={{ y: [0, -itemHeight * items.length] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 8,
            ease: "linear",
          }}
          style={{ willChange: "transform" }}
        >
          {loopItems.map((item, i) => (
            <li
              key={i}
              className="h-16 flex items-center text-base md:text-5xl font-bold text-right pr-2"
             

            >
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
