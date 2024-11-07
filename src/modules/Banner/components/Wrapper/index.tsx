'use client';

import { Stack } from '@mui/material';
import { useAnimation, useInView } from 'framer-motion';
import { PropsWithChildren, useEffect, useRef } from 'react';

import { useMainControlBanner } from '../../store/useMainControlBanner';

export const Wrapper = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const { intiate } = useMainControlBanner();
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
      paddingY={{
        xs: 4,
        md: 14,
      }}
      paddingX={{
        xs: 2,
      }}
      bgcolor={'secondary.main'}
      display={{
        xs: 'none',
        lg: 'flex',
      }}
      ref={ref}
    >
      {children}
    </Stack>
  );
};
