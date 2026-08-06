import { Box, Stack, Typography } from '@mui/material';
import type { ProjectRoute } from '../data/projects';

type ProjectHeaderProps = {
  project: ProjectRoute;
};

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const coverImagePath =
    project.coverImage.length > 0
      ? `/images/projects/${project.id}/${project.coverImage}`
      : undefined;

  return (
    <Stack spacing={2} sx={{ marginBottom: 4 }}>
      <Typography variant="h3" component="h1">
        {project.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        {project.date}
      </Typography>
      <Typography variant="h6" component="p" color="text.secondary">
        {project.description}
      </Typography>
      {coverImagePath && (
        <Box
          component="img"
          src={coverImagePath}
          alt={`${project.title} cover image`}
          sx={{
            width: '100%',
            borderRadius: 2,
            objectFit: 'cover',
            border: '1px solid',
            borderColor: 'divider',
          }}
        />
      )}
    </Stack>
  );
}
