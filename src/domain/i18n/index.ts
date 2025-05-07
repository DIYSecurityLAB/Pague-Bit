import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/site/en/translation.json';
import translationES from './locales/site/es/translation.json';
import translationPT from './locales/site/pt/translation.json';

import walletEN from '../../view/pages/Wallet/walletTranslate/en.json';
import walletES from '../../view/pages/Wallet/walletTranslate/es.json';
import walletPT from '../../view/pages/Wallet/walletTranslate/pt.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...translationEN,
          wallet: walletEN,
          walletDetail: walletEN.walletDetail, // Certifique-se de carregar walletDetail corretamente
        },
      },
      es: {
        translation: {
          ...translationES,
          wallet: walletES,
          walletDetail: walletES.walletDetail, // Certifique-se de carregar walletDetail corretamente
        },
      },
      pt: {
        translation: {
          ...translationPT,
          wallet: walletPT,
          walletDetail: walletPT.walletDetail, // Certifique-se de carregar walletDetail corretamente
        },
      },
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
