import React from 'react';
    import { ArrowRight, Bitcoin, CreditCard, Lock, Shield, Smartphone, Wallet } from 'lucide-react';
    import { motion } from 'framer-motion';
    import { useNavigate } from 'react-router-dom';

    function PFPage() {
      const navigate = useNavigate();

      const features = [
        {
          icon: <Smartphone className="w-12 h-12 text-orange-500" />,
          title: "Pagamentos via Celular",
          description: "Realize transações em Bitcoin de forma simples e rápida através do seu smartphone. Basta escanear o QR Code e confirmar o pagamento."
        },
        {
          icon: <Shield className="w-12 h-12 text-orange-500" />,
          title: "Segurança Máxima",
          description: "Suas transações são protegidas por criptografia avançada. Tenha total controle sobre seus fundos com nossa carteira digital segura."
        },
        {
          icon: <Wallet className="w-12 h-12 text-orange-500" />,
          title: "Carteira Digital",
          description: "Gerencie seus bitcoins com facilidade através de nossa carteira digital intuitiva. Acompanhe saldo, histórico e muito mais."
        },
        {
          icon: <CreditCard className="w-12 h-12 text-orange-500" />,
          title: "Compra e Venda",
          description: "Compre e venda Bitcoin de forma segura, com as melhores taxas do mercado e suporte personalizado."
        },
        {
          icon: <Lock className="w-12 h-12 text-orange-500" />,
          title: "Privacidade",
          description: "Mantenha suas informações financeiras protegidas. Com Bitcoin, você tem controle total sobre seus dados."
        }
      ];

      return (
        <div className="min-h-screen">


          {/* Hero Section */}
          <section className="relative bg-gray-900 text-white pt-32 pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580508174046-170816f65662')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90"></div>
            <div className="container mx-auto px-6 relative">
              <div className="max-w-3xl">
                <motion.h1
                  className="text-6xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Bitcoin para Você
                </motion.h1>
                <motion.p
                  className="text-xl mb-8 text-gray-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Descubra como o Bitcoin pode revolucionar sua vida financeira com mais liberdade,
                  segurança e praticidade em suas transações diárias.
                </motion.p>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10">
              <Bitcoin size={400} color="#f59e0b" />
            </div>
          </section>

          {/* Features Grid */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-gray-700 w-20 h-20 rounded-xl flex items-center justify-center mb-6">
                      {React.cloneElement(feature.icon, { color: '#f59e0b' })}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center  relative">
                  <span className="relative text-white">
                    Por que escolher Bitcoin?
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500"></div>
                  </span>
                </h2>
                <div className="space-y-8">
                  <motion.div
                    className="bg-gray-800 p-8 rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-semibold mb-4">Liberdade Financeira</h3>
                    <p className="text-gray-300">Com Bitcoin, você tem controle total sobre seu dinheiro. Faça transações 24/7, sem limites ou restrições bancárias.</p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-800 p-8 rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-semibold mb-4">Segurança Garantida</h3>
                    <p className="text-gray-300">Tecnologia blockchain garante a segurança de suas transações. Seus bitcoins estão protegidos por criptografia avançada.</p>
                  </motion.div>
                  <motion.div
                    className="bg-gray-800 p-8 rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-2xl font-semibold mb-4">Praticidade</h3>
                    <p className="text-gray-300">Envie e receba pagamentos de forma rápida e fácil, usando apenas seu smartphone.</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="container mx-auto px-6">
              <div className="bg-orange-500 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537504-6427a16b0a28')] bg-cover bg-center opacity-10"></div>
                <div className="relative">
                  <h2 className="text-4xl font-bold mb-6">Comece Agora</h2>
                  <p className="text-xl mb-8 text-gray-900">
                    Descubra como o Bitcoin pode transformar sua vida financeira.
                    Nossa equipe está pronta para ajudar você a começar.
                  </p>
                  <motion.button
                    onClick={() => navigate('/contact')}
                    className="bg-gray-900 text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Entre em Contato
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </section>
        </div>
      );
    }

    export default PFPage;
