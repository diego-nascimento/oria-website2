'use client';
import { PropsWithChildren } from 'react';

import { Stack } from '@mui/material';
import { useInView } from 'react-intersection-observer';

export const BannerContainer = ({ children }: PropsWithChildren) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <Stack ref={ref} className={inView ? 'animate-text' : ''}>
      {children}
    </Stack>
  );
};
