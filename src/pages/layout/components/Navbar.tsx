import React from 'react';
import { Bitcoin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ROUTES } from '../../../Routes';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  return (
    <motion.nav
      className="bg-white p-4 fixed w-full top-0 z-50 shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Bitcoin className="h-8 w-8 mr-2 text-orange-500" />
          <Link to={ROUTES.home.call(currentLang)} className="text-xl font-bold text-gray-800">
            Pague BIT
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <Link to={ROUTES.about.call(currentLang)} className="hover:text-orange-500 transition text-gray-800">
            {t('header.about')}
          </Link>
          <Link to={ROUTES.services.call(currentLang)} className="hover:text-orange-500 transition text-gray-800">
            {t('header.services')}
          </Link>
          <Link to={ROUTES.contact.call(currentLang)} className="hover:text-orange-500 transition text-gray-800">
            {t('header.contact')}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
