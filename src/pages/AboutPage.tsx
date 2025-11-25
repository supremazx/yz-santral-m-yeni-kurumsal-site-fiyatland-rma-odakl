import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
const timelineEvents = [
  { year: '2021', title: 'Fikir Doğuşu', description: 'İletişimdeki boşluğu fark ettik ve modern bir çözüm için yola çıktık.' },
  { year: '2022', title: 'İlk Prototip', description: 'Çekirdek teknolojiyi geliştirdik ve ilk başarılı testleri gerçekleştirdik.' },
  { year: '2023', title: 'Lansman', description: 'YZ Santralım, ilk müşterileriyle buluştu ve pazarda yerini aldı.' },
  { year: '2024', title: 'Büyüme', description: 'Ekibimizi genişlettik ve yüzlerce işletmeye hizmet vermeye başladık.' },
];
const founders = [
    { name: 'Yusuf Rende', title: 'Kurucu & CEO', avatar: 'https://i.pravatar.cc/150?img=6' },
];
export function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">Hakkımızda</h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            VoIP Piyasasında <span className="font-bold text-foreground/90">18 yıllık</span> deneyimiyle şirketinizin yanında. (Eski Voiprehberi.com kurucusu)
          </p>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            YZ Santralım olarak, işletmelerin iletişimini basitleştirmek ve güçlendirmek için en son teknolojiyi kullanıyoruz. Misyonumuz, her ölçekteki şirkete erişilebilir, güvenilir ve yenilikçi bulut santral çözümleri sunmaktır.
          </p>
        </section>
        <section className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="shadow-soft">
              <CardHeader>
                <Building className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="mt-4">Misyonumuz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Yapay Zekalı İletişim teknolojilerinin kolay kullanımlı ve ulaşılabilir olmasıını hedefliyoruz.</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardHeader>
                <Target className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="mt-4">Vizyonumuz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Türkiye'nin en çok tercih edilen ve en yenilikçi Yapay Zeka Destekli Bulut Santral Sağlayıcısı olmayı hedefliyoruz.</p>
              </CardContent>
            </Card>
            <Card className="shadow-soft">
              <CardHeader>
                <Users className="h-10 w-10 mx-auto text-primary" />
                <CardTitle className="mt-4">Ekibimiz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Alanında uzman, tutkulu ve dinamik bir ekiple geleceği inşa ediyoruz.</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-center mb-12">Kurucularımız</h2>
            <div className="flex justify-center gap-8">
                {founders.map(founder => (
                    <Card key={founder.name} className="w-full max-w-sm text-center p-6 shadow-soft">
                        <Avatar className="w-24 h-24 mx-auto mb-4">
                            <AvatarImage src={founder.avatar} />
                            <AvatarFallback>{founder.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <h3 className="text-xl font-semibold">{founder.name}</h3>
                        <p className="text-primary">{founder.title}</p>
                    </Card>
                ))}
            </div>
        </section>
      </div>
    </div>
  );
}