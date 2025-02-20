import React from 'react';
import { motion } from 'framer-motion';
import { services } from './arrays';
import { useServicesSection } from './useServicesSection';

const ServicesSection = () => {
  const { controls, variants } = useServicesSection();

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
          <h2 className="text-4xl font-bold mb-6 text-gray-800">Nossos Serviços</h2>
          <p className="text-lg text-gray-600 mb-12">
            Oferecemos uma gama completa de serviços para atender às necessidades de pessoas físicas e jurídicas
            interessadas em utilizar o Bitcoin de forma segura, eficiente e inovadora.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center border border-orange-100"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                  <service.Icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
                <ul className="list-disc list-inside mt-2 text-gray-600">
                  {service.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
