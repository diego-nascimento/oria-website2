import { MaxWidth } from '@/shared/components/MaxWidth';
import { Menu as MenuIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
} from '@mui/material';
import Link from 'next/link';

import Image from 'next/image';
import { AppBar } from './components/AppBar';
import { MobileDrawer } from './components/MobileDrawer';
import { ListItemContainer } from './components/ListItemContainer';
import { IconButtonContainer } from './components/IconButtonContainer';
import { LogoWrapper } from './components/LogoWrapper';
import { MenuButtonContainer } from './components/MenuButtonContainer';
import { DesktopMenuItemContainer } from './components/DesktopMenuItemContainer';
import { Wrapper } from './components/Wrapper.tsx';

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
  return (
    <>
      <MobileDrawer>
        <Box
          sx={{
            width: '100%',
          }}
          role="presentation"
        >
          <List>
            {items.map((item) => (
              <ListItemContainer key={item.url} url={item.url}>
                <ListItemButton>
                  <ListItemText
                    primaryTypographyProps={{
                      fontWeight: 600,
                      color: 'secondary.main',
                    }}
                    primary={item.text}
                  />
                </ListItemButton>
              </ListItemContainer>
            ))}
          </List>
          <Divider />
        </Box>
      </MobileDrawer>

      <AppBar>
        <Toolbar>
          <Wrapper>
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
                  <LogoWrapper>
                    <Image
                      src={'/logo.png'}
                      width={130}
                      height={30}
                      alt="Ariane Miranda Logo"
                    />
                  </LogoWrapper>
                </Link>

                <Stack
                  sx={{
                    display: {
                      xs: 'block',
                      md: 'none',
                    },
                  }}
                >
                  <MenuButtonContainer>
                    <IconButtonContainer>
                      <MenuIcon
                        sx={{
                          color: 'secondary.contrastText',
                        }}
                      />
                    </IconButtonContainer>
                  </MenuButtonContainer>
                </Stack>
                <Stack
                  component={'nav'}
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
                      <DesktopMenuItemContainer key={item.url} index={index}>
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
                      </DesktopMenuItemContainer>
                    );
                  })}
                </Stack>
              </Stack>
            </MaxWidth>
          </Wrapper>
        </Toolbar>
      </AppBar>
    </>
  );
};
