'use client';
import { Card as MuiCard } from '@mui/material';

import { PropsWithChildren } from 'react';

import { useInView } from 'react-intersection-observer';

interface Props {
  index: number;
}

export const Card = ({ children, index }: PropsWithChildren<Props>) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <MuiCard
      variant="elevation"
      elevation={0}
      className={inView ? 'animate-text' : 'awaiting-animate-text'}
      ref={ref}
      sx={{ animationDelay: `${index * 0.1}s` }}
    >
      {children}
    </MuiCard>
  );
};
