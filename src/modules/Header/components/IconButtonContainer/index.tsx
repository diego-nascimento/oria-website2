'use client';
import { IconButton, Stack } from '@mui/material';
import { PropsWithChildren } from 'react';
import { useMobileDrawerState } from '../../store/useMobileDrawerState';

export const IconButtonContainer = ({ children }: PropsWithChildren) => {
  const { toggle } = useMobileDrawerState();

  return (
    <Stack>
      <IconButton onClick={toggle}>{children}</IconButton>
    </Stack>
  );
};
