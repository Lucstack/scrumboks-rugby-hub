import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Star, Gift } from "lucide-react";

const XperienceRugby = () => {
  const benefits = [
    "10 complete trainingen met ervaren coaches",
    "Professioneel bitje voor optimale veiligheid", 
    "Gratis rugbybal om mee naar huis te nemen",
    "Persoonlijke begeleiding en tips",
    "Kennismaking met onze geweldige teamspirit",
    "Geen verdere verplichtingen - gewoon proberen!"
  ];

  return (
    <section id="xperience" className="py-20 bg-gradient-to-br from-scrumboks-yellow/10 via-background to-scrumboks-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-scrumboks-yellow/20 text-scrumboks-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            Populairste keuze voor beginners
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-scrumboks-blue mb-6">
            Xperience Rugby
          </h2>
          <p className="text-lg lg:text-xl text-scrumboks-gray max-w-3xl mx-auto leading-relaxed">
            Nieuw bij rugby? Start met ons Xperience Rugby programma! Voor slechts €15 krijg je 
            alles wat je nodig hebt om kennis te maken met de mooiste sport ter wereld.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Offer Details */}
          <div className="space-y-8">
            <Card className="border-2 border-scrumboks-yellow/30 shadow-yellow overflow-hidden">
              <div className="bg-gradient-to-r from-scrumboks-yellow to-scrumboks-yellow-light p-1">
                <div className="bg-background p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-2xl font-bold text-scrumboks-blue">
                        Xperience Rugby Pakket
                      </CardTitle>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-scrumboks-yellow">€15</div>
                        <div className="text-sm text-scrumboks-gray">Eenmalig</div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-scrumboks-yellow mt-0.5 flex-shrink-0" />
                          <span className="text-scrumboks-gray">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 space-y-4">
                      <Button variant="action" size="xl" className="w-full">
                        Start jouw rugby avontuur
                      </Button>
                      <p className="text-center text-sm text-scrumboks-gray">
                        Geen automatische verlenging • Direct beginnen • 100% plezier gegarandeerd
                      </p>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>

          {/* Right: Visual/Testimonial */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg shadow-soft">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-scrumboks-blue/10 rounded-full flex items-center justify-center">
                  <Gift className="w-6 h-6 text-scrumboks-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-scrumboks-blue">Waarom Xperience Rugby?</h3>
                  <p className="text-scrumboks-gray">Perfect voor beginners</p>
                </div>
              </div>
              
              <blockquote className="text-scrumboks-gray leading-relaxed mb-6 italic">
                "Ik had nog nooit rugby gespeeld, maar door Xperience Rugby ontdekte ik niet alleen 
                een geweldige sport, maar ook een fantastische club! De begeleiding was top en 
                het pakket maakte de drempel super laag."
              </blockquote>
              
              <div className="text-right">
                <p className="font-medium text-scrumboks-blue">- Sarah, lid sinds 2023</p>
                <p className="text-sm text-scrumboks-gray">Startte met Xperience Rugby</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-scrumboks-blue/5 rounded-lg">
                <div className="text-2xl font-bold text-scrumboks-blue mb-2">85%</div>
                <div className="text-sm text-scrumboks-gray">Wordt daarna lid</div>
              </div>
              <div className="text-center p-6 bg-scrumboks-yellow/10 rounded-lg">
                <div className="text-2xl font-bold text-scrumboks-blue mb-2">0</div>
                <div className="text-sm text-scrumboks-gray">Verplichtingen</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-scrumboks-blue mb-8">Veelgestelde vragen</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="text-left p-6 bg-card rounded-lg shadow-soft">
              <h4 className="font-semibold text-scrumboks-blue mb-2">Wanneer kan ik starten?</h4>
              <p className="text-scrumboks-gray text-sm">Je kunt elk moment starten! Kom gewoon langs op dinsdag- of vrijdagavond en we regelen alles ter plekke.</p>
            </div>
            <div className="text-left p-6 bg-card rounded-lg shadow-soft">
              <h4 className="font-semibold text-scrumboks-blue mb-2">Wat moet ik meenemen?</h4>
              <p className="text-scrumboks-gray text-sm">Alleen sportkleding en sportschoenen. Het bitje en bal krijg je van ons, dus je hoeft niets aan te schaffen.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XperienceRugby;