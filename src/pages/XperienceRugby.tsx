import { useState } from 'react';
import Navbar from '@/components/Navbar';
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Trophy,
  Users,
  Gift,
  CheckCircle,
  Heart,
  Target,
  Shield,
  Star,
  Zap,
  Clock,
  Award,
  Sparkles,
  Calendar,
} from 'lucide-react';

const XperienceRugby = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    parentName: '',
    parentEmail: '',
    parentPhone: '',
    isMinor: false,
    motivation: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Netlify form submission
      const formDataToSubmit = {
        'form-name': 'xperience-rugby',
        ...formData,
        isMinor: formData.isMinor.toString(),
      };

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSubmit),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          age: '',
          parentName: '',
          parentEmail: '',
          parentPhone: '',
          isMinor: false,
          motivation: '',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-scrumboks-gray-light/30 to-scrumboks-white">
        <Navbar />
        <div className="pt-20 pb-12">
          <Card className="border-0 shadow-soft max-w-2xl mx-auto">
            <CardContent className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-scrumboks-yellow mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-scrumboks-blue mb-4">
                Aanmelding Xperience Rugby ontvangen!
              </h3>
              <p className="text-scrumboks-gray mb-6">
                Bedankt voor je aanmelding! We nemen zo snel mogelijk contact
                met je op om de details van de Xperience Rugby te bespreken.
              </p>
              <div className="bg-scrumboks-blue/10 p-4 rounded-lg mb-6">
                <p className="text-sm text-scrumboks-blue font-medium">
                  Wat gebeurt er nu?
                </p>
                <p className="text-sm text-scrumboks-gray mt-2">
                  We sturen je binnenkort een e-mail met meer informatie over de
                  Xperience Rugby en een link naar een uitgebreider formulier
                  voor je volledige profiel.
                </p>
              </div>
              <Button variant="hero" onClick={() => setIsSubmitted(false)}>
                Nieuwe aanmelding
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-scrumboks-gray-light/30 to-scrumboks-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-scrumboks-blue via-scrumboks-blue-light to-scrumboks-yellow/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border-4 border-scrumboks-yellow rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 border-4 border-scrumboks-white rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border-4 border-scrumboks-yellow rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 border-4 border-scrumboks-white rounded-full animate-bounce delay-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-scrumboks-yellow/20 text-scrumboks-yellow px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            NIEUW: Xperience Rugby
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-scrumboks-yellow to-scrumboks-gold bg-clip-text text-transparent">
              XPERIENCE
            </span>
            <br />
            <span className="text-white drop-shadow-lg">RUGBY</span>
          </h1>

          <p className="text-xl lg:text-2xl text-scrumboks-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            Geen betere manier om te proberen of rugby ook jouw ding kan zijn!
            <span className="text-scrumboks-yellow font-semibold">
              Ontdek de passie voor rugby in 10 leuke trainingen. Word lid van
              de club!
            </span>
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-scrumboks-yellow" />
              <span className="font-medium">10 Trainingen</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-scrumboks-yellow" />
              <span className="font-medium">5-18 jaar</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-scrumboks-yellow" />
              <span className="font-medium">Laagdrempelig</span>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-gradient-to-b from-scrumboks-white to-scrumboks-gray-light/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-scrumboks-blue mb-6 relative">
              Als je meedoet aan de Xperience krijg je:
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-scrumboks-yellow to-scrumboks-gold rounded-full"></div>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border-0 shadow-soft hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="bg-gradient-to-br from-scrumboks-blue/20 to-scrumboks-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-10 h-10 text-scrumboks-blue" />
                </div>
                <h3 className="text-2xl font-bold text-scrumboks-blue mb-4">
                  10 Trainingen
                </h3>
                <p className="text-scrumboks-gray leading-relaxed">
                  10x meetrainen op dinsdag- en/of vrijdagavond.
                  <span className="font-semibold text-scrumboks-blue">
                    Kies zelf wanneer je komt!
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-soft hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="bg-gradient-to-br from-scrumboks-yellow/20 to-scrumboks-yellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-scrumboks-yellow" />
                </div>
                <h3 className="text-2xl font-bold text-scrumboks-blue mb-4">
                  Bitje Inclusief
                </h3>
                <p className="text-scrumboks-gray leading-relaxed">
                  Een bitje bij je eerste training.
                  <span className="font-semibold text-scrumboks-yellow">
                    Veiligheid staat voorop!
                  </span>
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-soft hover:shadow-lg transition-all duration-300 group hover:-translate-y-2">
              <CardContent className="pt-8 pb-8">
                <div className="bg-gradient-to-br from-scrumboks-blue/20 to-scrumboks-blue/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Gift className="w-10 h-10 text-scrumboks-blue" />
                </div>
                <h3 className="text-2xl font-bold text-scrumboks-blue mb-4">
                  Rugbybal
                </h3>
                <p className="text-scrumboks-gray leading-relaxed">
                  Een mooie rugbybal als je de Xperience voltooid hebt.
                  <span className="font-semibold text-scrumboks-blue">
                    Om thuis te oefenen!
                  </span>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Price */}
          <div className="text-center mb-16">
            <div className="bg-gradient-to-br from-scrumboks-yellow/30 via-scrumboks-yellow/20 to-scrumboks-gold/20 p-12 rounded-3xl max-w-lg mx-auto relative overflow-hidden shadow-xl">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-scrumboks-yellow/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-scrumboks-blue/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-scrumboks-blue/10 text-scrumboks-blue px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  Voordelig kennismaken!
                </div>
                <h3 className="text-2xl font-bold text-scrumboks-blue mb-4">
                  Dit alles voor maar
                </h3>
                <div className="text-4xl font-bold bg-gradient-to-r from-scrumboks-blue to-scrumboks-blue-dark bg-clip-text text-transparent mb-4">
                  €15,-
                </div>
                <p className="text-scrumboks-blue font-semibold text-lg">
                  Inclusief bitje en rugbybal!
                </p>
                <div className="mt-4 text-sm text-scrumboks-gray">
                  Perfect om rugby te ontdekken
                </div>
              </div>
            </div>
          </div>

          {/* Rugby Values */}
          <div className="bg-gradient-to-br from-scrumboks-blue via-scrumboks-blue-dark to-scrumboks-black text-white p-16 rounded-3xl text-center mb-16 relative overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 border-2 border-scrumboks-yellow rounded-full"></div>
              <div className="absolute top-32 right-16 w-24 h-24 border-2 border-scrumboks-white rounded-full"></div>
              <div className="absolute bottom-16 left-1/4 w-40 h-40 border-2 border-scrumboks-yellow rounded-full"></div>
              <div className="absolute bottom-32 right-1/3 w-28 h-28 border-2 border-scrumboks-white rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-scrumboks-yellow/20 text-scrumboks-yellow px-6 py-3 rounded-full text-lg font-medium mb-8">
                <Zap className="w-5 h-5" />
                RUGBY WAARDEN
              </div>

              <h3 className="text-5xl font-bold mb-12">
                <span className="bg-gradient-to-r from-scrumboks-yellow to-scrumboks-gold bg-clip-text text-transparent">
                  PLAY RUGBY NOW
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-scrumboks-yellow/20 to-scrumboks-yellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-10 h-10 text-scrumboks-yellow" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">KAMERAADSCHAP</h4>
                  <p className="text-scrumboks-white/80 text-sm">Samen sterk</p>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-scrumboks-yellow/20 to-scrumboks-yellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10 text-scrumboks-yellow" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">DISCIPLINE</h4>
                  <p className="text-scrumboks-white/80 text-sm">
                    Focus & respect
                  </p>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-scrumboks-yellow/20 to-scrumboks-yellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-10 h-10 text-scrumboks-yellow" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">TEAMSPORT</h4>
                  <p className="text-scrumboks-white/80 text-sm">
                    Samen winnen
                  </p>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-scrumboks-yellow/20 to-scrumboks-yellow/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-10 h-10 text-scrumboks-yellow" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">RESPECT</h4>
                  <p className="text-scrumboks-white/80 text-sm">
                    Voor iedereen
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-scrumboks-white/20 via-scrumboks-white/10 to-scrumboks-white/20 p-8 rounded-2xl backdrop-blur-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <p className="text-lg font-medium mb-2 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-scrumboks-yellow" />
                      VANAF SEPTEMBER TOT MEI
                    </p>
                    <p className="text-lg font-medium mb-2 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-scrumboks-yellow" />
                      10 TRAININGSAVONDEN OP DINSDAG & VRIJDAG
                    </p>
                  </div>
                  <div>
                    <p className="text-lg font-medium mb-2 flex items-center gap-2">
                      <Users className="w-5 h-5 text-scrumboks-yellow" />
                      LEEFTIJD: 5 T/M 18 JAAR
                    </p>
                    <p className="text-lg font-medium mb-2 flex items-center gap-2">
                      <Award className="w-5 h-5 text-scrumboks-yellow" />
                      KOSTEN €15 INCL. BITJE & RUGBYBAL
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20 bg-gradient-to-br from-scrumboks-gray-light/40 via-scrumboks-blue-light/20 to-scrumboks-yellow/10 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-scrumboks-blue/10 text-scrumboks-blue px-6 py-3 rounded-full text-lg font-medium mb-6">
              <Star className="w-5 h-5" />
              AANMELDEN
            </div>
            <h2 className="text-4xl font-bold text-scrumboks-blue mb-4">
              Meld je hier aan voor Xperience Rugby
            </h2>
            <p className="text-xl text-scrumboks-gray max-w-2xl mx-auto">
              Vul onderstaand formulier in en we nemen contact met je op!
              <span className="text-scrumboks-blue font-semibold">
                Super makkelijk en snel.
              </span>
            </p>
          </div>

          <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-r from-scrumboks-blue/5 to-scrumboks-yellow/5">
              <CardTitle className="text-2xl font-bold text-scrumboks-blue flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-scrumboks-yellow" />
                Aanmeldingsformulier
              </CardTitle>
              <p className="text-scrumboks-gray">
                Slechts een paar velden en je bent klaar!
              </p>
            </CardHeader>
            <CardContent>
              <form
                name="xperience-rugby"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="xperience-rugby" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Speler gegevens */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-scrumboks-blue/10 to-scrumboks-blue/5 p-4 rounded-xl">
                      <h4 className="text-xl font-bold text-scrumboks-blue flex items-center gap-3">
                        <div className="bg-scrumboks-blue/20 w-8 h-8 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5" />
                        </div>
                        Speler gegevens
                      </h4>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                        Voornaam *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200"
                        placeholder="Voornaam van de speler"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                        Achternaam *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200"
                        placeholder="Achternaam van de speler"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                        Leeftijd *
                      </label>
                      <input
                        type="number"
                        name="age"
                        required
                        min="5"
                        max="18"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200"
                        placeholder="Leeftijd (5-18 jaar)"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                        E-mailadres speler
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200"
                        placeholder="speler@email.com (optioneel)"
                      />
                    </div>
                  </div>

                  {/* Ouder/verzorger gegevens */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-scrumboks-yellow/10 to-scrumboks-yellow/5 p-4 rounded-xl">
                      <h4 className="text-xl font-bold text-scrumboks-blue flex items-center gap-3">
                        <div className="bg-scrumboks-yellow/20 w-8 h-8 rounded-full flex items-center justify-center">
                          <Heart className="w-5 h-5" />
                        </div>
                        Ouder/Verzorger gegevens
                      </h4>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                        Naam ouder/verzorger *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        required
                        value={formData.parentName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200"
                        placeholder="Naam van ouder/verzorger"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                        E-mailadres ouder/verzorger *
                      </label>
                      <input
                        type="email"
                        name="parentEmail"
                        required
                        value={formData.parentEmail}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200"
                        placeholder="ouder@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                        Telefoonnummer ouder/verzorger
                      </label>
                      <input
                        type="tel"
                        name="parentPhone"
                        value={formData.parentPhone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200"
                        placeholder="06-12345678"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                        Motivatie (optioneel)
                      </label>
                      <textarea
                        name="motivation"
                        rows={3}
                        value={formData.motivation}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200 resize-vertical"
                        placeholder="Waarom wil je meedoen aan Xperience Rugby?"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-scrumboks-gray-light">
                  <div className="bg-gradient-to-r from-scrumboks-blue/5 to-scrumboks-yellow/5 p-6 rounded-xl">
                    <div className="flex flex-col sm:flex-row gap-6 items-center justify-between">
                      <div>
                        <p className="text-sm text-scrumboks-gray mb-2">
                          * Verplichte velden. We nemen contact met je op voor
                          meer informatie.
                        </p>
                        <p className="text-xs text-scrumboks-gray">
                          Binnen 24 uur ontvang je een bevestiging en meer
                          details!
                        </p>
                      </div>
                      <Button
                        type="submit"
                        variant="hero"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-gradient-to-r from-scrumboks-blue to-scrumboks-blue-dark hover:from-scrumboks-blue-dark hover:to-scrumboks-black shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Verzenden...
                          </>
                        ) : (
                          <>
                            <Star className="w-5 h-5 mr-2" />
                            Aanmelden voor Xperience Rugby
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Location & Rules Section */}
      <section className="py-20 bg-gradient-to-b from-scrumboks-white to-scrumboks-gray-light/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Google Maps */}
            <div>
              <h3 className="text-3xl font-bold text-scrumboks-blue mb-6 flex items-center gap-3">
                <div className="bg-scrumboks-blue/10 w-10 h-10 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6" />
                </div>
                Kom een keer kijken!
              </h3>
              <p className="text-scrumboks-gray mb-6 text-lg">
                We trainen op Sportpark Rauwenhof in Tiel. Kom gerust langs om
                de sfeer te proeven!
              </p>
              <div className="bg-scrumboks-blue/5 p-4 rounded-xl mb-6">
                <h4 className="font-semibold text-scrumboks-blue mb-2">
                  Ons adres:
                </h4>
                <p className="text-scrumboks-gray">
                  Sportpark Rauwenhof
                  <br />
                  Beethovenstraat 18a
                  <br />
                  4003 KX Tiel
                </p>
              </div>

              {/* Google Maps Embed */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.123456789!2d5.4297!3d51.8874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c8a1234567890%3A0x1234567890abcdef!2sSportpark%20Rauwenhof%2C%20Beethovenstraat%2018a%2C%204003%20KX%20Tiel!5e0!3m2!1snl!2snl!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-80"
                  title="Scrumboks Rugby Club - Sportpark Rauwenhof, Tiel"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-scrumboks-blue/10 to-transparent pointer-events-none"></div>
              </div>
            </div>

            {/* Rules & Info */}
            <div>
              <Card className="border-0 shadow-soft bg-gradient-to-br from-scrumboks-blue/5 to-scrumboks-yellow/5 h-full">
                <CardContent className="p-8 h-full flex flex-col justify-center">
                  <div className="bg-scrumboks-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-8 h-8 text-scrumboks-blue" />
                  </div>
                  <h3 className="text-2xl font-bold text-scrumboks-blue mb-4 text-center">
                    Alvast een beetje inlezen?
                  </h3>
                  <p className="text-scrumboks-gray mb-8 text-lg text-center">
                    Bekijk hier de rugby spelregels en kom goed voorbereid naar
                    je eerste training!
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 text-scrumboks-gray">
                      <div className="w-2 h-2 bg-scrumboks-blue rounded-full"></div>
                      <span>
                        Trainingstijden: Di-Do 18:45-20:30 & Vrijdag 20:00-22:00
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-scrumboks-gray">
                      <div className="w-2 h-2 bg-scrumboks-yellow rounded-full"></div>
                      <span>Leeftijd: 5 t/m 18 jaar</span>
                    </div>
                    <div className="flex items-center gap-3 text-scrumboks-gray">
                      <div className="w-2 h-2 bg-scrumboks-blue rounded-full"></div>
                      <span>Telefoon: 0344 623201</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-scrumboks-blue text-scrumboks-blue hover:bg-scrumboks-blue hover:text-white transition-all duration-300 w-full"
                  >
                    <Target className="w-5 h-5 mr-2" />
                    Rugby Spelregels
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
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
      <BackToTop />
    </div>
  );
};

export default XperienceRugby;
