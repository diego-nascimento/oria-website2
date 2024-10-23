'use client';
import { MaxWidth } from '@/shared/components/MaxWidth';

import { Box, Button, Grid2, Stack, Typography, useTheme } from '@mui/material';
import { AssetImage } from './assets/assetImage';
import Link from 'next/link';

export const Second = () => {
  const theme = useTheme();
  return (
    <Stack id="emocoes">
      <MaxWidth>
        <Stack paddingX={2} paddingY={4} gap={4}>
          <Stack>
            <Typography
              fontSize={{
                xs: 20,

                md: 40,
              }}
              textAlign={'center'}
            >
              Existem <span style={{ fontWeight: 700 }}>mulheres</span> com a
              sorte de uma gestação de ​{' '}
              <span style={{ fontWeight: 700 }}>{`"script perfeito"`}</span> um
              parto dos sonhos e uma{' '}
              <span
                style={{
                  color: theme.palette.primary.main,
                }}
              >
                maternidade de novela...
              </span>
            </Typography>
          </Stack>
          <Stack
            position={'relative'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box position={'absolute'} maxWidth={'300px'}>
              <img src="/baby.svg" />
            </Box>
            <Box width={'100%'} maxWidth={'330px'}>
              <AssetImage />
            </Box>
          </Stack>
          <Stack>
            <Typography
              fontSize={{
                xs: 20,
                md: 40,
              }}
              textAlign={'center'}
            >
              Mas como <span style={{ fontWeight: 700 }}>você</span>, muitas{' '}
              <span
                style={{
                  color: theme.palette.primary.main,
                }}
              >
                mulheres
              </span>{' '}
              que atendo vivem ​algum desafio nessa{' '}
              <span style={{ fontWeight: 700 }}>fase</span>. Enfrentar tudo isso
              pode ​trazer algumas consequências:
            </Typography>
          </Stack>
          <Grid2
            container
            spacing={{
              xs: 1,
              md: 2,
            }}
          >
            <Grid2
              size={{
                xs: 6,
                md: 3,
              }}
              sx={{
                bgcolor: theme.palette.secondary.main,
                borderRadius: 50,
                paddingY: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                fontSize={22}
                textTransform={'capitalize'}
                fontWeight={700}
                color="#ffffff"
              >
                ansiedade
              </Typography>
            </Grid2>
            <Grid2
              size={{
                xs: 6,
                md: 3,
              }}
              sx={{
                bgcolor: theme.palette.secondary.main,
                borderRadius: 50,
                paddingY: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                fontSize={22}
                textTransform={'capitalize'}
                fontWeight={700}
                color="#ffffff"
              >
                medo
              </Typography>
            </Grid2>
            <Grid2
              size={{
                xs: 6,
                md: 3,
              }}
              sx={{
                bgcolor: theme.palette.secondary.main,
                borderRadius: 50,
                paddingY: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                fontSize={22}
                textTransform={'capitalize'}
                fontWeight={700}
                color="#ffffff"
              >
                culpa
              </Typography>
            </Grid2>
            <Grid2
              size={{
                xs: 6,
                md: 3,
              }}
              sx={{
                bgcolor: theme.palette.secondary.main,
                borderRadius: 50,
                paddingY: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                fontSize={22}
                textTransform={'capitalize'}
                fontWeight={700}
                color="#ffffff"
              >
                frustração
              </Typography>
            </Grid2>
            <Grid2
              size={{
                xs: 6,
                md: 3,
              }}
              sx={{
                bgcolor: theme.palette.secondary.main,
                borderRadius: 50,
                paddingY: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                fontSize={22}
                textTransform={'capitalize'}
                fontWeight={700}
                color="#ffffff"
              >
                tristeza
              </Typography>
            </Grid2>
            <Grid2
              size={{
                xs: 6,
                md: 3,
              }}
              sx={{
                bgcolor: theme.palette.secondary.main,
                borderRadius: 50,
                paddingY: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                fontSize={22}
                textTransform={'capitalize'}
                fontWeight={700}
                color="#ffffff"
              >
                solidão
              </Typography>
            </Grid2>
            <Grid2
              size={{
                xs: 6,
                md: 3,
              }}
              sx={{
                bgcolor: theme.palette.secondary.main,
                borderRadius: 50,
                paddingY: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                fontSize={22}
                textTransform={'capitalize'}
                fontWeight={700}
                color="#ffffff"
              >
                raiva
              </Typography>
            </Grid2>
            <Grid2
              size={{
                xs: 6,
                md: 3,
              }}
              sx={{
                bgcolor: theme.palette.secondary.main,
                borderRadius: 50,
                paddingY: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                fontSize={22}
                textTransform={'capitalize'}
                fontWeight={700}
                color="#ffffff"
              >
                insegurança
              </Typography>
            </Grid2>
          </Grid2>
          <Stack>
            <Typography
              fontSize={{
                xs: 20,

                md: 40,
              }}
              textAlign={'center'}
            >
              Essa hoje é sua <strong>realidade</strong>? Tem te{' '}
              <strong>incomodado</strong>? Fique tranquila,{' '}
              <strong>eu sei</strong> como te <strong>ajudar</strong>.
            </Typography>
          </Stack>
          <Stack alignItems={'center'}>
            <Box
              component={Link}
              href="https://wa.me/message/5MAMLEFBR547D1"
              target="_blank"
            >
              <Button variant="contained" size="large">
                Quero Ajuda
              </Button>
            </Box>
          </Stack>
        </Stack>
      </MaxWidth>
    </Stack>
  );
};
