import { Button, Container, Paper, Stack, Typography } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { createFileRoute } from '@tanstack/react-router';
import { AppLink } from '../components/AppLink';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <Container sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Stack sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Paper
          sx={{
            padding: 4,
            backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.2),
            borderRadius: 2,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            codonn
          </Typography>
          <Stack spacing={1}>
            <Typography variant="body1">Welcome to codonn, I'm Cody O'Donnell.</Typography>
            <Typography variant="body1">
              I'm a<strong> Research Software Engineer </strong>who specializes in building
              <strong> data-intensive web applications </strong>.
            </Typography>
            <Typography variant="body1">
              I love combining facets of design, UX, and engineering to build interfaces and data
              visualizations that help people solve pressing problems in the
              <strong> scientific community </strong>.
            </Typography>
          </Stack>
          <AppLink to="/projects" sx={{ marginTop: 2, display: 'block' }}>
            <Button fullWidth>Explore projects</Button>
          </AppLink>
        </Paper>
      </Stack>
    </Container>
  );
}
