import { Box, Button, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReactMarkdown from 'react-markdown';
import { ProjectHeader } from './ProjectHeader';
import type { ProjectMetadata } from '../data/projects';

type ProjectPageProps = {
  project: ProjectMetadata;
  markdownContent: string;
};

export function ProjectPage({ project, markdownContent }: ProjectPageProps) {
  return (
    <Container>
      <Button
        variant="text"
        color="primary"
        startIcon={<ArrowBackIcon />}
        sx={{ marginBottom: 1, paddingX: 2 }}
        href="/projects"
      >
        Back to projects
      </Button>
      <ProjectHeader project={project} />
      <Box
        sx={{
          '& h2': {
            marginTop: 4,
            marginBottom: 1,
          },
          '& p': {
            marginTop: 0,
            marginBottom: 2,
            lineHeight: 1.8,
          },
        }}
      >
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </Box>
    </Container>
  );
}
