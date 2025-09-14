import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Handshake } from 'lucide-react';

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 bg-gradient-to-b from-scrumboks-gray-light/30 to-scrumboks-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-scrumboks-blue mb-6">
            Onze Sponsors & Partners
          </h2>
          <p className="text-lg lg:text-xl text-scrumboks-gray max-w-3xl mx-auto leading-relaxed">
            We zijn dankbaar voor de steun van onze sponsors en partners die ons helpen 
            om rugby voor iedereen toegankelijk te maken.
          </p>
        </div>

        {/* Sponsor Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center border-0 shadow-soft hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="bg-scrumboks-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-scrumboks-blue" />
              </div>
              <CardTitle className="text-xl font-bold text-scrumboks-blue">
                Hoofdsponsors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-scrumboks-gray mb-4">
                Onze belangrijkste partners die ons structureel ondersteunen.
              </p>
              <div className="space-y-3">
                <div className="bg-scrumboks-blue/5 p-4 rounded-lg">
                  <p className="font-medium text-scrumboks-blue">Naam Hoofdsponsor</p>
                  <p className="text-sm text-scrumboks-gray">Beschrijving van de sponsor</p>
                </div>
                <div className="bg-scrumboks-blue/5 p-4 rounded-lg">
                  <p className="font-medium text-scrumboks-blue">Partner Bedrijf</p>
                  <p className="text-sm text-scrumboks-gray">Lokale onderneming</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-soft hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="bg-scrumboks-yellow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-scrumboks-yellow" />
              </div>
              <CardTitle className="text-xl font-bold text-scrumboks-blue">
                Teamsponsors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-scrumboks-gray mb-4">
                Sponsors die specifieke teams ondersteunen.
              </p>
              <div className="space-y-3">
                <div className="bg-scrumboks-yellow/5 p-4 rounded-lg">
                  <p className="font-medium text-scrumboks-blue">Senioren Sponsor</p>
                  <p className="text-sm text-scrumboks-gray">Ondersteunt ons eerste team</p>
                </div>
                <div className="bg-scrumboks-yellow/5 p-4 rounded-lg">
                  <p className="font-medium text-scrumboks-blue">Jeugd Sponsor</p>
                  <p className="text-sm text-scrumboks-gray">Investeert in de toekomst</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-soft hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="bg-scrumboks-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-8 h-8 text-scrumboks-blue" />
              </div>
              <CardTitle className="text-xl font-bold text-scrumboks-blue">
                Partners
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-scrumboks-gray mb-4">
                Lokale partners die ons helpen met faciliteiten en diensten.
              </p>
              <div className="space-y-3">
                <div className="bg-scrumboks-blue/5 p-4 rounded-lg">
                  <p className="font-medium text-scrumboks-blue">Sportpark Rauwenhof</p>
                  <p className="text-sm text-scrumboks-gray">Onze thuisbasis</p>
                </div>
                <div className="bg-scrumboks-blue/5 p-4 rounded-lg">
                  <p className="font-medium text-scrumboks-blue">Lokale Bedrijven</p>
                  <p className="text-sm text-scrumboks-gray">Tielse ondernemers</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-scrumboks-blue/5 to-scrumboks-yellow/5 p-8 rounded-2xl">
          <h3 className="text-2xl font-bold text-scrumboks-blue mb-4">
            Word ook sponsor van Scrumboks!
          </h3>
          <p className="text-scrumboks-gray mb-6 max-w-2xl mx-auto">
            Steun onze rugbyclub en help ons om rugby voor iedereen toegankelijk te maken. 
            Samen maken we het verschil in de Tielse sportgemeenschap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:sponsoring@scrumboks.nl" 
              className="bg-scrumboks-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-scrumboks-blue-dark transition-colors duration-200"
            >
              Contact sponsoring
            </a>
            <a 
              href="tel:0344623201" 
              className="border-2 border-scrumboks-blue text-scrumboks-blue px-6 py-3 rounded-lg font-medium hover:bg-scrumboks-blue hover:text-white transition-colors duration-200"
            >
              0344 623201
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
