// wallet/walletData.ts

export interface Wallet {
  id: number;
  name: string;
  os: string[]; // Abreviações: 'A' (Android), 'I' (iOS), 'L' (Linux), 'M' (Mac), 'W' (Windows), 'H' (Hardware)
  usage: 'novo' | 'experiente';
  type: 'hot' | 'cold'; // Tipo de carteira (hot ou cold)
  coinType: 'bitcoin-only' | 'multi-coin'; // Tipo de moeda suportada
  description: {
    advantages: string[]; // Vantagens/diferenciais da carteira
    disadvantages: string[]; // Pontos fracos
    overview: string; // Visão geral da carteira
  };
  ratings: {
    controle: string; // 'B' (Bom), 'A' (Aceitável), 'C' (Cuidadoso), 'N' (Neutro)
    validacao: string;
    transparencia: string;
    ambiente: string;
    privacidade: string;
    taxas: string;
  };
}

export const wallets: Wallet[] = [
  // Hot Wallets
  {
    id: 1,
    name: 'Electrum',
    os: ['W', 'L', 'M'],
    usage: 'experiente',
    type: 'hot',
    coinType: 'bitcoin-only',
    description: {
      overview: 'walletDetail.wallets.1.overview',
      advantages: [
        'walletDetail.wallets.1.advantages.0',
        'walletDetail.wallets.1.advantages.1',
        'walletDetail.wallets.1.advantages.2',
        'walletDetail.wallets.1.advantages.3',
      ],
      disadvantages: [
        'walletDetail.wallets.1.disadvantages.0',
        'walletDetail.wallets.1.disadvantages.1',
        'walletDetail.wallets.1.disadvantages.2',
      ],
    },
    ratings: {
      controle: 'B',
      validacao: 'A',
      transparencia: 'A',
      ambiente: 'N',
      privacidade: 'B',
      taxas: 'A',
    },
  },
  {
    id: 2,
    name: 'Green Wallet',
    os: ['A', 'I', 'W', 'L', 'M'],
    usage: 'novo',
    type: 'hot',
    coinType: 'bitcoin-only',
    description: {
      overview: 'walletDetail.wallets.2.overview',
      advantages: [
        'walletDetail.wallets.2.advantages.0',
        'walletDetail.wallets.2.advantages.1',
        'walletDetail.wallets.2.advantages.2',
        'walletDetail.wallets.2.advantages.3',
      ],
      disadvantages: [
        'walletDetail.wallets.2.disadvantages.0',
        'walletDetail.wallets.2.disadvantages.1',
        'walletDetail.wallets.2.disadvantages.2',
      ],
    },
    ratings: {
      controle: 'B',
      validacao: 'B',
      transparencia: 'B',
      ambiente: 'B',
      privacidade: 'B',
      taxas: 'A',
    },
  },
  {
    id: 3,
    name: 'Sparrow Wallet',
    os: ['L', 'W', 'M'],
    usage: 'experiente',
    type: 'hot',
    coinType: 'bitcoin-only',
    description: {
      overview: 'walletDetail.wallets.3.overview',
      advantages: [
        'walletDetail.wallets.3.advantages.0',
        'walletDetail.wallets.3.advantages.1',
        'walletDetail.wallets.3.advantages.2',
        'walletDetail.wallets.3.advantages.3',
      ],
      disadvantages: [
        'walletDetail.wallets.3.disadvantages.0',
        'walletDetail.wallets.3.disadvantages.1',
        'walletDetail.wallets.3.disadvantages.2',
      ],
    },
    ratings: {
      controle: 'B',
      validacao: 'A',
      transparencia: 'B',
      ambiente: 'C',
      privacidade: 'N',
      taxas: 'B',
    },
  },
  {
    id: 4,
    name: 'Specter Desktop',
    os: ['L'],
    usage: 'experiente',
    type: 'hot',
    coinType: 'bitcoin-only',
    description: {
      overview: 'walletDetail.wallets.4.overview',
      advantages: [
        'walletDetail.wallets.4.advantages.0',
        'walletDetail.wallets.4.advantages.1',
        'walletDetail.wallets.4.advantages.2',
        'walletDetail.wallets.4.advantages.3',
      ],
      disadvantages: [
        'walletDetail.wallets.4.disadvantages.0',
        'walletDetail.wallets.4.disadvantages.1',
        'walletDetail.wallets.4.disadvantages.2',
      ],
    },
    ratings: {
      controle: 'A',
      validacao: 'A',
      transparencia: 'B',
      ambiente: 'N',
      privacidade: 'N',
      taxas: 'A',
    },
  },
  {
    id: 5,
    name: 'Nunchuck Wallet',
    os: ['A', 'I', 'W', 'M'],
    usage: 'experiente',
    type: 'hot',
    coinType: 'bitcoin-only',
    description: {
      overview: 'walletDetail.wallets.5.overview',
      advantages: [
        'walletDetail.wallets.5.advantages.0',
        'walletDetail.wallets.5.advantages.1',
        'walletDetail.wallets.5.advantages.2',
        'walletDetail.wallets.5.advantages.3',
      ],
      disadvantages: [
        'walletDetail.wallets.5.disadvantages.0',
        'walletDetail.wallets.5.disadvantages.1',
        'walletDetail.wallets.5.disadvantages.2',
      ],
    },
    ratings: {
      controle: 'B',
      validacao: 'A',
      transparencia: 'B',
      ambiente: 'B',
      privacidade: 'B',
      taxas: 'A',
    },
  },
  {
    id: 8,
    name: 'BlueWallet',
    os: ['A', 'I'],
    usage: 'novo',
    type: 'hot',
    coinType: 'multi-coin',
    description: {
      overview: 'walletDetail.wallets.8.overview',
      advantages: [
        'walletDetail.wallets.8.advantages.0',
        'walletDetail.wallets.8.advantages.1',
        'walletDetail.wallets.8.advantages.2',
        'walletDetail.wallets.8.advantages.3',
      ],
      disadvantages: [
        'walletDetail.wallets.8.disadvantages.0',
        'walletDetail.wallets.8.disadvantages.1',
        'walletDetail.wallets.8.disadvantages.2',
      ],
    },
    ratings: {
      controle: 'B',
      validacao: 'B',
      transparencia: 'A',
      ambiente: 'B',
      privacidade: 'B',
      taxas: 'A',
    },
  },

  // Cold Wallets
  {
    id: 9,
    name: 'Krux',
    os: ['H'],
    usage: 'experiente',
    type: 'cold',
    coinType: 'bitcoin-only',
    description: {
      overview: 'walletDetail.wallets.9.overview',
      advantages: [
        'walletDetail.wallets.9.advantages.0',
        'walletDetail.wallets.9.advantages.1',
        'walletDetail.wallets.9.advantages.2',
        'walletDetail.wallets.9.advantages.3',
        'walletDetail.wallets.9.advantages.4',
      ],
      disadvantages: [
        'walletDetail.wallets.9.disadvantages.0',
        'walletDetail.wallets.9.disadvantages.1',
        'walletDetail.wallets.9.disadvantages.2',
      ],
    },
    ratings: {
      controle: 'B',
      validacao: 'B',
      transparencia: 'B',
      ambiente: 'C',
      privacidade: 'B',
      taxas: 'B',
    },
  },
  {
    id: 10,
    name: 'Jade',
    os: ['H'],
    usage: 'novo',
    type: 'cold',
    coinType: 'bitcoin-only',
    description: {
      overview: 'walletDetail.wallets.10.overview',
      advantages: [
        'walletDetail.wallets.10.advantages.0',
        'walletDetail.wallets.10.advantages.1',
        'walletDetail.wallets.10.advantages.2',
        'walletDetail.wallets.10.advantages.3',
      ],
      disadvantages: [
        'walletDetail.wallets.10.disadvantages.0',
        'walletDetail.wallets.10.disadvantages.1',
        'walletDetail.wallets.10.disadvantages.2',
      ],
    },
    ratings: {
      controle: 'A',
      validacao: 'A',
      transparencia: 'B',
      ambiente: 'B',
      privacidade: 'A',
      taxas: 'A',
    },
  },
  {
    id: 11,
    name: 'SeedSigner',
    os: ['H'],
    usage: 'experiente',
    type: 'cold',
    coinType: 'bitcoin-only',
    description: {
      overview: 'walletDetail.wallets.11.overview',
      advantages: [
        'walletDetail.wallets.11.advantages.0',
        'walletDetail.wallets.11.advantages.1',
        'walletDetail.wallets.11.advantages.2',
        'walletDetail.wallets.11.advantages.3',
        'walletDetail.wallets.11.advantages.4',
      ],
      disadvantages: [
        'walletDetail.wallets.11.disadvantages.0',
        'walletDetail.wallets.11.disadvantages.1',
        'walletDetail.wallets.11.disadvantages.2',
      ],
    },
    ratings: {
      controle: 'B',
      validacao: 'B',
      transparencia: 'B',
      ambiente: 'C',
      privacidade: 'B',
      taxas: 'A',
    },
  },
];

export interface FilterOption {
  key: string;
  label: string;
}

export interface FilterGroup {
  group: string;
  options: FilterOption[];
}

// Os filtros agora usam as mesmas abreviações para os sistemas operacionais.
export const osFilterGroups: FilterGroup[] = [
  {
    group: 'Celular',
    options: [
      { key: 'A', label: 'Android' },
      { key: 'I', label: 'iOS' },
    ],
  },
  {
    group: 'Computadores',
    options: [
      { key: 'L', label: 'Linux' },
      { key: 'M', label: 'Mac' },
      { key: 'W', label: 'Windows' },
    ],
  },
  {
    group: 'Hardware',
    options: [{ key: 'H', label: 'Hardware' }],
  },
];

export const usageFilters: FilterOption[] = [
  { key: 'novo', label: 'Novo' },
  { key: 'experiente', label: 'Com experiência' },
];

export const coinTypeFilters: FilterOption[] = [
  { key: 'bitcoin-only', label: 'Bitcoin Only' },
  { key: 'multi-coin', label: 'Multi-Moeda' },
];
