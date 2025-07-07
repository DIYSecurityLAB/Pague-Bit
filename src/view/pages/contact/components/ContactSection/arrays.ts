import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const url = `https://t.me/paguebit`;

export const socialLinks = [
  {
    Icon: FaTelegramPlane,
    name: 'Telegram',
    url: url,
    colorClass: 'text-blue-500',
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
