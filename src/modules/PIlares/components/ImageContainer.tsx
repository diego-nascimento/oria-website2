import { Stack } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useInView } from 'react-intersection-observer';

export const ImageContainer = ({ children }: PropsWithChildren) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  return (
    <Stack
      ref={ref}
      alignItems={'center'}
      className={'awaitingAnimateLeft awaitAnimateBlur'}
      sx={{
        animation: inView
          ? 'animateLeft 1s forwards, animateBlur 1s forwards'
          : '',
      }}
    >
      {children}
    </Stack>
  );
};
