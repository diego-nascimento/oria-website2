import { Stack, Typography, Box, Grid } from '@mui/material';
import { MaxWidth } from '@/shared/components/MaxWidth';
import { Footer } from '@/modules/Footer';
import { WhatsappButton } from '@/modules/WhatsappButton';
import PsychologyIcon from '@mui/icons-material/Psychology';

interface ComingSoonProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export const ComingSoon = ({ timeLeft }: ComingSoonProps) => {
  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <Stack width={'100%'} minHeight={'100vh'} overflow={'auto'}>
      <WhatsappButton />

      {/* Hero Section - Em Breve */}
      <Stack
        alignItems={'center'}
        bgcolor={'secondary.main'}
        minHeight={'100vh'}
        py={4}
      >
        <MaxWidth>
          <Stack
            width={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
            minHeight={'calc(100vh - 64px)'}
            paddingX={{
              xs: 2,
              md: 2,
            }}
            gap={{
              xs: 3,
              md: 4,
            }}
          >
            {/* Ícone principal */}
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              width={120}
              height={120}
              borderRadius="50%"
              bgcolor="primary.main"
              sx={{
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%': {
                    transform: 'scale(1)',
                    opacity: 1,
                  },
                  '50%': {
                    transform: 'scale(1.1)',
                    opacity: 0.8,
                  },
                  '100%': {
                    transform: 'scale(1)',
                    opacity: 1,
                  },
                },
              }}
            >
              <PsychologyIcon sx={{ fontSize: 60, color: 'white' }} />
            </Box>

            {/* Título principal */}
            <Typography
              variant="h1"
              fontSize={{
                xs: 28,
                md: 42,
                lg: 48,
              }}
              fontWeight={700}
              color="secondary.contrastText"
              textAlign="center"
              letterSpacing={1}
              lineHeight={1.2}
            >
              Em Breve
            </Typography>

            {/* Subtítulo */}
            <Typography
              variant="h2"
              fontSize={{
                xs: 18,
                md: 22,
              }}
              fontWeight={400}
              color="secondary.contrastText"
              textAlign="center"
              lineHeight={1.6}
              maxWidth="800px"
            >
              Uma experiência única de psicologia perinatal está chegando.
              Prepare-se para descobrir um novo jeito de cuidar da sua saúde
              mental durante a gestação.
            </Typography>

            {/* Contador */}
            <Grid container spacing={1} mt={4} justifyContent="center">
              <Grid item xs={3} md="auto">
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    width: { xs: '100%', md: 100 },
                    height: { xs: 65, sm: 80, md: 100 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 2,
                    p: { xs: 2, md: 3 },
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Typography
                    variant="h2"
                    fontSize={{
                      xs: 24,
                      md: 40,
                    }}
                    fontWeight={700}
                    color="white"
                  >
                    {days}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="rgba(255, 255, 255, 0.8)"
                    fontSize={14}
                  >
                    Dias
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={3} md="auto">
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    width: { xs: '100%', md: 100 },
                    height: { xs: 65, sm: 80, md: 100 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 2,
                    p: { xs: 2, md: 3 },
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Typography
                    variant="h2"
                    fontSize={{
                      xs: 24,
                      md: 40,
                    }}
                    fontWeight={700}
                    color="white"
                  >
                    {hours.toString().padStart(2, '0')}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="rgba(255, 255, 255, 0.8)"
                    fontSize={14}
                  >
                    Horas
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={3} md="auto">
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    width: { xs: '100%', md: 100 },
                    height: { xs: 65, sm: 80, md: 100 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 2,
                    p: { xs: 2, md: 3 },
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Typography
                    variant="h2"
                    fontSize={{
                      xs: 24,
                      md: 40,
                    }}
                    fontWeight={700}
                    color="white"
                  >
                    {minutes.toString().padStart(2, '0')}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="rgba(255, 255, 255, 0.8)"
                    fontSize={14}
                  >
                    Minutos
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={3} md="auto">
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    width: { xs: '100%', md: 100 },
                    height: { xs: 65, sm: 80, md: 100 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 2,
                    p: { xs: 2, md: 3 },
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  <Typography
                    variant="h2"
                    fontSize={{
                      xs: 24,
                      md: 40,
                    }}
                    fontWeight={700}
                    color="white"
                  >
                    {seconds.toString().padStart(2, '0')}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="rgba(255, 255, 255, 0.8)"
                    fontSize={14}
                  >
                    Segundos
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            {/* Data de lançamento */}
            <Typography
              variant="h3"
              fontSize={{
                xs: 16,
                md: 18,
              }}
              color="rgba(255, 255, 255, 0.8)"
              textAlign="center"
              mt={4}
            >
              Lançamento: 17 de Agosto de 2025
            </Typography>

            {/* Informações adicionais */}
            <Stack
              direction={{
                xs: 'column',
                md: 'row',
              }}
              gap={{
                xs: 2,
                md: 3,
              }}
              mt={4}
              p={{
                xs: 2,
                md: 3,
              }}
              borderRadius={2}
              bgcolor="rgba(255, 255, 255, 0.1)"
              sx={{
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                width: '100%',
              }}
            >
              <Box flex={1} textAlign="center">
                <Typography
                  variant="h6"
                  color="primary.main"
                  fontWeight={600}
                  mb={1}
                >
                  Psicologia Especializada
                </Typography>
                <Typography
                  variant="body2"
                  color="secondary.contrastText"
                  fontSize={14}
                >
                  Atendimento especializado para mães gestantes e pós-parto
                </Typography>
              </Box>

              <Box flex={1} textAlign="center">
                <Typography
                  variant="h6"
                  color="primary.main"
                  fontWeight={600}
                  mb={1}
                >
                  Suporte Online
                </Typography>
                <Typography
                  variant="body2"
                  color="secondary.contrastText"
                  fontSize={14}
                >
                  Consultas online com flexibilidade de horários
                </Typography>
              </Box>

              <Box flex={1} textAlign="center">
                <Typography
                  variant="h6"
                  color="primary.main"
                  fontWeight={600}
                  mb={1}
                >
                  Acompanhamento Completo
                </Typography>
                <Typography
                  variant="body2"
                  color="secondary.contrastText"
                  fontSize={14}
                >
                  Desde a gestação até os primeiros meses do bebê
                </Typography>
              </Box>
            </Stack>

            {/* Mensagem de contato */}
            <Typography
              variant="body1"
              fontSize={{
                xs: 16,
                md: 18,
              }}
              color="secondary.contrastText"
              textAlign="center"
              mt={4}
            >
              Enquanto isso, você pode entrar em contato conosco através do
              WhatsApp para agendar uma consulta ou tirar suas dúvidas.
            </Typography>
          </Stack>
        </MaxWidth>
      </Stack>

      <Footer />
    </Stack>
  );
};
