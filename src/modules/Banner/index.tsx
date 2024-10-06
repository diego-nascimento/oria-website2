import { MaxWidth } from '@/shared/components/MaxWidth';
import { Grid2, Stack, Typography } from '@mui/material';

export const Banner = () => {
  return (
    <Stack
      paddingY={{
        xs: 4,
        md: 14,
      }}
      paddingX={{
        xs: 2,
      }}
      bgcolor={'secondary.main'}
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
  );
};
