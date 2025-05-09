import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BackgroundLines from '../../../../components/ui/BackgroundLines';
import { features } from './arrays';

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

const featureVariants = {
  hover: {
    y: -10,
    boxShadow: '0px 10px 25px rgba(255, 106, 31, 0.15)',
    border: '1px solid rgba(255, 106, 31, 0.3)',
    transition: { type: 'spring', stiffness: 300, damping: 15 },
  },
  tap: { scale: 0.98 },
};

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-16">
      {/* Primeira parte com background lines */}
      <div className="relative overflow-hidden pb-20">
        <BackgroundLines />
        <div className="container mx-auto px-4 relative z-10 mt-8">
          <motion.div
            className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Header com gradiente laranja */}
            <div className="bg-gradient-to-r from-[#FF6A1F]/95 to-[#FF8C50]/95 p-8 relative">
              {/* Elemento decorativo animado */}
              <motion.div
                className="absolute -top-16 -right-16 w-64 h-64 bg-white opacity-5 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  x: [0, 10, 0],
                  y: [0, 10, 0],
                }}
                transition={{ duration: 12, repeat: Infinity }}
              />

              <motion.h2
                className="text-3xl font-bold text-white mb-4 text-center relative z-10"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {t('about.title')}
              </motion.h2>

              <motion.p
                className="text-white text-lg max-w-3xl mx-auto text-center relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {t('about.description')}
              </motion.p>
            </div>

            {/* Corpo com fundo branco */}
            <div className="bg-white p-8">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 py-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {features.map((feature, index) => {
                  const featureKey = feature.title
                    .replace(/\s+/g, '_')
                    .toLowerCase();
                  return (
                    <motion.div
                      key={index}
                      className="bg-white p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center"
                      variants={itemVariants}
                      whileHover={featureVariants.hover}
                      whileTap={featureVariants.tap}
                    >
                      <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                        <feature.Icon className="h-7 w-7 text-[#FF6A1F]" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-gray-800">
                        {t(`about.features.${featureKey}.title`)}
                      </h3>
                      <p className="text-gray-600 text-center text-sm">
                        {t(`about.features.${featureKey}.description`)}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Linha separadora */}
      <div className="border-t border-gray-200 w-full"></div>

      {/* Segunda seção - Nossa História */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h2
              className="text-3xl font-bold text-[#FF6A1F] mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t('about.journey.title')}
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF6A1F]/90 to-[#FF8C50]/90 mix-blend-multiply"></div>
                  <div className="absolute inset-0 flex items-center justify-center p-8">
                    <blockquote className="text-white text-xl font-medium italic text-center">
                      {t('about.journey.quote')}
                    </blockquote>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="space-y-4 text-gray-700"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p>{t('about.journey.paragraphs.0')}</p>
                <p>{t('about.journey.paragraphs.1')}</p>
                <p>{t('about.journey.paragraphs.2')}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
