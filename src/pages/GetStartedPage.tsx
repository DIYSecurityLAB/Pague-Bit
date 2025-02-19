import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Bitcoin, Building2, ArrowRight, Wallet, ShoppingCart, Shield } from 'lucide-react';
import { ROUTES } from '../Routes'; 
import i18n from '../i18n';

const GetStartedPage = () => {
  const currentLang = i18n.language; 

  return (
    <div className="min-h-screen py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Comece a Usar Bitcoin
          </h1>
          <p className="text-xl text-gray-600">
            Escolha o perfil que melhor se adequa às suas necessidades e comece sua jornada no mundo do Bitcoin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Pessoa Física */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Bitcoin className="h-8 w-8 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Para Pessoas Físicas</h2>
            <p className="text-gray-600 mb-6">
              Comece sua jornada com Bitcoin de forma simples e segura. Ideal para investidores
              individuais e entusiastas que querem entrar no mundo das criptomoedas.
            </p>
            <ul className="space-y-3 mb-8 text-gray-600">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                Compre e venda Bitcoin facilmente
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                Carteira segura e intuitiva
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                Suporte personalizado
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <Link
                to={ROUTES.wallet.call(currentLang)}
                className="flex items-center justify-center gap-2 bg-orange-50 text-orange-600 px-4 py-3 rounded-xl font-semibold hover:bg-orange-100 transition-colors"
              >
                <Wallet className="h-5 w-5" />
                Criar Carteira
              </Link>
              <Link
                to={ROUTES.buy.call(currentLang)}
                className="flex items-center justify-center gap-2 bg-orange-50 text-orange-600 px-4 py-3 rounded-xl font-semibold hover:bg-orange-100 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                Comprar BTC
              </Link>
            </div>

            <Link
              to={ROUTES.pf.call(currentLang)}
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors w-full justify-center"
            >
              Saiba Mais
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>

          {/* Pessoa Jurídica */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="h-8 w-8 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Para Empresas</h2>
            <p className="text-gray-600 mb-6">
              Soluções completas para empresas que desejam integrar Bitcoin em seus negócios.
              Ideal para comerciantes, prestadores de serviços e empresas inovadoras.
            </p>
            <ul className="space-y-3 mb-8 text-gray-600">
              <li className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                Aceite pagamentos em Bitcoin
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                Gestão financeira completa
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                Integração com sistemas existentes
              </li>
            </ul>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <Link
                to={ROUTES.wallet.call(currentLang)}
                className="flex items-center justify-center gap-2 bg-orange-50 text-orange-600 px-4 py-3 rounded-xl font-semibold hover:bg-orange-100 transition-colors"
              >
                <Shield className="h-5 w-5" />
                Carteira Empresarial
              </Link>
              <Link
                to={ROUTES.buy.call(currentLang)}
                className="flex items-center justify-center gap-2 bg-orange-50 text-orange-600 px-4 py-3 rounded-xl font-semibold hover:bg-orange-100 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                Comprar BTC
              </Link>
            </div>

            <Link
              to={ROUTES.pj.call(currentLang)}
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors w-full justify-center"
            >
              Saiba Mais
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedPage;