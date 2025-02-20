import { useAnimation } from 'framer-motion';

export const useServicesSection = () => {
  const controls = useAnimation();

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return {
    controls,
    variants
  };
};
