import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
import { Hero } from '@/components/Hero';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { PricingTable } from '@/components/PricingTable';
import { Footer } from '@/components/Footer';
import { CTASticky } from '@/components/CTASticky';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
function Header() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-red-500" />
            <span className="ml-3 text-xl font-display font-bold">YZ Santralım</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-medium text-muted-foreground hover:text-foreground transition-colors">Özellikler</a>
            <a href="#pricing" className="font-medium text-muted-foreground hover:text-foreground transition-colors">Fiyatlandırma</a>
            <a href="mailto:destek@yzsantralim.com" className="font-medium text-muted-foreground hover:text-foreground transition-colors">Destek</a>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:inline-flex" onClick={scrollToPricing}>
              <Phone className="mr-2 h-4 w-4" /> İletişim
            </Button>
            <ThemeToggle className="relative top-0 right-0" />
          </div>
        </div>
      </div>
    </header>
  );
}
export function HomePage() {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <main className="pt-16">
        <Hero />
        <div id="features">
          <FeaturesGrid />
        </div>
        <PricingTable />
      </main>
      <Footer />
      <CTASticky />
      <Toaster richColors closeButton />
    </div>
  );
}