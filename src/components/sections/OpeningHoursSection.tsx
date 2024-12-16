import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const OpeningHoursSection: React.FC = () => {
  const { t } = useTranslation();

  const daysOrder = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday'
  ];

  return (
    <div id="opening-hours" className="bg-zinc-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white border-t-[16px] border-l-[16px] border-r-[16px] border-white flex items-center justify-center">
      <div className="container mx-auto max-w-4xl">
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700 text-center mb-4"
          >
            {t('openingHours.title')}
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-green-900/20 p-6 border border-green-700/30"
        >
          <div className="space-y-2">
            {daysOrder.map((day, index) => (
              <motion.div
                key={day}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-between px-6 py-4 border-b last:border-b-0 hover:bg-green-900/20 transition-colors"
              >
                <span className="capitalize font-medium text-gray-300">
                  {t(`days.${day}`)}
                </span>
                <span className="text-gray-400">
                  {t(`openingHours.hours.${day}`)}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
