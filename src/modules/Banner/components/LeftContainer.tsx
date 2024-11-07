'use client';
import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

import { useInView } from 'react-intersection-observer';

export const LeftContainer = ({ children }: PropsWithChildren) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Stack className={inView ? 'animateLeft' : 'awaitAnimateLeft'} ref={ref}>
      {children}
    </Stack>
  );
};
