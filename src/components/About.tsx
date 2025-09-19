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
      title: 'Traditie',
      description:
        '50 jaar ervaring en kennis die wordt doorgegeven aan elke nieuwe generatie rugbyspelers.',
    },
    {
      icon: Zap,
      title: 'Kwaliteit',
      description:
        'Professionele training en begeleiding voor alle niveaus, van beginners tot gevorderden.',
    },
    {
      icon: Trophy,
      title: 'Samenhorigheid',
      description:
        'Een hechte community waar respect, teamwork en vriendschap centraal staan.',
    },
    {
      icon: Flame,
      title: 'Passie',
      description:
        'Liefde voor het spel drijft ons voort om elke dag beter te worden en te genieten van rugby.',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 bg-gradient-to-b from-scrumboks-navy via-scrumboks-navy-dark/20 to-scrumboks-navy relative overflow-hidden"
    >
      {/* Subtle Background Effects - No Cheap Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Logo Silhouette - Subtle */}
        <div
          className="absolute top-20 right-10 w-80 h-80 opacity-3"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${
              scrollY * 0.02
            }deg)`,
          }}
        >
          <Shield
            className="w-full h-full text-scrumboks-gold"
            style={{ filter: 'blur(4px)' }}
          />
        </div>

        <div
          className="absolute bottom-40 left-10 w-60 h-60 opacity-5"
          style={{
            transform: `translateY(${scrollY * -0.05}px)`,
          }}
        >
          <div className="w-full h-full border-2 border-scrumboks-gold/20 rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Professional Section Header - No Gradients */}
        <div
          className={`text-center mb-20 ${
            isVisible ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div className="glass-gold rounded-3xl px-10 py-5 mb-8 inline-block">
            <span className="text-scrumboks-navy font-oswald font-black text-xl tracking-wider">
              OVER DE SCRUMBOKS
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-oswald font-black text-scrumboks-white mb-8 leading-none">
            <span className="block font-light text-scrumboks-white/60">
              MEER DAN
            </span>
            <span className="block text-scrumboks-gold">EEN CLUB</span>
          </h2>

          <p className="text-2xl lg:text-3xl text-scrumboks-white/90 max-w-5xl mx-auto leading-relaxed font-roboto-slab font-semibold">
            <span className="text-scrumboks-gold">50 jaar traditie</span>. Een
            hechte rugby community in Tiel. Sinds 1976 staan wij voor kwaliteit,
            respect en sportiviteit.
            <span className="block mt-6 text-xl text-scrumboks-white/70 font-inter font-normal">
              Join ons team en ervaar de kracht van rugby.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Professional Content */}
          <div
            className={`space-y-10 ${
              isVisible ? 'animate-slide-right' : 'opacity-0'
            }`}
          >
            <div className="glass-dark rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-scrumboks-gold rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-scrumboks-navy" />
                </div>
                <h3 className="text-4xl font-oswald font-black text-scrumboks-gold">
                  RUGBY COMMUNITY
                </h3>
              </div>

              <p className="text-scrumboks-white/90 leading-relaxed mb-6 text-lg font-inter font-medium">
                <span className="text-scrumboks-gold font-bold">
                  Een echte rugby community sinds 1976.
                </span>{' '}
                Sterkte, respect en samenhorigheid. Down-to-earth, maar met oog
                voor kwaliteit.
              </p>

              <p className="text-scrumboks-white/80 leading-relaxed mb-8 text-lg font-inter">
                <span className="text-scrumboks-gold font-bold">
                  Van jeugd tot senioren,
                </span>{' '}
                bij de Scrumboks voel je meteen de warme sfeer. Een club waar
                rugby nog echt rugby is.
              </p>

              <div className="glass-gold rounded-2xl p-6 border-2 border-scrumboks-gold/30">
                <p className="text-scrumboks-navy font-bold text-center text-lg italic font-roboto-slab">
                  "Bij de Scrumboks voel je meteen de warme sfeer. Een club waar
                  rugby nog echt rugby is."
                </p>
                <p className="text-scrumboks-navy text-center text-sm mt-2 font-inter font-semibold">
                  - Mark van der Berg, Speler sinds 2018
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-dark rounded-2xl p-6 card-3d group">
                <div className="flex items-center gap-3 mb-3">
                  <Trophy className="w-8 h-8 text-scrumboks-gold" />
                  <div className="text-4xl font-oswald font-black text-scrumboks-gold group-hover:scale-110 transition-transform duration-300">
                    1976
                  </div>
                </div>
                <div className="text-scrumboks-white font-bold text-lg font-roboto-slab">
                  OPGERICHT
                </div>
                <div className="text-scrumboks-white/70 text-sm mt-1 font-inter">
                  50 Jaar Traditie
                </div>
              </div>

              <div className="glass-gold rounded-2xl p-6 card-3d group">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="w-8 h-8 text-scrumboks-navy" />
                  <div className="text-4xl font-oswald font-black text-scrumboks-navy group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                </div>
                <div className="text-scrumboks-navy font-bold text-lg font-roboto-slab">
                  LEDEN
                </div>
                <div className="text-scrumboks-navy/70 text-sm mt-1 font-inter">
                  Actieve Spelers
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/membership" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  className="w-full sm:w-auto bg-scrumboks-navy hover:bg-scrumboks-navy-dark text-scrumboks-white font-oswald font-black text-lg px-8 py-4 rounded-2xl border-2 border-scrumboks-navy/50 hover:border-scrumboks-navy shadow-2xl hover:shadow-scrumboks-navy/50 transform hover:scale-105 transition-all duration-300 group"
                >
                  <span className="flex items-center gap-3">
                    <Zap className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span>WORD LID VAN DE FAMILIE</span>
                    <Shield className="w-6 h-6 group-hover:-rotate-12 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>

              <Button
                size="xl"
                className="w-full sm:w-auto bg-scrumboks-navy hover:bg-scrumboks-navy-dark text-scrumboks-white font-oswald font-black text-lg px-8 py-4 rounded-2xl border-2 border-scrumboks-navy/50 hover:border-scrumboks-navy shadow-2xl hover:shadow-scrumboks-navy/50 transform hover:scale-105 transition-all duration-300"
                onClick={() =>
                  document
                    .querySelector('#teams')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                ONTDEK ONZE TEAMS
              </Button>
            </div>
          </div>

          {/* Professional Image */}
          <div
            className={`relative group ${
              isVisible ? 'animate-scale-in' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="absolute -inset-6 bg-scrumboks-gold/20 rounded-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 blur-xl"></div>

            <div className="relative glass-dark rounded-3xl p-4 card-3d">
              <img
                src={teamCelebration}
                alt="Scrumboks team viert overwinning"
                className="w-full h-[600px] object-cover rounded-2xl"
              />

              {/* Overlay Effects */}
              <div className="absolute inset-4 bg-gradient-to-t from-scrumboks-navy/60 via-transparent to-scrumboks-gold/20 rounded-2xl" />

              {/* Professional Badge */}
              <div className="absolute top-8 right-8 glass-gold rounded-2xl p-4">
                <div className="flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-scrumboks-navy" />
                  <span className="text-scrumboks-navy font-oswald font-black text-sm">
                    50 JAAR
                  </span>
                </div>
              </div>

              {/* Quote */}
              <div className="absolute bottom-8 left-8 right-8 glass-dark rounded-2xl p-6">
                <p className="text-scrumboks-gold font-bold text-center text-lg font-roboto-slab">
                  "Een hechte groep met sterke band"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values - Professional */}
        <div
          className={`mb-24 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.6s' }}
        >
          <div className="text-center mb-16">
            <h3 className="text-5xl font-oswald font-black text-scrumboks-white mb-6">
              <span className="text-scrumboks-gold">ONZE WAARDEN</span>
            </h3>
            <p className="text-scrumboks-white/80 text-xl max-w-3xl mx-auto font-roboto-slab font-medium">
              De principes waar onze club op gebouwd is
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group relative">
                <div className="glass-dark rounded-3xl p-8 h-full card-3d hover:bg-scrumboks-navy/20 transition-all duration-500">
                  <div className="w-20 h-20 bg-scrumboks-gold rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <value.icon className="w-10 h-10 text-scrumboks-navy" />
                  </div>

                  <h4 className="text-2xl font-oswald font-black text-scrumboks-gold mb-4 text-center group-hover:text-scrumboks-white transition-colors duration-300">
                    {value.title}
                  </h4>

                  <p className="text-scrumboks-white/80 leading-relaxed text-center group-hover:text-scrumboks-white/90 transition-colors duration-300 font-inter">
                    {value.description}
                  </p>
                </div>

                {/* Subtle Glow */}
                <div className="absolute -inset-2 bg-scrumboks-gold/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Call to Action */}
        <div
          className={`text-center glass-dark rounded-3xl p-16 relative overflow-hidden ${
            isVisible ? 'animate-scale-in' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.9s' }}
        >
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-scrumboks-gold/5 rounded-full -translate-y-20 translate-x-20 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-scrumboks-navy/5 rounded-full translate-y-24 -translate-x-24 blur-2xl"></div>

          <div className="relative z-10">
            <div className="glass-gold rounded-full p-4 w-24 h-24 mx-auto mb-8 flex items-center justify-center">
              <Shield className="w-12 h-12 text-scrumboks-navy" />
            </div>

            <h3 className="text-5xl font-oswald font-black text-scrumboks-white mb-6">
              <span className="text-scrumboks-gold">SLUIT JE BIJ ONS AAN</span>
            </h3>

            <p className="text-scrumboks-white/90 mb-12 max-w-3xl mx-auto leading-relaxed text-xl font-roboto-slab font-medium">
              <span className="text-scrumboks-gold font-bold">
                Bij Scrumboks draait het om kwaliteit en gemeenschap.
              </span>{' '}
              Of je nu wilt spelen, ons team wilt versterken, of wilt
              samenwerken als sponsor -
              <span className="text-scrumboks-gold font-bold">
                {' '}
                samen bouwen we aan onze rugbytraditie.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
              <Link to="/volunteers" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  className="w-full sm:w-auto glass-dark text-scrumboks-gold font-oswald font-black text-xl px-10 py-6 rounded-2xl border-2 border-scrumboks-navy/50 hover:border-scrumboks-navy shadow-2xl hover:shadow-scrumboks-navy/50 transform hover:scale-105 transition-all duration-500 group"
                >
                  <Target className="w-6 h-6 mr-3 group-hover:rotate-45 transition-transform duration-300" />
                  <span>WORD VRIJWILLIGER</span>
                  <Zap className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform duration-300" />
                </Button>
              </Link>

              <Link to="/sponsors" className="w-full sm:w-auto">
                <Button
                  size="xl"
                  className="w-full sm:w-auto bg-scrumboks-gold hover:bg-scrumboks-gold-dark text-scrumboks-navy font-oswald font-black text-xl px-10 py-6 rounded-2xl border-2 border-scrumboks-gold/50 hover:border-scrumboks-gold shadow-2xl hover:shadow-scrumboks-gold/50 transform hover:scale-105 transition-all duration-500 group"
                >
                  <Trophy className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform duration-300" />
                  <span>SPONSOR PARTNERSHIP</span>
                  <Shield className="w-6 h-6 ml-3 group-hover:-rotate-12 transition-transform duration-300" />
                </Button>
              </Link>
            </div>

            <p className="text-scrumboks-white/60 mt-8 text-lg max-w-2xl mx-auto italic font-roboto-slab font-semibold">
              "50+ jaar rugby traditie"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
