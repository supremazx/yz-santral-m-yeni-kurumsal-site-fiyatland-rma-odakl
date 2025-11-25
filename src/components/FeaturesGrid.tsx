import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, ShieldCheck, BarChart, Users, PhoneCall, Cloud, MessageCircle, ExternalLink, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
const features = [
  {
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: 'Oto Sesli Arama',
    description: 'Sesli arama için izin aldığınız müşterileriniz, üyelerinizi sınırsız bir şekilde aramanıza ses kaydı ekleyerek veya Yapay zeka ajanı ekleyerek arayabilirsiniz.',
  },
  {
    icon: <MessageCircle className="h-8 w-8 text-primary" />,
    title: 'WhatsApp Entegrasyonu',
    description: 'Müşterilerinizle WhatsApp üzerinden doğrudan iletişim kurun ve santral çağrılarını mesajlara dönüştürün.',
  },
  {
    icon: <ExternalLink className="h-8 w-8 text-primary" />,
    title: 'AI Veri Entegrasyonu',
    description: 'Yapay Zekâ\'dan aldığınız bilgileri kendi CRM\'inize, Google Sheets\'e veya Telegram\'ınıza gönderin.',
  },
  {
    icon: <Cloud className="h-8 w-8 text-primary" />,
    title: 'Bulut Tabanlı Altyap��',
    description: 'Donanım maliyeti olmadan, internet olan her yerden santralinize erişin.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Hızlı Kurulum',
    description: 'Dakikalar içinde aktif olan santralinizle hemen çalışmaya başlayın.',
  },
  {
    icon: <PhoneCall className="h-8 w-8 text-primary" />,
    title: 'Gelişmiş IVR',
    description: 'Müşterilerinizi akıllı sesli yanıt sistemi ile doğru departmana yönlendirin.',
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'Detaylı Raporlama',
    description: 'Çağrı verilerinizi analiz ederek performansınızı ve verimliliğinizi artırın.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Ekip Yönetimi',
    description: 'Kullanıcılarınızı kolayca yönetin, yetkilendirin ve performanslarını izleyin.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Yüksek Güvenlik',
    description: 'Verileriniz ve görüşmeleriniz endüstri standardı güvenlik protokolleri ile korunur.',
  },
];
export function FeaturesGrid() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 dark:bg-background/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Neden Yzsantralim.com ?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            İşletmenizin iletişim ihtiyaçları için tasarlanmış güçlü ve esnek özellikler.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full text-center shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl">
                <CardHeader className="items-center">
                  <div className="bg-primary/10 p-4 rounded-full">{feature.icon}</div>
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}