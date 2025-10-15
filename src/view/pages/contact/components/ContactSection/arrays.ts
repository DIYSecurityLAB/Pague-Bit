import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const phoneNumber = '+5511948532735';
const message = 'Olá, vim do Pague Bit, gostaria de entrar em contato';
const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

export const socialLinks = [
  {
    Icon: FaWhatsapp,
    name: 'WhatsApp',
    url: url,
    colorClass: 'text-green-500',
  },
  {
    Icon: FaInstagram,
    name: 'Instagram',
    url: 'https://www.instagram.com/paguebit/',
    colorClass: 'text-pink-500',
  },
  {
    Icon: FaXTwitter,
    name: 'X',
    url: 'https://x.com/diyseclab',
    colorClass: 'text-black',
  },
];
