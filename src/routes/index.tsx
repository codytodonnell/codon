import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createFileRoute } from '@tanstack/react-router';
import { AppLink } from '../components/AppLink';
import { PageTitle } from '../components/PageTitle';
import { ProjectItem } from '@/components/ProjectItem';
import { projects } from '@/data/projects';
import App from '@/App';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
  const featuredProjects = sortedProjects.slice(0, 2);

  return (
    <Container sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Stack spacing={2} sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Paper
          sx={{
            padding: { xs: 2, sm: 4 },
            backgroundColor: 'secondary.dark',
            borderRadius: 2,
          }}
        >
          <PageTitle variant="h2">codon</PageTitle>
          <Stack spacing={1}>
            <Typography sx={{ fontSize: '1.25rem' }}>
              Welcome to codon, the personal website of Cody O'Donnell.
            </Typography>
            <Typography sx={{ fontSize: '1.25rem' }}>
              I'm a Research Software Engineer who specializes in designing and building
              data-intensive web applications and user interfaces. I turn complex data into
              intuitive, interactive, and visually appealing experiences, with the goal of advancing
              scientific discovery and data access.
            </Typography>
          </Stack>
          {isMobile && (
            <Stack spacing={1} sx={{ marginTop: 2 }}>
              <AppLink to="/projects" sx={{ marginTop: 2, display: 'block' }}>
                <Button size="large" fullWidth>
                  Explore projects
                </Button>
              </AppLink>
              <AppLink to="/about" sx={{ marginTop: 2, display: 'block' }}>
                <Button variant="outlined" size="large" fullWidth>
                  More about me
                </Button>
              </AppLink>
              <AppLink to="/contact" sx={{ marginTop: 2, display: 'block' }}>
                <Button variant="outlined" size="large" fullWidth>
                  Get in touch
                </Button>
              </AppLink>
            </Stack>
          )}
          {!isMobile && (
            <Stack direction="row" spacing={1} sx={{ marginTop: 2 }}>
              <AppLink to="/projects" sx={{ marginTop: 2, display: 'block' }}>
                <Button size="large">Explore projects</Button>
              </AppLink>
              <AppLink to="/about" sx={{ marginTop: 2, display: 'block' }}>
                <Button variant="outlined" size="large">
                  More about me
                </Button>
              </AppLink>
              <AppLink to="/contact" sx={{ marginTop: 2, display: 'block' }}>
                <Button variant="outlined" size="large">
                  Get in touch
                </Button>
              </AppLink>
            </Stack>
          )}
        </Paper>
        <Grid container spacing={2} sx={{ width: '100%' }}>
          {featuredProjects.map((project) => (
            <Grid size={{ xs: 12, sm: 4 }} key={project.to}>
              <ProjectItem project={project} />
            </Grid>
          ))}
          <Grid size={{ xs: 12, sm: 4 }}>
            <AppLink
              to="/projects"
              sx={{
                backgroundColor: 'background.default',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '4px',
                padding: 2,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                transition: '0.25s',
                textDecoration: 'none',
                '&:hover': {
                  backgroundColor: 'secondary.main',
                  textDecoration: 'none',
                },
              }}
            >
              <Box sx={{ background: 'none' }}>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                  <Typography>All my projects</Typography>
                  <ArrowForwardIcon />
                </Stack>
              </Box>
            </AppLink>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
