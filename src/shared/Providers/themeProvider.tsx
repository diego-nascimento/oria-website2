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
            overflowX: 'hidden',
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

          '@keyframes animateLeft': {
            '0%': {
              opacity: 0,
              transform: 'translateX(-100px) ',
            },
            '100%': {
              opacity: 1,
              transform: 'translateX(0) ',
            },
          },

          '.animateLeft': {
            opacity: 0,
            transform: 'translateX(-100px)',

            animation: 'animateLeft .75s ease-out forwards',
          },

          '.waitingAnimateLeft': {
            opacity: 0,
            transform: 'translateX(-100px)',
          },

          '@keyframes animateRight': {
            '0%': {
              opacity: 0,
              transform: 'translateX(100px) ',
            },
            '100%': {
              opacity: 1,
              transform: 'translateX(0)',
            },
          },

          '.animateRight': {
            opacity: 0,
            transform: 'translateX(-100px)',

            animation: 'animateRight .75s ease-out forwards',
          },

          '.awaitingAnimateRight': {
            opacity: 0,
            transform: 'translateX(-100px)',
          },

          '@keyframes animateText': {
            '0%': {
              opacity: 0,
              transform: 'translateY(20px) ',
            },
            '100%': {
              opacity: 1,
              transform: 'translateY(0) ',
            },
          },

          '.animate-text': {
            opacity: 0,
            transform: 'translateY(20px)',

            animation: 'animateText 1.2s ease forwards',
          },
          '.awaiting-animate-text': {
            opacity: 0,
            transform: 'translateY(20px)',
          },

          '@keyframes animateOpacity': {
            '0%': {
              opacity: 0,
            },
            '100%': {
              opacity: 1,
            },
          },

          '.animateOpacity': {
            animation: 'animateOpacity 1.2s ease forwards',
          },

          '.awaitAnimateOpacity': {
            animation: 'animateOpacity 1.2s ease forwards',
          },

          '@keyframes animateBlur': {
            '0%': {
              filter: 'blur(1rem)',
            },
            '100%': {
              filter: 'blur(0)',
            },
          },

          '.animateBlur': {
            animation: 'animateBlur 1.2s ease forwards',
          },

          '.awaitAnimateBlur': {
            filter: 'blur(1rem)',
          },
        })}
      />
      {children}
    </ThemeProvider>
  );
};
