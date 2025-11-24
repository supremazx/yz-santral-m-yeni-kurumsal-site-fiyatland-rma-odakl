import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
export function CTASticky() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm p-4 border-t md:hidden z-50"
    >
      <Button size="lg" className="w-full btn-gradient" onClick={scrollToPricing}>
        Planları İncele <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </motion.div>
  );
}