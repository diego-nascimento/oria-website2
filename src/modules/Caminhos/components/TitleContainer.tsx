'use client';
import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { useMainControlCaminhos } from '../store/useMainControlCaminhos';
import { PropsWithChildren } from 'react';

export const TitleContainer = ({ children }: PropsWithChildren) => {
  const { mainControls } = useMainControlCaminhos();
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
        delay: 0.2,
        ease: 'easeIn',
      }}
    >
      {children}
    </Stack>
  );
};
