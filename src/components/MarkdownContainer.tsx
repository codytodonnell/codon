import { LinkInNewTab } from '@/components/LinkInNewTab';
import { Box, type BoxProps } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

interface MarkdownArticleProps extends BoxProps<'article'> {
  markdownContent: string;
}

export const MarkdownArticle: React.FC<MarkdownArticleProps> = ({
  markdownContent,
  sx,
  ...props
}) => {
  return (
    <Box
      component="article"
      {...props}
      sx={{
        '& h2': {
          fontSize: '1.5rem',
          fontWeight: 'bold',
          marginTop: 4,
          marginBottom: 1,
        },
        '& h3': {
          fontSize: '1.25rem',
          fontWeight: 'bold',
          marginTop: 3,
          marginBottom: 1,
        },
        '& p': {
          marginTop: 0,
          marginBottom: 2,
          lineHeight: 1.8,
        },
        ...sx,
      }}
    >
      <ReactMarkdown rehypePlugins={[rehypeSlug]} components={{ a: LinkInNewTab }}>
        {markdownContent}
      </ReactMarkdown>
    </Box>
  );
};
