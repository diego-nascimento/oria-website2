'use client';
import { Grid2 } from '@mui/material';

import { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

export const OriaImageContainer = ({ children }: PropsWithChildren) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Grid2
      size={{
        xs: 12,
        sm: 6,
      }}
      className="awaitAnimateBlur waitingAnimateLeft"
      sx={{
        animation: inView
          ? 'animateLeft  1.2s ease forwards, animateBlur 1.2s ease forwards'
          : '',
      }}
      ref={ref}
    >
      {children}
    </Grid2>
  );
};
