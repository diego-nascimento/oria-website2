import { MaxWidth } from '@/shared/components/MaxWidth';
import { Email, Instagram, Public, Room, WhatsApp } from '@mui/icons-material';
import { Box, Divider, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { Avatar } from './component/Avatar';

export const Footer = () => {
  return (
    <footer>
      <Stack>
        <Divider />
        <MaxWidth>
          <Stack py={4} px={2}>
            <Stack
              direction={{
                xs: 'column',
                md: 'row',
              }}
              justifyContent={'space-between'}
              gap={4}
            >
              <Stack>
                <Stack direction={'row'} gap={2}>
                  <Avatar src="oria2.webp">AM</Avatar>
                  <Stack justifyContent={'center'}>
                    <Typography
                      fontSize={26}
                      fontFamily={'Bree Serif, serif'}
                      fontWeight={400}
                    >
                      Ariane Miranda
                    </Typography>
                    <Typography
                      fontSize={{
                        xs: 16,
                        md: 18,
                      }}
                      color="#858881"
                      fontStyle={'italic'}
                    >
                      Psicóloga Perinatal e Parental
                    </Typography>
                    <Typography
                      fontSize={{
                        xs: 16,
                        md: 18,
                      }}
                      color="#858881"
                      fontStyle={'italic'}
                    >
                      CRP: 04/67556
                    </Typography>
                  </Stack>
                </Stack>
                <section aria-labelledby="contact-title">
                  <Typography
                    id="contact-title"
                    fontWeight={700}
                    fontSize={{
                      md: 32,
                      xs: 28,
                    }}
                    color={'#001f3f'}
                  >
                    Fale comigo
                  </Typography>
                  <address style={{ fontStyle: 'normal' }}>
                    <Stack gap={1}>
                      <Link
                        id="whatsapp"
                        href={'https://wa.me/message/WFTAHMJVVAHKI1'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abrir WhatsApp para contato"
                      >
                        <Stack direction={'row'} gap={2}>
                          <WhatsApp
                            sx={{
                              color: '#001f3f',
                            }}
                          />
                          <Typography color={'#001f3f'}>
                            +55 32 9 9965-8169
                          </Typography>
                        </Stack>
                      </Link>

                      <Link
                        href={'https://www.instagram.com/arianemirandapsi/'}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abrir Instagram da Ariane Miranda"
                      >
                        <Stack direction={'row'} gap={2}>
                          <Instagram
                            sx={{
                              color: '#001f3f',
                            }}
                          />
                          <Typography color={'#001f3f'}>
                            @arianemirandapsi
                          </Typography>
                        </Stack>
                      </Link>

                      <a
                        href="mailto:arianemirandapsicologa@gmail.com"
                        aria-label="Enviar email para arianemirandapsicologa@gmail.com"
                      >
                        <Stack direction={'row'} gap={2}>
                          <Email
                            sx={{
                              color: '#001f3f',
                            }}
                          />
                          <Typography color={'#001f3f'}>
                            arianemirandapsicologa@gmail.com
                          </Typography>
                        </Stack>
                      </a>
                    </Stack>
                  </address>
                </section>
              </Stack>
              <Stack>
                <Typography
                  fontSize={{
                    md: 28,
                    xs: 24,
                  }}
                  fontWeight={600}
                  textAlign={{
                    xs: 'left',
                    md: 'right',
                  }}
                >
                  Saúde mental pelo mundo
                </Typography>
                <Stack marginTop={2} spacing={4}>
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                    gap={4}
                  >
                    <Room
                      fontSize="large"
                      sx={{
                        display: {
                          xs: 'none',
                          md: 'block',
                        },
                      }}
                    />
                    <Stack>
                      <Typography
                        textAlign={'right'}
                        fontStyle={'italic'}
                        fontSize={18}
                      >
                        R. Cel. Otaviano da Rocha, 15 ​
                      </Typography>
                      <Typography
                        textAlign={{
                          xs: 'left',
                          md: 'right',
                        }}
                        fontStyle={'italic'}
                        fontSize={18}
                      >
                        São Domingos, Ubá - MG, 36504-042.​​
                      </Typography>
                      <Typography
                        textAlign={{
                          xs: 'left',
                          md: 'right',
                        }}
                        component={'strong'}
                        fontSize={18}
                        color={'#001f3f'}
                      >
                        <Box
                          component={'strong'}
                          color={'#001f3f'}
                          fontStyle={'italic'}
                        >
                          Clinica Aflora
                        </Box>{' '}
                      </Typography>
                    </Stack>
                  </Stack>
                  <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}
                  >
                    <Public
                      fontSize="large"
                      sx={{
                        display: {
                          xs: 'none',
                          md: 'block',
                        },
                      }}
                    />
                    <Stack
                      sx={{
                        display: {
                          xs: 'block',
                          md: 'none',
                        },
                      }}
                    >
                      <Typography
                        textAlign={'center'}
                        fontStyle={'italic'}
                        alignItems={'center'}
                        fontSize={18}
                      >
                        Atendimento Online para{' '}
                        <Box component={'strong'} color={'#001f3f'}>
                          Brasileiras
                        </Box>{' '}
                        em qualquer ​lugar no{' '}
                        <Box component={'strong'} color={'#001f3f'}>
                          mundo
                        </Box>{' '}
                        .
                      </Typography>
                    </Stack>
                    <Stack
                      display={{
                        xs: 'none',
                        md: 'block',
                      }}
                    >
                      <Typography
                        textAlign={{
                          xs: 'left',
                          md: 'right',
                        }}
                        fontStyle={'italic'}
                        alignItems={'center'}
                        fontSize={18}
                      >
                        Atendimento Online para ​
                      </Typography>
                      <Typography
                        textAlign={{
                          xs: 'left',
                          md: 'right',
                        }}
                        fontStyle={'italic'}
                        fontSize={18}
                      >
                        <Box component={'strong'} color={'#001f3f'}>
                          Brasileiras
                        </Box>{' '}
                        em qualquer ​​​
                      </Typography>
                      <Typography
                        textAlign={{
                          xs: 'left',
                          md: 'right',
                        }}
                        fontStyle={'italic'}
                        fontSize={18}
                      >
                        lugar no{' '}
                        <Box component={'strong'} color={'#001f3f'}>
                          mundo
                        </Box>
                        .​
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
            <Stack alignItems={'center'}>
              <Stack marginTop={8} maxWidth={750}>
                <Typography
                  textAlign={'center'}
                  bgcolor={'#fff'}
                  fontWeight={600}
                  fontSize={{
                    md: 16,
                    xs: 12,
                  }}
                >
                  Atenção: Se você estiver em crise, com ideação ou planejamento
                  suicida, ligue para o Centro de ​Valorização da Vida - CVV
                  (188). Em caso de emergência, procure o hospital mais próximo.
                  Havendo ​risco de morte, ligue imediatamente para o SAMU
                  (192), ou para o Corpo de Bombeiros (193).
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </MaxWidth>
      </Stack>
    </footer>
  );
};
