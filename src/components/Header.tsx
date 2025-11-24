import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { useIsMobile } from '@/hooks/use-mobile';
const navLinks = [
  { to: '/', text: 'Ana Sayfa' },
  { to: '/features', text: 'Özellikler' },
  { to: '/pricing', text: 'Fiyatlandırma' },
  { to: '/about', text: 'Hakkımızda' },
  { to: '/contact', text: '��letişim' },
];
export function Header() {
  const isMobile = useIsMobile();
  const commonNavClasses = "font-medium text-muted-foreground hover:text-foreground transition-colors";
  const activeNavClasses = "text-primary font-semibold";
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-orange-500 to-red-500" />
            <span className="ml-3 text-xl font-display font-bold">YZ Santralım</span>
          </Link>
          {isMobile ? (
            <div className="flex items-center gap-2">
              <ThemeToggle className="relative top-0 right-0" />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <nav className="flex flex-col space-y-4 mt-8">
                    {navLinks.map(link => (
                      <SheetClose asChild key={link.to}>
                        <NavLink
                          to={link.to}
                          className={({ isActive }) => `${commonNavClasses} text-lg ${isActive ? activeNavClasses : ''}`}
                        >
                          {link.text}
                        </NavLink>
                      </SheetClose>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <>
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) => `${commonNavClasses} ${isActive ? activeNavClasses : ''}`}
                  >
                    {link.text}
                  </NavLink>
                ))}
              </nav>
              <div className="flex items-center gap-4">
                <Button asChild variant="outline" className="hidden sm:inline-flex">
                  <Link to="/contact">
                    <Phone className="mr-2 h-4 w-4" /> İletişim
                  </Link>
                </Button>
                <ThemeToggle className="relative top-0 right-0" />
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}