'use client';

import { Stack } from '@mui/material';
import { useAnimation, useInView } from 'framer-motion';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { useMainControlCaminhos } from '../../store/useMainControlCaminhos';

export const Wrapper = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const { intiate } = useMainControlCaminhos();
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
      pr={2}
      paddingX={{
        xs: 2,
      }}
      paddingTop={{
        xs: 4,
        md: 0,
      }}
      id="tratamentos"
      ref={ref}
    >
      {children}
    </Stack>
  );
};
