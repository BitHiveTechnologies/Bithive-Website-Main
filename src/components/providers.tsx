'use client';

import { CalProvider } from '@/lib/CalContext';

export function Providers({ children }: { children: React.ReactNode }) {
  return <CalProvider>{children}</CalProvider>;
} 