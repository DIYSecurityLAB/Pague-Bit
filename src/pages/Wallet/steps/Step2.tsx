// wallet/Step2.tsx
import React from 'react';
import { motion } from 'framer-motion';
import WalletList from '../WalletList';
import { step2Options, WalletOption } from '../data';

interface Step2Props {
  onSelect: (key: 'conhecimento', value: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const Step2: React.FC<Step2Props> = ({ onSelect }) => {
  const handleSelect = (option: WalletOption) => {
    onSelect('conhecimento', option.key);
  };

  return (
    <motion.div
      key="step2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">Quanto você sabe sobre Bitcoin?</h2>
      <p className="mb-6 text-gray-600">
        Selecione a opção que melhor descreve seu nível de conhecimento.
      </p>
      <WalletList options={step2Options} onSelect={handleSelect} />
    </motion.div>
  );
};

export default Step2;
