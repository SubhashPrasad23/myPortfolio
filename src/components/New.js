import React from 'react';
import { motion } from 'framer-motion';

const New = () => {
  return (
    <div style={{ overflow: 'hidden',color:"white", width: '100%', border: '1px solid red', position: 'relative', height: '50px' }}>
    <motion.div
      initial={{ x: 0 }}
      animate={{
        x: ['0%', '100%', '100%' ,"0%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: 'linear',
      }}
      style={{
        position: 'absolute',
        whiteSpace: 'nowrap',
      }}
    >
      This text will move back and forth within its area.
    </motion.div>
  </div>
  );
};

export default New;
