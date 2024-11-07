'use client';
import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  delay?: number;
}

export const TextContainer = ({
  children,
  delay,
}: PropsWithChildren<Props>) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Stack
      className={inView ? 'animate-text' : 'awaiting-animate-text'}
      ref={ref}
      sx={{ animationDelay: `${delay}s` }}
    >
      {children}
    </Stack>
  );
};
