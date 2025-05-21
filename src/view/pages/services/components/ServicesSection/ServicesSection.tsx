import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import businessImage from '../../../../assets/icone_maleta.svg';
import individualImage from '../../../../assets/icone_pessoa.svg';
import brl_btc from '../../../../assets/R$+BTC.svg';
import BackgroundLines from '../../../../components/ui/BackgroundLines';
import { ROUTES } from '../../../../routes/Routes';
import { useServicesSection } from './useServicesSection';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
    transition: { type: 'spring', stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.95 },
};

const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const { variants } = useServicesSection();
  const navigate = useNavigate();
  const currentLang = i18n.language;

  const handleIndividualsClick = () => {
    navigate(ROUTES.buy.call(currentLang), {
      state: { scrollTo: 'alfredSection' },
    });
  };

  const handleBusinessClick = () => {
    navigate(ROUTES.buy.call(currentLang));
  };

  return (
    <section className="mt-0 pt-16">
      {/* Primeira parte com background lines */}
      <div className="relative overflow-hidden pb-10">
        <BackgroundLines />
        <div className="container mx-auto px-4 relative z-10">
          {/* Bloco laranja com Visão Geral Rápida - Reduzido e centralizado */}
          <motion.div
            className="bg-[#FF6A1F] rounded-xl p-8 mb-10 text-center shadow-lg max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.6 }}
            whileHover={{ boxShadow: '0 10px 25px rgba(255, 106, 31, 0.3)' }}
          >
            {/* Elemento decorativo animado */}
            <motion.div
              className="absolute -bottom-16 -right-16 w-64 h-64 bg-white opacity-5 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 10, 0],
                y: [0, -10, 0],
              }}
              transition={{ duration: 12, repeat: Infinity }}
            />

            <motion.h2
              className="text-2xl font-bold text-white mb-8 relative z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('service.overview.title')}
            </motion.h2>

            <motion.div
              className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Botão Indivíduos */}
              <motion.div
                className="bg-black rounded-lg p-6 md:px-8 cursor-pointer shadow-md w-full md:flex-1 md:max-w-[45%]"
                variants={itemVariants}
                whileHover={buttonVariants.hover}
                whileTap={buttonVariants.tap}
                onClick={handleIndividualsClick}
              >
                <div className="flex flex-col items-center">
                  {/* Substituindo o ícone User por uma imagem */}
                  <img
                    src={individualImage}
                    alt="Indivíduos"
                    className="h-12 w-12 mb-4 object-contain"
                  />
                  <h3 className="text-xl font-bold text-white mb-1">
                    {t('service.overview.individuals.title')}
                  </h3>
                  <p className="text-sm text-white opacity-80">
                    {t('service.overview.individuals.learnMore')}
                  </p>
                </div>
              </motion.div>

              {/* Botão Negócios */}
              <motion.div
                className="bg-black rounded-lg p-6 md:px-8 cursor-pointer shadow-md w-full md:flex-1 md:max-w-[45%]"
                variants={itemVariants}
                whileHover={buttonVariants.hover}
                whileTap={buttonVariants.tap}
                onClick={handleBusinessClick}
              >
                <div className="flex flex-col items-center">
                  <img
                    src={businessImage}
                    alt="Negócios"
                    className="h-12 w-12 mb-4 object-contain"
                  />
                  <h3 className="text-xl font-bold text-white mb-1">
                    {t('service.overview.business.title')}
                  </h3>
                  <p className="text-sm text-white opacity-80">
                    {t('service.overview.business.learnMore')}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Linha separadora */}
      <div className="border-t border-gray-200 w-full"></div>

      {/* Segunda parte - Comece pelo Bitcoin */}
      <div className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-[#FF6A1F] mb-6">
              {t('service.bitcoin.title')}
            </h2>

            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1 relative z-10">
                <div className="text-gray-700 mb-8 space-y-4">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t('service.bitcoin.description.paragraph1'),
                    }}
                  />
                  <p>{t('service.bitcoin.description.paragraph2')}</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t('service.bitcoin.description.paragraph3'),
                    }}
                  />
                </div>

                <ul className="space-y-4">
                  <li className="flex items-center">
                    <ChevronRight className="h-6 w-6 text-[#FF6A1F] mr-2" />
                    <span className="text-[#FF6A1F] font-medium">
                      {t('service.bitcoin.benefits.0')}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-6 w-6 text-[#FF6A1F] mr-2" />
                    <span className="text-[#FF6A1F] font-medium">
                      {t('service.bitcoin.benefits.1')}
                    </span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="h-6 w-6 text-[#FF6A1F] mr-2" />
                    <span className="text-[#FF6A1F] font-medium">
                      {t('service.bitcoin.benefits.2')}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Imagem BRL+BTC à direita */}
              <motion.div
                className="flex-shrink-0 md:w-2/5 md:pl-4 md:flex md:justify-end relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <img
                  src={brl_btc}
                  alt="Real e Bitcoin"
                  className="w-full max-w-[320px] mx-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
