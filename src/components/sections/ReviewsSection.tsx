import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { t } = useTranslation();

  const reviews = [
    {
      name: 'Najat',
      text: t('reviews.list.0.text'),
      rating: 5,
    },
    {
      name: 'Wendy Hoolants',
      text: t('reviews.list.1.text'),
      rating: 5,
    },
    {
      name: 'Leen De Witte',
      text: t('reviews.list.2.text'),
      rating: 5,
    }
  ];

  return (
    <div
      id="reviews"
      className="bg-zinc-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 text-white 
      border-t-[16px] border-l-[16px] border-r-[16px] border-white 
      flex items-center justify-center relative"
    >
      <section
        id="customer-reviews"
        className="flex items-center justify-center relative w-full max-w-screen-2xl"
      >
        <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
          <div className="text-center mb-12">
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
              {t('reviews.title')}
              <p className="text-gray-300 mb-8 text-base md:text-lg text-center">
                {t('reviews.subtitle')}
              </p>
            </motion.h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex flex-col gap-4 
                bg-green-900/20 
                p-4 md:p-6 
                border border-green-700/30 
                hover:bg-green-900/40 
                transition-all duration-300 
                transform hover:-translate-y-2 
                rounded-lg"
              >
                <div>
                  <h3 className="font-semibold text-base md:text-lg text-green-500 mb-1">
                    {review.name}
                  </h3>
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 md:w-4 h-3 md:h-4 text-green-500"
                        fill="currentColor"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm md:text-base">
                    {review.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};