'use client';
import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import { PropsWithChildren, useEffect } from 'react';
import { useMobileDrawerState } from '../../store/useMobileDrawerState';

export const MobileDrawer = ({ children }: PropsWithChildren) => {
  const { isOpen, close } = useMobileDrawerState();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (matches) close();
  }, [close, matches]);

  return (
    <Drawer
      sx={{
        display: {
          xs: 'block',
          md: 'none',
        },
        zIndex: 1300,
      }}
      anchor={'left'}
      open={isOpen}
      onClose={close}
      variant="temporary"
      PaperProps={{
        sx: {
          width: '300px',
          maxWidth: '70%',
        },
      }}
    >
      {children}
    </Drawer>
  );
};
