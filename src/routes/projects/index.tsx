import { Container, List, ListItem, ListItemText, Typography } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import { AppLink } from '../../components/AppLink';
import { projects } from '../../data/projects';

export const Route = createFileRoute('/projects/')({
  component: ProjectsListPage,
});

function ProjectsListPage() {
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Projects
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>
        Browse current and past Codonn work here.
      </Typography>

      <List sx={{ padding: 0 }}>
        {projects.map((project) => (
          <ListItem key={project.to} disablePadding>
            <AppLink to={project.to} sx={{ width: '100%', paddingY: 1, textDecoration: 'none' }}>
              <ListItemText primary={project.title} secondary={project.date} />
            </AppLink>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
