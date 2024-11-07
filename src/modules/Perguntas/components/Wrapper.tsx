'use client';

import { Grid2 } from '@mui/material';
import { useAnimation, useInView } from 'framer-motion';
import { PropsWithChildren, useEffect, useRef } from 'react';
import { useMainControlPerguntas } from '../store/useMainControlPerguntas';

export const Wrapper = ({ children }: PropsWithChildren) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const { intiate } = useMainControlPerguntas();
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
    <Grid2
      container
      marginY={4}
      paddingX={{
        xs: 2,
      }}
      justifyContent={'center'}
      id="duvidas"
      ref={ref}
      overflow={'hidden'}
    >
      {children}
    </Grid2>
  );
};
