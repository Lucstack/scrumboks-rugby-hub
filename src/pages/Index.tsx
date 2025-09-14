import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Teams from "@/components/Teams";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Teams />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-rugby-green text-rugby-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">SCRUMBOKS</h3>
              <p className="text-rugby-white/80 mb-4 leading-relaxed">
                Rugbyvereniging Scrumboks - waar passie voor rugby en gemeenschapszin samenkomen. 
                Al meer dan 25 jaar een thuis voor rugbyliefhebbers.
              </p>
              <p className="text-sm text-rugby-white/60">
                © 2024 Scrumboks Rugby Club. Alle rechten voorbehouden.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-rugby-white/80 text-sm">
                <li><a href="#about" className="hover:text-rugby-gold transition-colors">Over ons</a></li>
                <li><a href="#teams" className="hover:text-rugby-gold transition-colors">Teams</a></li>
                <li><a href="#contact" className="hover:text-rugby-gold transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-rugby-gold transition-colors">Lid worden</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-rugby-white/80 text-sm">
                <li>010 - 123 4567</li>
                <li>info@scrumboks.nl</li>
                <li>Sportpark De Groene Weide</li>
                <li>Rotterdam</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
