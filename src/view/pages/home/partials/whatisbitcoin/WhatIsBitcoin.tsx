import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { bitcoinFeatures } from './arrays';

const WhatIsBitcoin = () => {
  const location = useLocation();
  const currentLang = location.pathname.split('/')[1] || 'pt';

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="bg-orange-50 text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">O Que é Bitcoin?</h2>

        {bitcoinFeatures.map((feature) => (
          <motion.div
            key={feature.id}
            className="w-full bg-white p-6 rounded-lg shadow-md flex items-center mb-6 border border-orange-100"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
          >
            <div className="mr-4">
              <feature.Icon className="h-12 w-12 text-orange-500" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-lg mb-4 text-gray-600">{feature.description}</p>
              <Link 
                to={`/${currentLang}/blog${feature.link}`} 
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
              >
                Saiba Mais <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatIsBitcoin;
