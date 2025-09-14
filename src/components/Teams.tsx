import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Users, Calendar } from "lucide-react";

const Teams = () => {
  const teams = [
    {
      name: "Senioren 1",
      level: "Competitie",
      description: "Ons eerste team dat strijdt in de hoogste regionale competitie. Ervaren spelers met ambities.",
      training: "Dinsdag & Donderdag 19:30",
      members: "25 spelers",
      age: "18+",
      commitment: "Hoog",
      color: "from-rugby-green to-rugby-green-light"
    },
    {
      name: "Senioren 2", 
      level: "Recreatief",
      description: "Een leuk team voor spelers die rugby willen spelen zonder de druk van competitie.",
      training: "Woensdag 19:30",
      members: "20 spelers",
      age: "18+",
      commitment: "Gemiddeld",
      color: "from-rugby-gold to-rugby-gold-light"
    },
    {
      name: "Jeugd U18",
      level: "Ontwikkeling",
      description: "Jonge talenten die zich voorbereiden op seniorenrugby. Focus op techniek en teamwork.",
      training: "Zaterdag 10:00",
      members: "18 spelers",
      age: "15-18 jaar",
      commitment: "Gemiddeld",
      color: "from-rugby-green-light to-rugby-gold"
    },
    {
      name: "Jeugd U15",
      level: "Basis",
      description: "Leren van de basisprincipes van rugby in een veilige en leuke omgeving.",
      training: "Zaterdag 09:00",
      members: "22 spelers",
      age: "12-15 jaar", 
      commitment: "Laag",
      color: "from-accent to-rugby-gold-light"
    },
    {
      name: "Touch Rugby",
      level: "Laagdrempelig",
      description: "Contactloze variant van rugby. Perfect voor beginners en een gemengd gezelschap.",
      training: "Vrijdag 18:30",
      members: "30+ spelers",
      age: "Alle leeftijden",
      commitment: "Flexibel",
      color: "from-rugby-gray to-rugby-green-light"
    },
    {
      name: "Veteranen",
      level: "Masters",
      description: "Voor de ervaren spelers die nog steeds de passie voelen. Gezelligheid staat voorop.",
      training: "Zondag 11:00",
      members: "15 spelers",
      age: "35+",
      commitment: "Laag",
      color: "from-rugby-green-dark to-rugby-green"
    }
  ];

  return (
    <section id="teams" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-rugby-green mb-6">
            Onze Teams
          </h2>
          <p className="text-lg lg:text-xl text-rugby-gray max-w-3xl mx-auto leading-relaxed">
            Van beginnende jeugdspelers tot ervaren veteranen - er is een plek voor iedereen bij Scrumboks.
            Ontdek welk team het beste bij jou past.
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teams.map((team, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 overflow-hidden">
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${team.color}`} />
              
              <CardHeader className="pb-4">
                <CardTitle className="text-rugby-green group-hover:text-rugby-green-dark transition-colors duration-200">
                  {team.name}
                </CardTitle>
                <div className="inline-block bg-rugby-gold/20 text-rugby-green text-sm font-medium px-3 py-1 rounded-full w-fit">
                  {team.level}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-rugby-gray leading-relaxed">
                  {team.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-sm text-rugby-gray">
                    <Clock className="w-4 h-4 text-rugby-green" />
                    <span>{team.training}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-rugby-gray">
                    <Users className="w-4 h-4 text-rugby-green" />
                    <span>{team.members}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-rugby-gray">
                    <Calendar className="w-4 h-4 text-rugby-green" />
                    <span>{team.age}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-rugby-gray">Inzet niveau:</span>
                    <span className="font-medium text-rugby-green">{team.commitment}</span>
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
              <h3 className="text-2xl font-bold text-rugby-green mb-4">
                Trainingslocatie
              </h3>
              <p className="text-rugby-gray mb-6 leading-relaxed">
                Al onze teams trainen op ons prachtige hoofdveld met uitstekende faciliteiten. 
                We beschikken over kleedkamers, een kantine en een moderne trainingsruimte.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-rugby-green" />
                  <span className="text-rugby-gray">Sportpark De Groene Weide, Rotterdam</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-rugby-green" />
                  <span className="text-rugby-gray">Velden open van 17:00 - 21:00</span>
                </div>
              </div>

              <Button variant="hero" size="lg">
                Kom een keer kijken
              </Button>
            </div>

            <div className="bg-muted/50 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-rugby-gray">
                <MapPin className="w-12 h-12 mx-auto mb-3 opacity-60" />
                <p>Kaart van trainingslocatie</p>
                <p className="text-sm">Google Maps integratie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;