import { motion } from 'framer-motion';
import { reasons } from './arrays';
import { useWhyPagueBit } from './useWhyPagueBit';

const WhyPagueBit = () => {
  const { itemsRef, controls, isHovered, setIsHovered } = useWhyPagueBit();

  const renderCard = (reason: typeof reasons[0], isDuplicate = false) => (
    <div
      key={`${reason.id}${isDuplicate ? '-duplicate' : ''}`}
      className="flex-shrink-0 w-[33.3333%] px-2"
    >
      <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center h-full border border-orange-100 hover:border-orange-300 transition-colors">
        <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
          <reason.Icon className="h-8 w-8 text-orange-500" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{reason.title}</h3>
        <p className="text-gray-600 mb-4">{reason.description}</p>
        <img
          src={reason.image}
          alt={reason.alt}
          className="mt-4 rounded-md"
        />
      </div>
    </div>
  );

  return (
    <section className="py-12 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Por Que Escolher a PagueBit?
        </h2>
        <div
          className="overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div animate={controls} className="flex">
            <div ref={itemsRef} className="flex">
              {reasons.map((reason) => renderCard(reason))}
            </div>
            <div className="flex">
              {reasons.map((reason) => renderCard(reason, true))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyPagueBit;
