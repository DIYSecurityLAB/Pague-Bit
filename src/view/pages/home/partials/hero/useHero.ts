import { useTranslation } from 'react-i18next';

export const useHero = () => {
  const { t, i18n } = useTranslation();

  const getLocalizedPath = (path: string) => {
    return `/${i18n.language}${path}`;
  };

  return {
    t,
    getLocalizedPath,
  };
};
