"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import logo from "../../../public/logos/logo.webp"
import Image from "next/image";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      className="relative mx-auto flex w-fit rounded-full border-2 border-accent bg-background p-0.5"
      onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
      style={{ fontFamily: 'Inter, Arial, sans-serif' }}
    >
      <Tab setPosition={setPosition} isLogo>
        <Image src={logo} alt="Logo" width={32} height={32} className="object-contain" />
      </Tab>
      <Tab setPosition={setPosition}>Benifit</Tab>
      <Tab setPosition={setPosition}>Case Study</Tab>
      <Tab setPosition={setPosition} active>Book a call</Tab>
     
    </ul>
  );
}

const Tab = ({
  children,
  setPosition,
  active = false,
  isLogo = false,
}: {
  children: React.ReactNode;
  setPosition: any;
  active?: boolean;
  isLogo?: boolean;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className={
        `relative z-10 block cursor-pointer px-2 py-1 text-base transition-colors duration-200 md:px-3 md:py-2 font-medium` +
        (active ? ' bg-accent/80 text-black rounded-full shadow-md' : (isLogo ? '' : ' text-shadow-md'))
      }
      style={{ textTransform: 'none' }}
    >
      {children}
    </li>
  );
};



export default NavHeader;
