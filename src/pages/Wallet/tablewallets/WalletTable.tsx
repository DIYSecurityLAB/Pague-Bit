import React from 'react';
import { Wallet } from './walletData';

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
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-orange-500">
          <tr>
            <th className="p-4 text-left text-white font-semibold">Carteira</th>
            <th className="p-4 text-center text-white font-semibold">Controle</th>
            <th className="p-4 text-center text-white font-semibold">Validação</th>
            <th className="p-4 text-center text-white font-semibold">Transparência</th>
            <th className="p-4 text-center text-white font-semibold">Ambiente</th>
            <th className="p-4 text-center text-white font-semibold">Privacidade</th>
            <th className="p-4 text-center text-white font-semibold">Taxas</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {wallets.map((wallet) => (
            <tr key={wallet.id} className="hover:bg-gray-50">
              <td className="p-4">{wallet.name}</td>
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
    </div>
  );
};

export default WalletTable;
