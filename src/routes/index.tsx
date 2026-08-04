import { Button, Container, Link, Paper, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
              I'm a<strong> Research Software Engineer </strong>who specializes in designing and
              building
              <strong> data-intensive web applications </strong>.
            </Typography>
            <Typography variant="body1">
              I currently work at the{' '}
              <Link href="https://www.lbl.gov/" target="_blank" rel="noopener noreferrer">
                Lawrence Berkeley National Laboratory
              </Link>{' '}
              in the{' '}
              <Link
                href="https://scidata.lbl.gov/research-areas/groups/scientific-data-management-usable-data-systems/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Usable Data Systems
              </Link>{' '}
              group.
            </Typography>
          </Stack>
          <AppLink to="/projects" sx={{ marginTop: 2, display: 'block' }}>
            <Button fullWidth endIcon={<ArrowForwardIcon />}>
              Explore projects
            </Button>
          </AppLink>
        </Paper>
      </Stack>
    </Container>
  );
}
