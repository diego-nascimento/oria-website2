import { MaxWidth } from '@/shared/components/MaxWidth';
import { Stack } from '@mui/material';
import { Container } from './components/Container';

export const MulherAndando = () => {
  return (
    <Stack
      sx={{
        backgroundImage: 'url(/freedom.jpg)',
        backgroundPosition: 'top',

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Stack>
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
      </Stack>
    </Stack>
  );
};
