import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Box, CssBaseline, Stack, ThemeProvider } from '@mui/material';
import { theme } from '../theme';
import { Navbar } from '../components/Navbar';
import { Footer } from '@/components/Footer';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          bgcolor: 'background.default',
          color: 'text.primary',
        }}
      >
        <Navbar />
        <Stack component="main" sx={{ flex: 1 }}>
          <Outlet />
        </Stack>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
