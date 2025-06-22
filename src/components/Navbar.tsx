'use client';

import { useEffect, useState } from "react";
import NavHeader from "@/components/blocks/nav-header"

function Navbar() {
  return (
    <nav className="z-50 fixed left-[50%] top-8 flex w-max -translate-x-[50%] items-center gap-6 rounded-full border-[1px] border-green-accent backdrop-blur-3xl p-2 text-sm text-neutral-500">
      <NavHeader />
    </nav>
  );
}

export { Navbar }