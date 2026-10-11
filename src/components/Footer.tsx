import { Box, Container, Typography } from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
        height: '40px',
      }}
    >
      <Container sx={{ paddingY: 0 }}>
        <Typography variant="body2" color="text.secondary">
          Copyright &copy; {new Date().getFullYear()} Cody O'Donnell.
        </Typography>
      </Container>
    </Box>
  );
};
