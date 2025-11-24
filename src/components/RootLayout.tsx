import React, { useEffect } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTASticky } from '@/components/CTASticky';
import { useAnalyticsStore } from '@/store/useAnalyticsStore';
interface RootLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}
export function RootLayout({ children, title, description }: RootLayoutProps) {
  const initializeVariant = useAnalyticsStore(s => s.initializeVariant);
  useEffect(() => {
    document.title = title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = description;
      document.head.appendChild(newMeta);
    }
  }, [title, description]);
  useEffect(() => {
    initializeVariant();
  }, [initializeVariant]);
  useEffect(() => {
    // Cloudflare Web Analytics
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    script.dataset.cfBeacon = '{"token": "YOUR_CF_ANALYTICS_TOKEN"}'; // Replace with actual token in a real scenario
    document.head.appendChild(script);
    return () => {
      // Clean up script on component unmount
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
  return (
    <div className="bg-background text-foreground flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
      <CTASticky />
      <Toaster richColors closeButton />
    </div>
  );
}