import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 border-t border-gray-200">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="text-gray-600 hover:text-orange-500 transition">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-500 transition">
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
