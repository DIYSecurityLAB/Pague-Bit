import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useReasons } from './arrays';
import { useWhyPagueBit } from './useWhyPagueBit';
interface Reason {
  id: number;
  Icon: React.ElementType;
  title: string;
  description: string;
  image: string;
  alt: string;
}
const WhyPagueBit = () => {
  const { t } = useTranslation();
  const { itemsRef, controls, setIsHovered } = useWhyPagueBit();
  const reasons = useReasons(); // Pegando os textos traduzidos
  const duplicatedReasons = [...reasons, ...reasons]; // Garante a rolagem contínua

  const renderCard = (reason: Reason, isDuplicate = false) => (
    <div
      key={`${reason.id}${isDuplicate ? '-duplicate' : ''}`}
      className="flex-shrink-0 w-1/3 px-2"
    >
      <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center h-full border border-orange-100 hover:border-orange-300 transition-colors">
        <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
          <reason.Icon className="h-8 w-8 text-orange-500" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{reason.title}</h3>
        <p className="text-gray-600 mb-4">{reason.description}</p>
        <img src={reason.image} alt={reason.alt} className="mt-4 rounded-md" />
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          {t('whyPagueBit.title')}
        </h2>
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div animate={controls} className="flex">
            <div ref={itemsRef} className="flex">
              {duplicatedReasons.map((reason) => renderCard(reason))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyPagueBit;
