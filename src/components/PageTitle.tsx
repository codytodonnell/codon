import { Typography, type TypographyProps } from '@mui/material';

export const PageTitle: React.FC<TypographyProps> = ({ children, sx, ...props }) => {
  return (
    <Typography
      variant="h3"
      component="h1"
      sx={{ color: 'secondary.light', fontWeight: 'bold', ...sx }}
      {...props}
    >
      {children}
    </Typography>
  );
};
