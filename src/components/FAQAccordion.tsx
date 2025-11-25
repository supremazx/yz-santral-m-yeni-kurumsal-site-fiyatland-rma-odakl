import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';
const faqs = [
  {
    question: 'Kurulum için herhangi bir donanım gerekiyor mu?',
    answer: 'Hayır, YZ Santralım tamamen bulut tabanlıdır. İnternet bağlantısı olan herhangi bir cihazdan (bilgisayar, mobil telefon) kullanabilirsiniz. Ekstra donanım maliyetiniz olmaz.',
  },
  {
    question: 'Mevcut telefon numaralarımı taşıyabilir miyim?',
    answer: 'Evet, mevcut sabit (coğrafi veya 0850) numaralarınızı YZ Santralım sistemine kolayca taşıyabilirsiniz. Süreç boyunca size destek oluyoruz.',
  },
  {
    question: 'Fiyatlandırma planları arasında geçiş yapabilir miyim?',
    answer: 'Kesinlikle. İşletmenizin ihtiyaçları değiştikçe planlar arasında dilediğiniz zaman yükseltme veya düşürme yapabilirsiniz. Esnek yapıya sahibiz.',
  },
  {
    question: 'Hangi Entegrasyonları sağlıyoruz.',
    answer: 'Tüm paketlerimizde CRM, ERP, Telegram ve API bağlantısına sahip olan tüm platformları destekliyoruz.',
  },
  {
    question: 'Yapay Zeka Hizmetine ücret ödeyecek miyim ?',
    answer: 'Evet, dakika başına yazacağınız yapay zeka prompt ve konuşma uzunluğuna göre bir ücret ödemeniz gerekiyor ama biz bu ücrete ek birşey yansıtmıyoruz.',
  },
  {
    question: 'Teknik destek sağlıyor musunuz?',
    answer: 'Evet, tüm paketlerimizde ücretsiz destek sağlamaktayız. E-posta yoluyla hızlı yanıtlar alabilirsiniz, gelişmiş planlarda öncelikli destek de mevcut.',
  },
  {
    question: 'Sözleşme süresi ne kadar? Taahhüt var mı?',
    answer: 'Aylık ve yıllık ödeme seçeneklerimiz mevcuttur. Yıllık planlarda indirim avantajından faydalanabilirsiniz. Uzun süreli taahhüt zorunluluğumuz yoktur.',
  },
];
export function FAQAccordion() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 dark:bg-background/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Sıkça Sorulan Sorular</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full mt-12">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg text-left">
                <div className="flex items-center">
                  <HelpCircle className="h-5 w-5 mr-3 text-primary shrink-0" />
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}