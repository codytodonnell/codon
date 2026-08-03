import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#040B25',
      paper: '#0C216E',
    },
    primary: {
      main: '#64F58D',
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: 'Avenir Next, sans-serif',
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});
