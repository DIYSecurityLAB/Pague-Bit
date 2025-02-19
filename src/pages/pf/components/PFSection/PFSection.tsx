import React from 'react';
import { motion } from 'framer-motion';
import { Bitcoin, ArrowRight } from 'lucide-react';
import { features, benefits } from './arrays';
import { usePFSection } from './usePFSection';

const PFSection = () => {
  const { handleContactClick } = usePFSection();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white text-gray-800 pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580508174046-170816f65662')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-orange-50/90 to-white/90"></div>
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
              className="text-xl mb-8 text-gray-600"
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
          <Bitcoin size={400} color="#f97316" />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-orange-100"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-orange-50 w-20 h-20 rounded-xl flex items-center justify-center mb-6">
                  <feature.Icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-16 text-center relative">
              <span className="relative text-gray-800">
                Por que escolher Bitcoin?
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-500"></div>
              </span>
            </h2>
            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537504-6427a16b0a28')] bg-cover bg-center opacity-10"></div>
            <div className="relative">
              <h2 className="text-4xl font-bold mb-6">Comece Agora</h2>
              <p className="text-xl mb-8 text-orange-50">
                Descubra como o Bitcoin pode transformar sua vida financeira.
                Nossa equipe está pronta para ajudar você a começar.
              </p>
              <motion.button
                onClick={handleContactClick}
                className="bg-white text-orange-500 px-8 py-4 rounded-xl font-semibold hover:bg-orange-50 transition-colors inline-flex items-center gap-2"
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
};

export default PFSection;
