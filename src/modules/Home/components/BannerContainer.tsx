'use client';
import { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

export const BannerContainer = ({ children }: PropsWithChildren) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      initial={'hidden'}
      animate={'visible'}
      transition={{
        duration: 0.5,
        delay: 1,
        ease: 'easeOut',
      }}
    >
      {children}
    </motion.div>
  );
};
