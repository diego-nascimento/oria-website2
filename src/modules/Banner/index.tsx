'use client';
import { MaxWidth } from '@/shared/components/MaxWidth';
import { Grid2, Stack, Typography } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';

export const Banner = () => {
  return (
    <React.Fragment>
      <Stack
        paddingY={{
          xs: 4,
          md: 14,
        }}
        paddingX={{
          xs: 2,
        }}
        bgcolor={'secondary.main'}
        display={{
          xs: 'none',
          lg: 'flex',
        }}
      >
        <MaxWidth>
          <Grid2
            container
            spacing={{
              xs: 8,
              md: 2,
            }}
          >
            <Grid2 size={{ xs: 14, md: 4 }}>
              <Stack justifyContent={'center'}>
                <Typography
                  fontSize={{
                    xs: 28,
                    md: 42,
                  }}
                  fontWeight={700}
                  textAlign={{
                    xs: 'center',
                    md: 'left',
                  }}
                  color="#F8F6F1"
                >
                  +7 anos
                </Typography>
                <Typography
                  fontSize={{
                    xs: 20,
                    md: 28,
                  }}
                  fontWeight={400}
                  textAlign={{
                    xs: 'center',
                    md: 'left',
                  }}
                  color="#F8F6F1"
                >
                  vivendo psicologia
                </Typography>
              </Stack>
            </Grid2>
            <Grid2 size={{ xs: 14, md: 4 }}>
              <Typography
                fontSize={{
                  xs: 28,
                  md: 32,
                }}
                fontWeight={700}
                textAlign={'center'}
                color="#F8F6F1"
              >
                Terapeuta Destaque ​Profissional e Empresarial em ​2024 - Prime
                Pesquisas
              </Typography>
            </Grid2>
            <Grid2 size={{ xs: 14, md: 4 }}>
              <Typography
                fontSize={{
                  xs: 28,
                  md: 42,
                }}
                fontWeight={700}
                textAlign={{
                  md: 'right',
                  xs: 'center',
                }}
                color="#F8F6F1"
              >
                +2 anos
              </Typography>
              <Typography
                fontSize={{
                  xs: 20,
                  md: 28,
                }}
                fontWeight={400}
                textAlign={{
                  md: 'right',
                  xs: 'center',
                }}
                lineHeight={{
                  xs: '24px',
                  md: '32px',
                }}
                color="#F8F6F1"
              >
                Em saúde mental materna e ​perinatalidade
              </Typography>
            </Grid2>
          </Grid2>
        </MaxWidth>
      </Stack>

      <Stack
        bgcolor={'secondary.main'}
        display={{
          xs: 'flex',
          lg: 'none',
        }}
        paddingBottom={2}
      >
        <Carousel
          autoPlay
          animation="slide"
          swipe
          duration={700}
          indicators
          stopAutoPlayOnHover
        >
          <Stack
            justifyContent={'center'}
            alignItems={'center'}
            height={'400px'}
            paddingX={4}
          >
            <Typography
              fontSize={{
                xs: 28,
                md: 42,
              }}
              fontWeight={700}
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              color="#F8F6F1"
            >
              +7 anos
            </Typography>
            <Typography
              fontSize={{
                xs: 20,
                md: 28,
              }}
              fontWeight={400}
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
              color="#F8F6F1"
            >
              vivendo psicologia
            </Typography>
          </Stack>
          <Stack
            justifyContent={'center'}
            alignItems={'center'}
            height={'400px'}
            paddingX={4}
          >
            <Typography
              fontSize={{
                xs: 28,
                md: 32,
              }}
              fontWeight={700}
              textAlign={'center'}
              color="#F8F6F1"
            >
              Terapeuta Destaque ​Profissional e Empresarial em ​2024 - Prime
              Pesquisas
            </Typography>
          </Stack>

          <Stack
            justifyContent={'center'}
            alignItems={'center'}
            height={'400px'}
            paddingX={4}
          >
            <Typography
              fontSize={{
                xs: 28,
                md: 42,
              }}
              fontWeight={700}
              textAlign={{
                md: 'right',
                xs: 'center',
              }}
              color="#F8F6F1"
            >
              +2 anos
            </Typography>
            <Typography
              fontSize={{
                xs: 20,
                md: 28,
              }}
              fontWeight={400}
              textAlign={{
                md: 'right',
                xs: 'center',
              }}
              lineHeight={{
                xs: '24px',
                md: '32px',
              }}
              color="#F8F6F1"
            >
              Em saúde mental materna e ​perinatalidade
            </Typography>
          </Stack>
        </Carousel>
      </Stack>
    </React.Fragment>
  );
};
