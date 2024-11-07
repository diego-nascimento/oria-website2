'use client';

import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

import { useInView } from 'react-intersection-observer';

export const VideoWrapper = ({ children }: PropsWithChildren) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Stack
      ref={ref}
      sx={{
        '@keyframes myEffect5': {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
        opacity: 0,

        animation: inView ? 'myEffect5 .5s ease-in forwards' : '',
      }}
      bgcolor={'secondary.main'}
      width={'100%'}
      maxWidth={600}
      paddingX={{
        xs: 2,
        md: 4,
      }}
      paddingY={{
        xs: 4,
        md: 2,
      }}
      borderRadius={8}
      gap={1}
    >
      {children}
    </Stack>
  );
};
