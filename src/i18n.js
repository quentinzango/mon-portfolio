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
    supportedLngs: ['fr', 'en'],
    load: 'languageOnly',
    debug: false,
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

document.documentElement.lang = (i18n.language || 'fr').split('-')[0];

i18n.on('languageChanged', (lng) => {
  document.documentElement.lang = lng.split('-')[0];
});

export default i18n;