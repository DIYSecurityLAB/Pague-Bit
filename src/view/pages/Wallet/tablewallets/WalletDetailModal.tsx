import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheck, FaExclamationTriangle, FaTimes } from 'react-icons/fa';
import { Wallet } from './walletData';

interface WalletDetailModalProps {
  wallet: Wallet | null;
  isOpen: boolean;
  onClose: () => void;
}

const WalletDetailModal: React.FC<WalletDetailModalProps> = ({
  wallet,
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();

  if (!isOpen || !wallet) return null;

  // Mapear sistemas operacionais para nomes legíveis
  const getOsName = (code: string): string => {
    switch (code) {
      case 'A':
        return 'Android';
      case 'I':
        return 'iOS';
      case 'L':
        return 'Linux';
      case 'M':
        return 'macOS';
      case 'W':
        return 'Windows';
      case 'H':
        return 'Hardware';
      default:
        return code;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">{wallet.name}</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          {/* Visão geral */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              {t('walletDetail.overview')}
            </h3>
            <p className="text-gray-600">{wallet.description.overview}</p>
          </div>

          {/* Sistemas e Nível */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                {t('walletDetail.systems')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {wallet.os.map((os) => (
                  <span
                    key={os}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {getOsName(os)}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-1 min-w-[200px]">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                {t('walletDetail.level')}
              </h3>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  wallet.usage === 'novo'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-purple-100 text-purple-700'
                }`}
              >
                {wallet.usage === 'novo'
                  ? t('walletDetail.beginner')
                  : t('walletDetail.advanced')}
              </span>
            </div>
          </div>

          {/* Avaliações */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              {t('walletDetail.ratings')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full ${
                    wallet.ratings.controle === 'B'
                      ? 'bg-green-500'
                      : wallet.ratings.controle === 'A'
                        ? 'bg-yellow-500'
                        : wallet.ratings.controle === 'C'
                          ? 'bg-orange-500'
                          : 'bg-red-500'
                  } mr-2`}
                ></div>
                <span className="text-gray-700">
                  {t('walletDetail.control')}: {wallet.ratings.controle}
                </span>
              </div>
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full ${
                    wallet.ratings.validacao === 'B'
                      ? 'bg-green-500'
                      : wallet.ratings.validacao === 'A'
                        ? 'bg-yellow-500'
                        : wallet.ratings.validacao === 'C'
                          ? 'bg-orange-500'
                          : 'bg-red-500'
                  } mr-2`}
                ></div>
                <span className="text-gray-700">
                  {t('walletDetail.validation')}: {wallet.ratings.validacao}
                </span>
              </div>
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full ${
                    wallet.ratings.transparencia === 'B'
                      ? 'bg-green-500'
                      : wallet.ratings.transparencia === 'A'
                        ? 'bg-yellow-500'
                        : wallet.ratings.transparencia === 'C'
                          ? 'bg-orange-500'
                          : 'bg-red-500'
                  } mr-2`}
                ></div>
                <span className="text-gray-700">
                  {t('walletDetail.transparency')}:{' '}
                  {wallet.ratings.transparencia}
                </span>
              </div>
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full ${
                    wallet.ratings.ambiente === 'B'
                      ? 'bg-green-500'
                      : wallet.ratings.ambiente === 'A'
                        ? 'bg-yellow-500'
                        : wallet.ratings.ambiente === 'C'
                          ? 'bg-orange-500'
                          : 'bg-red-500'
                  } mr-2`}
                ></div>
                <span className="text-gray-700">
                  {t('walletDetail.environment')}: {wallet.ratings.ambiente}
                </span>
              </div>
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full ${
                    wallet.ratings.privacidade === 'B'
                      ? 'bg-green-500'
                      : wallet.ratings.privacidade === 'A'
                        ? 'bg-yellow-500'
                        : wallet.ratings.privacidade === 'C'
                          ? 'bg-orange-500'
                          : 'bg-red-500'
                  } mr-2`}
                ></div>
                <span className="text-gray-700">
                  {t('walletDetail.privacy')}: {wallet.ratings.privacidade}
                </span>
              </div>
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full ${
                    wallet.ratings.taxas === 'B'
                      ? 'bg-green-500'
                      : wallet.ratings.taxas === 'A'
                        ? 'bg-yellow-500'
                        : wallet.ratings.taxas === 'C'
                          ? 'bg-orange-500'
                          : 'bg-red-500'
                  } mr-2`}
                ></div>
                <span className="text-gray-700">
                  {t('walletDetail.fees')}: {wallet.ratings.taxas}
                </span>
              </div>
            </div>
          </div>

          {/* Vantagens e Desvantagens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                {t('walletDetail.advantages')}
              </h3>
              <ul className="space-y-2">
                {wallet.description.advantages.map((advantage, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 text-green-500">
                      <FaCheck />
                    </span>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-700">
                {t('walletDetail.limitations')}
              </h3>
              <ul className="space-y-2">
                {wallet.description.disadvantages.map((disadvantage, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 text-orange-500">
                      <FaExclamationTriangle />
                    </span>
                    <span>{disadvantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Rodapé */}
        <div className="p-6 border-t bg-gray-50">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-orange-450 text-white rounded-lg hover:bg-orange-500 transition"
          >
            {t('walletDetail.close')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletDetailModal;
