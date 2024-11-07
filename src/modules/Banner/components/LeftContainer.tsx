'use client';
import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useMainControlBanner } from '../store/useMainControlBanner';

export const LeftContainer = ({ children }: PropsWithChildren) => {
  const { mainControls } = useMainControlBanner();
  return (
    <Stack
      justifyContent={'center'}
      component={motion.div}
      variants={{
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0 },
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
    </Stack>
  );
};
