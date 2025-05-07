// wallet/walletData.ts

export interface Wallet {
  id: number;
  name: string;
  os: string[]; // Abreviações: 'A' (Android), 'I' (iOS), 'L' (Linux), 'M' (Mac), 'W' (Windows), 'H' (Hardware)
  usage: 'novo' | 'experiente';
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
  {
    id: 1,
    name: 'Electrum',
    os: ['W', 'L', 'M'],
    usage: 'experiente',
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
    name: 'Blockstream Green',
    os: ['A', 'I', 'W', 'L', 'M'],
    usage: 'novo',
    description: {
      overview:
        'Carteira multiplataforma desenvolvida pela Blockstream, combina segurança com facilidade de uso.',
      advantages: [
        'Interface intuitiva para iniciantes',
        'Multisignature com proteção adicional',
        'Suporte a hardware wallets',
        'Código aberto e auditável',
      ],
      disadvantages: [
        'Depende parcialmente dos servidores da Blockstream',
        'Menos recursos avançados que carteiras como Electrum',
        'Processo de recuperação diferente das carteiras tradicionais',
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
    description: {
      overview:
        'Carteira desktop focada em privacidade e controle, com interface mais moderna que o Electrum.',
      advantages: [
        'Análise detalhada de transações',
        'Excelente suporte a hardware wallets',
        'Controle avançado de moedas (coin control)',
        'Integração com nós Bitcoin próprios',
      ],
      disadvantages: [
        'Não disponível para dispositivos móveis',
        'Requer conhecimento técnico moderado',
        'Recursos avançados podem sobrecarregar iniciantes',
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
    description: {
      overview:
        'Carteira focada em segurança máxima com multisignature e suporte avançado a hardware wallets.',
      advantages: [
        'Ideal para configurações multisignature',
        'Excelente privacidade quando conectado ao próprio nó',
        'Interface clara para gerenciamento de múltiplos dispositivos',
        'Alta segurança para grandes quantias',
      ],
      disadvantages: [
        'Limitado principalmente a Linux',
        'Requer conhecimento técnico avançado',
        'Processo de configuração mais complexo',
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
    description: {
      overview:
        'Carteira focada em multisignature com uma das interfaces mais amigáveis para este propósito.',
      advantages: [
        'Multisignature simplificado e intuitivo',
        'Disponível para desktop e mobile',
        'Excelente combinação de segurança e usabilidade',
        'Bom suporte a hardware wallets',
      ],
      disadvantages: [
        'Recursos avançados podem não ser óbvios para iniciantes',
        'Ecossistema menor comparado a outras carteiras',
        'Algumas funcionalidades requerem pagamento',
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
    id: 6,
    name: 'Electrum Mobile',
    os: ['A', 'I'],
    usage: 'experiente',
    description: {
      overview:
        'Versão móvel da popular carteira Electrum, mantendo a maioria dos recursos avançados.',
      advantages: [
        'Mesma segurança robusta da versão desktop',
        'Controle de taxas personalizado',
        'Compatibilidade com carteiras Electrum desktop',
        'Suporte a hardware wallets via OTG',
      ],
      disadvantages: [
        'Interface não otimizada para mobile',
        'Menos amigável que outras carteiras móveis',
        'Atualizações menos frequentes que a versão desktop',
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
    id: 7,
    name: 'Specter Mobile',
    os: ['A', 'I'],
    usage: 'experiente',
    description: {
      overview:
        'Extensão móvel do Specter Desktop, focada em segurança e privacidade em dispositivos móveis.',
      advantages: [
        'Integração perfeita com Specter Desktop',
        'Suporte robusto a hardware wallets',
        'Configurações multisignature móveis',
        'Alta privacidade',
      ],
      disadvantages: [
        'Funcionalidades limitadas comparado à versão desktop',
        'Requer conhecimento técnico',
        'Interface menos polida que concorrentes',
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
    id: 8,
    name: 'BlueWallet',
    os: ['A', 'I'],
    usage: 'novo',
    description: {
      overview:
        'Carteira móvel amigável para iniciantes com bom equilíbrio entre usabilidade e recursos.',
      advantages: [
        'Interface intuitiva e moderna',
        'Suporte a Lightning Network',
        'Pode conectar ao próprio nó',
        'Bom para uso diário e pequenas quantias',
      ],
      disadvantages: [
        'Lightning Network depende de servidores de terceiros por padrão',
        'Menos recursos avançados que carteiras desktop',
        'Histórico de alguns problemas de segurança corrigidos',
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
  {
    id: 9,
    name: 'Krux',
    os: ['H'],
    usage: 'experiente',
    description: {
      overview:
        'Dispositivo de hardware wallet DIY com código 100% aberto, oferecendo soberania digital máxima.',
      advantages: [
        'Totalmente open source e transparente',
        'Você constrói seu próprio dispositivo, eliminando riscos de supply chain',
        'Sem componentes proprietários',
        'Funcionamento air-gapped para segurança máxima',
        'Controle total sobre seu hardware e software',
      ],
      disadvantages: [
        'Requer montagem (DIY)',
        'Curva de aprendizado para uso inicial',
        'Menos recursos de UX comparado a hardware wallets comerciais',
      ],
    },
    ratings: {
      controle: 'B', // Alterado para B (Bom) - Alto controle do usuário
      validacao: 'B', // Suporta validação completa
      transparencia: 'B', // Código 100% aberto e auditável
      ambiente: 'C', // Melhorado - DIY mas com boa documentação
      privacidade: 'B', // Não armazena dados do usuário
      taxas: 'B', // Permite controle avançado de taxas
    },
  },
  {
    id: 10,
    name: 'Jade',
    os: ['H'],
    usage: 'novo',
    description: {
      overview:
        'Hardware wallet desenvolvida pela Blockstream com boa usabilidade e integração com Green Wallet.',
      advantages: [
        'Tela colorida e interface amigável',
        'Integração perfeita com Blockstream Green',
        'Código-fonte disponível',
        'Design compacto e portátil',
      ],
      disadvantages: [
        'Ecossistema menor que concorrentes estabelecidos',
        'Depende da Blockstream para atualizações',
        'Menos recursos avançados que dispositivos DIY como Krux',
      ],
    },
    ratings: {
      controle: 'A', // Bom controle do usuário
      validacao: 'A', // Suporta validação completa
      transparencia: 'B', // Código aberto, mas fabricado por empresa
      ambiente: 'B', // Fácil de usar, mas requer confiança no fabricante
      privacidade: 'A', // Suporta uso sem estado
      taxas: 'A', // Permite controle de taxas
    },
  },
  {
    id: 11,
    name: 'SeedSigner',
    os: ['H'],
    usage: 'experiente',
    description: {
      overview:
        'Dispositivo air-gapped DIY para assinatura de transações Bitcoin com foco em privacidade máxima.',
      advantages: [
        'Completamente air-gapped para segurança máxima',
        'Pode ser construído com componentes comuns',
        'Código 100% aberto e verificável',
        'Excelente para configurações multisignature',
        'Não armazena chaves permanentemente (stateless)',
      ],
      disadvantages: [
        'Requer montagem e conhecimento técnico',
        'Processo de assinatura menos intuitivo',
        'Interface limitada pelo hardware minimalista',
      ],
    },
    ratings: {
      controle: 'B', // Alto controle do usuário
      validacao: 'B', // Suporta validação completa
      transparencia: 'B', // Código aberto e auditável
      ambiente: 'C', // Requer montagem DIY
      privacidade: 'B', // Não armazena dados do usuário
      taxas: 'A', // Permite controle avançado de taxas
    },
  },
  {
    id: 12,
    name: 'SideSwap',
    os: ['A', 'I', 'W', 'L', 'M'],
    usage: 'novo',
    description: {
      overview:
        'Carteira focada em trading de ativos na rede Liquid, com interface amigável e boa usabilidade.',
      advantages: [
        'Interface intuitiva para negociação de ativos',
        'Suporte a Liquid Network',
        'Troca de ativos descentralizada',
        'Disponível para desktop e mobile',
      ],
      disadvantages: [
        'Foco em Liquid pode confundir usuários apenas de Bitcoin',
        'Menos recursos de privacidade avançada',
        'Ecossistema ainda em desenvolvimento',
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
