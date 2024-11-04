'use client';
import { MaxWidth } from '@/shared/components/MaxWidth';
import {
  Button,
  Grid2,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import Link from 'next/link';

import { motion } from 'framer-motion';

export const Home = () => {
  const theme = useTheme();
  const mediaquery = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <Stack alignItems={'center'} bgcolor={'secondary.main'} id="home">
      <MaxWidth>
        <Stack
          width={'100%'}
          justifyContent={'center'}
          minHeight={'85vh'}
          paddingX={2}
        >
          <Grid2
            marginTop={{
              xs: 2,
              lg: 0,
            }}
            container
            padding={0}
            spacing={{
              xs: 4,
            }}
            minHeight={'85vh'}
          >
            <Grid2
              size={{
                xs: 12,
                lg: 5,
              }}
              alignItems={'center'}
            >
              <Stack height={'100%'} justifyContent={'center'} gap={4}>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.99 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  initial={'hidden'}
                  animate={'visible'}
                  transition={{
                    duration: 1.2,
                    delay: 0,
                    ease: 'easeOut',
                  }}
                >
                  <Typography
                    variant="h1"
                    textTransform={'uppercase'}
                    fontSize={{
                      xs: 14,
                      md: 16,
                    }}
                    fontWeight={600}
                    color="#fff"
                    letterSpacing={2}
                    component={'span'}
                  >
                    Psicologa de Mães Gestantes
                  </Typography>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.99 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  initial={'hidden'}
                  animate={'visible'}
                  transition={{
                    duration: 1.2,
                    delay: 0,
                    ease: 'easeOut',
                  }}
                >
                  <Typography
                    variant="h1"
                    fontSize={{
                      xs: 28,
                      md: 50,
                    }}
                    letterSpacing={1}
                    fontWeight={600}
                    color="secondary.contrastText"
                    component={'p'}
                  >
                    Após o positivo ​existe o​ <strong>desconhecido</strong>.
                    Você não precisa ​enfrentar tudo isso​{' '}
                    <strong>sozinha</strong>.
                  </Typography>
                </motion.div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -100, scale: 0.99 },
                    visible: { opacity: 1, x: 0, scale: 1 },
                  }}
                  initial={'hidden'}
                  animate={'visible'}
                  transition={{
                    duration: 0.75,
                    delay: 0.45,
                    ease: 'easeOut',
                  }}
                >
                  <Stack
                    component={Link}
                    href="https://wa.me/message/WFTAHMJVVAHKI1"
                    target="_blank"
                    alignItems={{
                      xs: 'center',
                      md: 'flex-start',
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size={mediaquery ? 'large' : 'medium'}
                    >
                      FALE COMIGO AGORA
                    </Button>
                  </Stack>
                </motion.div>
              </Stack>
            </Grid2>
            <Grid2
              component={motion.div}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
              initial={'hidden'}
              animate={'visible'}
              transition={{
                duration: 0.5,
                delay: 1,
                ease: 'easeOut',
              }}
              size={{
                xs: 12,
                lg: 7,
              }}
              position={'relative'}
              minHeight={{
                xs: '380px',
                md: '1000px',
                lg: 'auto',
              }}
              sx={{
                backgroundImage: 'url(/ariane.png)',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            ></Grid2>
          </Grid2>
        </Stack>
      </MaxWidth>
      <Stack
        width={'100%'}
        height={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
        bgcolor={'#001F3F'}
        marginTop={{
          md: 0,
        }}
        paddingX={2}
        paddingY={{
          xs: 4,
          md: 8,
        }}
        sx={{
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px -70px 55px',
          zIndex: 10,
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          initial={'hidden'}
          animate={'visible'}
          transition={{
            duration: 0.5,
            delay: 1,
            ease: 'easeOut',
          }}
        >
          <Typography
            variant="h3"
            color="#fff"
            fontSize={{
              xs: 15,
              md: 42,
            }}
            fontWeight={700}
            textAlign={'center'}
          >
            Psicóloga para Mães - Psicólogas De Gestante - Psicóloga Online
          </Typography>
        </motion.div>
      </Stack>
    </Stack>
  );
};
