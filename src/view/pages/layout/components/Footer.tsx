import { Instagram, Linkedin, Youtube } from 'lucide-react';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-0">
      <div className="container mx-auto text-center py-6">
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/company/diy-security-lab/posts/?feedView=all"
            className="text-gray-600 hover:text-orange-500 transition"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://x.com/diyseclab"
            className="text-gray-600 hover:text-orange-500 transition"
          >
            <FaXTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/paguebit/"
            className="text-gray-600 hover:text-orange-500 transition"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            href="https://www.youtube.com/@DIYSecurityLab"
            className="text-gray-600 hover:text-orange-500 transition"
          >
            <Youtube className="h-6 w-6" />
          </a>
        </div>
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Pague BIT. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
