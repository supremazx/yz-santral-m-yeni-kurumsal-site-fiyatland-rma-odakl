# YZ Santralım - Modern Kurumsal Site
YZ Santralım için modern, fiyatlandırma odaklı ve görsel açıdan güçlü bir kurumsal web sitesi. Mobil öncelikli, shadcn/ui ve Tailwind ile inşa edilmiş, kullanıcı deneyimini ön planda tutan bir React uygulaması.
[cloudflarebutton]
## Özellikler
- **Görsel Mükemmellik**: Hero bölümü, özellik kartları, fiyatlandırma tabloları ve footer ile minimalist, yüksek polish UI.
- **Fiyatlandırma Odaklı**: Üç kademeli planlar (Starter, Scale, Enterprise) ile aylık/yıllık toggle, interaktif kartlar ve teklif alma modalı.
- **Mobil-First Tasarım**: Tüm bileşenler responsive, 44px dokunma hedefleri ve akıcı geçişler.
- **��nteraktif Unsurlar**: Micro-interactions, hover efektleri, sticky CTA bar ve form mock'ları ile kullanıcıyı yönlendiren akış.
- **Güven ve Netlik**: Açık fiyatlandırma, referans alanı ve newsletter entegrasyonu.
- **Demo Hazır**: İlk fazda tam interaktif önizleme, plan seçimi ve mock submit'ler.
## Teknoloji Yığını
- **Frontend**: React 18, React Router 6, TypeScript
- **Styling**: Tailwind CSS 3, shadcn/ui bileşenleri, Framer Motion (animasyonlar)
- **State Management**: Zustand (küçük state için)
- **UI Utils**: Lucide React (ikonlar), Sonner (toast'lar)
- **Backend**: Cloudflare Workers (Hono), Durable Objects (persistence)
- **Veri Yönetimi**: @tanstack/react-query (isteğe bağlı asenkron)
- **Diğer**: Recharts (gelecek görselleştirmeler), Vite (build tool)
## Kurulum
Proje, Bun ile kurulumu destekler. Node.js gereksinimlerini karşılayan bir ortamda çalıştırın.
1. **Bağımlılıkları Yükleyin**:
   ```bash
   bun install
   ```
2. **Geliştirme Sunucusunu Başlatın**:
   ```bash
   bun run dev
   ```
   Uygulama varsayılan olarak `http://localhost:3000` adresinde çalışır.
3. **Yapı Kontrolü**:
   ```bash
   bun run lint
   ```
## Kullanım
### Temel Komutlar
- **Geliştirme**: `bun run dev` - Hot reload ile yerel sunucu.
- **Build**: `bun run build` - Production build'i oluşturur (`dist` klasöründe).
- **Önizleme**: `bun run preview` - Build edilmiş sürümü yerel olarak test edin.
- **Dağıtım**: `bun run deploy` - Cloudflare Workers'a deploy edin (aşağıya bakın).
- **TypeScript Türleri**: `bun run cf-typegen` - Worker bindings'leri güncelleyin.
### Sayfa Yapısı
- **Ana Sayfa (/)**: Hero, özellikler, fiyatlandırma özeti ve CTA'lar.
- **Fiyatlandırma (/pricing)**: Detaylı plan karşılaştırması ve teklif modalı.
- **Özellikler (/features)**: Fayda kartları ile ürün detayları.
- **İletişim (/contact)**: Form ve newsletter mock'u.
- **Hakkımızda (/about)**: Şirket tanıtımı.
Uygulama, React Router ile SPA olarak çalışır. Fiyat toggle'ları client-side state ile yönetilir.
## Geliştirme
### Proje Yapısı
```
src/
├── components/     # UI bileşenleri (shadcn/ui + custom)
├── hooks/          # React hook'ları (theme, mobile)
├── lib/            # Utils (API client, error reporter)
├── pages/          # Router sayfaları (HomePage.tsx override edin)
└── main.tsx        # Entry point
worker/             # Backend routes ve entities
shared/             # Paylaşılan tipler ve mock data
```
### En İyi Uygulamalar
- **shadcn/ui Kullanımı**: Bileşenleri `@/components/ui/*` import edin, Tailwind ile compose edin.
- **State Yönetimi**: Küçük state'ler için local `useState`; shared için primitive selectors ile Zustand (örn: `useStore(s => s.value)`).
- **API Çağrıları**: `/api/*` endpoint'leri için `api` helper'ını kullanın (`src/lib/api-client.ts`).
- **Responsive Tasarım**: Tailwind breakpoints: `sm:`, `md:`, `lg:`, `xl:`.
- **Animasyonlar**: Framer Motion ile micro-interactions ekleyin, 60fps hedefleyin.
- **Hata Yönetimi**: ErrorBoundary ve RouteErrorBoundary mevcut; toast'lar için Sonner kullanın.
Backend değişiklikleri için `worker/user-routes.ts`'yi genişletin. Durable Objects pattern'ini `worker/entities.ts` ile takip edin.
### Katkı Sağlama
1. Fork'layın ve yerel clone alın.
2. `bun install` ile bağımlılıkları yükleyin.
3. Değişiklikleri `main` branch'inde geliştirin.
4. Lint ve test edin: `bun run lint`.
5. Pull request açın.
## Dağıtım
Proje, Cloudflare Workers ile deploy edilir. Ücretsiz hesap yeterli.
1. **Cloudflare Hesabı**: [workers.cloudflare.com](https://workers.cloudflare.com) adresinde giriş yapın.
2. **Wrangler Kurulumu**:
   ```bash
   bun add -g wrangler
   wrangler auth login
   ```
3. **Deploy**:
   ```bash
   bun run deploy
   ```
   Bu, build yapar ve Workers'a yükler. Preview URL'si konsolda gösterilir.
4. **Özel Domain**: `wrangler.toml` veya dashboard'da domain bağlayın.
5. **Ortam Değişkenleri**: `wrangler secret put <KEY>` ile ekleyin (örn: API anahtarları).
Otomatik deploy için GitHub entegrasyonunu Workers dashboard'undan etkinleştirin.
[cloudflarebutton]
## Lisans
MIT Lisansı. Detaylar için `LICENSE` dosyasını inceleyin (varsa).
## Destek
Sorular için [Cloudflare Docs](https://developers.cloudflare.com/workers/) veya proje issues'ını kullanın.