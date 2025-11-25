export type PlanId = 'başlangıç' | 'orta' | 'full';
export interface PricingPlan {
  id: PlanId;
  title: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlight?: boolean;
  cta: string;
}
export const pricingPlans: PricingPlan[] = [
  {
    id: 'başlangıç',
    title: 'Başlangıç',
    description: 'Küçük ekipler ve yeni başlayanlar için ideal.',
    monthlyPrice: 2500,
    yearlyPrice: 24000,
    features: [
      '5 Kullanıcı',
      'Sesli Otomatik Arama',
      'Standart Raporlama',
      'Sınırsız Kampanya Oluşturma',
      'Kendi Numaranızı Getirin',
      'Canlı Arama İstatistikleri',
    ],
    cta: 'Başlayın',
  },
  {
    id: 'orta',
    title: 'Orta',
    description: 'Büyüyen işletmeler için gelişmiş özellikler.',
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
    ],
    highlight: true,
    cta: 'Orta Planı Seçin',
  },
  {
    id: 'full',
    title: 'Full',
    description: 'Büyük ölçekli operasyonlar için özel çözümler.',
    monthlyPrice: 10000,
    yearlyPrice: 96000,
    features: [
      'Sınırsız Kullanıcı',
      'Tüm Orta Plan Özellikleri',
      'Özel Entegrasyonlar',
      'Oto Sesli Arama (Gelişmiş)',
      '7/24 Teknik Destek',
      'Kişisel Müşteri Temsilcisi',
      'WhatsApp Entegrasyonu (Gelişmiş)',
      'AI Veri Entegrasyonu',
    ],
    cta: 'Teklif Alın',
  },
];