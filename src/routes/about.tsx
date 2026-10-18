import { MarkdownArticle } from '@/components/MarkdownContainer';
import { PageTitle } from '@/components/PageTitle';
import { Box, Container, Grid } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';
import markdownContent from '../markdown/about-me.md?raw';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <Container>
      <PageTitle>About</PageTitle>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 8 }}>
          <MarkdownArticle markdownContent={markdownContent} />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Box
            component="img"
            src="/images/me.png"
            alt="Photo of Cody O'Donnell"
            sx={{
              maxWidth: '200px',
              borderRadius: 2,
              objectFit: 'cover',
              border: '1px solid',
              borderColor: 'divider',
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
