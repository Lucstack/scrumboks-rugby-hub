import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'Over ons', href: '/#about', type: 'anchor' },
    { name: 'Teams', href: '/#teams', type: 'anchor' },
    { name: 'Sponsors', href: '/sponsors', type: 'route' },
    { name: 'Vrijwilligers', href: '/volunteers', type: 'route' },
    { name: 'Lid worden', href: '/membership', type: 'route' },
    { name: 'Contact', href: '/#contact', type: 'anchor' },
  ];

  const handleNavClick = (href: string, type: string) => {
    if (type === 'anchor') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-scrumboks-navy/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-oswald font-bold text-scrumboks-gold hover:text-scrumboks-gold-light transition-colors duration-200 cursor-pointer">
              SCRUMBOKS
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map(item =>
                item.type === 'route' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-scrumboks-white hover:text-scrumboks-gold px-3 py-2 rounded-md text-sm font-roboto-slab font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={e => {
                      e.preventDefault();
                      handleNavClick(item.href, item.type);
                    }}
                    className="text-scrumboks-white hover:text-scrumboks-gold px-3 py-2 rounded-md text-sm font-roboto-slab font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-scrumboks-white hover:text-scrumboks-gold transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-scrumboks-navy/95 backdrop-blur-md rounded-lg mt-2">
              {navItems.map(item =>
                item.type === 'route' ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-scrumboks-white hover:text-scrumboks-gold block px-3 py-2 rounded-md text-base font-roboto-slab font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={e => {
                      e.preventDefault();
                      handleNavClick(item.href, item.type);
                    }}
                    className="text-scrumboks-white hover:text-scrumboks-gold block px-3 py-2 rounded-md text-base font-roboto-slab font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
