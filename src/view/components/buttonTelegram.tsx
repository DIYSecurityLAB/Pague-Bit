import { FaTelegramPlane } from 'react-icons/fa';

function TelegramButton() {
  return (
    <button
      onClick={() => window.open('https://t.me/paguebit', '_blank')}
      title="Telegram Button"
      className="fixed bottom-8 right-5 text-blue-500 rounded-full p-4 text-3xl cursor-pointer hover:text-blue-600"
    >
      <FaTelegramPlane />
    </button>
  );
}

export default TelegramButton;
