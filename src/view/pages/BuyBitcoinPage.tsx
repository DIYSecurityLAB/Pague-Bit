import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import alfredlogo from "../assets/AlfredComercial.png"

const BuyBitcoinPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12 space-y-16">
        {/* Título da Página */}
        <motion.div
          className="text-center bg-orange-50 py-12 px-6 rounded-xl shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800">
            Revolucione Suas Transações com PagueBit P2P
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-700">
            Uma experiência premium para compra e venda de Bitcoin e USDT com segurança e inovação.
          </p>
        </motion.div>

        {/* Seção Principal - PagueBit */}
        <section>
          <motion.article
            className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <figure className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
              <div className="bg-orange-50 w-24 h-24 rounded-full flex items-center justify-center">
                <ShieldCheck className="h-12 w-12 text-orange-500" />
              </div>
            </figure>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-gray-800">Experiência Premium</h2>
              <p className="mt-4 text-gray-600">
                Na PagueBit você desfruta de um ambiente seguro e inovador para negociações P2P,
                com máxima integridade e suporte exclusivo para clientes Premium.
              </p>
              <ul className="mt-6 space-y-3 text-gray-600">
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-orange-500 mr-2" />
                  Segurança reforçada e verificada
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-orange-500 mr-2" />
                  Transações com integridade premium
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-orange-500 mr-2" />
                  Suporte exclusivo para clientes Premium
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-orange-500 mr-2" />
                  Facilidade e inovação em cada negociação
                </li>
              </ul>
              <div className="mt-6">
                <a
                  href="https://wa.me/5511919050416?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20PagueBit!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                >
                  Acessar PagueBit
                </a>
              </div>
            </div>
          </motion.article>
        </section>

        {/* Seção de Recomendação - alfred */}
        <section>
          <motion.aside
            className="p-6 bg-gray-50 rounded-xl shadow border border-gray-200"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Recomendação</h3>
            <div className="flex flex-col md:flex-row items-center">
              <figure className="mb-4 md:mb-0 md:mr-8">
                <img 
                  src={alfredlogo} 
                  alt="Logotipo do Alfred" 
                  className="w-[190px] h-[100px] object-contain" 
                />
              </figure>
              <div className="flex-1">
                <p className="text-gray-600">
                  Se você prefere uma compra anônima e direta, recomendamos utilizar o alfred para transações P2P.
                </p>
                <div className="mt-4">
                  <a
                    href="https://www.alfredp2p.io/pt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors"
                  >
                    Comprar com alfred
                  </a>
                </div>
              </div>
            </div>
          </motion.aside>
        </section>
      </main>
    </div>
  );
};

export default BuyBitcoinPage;
