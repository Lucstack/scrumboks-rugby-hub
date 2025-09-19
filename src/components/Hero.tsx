import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-rugby-action.jpg';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Zap, Shield, Trophy } from 'lucide-react';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        containerRef.current.style.setProperty('--mouse-x', `${x * 100}%`);
        containerRef.current.style.setProperty('--mouse-y', `${y * 100}%`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={
        {
          '--mouse-x': '50%',
          '--mouse-y': '50%',
        } as React.CSSProperties
      }
    >
      {/* Advanced Parallax Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-[120%] bg-cover bg-center will-change-transform"
          style={{
            backgroundImage: `url(${heroImage})`,
            transform: `translateY(${scrollY * 0.5}px) scale(1.1)`,
          }}
        />

        {/* Dynamic Multi-layer Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-scrumboks-black/80 via-scrumboks-blue-dark/70 to-scrumboks-black/90" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), 
              rgba(248, 227, 0, 0.15) 0%, 
              rgba(8, 22, 137, 0.3) 40%, 
              transparent 70%)`,
          }}
        />

        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 gradient-mesh opacity-40" />
      </div>

      {/* Particle System & Geometric Elements */}
      <div className="absolute inset-0 z-5 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-scrumboks-yellow/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}

        {/* Modern Geometric Shapes */}
        <div className="absolute top-1/4 right-1/6 w-32 h-32 opacity-20">
          <div
            className="w-full h-full bg-gradient-to-br from-scrumboks-yellow/40 to-scrumboks-blue/40 transform rotate-45 rounded-xl"
            style={{
              transform: `rotate(45deg) translateY(${scrollY * 0.1}px)`,
              filter: 'blur(1px)',
            }}
          />
        </div>

        <div className="absolute bottom-1/3 left-1/8 w-20 h-20 opacity-25">
          <div
            className="w-full h-full border-2 border-scrumboks-yellow/50 rounded-full"
            style={{
              transform: `rotate(${scrollY * 0.2}deg) scale(${
                1 + Math.sin(scrollY * 0.01) * 0.1
              })`,
            }}
          />
        </div>

        {/* Abstract Logo Elements */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10">
          <Shield
            className="w-64 h-64 text-scrumboks-blue"
            style={{
              transform: `rotate(${scrollY * 0.05}deg)`,
              filter: 'blur(2px)',
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`space-y-8 ${isLoaded ? 'animate-fade-up' : 'opacity-0'}`}
        >
          {/* Power Badge */}
          <div className="inline-block glass-gold rounded-2xl px-8 py-4 mb-6 glow-hover">
            <div className="flex items-center gap-3">
              <Zap className="w-6 h-6 text-scrumboks-yellow" />
              <span className="text-scrumboks-yellow font-bold text-lg tracking-wide">
                DE TOFSTE RUGBYCLUB VAN DE BETUWE
              </span>
              <Trophy className="w-6 h-6 text-scrumboks-yellow" />
            </div>
          </div>

          {/* Powerful Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-scrumboks-white leading-tight tracking-tight">
            <span className="block font-medium">DOMINEER</span>
            <span className="block gradient-text font-semibold">HET VELD</span>
          </h1>

          {/* Strong Subheading */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-scrumboks-white/90 max-w-5xl mx-auto leading-relaxed font-medium">
            <span className="text-scrumboks-yellow font-bold">50 jaar</span>{' '}
            ervaring.
            <span className="text-scrumboks-yellow font-bold"> 6 teams</span>.
            <span className="text-scrumboks-yellow font-bold">
              {' '}
              Ongeëvenaarde passie
            </span>
            .
            <span className="block mt-4 text-xl text-scrumboks-white/80">
              Waar kampioenen gemaakt worden en legenden geboren.
            </span>
          </p>

          {/* Powerful Jubileum Banner */}
          <div
            className="glass-dark rounded-3xl p-8 mt-12 mx-auto max-w-3xl card-3d cursor-pointer group animate-pulse-glow"
            onClick={() => window.open('https://50jaar.scrumboks.nl', '_blank')}
          >
            <div className="flex items-center justify-center space-x-6">
              <div className="w-16 h-16 bg-gradient-to-br from-scrumboks-yellow to-scrumboks-gold rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Trophy className="w-8 h-8 text-scrumboks-blue" />
              </div>
              <div className="text-center">
                <p className="text-scrumboks-yellow font-black text-3xl mb-2 tracking-wide">
                  GOUDEN JUBILEUM 2025
                </p>
                <p className="text-scrumboks-white/90 text-lg font-semibold">
                  5 decennia van onverslaanbare rugby spirit
                </p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-scrumboks-blue to-scrumboks-blue-dark rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-scrumboks-yellow" />
              </div>
            </div>
          </div>

          {/* Powerful Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12">
            <Link to="/xperience-rugby">
              <Button
                size="xl"
                className="w-full sm:w-auto glass-gold glow-hover magnetic-hover text-scrumboks-blue font-black text-xl px-10 py-6 rounded-2xl border-2 border-scrumboks-yellow/50 hover:border-scrumboks-yellow shadow-2xl hover:shadow-scrumboks-yellow/50 transform hover:scale-105 transition-all duration-300 group"
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
                className="w-full sm:w-auto glass-dark text-scrumboks-yellow font-black text-xl px-10 py-6 rounded-2xl border-2 border-scrumboks-blue/50 hover:border-scrumboks-blue shadow-2xl hover:shadow-scrumboks-blue/50 transform hover:scale-105 transition-all duration-300 group"
              >
                <span className="flex items-center space-x-3">
                  <Trophy className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>JOIN THE ELITE</span>
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
                  <span>EXPLORE TEAMS</span>
                </span>
              </Button>
            </a>
          </div>

          {/* Elite Performance Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-16 max-w-6xl mx-auto">
            <div className="glass-dark rounded-2xl p-6 card-3d group">
              <div className="text-5xl lg:text-6xl font-black text-scrumboks-yellow mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-scrumboks-white font-bold text-lg mb-1">
                WARRIORS
              </div>
              <div className="text-scrumboks-white/70 text-sm">
                Elite Athletes
              </div>
            </div>

            <div className="glass-gold rounded-2xl p-6 card-3d group">
              <div className="text-5xl lg:text-6xl font-black text-scrumboks-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                6
              </div>
              <div className="text-scrumboks-blue font-bold text-lg mb-1">
                DIVISIONS
              </div>
              <div className="text-scrumboks-blue/70 text-sm">
                Championship Level
              </div>
            </div>

            <div className="glass-dark rounded-2xl p-6 card-3d group">
              <div className="text-5xl lg:text-6xl font-black text-scrumboks-yellow mb-2 group-hover:scale-110 transition-transform duration-300">
                50
              </div>
              <div className="text-scrumboks-white font-bold text-lg mb-1">
                YEARS
              </div>
              <div className="text-scrumboks-white/70 text-sm">
                Legacy & Power
              </div>
            </div>

            <div className="glass-gold rounded-2xl p-6 card-3d group">
              <div className="text-5xl lg:text-6xl font-black text-scrumboks-blue mb-2 group-hover:scale-110 transition-transform duration-300">
                100%
              </div>
              <div className="text-scrumboks-blue font-bold text-lg mb-1">
                INTENSITY
              </div>
              <div className="text-scrumboks-blue/70 text-sm">
                Pure Dedication
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 glass rounded-full p-4 group hover:bg-scrumboks-yellow/10 transition-all duration-300 cursor-pointer"
        onClick={() =>
          document
            .querySelector('#about')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
      >
        <ChevronDown className="w-6 h-6 text-scrumboks-white group-hover:text-scrumboks-yellow animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
