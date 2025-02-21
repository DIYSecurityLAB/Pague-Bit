import React from 'react';
import { motion } from 'framer-motion';
import WalletList from '../WalletList';
import { useWalletOptions, WalletOption } from '../data';
import { useTranslation } from 'react-i18next';

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
      <h2 className="text-2xl font-bold mb-4">
        {t("wallet.step3.title")} <span className="text-sm text-gray-500">({t("step3.optional")})</span>
      </h2>
      <p className="mb-6 text-gray-600">{t("wallet.step3.description")}</p>
      <WalletList options={step3Options} onSelect={handleSelect} />
    </motion.div>
  );
};

export default Step3;
