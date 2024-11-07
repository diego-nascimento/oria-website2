'use client';
import { Stack } from '@mui/material';
import { useMainControlSecond } from '../store/useMainControlSecond';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const ButtonContainer = ({ children }: PropsWithChildren) => {
  const { mainControls } = useMainControlSecond();
  return (
    <Stack
      alignItems={'center'}
      component={motion.div}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      initial={'hidden'}
      animate={mainControls}
      transition={{
        duration: 0.5,
        delay: 0.6,
        ease: 'easeOut',
      }}
    >
      {children}
    </Stack>
  );
};
