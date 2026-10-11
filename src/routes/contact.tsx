import { PageTitle } from '@/components/PageTitle';
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/contact')({
  component: ContactPage,
});

function ContactPage() {
  const [personName, setPersonName] = useState('');
  const [personEmail, setPersonEmail] = useState('');
  const [personMessage, setPersonMessage] = useState('');
  const isEmailValid = (value: string) => {
    return value.trim() === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };
  const getEmailErrorMessage = (value: string) => {
    if (!isEmailValid(value)) {
      return 'Invalid email address';
    }
    return '';
  };
  const isFormValid = () => {
    return (
      personName.trim() !== '' &&
      personEmail.trim() !== '' &&
      isEmailValid(personEmail) &&
      personMessage.trim() !== ''
    );
  };

  return (
    <Container>
      <PageTitle>Contact</PageTitle>
      <Stack direction="row" spacing={1} sx={{ marginTop: 2 }}>
        <Button
          variant="outlined"
          color="primary"
          endIcon={<OpenInNewIcon />}
          href="https://github.com/codytodonnell"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          color="primary"
          endIcon={<OpenInNewIcon />}
          href="https://orcid.org/0009-0007-1862-833X"
          target="_blank"
          rel="noopener noreferrer"
        >
          ORCiD
        </Button>
        <Button
          variant="outlined"
          color="primary"
          endIcon={<OpenInNewIcon />}
          href="https://linkedin.com/in/codyodonnell"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
      </Stack>
      <Box sx={{ marginTop: 2 }}>
        <Typography>Looking to get in touch? Reach out with the form below!</Typography>
        <form action="https://api.web3forms.com/submit" method="POST">
          <input
            type="hidden"
            name="access_key"
            value={import.meta.env.VITE_WEB3FORMS_ACCESS_KEY}
          />
          <TextField
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
            label="Name"
            name="name"
            required
            fullWidth
            margin="normal"
          />
          <TextField
            value={personEmail}
            onChange={(e) => setPersonEmail(e.target.value)}
            label="Email"
            name="email"
            type="email"
            required
            fullWidth
            margin="normal"
            error={!isEmailValid(personEmail)}
            helperText={getEmailErrorMessage(personEmail)}
          />
          <TextField
            value={personMessage}
            onChange={(e) => setPersonMessage(e.target.value)}
            label="Message"
            name="message"
            required
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!isFormValid()}
            sx={{ marginTop: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
}
