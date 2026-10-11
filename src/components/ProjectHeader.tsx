import { Box, Chip, Stack, Typography } from '@mui/material';
import type { ProjectMetadata } from '../data/projects';
import { formatDate } from '../utils';
import { PageTitle } from '@/components/PageTitle';

type ProjectHeaderProps = {
  project: ProjectMetadata;
};

export function ProjectHeader({ project }: ProjectHeaderProps) {
  const coverImagePath =
    project.coverImage.length > 0
      ? `/images/projects/${project.id}/${project.coverImage}`
      : undefined;

  return (
    <Stack spacing={2} sx={{ marginBottom: 4 }}>
      <PageTitle>{project.title}</PageTitle>
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
      <Typography component="p" color="text.secondary">
        {project.description}
      </Typography>
      <Stack direction="row" spacing={1}>
        <Chip label={formatDate(project.date)} variant="outlined" />
        {project.tags.map((tag) => (
          <Chip key={tag} label={tag} />
        ))}
      </Stack>
    </Stack>
  );
}
