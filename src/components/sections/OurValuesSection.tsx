import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Utensils, Coffee, Car, Trees, ShoppingBag, Accessibility } from 'lucide-react';

export const OurValuesSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Utensils className="w-8 h-8" />,
      title: t('our-values.features.0.title'),
      description: t('our-values.features.0.description')
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: t('our-values.features.1.title'),
      description: t('our-values.features.1.description')
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: t('our-values.features.2.title'),
      description: t('our-values.features.2.description')
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: t('our-values.features.3.title'),
      description: t('our-values.features.3.description')
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: t('our-values.features.4.title'),
      description: t('our-values.features.4.description')
    },
    {
      icon: <Accessibility className="w-8 h-8" />,
      title: t('our-values.features.5.title'),
      description: t('our-values.features.5.description')
    },
  ];

  return (
    <div
      id="our-values"
      className="bg-zinc-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white 
      border-t-[16px] border-l-[16px] border-r-[16px] border-white 
      flex items-center justify-center relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full"
      >
        <section
          id="our-values"
          className="flex items-center justify-center relative w-full max-w-screen-2xl"
        >
          <div className="max-w-6xl mx-auto px-4 relative z-10 w-full flex flex-col items-center">
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
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 text-center mb-4"
            >
              {t('our-values.title')}
              <p className="text-gray-300 mb-8 text-base md:text-lg text-center">
                {t('our-values.description')}
              </p>
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 w-full">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="flex items-start gap-4 bg-green-900/20 p-4 md:p-6 
                border border-green-700/30 
                hover:bg-green-900/40 
                transition-all duration-300 
                transform hover:-translate-y-2 
                rounded-lg"
                >
                  <div className="text-green-500 p-2 bg-green-700/20 rounded-lg flex-shrink-0 
                hidden sm:flex">
                    {feature.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-base md:text-lg text-green-500 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};