export type PlanId = 'başlangıç' | 'ortanca' | 'terzi';
export interface PricingPlan {
  id: PlanId;
  title: string;
  description: string;
  monthlyPrice: number | null;
  yearlyPrice: number | null;
  features: string[];
  highlight?: boolean;
  cta: string;
}
export const pricingPlans: PricingPlan[] = [
  {
    id: 'başlangıç',
    title: 'Başlangıç Paketi',
    description: 'Küçük ekipler için temel özellikler.',
    monthlyPrice: 2500,
    yearlyPrice: 24000,
    features: [
      '5 Kullanıc��',
      'Sesli Otomatik Arama',
      'Standart Raporlama',
      'Sınırsız Kampanya Oluşturma',
      'Kendi Numaranızı Getirin',
      'Canlı Arama İstatistikleri',
    ],
    cta: 'Başlayın',
  },
  {
    id: 'ortanca',
    title: 'Ortanca Paketi',
    description: 'Büyüyen işletmeler için gelişmiş araçlar.',
    monthlyPrice: 5000,
    yearlyPrice: 48000,
    features: [
      'Tüm Başlangıç Özellikleri',
      '10 Kullanıcı',
      'Yapay Zeka Ajanı Oluşturma',
      'Yapay Zeka için Bilgi Bankası',
      'Yapay Zeka ile Otomatik Arama',
      'Sesli Otomatik Arama',
      'AI Veri Entegrasyonu',
      'WhatsApp ��zerinden Aylık Ücretle Sınırsız Mesaj Atma',
      'AI Ajan Paketleri',
      'Gelişmiş AI Ajan Oluşturma Seçenekleri',
    ],
    highlight: true,
    cta: 'Ortanca Paketi Seçin',
  },
  {
    id: 'terzi',
    title: 'Terzi Paketi',
    description: 'Kişiye özel çözümler.',
    monthlyPrice: null,
    yearlyPrice: null,
    features: ['Aklımda farklı bir proje mi var? Bizimle iletişime geçiniz!'],
    cta: 'Teklif Alın',
  },
];