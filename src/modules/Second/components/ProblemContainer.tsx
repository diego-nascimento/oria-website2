'use client';
import { Grid2 } from '@mui/material';

import { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  index: number;
}

export const ProblemContainer = ({
  children,
  index,
}: PropsWithChildren<Props>) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Grid2
      ref={ref}
      className={inView ? 'animate-text' : 'awaiting-animate-text'}
      size={{
        xs: 6,
        md: 3,
      }}
      sx={{
        bgcolor: 'secondary.main',
        borderRadius: 50,
        paddingY: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animationDelay: `${0.3 + index * 0.1}s`,
      }}
    >
      {children}
    </Grid2>
  );
};
