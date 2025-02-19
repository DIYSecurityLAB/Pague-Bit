// wallet/Step4.tsx
import React from 'react';
import { motion } from 'framer-motion';
import WalletList from '../WalletList';
import { step4Options, WalletOption } from '../data';

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
      <h2 className="text-2xl font-bold mb-4">
        Qual recurso você está procurando?{' '}
        <span className="text-sm text-gray-500">(Opcional)</span>
      </h2>
      <p className="mb-6 text-gray-600">
        Selecione o recurso que deseja ter em sua carteira.
      </p>
      <WalletList options={step4Options} onSelect={handleSelect} />
      <div className="mt-8 flex justify-end">
        <button
          onClick={onFinish}
          className="px-6 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition"
        >
          Ver resultados
        </button>
      </div>
    </motion.div>
  );
};

export default Step4;
