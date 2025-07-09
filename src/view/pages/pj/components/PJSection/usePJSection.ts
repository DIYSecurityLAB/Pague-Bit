export const usePJSection = () => {
  const handleConsultingClick = () => {
    const phoneNumber = '+5511919050416';
    const message =
      'Olá, gostaria de mais informações sobre o pague bit, e o Bitcoin para Pessoa Jurídica.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return {
    handleConsultingClick,
  };
};
