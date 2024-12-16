import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div id="reservations" className="bg-green-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center border-t-[16px] border-l-[16px] border-r-[16px] border-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl w-full"
      >
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
          {t('reservations.title')}
        </motion.h2>

        <div className="bg-green-900/20 p-6 border border-green-700/30">
          <div className="text-center space-y-6">
            <div className="bg-white p-6 shadow-md">
              <Phone className="mx-auto w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-2xl font-semibold text-black mb-4">
                {t('reservations.phone.title')}
              </h3>
              <p className="text-black mb-4 text-lg leading-relaxed">
                {t('reservations.phone.description')}
              </p>
              <a
                href="tel: 0484 57 62 66"
                className="text-3xl font-bold text-green-900 hover:text-green-700 transition-colors"
              >
                +32 484 57 62 66
              </a>
            </div>

            <div className="text-black italic text-base">
              {t('reservations.phone.note')}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};