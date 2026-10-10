import { Typography } from '@mui/material';
import type { PropsWithChildren } from 'react';

export const PageTitle: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Typography variant="h3" component="h1" sx={{ color: 'secondary.light', fontWeight: 'bold' }}>
      {children}
    </Typography>
  );
};
