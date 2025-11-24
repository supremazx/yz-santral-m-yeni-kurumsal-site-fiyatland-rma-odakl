import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Github, Twitter, Linkedin } from 'lucide-react';
export function Footer() {
  const [email, setEmail] = useState('');
  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Lütfen geçerli bir e-posta adresi girin.');
      return;
    }
    // Mock submission
    localStorage.setItem('newsletter_subscriber', email);
    toast.success('Bültenimize abone olduğunuz için teşekkürler!');
    setEmail('');
  };
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white">YZ Santralım</h3>
            <p className="mt-4 text-sm">İletişim altyapınızı geleceğe taşıyın.</p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="hover:text-white transition-colors"><Github className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-white transition-colors"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white">Hızlı Linkler</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Özellikler</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Fiyatlandırma</a></li>
              <li><a href="mailto:destek@yzsantralim.com" className="hover:text-white transition-colors">Destek</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Yasal</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Hizmet Şartları</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Bültenimize Abone Olun</h4>
            <p className="mt-4 text-sm">En son güncellemeler ve teklifler için abone olun.</p>
            <form onSubmit={handleNewsletterSubmit} className="mt-4 flex gap-2">
              <Input
                type="email"
                placeholder="E-posta adresiniz"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="btn-gradient flex-shrink-0">Abone Ol</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} YZ Santralım. Tüm hakları saklıdır.</p>
          <p className="mt-2">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}