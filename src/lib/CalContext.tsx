'use client';

import { createContext, useContext, useLayoutEffect, useState, ReactNode } from 'react';
import { getCalApi } from "@calcom/embed-react";

interface CalContextType {
  isCalLoaded: boolean;
}

const CalContext = createContext<CalContextType | undefined>(undefined);

export function CalProvider({ children }: { children: ReactNode }) {
  const [isCalLoaded, setIsCalLoaded] = useState(false);

  useLayoutEffect(() => {
    // Add preconnect and DNS prefetch
    const addResourceHints = () => {
      const hints = [
        { rel: 'preconnect', href: 'https://app.cal.com' },
        { rel: 'dns-prefetch', href: 'https://app.cal.com' }
      ];
      
      hints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        document.head.appendChild(link);
      });
    };

    // Initialize Cal.com as early as possible
    const initializeCal = async () => {
      try {
        addResourceHints();
        const cal = await getCalApi();
        // Configure UI settings
        await cal("ui", {
          "hideEventTypeDetails": false,
          "layout": "month_view",
          "theme": "light",
          styles: { 
            branding: { brandColor: "#000000" } 
          }
        });
        // Preload multiple calendars if needed
        await Promise.all([
          cal("preload", { calLink: "saurabh-singh-cg9fek/testing" }),
          // Add more calendar preloads here if needed
        ]);
        setIsCalLoaded(true);
      } catch (error) {
        console.error("Failed to initialize Cal:", error);
        // Retry initialization after a short delay
        setTimeout(initializeCal, 2000);
      }
    };

    // Start initialization immediately
    initializeCal();

    // Cleanup function
    return () => {
      // Remove resource hints on unmount if needed
      document.querySelectorAll('link[href*="cal.com"]').forEach(el => el.remove());
    };
  }, []);

  return (
    <CalContext.Provider value={{ isCalLoaded }}>
      {children}
    </CalContext.Provider>
  );
}

export function useCalContext() {
  const context = useContext(CalContext);
  if (context === undefined) {
    throw new Error('useCalContext must be used within a CalProvider');
  }
  return context;
} 