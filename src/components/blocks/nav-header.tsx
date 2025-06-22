"use client"; 

import React from "react";
import Image from "next/image";
import logo from "../../../public/logos/logo.webp";

function NavHeader() {
  return (
    <>
      <a href="/">
        <Image 
          alt="Uniodessy Logo" 
          loading="lazy" 
          width={32} 
          height={32} 
          className="ml-2"
          style={{color: 'transparent'}} 
          src={logo}
        />
      </a>
      <a className="block overflow-hidden" href="/#benefits">Benefits</a>
      <a className="block overflow-hidden" href="/case-studies">
        Case Studies
      </a>
      <a 
        target="_blank"
        className="overflow-hidden bg-green-accent hover:bg-white duration-200 transition-colors text-green-dark cursor-pointer font-semibold rounded-full px-4 py-2"
        href="https://cal.com/vetcharoopesh/ps"
      >
        Book a call
      </a>
    </>
  );
}

export default NavHeader;
