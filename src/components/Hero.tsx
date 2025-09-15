import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-rugby-action.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Rugby spelers in actie op het veld"
          className="w-full h-full object-cover"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-scrumboks-black/60 via-scrumboks-blue-dark/50 to-scrumboks-yellow/20" />
      </div>

      {/* Scrumboks Logo Silhouette - Subtle Background */}
      <div className="absolute inset-0 z-5 opacity-5 overflow-hidden">
        <div 
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-scrumboks-yellow/30 transform rotate-12 opacity-20"
          style={{
            clipPath: "polygon(50% 0%, 65% 25%, 90% 25%, 75% 45%, 85% 75%, 50% 60%, 15% 75%, 25% 45%, 10% 25%, 35% 25%)",
            animation: "float 20s ease-in-out infinite"
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-scrumboks-blue/20 transform -rotate-6 opacity-30"
          style={{
            clipPath: "polygon(50% 0%, 65% 25%, 90% 25%, 75% 45%, 85% 75%, 50% 60%, 15% 75%, 25% 45%, 10% 25%, 35% 25%)",
            animation: "float 25s ease-in-out infinite reverse"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
        <div className="space-y-6">
          {/* Warm Welcome */}
          <div className="inline-block bg-scrumboks-yellow/20 backdrop-blur-sm border border-scrumboks-yellow/30 rounded-full px-6 py-2 mb-4">
            <p className="text-scrumboks-yellow font-semibold text-lg">
              🏠 Welkom bij jouw nieuwe rugby thuis
            </p>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-scrumboks-white leading-tight">
            <span className="block">SAMEN STERK,</span>
            <span className="block text-scrumboks-yellow drop-shadow-lg">SAMEN PLEZIER</span>
          </h1>

          {/* Warmer, more personal subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-scrumboks-white/90 max-w-4xl mx-auto leading-relaxed">
            Bij de Scrumboks vind je meer dan rugby - je vindt een familie. 
            <span className="text-scrumboks-yellow font-medium"> Al 50 jaar</span> bouwen wij 
            aan verhalen, vriendschappen en onvergetelijke momenten op en naast het veld.
            <span className="block mt-2 text-lg text-scrumboks-white/80">
              🌟 Waar elke tackle een verhaal wordt en elke try gevierd wordt als teamoverwinning
            </span>
          </p>

          {/* Enhanced Jubileum Banner with warmth */}
          <div className="bg-gradient-to-r from-scrumboks-yellow/25 via-scrumboks-gold/20 to-scrumboks-yellow/25 backdrop-blur-sm border-2 border-scrumboks-yellow/40 rounded-2xl p-6 mt-8 mx-auto max-w-2xl hover:from-scrumboks-yellow/35 hover:via-scrumboks-gold/30 hover:to-scrumboks-yellow/35 hover:border-scrumboks-yellow/60 transition-all duration-500 transform hover:scale-105 cursor-pointer group"
            onClick={() => window.open('https://50jaar.scrumboks.nl', '_blank')}
          >
            <div className="flex items-center justify-center space-x-3">
              <span className="text-4xl group-hover:animate-bounce">🎉</span>
              <div className="text-center">
                <p className="text-scrumboks-yellow font-bold text-xl mb-1">
                  2025: Gouden Jubileum!
                </p>
                <p className="text-scrumboks-white/90 text-sm">
                  50 jaar verhalen, vriendschappen & rugby passie
                </p>
              </div>
              <span className="text-4xl group-hover:animate-bounce">🏆</span>
            </div>
          </div>

          {/* Enhanced Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/xperience-rugby">
              <Button 
                variant="hero" 
                size="xl" 
                className="w-full sm:w-auto bg-gradient-to-r from-scrumboks-yellow via-scrumboks-gold to-scrumboks-yellow hover:from-scrumboks-gold hover:via-scrumboks-yellow hover:to-scrumboks-gold text-scrumboks-black font-bold shadow-2xl hover:shadow-scrumboks-yellow/30 transform hover:scale-110 transition-all duration-500 border-2 border-scrumboks-yellow/50 hover:border-scrumboks-yellow group"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-2xl group-hover:animate-bounce">🏉</span>
                  <span>Probeer Rugby - €15</span>
                  <span className="text-lg group-hover:animate-pulse">✨</span>
                </span>
              </Button>
            </Link>
            <Link to="/membership">
              <Button 
                variant="action" 
                size="xl" 
                className="w-full sm:w-auto bg-gradient-to-r from-scrumboks-blue via-scrumboks-blue-dark to-scrumboks-blue hover:from-scrumboks-blue-dark hover:via-scrumboks-black hover:to-scrumboks-blue-dark shadow-2xl hover:shadow-scrumboks-blue/40 transform hover:scale-110 transition-all duration-500 border-2 border-scrumboks-blue/50 hover:border-scrumboks-blue group"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-lg group-hover:animate-pulse">🤝</span>
                  <span>Word lid van ons team</span>
                  <span className="text-lg group-hover:animate-pulse">❤️</span>
                </span>
              </Button>
            </Link>
            <a href="/#teams">
              <Button 
                variant="minimal" 
                size="xl" 
                className="w-full sm:w-auto border-2 border-scrumboks-white/40 hover:border-scrumboks-white hover:bg-scrumboks-white/20 backdrop-blur-sm transition-all duration-500 transform hover:scale-105 group"
              >
                <span className="flex items-center space-x-2">
                  <span className="text-lg group-hover:animate-bounce">👥</span>
                  <span>Bekijk onze teams</span>
                </span>
              </Button>
            </a>
          </div>

          {/* Enhanced Stats with personality */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 max-w-5xl mx-auto">
            <div className="text-center group cursor-default">
              <div className="text-3xl lg:text-4xl font-bold text-scrumboks-yellow group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-scrumboks-white/80 text-sm lg:text-base">
                Rugbyliefhebbers
              </div>
              <div className="text-xs text-scrumboks-white/60 mt-1">
                💪 Sterk samen
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl lg:text-4xl font-bold text-scrumboks-yellow group-hover:scale-110 transition-transform duration-300">
                8
              </div>
              <div className="text-scrumboks-white/80 text-sm lg:text-base">
                Teams
              </div>
              <div className="text-xs text-scrumboks-white/60 mt-1">
                🏉 Voor iedereen
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl lg:text-4xl font-bold text-scrumboks-yellow group-hover:scale-110 transition-transform duration-300">
                50
              </div>
              <div className="text-scrumboks-white/80 text-sm lg:text-base">
                Jaar verhalen
              </div>
              <div className="text-xs text-scrumboks-white/60 mt-1">
                📚 Traditie & geschiedenis
              </div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl lg:text-4xl font-bold text-scrumboks-yellow group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-scrumboks-white/80 text-sm lg:text-base">
                Plezier
              </div>
              <div className="text-xs text-scrumboks-white/60 mt-1">
                😄 Gegarandeerd!
              </div>
            </div>
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
