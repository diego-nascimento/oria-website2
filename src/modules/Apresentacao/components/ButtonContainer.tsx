'use client';
import { motion } from 'framer-motion';
import { useMainControlApresentacao } from '../store/useMainControlApresentacao';
import { PropsWithChildren } from 'react';

export const ButtonContainer = ({ children }: PropsWithChildren) => {
  const { mainControls } = useMainControlApresentacao();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -100, scale: 0.99 },
        visible: { opacity: 1, x: 0, scale: 1 },
      }}
      initial={'hidden'}
      animate={mainControls}
      transition={{
        duration: 0.75,
        delay: 0.7,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};
