import { Button } from "@/components/ui/button";
import { Heart, Trophy, Users, Target } from "lucide-react";
import teamCelebration from "@/assets/team-celebration.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Respect",
      description: "Wederzijds respect voor medespelers, tegenstanders en officials staat centraal in alles wat we doen."
    },
    {
      icon: Users,
      title: "Teamwork",
      description: "Samen zijn we sterker. Rugby draait om samenwerking en elkaar helpen om beter te worden."
    },
    {
      icon: Trophy,
      title: "Passie",
      description: "Onze liefde voor rugby en de sport drijft ons elke dag om het beste uit onszelf te halen."
    },
    {
      icon: Target,
      title: "Discipline",
      description: "Discipline in training en wedstrijden helpt ons groeien als team en als individu."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-scrumboks-blue mb-6">
            Over Scrumboks
          </h2>
          <p className="text-lg lg:text-xl text-scrumboks-gray max-w-3xl mx-auto leading-relaxed">
            Sinds 1975 dé tofste rugbyclub van de Betuwe! Een plek waar rugbypassie en 
            echte vriendschap hand in hand gaan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-scrumboks-blue mb-4">
                Onze Verhaal
              </h3>
              <p className="text-scrumboks-gray leading-relaxed mb-6">
                Opgericht in 1975, is Scrumboks uitgegroeid tot dé rugbyclub van Tiel en omgeving. 
                Wat begon als een kleine groep rugbyliefhebbers, is nu een hechte gemeenschap van 50 leden 
                verdeeld over 6 diverse teams. Volgend jaar vieren we ons 50-jarig jubileum!
              </p>
              <p className="text-scrumboks-gray leading-relaxed">
                Of je nu voor het eerst een rugbybal vasthoudt of al jaren ervaring hebt, bij Scrumboks 
                vind je je plek. We geloven dat rugby voor iedereen toegankelijk moet zijn en dat plezier 
                en respect de basis vormen van onze club.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <div className="text-3xl font-bold text-scrumboks-yellow mb-2">1975</div>
                <div className="text-scrumboks-gray">Opgericht in Tiel</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-soft">
                <div className="text-3xl font-bold text-scrumboks-yellow mb-2">50</div>
                <div className="text-scrumboks-gray">Enthousiaste leden</div>
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
            <div className="absolute inset-0 bg-gradient-to-t from-rugby-green/20 to-transparent rounded-lg" />
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-scrumboks-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-scrumboks-blue group-hover:scale-110 transition-all duration-300">
                <value.icon className="w-8 h-8 text-scrumboks-blue group-hover:text-scrumboks-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-scrumboks-blue mb-3">{value.title}</h4>
              <p className="text-scrumboks-gray leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;