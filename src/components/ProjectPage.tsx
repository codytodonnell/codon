import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, sm: 9 }}>
          <AppLink to="/projects">
            <Button
              variant="text"
              color="primary"
              startIcon={<ArrowBackIcon />}
              sx={{ marginBottom: 1, paddingX: 2 }}
            >
              Back to projects
            </Button>
          </AppLink>
          <ProjectHeader project={project} />
          <Box
            ref={articleRef}
            component="article"
            sx={{
              '& h2': {
                fontSize: '1.5rem',
                fontWeight: 'bold',
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
        {!isMobile && (
          <Grid size={{ xs: 0, md: 3 }}>
            <Box
              component="nav"
              sx={{
                backgroundColor: 'background.paper',
                borderRadius: 1,
                paddingY: 1,
                position: 'sticky',
                top: '1rem',
              }}
            >
              <Scrollspy targetRef={documentRef} dataAttribute="scrollspy" offset={16}>
                <Stack spacing={0}>
                  <Typography
                    sx={{
                      color: 'grey.200',
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                      paddingX: 2,
                      marginBottom: 1,
                    }}
                  >
                    On this page
                  </Typography>
                  {headings.map(({ id, text }) => (
                    <AppLink
                      key={id}
                      to="."
                      hash={id}
                      data-scrollspy-anchor={id}
                      sx={{
                        color: 'grey.400',
                        display: 'block',
                        fontSize: '0.875rem',
                        marginX: 1,
                        paddingX: 1,
                        paddingY: 0.5,
                        borderRadius: 1,
                        transition: '0.25s',
                        '&[data-active="true"]': {
                          backgroundColor: 'grey.900',
                          color: 'secondary.contrastText',
                          fontWeight: 'bold',
                        },
                        '&:hover': {
                          backgroundColor: 'secondary.dark',
                          color: 'secondary.contrastText',
                          textDecoration: 'none',
                        },
                      }}
                    >
                      {text}
                    </AppLink>
                  ))}
                </Stack>
              </Scrollspy>
            </Box>
          </Grid>
        )}
      </Grid>
    </Container>
  );
};
