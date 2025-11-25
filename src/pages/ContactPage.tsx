import { Mail, Phone } from 'lucide-react';
export function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">Bize Ulaşın</h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Sorularınız, önerileriniz veya işbirliği talepleriniz için bize ulaşmaktan çekinmeyin.
          </p>
        </section>
        <section className="mt-16">
          <div className="max-w-lg mx-auto space-y-8">
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
                <h3 className="text-xl font-semibold">Telefon</h3>
                <p className="text-muted-foreground">Satış ve destek hattı</p>
                <a href="tel:+908502445011" className="text-primary hover:underline">0850 244 50 11</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}