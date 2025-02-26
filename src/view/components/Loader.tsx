import { motion } from 'framer-motion';
import { SiBitcoinsv } from 'react-icons/si';

export function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
      >
        <SiBitcoinsv
          size={100}
          className="text-orange-500 bg-white rounded-full"
        />
      </motion.div>
    </div>
  );
}
