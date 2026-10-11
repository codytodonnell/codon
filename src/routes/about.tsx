import { PageTitle } from '@/components/PageTitle';
import { Container, Link, Typography } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
  component: AboutPage,
});

function AboutPage() {
  return (
    <Container>
      <PageTitle>About</PageTitle>
      <Typography sx={{ fontSize: '1.25rem', marginTop: 2 }}>
        I currently work at the{' '}
        <Link href="https://www.lbl.gov/" target="_blank" rel="noopener noreferrer">
          Lawrence Berkeley National Laboratory
        </Link>{' '}
        in the{' '}
        <Link
          href="https://scidata.lbl.gov/research-areas/groups/scientific-data-management-usable-data-systems/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Usable Data Systems
        </Link>{' '}
        group.
      </Typography>
    </Container>
  );
}
