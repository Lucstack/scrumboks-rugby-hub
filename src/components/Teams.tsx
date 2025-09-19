import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Clock,
  MapPin,
  Users,
  Calendar,
  Trophy,
  Target,
  Heart,
  Zap,
  Star,
  Shield,
  Award,
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Teams = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredTeam, setHoveredTeam] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  const teams = [
    {
      name: 'Senioren',
      level: 'Competitie',
      description:
        'Ons eerste team dat strijdt in de hoogste regionale competitie. Ervaren spelers met ambities.',
      training: 'Dinsdag & Vrijdag 20:00',
      members: '25 spelers',
      age: '18+',
      icon: Trophy,
      highlight: 'Championship Level',
    },
    {
      name: 'Dames',
      level: 'Competitie',
      description:
        'Ons damesteam dat strijdt in de regionale competitie. Sterke vrouwen met passie voor rugby.',
      training: 'Dinsdag & Vrijdag 20:00',
      members: '20 spelers',
      age: '16+',
      icon: Heart,
      highlight: 'Empowering Women',
    },
    {
      name: 'TBM',
      level: 'Jeugd',
      description:
        'Jonge talenten van 6-12 jaar die de basis van rugby leren. Veel plezier en ontwikkeling staan centraal.',
      training: 'Dinsdag & Donderdag 18:45',
      members: '53 spelers',
      age: '6-12 jaar',
      icon: Target,
      highlight: 'Future Stars',
    },
    {
      name: 'Cubs',
      level: 'Jeugd',
      description:
        'Ontwikkeling van techniek en teamwork. Voorbereiding op hogere niveaus.',
      training: 'Dinsdag & Donderdag 18:45',
      members: '22 spelers',
      age: '12-14 jaar',
      icon: Zap,
      highlight: 'Rising Talent',
    },
    {
      name: 'Junioren',
      level: 'Jeugd',
      description:
        'Serieuze training voor jonge spelers die klaar zijn voor de volgende stap.',
      training: 'Dinsdag & Donderdag 18:45',
      members: '18 spelers',
      age: '14-16 jaar',
      icon: Users,
      highlight: 'Team Building',
    },
    {
      name: 'Colts',
      level: 'Jeugd',
      description:
        'Topniveau jeugdspelers die zich voorbereiden op seniorenrugby.',
      training: 'Dinsdag & Donderdag 18:45',
      members: '16 spelers',
      age: '16-18 jaar',
      icon: Star,
      highlight: 'Elite Development',
    },
  ];

  return (
    <section
      id="teams"
      className="py-20 bg-scrumboks-gray-light/30 relative overflow-hidden pattern-dots"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Scrollable Background Elements */}
        <div className="absolute top-1/4 left-0 w-full h-32 opacity-5">
          <div className="flex animate-scroll-left">
            <div className="w-64 h-32 bg-scrumboks-navy rounded-full blur-xl mx-8" />
            <div className="w-48 h-32 bg-scrumboks-gold rounded-full blur-xl mx-8" />
            <div className="w-56 h-32 bg-scrumboks-navy rounded-full blur-xl mx-8" />
            <div className="w-40 h-32 bg-scrumboks-gold rounded-full blur-xl mx-8" />
            <div className="w-64 h-32 bg-scrumboks-navy rounded-full blur-xl mx-8" />
            <div className="w-48 h-32 bg-scrumboks-gold rounded-full blur-xl mx-8" />
          </div>
        </div>

        <div className="absolute bottom-1/4 right-0 w-full h-32 opacity-5">
          <div className="flex animate-scroll-right">
            <div className="w-56 h-32 bg-scrumboks-gold rounded-full blur-xl mx-8" />
            <div className="w-40 h-32 bg-scrumboks-navy rounded-full blur-xl mx-8" />
            <div className="w-64 h-32 bg-scrumboks-gold rounded-full blur-xl mx-8" />
            <div className="w-48 h-32 bg-scrumboks-navy rounded-full blur-xl mx-8" />
            <div className="w-56 h-32 bg-scrumboks-gold rounded-full blur-xl mx-8" />
          </div>
        </div>

        {/* Floating Rotating Elements */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-scrumboks-navy/10 rounded-full animate-rotate-slow" />
        <div className="absolute bottom-32 left-16 w-32 h-32 bg-scrumboks-gold/10 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '40s' }} />
        
        {/* Gentle Floating Elements */}
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-scrumboks-navy/5 rounded-full animate-float-gentle" />
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 bg-scrumboks-gold/8 rounded-full animate-float-gentle" style={{ animationDelay: '3s' }} />

        {/* Subtle Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-scrumboks-white/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-scrumboks-white/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="inline-block bg-scrumboks-white border border-scrumboks-navy/20 rounded-2xl px-8 py-3 mb-6 shadow-sm">
            <span className="text-scrumboks-navy font-oswald font-bold text-lg tracking-wide">
              Onze Teams
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-oswald font-bold text-scrumboks-navy mb-6">
            <span className="block font-medium">Ontdek jouw</span>
            <span className="block text-scrumboks-gold font-semibold">
              Perfecte Team
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-scrumboks-gray max-w-4xl mx-auto leading-relaxed font-roboto-slab">
            <span className="text-scrumboks-navy font-semibold">
              Van 6 tot 60+ jaar
            </span>{' '}
            - bij Scrumboks vindt iedereen zijn plek. Of je nu net begint of al
            jaren speelt,
            <span className="text-scrumboks-gold font-semibold">
              {' '}
              samen maken we rugby tot een levenslange passie.
            </span>
          </p>
        </div>

        {/* Clean Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teams.map((team, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border border-scrumboks-navy/10 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              } bg-scrumboks-navy-light/20 pattern-dots-small`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
              onMouseEnter={() => setHoveredTeam(index)}
              onMouseLeave={() => setHoveredTeam(null)}
            >
              {/* Clean Header */}
              <CardHeader className="pb-4 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-scrumboks-navy/5 border border-scrumboks-navy/20 rounded-xl flex items-center justify-center group-hover:bg-scrumboks-navy/10 transition-colors duration-300">
                      <team.icon className="w-6 h-6 text-scrumboks-navy" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-oswald font-bold text-scrumboks-navy group-hover:text-scrumboks-gold transition-colors duration-300">
                        {team.name}
                      </CardTitle>
                      <div className="text-sm font-oswald font-medium text-scrumboks-gray uppercase tracking-wide">
                        {team.highlight}
                      </div>
                    </div>
                  </div>
                  <div className="bg-scrumboks-navy/5 border border-scrumboks-navy/20 px-3 py-1 rounded-full">
                    <span className="text-xs font-oswald font-bold text-scrumboks-navy uppercase tracking-wide">
                      {team.level}
                    </span>
                  </div>
                </div>

                <p className="text-scrumboks-gray leading-relaxed text-sm font-inter">
                  {team.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Clean Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-scrumboks-gray-light/50 border border-scrumboks-navy/10 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-scrumboks-navy" />
                      <span className="text-sm font-roboto-slab font-semibold text-scrumboks-navy">
                        Leden
                      </span>
                    </div>
                    <p className="text-xl font-oswald font-bold text-scrumboks-navy">
                      {team.members}
                    </p>
                  </div>

                  <div className="bg-scrumboks-gray-light/50 border border-scrumboks-navy/10 p-4 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-scrumboks-navy" />
                      <span className="text-sm font-roboto-slab font-semibold text-scrumboks-navy">
                        Leeftijd
                      </span>
                    </div>
                    <p className="text-xl font-oswald font-bold text-scrumboks-navy">
                      {team.age}
                    </p>
                  </div>
                </div>

                {/* Training Info */}
                <div className="bg-scrumboks-gray-light/50 border border-scrumboks-navy/10 p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-scrumboks-navy" />
                    <span className="font-roboto-slab font-semibold text-scrumboks-navy text-sm">
                      Training
                    </span>
                  </div>
                  <p className="text-scrumboks-gray font-inter font-medium text-sm">
                    {team.training}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Clean Training Location */}
        <div className="bg-scrumboks-white border border-scrumboks-navy/20 rounded-3xl p-8 relative overflow-hidden shadow-lg pattern-dots">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-scrumboks-navy rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-scrumboks-gold rounded-full translate-y-20 -translate-x-20" />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-block bg-scrumboks-navy/5 border border-scrumboks-navy/20 rounded-full p-3 mb-4">
                <MapPin className="w-8 h-8 text-scrumboks-navy" />
              </div>
              <h3 className="text-3xl font-oswald font-bold text-scrumboks-navy mb-4">
                Waar de magie gebeurt
              </h3>
              <p className="text-lg text-scrumboks-gray max-w-2xl mx-auto font-roboto-slab">
                Al onze teams trainen op{' '}
                <span className="text-scrumboks-navy font-semibold">
                  Sportpark Rauwenhof
                </span>{' '}
                in Tiel. Een plek waar vriendschappen ontstaan en dromen
                werkelijkheid worden.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-scrumboks-navy/5 border border-scrumboks-navy/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-scrumboks-navy" />
                </div>
                <h4 className="font-oswald font-bold text-scrumboks-navy mb-2">
                  Locatie
                </h4>
                <p className="text-scrumboks-gray text-sm font-inter">
                  Beethovenstraat 18a
                  <br />
                  4003 KX Tiel
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-scrumboks-navy/5 border border-scrumboks-navy/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-scrumboks-navy" />
                </div>
                <h4 className="font-oswald font-bold text-scrumboks-navy mb-2">
                  Openingstijden
                </h4>
                <p className="text-scrumboks-gray text-sm font-inter">
                  Di-Do: 18:45 - 20:30
                  <br />
                  Vr: 20:00 - 22:00
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-scrumboks-navy/5 border border-scrumboks-navy/20 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-scrumboks-navy" />
                </div>
                <h4 className="font-oswald font-bold text-scrumboks-navy mb-2">
                  Contact
                </h4>
                <p className="text-scrumboks-gray text-sm font-inter">
                  0344 623201
                  <br />
                  info@scrumboks.nl
                </p>
              </div>
            </div>

            {/* Clean CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-scrumboks-navy hover:bg-scrumboks-navy-dark text-scrumboks-white border border-scrumboks-navy hover:border-scrumboks-navy-dark shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 group font-oswald font-bold text-lg px-8 py-4"
                onClick={() =>
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <span className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Kom een keer kijken</span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
