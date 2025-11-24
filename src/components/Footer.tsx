import { Github, Twitter, Linkedin } from 'lucide-react';
export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white">Yzsantralim.com</h3>
            <p className="mt-4 text-sm text-balance">İletişim altyapınızı geleceğe taşıyın.</p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors p-2 -m-2"><Github className="h-6 w-6" /></a>
              <a href="#" className="hover:text-primary transition-colors p-2 -m-2"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-primary transition-colors p-2 -m-2"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white">Hızlı Linkler</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/" className="hover:text-primary transition-colors inline-block py-1">Ana Sayfa</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors inline-block py-1">Hakkımızda</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors inline-block py-1">İletişim</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Yasal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors inline-block py-1">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-primary transition-colors inline-block py-1">Hizmet Şartları</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Yzsantralim.com. Tüm hakları saklıdır.</p>
          <p className="mt-2">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}