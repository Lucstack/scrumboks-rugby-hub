import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'Over ons', href: '/#about', type: 'anchor' },
    { name: 'Teams', href: '/#teams', type: 'anchor' },
    { name: 'Sponsors', href: '/sponsors', type: 'route' },
    { name: 'Vrijwilligers', href: '/volunteers', type: 'route' },
    { name: 'Lid worden', href: '/membership', type: 'route' },
    { name: 'Contact', href: '/#contact', type: 'anchor' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-scrumboks-white/95 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <h1 className="text-2xl font-bold text-scrumboks-blue hover:text-scrumboks-gold transition-colors duration-200 cursor-pointer">
                SCRUMBOKS
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(item =>
                item.type === 'route' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-scrumboks-blue hover:text-scrumboks-gold px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-scrumboks-blue hover:text-scrumboks-gold px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/membership">
              <Button variant="action" size="sm">
                Word lid
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-scrumboks-blue hover:text-scrumboks-gold focus:outline-none focus:text-scrumboks-gold p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-scrumboks-white/95 backdrop-blur-lg border-t border-scrumboks-gray-light/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             {navItems.map(item =>
               item.type === 'route' ? (
                 <Link
                   key={item.name}
                   to={item.href}
                   className="text-scrumboks-blue hover:text-scrumboks-gold block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                   onClick={() => setIsOpen(false)}
                 >
                   {item.name}
                 </Link>
               ) : (
                 <a
                   key={item.name}
                   href={item.href}
                   className="text-scrumboks-blue hover:text-scrumboks-gold block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                   onClick={() => setIsOpen(false)}
                 >
                   {item.name}
                 </a>
               )
             )}
            <div className="px-3 py-2">
              <Link to="/membership">
                <Button variant="action" size="sm" className="w-full">
                  Word lid
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
