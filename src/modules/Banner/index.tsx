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
            <Typography
              fontSize={{
                xs: 28,
                md: 32,
              }}
              fontWeight={700}
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
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
            >
              estudando e vivendo psicologia
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 14, md: 4 }}>
            <Typography
              fontSize={{
                xs: 28,
                md: 32,
              }}
              fontWeight={700}
              textAlign={'center'}
            >
              Terapeuta Destaque ​Profissional e Empresarial em ​2024- Prime
              Pesquisas
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 14, md: 4 }}>
            <Typography
              fontSize={{
                xs: 28,
                md: 32,
              }}
              fontWeight={700}
              textAlign={{
                md: 'right',
                xs: 'center',
              }}
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
            >
              Em saúde mental materna e ​perinatalidade
            </Typography>
          </Grid2>
        </Grid2>
      </MaxWidth>
    </Stack>
  );
};
