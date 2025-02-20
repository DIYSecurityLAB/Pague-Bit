import React from 'react';
import { motion } from 'framer-motion';
import { features } from './arrays';
import { useAboutSection } from './useAboutSection';

const AboutSection = () => {
  const { controls, variants } = useAboutSection();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Sobre Nós</h2>
          <p className="text-lg text-gray-600 mb-12">
            A Pague BIT nasceu com a missão de simplificar e democratizar o acesso ao Bitcoin no Brasil.
            Somos uma equipe apaixonada por tecnologia e inovação, comprometida em oferecer soluções seguras
            e eficientes para pessoas e empresas que desejam explorar o potencial do Bitcoin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border border-orange-100"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <feature.Icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
