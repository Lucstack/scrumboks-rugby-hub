import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Users, Calendar } from "lucide-react";

const Teams = () => {
  const teams = [
    {
      name: "Heren 1",
      level: "Competitie",
      description: "Ons eerste herenteam dat strijdt in de regionale competitie. Voor ervaren spelers met ambities.",
      training: "Dinsdag & Vrijdag 19:30",
      members: "18 spelers",
      age: "18+",
      commitment: "Hoog",
      color: "from-scrumboks-blue to-scrumboks-blue-light"
    },
    {
      name: "Heren 2", 
      level: "Recreatief",
      description: "Een gezellig team voor spelers die rugby willen spelen in een ontspannen sfeer.",
      training: "Dinsdag 19:30",
      members: "15 spelers",
      age: "18+",
      commitment: "Gemiddeld",
      color: "from-scrumboks-yellow to-scrumboks-yellow-light"
    },
    {
      name: "Dames",
      level: "Gemengd",
      description: "Ons enthousiaste damesteam waar nieuwe speelsters van harte welkom zijn!",
      training: "Vrijdag 19:30",
      members: "12 speelsters",
      age: "16+",
      commitment: "Gemiddeld",
      color: "from-scrumboks-blue-light to-scrumboks-yellow"
    },
    {
      name: "Jeugd",
      level: "Ontwikkeling",
      description: "Voor jonge rugbytalenten. Focus op techniek, plezier en teamwork in een veilige omgeving.",
      training: "Zaterdag 10:00",
      members: "8 spelers",
      age: "12-18 jaar", 
      commitment: "Laag",
      color: "from-accent to-scrumboks-yellow-light"
    },
    {
      name: "Walking Rugby",
      level: "Laagdrempelig",
      description: "Rugby zonder rennen! Perfect voor 50+ of mensen die rustiger aan willen doen.",
      training: "Vrijdag 18:00",
      members: "10+ spelers",
      age: "Alle leeftijden",
      commitment: "Flexibel",
      color: "from-scrumboks-gray to-scrumboks-blue-light"
    },
    {
      name: "Touch Rugby",
      level: "Contactloos",
      description: "Contactloze variant in de zomer. Ideaal voor beginners en gemixte groepen.",
      training: "Donderdag (zomer)",
      members: "Variabel",
      age: "Iedereen welkom",
      commitment: "Zeer laag",
      color: "from-scrumboks-yellow-light to-scrumboks-blue-light"
    }
  ];

  return (
    <section id="teams" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-scrumboks-blue mb-6">
            Onze Teams
          </h2>
          <p className="text-lg lg:text-xl text-scrumboks-gray max-w-3xl mx-auto leading-relaxed">
            Van ervaren competitiespelers tot nieuwsgierige beginners - bij Scrumboks is er een team 
            voor iedereen. Ontdek waar jij het beste past!
          </p>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teams.map((team, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 border-0 overflow-hidden">
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
                    <span className="font-medium text-scrumboks-blue">{team.commitment}</span>
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
                Al onze teams trainen op ons prachtige veld in Tiel met goede faciliteiten. 
                We hebben kleedkamers, een gezellige kantine en alles wat je nodig hebt.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-scrumboks-blue" />
                  <span className="text-scrumboks-gray">Sportcomplex De Lok, Tiel</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-scrumboks-blue" />
                  <span className="text-scrumboks-gray">Trainingen: dinsdag & vrijdag 19:30</span>
                </div>
              </div>

              <Button variant="hero" size="lg">
                Kom een keer kijken
              </Button>
            </div>

            <div className="bg-muted/50 h-64 rounded-lg flex items-center justify-center">
              <div className="text-center text-scrumboks-gray">
                <MapPin className="w-12 h-12 mx-auto mb-3 opacity-60" />
                <p>Kaart van onze trainingslocatie</p>
                <p className="text-sm">Sportcomplex De Lok, Tiel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;