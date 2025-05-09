import { Building, CreditCard, Globe, Smartphone } from 'lucide-react';
import { ComponentType, SVGProps } from 'react';
import { useTranslation } from 'react-i18next';

export interface Service {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  features: string[];
}

export const useServicesContent = (): { services: Service[] } => {
  const { t } = useTranslation();

  // Função auxiliar para garantir que o retorno seja um array de strings.
  const getFeatures = (key: string): string[] => {
    const features = t(key, { returnObjects: true });
    return Array.isArray(features) ? features : [features];
  };

  const services: Service[] = [
    {
      Icon: CreditCard,
      title: t('service.buySellBTC.title'),
      description: t('service.buySellBTC.description'),
      features: getFeatures('service.buySellBTC.features'),
    },
    {
      Icon: Building,
      title: t('service.specializedConsulting.title'),
      description: t('service.specializedConsulting.description'),
      features: getFeatures('service.specializedConsulting.features'),
    },
    {
      Icon: Smartphone,
      title: t('service.paymentApp.title'),
      description: t('service.paymentApp.description'),
      features: getFeatures('service.paymentApp.features'),
    },
    {
      Icon: Globe,
      title: t('service.btcMachine.title'),
      description: t('service.btcMachine.description'),
      features: getFeatures('service.btcMachine.features'),
    },
  ];

  return { services };
};
