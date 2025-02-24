import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { features } from './arrays';
import { useAboutSection } from './useAboutSection';

const AboutSection = () => {
  const { t } = useTranslation();
  const { variants } = useAboutSection();
  // tem uma gambiarra enorme envolvendo o arquiv ode traducao e o arrays... futuramente va itirar o arrays, mas agora depende dele para a featurekey
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 mt-[-40px] ">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            {t('about.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const featureKey = feature.title
                .replace(/\s+/g, '_')
                .toLowerCase();
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border border-orange-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <feature.Icon className="h-8 w-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {t(`about.features.${featureKey}.title`)}
                  </h3>
                  <p className="text-gray-600">
                    {t(`about.features.${featureKey}.description`)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
