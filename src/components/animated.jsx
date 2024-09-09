// AnimatedComponent.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animation happens only once
    threshold: 0.1, // When 10% of the component is visible
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }} // Initial state
      animate={{ opacity: inView ? 1 : 0}} // Animation based on inView
      transition={{ duration: 0.6 }} // Duration of the animation
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
