import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import WalletList from '../WalletList';
import { useWalletOptions, WalletOption } from '../data';

interface Step2Props {
  onSelect: (key: 'conhecimento', value: string) => void;
  onFinish: () => void; // Adicionada a propriedade onFinish
}

const containerVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 },
};

const Step2: React.FC<Step2Props> = ({ onSelect, onFinish }) => {
  const { t } = useTranslation();
  const { step2Options } = useWalletOptions();

  const handleSelect = (option: WalletOption) => {
    onSelect('conhecimento', option.key);

    // Como este é o último passo, chamamos onFinish após a seleção
    // Apenas se a opção não for "ignorar", pois nesse caso o WalletSelector
    // já vai chamar setTutorialCompleted direto
    if (option.key !== 'ignorar') {
      setTimeout(() => {
        onFinish();
      }, 300); // Pequeno atraso para melhor experiência do usuário
    }
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
      <h2 className="text-2xl font-bold mb-4 text-white">
        {t('wallet.step2.title')}
      </h2>
      <p className="mb-6 text-white opacity-90">
        {t('wallet.step2.description')}
      </p>
      <WalletList options={step2Options} onSelect={handleSelect} />
    </motion.div>
  );
};

export default Step2;
