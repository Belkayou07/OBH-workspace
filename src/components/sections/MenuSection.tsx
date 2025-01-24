import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';

// Import French menu images
import MenuFR1 from '../../images/MenuImages/menuFR/e58b70bc-82a1-4fb0-9a2f-b817c27fc032-0.jpg';
import MenuFR2 from '../../images/MenuImages/menuFR/e58b70bc-82a1-4fb0-9a2f-b817c27fc032-1.jpg';
import MenuFR3 from '../../images/MenuImages/menuFR/e58b70bc-82a1-4fb0-9a2f-b817c27fc032-2.jpg';
import MenuFR4 from '../../images/MenuImages/menuFR/e58b70bc-82a1-4fb0-9a2f-b817c27fc032-3.jpg';
import MenuFR5 from '../../images/MenuImages/menuFR/e58b70bc-82a1-4fb0-9a2f-b817c27fc032-4.jpg';
import MenuFR6 from '../../images/MenuImages/menuFR/e58b70bc-82a1-4fb0-9a2f-b817c27fc032-5.jpg';
import MenuFR7 from '../../images/MenuImages/menuFR/e58b70bc-82a1-4fb0-9a2f-b817c27fc032-6.jpg';

// Import Dutch menu images
import MenuNL1 from '../../images/MenuImages/menuNL/a0e41a92-2bbb-45b7-ba38-a0adf822c76e-0.jpg';
import MenuNL2 from '../../images/MenuImages/menuNL/a0e41a92-2bbb-45b7-ba38-a0adf822c76e-1.jpg';
import MenuNL3 from '../../images/MenuImages/menuNL/a0e41a92-2bbb-45b7-ba38-a0adf822c76e-2.jpg';
import MenuNL4 from '../../images/MenuImages/menuNL/a0e41a92-2bbb-45b7-ba38-a0adf822c76e-3.jpg';
import MenuNL5 from '../../images/MenuImages/menuNL/a0e41a92-2bbb-45b7-ba38-a0adf822c76e-4.jpg';
import MenuNL6 from '../../images/MenuImages/menuNL/a0e41a92-2bbb-45b7-ba38-a0adf822c76e-5.jpg';
import MenuNL7 from '../../images/MenuImages/menuNL/a0e41a92-2bbb-45b7-ba38-a0adf822c76e-6.jpg';

const MenuSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Define menu items based on language
  const menuItems = i18n.language === 'fr' 
    ? [
        { id: 1, image: MenuFR1, title: 'Menu Page 1' },
        { id: 2, image: MenuFR2, title: 'Menu Page 2' },
        { id: 3, image: MenuFR3, title: 'Menu Page 3' },
        { id: 4, image: MenuFR4, title: 'Menu Page 4' },
        { id: 5, image: MenuFR5, title: 'Menu Page 5' },
        { id: 6, image: MenuFR6, title: 'Menu Page 6' },
        { id: 7, image: MenuFR7, title: 'Menu Page 7' }
      ]
    : [
        { id: 1, image: MenuNL1, title: 'Menu Page 1' },
        { id: 2, image: MenuNL2, title: 'Menu Page 2' },
        { id: 3, image: MenuNL3, title: 'Menu Page 3' },
        { id: 4, image: MenuNL4, title: 'Menu Page 4' },
        { id: 5, image: MenuNL5, title: 'Menu Page 5' },
        { id: 6, image: MenuNL6, title: 'Menu Page 6' },
        { id: 7, image: MenuNL7, title: 'Menu Page 7' }
      ];

  // Reset current index when language changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [i18n.language]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % menuItems.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  };

  const getRelativeIndex = (baseIndex: number, offset: number) => {
    return (baseIndex + offset + menuItems.length) % menuItems.length;
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

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
                    key={`${item.id}-${index}-${currentIndex}`}
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
                    <div 
                      className="relative h-full cursor-pointer"
                      onClick={() => offset === 0 && setSelectedImage(item.image)}
                    >
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

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-start justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-[90vw] mt-8 mb-8"
              onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="fixed top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white transition-colors z-10"
              >
                <FaTimes className="text-xl" />
              </button>
              <img
                src={selectedImage}
                alt="Menu"
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MenuSection;