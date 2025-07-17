'use client';
import { PropsWithChildren } from 'react';
import { AppBar as MuiAppbar, useScrollTrigger } from '@mui/material';

export const AppBar = ({ children }: PropsWithChildren) => {
  const isTrigged = useScrollTrigger({
    threshold: 0,
  });
  return (
    <MuiAppbar
      color="secondary"
      position="sticky"
      elevation={isTrigged ? 8 : 0}
      sx={{ zIndex: 1200 }}
    >
      {children}
    </MuiAppbar>
  );
};
