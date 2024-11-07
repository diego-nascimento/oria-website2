'use client';
import { Stack } from '@mui/material';
import { useMainControlSecond } from '../store/useMainControlSecond';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const ImageContainer = ({ children }: PropsWithChildren) => {
  const { mainControls } = useMainControlSecond();
  return (
    <Stack
      component={motion.div}
      variants={{
        hidden: { opacity: 0, y: 40, filter: 'blur(1rem)' },
        visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0rem)' },
      }}
      initial={'hidden'}
      animate={mainControls}
      transition={{
        duration: 1,
        delay: 0.1,
        ease: 'easeIn',
      }}
      position={'relative'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {children}
    </Stack>
  );
};
