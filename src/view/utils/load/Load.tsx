import { motion } from 'framer-motion';
import React from 'react';
import { SiBitcoinsv } from 'react-icons/si';

const Load: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
      >
        <SiBitcoinsv
          size={100}
          style={{
            color: 'orange',
            backgroundColor: 'white',
            borderRadius: '50%',
          }}
        />
      </motion.div>
    </div>
  );
};

export default Load;
