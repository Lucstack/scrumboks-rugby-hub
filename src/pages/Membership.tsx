import Navbar from '@/components/Navbar';
import MembershipForm from '@/components/MembershipForm';
import { Users, Heart, Trophy, Target } from 'lucide-react';

const Membership = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-scrumboks-blue-light/20 to-scrumboks-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-scrumboks-blue mb-6">
            Word lid van Scrumboks
          </h1>
          <p className="text-lg lg:text-xl text-scrumboks-gray max-w-3xl mx-auto leading-relaxed">
            Sluit je aan bij onze rugbyfamilie! Of je nu beginner bent of ervaren speler, 
            er is altijd een plek voor je bij Scrumboks.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-scrumboks-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-scrumboks-blue mb-4">
              Waarom lid worden?
            </h2>
            <p className="text-lg text-scrumboks-gray max-w-2xl mx-auto">
              Bij Scrumboks krijg je meer dan alleen rugby training. Je wordt onderdeel van een hechte gemeenschap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-scrumboks-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-scrumboks-blue" />
              </div>
              <h3 className="text-xl font-bold text-scrumboks-blue mb-3">Gemeenschap</h3>
              <p className="text-scrumboks-gray">
                Word onderdeel van een hechte rugbyfamilie waar iedereen welkom is.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-scrumboks-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-scrumboks-blue" />
              </div>
              <h3 className="text-xl font-bold text-scrumboks-blue mb-3">Passie</h3>
              <p className="text-scrumboks-gray">
                Train met coaches en spelers die net zoveel liefde voor rugby hebben als jij.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-scrumboks-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-scrumboks-blue" />
              </div>
              <h3 className="text-xl font-bold text-scrumboks-blue mb-3">Ontwikkeling</h3>
              <p className="text-scrumboks-gray">
                Groei als speler en als persoon met onze professionele begeleiding.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-scrumboks-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-scrumboks-blue" />
              </div>
              <h3 className="text-xl font-bold text-scrumboks-blue mb-3">Plezier</h3>
              <p className="text-scrumboks-gray">
                Rugby moet leuk zijn! Geniet van trainingen, wedstrijden en clubactiviteiten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form */}
      <section className="py-16 bg-gradient-to-b from-scrumboks-gray-light/30 to-scrumboks-blue-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MembershipForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-scrumboks-blue text-scrumboks-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">SCRUMBOKS</h3>
              <p className="text-scrumboks-white/80 mb-4 leading-relaxed">
                Rugbyvereniging Scrumboks - waar passie voor rugby en
                gemeenschapszin samenkomen. Al 50 jaar een thuis voor
                rugbyliefhebbers.
              </p>
              <p className="text-sm text-scrumboks-white/60">
                © 2025 Scrumboks Rugby Club. Alle rechten voorbehouden.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Snelle Links</h4>
              <ul className="space-y-2 text-scrumboks-white/80 text-sm">
                <li>
                  <a
                    href="/#about"
                    className="hover:text-scrumboks-yellow transition-colors"
                  >
                    Over ons
                  </a>
                </li>
                <li>
                  <a
                    href="/#teams"
                    className="hover:text-scrumboks-yellow transition-colors"
                  >
                    Teams
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    className="hover:text-scrumboks-yellow transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/membership"
                    className="hover:text-scrumboks-yellow transition-colors"
                  >
                    Lid worden
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-scrumboks-white/80 text-sm">
                <li>0344 623201</li>
                <li>info@scrumboks.nl</li>
                <li>Sportpark Rauwenhof</li>
                <li>Beethovenstraat 18a, 4003 KX Tiel</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Membership;
