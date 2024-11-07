'use client';
import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

import { useInView } from 'react-intersection-observer';

interface Props {
  index: number;
}

export const PerguntaContainer = ({
  children,
  index,
}: PropsWithChildren<Props>) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Stack
      className={inView ? 'animate-text' : 'awaiting-animate-text'}
      ref={ref}
      sx={{ animationDelay: `${index * 0.1}s`, borderRadius: 8 }}
    >
      {children}
    </Stack>
  );
};
