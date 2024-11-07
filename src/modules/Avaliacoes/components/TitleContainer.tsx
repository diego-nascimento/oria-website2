'use client';
import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

import { useMainControlAvaliacoes } from '../store/useMainControlAvaliacoes';

export const TitleContainer = ({ children }: PropsWithChildren) => {
  const { mainControls } = useMainControlAvaliacoes();
  return (
    <Stack
      component={motion.div}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, scale: 1 },
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
    </Stack>
  );
};
