import React, { useState } from 'react';
import WalletFilterSidebar, { SelectedFilters } from './WalletFilterSidebar';
import WalletTable from './WalletTable';
import { wallets, Wallet } from './walletData';
import { useTranslation } from 'react-i18next';
import BackButton from '../../../components/BackButton';

const RatingLegend: React.FC = () => {
  const { t } = useTranslation();
  const legendItems = [
    { label: t("wallet.ratingLegend.good"), color: 'bg-green-500' },
    { label: t("wallet.ratingLegend.acceptable"), color: 'bg-yellow-500' },
    { label: t("wallet.ratingLegend.cautious"), color: 'bg-orange-500' },
    { label: t("wallet.ratingLegend.neutral"), color: 'bg-red-500' },
  ];
  return (
    <div className="flex items-center space-x-4 mb-4">
      {legendItems.map((item) => (
        <div key={item.label} className="flex items-center space-x-1">
          <div className={`w-4 h-4 rounded-full ${item.color}`} />
          <span className="text-sm text-gray-700">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

interface WalletDashboardProps {
  initialFilters: SelectedFilters;
}

const WalletDashboard: React.FC<WalletDashboardProps> = ({ initialFilters }) => {
  const { t } = useTranslation();
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(initialFilters);

  const handleFilterChange = (filters: SelectedFilters) => {
    setSelectedFilters(filters);
  };

  const filteredWallets: Wallet[] = wallets.filter((wallet) => {
    const matchOs =
      selectedFilters.os.length === 0 ||
      wallet.os.some((os) => selectedFilters.os.includes(os));
    const matchUsage =
      selectedFilters.usage.length === 0 ||
      selectedFilters.usage.includes(wallet.usage);
    return matchOs && matchUsage;
  });

  return (
    
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8 ">
       <BackButton/>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row w-full max-w-6xl">
        {/* Sidebar com filtros */}
        <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-200">
          <WalletFilterSidebar
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
          />
        </div>
        {/* Conteúdo principal */}
        <div className="w-full md:w-3/4 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {t("wallet.dashboard.title")}
          </h2>
          <RatingLegend />
          <WalletTable wallets={filteredWallets} />
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;
