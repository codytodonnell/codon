import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { AppBar, Box, Stack, Toolbar } from '@mui/material';
import { useRouterState } from '@tanstack/react-router';
import { AppLink } from './AppLink';

export const Navbar = () => {
  const links = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/projects', label: 'Projects' },
      { to: '/contact', label: 'Contact' },
    ],
    [],
  );
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const activeIndex = useMemo(() => {
    if (pathname === '/') {
      return 0;
    }

    const matchIndex = links.findIndex((link) => link.to !== '/' && pathname.startsWith(link.to));
    return matchIndex === -1 ? 0 : matchIndex;
  }, [links, pathname]);

  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const updateIndicator = () => {
      const activeItem = itemRefs.current[activeIndex];
      if (!activeItem) {
        return;
      }

      setIndicator({
        left: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
      });
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);

    return () => {
      window.removeEventListener('resize', updateIndicator);
    };
  }, [activeIndex]);

  const linkSx = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingY: 0.5,
    paddingX: 1.5,
    borderRadius: 10,
    textDecoration: 'none',
    transition: 'color 0.25s ease',
  };

  return (
    <AppBar
      position="fixed"
      sx={{ background: 'none', boxShadow: 'none', zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar component="nav" sx={{ justifyContent: 'space-between', position: 'relative' }}>
        <AppLink
          to="/"
          style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem' }}
        >
          codonn
        </AppLink>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            margin: 1,
            padding: 0.5,
            borderRadius: 10,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: 'divider',
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            overflow: 'hidden',
            color: 'common.white',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 4,
              bottom: 4,
              left: 0,
              width: indicator.width,
              transform: `translateX(${indicator.left}px)`,
              borderRadius: 10,
              backgroundColor: 'white',
              transition: 'transform 0.25s ease, width 0.25s ease',
              zIndex: -1,
            }}
          />
          {links.map((link, index) => {
            const isActive = index === activeIndex;

            return (
              <Box
                key={link.to}
                ref={(el: HTMLDivElement | null) => {
                  itemRefs.current[index] = el;
                }}
              >
                <AppLink
                  to={link.to}
                  sx={{
                    ...linkSx,
                    color: isActive ? 'black' : 'white',
                  }}
                >
                  {link.label}
                </AppLink>
              </Box>
            );
          })}
        </Stack>
        <Box />
      </Toolbar>
    </AppBar>
  );
};
