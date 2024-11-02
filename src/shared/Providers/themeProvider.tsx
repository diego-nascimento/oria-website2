'use client';
import { theme } from '@/style/theme';

import { GlobalStyles, ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={(theme) => ({
          root: {
            'color-scheme': 'light only',
          },
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

          '@keyframes pulse': {
            '0%': {
              transform: 'scale(.95)',
              boxShadow: '0 0 0 0 rgba(37, 211, 102, .7)',
            },
            '70%': {
              transform: 'scale(1)',
              boxShadow: '0 0 0 20px rgba(37, 211, 102, 0)',
            },
            '100%': {
              transform: 'scale(.95)',
              boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)',
            },
          },
          '.appearleft': {
            animation: 'pulse 2s infinite',
          },
        })}
      />
      {children}
    </ThemeProvider>
  );
};
