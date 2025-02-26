import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/site/en/translation.json';
import translationES from './locales/site/es/translation.json';
import translationPT from './locales/site/pt/translation.json';

import faqEN from '../../view/pages/home/partials/faq/faqdata/en.json';
import faqES from '../../view/pages/home/partials/faq/faqdata/es.json';
import faqPT from '../../view/pages/home/partials/faq/faqdata/pt.json';

import blogEN from '../../view/pages/blog/blogdata/en.json';
import blogES from '../../view/pages/blog/blogdata/es.json';
import blogPT from '../../view/pages/blog/blogdata/pt.json';

import pfEN from '../../view/pages/pf/pfdata/en.json';
import pfES from '../../view/pages/pf/pfdata/es.json';
import pfPT from '../../view/pages/pf/pfdata/pt.json';

import pjEN from '../../view/pages/pj/pjdata/en.json';
import pjES from '../../view/pages/pj/pjdata/es.json';
import pjPT from '../../view/pages/pj/pjdata/pt.json';

import serviceEN from '../../view/pages/services/servicedata/en.json';
import serviceES from '../../view/pages/services/servicedata/es.json';
import servicePT from '../../view/pages/services/servicedata/pt.json';

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
          faq: faqEN,
          blog: blogEN,
          pf: pfEN,
          pj: pjEN,
          service: serviceEN,
          wallet: walletEN,
        },
      },
      es: {
        translation: {
          ...translationES,
          faq: faqES,
          blog: blogES,
          pf: pfES,
          pj: pjES,
          service: serviceES,
          wallet: walletES,
        },
      },
      pt: {
        translation: {
          ...translationPT,
          faq: faqPT,
          blog: blogPT,
          pf: pfPT,
          pj: pjPT,
          service: servicePT,
          wallet: walletPT,
        },
      },
    },
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
