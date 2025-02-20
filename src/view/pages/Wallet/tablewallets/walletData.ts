// wallet/walletData.ts

export interface Wallet {
  id: number;
  name: string;
  os: string[]; // Abreviações: 'A' (Android), 'I' (iOS), 'L' (Linux), 'M' (Mac), 'W' (Windows), 'H' (Hardware)
  usage: 'novo' | 'experiente';
  ratings: {
    controle: string;      // 'B' (Bom), 'A' (Aceitável), 'C' (Cuidadoso), 'N' (Neutro)
    validacao: string;
    transparencia: string;
    ambiente: string;
    privacidade: string;
    taxas: string;
  };
}

export const wallets: Wallet[] = [
  {
    id: 1,
    name: 'Armory',
    os: ['L'],
    usage: 'experiente',
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
    id: 2,
    name: 'Bitcoin Core',
    os: ['L', 'W', 'M'],
    usage: 'experiente',
    ratings: {
      controle: 'B',
      validacao: 'B',
      transparencia: 'B',
      ambiente: 'B',
      privacidade: 'A',
      taxas: 'A',
    },
  },
  {
    id: 3,
    name: 'Bitcoin Knots',
    os: ['L', 'W'],
    usage: 'experiente',
    ratings: {
      controle: 'B',
      validacao: 'B',
      transparencia: 'A',
      ambiente: 'C',
      privacidade: 'N',
      taxas: 'A',
    },
  },
  {
    id: 4,
    name: 'Bither',
    os: ['A', 'I'],
    usage: 'novo',
    ratings: {
      controle: 'A',
      validacao: 'N',
      transparencia: 'N',
      ambiente: 'A',
      privacidade: 'N',
      taxas: 'A',
    },
  },
  {
    id: 5,
    name: 'BitPay Wallet',
    os: ['A', 'I'],
    usage: 'novo',
    ratings: {
      controle: 'B',
      validacao: 'B',
      transparencia: 'B',
      ambiente: 'B',
      privacidade: 'B',
      taxas: 'B',
    },
  },
  {
    id: 6,
    name: 'Electrum',
    os: ['W', 'L', 'M'],
    usage: 'experiente',
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
    id: 7,
    name: 'Blockstream Green',
    os: ['A', 'I'],
    usage: 'novo',
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
    id: 8,
    name: 'Sparrow Wallet',
    os: ['L', 'W', 'M'],
    usage: 'experiente',
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
    id: 9,
    name: 'Specter Desktop',
    os: ['L'],
    usage: 'experiente',
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
    id: 10,
    name: 'Wasabi Wallet',
    os: ['W', 'L'],
    usage: 'experiente',
    ratings: {
      controle: 'C',
      validacao: 'A',
      transparencia: 'B',
      ambiente: 'N',
      privacidade: 'B',
      taxas: 'N',
    },
  },
  {
    id: 11,
    name: 'Exodus',
    os: ['W', 'L', 'M', 'A', 'I'],
    usage: 'novo',
    ratings: {
      controle: 'A',
      validacao: 'B',
      transparencia: 'N',
      ambiente: 'B',
      privacidade: 'A',
      taxas: 'A',
    },
  },
  {
    id: 12,
    name: 'Atomic Wallet',
    os: ['W', 'L', 'M', 'A', 'I'],
    usage: 'novo',
    ratings: {
      controle: 'A',
      validacao: 'A',
      transparencia: 'N',
      ambiente: 'B',
      privacidade: 'A',
      taxas: 'A',
    },
  },
  {
    id: 13,
    name: 'Edge Wallet',
    os: ['A', 'I'],
    usage: 'novo',
    ratings: {
      controle: 'B',
      validacao: 'B',
      transparencia: 'A',
      ambiente: 'B',
      privacidade: 'B',
      taxas: 'B',
    },
  },
  {
    id: 14,
    name: 'BRD',
    os: ['A', 'I'],
    usage: 'novo',
    ratings: {
      controle: 'A',
      validacao: 'A',
      transparencia: 'N',
      ambiente: 'A',
      privacidade: 'A',
      taxas: 'A',
    },
  },
  {
    id: 15,
    name: 'Ledger Live',
    os: ['W', 'L', 'M', 'A', 'I'],
    usage: 'experiente',
    ratings: {
      controle: 'B',
      validacao: 'B',
      transparencia: 'B',
      ambiente: 'B',
      privacidade: 'B',
      taxas: 'B',
    },
  },
  {
    id: 16,
    name: 'Trezor Suite',
    os: ['W', 'L', 'M'],
    usage: 'experiente',
    ratings: {
      controle: 'B',
      validacao: 'B',
      transparencia: 'B',
      ambiente: 'B',
      privacidade: 'B',
      taxas: 'B',
    },
  },
  {
    id: 17,
    name: 'Mycelium',
    os: ['A', 'I'],
    usage: 'experiente',
    ratings: {
      controle: 'A',
      validacao: 'N',
      transparencia: 'A',
      ambiente: 'N',
      privacidade: 'B',
      taxas: 'A',
    },
  },
  {
    id: 18,
    name: 'GreenAddress',
    os: ['A', 'I', 'W', 'L', 'M'],
    usage: 'experiente',
    ratings: {
      controle: 'B',
      validacao: 'B',
      transparencia: 'B',
      ambiente: 'A',
      privacidade: 'B',
      taxas: 'A',
    },
  },
  {
    id: 19,
    name: 'Blockchain.com Wallet',
    os: ['A', 'I', 'W', 'L', 'M'],
    usage: 'novo',
    ratings: {
      controle: 'A',
      validacao: 'A',
      transparencia: 'N',
      ambiente: 'A',
      privacidade: 'A',
      taxas: 'A',
    },
  },
  {
    id: 20,
    name: 'Jaxx Liberty',
    os: ['A', 'I', 'W', 'L', 'M'],
    usage: 'novo',
    ratings: {
      controle: 'A',
      validacao: 'N',
      transparencia: 'N',
      ambiente: 'A',
      privacidade: 'N',
      taxas: 'A',
    },
  },
  {
    id: 21,
    name: 'Coinomi',
    os: ['A', 'I', 'W', 'L', 'M'],
    usage: 'novo',
    ratings: {
      controle: 'B',
      validacao: 'A',
      transparencia: 'A',
      ambiente: 'A',
      privacidade: 'B',
      taxas: 'A',
    },
  },
  {
    id: 22,
    name: 'Trust Wallet',
    os: ['A', 'I'],
    usage: 'novo',
    ratings: {
      controle: 'B',
      validacao: 'B',
      transparencia: 'A',
      ambiente: 'B',
      privacidade: 'B',
      taxas: 'A',
    },
  },
  {
    id: 23,
    name: 'Electrum Mobile',
    os: ['A', 'I'],
    usage: 'experiente',
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
    id: 24,
    name: 'Bitwala',
    os: ['A', 'I', 'W'],
    usage: 'novo',
    ratings: {
      controle: 'A',
      validacao: 'N',
      transparencia: 'N',
      ambiente: 'A',
      privacidade: 'A',
      taxas: 'A',
    },
  },
  {
    id: 25,
    name: 'Coin.space',
    os: ['A', 'I', 'W', 'L', 'M'],
    usage: 'novo',
    ratings: {
      controle: 'B',
      validacao: 'A',
      transparencia: 'N',
      ambiente: 'A',
      privacidade: 'N',
      taxas: 'A',
    },
  },
  {
    id: 26,
    name: 'Specter Mobile',
    os: ['A', 'I'],
    usage: 'experiente',
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
    id: 27,
    name: 'Unstoppable Wallet',
    os: ['A', 'I'],
    usage: 'novo',
    ratings: {
      controle: 'B',
      validacao: 'A',
      transparencia: 'A',
      ambiente: 'A',
      privacidade: 'B',
      taxas: 'A',
    },
  },
  {
    id: 28,
    name: 'Freewallet',
    os: ['A', 'I'],
    usage: 'novo',
    ratings: {
      controle: 'N',
      validacao: 'A',
      transparencia: 'N',
      ambiente: 'A',
      privacidade: 'N',
      taxas: 'A',
    },
  },
  {
    id: 29,
    name: 'BlueWallet',
    os: ['A', 'I'],
    usage: 'novo',
    ratings: {
      controle: 'B',
      validacao: 'B',
      transparencia: 'A',
      ambiente: 'B',
      privacidade: 'B',
      taxas: 'A',
    },
  },
  {
    id: 30,
    name: 'Samourai Wallet',
    os: ['A', 'I'],
    usage: 'experiente',
    ratings: {
      controle: 'B',
      validacao: 'A',
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
