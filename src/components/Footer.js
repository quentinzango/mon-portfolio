// src/components/Footer.js
import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    // Logique pour la politique de confidentialité
    console.log('Politique de confidentialité');
  };

  const handleTermsClick = (e) => {
    e.preventDefault();
    // Logique pour les conditions d'utilisation
    console.log('Conditions d\'utilisation');
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Colonne 1: Nom et compétences */}
          <div>
            <h3 className="text-xl font-bold mb-4">ZANGO QUENTIN</h3>
            <p className="text-gray-400 mb-4">
              {t('footer.bio', 'Développeur Full Stack passionné par la création de solutions web innovantes.')}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">React</span>
              <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Django</span>
              <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Python</span>
              <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">Tailwind CSS</span>
            </div>
          </div>

          {/* Colonne 2: Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact', 'Contact')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <a href="mailto:quentinzango470@gmail.com" className="hover:text-blue-400 transition-colors">
                  quentinzango470@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="text-blue-400 mr-3" />
                <span>+237670184922</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Douala, Cameroun</span>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Réseaux sociaux */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.follow', 'Suivez-moi')}</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/quentinzango" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/quentin-zango-a786832ba/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://web.facebook.com/profile.php?id=100074004668839&locale=fr_FR" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ZANGO Quentin. {t('footer.rights', 'Tous droits réservés.')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={handlePrivacyClick}
              className="text-gray-400 hover:text-white text-sm focus:outline-none"
            >
              {t('footer.privacy', 'Confidentialité')}
            </button>
            <button 
              onClick={handleTermsClick}
              className="text-gray-400 hover:text-white text-sm focus:outline-none"
            >
              {t('footer.terms', 'Conditions')}
            </button>
          </div>
        </div>
      </div>

      {/* Bouton retour en haut */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110"
          aria-label={t('footer.backToTop', 'Retour en haut')}
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;