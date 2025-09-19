import { Button } from '@/components/ui/button';
import { Shield, Zap, Trophy, Target, Users, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import teamCelebration from '@/assets/team-celebration.jpg';
import { useEffect, useState, useRef } from 'react';

const About = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const values = [
    {
      icon: Shield,
      title: 'Elite Performance',
      description: 'We train at championship level. Every session, every game, every moment is about pushing limits and achieving excellence.',
    },
    {
      icon: Zap,
      title: 'Unstoppable Power',
      description: 'Raw strength meets technical precision. Our players dominate the field with explosive energy and calculated aggression.',
    },
    {
      icon: Trophy,
      title: 'Victory Mindset',
      description: '50 years of winning culture. We don\'t just play rugby - we conquer territories and create legends.',
    },
    {
      icon: Flame,
      title: 'Burning Passion',
      description: 'The fire within drives us forward. Every tackle, every try, every victory is fueled by unbreakable determination.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 bg-gradient-to-b from-scrumboks-black via-scrumboks-blue-dark/20 to-scrumboks-black relative overflow-hidden"
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Particle System */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-scrumboks-yellow/40 rounded-full"
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 4) * 15}%`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}

        {/* Geometric Shapes with Parallax */}
        <div 
          className="absolute top-20 right-10 w-80 h-80 opacity-5"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`,
          }}
        >
          <div className="w-full h-full bg-gradient-to-br from-scrumboks-yellow/30 to-scrumboks-blue/30 rounded-3xl transform rotate-45" />
        </div>
        
        <div 
          className="absolute bottom-40 left-10 w-60 h-60 opacity-5"
          style={{
            transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.03}deg)`,
          }}
        >
          <div className="w-full h-full border-4 border-scrumboks-yellow/40 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Modern Section Header */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="glass-gold rounded-3xl px-10 py-5 mb-8 inline-block">
            <span className="text-scrumboks-blue font-black text-xl tracking-wider">
              THE SCRUMBOKS LEGACY
            </span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-black text-scrumboks-white mb-8 leading-none">
            <span className="block font-light text-scrumboks-white/60">FORGED IN</span>
            <span className="block gradient-text">BATTLE</span>
          </h2>
          
          <p className="text-2xl lg:text-3xl text-scrumboks-white/90 max-w-5xl mx-auto leading-relaxed font-semibold">
            <span className="text-scrumboks-yellow">5 decades</span> of dominating the field. 
            <span className="text-scrumboks-yellow"> 6 elite divisions</span>. 
            <span className="text-scrumboks-yellow"> Uncompromising excellence</span>.
            <span className="block mt-6 text-xl text-scrumboks-white/70 font-normal">
              This is where champions are forged and legends are born.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Enhanced Content */}
          <div className={`space-y-10 ${isVisible ? 'animate-slide-right' : 'opacity-0'}`}>
            <div className="glass-dark rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-scrumboks-yellow to-scrumboks-gold rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-scrumboks-blue" />
                </div>
                <h3 className="text-4xl font-black text-scrumboks-yellow">
                  ELITE FORCE
                </h3>
              </div>
              
              <p className="text-scrumboks-white/90 leading-relaxed mb-6 text-lg font-medium">
                <span className="text-scrumboks-yellow font-bold">
                  We are not just another rugby club.
                </span>
                {' '}We are an elite brotherhood forged in competition, strengthened by victory, and united by an unbreakable code of excellence.
              </p>
              
              <p className="text-scrumboks-white/80 leading-relaxed mb-8 text-lg">
                <span className="text-scrumboks-yellow font-bold">
                  From youth warriors to seasoned veterans,
                </span>
                {' '}every player who steps onto our field becomes part of something greater - a legacy of power, precision, and pure determination.
              </p>
              
              <div className="glass-gold rounded-2xl p-6 border-2 border-scrumboks-yellow/30">
                <p className="text-scrumboks-blue font-bold text-center text-lg italic">
                  "At Scrumboks, we don't just play rugby - we wage war on mediocrity and emerge victorious every time."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-dark rounded-2xl p-6 card-3d group">
                <div className="flex items-center gap-3 mb-3">
                  <Trophy className="w-8 h-8 text-scrumboks-yellow" />
                  <div className="text-4xl font-black text-scrumboks-yellow group-hover:scale-110 transition-transform duration-300">
                    1976
                  </div>
                </div>
                <div className="text-scrumboks-white font-bold text-lg">
                  ESTABLISHED
                </div>
                <div className="text-scrumboks-white/70 text-sm mt-1">
                  Legacy of Champions
                </div>
              </div>
              
              <div className="glass-gold rounded-2xl p-6 card-3d group">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-8 h-8 text-scrumboks-blue" />
                  <div className="text-4xl font-black text-scrumboks-blue group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                </div>
                <div className="text-scrumboks-blue font-bold text-lg">
                  WARRIORS
                </div>
                <div className="text-scrumboks-blue/70 text-sm mt-1">
                  Elite Squad
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-6">
              <Link to="/xperience-rugby">
                <Button
                  size="xl"
                  className="glass-gold glow-hover magnetic-hover text-scrumboks-blue font-black text-lg px-8 py-4 rounded-2xl border-2 border-scrumboks-yellow/50 hover:border-scrumboks-yellow shadow-2xl hover:shadow-scrumboks-yellow/50 transform hover:scale-105 transition-all duration-300 group"
                >
                  <span className="flex items-center gap-3">
                    <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span>JOIN THE ELITE</span>
                    <Shield className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              
              <Button
                size="xl"
                className="glass-dark text-scrumboks-yellow font-bold text-lg px-8 py-4 rounded-2xl border-2 border-scrumboks-blue/50 hover:border-scrumboks-blue transition-all duration-300"
                onClick={() =>
                  document
                    .querySelector('#teams')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                EXPLORE DIVISIONS
              </Button>
            </div>
          </div>

          {/* Enhanced Image with Modern Effects */}
          <div className={`relative group ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="absolute -inset-6 bg-gradient-to-br from-scrumboks-yellow/30 via-transparent to-scrumboks-blue/30 rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative glass-dark rounded-3xl p-4 card-3d">
              <img
                src={teamCelebration}
                alt="Scrumboks elite squad celebrating another crushing victory"
                className="w-full h-[600px] object-cover rounded-2xl"
              />
              
              {/* Overlay Effects */}
              <div className="absolute inset-4 bg-gradient-to-t from-scrumboks-blue/60 via-transparent to-scrumboks-yellow/20 rounded-2xl" />
              
              {/* Power Badge */}
              <div className="absolute top-8 right-8 glass-gold rounded-2xl p-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-scrumboks-blue" />
                  <span className="text-scrumboks-blue font-black text-sm">CHAMPIONS</span>
                </div>
              </div>
              
              {/* Victory Quote */}
              <div className="absolute bottom-8 left-8 right-8 glass-dark rounded-2xl p-6">
                <p className="text-scrumboks-yellow font-bold text-center text-lg">
                  "This is what victory looks like - pure, uncompromising excellence"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Elite Values Section */}
        <div className={`mb-24 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-16">
            <h3 className="text-5xl font-black text-scrumboks-white mb-6">
              <span className="gradient-text">CORE VALUES</span>
            </h3>
            <p className="text-scrumboks-white/80 text-xl max-w-3xl mx-auto font-medium">
              The unbreakable principles that forge champions and define legends
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="glass-dark rounded-3xl p-8 h-full card-3d hover:bg-gradient-to-br hover:from-scrumboks-yellow/10 hover:to-scrumboks-blue/10 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-scrumboks-yellow to-scrumboks-gold rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <value.icon className="w-10 h-10 text-scrumboks-blue" />
                  </div>
                  
                  <h4 className="text-2xl font-black text-scrumboks-yellow mb-4 text-center group-hover:text-scrumboks-white transition-colors duration-300">
                    {value.title}
                  </h4>
                  
                  <p className="text-scrumboks-white/80 leading-relaxed text-center group-hover:text-scrumboks-white/90 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-scrumboks-yellow/10 to-scrumboks-blue/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Elite Call to Action */}
        <div className={`text-center glass-dark rounded-3xl p-16 relative overflow-hidden ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.9s' }}>
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-scrumboks-yellow/10 rounded-full -translate-y-20 translate-x-20 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-scrumboks-blue/10 rounded-full translate-y-24 -translate-x-24 blur-2xl"></div>

          <div className="relative z-10">
            <div className="glass-gold rounded-full p-4 w-24 h-24 mx-auto mb-8 flex items-center justify-center">
              <Shield className="w-12 h-12 text-scrumboks-blue" />
            </div>

            <h3 className="text-5xl font-black text-scrumboks-white mb-6">
              <span className="gradient-text">JOIN THE ELITE</span>
            </h3>
            
            <p className="text-scrumboks-white/90 mb-12 max-w-3xl mx-auto leading-relaxed text-xl font-medium">
              <span className="text-scrumboks-yellow font-bold">
                At Scrumboks, mediocrity is not an option.
              </span>
              {' '}Whether you're here to dominate the field, support our warriors, or partner with champions -
              <span className="text-scrumboks-yellow font-bold">
                {' '}together we forge legends that echo through time.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
              <Link to="/volunteers" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  className="w-full sm:w-auto glass-dark glow-hover text-scrumboks-yellow font-black text-xl px-10 py-6 rounded-2xl border-2 border-scrumboks-blue/50 hover:border-scrumboks-blue shadow-2xl hover:shadow-scrumboks-blue/50 transform hover:scale-105 transition-all duration-500 group"
                >
                  <Target className="w-6 h-6 mr-3 group-hover:rotate-45 transition-transform duration-300" />
                  <span>REINFORCE THE RANKS</span>
                  <Zap className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </Link>

              <Link to="/sponsors" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  className="w-full sm:w-auto glass-gold glow-hover text-scrumboks-blue font-black text-xl px-10 py-6 rounded-2xl border-2 border-scrumboks-yellow/50 hover:border-scrumboks-yellow shadow-2xl hover:shadow-scrumboks-yellow/50 transform hover:scale-105 transition-all duration-500 group"
                >
                  <Trophy className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <span>CHAMPION PARTNERSHIP</span>
                  <Shield className="w-6 h-6 ml-3 group-hover:-rotate-12 transition-transform duration-300" />
                </Button>
              </Link>
            </div>

            <p className="text-scrumboks-white/60 mt-8 text-lg max-w-2xl mx-auto italic font-semibold">
              "Where legends are forged and champions are born"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
