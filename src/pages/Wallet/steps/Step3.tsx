// wallet/Step3.tsx
import React from 'react';
import { motion } from 'framer-motion';
import WalletList from '../WalletList';
import { step3Options, WalletOption } from '../data';

interface Step3Props {
  onSelect: (key: 'criterio', value: string) => void;
}

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const Step3: React.FC<Step3Props> = ({ onSelect }) => {
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
        Qual critério é importante para você?{' '}
        <span className="text-sm text-gray-500">(Opcional)</span>
      </h2>
      <p className="mb-6 text-gray-600">
        Selecione um critério que seja essencial para sua escolha.
      </p>
      <WalletList options={step3Options} onSelect={handleSelect} />
    </motion.div>
  );
};

export default Step3;
