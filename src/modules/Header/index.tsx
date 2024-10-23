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
  Typography,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
            width: '100%',
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
      <AppBar
        color="secondary"
        position="sticky"
        // sx={{ top: 0, zIndex: theme.zIndex.drawer + 1 }}
        elevation={isTrigged ? 8 : 0}
      >
        <Toolbar>
          <Stack
            flex={1}
            zIndex={theme.zIndex.drawer}
            paddingY={{
              xs: 0,
              md: 1,
            }}
          >
            <MaxWidth>
              <Stack
                flex={1}
                direction={{
                  xs: 'row-reverse',
                  md: 'row',
                }}
                alignItems={'flex-start'}
                justifyContent={'space-between'}
              >
                <Link href={'/#home'}>
                  <Button>
                    <Typography
                      fontFamily={'Bree Serif, serif'}
                      fontWeight={400}
                      fontSize={{
                        xs: 24,
                        md: 32,
                      }}
                      color="secondary.contrastText"
                    >
                      Ariane Miranda
                    </Typography>
                  </Button>
                </Link>

                <Stack
                  sx={{
                    display: {
                      xs: 'block',
                      md: 'none',
                    },
                  }}
                >
                  <IconButton onClick={toggleDrawer}>
                    <MenuIcon
                      sx={{
                        color: 'secondary.contrastText',
                      }}
                    />
                  </IconButton>
                </Stack>
                <Stack
                  sx={{
                    display: {
                      xs: 'none',
                      md: 'block',
                    },
                  }}
                >
                  {items.map((item) => {
                    return (
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
