import WhatsAppButton from '@/view/components/buttonWhatsApp';
import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 overflow-hidden">
      <Navbar />
      <main className="flex-grow pt-[80px] overflow-x-hidden">{children}</main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Layout;
