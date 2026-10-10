import { Button, Container, Link, Paper, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createFileRoute } from '@tanstack/react-router';
import { AppLink } from '../components/AppLink';
import { PageTitle } from '../components/PageTitle';

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
            backgroundColor: 'secondary.dark',
            borderRadius: 2,
          }}
        >
          <PageTitle variant="h2">codonn</PageTitle>
          <Stack spacing={1}>
            <Typography>Welcome to codonn, I'm Cody O'Donnell.</Typography>
            <Typography>
              I'm a<strong> Research Software Engineer </strong>who specializes in designing and
              building
              <strong> data-intensive web applications </strong>.
            </Typography>
            <Typography>
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
            <Button size="large" endIcon={<ArrowForwardIcon />}>
              Explore projects
            </Button>
          </AppLink>
        </Paper>
      </Stack>
    </Container>
  );
}
