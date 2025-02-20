export interface WalletOption {
  key: string;
  title: string;
  description?: string;
  disabled?: boolean;
}

export const step1Options: WalletOption[] = [
  {
    key: 'celular-android',
    title: 'Carteiras para Celular - Android',
    description:
      'Portátil e conveniente, ideal para transações face-a-face. Usa QR codes para transações rápidas.',
  },
  {
    key: 'celular-ios',
    title: 'Carteiras para Celular - iOS',
    description:
      'Portátil e conveniente, ideal para transações face-a-face. Usa QR codes para transações rápidas.',
  },
  {
    key: 'desktop',
    title: 'Carteiras para Computador',
    description:
      'Ambiente que permite controle total sobre os fundos. Pode oferecer suporte a full nodes ou carteiras físicas, mas está sujeito a malware.',
  },
  {
    key: 'hardware',
    title: 'Carteiras Físicas (Hardware)',
    description:
      'Uma das formas mais seguras de guardar fundos, ideal para grandes quantias. Menos prático para uso diário.',
  },
];

export const step2Options: WalletOption[] = [
  {
    key: 'novo',
    title: 'plant & bitcoin (Novo)',
    description: 'Mostrar carteiras ideais para novos usuários.',
  },
  {
    key: 'experiente',
    title: 'trees & bitcoin (Com experiência)',
    description: 'Mostrar todas as carteiras disponíveis.',
  },
  {
    key: 'ignorar',
    title: 'Pular Tutorial',
  },
];

export const step3Options: WalletOption[] = [
  {
    key: 'controle',
    title: 'Controle',
    description: 'Controle total sobre seus bitcoins, sem depender de terceiros.',
  },
  {
    key: 'validacao',
    title: 'Validação',
    description:
      'Nota: Esta opção está indisponível devido à sua escolha anterior.',
    disabled: true,
  },
  {
    key: 'transparencia',
    title: 'Transparência',
    description: 'Código aberto e desenvolvimento determinístico.',
  },
  {
    key: 'ambiente',
    title: 'Ambiente',
    description:
      'Nota: Esta opção está indisponível devido à sua escolha anterior.',
    disabled: true,
  },
  {
    key: 'privacidade',
    title: 'Privacidade',
    description:
      'Nota: Esta opção está indisponível devido à sua escolha anterior.',
    disabled: true,
  },
  {
    key: 'taxas',
    title: 'Taxas',
    description: 'Controle total sobre as taxas pagas à rede Bitcoin.',
  },
  {
    key: 'ignorar',
    title: 'Pular Tutorial',
  },
];

export const step4Options: WalletOption[] = [
  {
    key: '2fa',
    title: '2FA',
    description: 'Autenticação de dois fatores para segurança adicional.',
  },
  {
    key: 'bech32',
    title: 'Bech32',
    description:
      'Formato de endereço especial com SegWit para transações rápidas.',
  },
  {
    key: 'fullnode',
    title: 'Full Node',
    description:
      'Nota: Esta opção está indisponível devido à sua escolha anterior.',
    disabled: true,
  },
  {
    key: 'ignorar',
    title: 'Pular Tutorial',
  },
];
