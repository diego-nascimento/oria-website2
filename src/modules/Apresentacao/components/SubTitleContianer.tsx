'use client';
import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useMainControlApresentacao } from '../store/useMainControlApresentacao';

export const SubTitleContainer = ({ children }: PropsWithChildren) => {
  const { mainControls } = useMainControlApresentacao();
  return (
    <Stack
      component={motion.div}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial={'hidden'}
      animate={mainControls}
      transition={{
        duration: 1,
        delay: 0.3,
        ease: 'easeIn',
      }}
    >
      {children}
    </Stack>
  );
};
