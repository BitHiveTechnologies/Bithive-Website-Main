import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CtaSection() {
  return (
    <section className="bg-zinc-900 rounded-2xl p-6 sm:p-8 md:p-12 lg:p-16 my-12 sm:my-16 lg:my-20 max-w-5xl mx-auto mx-4 sm:mx-6 lg:mx-auto">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs sm:text-sm text-neutral-400">Only 3 slots left for {new Date().toLocaleString('default', { month: 'long' })}</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-500 mt-3 sm:mt-4">
          Ready to level up your business?
        </h2>
        <div className="mt-6 sm:mt-8">
          <Link href="https://cal.com/saurabh-singh-cg9fek/demo" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-black rounded-full px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold">
              <span>Book a Call With Us</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
} 