"use client"; 

import React from "react";
import Image from "next/image";

function NavHeader() {
  return (
    <div className="flex items-center justify-between w-full">
      <a href="/">
        <Image 
          alt="Bithive Logo" 
          loading="lazy" 
          width={32} 
          height={32} 
          className="ml-2 w-6 h-6 sm:w-8 sm:h-8"
          style={{color: 'transparent'}} 
          src="/logos/logo.webp"
        />
      </a>
      <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
        <a className="block overflow-hidden text-sm sm:text-base" href="/#benefits">Benefits</a>
        <a className="block overflow-hidden text-sm sm:text-base" href="/case-studies">
          Case Studies
        </a>
        <a 
          target="_blank"
          className="overflow-hidden bg-green-accent hover:bg-white duration-200 transition-colors text-green-dark cursor-pointer font-semibold rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base"
          href="https://cal.com/saurabh-singh-cg9fek/demo"
        >
          Book a call
        </a>
      </div>
    </div>
  );
}

export default NavHeader;
