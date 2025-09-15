import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-scrumboks-gray-light/30 to-scrumboks-blue/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-scrumboks-blue mb-6">
            Contact & Locatie
          </h2>
          <p className="text-lg lg:text-xl text-scrumboks-gray max-w-3xl mx-auto leading-relaxed">
            Heb je vragen of wil je langskomen? We staan klaar om je te helpen!
            Neem gerust contact met ons op.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-scrumboks-blue flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  Contactgegevens
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-scrumboks-yellow" />
                    <div>
                      <p className="font-medium text-scrumboks-blue">
                        Clubhuis
                      </p>
                      <p className="text-scrumboks-gray">0344 623201</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-scrumboks-yellow" />
                    <div>
                      <p className="font-medium text-scrumboks-blue">E-mail</p>
                      <p className="text-scrumboks-gray">info@scrumboks.nl</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-scrumboks-yellow" />
                    <div>
                      <p className="font-medium text-scrumboks-blue">Adres</p>
                      <p className="text-scrumboks-gray">
                        Sportpark Rauwenhof
                        <br />
                        Beethovenstraat 18a
                        <br />
                        4003 KX Tiel
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-scrumboks-yellow" />
                    <div>
                      <p className="font-medium text-scrumboks-blue">
                        Openingstijden
                      </p>
                      <div className="text-scrumboks-gray text-sm space-y-1">
                        <p>Di-Do: 18:45 - 20:30</p>
                        <p>Vrijdag: 20:00 - 22:00</p>
                        <p>Trainingstijden verschillen per team</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="border-0 shadow-soft">
              <CardHeader>
                <CardTitle className="text-scrumboks-blue">
                  Volg ons online
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-scrumboks-blue hover:text-scrumboks-white hover:border-scrumboks-blue"
                    onClick={() => window.open('https://www.facebook.com/Scrumboks', '_blank')}
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-scrumboks-blue hover:text-scrumboks-white hover:border-scrumboks-blue"
                    onClick={() => window.open('https://www.instagram.com/scrumboks_rugby/', '_blank')}
                  >
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-scrumboks-blue hover:text-scrumboks-white hover:border-scrumboks-blue"
                    onClick={() => window.open('https://x.com/scrumboks', '_blank')}
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-scrumboks-gray mt-3">
                  Mis geen wedstrijd, training of clubactiviteit! Volg ons voor
                  de laatste updates.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="text-scrumboks-blue">
                Stuur ons een bericht
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                      Voornaam
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200"
                      placeholder="Je voornaam"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                      Achternaam
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200"
                      placeholder="Je achternaam"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200"
                    placeholder="je@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                    Onderwerp
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200">
                    <option>Algemene informatie</option>
                    <option>Lid worden</option>
                    <option>Proeftraining</option>
                    <option>Sponsormogelijkheden</option>
                    <option>Vrijwilligerswerk</option>
                    <option>Anders</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                    Bericht
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200 resize-vertical"
                    placeholder="Vertel ons meer over je vraag..."
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Verzend bericht
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map Placeholder */}
        <Card className="border-0 shadow-soft overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-scrumboks-blue-light/20 h-64 flex items-center justify-center">
              <div className="text-center text-scrumboks-gray">
                <MapPin className="w-12 h-12 mx-auto mb-3 opacity-60 text-scrumboks-blue" />
                <p className="font-medium">Kaart van onze locatie</p>
                <p className="text-sm">Sportpark Rauwenhof, Tiel</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-scrumboks-blue mb-4">
            Klaar om te beginnen?
          </h3>
          <p className="text-scrumboks-gray mb-8 max-w-2xl mx-auto">
            Kom langs voor een proeftraining of neem contact met ons op. We
            helpen je graag op weg bij Scrumboks!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="action" size="xl">
              Plan een proeftraining
            </Button>
            <Button variant="team" size="xl">
              Bel ons direct
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
