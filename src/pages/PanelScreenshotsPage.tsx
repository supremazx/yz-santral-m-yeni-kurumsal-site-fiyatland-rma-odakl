import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const screenshots = [
  {
    title: 'Kampanyalar Yönetimi',
    url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Tüm sesli arama ve WhatsApp kampanyalarınızı tek bir yerden yönetin.',
  },
  {
    title: 'AI Ajanları',
    url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Yapay zeka ajanlarınızı oluşturun, eğitin ve performanslarını izleyin.',
  },
  {
    title: 'Detaylı Raporlama',
    url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Çağrı verileri, ajan performansı ve kampanya başarı oranları hakkında derinlemesine bilgi edinin.',
  },
];
export function PanelScreenshotsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">Panel Ekran Görüntüleri</h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Kullanıcı panelimizin önizlemesi – Kampanyalar, AI ajanları ve raporlama araçları.
          </p>
        </section>
        <section className="py-16 md:py-24">
          <div className="flex flex-col items-center gap-8">
            {screenshots.map((screenshot, index) => (
              <motion.div
                key={screenshot.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-full max-w-4xl"
              >
                <Card className="h-full text-center shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden">
                  <div className="p-4">
                    <img
                      src={screenshot.url}
                      alt={screenshot.title}
                      className="w-full h-auto max-h-96 object-cover rounded-lg"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6 pt-2">
                    <h3 className="text-lg font-semibold">{screenshot.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{screenshot.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
        <section className="py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Daha Fazlasını Keşfedin</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            İşletmeniz için neler yapabileceğimizi görmek için planlarımızı inceleyin.
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