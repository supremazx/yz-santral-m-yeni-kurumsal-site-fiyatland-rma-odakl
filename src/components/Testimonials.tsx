import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
const testimonials = [
  {
    name: 'Ayşe Yılmaz',
    title: 'CEO, Teknoloji A.Ş.',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    quote: 'YZ Santralım sayesinde iletişim altyapımızı modernize ettik. Müşteri memnuniyetimiz ve ekip verimliliğimiz gözle görülür şekilde arttı. Kurulum süreci inanılmaz hızlıydı!',
  },
  {
    name: 'Mehmet Kaya',
    title: 'Operasyon Müdürü, Lojistik Ltd.',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 5,
    quote: 'Farklı şubelerimiz arasındaki iletişimi tek bir platformda toplamak harika oldu. Raporlama özellikleri sayesinde çağrı merkezimizin performansını anlık olarak takip edebiliyoruz.',
  },
  {
    name: 'Fatma Demir',
    title: 'Kurucu, E-Ticaret Platformu',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    quote: 'Büyüyen e-ticaret operasyonumuz için esnek ve ölçeklenebilir bir çözüme ihtiyacımız vardı. YZ Santralım, tüm beklentilerimizi karşıladı. Özellikle IVR özelliği çok işimize yaradı.',
  },
];
export function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold">Müşterilerimiz Ne Diyor?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Başarı hikayelerine ilham veren iş ortaklarımızın görüşleri.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between rounded-2xl shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </CardContent>
                <div className="flex items-center p-6 bg-muted/50 dark:bg-muted/20 rounded-b-2xl">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}