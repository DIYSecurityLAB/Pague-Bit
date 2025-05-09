import { CreditCard, Lock, Shield, Smartphone, Wallet } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const usePFContent = () => {
  const { t } = useTranslation();

  return {
    features: [
      {
        Icon: Smartphone,
        title: t('pf.features.mobilePayments.title'),
        description: t('pf.features.mobilePayments.description'),
      },
      {
        Icon: Shield,
        title: t('pf.features.security.title'),
        description: t('pf.features.security.description'),
      },
      {
        Icon: Wallet,
        title: t('pf.features.wallet.title'),
        description: t('pf.features.wallet.description'),
      },
      {
        Icon: CreditCard,
        title: t('pf.features.buySell.title'),
        description: t('pf.features.buySell.description'),
      },
      {
        Icon: Lock,
        title: t('pf.features.privacy.title'),
        description: t('pf.features.privacy.description'),
      },
    ],
    benefits: [
      {
        title: t('pf.benefits.financialFreedom.title'),
        description: t('pf.benefits.financialFreedom.description'),
      },
      {
        title: t('pf.benefits.security.title'),
        description: t('pf.benefits.security.description'),
      },
      {
        title: t('pf.benefits.convenience.title'),
        description: t('pf.benefits.convenience.description'),
      },
    ],
  };
};
