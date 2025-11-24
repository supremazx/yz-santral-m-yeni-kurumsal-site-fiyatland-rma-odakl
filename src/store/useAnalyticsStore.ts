import { create } from 'zustand';
import { persist } from 'zustand/middleware';
type CtaVariant = 'A' | 'B';
interface AnalyticsState {
  ctaVariant: CtaVariant;
  initializeVariant: () => void;
}
export const useAnalyticsStore = create<AnalyticsState>()(
  persist(
    (set, get) => ({
      ctaVariant: 'A',
      initializeVariant: () => {
        // Only initialize if it hasn't been set for the session
        if (!sessionStorage.getItem('cta-variant-initialized')) {
          const variant = Math.random() < 0.5 ? 'A' : 'B';
          set({ ctaVariant: variant });
          sessionStorage.setItem('cta-variant-initialized', 'true');
        } else {
          // Ensure state is aligned with session storage on hydration
          set({ ctaVariant: get().ctaVariant });
        }
      },
    }),
    {
      name: 'analytics-storage', // unique name
    }
  )
);