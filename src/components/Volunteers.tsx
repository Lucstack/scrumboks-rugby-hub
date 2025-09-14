import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Trophy, Clock, Heart, Target, Shield, Star, Calendar } from 'lucide-react';

const Volunteers = () => {
  const volunteerRoles = [
    {
      icon: Trophy,
      title: 'Coach/Assistent Coach',
      description: 'Help bij het trainen van onze teams. Ervaring met rugby is welkom maar niet verplicht.',
      commitment: '2-4 uur per week',
      level: 'Ervaring welkom',
      urgent: true,
      color: 'from-scrumboks-blue to-scrumboks-blue-light'
    },
    {
      icon: Users,
      title: 'Jeugdbegeleider',
      description: 'Begeleid onze jongste spelers (6-12 jaar) tijdens trainingen en wedstrijden.',
      commitment: '2-3 uur per week',
      level: 'Beginners welkom',
      urgent: true,
      color: 'from-scrumboks-yellow to-scrumboks-gold'
    },
    {
      icon: Shield,
      title: 'Scheidsrechter',
      description: 'Fluit wedstrijden en help bij het leren van de regels. Cursus wordt aangeboden.',
      commitment: '1-2 uur per week',
      level: 'Cursus beschikbaar',
      urgent: false,
      color: 'from-scrumboks-blue-light to-scrumboks-yellow'
    },
    {
      icon: Heart,
      title: 'Barcommissie',
      description: 'Help bij het beheren van de kantine tijdens wedstrijden en evenementen.',
      commitment: '2-4 uur per maand',
      level: 'Flexibel',
      urgent: false,
      color: 'from-scrumboks-yellow to-scrumboks-gold'
    },
    {
      icon: Target,
      title: 'Evenementen Organisator',
      description: 'Organiseer clubactiviteiten, toernooien en sociale evenementen.',
      commitment: 'Variabel',
      level: 'Creatief',
      urgent: false,
      color: 'from-scrumboks-gray to-scrumboks-blue-light'
    },
    {
      icon: Star,
      title: 'PR & Communicatie',
      description: 'Help met social media, website en communicatie naar leden en buitenwereld.',
      commitment: '1-2 uur per week',
      level: 'Online',
      urgent: false,
      color: 'from-scrumboks-blue to-scrumboks-blue-light'
    }
  ];

  return (
    <section id="volunteers" className="py-20 bg-gradient-to-b from-scrumboks-white to-scrumboks-gray-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-scrumboks-blue mb-6">
            Vrijwilligers Gezocht!
          </h2>
          <p className="text-lg lg:text-xl text-scrumboks-gray max-w-3xl mx-auto leading-relaxed">
            Scrumboks draait op de inzet van onze geweldige vrijwilligers. 
            <span className="text-scrumboks-blue font-semibold">Help jij ons ook?</span>
          </p>
        </div>

        {/* Urgent Roles */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-scrumboks-blue mb-4 flex items-center justify-center gap-3">
              <div className="w-8 h-8 bg-scrumboks-yellow rounded-full flex items-center justify-center">
                <span className="text-scrumboks-black font-bold text-sm">!</span>
              </div>
              Dringend Gezocht
            </h3>
            <p className="text-scrumboks-gray">
              Deze rollen hebben we het hardst nodig
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {volunteerRoles.filter(role => role.urgent).map((role, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-lg transition-all duration-300 group">
                <div className={`h-2 bg-gradient-to-r ${role.color}`} />
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-scrumboks-blue/10 w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <role.icon className="w-6 h-6 text-scrumboks-blue" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-scrumboks-blue">
                        {role.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="bg-scrumboks-yellow text-scrumboks-black px-2 py-1 rounded-full text-xs font-medium">
                          Dringend
                        </span>
                        <span className="text-sm text-scrumboks-gray">{role.level}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-scrumboks-gray mb-4 leading-relaxed">
                    {role.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-scrumboks-blue">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">{role.commitment}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Roles */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-scrumboks-blue mb-4">
              Alle Vrijwilligersrollen
            </h3>
            <p className="text-scrumboks-gray">
              Er zijn verschillende manieren om bij te dragen aan onze club
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {volunteerRoles.map((role, index) => (
              <Card key={index} className="border-0 shadow-soft hover:shadow-lg transition-all duration-300 group">
                <div className={`h-2 bg-gradient-to-r ${role.color}`} />
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="bg-scrumboks-blue/10 w-10 h-10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <role.icon className="w-5 h-5 text-scrumboks-blue" />
                    </div>
                    <div>
                      <CardTitle className="text-base font-bold text-scrumboks-blue">
                        {role.title}
                      </CardTitle>
                      <span className="text-sm text-scrumboks-gray">{role.level}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-scrumboks-gray mb-3 text-sm leading-relaxed">
                    {role.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-scrumboks-blue">
                    <Clock className="w-4 h-4" />
                    <span>{role.commitment}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-scrumboks-blue/5 to-scrumboks-yellow/5 p-12 rounded-2xl">
          <div className="bg-scrumboks-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-scrumboks-blue" />
          </div>
          <h3 className="text-3xl font-bold text-scrumboks-blue mb-6">
            Word vrijwilliger bij Scrumboks!
          </h3>
          <p className="text-scrumboks-gray mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Elke bijdrage is welkom! Of je nu ervaring hebt of niet, 
            we helpen je graag op weg. Samen maken we Scrumboks nog beter.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-scrumboks-blue/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-scrumboks-blue" />
              </div>
              <h4 className="font-semibold text-scrumboks-blue mb-2">Flexibel</h4>
              <p className="text-sm text-scrumboks-gray">Kies je eigen uren en taken</p>
            </div>
            <div className="text-center">
              <div className="bg-scrumboks-yellow/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6 text-scrumboks-yellow" />
              </div>
              <h4 className="font-semibold text-scrumboks-blue mb-2">Opleiding</h4>
              <p className="text-sm text-scrumboks-gray">Cursussen en begeleiding</p>
            </div>
            <div className="text-center">
              <div className="bg-scrumboks-blue/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-scrumboks-blue" />
              </div>
              <h4 className="font-semibold text-scrumboks-blue mb-2">Gezellig</h4>
              <p className="text-sm text-scrumboks-gray">Word onderdeel van de familie</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="hero" 
              size="lg"
              className="bg-gradient-to-r from-scrumboks-blue to-scrumboks-blue-dark hover:from-scrumboks-blue-dark hover:to-scrumboks-black"
            >
              <Heart className="w-5 h-5 mr-2" />
              Ik wil helpen!
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-scrumboks-blue text-scrumboks-blue hover:bg-scrumboks-blue hover:text-white"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Meer informatie
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Volunteers;
