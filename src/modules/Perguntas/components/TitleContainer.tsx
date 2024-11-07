'use client';
import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

export const TitleContainer = ({ children }: PropsWithChildren) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <Stack
      className={inView ? 'animate-text' : 'awaiting-animate-text'}
      ref={ref}
      marginBottom={2}
      alignItems={'center'}
      justifyContent={'center'}
      height={'100%'}
    >
      {children}
    </Stack>
  );
};
