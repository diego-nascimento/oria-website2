'use client';
import { Grid2 } from '@mui/material';

import { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

export const CenterContainer = ({ children }: PropsWithChildren) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Grid2
      size={{ xs: 12, md: 4 }}
      className={inView ? 'animate-text' : 'awaiting-animate-text'}
      ref={ref}
    >
      {children}
    </Grid2>
  );
};
