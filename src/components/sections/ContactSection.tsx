import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import React from 'react';
import LogoImage from '../../images/LogoImage/LogoImage.png';

const MapImage: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=4.5304-0.01,50.8853-0.01,4.5304+0.01,50.8853+0.01&layer=mapnik&marker=50.8853,4.5304`;

  return (
<div className="w-full h-[250px] overflow-hidden">
  {children}
  <iframe
    src={mapUrl}
    width="100%"
    height="100%"
    frameBorder="0"
    scrolling="no"
    marginHeight={0}
    marginWidth={0}
    title="O' Brunch House Location"
    className="w-full h-full"
  />
  <small>
    <a
      href={`https://www.openstreetmap.org/?mlat=50.8853&mlon=4.5304#map=15/50.8853/4.5304`}
      target="_blank"
      rel="noopener noreferrer"
    >
      View Larger Map
    </a>
  </small>
</div>

  );
};

export const ContactSection: React.FC<{ scrollToSection?: (section: string) => void }> = ({ scrollToSection = (section: string) => {
  const element = document.getElementById(section);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
} }) => {
  const { t } = useTranslation();

  return (
    <div
      id="contact"
      className="min-h-screen bg-green-50 py-[5%] px-[5%] 
      flex flex-col items-center justify-center 
      border-t-[16px] border-l-[16px] border-r-[16px] border-white 
      relative pb-4"
    >
      <div className="w-full max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        {/* Left Column - Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 flex flex-col h-full"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              {t('contact.title')}
            </h2>

            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <MapPin className="w-6 h-6 text-green-500" />
                </div>
                <p className="text-base md:text-lg text-gray-800">
                  {t('contact.location')}
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <Phone className="w-6 h-6 text-green-500" />
                </div>
                <a
                  href={`tel:${t('contact.phone')}`}
                  className="text-base md:text-lg text-green-900 hover:text-green-700 transition-colors"
                >
                  {t('contact.phone')}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full shadow-md">
                  <Mail className="w-6 h-6 text-green-500" />
                </div>
                <a
                  href={`mailto:${t('contact.email')}`}
                  className="text-base md:text-lg text-green-900 hover:text-green-700 transition-colors"
                >
                  {t('contact.email')}
                </a>
              </div>
            </div>
          </div>

          {/* Logo Image */}
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            src={LogoImage}
            alt="Oh Brunch Logo"
            className="mt-auto w-full max-w-[300px] mx-auto block text-center object-contain cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => scrollToSection('home')}
          />
        </motion.div>

        {/* Right Column - Form and Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Contact Form */}
          <form className="space-y-4 w-full md:w-3/4 lg:w-full mx-auto">
            <input
              type="text"
              placeholder={t('contact.form.name')}
              className="w-full px-4 py-2 text-base border border-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder={t('contact.form.email')}
              className="w-full px-4 py-2 text-base border border-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <textarea
              rows={4}
              placeholder={t('contact.form.message')}
              className="w-full px-4 py-2 text-base border border-green-300 focus:ring-2 focus:ring-green-500 focus:border-transparent h-[100px]"
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 hover:bg-green-600 transition-colors text-base"
            >
              {t('contact.form.submit')}
            </button>
          </form>

          {/* Map */}
          <div className="w-full md:w-full lg:w-full mx-auto rounded-none shadow-md overflow-hidden">
            <MapImage>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2515.066595734172!2d4.512151076309904!3d50.92248507168606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3ddfed5244c6d%3A0xec5df86b1ee8fb64!2sLesagestraat%2039%2C%201820%20Steenokkerzeel!5e0!3m2!1snl!2sbe!4v1734314540192!5m2!1snl!2sbe" 
                width="100%" 
                height="300" 
                className="w-full"
              ></iframe>
            </MapImage>
          </div>
        </motion.div>
      </div>

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-screen-2xl border-t border-green-300 pt-4 text-center"
      >
        <p className="text-bg text-gray-600 mb-0">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
      </motion.footer>
    </div>
  );
};