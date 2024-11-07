'use client';
import { Grid2 } from '@mui/material';
import { motion } from 'framer-motion';
import { useMainControlCaminhos } from '../store/useMainControlCaminhos';
import { PropsWithChildren } from 'react';

export const OriaImageContainer = ({ children }: PropsWithChildren) => {
  const { mainControls } = useMainControlCaminhos();
  return (
    <Grid2
      component={motion.div}
      size={{
        xs: 12,
        sm: 6,
      }}
      variants={{
        hidden: { opacity: 0, x: 40, filter: 'blur(1rem)' },
        visible: { opacity: 1, x: 0, filter: 'blur(0rem)' },
      }}
      initial={'hidden'}
      animate={mainControls}
      transition={{
        duration: 1,
        delay: 0,
        ease: 'easeIn',
      }}
    >
      {children}
    </Grid2>
  );
};
