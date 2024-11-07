import { MaxWidth } from '@/shared/components/MaxWidth';
import { Stack } from '@mui/material';
import { Container } from './components/Container';

export const MulherAndando = () => {
  return (
    <Stack>
      <Stack
        position={'relative'}
        sx={{
          backgroundImage: 'url(videomuie.mp4)',
          overflow: 'hidden',
        }}
      >
        <MaxWidth>
          <Stack
            paddingX={2}
            paddingY={{
              xs: 8,
              md: 16,
            }}
            alignItems={'flex-end'}
            justifyContent={'center'}
          >
            <Stack justifyContent={'center'}>
              <Stack alignItems={'flex-end'}>
                <Container />
              </Stack>
            </Stack>
          </Stack>
        </MaxWidth>
        <Stack
          width={{
            xs: '200vw',
            md: '100vw',
          }}
          right={{
            xs: -250,
            md: 0,
          }}
          sx={{
            height: '1200px',
            objectFit: 'cover',
            position: 'absolute',

            zIndex: '-1',
          }}
        >
          <video autoPlay loop muted>
            <source src={'videomuie.mp4'} type="video/mp4" />
          </video>
        </Stack>
      </Stack>
    </Stack>
  );
};
