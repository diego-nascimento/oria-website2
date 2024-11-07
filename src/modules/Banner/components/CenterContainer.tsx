'use client';
import { Grid2 } from '@mui/material';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useMainControlBanner } from '../store/useMainControlBanner';

export const CenterContainer = ({ children }: PropsWithChildren) => {
  const { mainControls } = useMainControlBanner();
  return (
    <Grid2
      size={{ xs: 12, md: 4 }}
      component={motion.div}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
      }}
      initial={'hidden'}
      animate={mainControls}
      transition={{
        duration: 0.5,
        delay: 0,
        ease: 'easeIn',
      }}
    >
      {children}
    </Grid2>
  );
};
