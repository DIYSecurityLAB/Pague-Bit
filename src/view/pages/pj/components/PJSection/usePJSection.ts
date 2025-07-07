export const usePJSection = () => {
  const handleConsultingClick = () => {
    const telegramUsername = 'paguebit';
    const message =
      'Olá, gostaria de mais informações sobre o pague bit, e o Bitcoin para Pessoa Jurídica.'; // Mensagem exclusiva para PJ
    const url = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return {
    handleConsultingClick,
  };
};
