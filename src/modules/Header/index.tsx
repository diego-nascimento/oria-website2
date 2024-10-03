'use client';

import { MaxWidth } from '@/shared/components/MaxWidth';
import { Menu } from '@mui/icons-material';
import {
  AppBar,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import Link from 'next/link';

export const Header = () => {
  const isTrigged = useScrollTrigger({
    threshold: 0,
  });

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
              <Typography
                fontFamily={'Great Vibes'}
                fontSize={{
                  xs: 24,
                  md: 42,
                }}
              >
                Ariane Miranda
              </Typography>

              <Stack
                sx={{
                  display: {
                    xs: 'block',
                    md: 'none',
                  },
                }}
              >
                <IconButton>
                  <Menu color="primary" />
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
                <Link href={'#'}>
                  <Button color="primary" variant="text">
                    Home
                  </Button>
                </Link>

                <Button color="primary" variant="text">
                  Informações
                </Button>
                <Link href={'#comentarios'}>
                  <Button color="primary" variant="text">
                    Comentarios
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
