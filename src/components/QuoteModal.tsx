import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { usePricingStore } from '@/store/usePricingStore';
import { toast } from 'sonner';
import { api } from '@/lib/api-client';
import { Loader2 } from 'lucide-react';
import { pricingPlans, PlanId } from '@/data/pricing';
const quoteSchema = z.object({
  name: z.string().min(2, { message: 'İsim en az 2 karakter olmalıdır.' }),
  email: z.string().email({ message: 'Geçerli bir e-posta adresi girin.' }),
  message: z.string().optional(),
});
interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const getPlanTitle = (planId: PlanId) => {
  return pricingPlans.find(p => p.id === planId)?.title || planId;
};
export function QuoteModal({ open, onOpenChange }: QuoteModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  const selectedPlan = usePricingStore((s) => s.selectedPlan);
  const form = useForm<z.infer<typeof quoteSchema>>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });
  const onSubmit = useCallback(async (values: z.infer<typeof quoteSchema>) => {
    setIsLoading(true);
    try {
      await api('/api/leads', {
        method: 'POST',
        body: JSON.stringify({ ...values, plan: selectedPlan }),
      });
      toast.success('Teklif talebiniz başarıyla gönderildi! Sizinle en kısa sürede iletişime geçeceğiz.');
      form.reset();
      onOpenChange(false);
    } catch (error) {
      toast.error('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [selectedPlan, form, onOpenChange]);
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Teklif Alın</DialogTitle>
          <DialogDescription>
            Seçtiğiniz '{getPlanTitle(selectedPlan)}' planı için bilgilerinizi doldurun. Ekibimiz sizinle iletişime geçecektir.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Adınız Soyadınız</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-posta Adresiniz</FormLabel>
                  <FormControl>
                    <Input placeholder="ornek@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mesajınız (İsteğe Bağlı)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Eklemek istediğiniz notlar..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={isLoading} className="w-full btn-gradient">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Teklif Talebi Gönder
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}