import { Building2, Globe, Shield, Zap, CheckCircle, ArrowRight, Menu, X, Moon, Sun, Languages } from 'lucide-react';
import { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import TrustBadges from './components/TrustBadges';
import LLCForm from './components/LLCForm';
import AIChat from './components/AIChat';
import { useTheme } from './contexts/ThemeContext';
import { useLanguage } from './contexts/LanguageContext';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLLCForm, setShowLLCForm] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    setShowLLCForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (showLLCForm) {
    return <LLCForm onBack={() => setShowLLCForm(false)} translations={t.form} />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark bg-gray-900' : 'bg-white'}`}>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? theme === 'dark' ? 'bg-gray-800 shadow-lg' : 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2 animate-fade-in">
              <Building2 className={`h-8 w-8 transition-colors duration-300 ${
                isScrolled
                  ? theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  : 'text-white'
              }`} />
              <span className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled
                  ? theme === 'dark' ? 'text-white' : 'text-gray-900'
                  : 'text-white'
              }`}>
                OGS Solution
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              {[t.nav.services, t.nav.benefits, t.nav.process, t.nav.contact].map((item, index) => (
                <a
                  key={item}
                  href={`#${['services', 'benefits', 'process', 'contact'][index]}`}
                  className={`relative transition-colors duration-300 hover:text-blue-600 after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-blue-600 after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                    isScrolled
                      ? theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      : 'text-white after:bg-white hover:after:bg-blue-600'
                  }`}
                >
                  {item}
                </a>
              ))}

              <button
                onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isScrolled
                    ? theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    : 'hover:bg-white/20'
                }`}
                title={language === 'en' ? 'Français' : 'English'}
              >
                <Languages className={`h-5 w-5 ${
                  isScrolled
                    ? theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    : 'text-white'
                }`} />
              </button>

              <button
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  isScrolled
                    ? theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    : 'hover:bg-white/20'
                }`}
              >
                {theme === 'dark' ? (
                  <Sun className={`h-5 w-5 ${isScrolled ? 'text-gray-300' : 'text-white'}`} />
                ) : (
                  <Moon className={`h-5 w-5 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
                )}
              </button>

              <button
                onClick={handleGetStarted}
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95"
              >
                {t.nav.getStarted}
              </button>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className={isScrolled ? theme === 'dark' ? 'text-white' : 'text-gray-900' : 'text-white'} />
              ) : (
                <Menu className={isScrolled ? theme === 'dark' ? 'text-white' : 'text-gray-900' : 'text-white'} />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className={`md:hidden border-t animate-slide-down ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
            <div className="px-4 py-4 space-y-4">
              {[t.nav.services, t.nav.benefits, t.nav.process, t.nav.contact].map((item, index) => (
                <a
                  key={item}
                  href={`#${['services', 'benefits', 'process', 'contact'][index]}`}
                  className={`block transition-colors ${theme === 'dark' ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
                  className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}
                >
                  <Languages className="h-5 w-5" />
                </button>
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full ${theme === 'dark' ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}
                >
                  {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
              </div>
              <button
                onClick={handleGetStarted}
                className="w-full bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all"
              >
                {t.nav.getStarted}
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-blue-200 rounded-full mix-blend-overlay filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            {t.hero.title}
            <br />
            <span className="text-blue-200">{t.hero.subtitle}</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            {t.hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <button
              onClick={handleGetStarted}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 group"
            >
              <span>{t.hero.startButton}</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <a
              href="#services"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {t.hero.learnMore}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up animation-delay-600">
            {[
              { number: '10K+', label: t.hero.stats.llcs },
              { number: '150+', label: t.hero.stats.countries },
              { number: '48h', label: t.hero.stats.time },
              { number: '99%', label: t.hero.stats.success }
            ].map((stat) => (
              <div key={stat.label} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className={`py-24 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t.services.title}
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {t.services.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Zap className="h-12 w-12 text-blue-600" />,
                title: t.services.fast.title,
                description: t.services.fast.description
              },
              {
                icon: <Shield className="h-12 w-12 text-blue-600" />,
                title: t.services.compliant.title,
                description: t.services.compliant.description
              },
              {
                icon: <Globe className="h-12 w-12 text-blue-600" />,
                title: t.services.global.title,
                description: t.services.global.description
              },
              {
                icon: <Building2 className="h-12 w-12 text-blue-600" />,
                title: t.services.package.title,
                description: t.services.package.description
              }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group cursor-pointer border-2 border-transparent ${
                  theme === 'dark'
                    ? 'bg-gray-700 hover:border-blue-400'
                    : 'bg-white hover:border-blue-100'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className={`text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{feature.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className={`py-24 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t.benefits.title}
              </h2>
              <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {t.benefits.description}
              </p>

              <div className="space-y-4">
                {t.benefits.items.map((benefit: string, index: number) => (
                  <div
                    key={benefit}
                    className="flex items-start space-x-3 animate-fade-in-left"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-12 text-white shadow-2xl transform hover:scale-105 transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300">{t.benefits.price}</div>
                  <div className="text-blue-200 mb-8">{t.benefits.priceSubtitle}</div>
                  <div className="space-y-4 mb-8 text-left">
                    {t.benefits.features.map((feature: string) => (
                      <div key={feature} className="flex items-center space-x-2 hover:translate-x-2 transition-transform duration-300">
                        <CheckCircle className="h-5 w-5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleGetStarted}
                    className="block w-full bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    {t.benefits.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className={`py-24 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t.process.title}
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {t.process.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.process.steps.map((step: any, index: number) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group cursor-pointer overflow-hidden ${
                  theme === 'dark' ? 'bg-gray-700' : 'bg-white'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className={`text-6xl font-bold mb-4 group-hover:text-blue-200 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-gray-600' : 'text-blue-100'
                }`}>0{index + 1}</div>
                <h3 className={`text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>{step.title}</h3>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />

      <Testimonials />

      <FAQ />

      <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              {t.contact.title}
            </h2>
            <p className="text-xl text-blue-100">
              {t.contact.subtitle}
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      <footer className={`py-12 ${theme === 'dark' ? 'bg-gray-950 text-gray-400' : 'bg-gray-900 text-gray-400'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-6 w-6 text-blue-500" />
                <span className="text-white font-bold text-lg">OGS Solution</span>
              </div>
              <p className="text-sm">Your trusted partner for US LLC formation worldwide.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">{t.nav.services}</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">LLC Formation</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">EIN Application</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Registered Agent</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Bank Account</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">About Us</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">FAQ</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Blog</a></li>
                <li><a href="#contact" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">{t.nav.contact}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className={`border-t pt-8 text-center text-sm ${theme === 'dark' ? 'border-gray-800' : 'border-gray-800'}`}>
            <p>&copy; 2025 OGS Solution. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <AIChat translations={{ ...t.chat, language }} />
    </div>
  );
}

export default App;
