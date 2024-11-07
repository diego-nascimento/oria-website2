'use client';
import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { useMainControl } from '../../store/useMainControl';

export const LogoWrapper = ({ children }: PropsWithChildren) => {
  const { mainControls } = useMainControl();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -30, scale: 0.99 },
        visible: { opacity: 1, x: 0, y: 0, scale: 1 },
      }}
      initial={'hidden'}
      animate={mainControls}
      transition={{ duration: 1, delay: 0.25, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};
