import { PageTitle } from '@/components/PageTitle';
import { Container, Typography } from '@mui/material';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/thankyou')({
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <Container>
      <PageTitle>Thank you!</PageTitle>
      <Typography sx={{ fontSize: '1.25rem', marginTop: 2 }}>
        Your form was submitted successfully. I will reach out to you over email as soon as I can.
      </Typography>
    </Container>
  );
}
