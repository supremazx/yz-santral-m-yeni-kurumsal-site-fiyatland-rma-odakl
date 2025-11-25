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
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      '5 Kullanıcı',
      'Temel Santral Özellikleri',
      'Mobil Uygulama',
      'Standart Raporlama',
      'Email Desteği',
    ],
    cta: 'Başlayın',
  },
  {
    id: 'orta',
    title: 'Orta',
    description: 'Büyüyen işletmeler için gelişmiş özellikler.',
    monthlyPrice: 249,
    yearlyPrice: 2490,
    features: [
      '20 Kullanıcı',
      'Tüm Başlangıç Özellikleri',
      'Gelişmiş IVR',
      'API Erişimi',
      '��ncelikli Destek',
      'Oto Sesli Arama',
      'Detaylı Raporlama',
      'WhatsApp Entegrasyonu',
      'AI Veri Entegrasyonu',
    ],
    highlight: true,
    cta: 'Orta Planı Seçin',
  },
  {
    id: 'full',
    title: 'Full',
    description: 'Büyük ölçekli operasyonlar için özel çözümler.',
    monthlyPrice: 0, // Custom price
    yearlyPrice: 0, // Custom price
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