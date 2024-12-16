import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import images
import Ontbijt from '../../images/MenuImages/Ontbijt.jpg';
import Broodjes from '../../images/MenuImages/Broodjes.jpg';
import Toasts from '../../images/MenuImages/Toasts.jpg';
import Salades from '../../images/MenuImages/Salades.jpg';
import Desserten from '../../images/MenuImages/Desserten.jpg';
import Dranken from '../../images/MenuImages/Dranken.jpg';

const menuItems = [
  { id: 1, image: Ontbijt, title: 'Ontbijt' },
  { id: 2, image: Broodjes, title: 'Broodjes' },
  { id: 3, image: Toasts, title: 'Toasts' },
  { id: 4, image: Salades, title: 'Salades' },
  { id: 5, image: Desserten, title: 'Desserten' },
  { id: 6, image: Dranken, title: 'Dranken' },
];

const MenuSection: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % menuItems.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  };

  const getRelativeIndex = (baseIndex: number, offset: number) => {
    return (baseIndex + offset + menuItems.length) % menuItems.length;
  };

  return (
    <section id="menu" className="bg-green-50 min-h-screen relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center border-t-[16px] border-l-[16px] border-r-[16px] border-white">
      <div className="container mx-auto">
        <div className="flex justify-center mb-12">
        <motion.h2
              initial="initial"
              whileInView="animate"
              variants={{
                initial: { opacity: 0, y: 50 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-4"
            >
              {t('menu.title')}
            </motion.h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] w-full flex items-center"
        >
          <button
            onClick={handlePrevious}
            className="absolute left-[-16px] top-1/2 transform -translate-y-1/2 bg-white/80 p-2 sm:p-3 rounded-full z-10 hover:bg-white transition-colors"
          >
            <FaChevronLeft className="text-primary text-base sm:text-xl" />
          </button>

          <div className="flex-grow overflow-hidden">
            <AnimatePresence mode="popLayout">
              {[-1, 0, 1].map((offset) => {
                const index = getRelativeIndex(currentIndex, offset);
                const item = menuItems[index];
                
                return (
                  <motion.div
                    key={item.id}
                    className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
                    initial={{ 
                      x: offset === -1 ? '-5%' : (offset === 1 ? '5%' : '0%'),
                      scale: offset === 0 ? 1 : 0.6,
                      zIndex: offset === 0 ? 2 : 1,
                      filter: offset === 0 ? 'blur(0px)' : 'blur(8px)',
                      opacity: offset === 0 ? 1 : 0.4
                    }}
                    animate={{ 
                      x: offset === -1 ? '-5%' : (offset === 1 ? '5%' : '0%'),
                      scale: offset === 0 ? 1 : 0.6,
                      zIndex: offset === 0 ? 2 : 1,
                      filter: offset === 0 ? 'blur(0px)' : 'blur(8px)',
                      opacity: offset === 0 ? 1 : 0.4
                    }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-full">
                      <img
                        src={item.image}
                        alt={t(`menu.items.${item.title}`)}
                        className="h-full object-contain shadow-xl"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-[-16px] top-1/2 transform -translate-y-1/2 bg-white/80 p-2 sm:p-3 rounded-full z-10 hover:bg-white transition-colors"
          >
            <FaChevronRight className="text-primary text-base sm:text-xl" />
          </button>
        </motion.div>

        <div className="flex justify-center mt-8">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 mx-2 transition-colors ${
                index === currentIndex ? 'bg-accent' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;