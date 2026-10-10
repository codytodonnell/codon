import { Box, Container } from '@mui/material';
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
