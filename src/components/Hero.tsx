import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-rugby-action.jpg';
import { useState, useEffect } from 'react';
import { ChevronDown, Zap, Shield, Trophy } from 'lucide-react';

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
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Professional Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-[120%] bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />
        
        {/* Professional Dark Overlay - Brand Guide Compliant */}
        <div className="absolute inset-0 bg-gradient-to-br from-scrumboks-black/85 via-scrumboks-navy/80 to-scrumboks-black/90" />
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        {/* Logo Silhouette - Subtle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Shield
            className="w-96 h-96 text-scrumboks-navy"
            style={{
              transform: `rotate(${scrollY * 0.02}deg)`,
              filter: 'blur(3px)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`space-y-8 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}
        >
          {/* Professional Badge */}
          <div className="glass-gold rounded-2xl px-8 py-4 mb-6 inline-block">
            <div className="flex items-center gap-3">
              <Trophy className="w-6 h-6 text-scrumboks-navy" />
              <span className="text-scrumboks-navy font-bold text-lg tracking-wide">
                50 JAAR RUGBY TRADITIE
              </span>
              <Shield className="w-6 h-6 text-scrumboks-navy" />
            </div>
          </div>

          {/* Strong Main Heading - No Gradient */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-scrumboks-white leading-tight tracking-tight">
            <span className="block font-light text-scrumboks-white/80">SCRUMBOKS</span>
            <span className="block font-black">RUGBY CLUB</span>
          </h1>

          {/* Professional Subheading */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-scrumboks-white/90 max-w-5xl mx-auto leading-relaxed font-medium">
            <span className="text-scrumboks-gold font-bold">Authentieke rugby ervaring.</span>{' '}
            Geen poespas, wel passie.
            <span className="block mt-4 text-xl text-scrumboks-white/80">
              Een echte rugby community sinds 1976.
            </span>
          </p>

          {/* Professional Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <Link to="/xperience-rugby">
              <Button
                size="xl"
                className="w-full sm:w-auto btn-hover-gradient text-scrumboks-navy font-black text-xl px-10 py-6 rounded-2xl border-2 border-scrumboks-gold/50 hover:border-scrumboks-gold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center space-x-3">
                  <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>PROBEER RUGBY - €15</span>
                  <Shield className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-300" />
                </span>
              </Button>
            </Link>

            <Link to="/membership">
              <Button
                size="xl"
                className="w-full sm:w-auto glass-dark text-scrumboks-gold font-black text-xl px-10 py-6 rounded-2xl border-2 border-scrumboks-navy/50 hover:border-scrumboks-navy shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>WORD LID</span>
                </span>
              </Button>
            </Link>

            <a href="#teams">
              <Button
                variant="outline"
                size="xl"
                className="w-full sm:w-auto glass border-2 border-scrumboks-white/30 hover:border-scrumboks-white text-scrumboks-white font-bold text-lg px-8 py-6 rounded-2xl transform hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                  <span>ONZE TEAMS</span>
                </span>
              </Button>
            </a>
          </div>

          {/* Professional Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 max-w-6xl mx-auto">
            <div className="glass-dark rounded-2xl p-6 card-3d group">
              <div className="text-5xl lg:text-6xl font-black text-scrumboks-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-scrumboks-white font-bold text-lg mb-1">
                SPELERS
              </div>
              <div className="text-scrumboks-white/70 text-sm">
                Actieve Leden
              </div>
            </div>

            <div className="glass-gold rounded-2xl p-6 card-3d group">
              <div className="text-5xl lg:text-6xl font-black text-scrumboks-navy mb-2 group-hover:scale-110 transition-transform duration-300">
                6
              </div>
              <div className="text-scrumboks-navy font-bold text-lg mb-1">
                TEAMS
              </div>
              <div className="text-scrumboks-navy/70 text-sm">
                Voor alle leeftijden
              </div>
            </div>

            <div className="glass-dark rounded-2xl p-6 card-3d group">
              <div className="text-5xl lg:text-6xl font-black text-scrumboks-gold mb-2 group-hover:scale-110 transition-transform duration-300">
                50
              </div>
              <div className="text-scrumboks-white font-bold text-lg mb-1">
                JAAR
              </div>
              <div className="text-scrumboks-white/70 text-sm">
                Traditie & Kwaliteit
              </div>
            </div>

            <div className="glass-gold rounded-2xl p-6 card-3d group">
              <div className="text-5xl lg:text-6xl font-black text-scrumboks-navy mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-scrumboks-navy font-bold text-lg mb-1">
                PASSIE
              </div>
              <div className="text-scrumboks-navy/70 text-sm">
                Pure Toewijding
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 glass rounded-full p-4 group hover:bg-scrumboks-gold/10 transition-all duration-300 cursor-pointer"
        onClick={() =>
          document
            .querySelector('#about')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <ChevronDown className="w-6 h-6 text-scrumboks-white group-hover:text-scrumboks-gold animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
