import React from 'react';
import { osFilterGroups, usageFilters, FilterOption, FilterGroup } from './walletData';
import { FaAndroid, FaApple, FaLinux, FaWindows, FaMicrochip } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export interface SelectedFilters {
  os: string[];    // 'A', 'I', 'L', 'M', 'W', 'H'
  usage: string[]; // 'novo' ou 'experiente'
}

const osIcons: Record<string, JSX.Element> = {
  A: <FaAndroid size={24} />,
  I: <FaApple size={24} />,
  L: <FaLinux size={24} />,
  M: <FaApple size={24} />,
  W: <FaWindows size={24} />,
  H: <FaMicrochip size={24} />,
};

interface WalletFilterSidebarProps {
  selectedFilters: SelectedFilters;
  onFilterChange: (filters: SelectedFilters) => void;
}

const WalletFilterSidebar: React.FC<WalletFilterSidebarProps> = ({ selectedFilters, onFilterChange }) => {
  const { t } = useTranslation();

  const handleOSClick = (key: string) => {
    let updated: string[];
    if (selectedFilters.os.includes(key)) {
      updated = selectedFilters.os.filter(item => item !== key);
    } else {
      updated = [...selectedFilters.os, key];
    }
    onFilterChange({
      ...selectedFilters,
      os: updated,
    });
  };

  const handleUsageChange = (key: string) => {
    let updated: string[];
    if (selectedFilters.usage.includes(key)) {
      updated = selectedFilters.usage.filter(item => item !== key);
    } else {
      updated = [...selectedFilters.usage, key];
    }
    onFilterChange({
      ...selectedFilters,
      usage: updated,
    });
  };

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-4">
        {t("wallet.sidebar.filters.title")}
      </h3>
      
      {/* Filtro: Sistema Operacional */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-2">
          {t("wallet.sidebar.filters.osTitle")}
        </h4>
        {osFilterGroups.map((group: FilterGroup) => (
          <div key={group.group} className="mb-4">
            <div className="text-gray-600 font-medium mb-2">{group.group}</div>
            <div className="flex space-x-2">
              {group.options.map((option: FilterOption) => (
                <button
                  key={option.key}
                  onClick={() => handleOSClick(option.key)}
                  className={`p-2 rounded-full border transition 
                    ${selectedFilters.os.includes(option.key)
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300'} 
                    hover:bg-blue-500 hover:text-white`}
                  title={option.label}
                >
                  {osIcons[option.key] || option.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Filtro: Tipo de Uso */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-700 mb-2">
          {t("wallet.sidebar.filters.usageTitle")}
        </h4>
        <div className="flex space-x-2">
          {usageFilters.map((option: FilterOption) => (
            <button
              key={option.key}
              onClick={() => handleUsageChange(option.key)}
              className={`px-4 py-2 rounded-full border transition 
                ${selectedFilters.usage.includes(option.key)
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-700 border-gray-300'} 
                hover:bg-blue-500 hover:text-white`}
              title={option.label}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Botão para limpar filtros */}
      <button
        onClick={() => onFilterChange({ os: [], usage: [] })}
        className="text-blue-600 hover:underline"
      >
        {t("wallet.sidebar.filters.clear")}
      </button>
    </div>
  );
};

export default WalletFilterSidebar;
