import { Button } from '@/components/ui/button';
import { Heart, Trophy, Users, Target, HandHeart, Users2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import teamCelebration from '@/assets/team-celebration.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Familie',
      description:
        'Bij Scrumboks ben je geen lid, je bent familie. Iedereen hoort erbij, ongeacht niveau of ervaring.',
    },
    {
      icon: Users,
      title: 'Samen Groeien',
      description:
        'We tillen elkaar naar een hoger niveau. Jouw succes is ons succes, jouw verhaal wordt ons verhaal.',
    },
    {
      icon: Target,
      title: 'Passie & Plezier',
      description:
        '50 jaar lang hebben we gelachen, gehuild en gevierd. Rugby wordt pas echt mooi met plezier.',
    },
    {
      icon: Trophy,
      title: 'Trots & Traditie',
      description:
        'We koesteren onze geschiedenis en bouwen samen aan nieuwe herinneringen.',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-scrumboks-white via-scrumboks-gray-light/20 to-scrumboks-blue-light/30 relative overflow-hidden"
    >
      {/* Subtle Scrumboks logo background elements */}
      <div className="absolute inset-0 opacity-[0.03] overflow-hidden pointer-events-none">
        <div
          className="absolute -top-20 -right-20 w-96 h-96 bg-scrumboks-blue transform rotate-12"
          style={{
            clipPath:
              'polygon(50% 0%, 65% 25%, 90% 25%, 75% 45%, 85% 75%, 50% 60%, 15% 75%, 25% 45%, 10% 25%, 35% 25%)',
          }}
        />
        <div
          className="absolute bottom-32 -left-32 w-80 h-80 bg-scrumboks-yellow transform -rotate-6"
          style={{
            clipPath:
              'polygon(50% 0%, 65% 25%, 90% 25%, 75% 45%, 85% 75%, 50% 60%, 15% 75%, 25% 45%, 10% 25%, 35% 25%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with personality */}
        <div className="text-center mb-16">
          <div className="inline-block bg-scrumboks-yellow/10 border border-scrumboks-yellow/20 rounded-full px-6 py-2 mb-4">
            <span className="text-scrumboks-blue font-semibold">
              🏠 Ons verhaal
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-scrumboks-blue mb-6">
            <span className="block">Meer dan alleen</span>
            <span className="text-scrumboks-yellow">RUGBY</span>
          </h2>
          <p className="text-lg lg:text-xl text-scrumboks-gray max-w-4xl mx-auto leading-relaxed">
            <span className="text-scrumboks-blue font-medium">Al 50 jaar</span>{' '}
            zijn we het kloppende hart van rugby in Tiel. Hier schrijven we
            samen verhalen, smeden we vriendschappen voor het leven en
            <span className="text-scrumboks-yellow font-medium">
              {' '}
              vieren we elke kleine overwinning alsof het de wereldcup is.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-scrumboks-yellow/20 to-scrumboks-gold/20 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-scrumboks-yellow" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-scrumboks-blue">
                  Ons DNA: Familie
                </h3>
              </div>
              <p className="text-scrumboks-gray leading-relaxed mb-6 text-lg">
                <span className="text-scrumboks-blue font-medium">
                  Scrumboks is geen gewone rugbyclub.
                </span>
                We zijn een grote, warme familie die elkaar door dik en dun
                steunt. Hier kennen we elkaar bij naam, vieren we elkaars
                successen en helpen we elkaar door moeilijke tijden.
              </p>
              <p className="text-scrumboks-gray leading-relaxed mb-6">
                <span className="text-scrumboks-yellow font-medium">
                  Of je nu 5 jaar bent of 50+,
                </span>{' '}
                een absolute beginner of ervaren veteraan - bij Scrumboks vind
                je jouw plek. We geloven dat rugby voor iedereen toegankelijk
                moet zijn.
              </p>
              <div className="bg-gradient-to-r from-scrumboks-blue/5 via-scrumboks-yellow/5 to-scrumboks-blue/5 p-6 rounded-2xl border border-scrumboks-blue/10">
                <p className="text-scrumboks-blue font-medium italic text-center">
                  "Bij Scrumboks draait het niet alleen om rugby spelen - het
                  gaat om rugby beleven, vrienden maken en samen groeien als
                  team én als mens."
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-scrumboks-blue/10 via-scrumboks-blue/5 to-transparent p-6 rounded-2xl shadow-soft group hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">🎂</span>
                  <div className="text-3xl font-bold text-scrumboks-blue group-hover:scale-110 transition-transform duration-300">
                    1976
                  </div>
                </div>
                <div className="text-scrumboks-gray font-medium">
                  Opgericht met liefde
                </div>
                <div className="text-sm text-scrumboks-gray/70 mt-1">
                  50 jaar verhalen
                </div>
              </div>
              <div className="bg-gradient-to-br from-scrumboks-yellow/15 via-scrumboks-yellow/8 to-transparent p-6 rounded-2xl shadow-soft group hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">👥</span>
                  <div className="text-3xl font-bold text-scrumboks-yellow group-hover:scale-110 transition-transform duration-300">
                    50+
                  </div>
                </div>
                <div className="text-scrumboks-gray font-medium">
                  Familieleden
                </div>
                <div className="text-sm text-scrumboks-gray/70 mt-1">
                  En groeiende!
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/xperience-rugby">
                <Button
                  variant="hero"
                  size="lg"
                  className="bg-gradient-to-r from-scrumboks-yellow via-scrumboks-gold to-scrumboks-yellow hover:from-scrumboks-gold hover:via-scrumboks-yellow hover:to-scrumboks-gold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                >
                  <span className="flex items-center gap-2">
                    <span className="text-lg group-hover:animate-bounce">
                      🏉
                    </span>
                    <span>Kom kennismaken</span>
                    <span className="text-lg group-hover:animate-pulse">
                      ✨
                    </span>
                  </span>
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-scrumboks-blue/30 text-scrumboks-blue hover:bg-scrumboks-blue hover:text-scrumboks-white transition-all duration-300"
                onClick={() =>
                  document
                    .querySelector('#teams')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Zie onze teams
              </Button>
            </div>
          </div>

          {/* Enhanced Image with story */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-scrumboks-yellow/20 via-transparent to-scrumboks-blue/20 rounded-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <img
              src={teamCelebration}
              alt="Scrumboks familie viert samen na een geweldige wedstrijd"
              className="relative w-full h-[500px] object-cover rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-scrumboks-blue/40 via-transparent to-scrumboks-yellow/20 rounded-2xl" />

            {/* Floating story elements */}
            <div className="absolute bottom-6 left-6 right-6 bg-scrumboks-white/90 backdrop-blur-sm p-4 rounded-xl border border-scrumboks-white/50">
              <p className="text-scrumboks-blue font-medium text-sm text-center">
                💙 "Dit zijn de momenten waar we voor leven - samen vieren,
                samen groeien" 💛
              </p>
            </div>

            {/* Corner accent */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-scrumboks-yellow/80 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Heart className="w-6 h-6 text-scrumboks-blue" />
            </div>
          </div>
        </div>

        {/* Enhanced Values with warmth */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-scrumboks-blue mb-4">
              <span className="text-scrumboks-yellow">❤️</span> Wat ons drijft{' '}
              <span className="text-scrumboks-yellow">❤️</span>
            </h3>
            <p className="text-scrumboks-gray max-w-2xl mx-auto">
              Deze waarden vormen de basis van wie we zijn en wat we samen
              opbouwen
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group relative">
                <div className="bg-gradient-to-br from-scrumboks-blue/10 via-scrumboks-blue/5 to-transparent border-2 border-scrumboks-blue/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-scrumboks-blue group-hover:border-scrumboks-blue group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <value.icon className="w-8 h-8 text-scrumboks-blue group-hover:text-scrumboks-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-scrumboks-blue mb-3 group-hover:text-scrumboks-yellow transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-scrumboks-gray leading-relaxed group-hover:text-scrumboks-gray/90">
                  {value.description}
                </p>

                {/* Subtle background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-br from-scrumboks-yellow/5 to-scrumboks-blue/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Call to Action with warmth */}
        <div className="text-center bg-gradient-to-br from-scrumboks-blue/5 via-scrumboks-yellow/5 to-scrumboks-blue/5 p-12 rounded-3xl border border-scrumboks-blue/10 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-scrumboks-yellow/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-scrumboks-blue/10 rounded-full translate-y-20 -translate-x-20"></div>

          <div className="relative z-10">
            <div className="inline-block bg-scrumboks-yellow/20 rounded-full p-3 mb-6">
              <Heart className="w-8 h-8 text-scrumboks-yellow" />
            </div>

            <h3 className="text-3xl font-bold text-scrumboks-blue mb-4">
              Kom jij ons team versterken?
            </h3>
            <p className="text-scrumboks-gray mb-8 max-w-2xl mx-auto leading-relaxed">
              <span className="text-scrumboks-blue font-medium">
                Bij Scrumboks is er altijd een plekje voor jou.
              </span>
              Of je nu wilt spelen, ondersteunen, vrijwilligerswerk doen of
              sponsoren -
              <span className="text-scrumboks-yellow font-medium">
                {' '}
                samen maken we onze club nog mooier!
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-3xl mx-auto">
              {/* Enhanced Vrijwilligers Button */}
              <Link to="/volunteers" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-scrumboks-blue via-scrumboks-blue-dark to-scrumboks-blue hover:from-scrumboks-blue-dark hover:via-scrumboks-black hover:to-scrumboks-blue-dark text-scrumboks-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 group"
                >
                  <HandHeart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  <span className="font-semibold">Help ons groeien</span>
                  <span className="ml-2 text-lg group-hover:animate-bounce">
                    🤝
                  </span>
                </Button>
              </Link>

              {/* Enhanced Sponsors Button */}
              <Link to="/sponsors" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-scrumboks-yellow via-scrumboks-gold to-scrumboks-yellow hover:from-scrumboks-gold hover:via-scrumboks-yellow hover:to-scrumboks-gold text-scrumboks-blue border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 group font-semibold"
                >
                  <Users2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Partner worden</span>
                  <span className="ml-2 text-lg group-hover:animate-bounce">
                    ⭐
                  </span>
                </Button>
              </Link>
            </div>

            <p className="text-scrumboks-gray/80 mt-6 text-sm max-w-lg mx-auto italic">
              💙 "Samen zijn we sterker, samen maken we het verschil" 💛
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
