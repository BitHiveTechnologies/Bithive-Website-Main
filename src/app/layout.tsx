import './globals.css';
import { Providers } from '@/components/providers';
import { Footer } from '@/components/ui/footer';
import { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'Bithive Technology',
  description: 'Your Digital Partner',
  icons: {
    icon: '/logos/logo.webp',
    shortcut: '/logos/logo.webp',
    apple: '/logos/logo.webp',
  },
};

// Add preload tags for Cal.com
export const viewport = {
  themeColor: '#000000',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Preload Cal.com resources */}
        <link rel="preconnect" href="https://app.cal.com" />
        <link rel="dns-prefetch" href="https://app.cal.com" />
        <link rel="preload" href="https://app.cal.com/embed/embed.js" as="script" />
        
        {/* Google Fonts - Michroma */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Michroma&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
