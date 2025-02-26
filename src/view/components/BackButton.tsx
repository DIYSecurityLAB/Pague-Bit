import { useTranslation } from 'react-i18next';
import { FiArrowLeft } from 'react-icons/fi';

const BackButton = () => {
  const { t } = useTranslation();

  const handleBack = () => {
    window.history.back();
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-20 left-6 z-50 flex items-center gap-2 bg-transparent border-none rounded-full p-3 hover:bg-orange-50 transition"
    >
      <FiArrowLeft size={20} className="text-orange-500" />
      <span className="text-orange-500 font-medium">
        {t('button.back', 'Voltar')}
      </span>
    </button>
  );
};

export default BackButton;
