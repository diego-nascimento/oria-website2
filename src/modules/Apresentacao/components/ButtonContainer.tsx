'use client';

import { PropsWithChildren } from 'react';
import { Stack } from '@mui/material';
import { useInView } from 'react-intersection-observer';

export const ButtonContainer = ({ children }: PropsWithChildren) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Stack className={inView ? 'animateLeft' : 'waitingAnimateLeft'} ref={ref}>
      {children}
    </Stack>
  );
};
