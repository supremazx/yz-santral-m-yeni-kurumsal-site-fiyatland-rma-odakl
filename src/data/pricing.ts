export type PlanId = 'starter' | 'scale' | 'enterprise';
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
    id: 'starter',
    title: 'Starter',
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
    id: 'scale',
    title: 'Scale',
    description: 'Büyüyen işletmeler için gelişmiş özellikler.',
    monthlyPrice: 249,
    yearlyPrice: 2490,
    features: [
      '20 Kullanıcı',
      'Tüm Starter Özellikleri',
      'Gelişmiş IVR',
      'API Erişimi',
      'Öncelikli Destek',
      'Oto Sesli Arama',
      'Detaylı Raporlama',
    ],
    highlight: true,
    cta: 'Planı Seç',
  },
  {
    id: 'enterprise',
    title: 'Enterprise',
    description: 'Büyük ölçekli operasyonlar için özel çözümler.',
    monthlyPrice: 0, // Custom price
    yearlyPrice: 0, // Custom price
    features: [
      'Sınırsız Kullanıcı',
      'Tüm Scale Özellikleri',
      'Özel Entegrasyonlar',
      'Oto Sesli Arama (Gelişmiş)',
      '7/24 Teknik Destek',
      'Kişisel Müşteri Temsilcisi',
    ],
    cta: 'Teklif Alın',
  },
];