import { useTranslation } from 'react-i18next';

export interface WalletOption {
  key: string;
  title: string;
  description?: string;
  disabled?: boolean;
}

export const useWalletOptions = () => {
  const { t } = useTranslation();

  const step1Options: WalletOption[] = [
    {
      key: 'mobile',
      title: t('wallet.step1Options.mobile.title'),
      description: t('wallet.step1Options.mobile.description'),
    },
    {
      key: 'desktop',
      title: t('wallet.step1Options.desktop.title'),
      description: t('wallet.step1Options.desktop.description'),
    },
    {
      key: 'hardware',
      title: t('wallet.step1Options.hardware.title'),
      description: t('wallet.step1Options.hardware.description'),
    },
    {
      key: 'skip',
      title: t('wallet.step1Options.skip.title'),
      description: t('wallet.step1Options.skip.description'),
    },
  ];

  const step2Options: WalletOption[] = [
    {
      key: 'controle',
      title: t('wallet.step2Options.controle.title'),
      description: t('wallet.step2Options.controle.description'),
    },
    {
      key: 'autonomia',
      title: t('wallet.step2Options.autonomia.title'),
      description: t('wallet.step2Options.autonomia.description'),
    },
    {
      key: 'ignorar',
      title: t('wallet.step2Options.ignorar.title'),
      description: t('wallet.step2Options.ignorar.description'),
    },
  ];

  const step3Options: WalletOption[] = [
    {
      key: 'controle',
      title: t('wallet.step3Options.controle.title'),
      description: t('wallet.step3Options.controle.description'),
    },
    {
      key: 'validacao',
      title: t('wallet.step3Options.validacao.title'),
      description: t('wallet.step3Options.validacao.description'),
      disabled: true,
    },
    {
      key: 'transparencia',
      title: t('wallet.step3Options.transparencia.title'),
      description: t('wallet.step3Options.transparencia.description'),
    },
    {
      key: 'ambiente',
      title: t('wallet.step3Options.ambiente.title'),
      description: t('wallet.step3Options.ambiente.description'),
      disabled: true,
    },
    {
      key: 'privacidade',
      title: t('wallet.step3Options.privacidade.title'),
      description: t('wallet.step3Options.privacidade.description'),
      disabled: true,
    },
    {
      key: 'taxas',
      title: t('wallet.step3Options.taxas.title'),
      description: t('wallet.step3Options.taxas.description'),
    },
    {
      key: 'ignorar',
      title: t('wallet.step3Options.ignorar.title'),
    },
  ];

  const step4Options: WalletOption[] = [
    {
      key: '2fa',
      title: t('wallet.step4Options.2fa.title'),
      description: t('wallet.step4Options.2fa.description'),
    },
    {
      key: 'bech32',
      title: t('wallet.step4Options.bech32.title'),
      description: t('wallet.step4Options.bech32.description'),
    },
    {
      key: 'airgap',
      title: t('wallet.step4Options.airgap.title'),
      description: t('wallet.step4Options.airgap.description'),
    },
    {
      key: 'fullnode',
      title: t('wallet.step4Options.fullnode.title'),
      description: t('wallet.step4Options.fullnode.description'),
      disabled: true,
    },
    {
      key: 'ignorar',
      title: t('wallet.step4Options.ignorar.title'),
    },
  ];

  return { step1Options, step2Options, step3Options, step4Options };
};
