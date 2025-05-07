import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import WalletList from '../WalletList';
import { useWalletOptions, WalletOption } from '../data';

interface Step3Props {
  onSelect: (key: 'criterio', value: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const Step3: React.FC<Step3Props> = ({ onSelect }) => {
  const { t } = useTranslation();
  const { step3Options } = useWalletOptions();

  const handleSelect = (option: WalletOption) => {
    onSelect('criterio', option.key);
  };

  return (
    <motion.div
      key="step3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4 text-white">
        {t('wallet.step3.title')}{' '}
        <span className="text-sm text-white opacity-75">
          ({t('wallet.step3.optional')})
        </span>
      </h2>
      <p className="mb-6 text-white opacity-90">
        {t('wallet.step3.description')}
      </p>
      <WalletList options={step3Options} onSelect={handleSelect} />
    </motion.div>
  );
};

export default Step3;
