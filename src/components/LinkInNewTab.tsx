import { Link, type LinkProps } from '@mui/material';

export const LinkInNewTab: React.FC<LinkProps> = (props) => {
  return <Link {...props} target="_blank" rel="noopener noreferrer" />;
};
