import React from 'react';
import { motion } from 'framer-motion';
import WalletList from '../WalletList';
import { useWalletOptions, WalletOption } from '../data';
import { useTranslation } from 'react-i18next';

interface Step1Props {
  onSelect: (key: 'sistema', value: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const Step1: React.FC<Step1Props> = ({ onSelect }) => {
  const { t } = useTranslation();
  const { step1Options } = useWalletOptions();

  const handleSelect = (option: WalletOption) => {
    onSelect('sistema', option.key);
  };

  return (
    <motion.div
      key="step1"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">{t("wallet.step1.title")}</h2>
      <p className="mb-6 text-gray-600">{t("wallet.step1.description")}</p>
      <WalletList options={step1Options} onSelect={handleSelect} />
    </motion.div>
  );
};

export default Step1;
