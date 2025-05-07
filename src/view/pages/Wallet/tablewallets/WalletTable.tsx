import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInfoCircle } from 'react-icons/fa';
import { Wallet } from './walletData';
import WalletDetailModal from './WalletDetailModal';

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

interface RatingCellProps {
  rating: string;
}

const RatingCell: React.FC<RatingCellProps> = ({ rating }) => {
  const colorClass = getRatingColor(rating);
  return (
    <div
      className={`w-4 h-4 rounded-full ${colorClass} mx-auto`}
      title={rating}
    ></div>
  );
};

interface WalletTableProps {
  wallets: Wallet[];
}

const WalletTable: React.FC<WalletTableProps> = ({ wallets }) => {
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
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-orange-450">
          <tr>
            <th className="p-4 text-left text-white font-semibold">
              {t('wallet.table.wallet')}
            </th>
            <th className="p-4 text-center text-white font-semibold">
              {t('wallet.table.controle')}
            </th>
            <th className="p-4 text-center text-white font-semibold">
              {t('wallet.table.validation')}
            </th>
            <th className="p-4 text-center text-white font-semibold">
              {t('wallet.table.transparency')}
            </th>
            <th className="p-4 text-center text-white font-semibold">
              {t('wallet.table.environment')}
            </th>
            <th className="p-4 text-center text-white font-semibold">
              {t('wallet.table.privacy')}
            </th>
            <th className="p-4 text-center text-white font-semibold">
              {t('wallet.table.fees')}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {wallets.map((wallet) => (
            <tr key={wallet.id} className="hover:bg-gray-50">
              <td className="p-4">
                <button
                  className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  onClick={() => handleOpenDetails(wallet)}
                >
                  {wallet.name}
                  <FaInfoCircle
                    className="ml-2 text-gray-400 hover:text-blue-500"
                    size={16}
                  />
                </button>
              </td>
              <td className="p-4 text-center">
                <RatingCell rating={wallet.ratings.controle} />
              </td>
              <td className="p-4 text-center">
                <RatingCell rating={wallet.ratings.validacao} />
              </td>
              <td className="p-4 text-center">
                <RatingCell rating={wallet.ratings.transparencia} />
              </td>
              <td className="p-4 text-center">
                <RatingCell rating={wallet.ratings.ambiente} />
              </td>
              <td className="p-4 text-center">
                <RatingCell rating={wallet.ratings.privacidade} />
              </td>
              <td className="p-4 text-center">
                <RatingCell rating={wallet.ratings.taxas} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <WalletDetailModal
        wallet={selectedWallet}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default WalletTable;
