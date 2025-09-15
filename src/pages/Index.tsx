import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Teams from '@/components/Teams';
import Contact from '@/components/Contact';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Teams />
      <Contact />
      <BackToTop />

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
                    href="/scrumboks-rugby-hub/#about"
                    className="hover:text-scrumboks-yellow transition-colors"
                  >
                    Over ons
                  </a>
                </li>
                <li>
                  <a
                    href="/scrumboks-rugby-hub/#teams"
                    className="hover:text-scrumboks-yellow transition-colors"
                  >
                    Teams
                  </a>
                </li>
                <li>
                  <a
                    href="/scrumboks-rugby-hub/sponsors"
                    className="hover:text-scrumboks-yellow transition-colors"
                  >
                    Sponsors
                  </a>
                </li>
                <li>
                  <a
                    href="/scrumboks-rugby-hub/volunteers"
                    className="hover:text-scrumboks-yellow transition-colors"
                  >
                    Vrijwilligers
                  </a>
                </li>
                <li>
                  <a
                    href="/scrumboks-rugby-hub/membership"
                    className="hover:text-scrumboks-yellow transition-colors"
                  >
                    Lid worden
                  </a>
                </li>
                <li>
                  <a
                    href="/scrumboks-rugby-hub/#contact"
                    className="hover:text-scrumboks-yellow transition-colors"
                  >
                    Contact
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

export default Index;
