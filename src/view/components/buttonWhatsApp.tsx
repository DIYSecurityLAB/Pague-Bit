import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton() {
  return (
    <button
      onClick={() =>
        window.open(
          'https://wa.me/5511919050416?text=Ol%C3%A1,%20Tudo%20bem?%0A%0APreciso%20de%20ajuda%20sobre%20os%20produtos%20da%20PAGUE%20BIT...',
          '_blank',
        )
      }
      title="WhatsApp Button"
      className="fixed bottom-8 right-5 text-green-500 rounded-full p-4 text-3xl cursor-pointer hover:text-green-600"
    >
      <FaWhatsapp />
    </button>
  );
}

export default WhatsAppButton;
