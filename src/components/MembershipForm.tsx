import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Mail, Phone, Calendar, Users, Heart } from 'lucide-react';

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    team: '',
    experience: '',
    motivation: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Netlify form submission
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'membership',
          ...formData
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          age: '',
          team: '',
          experience: '',
          motivation: ''
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
      <Card className="border-0 shadow-soft max-w-2xl mx-auto">
        <CardContent className="text-center py-12">
          <Heart className="w-16 h-16 text-scrumboks-yellow mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-scrumboks-blue mb-4">
            Aanmelding ontvangen!
          </h3>
          <p className="text-scrumboks-gray mb-6">
            Bedankt voor je interesse in Scrumboks! We nemen zo snel mogelijk contact met je op 
            om je aanmelding verder te bespreken.
          </p>
          <Button 
            variant="hero" 
            onClick={() => setIsSubmitted(false)}
          >
            Nieuwe aanmelding
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-0 shadow-soft max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-scrumboks-blue flex items-center gap-3">
          <Users className="w-6 h-6" />
          Word lid van Scrumboks
        </CardTitle>
          <p className="text-scrumboks-gray">
            Vul onderstaand formulier in en we nemen contact met je op! Alle velden zijn optioneel behalve de basisgegevens.
          </p>
      </CardHeader>
      <CardContent>
        <form name="membership" method="POST" data-netlify="true" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="membership" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Persoonlijke gegevens */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-scrumboks-blue flex items-center gap-2">
                <User className="w-5 h-5" />
                Persoonlijke gegevens
              </h4>
              
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
                  placeholder="Je voornaam"
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
                  placeholder="Je achternaam"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200"
                  placeholder="je@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                  Telefoonnummer
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200"
                  placeholder="06-12345678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                  Leeftijd
                </label>
                <input
                  type="number"
                  name="age"
                  min="5"
                  max="99"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200"
                  placeholder="Je leeftijd"
                />
              </div>
            </div>

            {/* Rugby informatie */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-scrumboks-blue flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Rugby informatie
              </h4>

              <div>
                <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                  Team interesse
                </label>
                <select
                  name="team"
                  value={formData.team}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecteer een team (optioneel)</option>
                  <option value="senioren">Senioren (18+)</option>
                  <option value="dames">Dames (16+)</option>
                  <option value="tbm">TBM (6-12 jaar)</option>
                  <option value="cubs">Cubs (12-14 jaar)</option>
                  <option value="junioren">Junioren (14-16 jaar)</option>
                  <option value="colts">Colts (16-18 jaar)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                  Rugby ervaring
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200"
                >
                  <option value="">Selecteer ervaring (optioneel)</option>
                  <option value="beginner">Beginner - Nog nooit rugby gespeeld</option>
                  <option value="basis">Basis - Enkele keren rugby gespeeld</option>
                  <option value="gemiddeld">Gemiddeld - Regelmatig rugby gespeeld</option>
                  <option value="gevorderd">Gevorderd - Ervaren rugby speler</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-scrumboks-blue mb-2">
                  Motivatie
                </label>
                <textarea
                  name="motivation"
                  rows={4}
                  value={formData.motivation}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-scrumboks-gray-light focus:ring-2 focus:ring-scrumboks-blue focus:border-transparent transition-all duration-200 resize-vertical"
                  placeholder="Vertel ons waarom je lid wilt worden van Scrumboks... (optioneel)"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-scrumboks-gray-light">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p className="text-sm text-scrumboks-gray">
                * Alleen naam en e-mail zijn verplicht. We nemen contact met je op!
              </p>
              <Button 
                type="submit" 
                variant="hero" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? 'Verzenden...' : 'Aanmelden'}
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default MembershipForm;
