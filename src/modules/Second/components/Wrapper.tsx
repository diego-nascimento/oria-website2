'use client';

import { Stack } from '@mui/material';
import { useAnimation, useInView } from 'framer-motion';
import { PropsWithChildren, useEffect, useRef } from 'react';

import { useMainControlSecond } from '../store/useMainControlSecond';

export const Wrapper = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const { intiate } = useMainControlSecond();
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
    <Stack paddingX={2} paddingY={4} gap={4} ref={ref}>
      {children}
    </Stack>
  );
};
