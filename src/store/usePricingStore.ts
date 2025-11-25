import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { PlanId } from '@/data/pricing';
type BillingCycle = 'monthly' | 'yearly';
interface PricingState {
  billingCycle: BillingCycle;
  selectedPlan: PlanId;
  setBillingCycle: (cycle: BillingCycle) => void;
  setSelectedPlan: (planId: PlanId) => void;
}
export const usePricingStore = create<PricingState>()(
  persist(
    (set) => ({
      billingCycle: 'monthly',
      selectedPlan: 'orta',
      setBillingCycle: (cycle) => set({ billingCycle: cycle }),
      setSelectedPlan: (planId) => set({ selectedPlan: planId }),
    }),
    {
      name: 'pricing-storage', // name of the item in the storage (must be unique)
    }
  )
);