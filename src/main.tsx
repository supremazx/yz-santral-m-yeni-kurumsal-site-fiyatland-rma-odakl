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
import { LoadingFallback } from '@/components/LoadingFallback';
const HomePage = lazy(() => import('@/pages/HomePage').then(module => ({ default: module.HomePage })));
const AboutPage = lazy(() => import('@/pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then(module => ({ default: module.ContactPage })));
const FAQPage = lazy(() => import('@/pages/FAQPage').then(module => ({ default: module.FAQPage })));
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
    element: createRouteElement(HomePage, "Yzsantralim.com Yapay Zeka Tabanlı IP Santral Hizmet", "İşletmeniz i��in modern, esnek ve güvenilir bulut santral çözümleri."),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/about",
    element: createRouteElement(AboutPage, "Hakkımızda - Yzsantralim.com Yapay Zeka Tabanlı IP Santral Hizmet", "YZ Santralım'ın misyonu, vizyonu ve arkasındaki ekip hakkında daha fazla bilgi edinin."),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/contact",
    element: createRouteElement(ContactPage, "İletişim - Yzsantralim.com Yapay Zeka Tabanlı IP Santral Hizmet", "Satış ve destek ekibimizle iletişime geçin. Sorularınızı yanıtlamaktan mutluluk duyarız."),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faq",
    element: createRouteElement(FAQPage, "Sıkça Sorulan Sorular - Yzsantralim.com Yapay Zeka Tabanlı IP Santral Hizmet", "Sıkça sorulan sorularınıza yanıt bulun. YZ Santralım ile ilgili tüm merak ettiklerinizi buradan öğrenebilirsiniz."),
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