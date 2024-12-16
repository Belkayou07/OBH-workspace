import React, { useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import LogoImage from '../../images/LogoImage/LogoImage.png';

export const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  useEffect(() => {
    const importGalleryImages = async () => {
      const imageContext = import.meta.glob('../../images/GalleryImages/*.{png,jpg,jpeg,svg}');
      const importedImages = await Promise.all(
        Object.keys(imageContext).map(async (path) => {
          const imageModule = await imageContext[path]();
          return (imageModule as { default: string }).default;
        })
      );
      setGalleryImages(importedImages);
    };

    importGalleryImages();
  }, []);

  // Create multiple independent random shuffles
  const randomizedImageBands = useMemo(() => {
    if (galleryImages.length === 0) return [];

    return [0, 1, 2, 3].map(() => {
      // Create a new shuffled array for each band
      const shuffled = [...galleryImages];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    });
  }, [galleryImages]);

  // Scroll directions: right, left, right, left
  const scrollDirections = ['scroll-right', 'scroll-left', 'scroll-right', 'scroll-left'];

  return (
    <div id="home" className="min-h-screen flex items-center justify-center relative bg-zinc-900">
      <div className="absolute inset-0 flex flex-col">
        {scrollDirections.map((direction, lineIndex) => (
          <React.Fragment key={lineIndex}>
            {lineIndex > 0 && (
              <div className="h-8 w-full bg-black" /> // Black spacing between bands
            )}
            <div className={`relative h-1/4 w-full overflow-hidden`}>
              <div className={`absolute inset-0 flex ${direction} space-x-4`}> 
                {randomizedImageBands[lineIndex]?.map((img, imgIndex) => (
                  <img 
                    key={imgIndex} 
                    src={img} 
                    alt={`Gallery image ${imgIndex + 1}`} 
                    className="h-full w-auto object-cover" 
                  />
                ))}
                {/* Single duplicate for continuous scrolling */}
                {randomizedImageBands[lineIndex]?.slice(0, randomizedImageBands[lineIndex].length / 2).map((img, imgIndex) => (
                  <img 
                    key={`duplicate-${imgIndex}`} 
                    src={img} 
                    alt={`Gallery image ${imgIndex + 1} duplicate`} 
                    className="h-full w-auto object-cover" 
                  />
                ))}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="bg-white/50 rounded-[50%] w-full max-w-[900px] sm:max-w-[1100px] md:max-w-[1200px] aspect-square h-auto flex items-center justify-center">
            <img 
              src={LogoImage} 
              alt="OH Brunch Logo" 
              className="max-w-[250px] sm:max-w-[300px] md:max-w-[400px] w-full h-auto object-contain"
            />
          </div>
          
          <motion.button 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-green-700 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 
            text-base sm:text-lg font-semibold hover:bg-green-800 transition-colors 
            w-full max-w-[300px]"
            onClick={() => {
              const reservationSection = document.getElementById('reservations');
              if (reservationSection) {
                reservationSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            {t('hero.cta')}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};