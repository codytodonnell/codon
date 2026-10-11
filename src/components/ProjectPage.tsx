import { Box, Button, Container, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import { ProjectHeader } from './ProjectHeader';
import type { ProjectMetadata } from '../data/projects';
import { Scrollspy } from '@/components/reui/scrollspy';
import { useMemo, useRef } from 'react';
import GithubSlugger from 'github-slugger';
import { AppLink } from '@/components/AppLink';

type ProjectPageProps = {
  project: ProjectMetadata;
  markdownContent: string;
};

// The page scrolls at the window level, so Scrollspy must target the document.
const documentRef = { current: document };

const getHeadings = (markdown: string) => {
  const slugger = new GithubSlugger();
  const headings: { id: string; text: string }[] = [];
  let inFence = false;
  for (const line of markdown.split('\n')) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    const match = !inFence && line.match(/^#{2,3}\s+(.+?)\s*#*\s*$/);
    if (match) {
      headings.push({ id: slugger.slug(match[1]), text: match[1] });
    }
  }
  return headings;
};

export const ProjectPage = ({ project, markdownContent }: ProjectPageProps) => {
  const articleRef = useRef<HTMLElement | null>(null);
  const headings = useMemo(() => getHeadings(markdownContent), [markdownContent]);
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 9 }}>
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
            ref={articleRef}
            component="article"
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
            <ReactMarkdown rehypePlugins={[rehypeSlug]}>{markdownContent}</ReactMarkdown>
          </Box>
        </Grid>
        <Grid size={{ xs: 0, md: 3 }}>
          <Box
            component="nav"
            sx={{
              backgroundColor: 'background.paper',
              padding: 2,
              borderRadius: 1,
              position: 'sticky',
              top: 16,
            }}
          >
            <Scrollspy targetRef={documentRef} dataAttribute="scrollspy">
              {headings.map(({ id, text }) => (
                <AppLink
                  key={id}
                  to="."
                  hash={id}
                  hashScrollIntoView={{ behavior: 'smooth', block: 'start' }}
                  data-scrollspy-anchor={id}
                  sx={{ display: 'block' }}
                >
                  {text}
                </AppLink>
              ))}
            </Scrollspy>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
