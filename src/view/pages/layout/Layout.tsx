import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Navbar />
      <main className="flex-grow pt-[60px]">{children}</main> {/* Ajuste fino no espaçamento */}
      <Footer />
    </div>
  );
};

export default Layout;

