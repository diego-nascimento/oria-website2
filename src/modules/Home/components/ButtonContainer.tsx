'use client';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const ButtonContainer = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -100, scale: 0.99 },
        visible: { opacity: 1, x: 0, scale: 1 },
      }}
      initial={'hidden'}
      animate={'visible'}
      transition={{
        duration: 0.75,
        delay: 0.45,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};
