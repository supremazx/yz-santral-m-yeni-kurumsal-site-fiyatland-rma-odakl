import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css';
import { RootLayout } from '@/components/RootLayout';
import { Skeleton } from '@/components/ui/skeleton';
const HomePage = lazy(() => import('@/pages/HomePage').then(module => ({ default: module.HomePage })));
const FeaturesPage = lazy(() => import('@/pages/FeaturesPage').then(module => ({ default: module.FeaturesPage })));
const PricingPage = lazy(() => import('@/pages/PricingPage').then(module => ({ default: module.PricingPage })));
const AboutPage = lazy(() => import('@/pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then(module => ({ default: module.ContactPage })));
const LoadingFallback = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
    <div className="space-y-8">
      <Skeleton className="h-32 w-full" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
      </div>
    </div>
  </div>
);
const createRouteElement = (Component: React.ElementType, title: string, description: string) => (
  <RootLayout title={title} description={description}>
    <Suspense fallback={<LoadingFallback />}>
      <Component />
    </Suspense>
  </RootLayout>
);
const router = createBrowserRouter([
  {
    path: "/",
    element: createRouteElement(HomePage, "YZ Santralım - Akıllı Bulut Santral Ç��zümleri", "İşletmeniz için modern, esnek ve güvenilir bulut santral çözümleri."),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/features",
    element: createRouteElement(FeaturesPage, "Özellikler - YZ Santralım", "Gelişmiş IVR, detaylı raporlama ve daha fazlasıyla YZ Santralım'ın tüm özelliklerini keşfedin."),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/pricing",
    element: createRouteElement(PricingPage, "Fiyatlandırma - YZ Santralım", "İşletmenizin ihtiyaçlarına ve bütçenize en uygun şeffaf fiyatlandırma planlarımızı inceleyin."),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/about",
    element: createRouteElement(AboutPage, "Hakkımızda - YZ Santralım", "YZ Santralım'ın misyonu, vizyonu ve arkasındaki ekip hakkında daha fazla bilgi edinin."),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/contact",
    element: createRouteElement(ContactPage, "İletişim - YZ Santralım", "Satış ve destek ekibimizle iletişime geçin. Sorularınızı yanıtlamaktan mutluluk duyarız."),
    errorElement: <RouteErrorBoundary />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  </StrictMode>,
);