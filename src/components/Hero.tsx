import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/hero-rugby.jpg';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-[120%] bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.5}px)`,
            willChange: 'transform'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-scrumboks-navy/80 via-scrumboks-navy/60 to-scrumboks-navy/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block bg-scrumboks-gold/20 backdrop-blur-sm border border-scrumboks-gold/30 rounded-full px-6 py-2 mb-4">
          <p className="text-scrumboks-gold font-roboto-slab font-semibold text-lg">🏠 Welkom bij jouw nieuwe rugby thuis</p>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-oswald font-bold text-scrumboks-white leading-tight">
          <span className="block">SAMEN STERK,</span>
          <span className="block text-scrumboks-gold drop-shadow-lg">SAMEN PLEZIER</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl text-scrumboks-white/90 max-w-4xl mx-auto leading-relaxed font-inter">
          Bij de Scrumboks vind je meer dan rugby - je vindt een familie. <span className="text-scrumboks-gold font-medium"> Al 50 jaar</span> bouwen wij
          aan verhalen, vriendschappen en onvergetelijke momenten op en naast het veld.
          <span className="block mt-2 text-lg text-scrumboks-white/80">🌟 Waar elke tackle een verhaal wordt en elke try gevierd wordt als teamoverwinning</span>
        </p>
        
        <button 
          onClick={() => window.open('https://50jaar.scrumboks.nl', '_blank')} 
          className="bg-scrumboks-gold/25 backdrop-blur-sm border-2 border-scrumboks-gold/40 rounded-2xl p-6 mt-8 mx-auto max-w-2xl hover:bg-scrumboks-gold/35 hover:border-scrumboks-gold/60 transition-all duration-500 transform hover:scale-105 cursor-pointer group"
        >
          <div className="flex items-center justify-center space-x-3">
            <span className="text-4xl group-hover:animate-bounce">🎉</span>
            <div className="text-center">
              <p className="text-scrumboks-gold font-oswald font-bold text-xl mb-1">2025: Gouden Jubileum!</p>
              <p className="text-scrumboks-white/90 text-sm font-inter">50 jaar verhalen, vriendschappen & rugby passie</p>
            </div>
            <span className="text-4xl group-hover:animate-bounce">🏆</span>
          </div>
        </button>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Link to="/xperience-rugby">
            <Button 
              variant="hero" 
              size="xl" 
              className="w-full sm:w-auto bg-scrumboks-gold hover:bg-scrumboks-gold-dark text-scrumboks-navy font-oswald font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              🏉 Probeer Rugby - €15
            </Button>
          </Link>
          
          <Link to="/membership">
            <Button 
              variant="action" 
              size="xl" 
              className="w-full sm:w-auto bg-scrumboks-navy hover:bg-scrumboks-navy-dark text-scrumboks-white font-oswald font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Word lid van ons team
            </Button>
          </Link>
          
          <a href="/scrumboks-rugby-hub/#teams">
            <Button 
              variant="minimal" 
              size="xl" 
              className="w-full sm:w-auto border-2 border-scrumboks-white/40 hover:border-scrumboks-white hover:bg-scrumboks-white/20 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 group font-roboto-slab"
            >
              Bekijk onze teams
            </Button>
          </a>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-oswald font-bold text-scrumboks-gold">50+</div>
            <div className="text-scrumboks-white/80 text-sm lg:text-base font-inter">Leden</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-oswald font-bold text-scrumboks-gold">8</div>
            <div className="text-scrumboks-white/80 text-sm lg:text-base font-inter">Teams</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-oswald font-bold text-scrumboks-gold">50</div>
            <div className="text-scrumboks-white/80 text-sm lg:text-base font-inter">Jaar jubileum</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-oswald font-bold text-scrumboks-gold">100%</div>
            <div className="text-scrumboks-white/80 text-sm lg:text-base font-inter">Plezier</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-scrumboks-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-scrumboks-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;