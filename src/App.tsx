import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/sections/HeroSection';
import { OurValuesSection } from './components/sections/OurValuesSection';
import MenuSection from './components/sections/MenuSection';
import { OpeningHoursSection } from './components/sections/OpeningHoursSection';
import { ReservationSection } from './components/sections/ReservationSection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { ContactSection } from './components/sections/ContactSection';
import { pageTransition } from './utils/transitions';
import './i18n';
import LogoImage from './images/LogoImage/LogoImage.png';

function App() {
  const { t } = useTranslation();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isHeaderCompact, setIsHeaderCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
          setIsHeaderCompact(window.scrollY > 100);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      <Navigation
        isOpen={isNavOpen}
        setIsOpen={setIsNavOpen}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <AnimatePresence>
        {isHeaderCompact && (
          <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={pageTransition}
            className="fixed top-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-sm z-30 shadow-md flex items-center justify-center"
          >
            <img 
              src={LogoImage} 
              alt={t('hero.title')} 
              className="h-10 cursor-pointer"
              onClick={() => scrollToSection('home')}
            />
          </motion.header>
        )}
      </AnimatePresence>

      <section id="home" className="section-container">
        <HeroSection />
      </section>

      <section id="our-values" className="section-container">
        <OurValuesSection />
      </section>

      <section id="menu" className="section-container">
        <MenuSection />
      </section>

      <section id="hours" className="section-container">
        <OpeningHoursSection />
      </section>

      <section id="reservations" className="section-container">
        <ReservationSection />
      </section>

      <section id="reviews" className="section-container">
        <ReviewsSection />
      </section>

      <section id="contact" className="section-container">
        <ContactSection />
      </section>
    </div>
  );
}

export default App;