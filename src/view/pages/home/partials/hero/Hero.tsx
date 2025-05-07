import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import BackgroundLines from '../../../../components/ui/BackgroundLines';
import { useHero } from './useHero';

const Hero = () => {
  const { t } = useTranslation();
  const { getLocalizedPath } = useHero();

  return (
    <section
      className="bg-white text-gray-800 relative overflow-hidden w-full flex items-center"
      style={{ minHeight: '565px', height: '100%' }}
    >
      <BackgroundLines />
      <div className="container mx-auto text-center relative z-10 py-8 md:py-16 flex flex-col justify-center">
        <motion.div
          className="flex justify-center items-center mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            {t('hero.title')}
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-12 px-4 md:px-0 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to={getLocalizedPath('/get-started')}
            className="w-64 bg-white hover:bg-orange-50 text-orange-500 text-sm font-medium py-4 px-8 border-2 border-orange-500 transition-colors"
          >
            {t('hero.getStarted')}
          </Link>

          <Link
            to={getLocalizedPath('/wallet')}
            className="w-64 bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-4 px-8 transition-colors"
          >
            {t('hero.chooseWallet')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
