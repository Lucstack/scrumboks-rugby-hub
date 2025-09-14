import { Button } from '@/components/ui/button';
import { Heart, Trophy, Users, Target } from 'lucide-react';
import teamCelebration from '@/assets/team-celebration.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Plezier',
      description:
        'Rugby moet leuk zijn! We combineren serieuze training met veel plezier.',
    },
    {
      icon: Users,
      title: 'Gemeenschap',
      description:
        'Samen zijn we sterker. Onze club is een tweede familie voor alle leden.',
    },
    {
      icon: Heart,
      title: 'Passie',
      description:
        'Liefde voor rugby en respect voor de sport staan centraal in alles wat we doen.',
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description:
        'We streven naar het beste in onszelf en ondersteunen elkaar om te groeien.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-scrumboks-white to-scrumboks-gray-light/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-scrumboks-blue mb-6">
            Over Scrumboks
          </h2>
          <p className="text-lg lg:text-xl text-scrumboks-gray max-w-3xl mx-auto leading-relaxed">
            Al meer dan 45 jaar brengen we rugbyliefhebbers samen in een warme,
            inclusieve gemeenschap waar iedereen welkom is.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-scrumboks-blue mb-4">
                Onze Missie
              </h3>
              <p className="text-scrumboks-gray leading-relaxed mb-6">
                Bij Scrumboks geloven we dat rugby meer is dan een sport. Het is
                een manier van leven die respect, teamwork en
                doorzettingsvermogen bevordert. We bieden een plek waar spelers
                van alle niveaus kunnen groeien, zowel op als naast het veld.
              </p>
              <p className="text-scrumboks-gray leading-relaxed">
                Of je nu een ervaren speler bent of voor het eerst kennismaakt
                met rugby, bij ons vind je de ondersteuning en vriendschap die
                je nodig hebt om te floreren.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-soft">
                  <div className="text-3xl font-bold text-scrumboks-gold mb-2">
                    1976
                  </div>
                  <div className="text-scrumboks-gray">Opgericht</div>
                </div>
                <div className="bg-card p-6 rounded-lg shadow-soft">
                  <div className="text-3xl font-bold text-scrumboks-gold mb-2">
                    50+
                  </div>
                  <div className="text-scrumboks-gray">Actieve leden</div>
                </div>
            </div>

            <Button variant="hero" size="lg">
              Leer ons beter kennen
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={teamCelebration}
              alt="Scrumboks team viering na overwinning"
              className="w-full h-[500px] object-cover rounded-lg shadow-medium"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-scrumboks-blue/20 to-transparent rounded-lg" />
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-scrumboks-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-scrumboks-blue group-hover:scale-110 transition-all duration-300">
                <value.icon className="w-8 h-8 text-scrumboks-blue group-hover:text-scrumboks-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-scrumboks-blue mb-3">
                {value.title}
              </h4>
              <p className="text-scrumboks-gray leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
