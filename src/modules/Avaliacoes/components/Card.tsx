'use client';
import { Card as MuiCard } from '@mui/material';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useMainControlAvaliacoes } from '../store/useMainControlAvaliacoes';

interface Props {
  index: number;
}

export const Card = ({ children, index }: PropsWithChildren<Props>) => {
  const { mainControls } = useMainControlAvaliacoes();
  return (
    <MuiCard
      variant="elevation"
      elevation={0}
      component={motion.div}
      variants={{
        hidden: { opacity: 0, y: 40, filter: 'blur(1rem)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0rem)' },
      }}
      initial={'hidden'}
      animate={mainControls}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: 'easeIn',
      }}
    >
      {children}
    </MuiCard>
  );
};
