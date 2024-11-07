'use client';

import { Stack } from '@mui/material';
import { useAnimation, useInView } from 'framer-motion';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { useMainControlAvaliacoes } from '../store/useMainControlAvaliacoes';

export const Wrapper = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const { intiate } = useMainControlAvaliacoes();
  useEffect(() => {
    intiate(mainControls);
  }, [mainControls, intiate]);

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      setTimeout(() => mainControls.start('menuItemVisible'), 1000);
    }
  }, [isInView, mainControls]);

  return (
    <Stack
      paddingY={4}
      position={'relative'}
      id="avaliacoes"
      paddingX={{
        xs: 2,
        md: 0,
      }}
      ref={ref}
    >
      {children}
    </Stack>
  );
};
