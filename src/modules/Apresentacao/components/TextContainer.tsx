'use client';
import { Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { useMainControlApresentacao } from '../store/useMainControlApresentacao';

interface Props {
  delay: number;
}

export const TextContainer = ({
  children,
  delay,
}: PropsWithChildren<Props>) => {
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
        duration: 0.5,
        delay,
        ease: 'easeIn',
      }}
    >
      {children}
    </Stack>
  );
};
