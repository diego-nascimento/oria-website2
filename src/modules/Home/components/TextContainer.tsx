'use client';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const TextContainer = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.99 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      initial={'hidden'}
      animate={'visible'}
      transition={{
        duration: 1.2,
        delay: 0,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};
