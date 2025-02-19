import { motion } from 'framer-motion';
import { ShieldCheck, Zap, ArrowRight } from 'lucide-react';

const BuyBitcoinPage = () => {
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
            Compre Bitcoin
          </h1>
          <p className="text-xl text-gray-600">
            Escolha a melhor forma de comprar Bitcoin de acordo com suas necessidades
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Compra com KYC */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="h-8 w-8 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Compra Verificada (KYC)</h2>
            <p className="text-gray-600 mb-6">
              Processo completo de verificação para máxima segurança e conformidade legal.
              Ideal para investidores que priorizam segurança e regularização.
            </p>
            
            <h3 className="font-semibold text-gray-800 mb-4">Vantagens:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-600">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                Processo 100% regulamentado
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                Suporte dedicado
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                Limites maiores de compra
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                Múltiplas formas de pagamento
              </li>
            </ul>

            <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
              Comprar com KYC
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>

          {/* Compra com alfred */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-orange-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Compra P2P (alfred)</h2>
            <p className="text-gray-600 mb-6">
              Compre Bitcoin diretamente de outros usuários através da plataforma alfred.
              Ideal para quem prioriza privacidade e negociações diretas.
            </p>
            
            <h3 className="font-semibold text-gray-800 mb-4">Vantagens:</h3>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-gray-600">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                Transações anônimas
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                Negociação direta P2P
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                Diversos métodos de pagamento
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <ArrowRight className="h-5 w-5 text-orange-500" />
                Preços competitivos
              </li>
            </ul>

            <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
              Comprar com alfred
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BuyBitcoinPage;
