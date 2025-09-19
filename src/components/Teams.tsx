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
      commitment: 'Hoog',
      color: 'from-scrumboks-blue to-scrumboks-blue-light',
      icon: Trophy,
      highlight: 'Championship Level',
      stats: { experience: '5+ jaar', intensity: 'Hoog' },
    },
    {
      name: 'Dames',
      level: 'Competitie',
      description:
        'Ons damesteam dat strijdt in de regionale competitie. Sterke vrouwen met passie voor rugby.',
      training: 'Dinsdag & Vrijdag 20:00',
      members: '20 spelers',
      age: '16+',
      commitment: 'Gemiddeld',
      color: 'from-scrumboks-yellow to-scrumboks-gold',
      icon: Heart,
      highlight: 'Empowering Women',
      stats: { experience: '2+ jaar', intensity: 'Gemiddeld' },
    },
    {
      name: 'TBM',
      level: 'Jeugd',
      description:
        'Jonge talenten van 6-12 jaar die de basis van rugby leren. Veel plezier en ontwikkeling staan centraal.',
      training: 'Dinsdag & Donderdag 18:45',
      members: '53 spelers',
      age: '6-12 jaar',
      commitment: 'Gemiddeld',
      color: 'from-scrumboks-blue-light to-scrumboks-yellow',
      icon: Target,
      highlight: 'Future Stars',
      stats: { experience: 'Beginners', intensity: 'Laag' },
    },
    {
      name: 'Cubs',
      level: 'Jeugd',
      description:
        'Ontwikkeling van techniek en teamwork. Voorbereiding op hogere niveaus.',
      training: 'Dinsdag & Donderdag 18:45',
      members: '22 spelers',
      age: '12-14 jaar',
      commitment: 'Gemiddeld',
      color: 'from-scrumboks-blue-dark to-scrumboks-blue',
      icon: Zap,
      highlight: 'Rising Talent',
      stats: { experience: '1-2 jaar', intensity: 'Gemiddeld' },
    },
    {
      name: 'Junioren',
      level: 'Jeugd',
      description:
        'Serieuze training voor jonge spelers die klaar zijn voor de volgende stap.',
      training: 'Dinsdag & Donderdag 18:45',
      members: '18 spelers',
      age: '14-16 jaar',
      commitment: 'Gemiddeld',
      color: 'from-scrumboks-gold to-scrumboks-yellow',
      icon: Users,
      highlight: 'Team Building',
      stats: { experience: '2-3 jaar', intensity: 'Gemiddeld' },
    },
    {
      name: 'Colts',
      level: 'Jeugd',
      description:
        'Topniveau jeugdspelers die zich voorbereiden op seniorenrugby.',
      training: 'Dinsdag & Donderdag 18:45',
      members: '16 spelers',
      age: '16-18 jaar',
      commitment: 'Hoog',
      color: 'from-scrumboks-blue to-scrumboks-blue-dark',
      icon: Star,
      highlight: 'Elite Development',
      stats: { experience: '3+ jaar', intensity: 'Hoog' },
    },
  ];

  return (
    <section
      id="teams"
      className="py-20 bg-gradient-to-b from-scrumboks-white via-scrumboks-gray-light/20 to-scrumboks-blue-light/10 relative overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-scrumboks-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-scrumboks-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Professional Section Header */}
        <div
          className={`text-center mb-16 ${
            isVisible ? 'animate-fadeInUp' : 'opacity-0'
          }`}
        >
          <div className="inline-block bg-gradient-to-r from-scrumboks-blue/10 via-scrumboks-yellow/10 to-scrumboks-blue/10 backdrop-blur-sm border border-scrumboks-blue/20 rounded-2xl px-8 py-3 mb-6">
            <span className="text-scrumboks-blue font-bold text-lg tracking-wide">
              Onze Teams
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-scrumboks-blue mb-6">
            <span className="block font-medium">Ontdek jouw</span>
            <span className="block bg-gradient-to-r from-scrumboks-blue via-scrumboks-yellow to-scrumboks-blue bg-clip-text text-transparent font-semibold">
              Perfecte Team
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-scrumboks-gray max-w-4xl mx-auto leading-relaxed">
            <span className="text-scrumboks-blue font-semibold">
              Van 6 tot 60+ jaar
            </span>{' '}
            - bij Scrumboks vindt iedereen zijn plek. Of je nu net begint of al
            jaren speelt,
            <span className="text-scrumboks-yellow font-semibold">
              {' '}
              samen maken we rugby tot een levenslange passie.
            </span>
          </p>
        </div>

        {/* Professional Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teams.map((team, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: `1px solid ${
                  hoveredTeam === index
                    ? 'rgba(8, 22, 137, 0.3)'
                    : 'rgba(8, 22, 137, 0.1)'
                }`,
              }}
              onMouseEnter={() => setHoveredTeam(index)}
              onMouseLeave={() => setHoveredTeam(null)}
            >
              {/* Professional Header */}
              <CardHeader className="pb-4 relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-scrumboks-blue to-scrumboks-blue-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <team.icon className="w-6 h-6 text-scrumboks-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-scrumboks-blue group-hover:text-scrumboks-blue-dark transition-colors duration-300">
                        {team.name}
                      </CardTitle>
                      <div className="text-sm font-semibold text-scrumboks-yellow uppercase tracking-wide">
                        {team.highlight}
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-scrumboks-blue/10 to-scrumboks-yellow/10 px-3 py-1 rounded-full">
                    <span className="text-xs font-bold text-scrumboks-blue uppercase tracking-wide">
                      {team.level}
                    </span>
                  </div>
                </div>

                <p className="text-scrumboks-gray leading-relaxed text-sm">
                  {team.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Professional Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-scrumboks-blue/5 to-scrumboks-blue/10 p-4 rounded-xl border border-scrumboks-blue/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-scrumboks-blue" />
                      <span className="text-sm font-semibold text-scrumboks-blue">
                        Leden
                      </span>
                    </div>
                    <p className="text-xl font-bold text-scrumboks-blue">
                      {team.members}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-scrumboks-yellow/5 to-scrumboks-yellow/10 p-4 rounded-xl border border-scrumboks-yellow/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-scrumboks-yellow" />
                      <span className="text-sm font-semibold text-scrumboks-yellow">
                        Leeftijd
                      </span>
                    </div>
                    <p className="text-xl font-bold text-scrumboks-yellow">
                      {team.age}
                    </p>
                  </div>
                </div>

                {/* Training Info */}
                <div className="bg-gradient-to-r from-scrumboks-gray-light/30 to-scrumboks-white/50 p-4 rounded-xl border border-scrumboks-blue/5">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-scrumboks-blue" />
                    <span className="font-semibold text-scrumboks-blue text-sm">
                      Training
                    </span>
                  </div>
                  <p className="text-scrumboks-gray font-medium text-sm">
                    {team.training}
                  </p>
                </div>

                {/* Commitment Level - Professional Style */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-scrumboks-gray">
                    Inzet niveau:
                  </span>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            i <
                            (team.commitment === 'Hoog'
                              ? 3
                              : team.commitment === 'Gemiddeld'
                              ? 2
                              : 1)
                              ? 'bg-scrumboks-yellow'
                              : 'bg-scrumboks-gray-light'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-semibold text-scrumboks-blue">
                      {team.commitment}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Training Location */}
        <div className="bg-gradient-to-br from-scrumboks-blue/5 via-scrumboks-yellow/5 to-scrumboks-blue/5 rounded-3xl p-8 border border-scrumboks-blue/10 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-32 h-32 bg-scrumboks-yellow rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-scrumboks-blue rounded-full translate-y-20 -translate-x-20" />
          </div>

          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-scrumboks-yellow/20 to-scrumboks-blue/20 rounded-full p-3 mb-4">
                <MapPin className="w-8 h-8 text-scrumboks-blue" />
              </div>
              <h3 className="text-3xl font-bold text-scrumboks-blue mb-4">
                Waar de magie gebeurt
              </h3>
              <p className="text-lg text-scrumboks-gray max-w-2xl mx-auto">
                Al onze teams trainen op{' '}
                <span className="text-scrumboks-blue font-semibold">
                  Sportpark Rauwenhof
                </span>{' '}
                in Tiel. Een plek waar vriendschappen ontstaan en dromen
                werkelijkheid worden.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-scrumboks-blue to-scrumboks-blue-light rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-scrumboks-white" />
                </div>
                <h4 className="font-bold text-scrumboks-blue mb-2">Locatie</h4>
                <p className="text-scrumboks-gray text-sm">
                  Beethovenstraat 18a
                  <br />
                  4003 KX Tiel
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-scrumboks-yellow to-scrumboks-gold rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-scrumboks-white" />
                </div>
                <h4 className="font-bold text-scrumboks-blue mb-2">
                  Openingstijden
                </h4>
                <p className="text-scrumboks-gray text-sm">
                  Di-Do: 18:45 - 20:30
                  <br />
                  Vr: 20:00 - 22:00
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-scrumboks-blue-dark to-scrumboks-blue rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-scrumboks-white" />
                </div>
                <h4 className="font-bold text-scrumboks-blue mb-2">Contact</h4>
                <p className="text-scrumboks-gray text-sm">
                  0344 623201
                  <br />
                  info@scrumboks.nl
                </p>
              </div>
            </div>

            {/* Professional CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-scrumboks-blue to-scrumboks-blue-dark hover:from-scrumboks-blue-dark hover:to-scrumboks-black text-scrumboks-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 group font-bold text-lg px-8 py-4"
                onClick={() =>
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                <span className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Kom een keer kijken</span>
                  <span className="text-2xl group-hover:animate-pulse">🏉</span>
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
