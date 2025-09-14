import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button
        onClick={scrollToTop}
        size="icon"
        className="bg-gradient-to-r from-scrumboks-blue to-scrumboks-blue-dark hover:from-scrumboks-blue-dark hover:to-scrumboks-black text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 rounded-full w-12 h-12"
        aria-label="Terug naar boven"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
};

export default BackToTop;
