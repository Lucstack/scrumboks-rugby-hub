import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin, Users, Calendar } from 'lucide-react';

const Teams = () => {
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
    },
    {
      name: 'TBM',
      level: 'Jeugd',
      description:
        'Jonge talenten van 6-12 jaar die de basis van rugby leren. Veel plezier en ontwikkeling staan centraal in een veilige omgeving.',
      training: 'Dinsdag & Donderdag 18:45',
      members: '53 spelers',
      age: '6-12 jaar',
      commitment: 'Gemiddeld',
      color: 'from-scrumboks-blue-light to-scrumboks-yellow',
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
      color: 'from-scrumboks-blue to-scrumboks-blue-light',
    },
    {
      name: 'Colts',
      level: 'Jeugd',
      description:
        'Topniveau jeugdspelers die zich voorbereiden op seniorenrugby.',
      training: 'Dinsdag & Donderdag 18:45',
      members: '16 spelers',
      age: '16-18 jaar',
      commitment: 'Gemiddeld',
      color: 'from-scrumboks-yellow to-scrumboks-gold',
    },
  ];

  return (
    <section id="teams" className="py-20 bg-scrumboks-blue-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-scrumboks-blue mb-6">
            Onze Teams
          </h2>
          <p className="text-lg lg:text-xl text-scrumboks-gray max-w-3xl mx-auto leading-relaxed">
            Van beginnende jeugdspelers tot ervaren veteranen - er is een plek
            voor iedereen bij Scrumboks. Ontdek welk team het beste bij jou
            past.
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teams.map((team, index) => (
            <Card
              key={index}
              className="group hover:shadow-medium transition-all duration-300 border-0 overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${team.color}`} />

              <CardHeader className="pb-4">
                <CardTitle className="text-scrumboks-blue group-hover:text-scrumboks-blue-dark transition-colors duration-200">
                  {team.name}
                </CardTitle>
                <div className="inline-block bg-scrumboks-yellow/20 text-scrumboks-blue text-sm font-medium px-3 py-1 rounded-full w-fit">
                  {team.level}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-scrumboks-gray leading-relaxed">
                  {team.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-scrumboks-gray">
                    <Clock className="w-4 h-4 text-scrumboks-blue" />
                    <span>{team.training}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-scrumboks-gray">
                    <Users className="w-4 h-4 text-scrumboks-blue" />
                    <span>{team.members}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-scrumboks-gray">
                    <Calendar className="w-4 h-4 text-scrumboks-blue" />
                    <span>{team.age}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-scrumboks-gray">Inzet niveau:</span>
                    <span className="font-medium text-scrumboks-blue">
                      {team.commitment}
                    </span>
                  </div>
                </div>

                <Button variant="team" size="sm" className="w-full mt-4">
                  Meer informatie
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Training Location */}
        <div className="bg-card p-8 rounded-lg shadow-soft">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-scrumboks-blue mb-4">
                Trainingslocatie
              </h3>
              <p className="text-scrumboks-gray mb-6 leading-relaxed">
                Al onze teams trainen op ons prachtige hoofdveld met uitstekende
                faciliteiten. We beschikken over kleedkamers, een kantine en een
                moderne trainingsruimte.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-scrumboks-blue" />
                  <span className="text-scrumboks-gray">
                    Sportpark Rauwenhof, Beethovenstraat 18a, 4003 KX Tiel
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-scrumboks-blue" />
                  <span className="text-scrumboks-gray">
                    Openingstijden: Di-Do 18:45-20:30 & Vrijdag 20:00-22:00
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-scrumboks-gray">
                    📞 0344 623201 (clubhuis)
                  </span>
                </div>
              </div>

              <Button variant="hero" size="lg">
                Kom een keer kijken
              </Button>
            </div>

            <div className="bg-scrumboks-blue-light/20 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-scrumboks-gray">
                <MapPin className="w-12 h-12 mx-auto mb-3 opacity-60 text-scrumboks-blue" />
                <p>Sportpark Rauwenhof</p>
                <p className="text-sm">Tiel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
