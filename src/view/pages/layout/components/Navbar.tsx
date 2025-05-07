import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import LogoPagueBit from '../../../assets/logos/LOGO_PAGUEBIT_VETOR.svg';
import { ROUTES } from '../../../routes/Routes';
import { LanguageSwitcher } from './LanguageSwitcher';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Manipulador para fechar o menu quando clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !navRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <motion.nav
      className="bg-white p-4 fixed w-full top-0 z-50 shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to={ROUTES.home.call(currentLang)}>
            <img src={LogoPagueBit} alt="Pague BIT" className="h-10" />
          </Link>
        </div>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            to={ROUTES.about.call(currentLang)}
            className="hover:text-orange-500 transition text-gray-800"
          >
            {t('header.about')}
          </Link>
          <Link
            to={ROUTES.services.call(currentLang)}
            className="hover:text-orange-500 transition text-gray-800"
          >
            {t('header.services')}
          </Link>
          <Link
            to={ROUTES.contact.call(currentLang)}
            className="hover:text-orange-500 transition text-gray-800"
          >
            {t('header.contact')}
          </Link>
          <LanguageSwitcher />
        </div>

        {/* Botão Menu Mobile */}
        <button
          ref={navRef}
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-4"
          >
            <Link
              to={ROUTES.about.call(currentLang)}
              className="text-gray-800 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {t('header.about')}
            </Link>
            <Link
              to={ROUTES.services.call(currentLang)}
              className="text-gray-800 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {t('header.services')}
            </Link>
            <Link
              to={ROUTES.contact.call(currentLang)}
              className="text-gray-800 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {t('header.contact')}
            </Link>
            <LanguageSwitcher />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
