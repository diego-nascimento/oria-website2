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
      ref={ref}
      className={'awaitAnimateBlur awaitAnimateRight'}
      sx={{
        animationDelay: `${delay}s`,
        animation: inView
          ? 'animateRight 1s forwards, animateBlur 1s forwards '
          : '',
      }}
      gap={2}
      alignItems={{
        xs: 'center',
        md: 'initial',
      }}
      direction={{
        xs: 'column',
        md: 'row',
      }}
    >
      {children}
    </Stack>
  );
};
