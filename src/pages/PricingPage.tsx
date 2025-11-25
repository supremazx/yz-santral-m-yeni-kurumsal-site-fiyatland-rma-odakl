import { useState, useCallback } from 'react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { pricingPlans, PlanId } from '@/data/pricing';
import { PricingCard } from '@/components/PricingCard';
import { motion } from 'framer-motion';
import { usePricingStore } from '@/store/usePricingStore';
import { QuoteModal } from '@/components/QuoteModal';
import { FAQAccordion } from '@/components/FAQAccordion';
export function PricingPage() {
  const billingCycle = usePricingStore((s) => s.billingCycle);
  const setBillingCycle = usePricingStore((s) => s.setBillingCycle);
  const selectedPlan = usePricingStore((s) => s.selectedPlan);
  const setSelectedPlan = usePricingStore((s) => s.setSelectedPlan);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isYearly = billingCycle === 'yearly';
  const handlePlanSelect = useCallback((planId: PlanId) => {
    setSelectedPlan(planId);
    if (planId === 'terzi') {
      setIsModalOpen(true);
    }
  }, [setSelectedPlan]);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-10 lg:py-12">
          <section id="pricing" className="py-16 md:py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">Şeffaf Fiyatlandırma</h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                İhtiyaçlarınıza en uygun planı seçin. Yıllık ödemelerde %20 indirim kazanın.
              </p>
            </div>
            <div className="flex items-center justify-center gap-4 my-8">
              <Label htmlFor="billing-cycle">Aylık</Label>
              <Switch
                id="billing-cycle"
                checked={isYearly}
                onCheckedChange={(checked) => setBillingCycle(checked ? 'yearly' : 'monthly')}
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
                    onSelect={handlePlanSelect}
                  />
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <FAQAccordion />
      <QuoteModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
}