import React, { memo } from 'react';
import { motion } from 'framer-motion';

// Memoize the MotionWrapper component to prevent unnecessary re-renders
const MotionWrapper = memo(({ children, ...props }) => {
  return <motion.div {...props}>{children}</motion.div>;
});

export default MotionWrapper; 