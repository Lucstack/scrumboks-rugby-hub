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
  Heart,
  Users,
  Trophy,
  Zap
} from 'lucide-react';
import { useState, useEffect } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: 'Clubhuis',
      value: '0344 623201',
      description: 'Bereikbaar tijdens trainingstijden',
      color: 'from-scrumboks-blue to-scrumboks-blue-light',
      highlight: 'Direct contact'
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'info@scrumboks.nl',
      description: 'We reageren binnen 24 uur',
      color: 'from-scrumboks-yellow to-scrumboks-gold',
      highlight: 'Snelle reactie'
    },
    {
      icon: MapPin,
      title: 'Adres',
      value: 'Beethovenstraat 18a',
      description: '4003 KX Tiel',
      color: 'from-scrumboks-blue-light to-scrumboks-yellow',
      highlight: 'Centraal gelegen'
    },
    {
      icon: Clock,
      title: 'Openingstijden',
      value: 'Di-Do: 18:45-20:30',
      description: 'Vr: 20:00-22:00',
      color: 'from-scrumboks-gold to-scrumboks-yellow',
      highlight: 'Flexibele tijden'
    }
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/Scrumboks',
      icon: Facebook,
      color: 'hover:bg-blue-600',
      description: 'Volg ons voor updates'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/scrumboks_rugby/',
      icon: Instagram,
      color: 'hover:bg-pink-600',
      description: 'Bekijk onze foto\'s'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/scrumboks',
      icon: Twitter,
      color: 'hover:bg-blue-400',
      description: 'Blijf op de hoogte'
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-scrumboks-gray-light/30 via-scrumboks-blue/5 to-scrumboks-yellow/5 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-20 w-96 h-96 bg-scrumboks-blue/10 rounded-full blur-3xl animate-pulse"
          style={{
            animation: 'float 18s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-20 right-20 w-80 h-80 bg-scrumboks-yellow/10 rounded-full blur-3xl animate-pulse"
          style={{
            animation: 'float 22s ease-in-out infinite reverse'
          }}
        />
        
        {/* Subtle Scrumboks Logo Elements */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-5">
          <div 
            className="w-full h-full bg-scrumboks-blue"
            style={{
              clipPath: "polygon(50% 0%, 65% 25%, 90% 25%, 75% 45%, 85% 75%, 50% 60%, 15% 75%, 25% 45%, 10% 25%, 35% 25%)",
              animation: 'float 25s ease-in-out infinite'
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block bg-gradient-to-r from-scrumboks-yellow/20 via-scrumboks-blue/20 to-scrumboks-yellow/20 backdrop-blur-sm border border-scrumboks-yellow/30 rounded-2xl px-8 py-3 mb-6">
            <span className="text-scrumboks-blue font-bold text-lg tracking-wide">
              Laten we elkaar ontmoeten
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-scrumboks-blue mb-6">
            <span className="block font-light">Contact &</span>
            <span className="block bg-gradient-to-r from-scrumboks-blue via-scrumboks-yellow to-scrumboks-blue bg-clip-text text-transparent">
              Locatie
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-scrumboks-gray max-w-4xl mx-auto leading-relaxed">
            <span className="text-scrumboks-blue font-semibold">Heb je vragen of wil je langskomen?</span> 
            We staan klaar om je te helpen! Neem gerust contact met ons op - 
            <span className="text-scrumboks-yellow font-semibold"> we horen graag van je.</span>
          </p>
        </div>

        {/* Enhanced Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                isVisible ? 'animate-fadeInUp' : 'opacity-0'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                background: `linear-gradient(135deg, ${hoveredCard === index ? 'rgba(248, 227, 0, 0.05)' : 'rgba(255, 255, 255, 0.8)'}, ${hoveredCard === index ? 'rgba(8, 22, 137, 0.05)' : 'rgba(255, 255, 255, 0.4)'})`,
                backdropFilter: 'blur(10px)',
                border: `1px solid ${hoveredCard === index ? 'rgba(248, 227, 0, 0.3)' : 'rgba(8, 22, 137, 0.1)'}`
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-5 group-hover:opacity-15 transition-opacity duration-500`}
              />
              
              <CardContent className="p-6 text-center">
                {/* Icon with Animation */}
                <div className="w-16 h-16 bg-gradient-to-br from-scrumboks-blue/10 to-scrumboks-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-8 h-8 text-scrumboks-blue group-hover:text-scrumboks-yellow transition-colors duration-300" />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-bold text-scrumboks-blue mb-2 group-hover:text-scrumboks-yellow transition-colors duration-300">
                  {info.title}
                </h3>
                
                <p className="text-xl font-bold text-scrumboks-blue mb-2">
                  {info.value}
                </p>
                
                <p className="text-sm text-scrumboks-gray mb-3">
                  {info.description}
                </p>
                
                {/* Highlight Badge */}
                <div className="bg-gradient-to-r from-scrumboks-yellow/20 to-scrumboks-blue/20 px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-scrumboks-blue">
                    {info.highlight}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Social Media Section */}
        <div className="bg-gradient-to-br from-scrumboks-blue/5 via-scrumboks-yellow/5 to-scrumboks-blue/5 rounded-3xl p-8 border border-scrumboks-blue/10 relative overflow-hidden mb-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-40 h-40 bg-scrumboks-yellow rounded-full -translate-y-20 -translate-x-20" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-scrumboks-blue rounded-full translate-y-16 translate-x-16" />
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-scrumboks-yellow/20 to-scrumboks-blue/20 rounded-full p-3 mb-4">
                <Heart className="w-8 h-8 text-scrumboks-blue" />
              </div>
              <h3 className="text-3xl font-bold text-scrumboks-blue mb-4">
                Volg ons verhaal
              </h3>
              <p className="text-lg text-scrumboks-gray max-w-2xl mx-auto">
                Blijf op de hoogte van onze laatste nieuwtjes, wedstrijden en 
                <span className="text-scrumboks-blue font-semibold"> onvergetelijke momenten</span> op en naast het veld.
              </p>
            </div>

            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${social.color} hover:text-white`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <social.icon className="w-8 h-8 text-scrumboks-blue group-hover:text-white transition-colors duration-300" />
                    <span className="font-semibold text-scrumboks-blue group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </span>
                    <span className="text-xs text-scrumboks-gray group-hover:text-white/80 transition-colors duration-300">
                      {social.description}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Contact Form */}
        <div className="bg-gradient-to-br from-scrumboks-white via-scrumboks-gray-light/30 to-scrumboks-white rounded-3xl p-8 border border-scrumboks-blue/10 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-scrumboks-blue/20 to-scrumboks-yellow/20 rounded-full p-3 mb-4">
              <Mail className="w-8 h-8 text-scrumboks-blue" />
            </div>
            <h3 className="text-3xl font-bold text-scrumboks-blue mb-4">
              Stuur ons een bericht
            </h3>
            <p className="text-lg text-scrumboks-gray max-w-2xl mx-auto">
              Heb je vragen over lidmaatschap, trainingen of gewoon zin in een praatje? 
              <span className="text-scrumboks-blue font-semibold"> We horen graag van je!</span>
            </p>
          </div>

          <form className="max-w-2xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-scrumboks-blue mb-2">
                  Naam
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-scrumboks-blue/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-scrumboks-yellow focus:border-transparent transition-all duration-300"
                  placeholder="Jouw naam"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-scrumboks-blue mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-scrumboks-blue/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-scrumboks-yellow focus:border-transparent transition-all duration-300"
                  placeholder="jouw@email.nl"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-scrumboks-blue mb-2">
                Onderwerp
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-scrumboks-blue/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-scrumboks-yellow focus:border-transparent transition-all duration-300"
                placeholder="Waar gaat je bericht over?"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-scrumboks-blue mb-2">
                Bericht
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-scrumboks-blue/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-scrumboks-yellow focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Vertel ons wat je wilt weten..."
              />
            </div>
            
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-gradient-to-r from-scrumboks-blue via-scrumboks-blue-dark to-scrumboks-blue hover:from-scrumboks-blue-dark hover:via-scrumboks-black hover:to-scrumboks-blue-dark text-scrumboks-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 group font-bold text-lg px-8 py-4"
              >
                <span className="flex items-center gap-3">
                  <Mail className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Verstuur bericht</span>
                  <span className="text-2xl group-hover:animate-pulse">📧</span>
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;