import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#ba5a87',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#87CEEB',
    },

    background: {
      default: '#F8F6F1',
    },
  },
  components: {
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
