import { Container, Paper, Typography } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import ReactMarkdown from 'react-markdown';
import markdownContent from '../../markdown/test.md?raw';

export const Route = createFileRoute('/projects/test')({
  component: TestProjectPage,
});

function TestProjectPage() {
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        test
      </Typography>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </Container>
  );
}
