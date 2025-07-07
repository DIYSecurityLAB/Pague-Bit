export const usePFSection = () => {
  const handleContactClick = () => {
    const telegramUsername = 'paguebit';
    const message =
      'Olá, gostaria de mais informações sobre o pague bit, e o Bitcoin para Pessoa Física.'; // Mensagem exclusiva para PF
    const url = `https://t.me/${telegramUsername}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return {
    handleContactClick,
  };
};
