'use client';
import { Stack } from '@mui/material';
import { motion } from 'framer-motion';

import { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

export const PhraseContainer = ({ children }: PropsWithChildren) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Stack
      ref={ref}
      component={motion.div}
      className={inView ? 'animate-text' : 'awaiting-animate-text'}
    >
      {children}
    </Stack>
  );
};
