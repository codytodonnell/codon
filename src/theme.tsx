import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#040B25',
      paper: '#081649',
    },
    primary: {
      main: '#64F58D',
    },
    secondary: {
      main: '#081649',
    },
    divider: '#444444',
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
        maxWidth: 'md',
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
