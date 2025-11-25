import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { PricingPlan, PlanId } from '@/data/pricing';
interface PricingCardProps {
  plan: PricingPlan;
  isYearly: boolean;
  isSelected: boolean;
  onSelect: (id: PlanId) => void;
}
export function PricingCard({ plan, isYearly, isSelected, onSelect }: PricingCardProps) {
  const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  const whatsappMessage = encodeURIComponent(`${plan.title} hakkında bilgi almak istiyorum`);
  const whatsappLink = `https://wa.me/+908502445011?text=${whatsappMessage}`;
  return (
    <Card
      className={cn(
        'flex flex-col rounded-2xl shadow-soft transition-all duration-300 cursor-pointer',
        'hover:shadow-lg hover:-translate-y-1',
        isSelected ? 'border-primary ring-2 ring-primary shadow-lg' : 'border-border',
        plan.highlight && !isSelected && 'border-primary'
      )}
      onClick={() => onSelect(plan.id)}
    >
      {plan.highlight && (
        <div className="bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider text-center py-1 rounded-t-2xl">
          En Popüler
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-display">{plan.title}</CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="text-center mb-6 h-10 flex items-center justify-center">
          {price === null ? (
            <span className="text-2xl md:text-3xl font-bold text-primary">İletişime Geçiniz</span>
          ) : (
            <>
              <span className="text-4xl font-bold">₺{price}</span>
              <span className="text-muted-foreground self-end ml-1">/{isYearly ? 'yıl' : 'ay'}</span>
            </>
          )}
        </div>
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-center">
              <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button
          asChild
          className={cn('w-full', plan.highlight && !isSelected ? 'btn-gradient' : '')}
          variant={isSelected ? 'default' : plan.highlight ? 'default' : 'outline'}
        >
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            {plan.cta}
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}