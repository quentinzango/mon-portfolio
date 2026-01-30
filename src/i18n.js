import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import des traductions
import frTranslation from './translations/fr/translation.json';
import enTranslation from './translations/en/translation.json';

// Configuration de i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: frTranslation },
      en: { translation: enTranslation }
    },
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;