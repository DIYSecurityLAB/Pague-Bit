import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function FaqSection() {
  const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(null);
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const toggleCategory = (index: number) => {
    setOpenCategoryIndex(openCategoryIndex === index ? null : index);
    setOpenItemIndex(null);
  };

  const toggleItem = (index: number) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  const categories = ['bitcoin', 'general', 'services'];

  return (
    <div className="container mx-auto py-12 px-4 md:px-0">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">{t('faq.title')}</h1>
      <div className="max-w-3xl mx-auto">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-6">
            <button
              className="w-full flex justify-between items-center p-4 bg-white rounded-t-lg shadow-sm hover:shadow-md transition-shadow text-gray-800 border border-orange-100"
              onClick={() => toggleCategory(categoryIndex)}
            >
              <span className="text-xl font-medium">{t(`faq.categories.${category}.title`)}</span>
              {openCategoryIndex === categoryIndex ? (
                <ChevronUp className="w-6 h-6 text-orange-500" />
              ) : (
                <ChevronDown className="w-6 h-6 text-orange-500" />
              )}
            </button>
            {openCategoryIndex === categoryIndex && (
              <div className="bg-white rounded-b-lg border-x border-b border-orange-100">
                {t(`faq.categories.${category}.items`, { returnObjects: true }).map((item: any, itemIndex: number) => (
                  <div key={itemIndex} className="border-b border-orange-100 last:border-none">
                    <button
                      className="w-full flex justify-between items-center p-4 text-gray-800 hover:bg-orange-50 transition-colors"
                      onClick={() => toggleItem(itemIndex)}
                    >
                      <span className="text-lg">{item.question}</span>
                      {openItemIndex === itemIndex ? (
                        <ChevronUp className="w-5 h-5 text-orange-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-orange-500" />
                      )}
                    </button>
                    {openItemIndex === itemIndex && (
                      <motion.div
                        className="p-4 text-gray-600"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        transition={{ duration: 0.3 }}
                      >
                        {item.answer}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaqSection;
