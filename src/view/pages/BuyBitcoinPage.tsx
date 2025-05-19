import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import alfredlogo from '../assets/Alfred_Pose.png';
import paguebitlogo from '../assets/logos/Logo_PAGUEBIT_ICON_BLACK.svg';
import BackButton from '../components/BackButton';
import BackgroundLines from '../components/ui/BackgroundLines';

// Variantes de animação
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

const featureVariants = {
  hover: {
    x: 10,
    color: '#ffffff',
    transition: { duration: 0.2 },
  },
};

const BuyBitcoinPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === 'alfredSection') {
      const alfredSection = document.getElementById('alfredSection');
      if (alfredSection) {
        alfredSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <BackgroundLines />
      <BackButton />
      <motion.main
        className="container mx-auto px-6 md:px-10 py-16 space-y-20 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Título da Página */}
        <motion.div
          className="text-center py-16 px-8 md:px-12 rounded-xl shadow-sm relative overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ boxShadow: '0 4px 20px rgba(255, 106, 31, 0.1)' }}
        >
          <motion.div
            className="absolute -top-32 -right-32 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-40 z-0"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold text-gray-800 relative z-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {t('buyBitcoinPage.heroTitle')}
          </motion.h1>
          <motion.p
            className="mt-6 text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {t('buyBitcoinPage.heroDescription')}
          </motion.p>
        </motion.div>

        {/* Seção - Experiência Premium para Empresas */}
        <section className="px-8 md:px-20">
          <motion.article
            className="flex flex-col items-center p-10 rounded-xl shadow-md bg-gradient-to-r from-[#FF6A1F]/95 to-[#FF8C50]/95 text-white relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
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

            <div className="w-full relative z-10">
              <motion.h3
                className="text-2xl font-bold text-white mb-4 text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t('buyBitcoinPage.businessSection.title')}
              </motion.h3>
              <motion.div
                className="flex flex-col md:flex-row items-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.figure
                  className="mb-4 md:mb-0 md:mr-8"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <img
                    src={paguebitlogo}
                    alt="Logo PagueBit"
                    className="w-[190px] h-[100px] object-contain"
                  />
                </motion.figure>
                <div className="flex-1">
                  <motion.p className="text-white" variants={itemVariants}>
                    {t('buyBitcoinPage.businessSection.description')}
                  </motion.p>
                  <motion.ul
                    className="mt-4 space-y-2 text-white"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {[0, 1, 2, 3].map((index) => (
                      <motion.li
                        key={index}
                        className="flex items-center cursor-pointer"
                        variants={itemVariants}
                        whileHover={featureVariants.hover}
                      >
                        <ArrowRight className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                        <span>
                          {t(
                            `buyBitcoinPage.businessSection.features.${index}`,
                          )}
                        </span>
                      </motion.li>
                    ))}
                  </motion.ul>
                  <motion.div className="mt-6">
                    <motion.a
                      href="https://admin.paguebit.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-black text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      {t('buyBitcoinPage.businessSection.button')}
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.article>
        </section>

        {/* Seção - Para Pessoa Física — Nossa Recomendação */}
        <section id="alfredSection" className="px-8 md:px-20">
          <motion.aside
            className="p-10 rounded-xl shadow-md bg-gradient-to-r from-[#FF6A1F]/95 to-[#FF8C50]/95 text-white relative overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ boxShadow: '0 10px 25px rgba(255, 106, 31, 0.3)' }}
          >
            {/* Elemento decorativo animado */}
            <motion.div
              className="absolute -top-16 -left-16 w-64 h-64 bg-white opacity-5 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 10, 0],
                y: [0, 10, 0],
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <motion.h3
              className="text-2xl font-bold text-white mb-4 text-center relative z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t('buyBitcoinPage.personalSection.title')}
            </motion.h3>
            <motion.div
              className="flex flex-col md:flex-row items-center relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.figure
                className="mb-4 md:mb-0 md:mr-8"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <img
                  src={alfredlogo}
                  alt="Logo Alfred P2P"
                  className="w-[190px] h-[100px] object-contain"
                />
              </motion.figure>
              <div className="flex-1">
                <motion.p className="text-white" variants={itemVariants}>
                  {t('buyBitcoinPage.personalSection.description')}
                </motion.p>
                <motion.ul
                  className="mt-4 space-y-2 text-white"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {[0, 1, 2, 3].map((index) => (
                    <motion.li
                      key={index}
                      className="flex items-center cursor-pointer"
                      variants={itemVariants}
                      whileHover={featureVariants.hover}
                    >
                      <ArrowRight className="h-5 w-5 text-white mr-2 flex-shrink-0" />
                      <span>
                        {t(`buyBitcoinPage.personalSection.features.${index}`)}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div className="mt-6">
                  <motion.a
                    href="https://www.alfredp2p.io/pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    {t('buyBitcoinPage.personalSection.button')}
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.aside>
        </section>
      </motion.main>
    </div>
  );
};

export default BuyBitcoinPage;
