import { motion } from 'framer-motion';
import { Bitcoin, Wallet, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import BitcoinPrice from '../bitcoinprice/BitcoinPrice';
import { useHero } from './useHero';

const Hero = () => {
  const { t, getLocalizedPath } = useHero();

  return (
    <section className="bg-white text-gray-800 py-12 md:py-20 relative overflow-hidden mt-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=1920&q=80"
          alt="Bitcoin Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          className="flex justify-center items-center mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            {t('hero.title')}
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-12 px-4 md:px-0 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            to={getLocalizedPath('/get-started')}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl flex items-center gap-2 transition-colors"
          >
            <Bitcoin className="h-5 w-5" />
            Comece Agora Mesmo a Usar
          </Link>
          
          <Link
            to={getLocalizedPath('/wallet')}
            className="bg-white hover:bg-orange-50 text-orange-500 font-bold py-4 px-8 rounded-xl flex items-center gap-2 border-2 border-orange-500 transition-colors"
          >
            <Wallet className="h-5 w-5" />
            Escolha sua Carteira
          </Link>
          
          <Link
            to={getLocalizedPath('/buy')}
            className="bg-orange-100 hover:bg-orange-200 text-orange-600 font-bold py-4 px-8 rounded-xl flex items-center gap-2 transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            Compre Bitcoin
          </Link>
        </motion.div>

        <div className='mt-6'>
          <BitcoinPrice />
        </div>
      </div>
    </section>
  );
};

export default Hero;
