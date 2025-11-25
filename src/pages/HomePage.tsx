import React from 'react';
import { Hero } from '@/components/Hero';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { PricingTable } from '@/components/PricingTable';
const MemoizedFeaturesGrid = React.memo(FeaturesGrid);
const MemoizedPricingTable = React.memo(PricingTable);
export function HomePage() {
  return (
    <>
      <Hero />
      <div id="features">
        <MemoizedFeaturesGrid />
      </div>
      <MemoizedPricingTable />
    </>
  );
}