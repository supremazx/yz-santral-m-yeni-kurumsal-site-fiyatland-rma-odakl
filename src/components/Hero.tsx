import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
export function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight text-balance">
            İşletmeniz için Yapay Zekalı <span className="text-gradient">Bulut Santral Çözümleri</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            YZ Santralım ile iletişim altyapınızı modernize edin, verimliliği artırın ve müşteri memnuniyetini en üst seviyeye taşıyın.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="btn-gradient w-full sm:w-auto" onClick={scrollToPricing}>
            Hemen Teklif Al <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto" onClick={scrollToPricing}>
            Fiyatlandırmayı Gör
          </Button>
        </motion.div>
      </div>
    </section>
  );
}