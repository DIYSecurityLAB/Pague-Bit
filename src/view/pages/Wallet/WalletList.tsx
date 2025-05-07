import React from 'react';
import { WalletOption } from './data';

interface WalletListProps {
  options: WalletOption[];
  onSelect: (option: WalletOption) => void;
}

const WalletList: React.FC<WalletListProps> = ({ options, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {options.map((option) => (
        <button
          key={option.key}
          onClick={() => onSelect(option)}
          disabled={option.disabled}
          className={`p-4 border border-white/20 bg-white text-gray-800 rounded-xl 
            transition-all duration-300 ease-in-out transform 
            hover:-translate-y-2 hover:shadow-lg hover:scale-[1.02] 
            active:translate-y-0 active:shadow-md active:scale-[0.98]
            ${option.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <strong className="block text-gray-900 text-lg mb-1">
            {option.title}
          </strong>
          {option.description && (
            <small className="block text-sm text-gray-500 mt-2">
              {option.description}
            </small>
          )}
        </button>
      ))}
    </div>
  );
};

export default WalletList;
