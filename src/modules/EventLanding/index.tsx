import {
  Stack,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Container,
} from '@mui/material';
import { MaxWidth } from '@/shared/components/MaxWidth';
import { Footer } from '@/modules/Footer';
import { WhatsappButton } from '@/modules/WhatsappButton';
import Link from 'next/link';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookIcon from '@mui/icons-material/Book';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SpaIcon from '@mui/icons-material/Spa';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

export const EventLanding = () => {
  return (
    <Stack width={'100%'} height={'100vh'} overflow={'auto'}>
      <WhatsappButton />

      {/* Hero Section */}
      <Stack
        alignItems={'center'}
        bgcolor={'secondary.main'}
        minHeight={'60vh'}
      >
        <MaxWidth>
          <Stack
            width={'100%'}
            justifyContent={'center'}
            alignItems={'center'}
            minHeight={'60vh'}
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
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': {
                    transform: 'translateY(0px)',
                  },
                  '50%': {
                    transform: 'translateY(-10px)',
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
              O que você carrega importa.
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
              E pode ser cuidado com presença. Bem-vinda ao seu espaço de
              continuação — aqui você encontra acolhimento, ferramentas e
              possibilidades para seguir olhando pra dentro, com mais clareza e
              menos culpa.
            </Typography>
          </Stack>
        </MaxWidth>
      </Stack>

      {/* Seção de Presentes */}
      <Stack bgcolor="background.default" py={8}>
        <MaxWidth>
          <Container maxWidth="lg">
            <Stack gap={6}>
              {/* Título da seção */}
              <Stack alignItems="center" gap={2}>
                <Typography
                  variant="h2"
                  fontSize={{
                    xs: 32,
                    md: 40,
                  }}
                  fontWeight={700}
                  color="primary.main"
                  textAlign="center"
                >
                  🎁 Presentes para você
                </Typography>
                <Typography
                  variant="h3"
                  fontSize={{
                    xs: 16,
                    md: 18,
                  }}
                  color="text.secondary"
                  textAlign="center"
                  maxWidth="600px"
                >
                  Aqui estão os recursos criados com carinho e técnica, pensados
                  para mulheres como você:
                </Typography>
              </Stack>

              {/* Cards dos presentes */}
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      boxShadow: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack gap={3}>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width={60}
                          height={60}
                          borderRadius="50%"
                          bgcolor="primary.main"
                        >
                          <BookIcon sx={{ fontSize: 30, color: 'white' }} />
                        </Box>
                        <Typography
                          variant="h5"
                          fontWeight={600}
                          color="primary.main"
                        >
                          Mini Guia: O que eu carrego comigo
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          lineHeight={1.6}
                        >
                          Um material simples, reflexivo e bonito para você
                          repetir a vivência que fizemos — sempre que precisar
                          se escutar de novo.
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Card de Avaliações Google - Mobile */}
                <Grid
                  item
                  xs={12}
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      boxShadow: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack gap={3}>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width={60}
                          height={60}
                          borderRadius="50%"
                          bgcolor="primary.main"
                        >
                          <CardGiftcardIcon
                            sx={{ fontSize: 30, color: 'white' }}
                          />
                        </Box>
                        <Typography
                          variant="h5"
                          fontWeight={600}
                          color="primary.main"
                        >
                          Deixe sua avaliação no Google
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          lineHeight={1.6}
                        >
                          Sua opinião é muito importante para mim e pode ajudar
                          outras mulheres a encontrarem o acolhimento que
                          precisam.
                        </Typography>
                        <Button
                          component={Link}
                          href="https://www.google.com/search?q=ariane+miranda+psic%C3%B3loga+ub%C3%A1"
                          target="_blank"
                          variant="contained"
                          size="large"
                          startIcon={
                            <span style={{ fontSize: '20px' }}>⭐</span>
                          }
                          sx={{
                            px: 4,
                            py: 1.5,
                            fontSize: 16,
                            fontWeight: 600,
                            borderRadius: 3,
                            textTransform: 'none',
                            boxShadow: 3,
                            bgcolor: '#4285f4',
                            color: 'white !important',
                            '&:hover': {
                              bgcolor: '#3367d6',
                              transform: 'translateY(-2px)',
                              boxShadow: 6,
                              color: 'white !important',
                            },
                            '&:visited': {
                              color: 'white !important',
                            },
                            '&:link': {
                              color: 'white !important',
                            },
                            transition: 'all 0.3s ease',
                          }}
                        >
                          Avaliar no Google
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      boxShadow: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack gap={3}>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width={60}
                          height={60}
                          borderRadius="50%"
                          bgcolor="primary.main"
                        >
                          <AssignmentIcon
                            sx={{ fontSize: 30, color: 'white' }}
                          />
                        </Box>
                        <Typography
                          variant="h5"
                          fontWeight={600}
                          color="primary.main"
                        >
                          Guia de Plano de Parto Consciente
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          lineHeight={1.6}
                        >
                          Um modelo editável + orientações com linguagem clara
                          para você se preparar emocional e praticamente para o
                          nascimento.
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      boxShadow: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack gap={3}>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width={60}
                          height={60}
                          borderRadius="50%"
                          bgcolor="primary.main"
                        >
                          <SpaIcon sx={{ fontSize: 30, color: 'white' }} />
                        </Box>
                        <Typography
                          variant="h5"
                          fontWeight={600}
                          color="primary.main"
                        >
                          Material Psicoeducativo: Manejo da Ansiedade
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          lineHeight={1.6}
                        >
                          Técnicas baseadas em Terapias
                          Cognitivo-Comportamentais para identificar, entender e
                          reduzir os gatilhos emocionais mais comuns na
                          gestação.
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 3,
                      boxShadow: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 8,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Stack gap={3}>
                        <Box
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          width={60}
                          height={60}
                          borderRadius="50%"
                          bgcolor="primary.main"
                        >
                          <HeadphonesIcon
                            sx={{ fontSize: 30, color: 'white' }}
                          />
                        </Box>
                        <Typography
                          variant="h5"
                          fontWeight={600}
                          color="primary.main"
                        >
                          Áudio de respiração guiada (5 min)
                        </Typography>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          lineHeight={1.6}
                        >
                          Use quando sentir que o mundo tá demais. É só apertar
                          o play e se permitir parar por alguns minutos. Sua
                          mente também precisa respirar.
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Stack>
          </Container>
        </MaxWidth>
      </Stack>

      {/* Seção de Avaliações Google - Desktop */}
      <Stack
        bgcolor="background.default"
        py={4}
        sx={{ display: { xs: 'none', md: 'block' } }}
      >
        <MaxWidth>
          <Container maxWidth="md">
            <Stack gap={6}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  bgcolor: 'white',
                  '&:hover': {
                    boxShadow: 6,
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                <CardContent sx={{ p: 6 }}>
                  <Stack alignItems="center" gap={4}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      width={60}
                      height={60}
                      borderRadius="50%"
                      bgcolor="primary.main"
                    >
                      <CardGiftcardIcon sx={{ fontSize: 30, color: 'white' }} />
                    </Box>

                    <Typography
                      variant="h2"
                      fontSize={{
                        xs: 28,
                        md: 36,
                      }}
                      fontWeight={700}
                      color="primary.main"
                      textAlign="center"
                    >
                      Deixe sua avaliação no Google
                    </Typography>

                    <Typography
                      variant="h3"
                      fontSize={{
                        xs: 16,
                        md: 18,
                      }}
                      color="text.secondary"
                      textAlign="center"
                      lineHeight={1.6}
                      maxWidth="500px"
                    >
                      Sua opinião é muito importante para mim e pode ajudar
                      outras mulheres a encontrarem o acolhimento que precisam.
                    </Typography>

                    <Button
                      component={Link}
                      href="https://www.google.com/search?q=ariane+miranda+psic%C3%B3loga+ub%C3%A1"
                      target="_blank"
                      variant="contained"
                      size="large"
                      startIcon={<span style={{ fontSize: '20px' }}>⭐</span>}
                      sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: 16,
                        fontWeight: 600,
                        borderRadius: 3,
                        textTransform: 'none',
                        boxShadow: 3,
                        bgcolor: '#4285f4',
                        color: 'white !important',
                        '&:hover': {
                          bgcolor: '#3367d6',
                          transform: 'translateY(-2px)',
                          boxShadow: 6,
                          color: 'white !important',
                        },
                        '&:visited': {
                          color: 'white !important',
                        },
                        '&:link': {
                          color: 'white !important',
                        },
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Avaliar no Google
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Stack>
          </Container>
        </MaxWidth>
      </Stack>

      {/* Seção Quem sou eu */}
      <Stack bgcolor="secondary.main" py={8}>
        <MaxWidth>
          <Container maxWidth="lg">
            <Stack gap={6}>
              <Typography
                variant="h2"
                fontSize={{
                  xs: 32,
                  md: 40,
                }}
                fontWeight={700}
                color="secondary.contrastText"
                textAlign="center"
              >
                Quem sou eu e como posso te ajudar
              </Typography>

              <Stack
                direction={{
                  xs: 'column',
                  md: 'row',
                }}
                gap={6}
                alignItems="center"
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width={200}
                  height={200}
                  borderRadius="50%"
                  bgcolor="rgba(255, 255, 255, 0.2)"
                  sx={{
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.3)',
                    flexShrink: 0,
                  }}
                >
                  <FavoriteIcon
                    sx={{
                      fontSize: 80,
                      color: 'secondary.contrastText',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  />
                </Box>

                <Stack gap={3} flex={1}>
                  <Typography
                    variant="h4"
                    fontSize={{
                      xs: 24,
                      md: 28,
                    }}
                    fontWeight={600}
                    color="secondary.contrastText"
                  >
                    Ariane Miranda
                  </Typography>
                  <Typography
                    variant="h5"
                    fontSize={{
                      xs: 16,
                      md: 18,
                    }}
                    fontWeight={400}
                    color="secondary.contrastText"
                  >
                    Psicóloga Perinatal e Parental – CRP 04/67556
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={{
                      xs: 16,
                      md: 18,
                    }}
                    color="secondary.contrastText"
                    lineHeight={1.7}
                  >
                    Acompanho mulheres desde o positivo até o puerpério e além —
                    inclusive quem está na travessia da adoção ou em processos
                    de tentativas.
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={{
                      xs: 16,
                      md: 18,
                    }}
                    color="secondary.contrastText"
                    lineHeight={1.7}
                  >
                    Ofereço um espaço seguro de escuta onde você pode ser quem é
                    — com dúvidas, medos, raiva, amor, alegria e contradição.
                    Não para ser consertada. Mas para ser reconhecida.
                  </Typography>
                  <Typography
                    variant="body1"
                    fontSize={{
                      xs: 16,
                      md: 18,
                    }}
                    fontWeight={600}
                    color="secondary.contrastText"
                  >
                    Atendimentos online e presenciais (Clínica Aflora - Ubá).
                  </Typography>

                  <Button
                    component={Link}
                    href="https://wa.me/message/WFTAHMJVVAHKI1"
                    target="_blank"
                    variant="contained"
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    sx={{
                      px: 4,
                      py: 1.5,
                      fontSize: 16,
                      fontWeight: 600,
                      borderRadius: 3,
                      textTransform: 'none',
                      boxShadow: 3,
                      bgcolor: 'primary.main',
                      color: 'white !important',
                      width: 'fit-content',
                      '&:hover': {
                        bgcolor: 'primary.dark',
                        transform: 'translateY(-2px)',
                        boxShadow: 6,
                        color: 'white !important',
                      },
                      '&:visited': {
                        color: 'white !important',
                      },
                      '&:link': {
                        color: 'white !important',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    Agendar sessão
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </MaxWidth>
      </Stack>

      <Footer />
    </Stack>
  );
};
