import { Box, Container } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import type { ProjectRoute } from '../data/projects';
import { ProjectHeader } from './ProjectHeader';

type ProjectPageProps = {
  project: ProjectRoute;
  markdownContent: string;
};

export function ProjectPage({ project, markdownContent }: ProjectPageProps) {
  return (
    <Container sx={{ paddingY: 4 }}>
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
