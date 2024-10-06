'use client';

import { MaxWidth } from '@/shared/components/MaxWidth';
import { Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

export const Header = () => {
  const isTrigged = useScrollTrigger({
    threshold: 0,
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      color="secondary"
      position="sticky"
      sx={{ top: 0 }}
      elevation={isTrigged ? 8 : 0}
    >
      <Toolbar>
        <Stack
          flex={1}
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
                <IconButton onClick={handleClick}>
                  <MenuIcon sx={{}} />
                </IconButton>
                <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
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
                </Menu>
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
  );
};
