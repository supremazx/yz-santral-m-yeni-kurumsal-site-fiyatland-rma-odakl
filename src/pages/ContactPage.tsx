import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { api } from '@/lib/api-client';
import { Loader2, Mail, Phone, MapPin } from 'lucide-react';
import { useState, useCallback } from 'react';
import { usePricingStore } from '@/store/usePricingStore';
const contactSchema = z.object({
  name: z.string().min(2, { message: 'İsim en az 2 karakter olmalıdır.' }),
  email: z.string().email({ message: 'Geçerli bir e-posta adresi girin.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Mesajınız en az 10 karakter olmalıdır.' }),
});
export function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const selectedPlan = usePricingStore((s) => s.selectedPlan);
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', phone: '', message: '' },
  });
  const onSubmit = useCallback(async (values: z.infer<typeof contactSchema>) => {
    setIsLoading(true);
    try {
      await api('/api/leads', {
        method: 'POST',
        body: JSON.stringify({ ...values, plan: selectedPlan }),
      });
      toast.success('Mesajınız başarıyla gönderildi! Sizinle en kısa sürede iletişime geçeceğiz.');
      form.reset();
    } catch (error) {
      toast.error('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  }, [selectedPlan, form]);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">İletişime Geçin</h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Sorularınız, önerileriniz veya işbirliği talepleriniz için bize ulaşmaktan çekinmeyin.
          </p>
        </section>
        <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full"><Mail className="h-6 w-6 text-primary" /></div>
              <div>
                <h3 className="text-xl font-semibold">E-posta</h3>
                <p className="text-muted-foreground">Genel sorular için</p>
                <a href="mailto:destek@yzsantralim.com" className="text-primary hover:underline">destek@yzsantralim.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full"><Phone className="h-6 w-6 text-primary" /></div>
              <div>
                <h3 className="text-xl font-semibold">Bize Ulaşın</h3>
                <p className="text-muted-foreground">Satış ve destek hattı</p>
                <a href="tel:+908502445011" className="text-primary hover:underline">0850 244 50 11</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full"><MapPin className="h-6 w-6 text-primary" /></div>
              <div>
                <h3 className="text-xl font-semibold">Adres</h3>
                <p className="text-muted-foreground">Teknopark, İstanbul, Türkiye</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Haritada Gör</a>
              </div>
            </div>
          </div>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="name" render={({ field }) => (
                  <FormItem><FormLabel>Adınız Soyadınız</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="email" render={({ field }) => (
                  <FormItem><FormLabel>E-posta Adresiniz</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="phone" render={({ field }) => (
                  <FormItem><FormLabel>Telefon (İsteğe Bağlı)</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <FormField control={form.control} name="message" render={({ field }) => (
                  <FormItem><FormLabel>Mesajınız</FormLabel><FormControl><Textarea rows={5} {...field} /></FormControl><FormMessage /></FormItem>
                )} />
                <Button type="submit" disabled={isLoading} className="w-full btn-gradient">
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Mesajı Gönder
                </Button>
              </form>
            </Form>
          </div>
        </section>
      </div>
    </div>
  );
}