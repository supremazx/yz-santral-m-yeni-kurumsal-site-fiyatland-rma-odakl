import { FAQAccordion } from '@/components/FAQAccordion';
export function FAQPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12">
        <section className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground">Sıkça Sorulan Sorular</h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            YZ Santralım hizmetleri hakkında merak ettiğiniz her şey burada. Aradığınız cevabı bulamazsanız, bizimle iletişime geçmekten çekinmeyin.
          </p>
        </section>
        <div className="mt-8">
          <FAQAccordion />
        </div>
      </div>
    </div>
  );
}