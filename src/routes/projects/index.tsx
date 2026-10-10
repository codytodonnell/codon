import { Container, Grid, Typography } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { ProjectItem } from '../../components/ProjectItem';
import { projects } from '../../data/projects';

export const Route = createFileRoute('/projects/')({
  component: ProjectsListPage,
});

function ProjectsListPage() {
  const sortedProjects = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <Container>
      <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
        Projects
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Browse current and past Codonn projects.
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: 2 }}>
        {sortedProjects.map((project) => (
          <Grid size={{ xs: 12, sm: 6 }} key={project.to}>
            <ProjectItem project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
