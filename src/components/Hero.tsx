import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-rugby-action.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Rugby spelers in actie op het veld"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-rugby-black/70 via-rugby-green-dark/60 to-rugby-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-rugby-white leading-tight">
            <span className="block">SAMEN STERK,</span>
            <span className="block text-rugby-gold">SAMEN PLEZIER</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-rugby-white/90 max-w-3xl mx-auto leading-relaxed">
            Welkom bij Scrumboks - waar passie voor rugby en gemeenschapszin samenkomen. 
            Sluit je aan bij onze dynamische club en ervaar de kracht van teamwerk.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button variant="action" size="xl" className="w-full sm:w-auto">
              Word lid van ons team
            </Button>
            <Button variant="minimal" size="xl" className="w-full sm:w-auto">
              Bekijk onze teams
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-rugby-gold">150+</div>
              <div className="text-rugby-white/80 text-sm lg:text-base">Leden</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-rugby-gold">6</div>
              <div className="text-rugby-white/80 text-sm lg:text-base">Teams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-rugby-gold">25+</div>
              <div className="text-rugby-white/80 text-sm lg:text-base">Jaren ervaring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-rugby-gold">100%</div>
              <div className="text-rugby-white/80 text-sm lg:text-base">Plezier</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-rugby-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-rugby-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;