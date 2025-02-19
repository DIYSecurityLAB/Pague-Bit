import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Main translations
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationPT from './locales/pt/translation.json';

// FAQ translations
import faqEN from './locales/faq/en.json';
import faqES from './locales/faq/es.json';
import faqPT from './locales/faq/pt.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: { ...translationEN, faq: faqEN },
      },
      es: {
        translation: { ...translationES, faq: faqES },
      },
      pt: {
        translation: { ...translationPT, faq: faqPT },
      },
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
