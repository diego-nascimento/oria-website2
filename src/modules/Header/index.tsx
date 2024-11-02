'use client';

import { MaxWidth } from '@/shared/components/MaxWidth';
import { Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Image from 'next/image';

const items = [
  {
    text: 'Sobre',
    url: '#sobre-mim',
  },
  {
    text: 'Tratamentos',
    url: '#tratamentos',
  },
  {
    text: 'Emoções',
    url: '#emocoes',
  },
  {
    text: 'Psicoterapia',
    url: '#psicoterapia',
  },
  {
    text: 'Avaliações',
    url: '#avaliacoes',
  },
  {
    text: 'Dúvidas',
    url: '#duvidas',
  },
];

export const Header = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const isTrigged = useScrollTrigger({
    threshold: 0,
  });
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
      setTimeout(() => mainControls.start('menuItemVisible'), 1000);
    }
  }, [isInView, mainControls]);

  const [anchorEl, setAnchorEl] = useState<boolean>(false);
  const open = Boolean(anchorEl);
  const toggleDrawer = () => {
    setAnchorEl(!anchorEl);
  };

  useEffect(() => {
    if (matches) setAnchorEl(false);
  }, [matches]);

  return (
    <>
      <Drawer
        sx={{
          display: {
            xs: 'block',
            md: 'none',
          },
        }}
        anchor={'left'}
        open={open}
        onClose={toggleDrawer}
        variant="temporary"
        PaperProps={{
          sx: {
            width: '300px',
            maxWidth: '70%',
          },
        }}
      >
        <Box
          sx={{
            width: '100%',
          }}
          role="presentation"
        >
          <List>
            {items.map((item) => (
              <ListItem
                key={item.url}
                disablePadding
                onClick={toggleDrawer}
                component={Link}
                href={item.url}
              >
                <ListItemButton>
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: 600,
                      color: 'secondary.main',
                    }}
                    primary={item.text}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      <AppBar color="secondary" position="sticky" elevation={isTrigged ? 8 : 0}>
        <Toolbar>
          <Stack
            flex={1}
            zIndex={theme.zIndex.drawer}
            paddingY={{
              xs: 0,
              md: 1,
            }}
            ref={ref}
          >
            <MaxWidth>
              <Stack
                flex={1}
                direction={{
                  xs: 'row-reverse',
                  md: 'row',
                }}
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Link href={'/#home'}>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, x: -30, scale: 0.99 },
                      visible: { opacity: 1, x: 0, y: 0, scale: 1 },
                    }}
                    initial={'hidden'}
                    animate={mainControls}
                    transition={{ duration: 1, delay: 0.25, ease: 'easeInOut' }}
                  >
                    <Image
                      src={'/logo.png'}
                      width={130}
                      height={30}
                      alt="Ariane Miranda Logo"
                    />
                  </motion.div>
                </Link>

                <Stack
                  sx={{
                    display: {
                      xs: 'block',
                      md: 'none',
                    },
                  }}
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial={'hidden'}
                    animate={mainControls}
                    transition={{ duration: 1, delay: 1, ease: 'easeInOut' }}
                  >
                    <IconButton onClick={toggleDrawer}>
                      <MenuIcon
                        sx={{
                          color: 'secondary.contrastText',
                        }}
                      />
                    </IconButton>
                  </motion.div>
                </Stack>
                <Stack
                  sx={{
                    display: {
                      xs: 'none',
                      md: 'flex',
                    },
                  }}
                  direction={'row'}
                >
                  {items.map((item, index) => {
                    return (
                      <motion.div
                        variants={{
                          menuItemHidden: { opacity: 0, y: 10, scale: 0.99 },
                          menuItemVisible: { opacity: 1, y: 0, scale: 1 },
                        }}
                        initial={'menuItemHidden'}
                        animate={mainControls}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.25,
                          ease: 'easeOut',
                        }}
                        key={item.url}
                      >
                        <Link href={item.url} key={item.url}>
                          <Button
                            variant="text"
                            sx={{
                              fontSize: 16,
                              fontFamily: 'Bree Serif, serif',
                              fontWeight: 400,
                              color: 'primary.contrastText',
                            }}
                          >
                            {item.text}
                          </Button>
                        </Link>
                      </motion.div>
                    );
                  })}
                </Stack>
              </Stack>
            </MaxWidth>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};
