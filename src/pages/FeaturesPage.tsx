import { FeaturesGrid } from '@/components/FeaturesGrid';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
export function FeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">Tüm Özellikler</h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            İşletmenizin iletişimini bir üst seviyeye taşıyacak güçlü araç setimizle tanışın.
          </p>
        </section>
        <section className="py-16">
          <FeaturesGrid />
        </section>
        <section className="py-16 md:py-24 bg-muted/30 dark:bg-background/30 rounded-2xl">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-4">Oto Sesli Arama Özelliği</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sesli komutlarla otomatik arama yaparak müşterilerinizi departmanlara hızlıca yönlendirin. Bu özellik, çağrı sürelerini kısaltır ve müşteri memnuniyetini artırır. Scale ve Enterprise planlarında mevcuttur.
            </p>
          </div>
        </section>
        <section className="py-16 text-center bg-muted/30 dark:bg-background/30 rounded-2xl mt-16">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Demo Videomuzu İzleyin</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                YZ Santralım'ın nasıl çalıştığını ve işletmenize nasıl fayda sağlayabileceğini görün.
            </p>
            <div className="aspect-video max-w-4xl mx-auto mt-8 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </section>
        <section className="py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Hazır mısınız?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            İhtiyaçlarınıza en uygun planı seçerek hemen başlayın.
          </p>
          <Button asChild size="lg" className="mt-8 btn-gradient">
            <Link to="/pricing">
              Fiyatlandırmayı Gör <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </section>
      </div>
    </div>
  );
}