import { useState } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { pricingPlans, PlanId } from '@/data/pricing';
import { PricingCard } from './PricingCard';
import { motion } from 'framer-motion';
export function PricingTable() {
  const [isYearly, setIsYearly] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState<PlanId>('orta');
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Şeffaf Fiyatlandırma</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            İhtiyaçlarınıza en uygun planı seçin. Yıllık ödemelerde %20 indirim kazanın.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 my-8">
          <Label htmlFor="billing-cycle">Aylık</Label>
          <Switch
            id="billing-cycle"
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Yıllık ve aylık faturalandırma arasında geçiş yap"
          />
          <Label htmlFor="billing-cycle">
            Yıllık <span className="text-green-500 font-medium">(%20 Tasarruf)</span>
          </Label>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <PricingCard
                plan={plan}
                isYearly={isYearly}
                isSelected={selectedPlan === plan.id}
                onSelect={(id) => setSelectedPlan(id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}