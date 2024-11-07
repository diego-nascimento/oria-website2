'use client';

import { Grid2 } from '@mui/material';

import { PropsWithChildren } from 'react';

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <Grid2
      container
      marginY={4}
      paddingX={{
        xs: 2,
      }}
      justifyContent={'center'}
      id="duvidas"
      overflow={'hidden'}
    >
      {children}
    </Grid2>
  );
};
