import { Bitcoin, Lock, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const useBitcoinFeatures = () => {
  const { t } = useTranslation();

  return [
    {
      id: 1,
      Icon: Bitcoin,
      title: t('whatIsBitcoin.features.1.title'),
      description: t('whatIsBitcoin.features.1.description'),
      link: '/decentralization',
    },
    {
      id: 2,
      Icon: Lock,
      title: t('whatIsBitcoin.features.2.title'),
      description: t('whatIsBitcoin.features.2.description'),
      link: '/security',
    },
    {
      id: 3,
      Icon: TrendingUp,
      title: t('whatIsBitcoin.features.3.title'),
      description: t('whatIsBitcoin.features.3.description'),
      link: '/limited-supply',
    },
  ];
};
