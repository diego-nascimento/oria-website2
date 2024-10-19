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
        anchor={'top'}
        open={open}
        onClose={toggleDrawer}
        variant="temporary"
        PaperProps={{
          sx: {
            top: '56px',
          },
        }}
      >
        <Box
          sx={{
            width: 'auto',
          }}
          role="presentation"
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  alignItems: 'center',
                }}
              >
                <ListItemButton
                  sx={{
                    '&:hover': {
                      backgroundColor: 'secondary.main',
                      color: 'background.default',
                      transition: 'background .15s',
                    },
                  }}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      textAlign: 'center',
                    }}
                    primary={text}
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
        sx={{ top: 0, zIndex: theme.zIndex.drawer + 1 }}
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
                alignItems={'center'}
                justifyContent={'space-between'}
              >
                <Link href={'/#home'}>
                  <Button>
                    <Typography
                      fontFamily={'Great Vibes'}
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

                  {/* <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                  <Link href={'#sobre-mim'}>
                    <MenuItem onClick={handleClose}>
                      <Typography
                        sx={{
                          textDecoration: '',
                          color: 'secondary.main',
                        }}
                      >
                        Sobre
                      </Typography>
                    </MenuItem>
                  </Link>
                  <Link href={'/#desafios'}>
                    <MenuItem onClick={handleClose}>
                      <Typography
                        sx={{
                          textDecoration: '',
                          color: 'secondary.main',
                        }}
                      >
                        Desafios
                      </Typography>
                    </MenuItem>
                  </Link>
                  <Link href={'/#psicoterapia'}>
                    <MenuItem onClick={handleClose}>
                      <Typography
                        sx={{
                          textDecoration: '',
                          color: 'secondary.main',
                        }}
                      >
                        Psicoterapia
                      </Typography>
                    </MenuItem>
                  </Link>
                  <Link href={'/#comentarios'}>
                    <MenuItem onClick={handleClose}>
                      <Typography
                        sx={{
                          textDecoration: '',
                          color: 'secondary.main',
                        }}
                      >
                        Comentários
                      </Typography>
                    </MenuItem>
                  </Link>
                </Menu> */}
                </Stack>
                <Stack
                  sx={{
                    display: {
                      xs: 'none',
                      md: 'block',
                    },
                  }}
                >
                  <Link href={'/#sobre-mim'}>
                    <Button
                      variant="text"
                      sx={{
                        fontSize: 16,

                        color: 'primary.contrastText',
                      }}
                    >
                      Sobre
                    </Button>
                  </Link>
                  <Link href={'/#desafios'}>
                    <Button
                      variant="text"
                      sx={{
                        fontSize: 16,

                        color: 'primary.contrastText',
                      }}
                    >
                      Desafios
                    </Button>
                  </Link>

                  <Link href={'/#psicoterapia'}>
                    <Button
                      variant="text"
                      sx={{
                        fontSize: 16,

                        color: 'primary.contrastText',
                      }}
                    >
                      psicoterapia
                    </Button>
                  </Link>
                  <Link href={'/#comentarios'}>
                    <Button
                      variant="text"
                      sx={{
                        fontSize: 16,

                        color: 'primary.contrastText',
                      }}
                    >
                      Comentários
                    </Button>
                  </Link>
                </Stack>
              </Stack>
            </MaxWidth>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};
