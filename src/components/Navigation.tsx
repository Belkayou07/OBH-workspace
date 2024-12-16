import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isOpen,
  setIsOpen,
  activeSection,
}) => {
  const { t, i18n } = useTranslation();
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
    { code: 'nl', name: 'Nederlands' },
  ];

  const menuItems = [
    'home',
    'our-values',
    'menu',
    'opening-hours',
    'reservations',
    'reviews',
    'contact'
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 bg-white/90 border border-green-300 shadow-lg 
        block"
      >
        <Menu className="w-6 h-6 text-green-900" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed left-0 top-0 h-full w-80 bg-green-50 z-50 p-6 border-r border-green-300 shadow-xl"
            >
              <div className="flex justify-between items-center mb-8">
                <h2 
                  className="text-2xl font-semibold text-black cursor-pointer hover:text-green-700 transition-colors"
                  onClick={() => {
                    const heroSection = document.getElementById('home');
                    if (heroSection) {
                      heroSection.scrollIntoView({ behavior: 'smooth' });
                      setIsOpen(false);
                    }
                  }}
                >
                  {t('hero.title')}
                </h2>
                <button onClick={() => setIsOpen(false)}>
                  <X className="w-6 h-6 text-green-900" />
                </button>
              </div>

              <nav className="space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const section = document.getElementById(item);
                      if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                      }
                      setIsOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2 transition-colors ${
                      activeSection === item
                        ? 'bg-green-200 text-black'
                        : 'hover:bg-green-100 text-gray-700'
                    }`}
                  >
                    {t(`nav.${item}`)}
                  </button>
                ))}
              </nav>

              <div className="absolute bottom-8 left-0 w-full px-6">
                <div className="flex gap-2 justify-center mb-4">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => i18n.changeLanguage(lang.code)}
                      className={`px-3 py-1 text-sm ${
                        i18n.language === lang.code
                          ? 'bg-green-200 text-black'
                          : 'bg-green-50 text-gray-700 border border-green-300'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
                <p className="text-center text-sm text-gray-500">
                  2024 {t('hero.title')}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};