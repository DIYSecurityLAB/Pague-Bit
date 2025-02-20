export const ROUTES = {
  home: {
    call: (currentLang: string) => `/${currentLang}`,
  },
  about: {
    path: 'about',
    call: (currentLang: string) => `/${currentLang}/about`,
  },
  services: {
    path: 'services',
    call: (currentLang: string) => `/${currentLang}/services`,
  },
  contact: {
    path: 'contact',
    call: (currentLang: string) => `/${currentLang}/contact`,
  },
  pf: {
    path: 'pf',
    call: (currentLang: string) => `/${currentLang}/pf`,
  },
  pj: {
    path: 'pj',
    call: (currentLang: string) => `/${currentLang}/pj`,
  },
  blog: {
    path: 'blog/:id',
    call: (currentLang: string, id: string) => `/${currentLang}/blog/${id}`,
  },
  getStarted: {
    path: 'get-started',
    call: (currentLang: string) => `/${currentLang}/get-started`,
  },
  wallet: {
    path: 'wallet',
    call: (currentLang: string) => `/${currentLang}/wallet`,
  },
  buy: {
    path: 'buy',
    call: (currentLang: string) => `/${currentLang}/buy`,
  },
};
