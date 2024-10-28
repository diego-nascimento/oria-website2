'use client';
import { theme } from '@/style/theme';

import { GlobalStyles, ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={(theme) => ({
          body: {
            backgroundColor: '#111',
            minHeight: '100vh',
          },
          strong: {
            color: theme.palette.primary.main,
          },
          img: {
            width: 'auto',
            height: 'auto',
            maxWidth: '100%',
            display: 'block',
          },
          iframe: {
            AspectRatio: '16/9',
            width: '100%',
            maxWidth: 1100,
            borderRadius: 30,
            border: 'none',
          },

          ' a, a:hover, a:visited, a:active': {
            color: 'inherit',
            textDecoration: 'none',
          },

          '@keyframes leftappear': {
            '0%': {
              opacity: 0,
              transform: 'translate(-200px)',
            },
            '50%': {
              opacity: 0.5,
              transform: 'translate(-200px)',
            },
            '100%': {
              opacity: 1,
              transform: 'translate(0)',
            },
          },
          '.appearleft': {},
        })}
      />
      {children}
    </ThemeProvider>
  );
};
