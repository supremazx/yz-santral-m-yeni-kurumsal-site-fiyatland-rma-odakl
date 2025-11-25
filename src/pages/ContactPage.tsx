import { Mail, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
                <a href="mailto:destek@yzsantralim.com" className="text-primary hover:underline font-medium text-lg">destek@yzsantralim.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full"><Phone className="h-6 w-6 text-primary" /></div>
              <div>
                <h3 className="text-xl font-semibold">Telefon & WhatsApp</h3>
                <p className="text-muted-foreground">Satış ve destek hattı</p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2">
                  <a href="tel:+908502445011" className="text-primary hover:underline font-medium text-lg">0850 244 50 11</a>
                  <Button asChild className="btn-gradient hover:scale-105 transition-transform">
                    <a href="https://wa.me/+908502445011?text=destek%20istiyorum" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp'tan Yaz
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}