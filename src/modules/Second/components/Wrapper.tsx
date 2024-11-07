'use client';

import { Stack } from '@mui/material';

import { PropsWithChildren } from 'react';

export const Wrapper = ({ children }: PropsWithChildren) => {
  return (
    <Stack paddingX={2} paddingY={4} gap={4}>
      {children}
    </Stack>
  );
};
