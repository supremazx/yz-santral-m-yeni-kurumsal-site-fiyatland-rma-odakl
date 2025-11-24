import React from 'react';
import { Hero } from '@/components/Hero';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { PricingTable } from '@/components/PricingTable';
import { Testimonials } from '@/components/Testimonials';
const MemoizedFeaturesGrid = React.memo(FeaturesGrid);
const MemoizedPricingTable = React.memo(PricingTable);
const MemoizedTestimonials = React.memo(Testimonials);
export function HomePage() {
  return (
    <>
      <Hero />
      <div id="features">
        <MemoizedFeaturesGrid />
      </div>
      <MemoizedTestimonials />
      <MemoizedPricingTable />
    </>
  );
}