import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bitcoin, Building2, ArrowRight, ShoppingCart } from 'lucide-react';
import { ROUTES } from '../routes/Routes';
import { useTranslation } from 'react-i18next';
import i18n from '../../domain/i18n';

const GetStartedPage = () => {
  const { t } = useTranslation();
  const currentLang = i18n.language;

  return (
    <div className="min-h-screen py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            {t("getStartedPage.heroTitle")}
          </h1>
          <p className="text-xl text-gray-600">
            {t("getStartedPage.heroDescription")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Pessoa Física */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Bitcoin className="h-8 w-8 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {t("getStartedPage.pf.title")}
            </h2>
            <p className="text-gray-600 mb-6">
              {t("getStartedPage.pf.description")}
            </p>
            <ul className="space-y-3 mb-8 text-gray-600">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                {t("getStartedPage.pf.features.0")}
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                {t("getStartedPage.pf.features.1")}
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                {t("getStartedPage.pf.features.2")}
              </li>
            </ul>

            <Link
              to={ROUTES.buy.call(currentLang)}
              className="flex items-center justify-center gap-2 bg-orange-50 text-orange-600 px-6 py-2 rounded-xl font-semibold hover:bg-orange-100 transition-colors w-full"
            >
              <ShoppingCart className="h-5 w-5" />
              {t("getStartedPage.pf.buyButton")}
            </Link>

            <Link
              to={ROUTES.pf.call(currentLang)}
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors w-full justify-center mt-4"
            >
              {t("getStartedPage.pf.moreButton")}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          {/* Pessoa Jurídica */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="h-8 w-8 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {t("getStartedPage.pj.title")}
            </h2>
            <p className="text-gray-600 mb-6">
              {t("getStartedPage.pj.description")}
            </p>
            <ul className="space-y-3 mb-8 text-gray-600">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                {t("getStartedPage.pj.features.0")}
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                {t("getStartedPage.pj.features.1")}
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                {t("getStartedPage.pj.features.2")}
              </li>
            </ul>

            <Link
              to={ROUTES.buy.call(currentLang)}
              className="flex items-center justify-center gap-2 bg-orange-50 text-orange-600 px-6 py-2 rounded-xl font-semibold hover:bg-orange-100 transition-colors w-full"
            >
              <ShoppingCart className="h-5 w-5" />
              {t("getStartedPage.pj.buyButton")}
            </Link>

            <Link
              to={ROUTES.pj.call(currentLang)}
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors w-full justify-center mt-4"
            >
              {t("getStartedPage.pj.moreButton")}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;
