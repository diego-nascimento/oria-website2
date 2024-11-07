'use client';
import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';
import { useMainControl } from '../../store/useMainControl';

export const MenuButtonContainer = ({ children }: PropsWithChildren) => {
  const { mainControls } = useMainControl();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial={'hidden'}
      animate={mainControls}
      transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};
