import { Stack, Typography, Box, CircularProgress } from '@mui/material';
import { MaxWidth } from '@/shared/components/MaxWidth';
import { Header } from '@/modules/Header';
import { Footer } from '@/modules/Footer';
import { WhatsappButton } from '@/modules/WhatsappButton';

export default function GestaoDeManutencao() {
  return (
    <Stack width={'100%'} height={'100vh'} overflow={'auto'}>
      <WhatsappButton />
      
      
      {/* Seção principal em construção */}
      <Stack alignItems={'center'} bgcolor={'secondary.main'} minHeight={'85vh'}>
        <MaxWidth>
          <Stack
            width={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
            minHeight={'85vh'}
            paddingX={{
              xs: 2,
              md: 2,
            }}
            gap={{
              xs: 2,
              md: 4,
            }}
          >
          {/* Ícone de construção */}
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
            <CircularProgress 
              size={60} 
              thickness={4}
              sx={{ 
                color: 'white',
                '& .MuiCircularProgress-circle': {
                  strokeLinecap: 'round',
                },
              }} 
            />
          </Box>

          {/* Título principal */}
          <Typography
            variant="h1"
            fontSize={{
              xs: 32,
              md: 48,
              lg: 56,
            }}
            fontWeight={700}
            color="secondary.contrastText"
            textAlign="center"
            letterSpacing={1}
          >
            Página em Construção
          </Typography>

          {/* Subtítulo */}
          <Typography
            variant="h2"
            fontSize={{
              xs: 18,
              md: 24,
            }}
            fontWeight={400}
            color="secondary.contrastText"
            textAlign="center"
           
            lineHeight={1.5}
          >
            Estamos trabalhando para trazer uma experiência incrível para você.
            Em breve, nossa página estará pronta com todo o conteúdo para mulheres.
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
            Enquanto isso, você pode entrar em contato conosco através do WhatsApp 
            para agendar uma consulta ou tirar suas dúvidas.
                      </Typography>
          </Stack>
        </MaxWidth>
      </Stack>
      
      <Footer />
    </Stack>
  );
}