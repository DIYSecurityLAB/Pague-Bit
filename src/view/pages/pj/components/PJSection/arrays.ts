import {
  Building2,
  BarChart as ChartBar,
  Globe,
  Lock,
  MessageSquare,
  Shield,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const usePJContent = () => {
  const { t } = useTranslation();

  const features = [
    {
      Icon: Shield,
      title: t('pj.features.securityEnterprise.title'),
      description: t('pj.features.securityEnterprise.description'),
    },
    {
      Icon: Globe,
      title: t('pj.features.internationalPayments.title'),
      description: t('pj.features.internationalPayments.description'),
    },
    {
      Icon: Building2,
      title: t('pj.features.completeIntegration.title'),
      description: t('pj.features.completeIntegration.description'),
    },
    {
      Icon: ChartBar,
      title: t('pj.features.financialManagement.title'),
      description: t('pj.features.financialManagement.description'),
    },
    {
      Icon: Lock,
      title: t('pj.features.compliance.title'),
      description: t('pj.features.compliance.description'),
    },
    {
      Icon: MessageSquare,
      title: t('pj.features.dedicatedSupport.title'),
      description: t('pj.features.dedicatedSupport.description'),
    },
  ];

  const benefits = [
    {
      title: t('pj.benefits.costReduction.title'),
      description: t('pj.benefits.costReduction.description'),
    },
    {
      title: t('pj.benefits.operationalEfficiency.title'),
      description: t('pj.benefits.operationalEfficiency.description'),
    },
    {
      title: t('pj.benefits.globalExpansion.title'),
      description: t('pj.benefits.globalExpansion.description'),
    },
    {
      title: t('pj.benefits.technologicalInnovation.title'),
      description: t('pj.benefits.technologicalInnovation.description'),
    },
  ];

  const integrationSteps = [
    {
      step: 1,
      title: t('pj.integrationSteps.consultingInitial.title'),
      description: t('pj.integrationSteps.consultingInitial.description'),
    },
    {
      step: 2,
      title: t('pj.integrationSteps.development.title'),
      description: t('pj.integrationSteps.development.description'),
    },
    {
      step: 3,
      title: t('pj.integrationSteps.training.title'),
      description: t('pj.integrationSteps.training.description'),
    },
    {
      step: 4,
      title: t('pj.integrationSteps.continuousSupport.title'),
      description: t('pj.integrationSteps.continuousSupport.description'),
    },
  ];

  return { features, benefits, integrationSteps };
};
