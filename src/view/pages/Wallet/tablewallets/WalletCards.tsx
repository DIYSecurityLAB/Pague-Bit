import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInfoCircle } from 'react-icons/fa';
import { Wallet } from './walletData';
import WalletDetailModal from './WalletDetailModal';

interface RatingItemProps {
  label: string;
  rating: string;
}

const getRatingColor = (rating: string): string => {
  const r = rating.toUpperCase();
  switch (r) {
    case 'B':
      return 'bg-green-500';
    case 'A':
      return 'bg-yellow-500';
    case 'C':
      return 'bg-orange-500';
    case 'N':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

const RatingItem: React.FC<RatingItemProps> = ({ label, rating }) => {
  const colorClass = getRatingColor(rating);
  return (
    <div className="flex items-center justify-between">
      <span className="text-gray-700">{label}</span>
      <div className="flex items-center">
        <div className={`w-3 h-3 rounded-full ${colorClass} mr-2`}></div>
        <span className="text-sm font-medium">{rating.toUpperCase()}</span>
      </div>
    </div>
  );
};

interface WalletCardsProps {
  wallets: Wallet[];
}

const WalletCards: React.FC<WalletCardsProps> = ({ wallets }) => {
  const { t } = useTranslation();
  const [selectedWallet, setSelectedWallet] = useState<Wallet | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDetails = (wallet: Wallet) => {
    setSelectedWallet(wallet);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {wallets.map((wallet) => (
        <div
          key={wallet.id}
          className="bg-white rounded-lg shadow-md p-4 border border-gray-100 hover:shadow-lg transition-shadow"
        >
          <h3 className="text-lg font-bold text-gray-800 mb-3 border-b pb-2">
            {wallet.name}
          </h3>

          <div className="space-y-2">
            <RatingItem
              label={t('wallet.table.controle')}
              rating={wallet.ratings.controle}
            />
            <RatingItem
              label={t('wallet.table.validation')}
              rating={wallet.ratings.validacao}
            />
            <RatingItem
              label={t('wallet.table.transparency')}
              rating={wallet.ratings.transparencia}
            />
            <RatingItem
              label={t('wallet.table.environment')}
              rating={wallet.ratings.ambiente}
            />
            <RatingItem
              label={t('wallet.table.privacy')}
              rating={wallet.ratings.privacidade}
            />
            <RatingItem
              label={t('wallet.table.fees')}
              rating={wallet.ratings.taxas}
            />
          </div>

          <div className="mt-3 pt-2 border-t flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {wallet.os.map((os) => os).join(', ')} |{' '}
              {wallet.usage === 'novo'
                ? t('walletDetail.beginner')
                : t('walletDetail.advanced')}
            </span>
            <button
              onClick={() => handleOpenDetails(wallet)}
              className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
            >
              {t('walletDetail.viewDetails')} <FaInfoCircle className="ml-1" />
            </button>
          </div>
        </div>
      ))}

      <WalletDetailModal
        wallet={selectedWallet}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default WalletCards;
