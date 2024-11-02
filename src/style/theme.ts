import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ba5a87',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#001f3f',
    },

    background: {
      default: '#F8F6F1',
    },
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#001f3f',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        sx: {
          borderRadius: 50,
          fontWeight: 700,
          fontSize: 24,
          paddingX: 4,
        },
      },
    },
  },
});
