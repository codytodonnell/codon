import { Box, Paper, Stack, Typography } from '@mui/material';
import type { ProjectMetadata } from '../data/projects';
import { AppLink } from './AppLink';

type ProjectItemProps = {
  project: ProjectMetadata;
};

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <AppLink
      to={project.to}
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: '4px',
        display: 'block',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: '0.25s',
        '&:hover': {
          textDecoration: 'none',
          borderColor: 'secondary.light',
          backgroundColor: 'background.paper',
          '& .project-thumbnail': {
            filter: 'grayscale(0%)',
          },
        },
      }}
    >
      <Paper elevation={0} sx={{ background: 'none' }}>
        <Box
          className="project-thumbnail"
          sx={{
            backgroundImage: `url(/images/projects/${project.id}/${project.thumbnail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(80%)',
            width: '100%',
            height: 200,
            transition: '0.25s',
          }}
        ></Box>
        <Stack spacing={1} sx={{ padding: 2 }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
            {project.title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {project.date}
          </Typography>
        </Stack>
      </Paper>
    </AppLink>
  );
}
