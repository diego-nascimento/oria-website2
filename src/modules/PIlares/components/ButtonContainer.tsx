'use client';

import { PropsWithChildren } from 'react';
import { Stack } from '@mui/material';

export const ButtonContainer = ({ children }: PropsWithChildren) => {
  return (
    <Stack alignItems={'center'} marginTop={4}>
      {children}
    </Stack>
  );
};
