import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';

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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#040B25',
        },
        a: {
          color: '#64F58D',
          textDecoration: 'none',
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
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
    MuiContainer: {
      defaultProps: {
        maxWidth: 'sm',
      },
      styleOverrides: {
        root: {
          paddingTop: '4rem',
          paddingBottom: '4rem',
        },
      },
    },
  },
});
