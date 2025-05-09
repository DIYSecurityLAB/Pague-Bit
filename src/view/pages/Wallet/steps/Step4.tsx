import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import WalletList from '../WalletList';
import { useWalletOptions, WalletOption } from '../data';

interface Step4Props {
  onSelect: (key: 'recurso', value: string) => void;
  onFinish: () => void;
}

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const Step4: React.FC<Step4Props> = ({ onSelect, onFinish }) => {
  const { t } = useTranslation();
  const { step4Options } = useWalletOptions();

  const handleSelect = (option: WalletOption) => {
    onSelect('recurso', option.key);
  };

  return (
    <motion.div
      key="step4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">
        {t('wallet.step4.title')}{' '}
        <span className="text-sm text-white opacity-75">
          ({t('wallet.step4.optional')})
        </span>
      </h2>
      <p className="mb-6 text-white opacity-90">
        {t('wallet.step4.description')}
      </p>
      <WalletList options={step4Options} onSelect={handleSelect} />
      <div className="mt-8 flex justify-end">
        <button
          onClick={onFinish}
          className="px-6 py-2 bg-white text-orange-450 font-medium rounded-xl hover:bg-orange-50 transition"
        >
          {t('wallet.step4.button')}
        </button>
      </div>
    </motion.div>
  );
};

export default Step4;
