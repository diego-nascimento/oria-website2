'use client';
import { Avatar, Box, IconButton, useTheme } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from 'next/link';
export const WhatsappButton = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 8,
        right: {
          xs: 8,
          md: 24,
        },
        zIndex: theme.zIndex.drawer - 1,
      }}
    >
      <IconButton
        component={Link}
        href="https://wa.me/message/5MAMLEFBR547D1"
        target="_blank"
      >
        <Avatar
          className="appearleft"
          sx={{
            backgroundColor: '#25d366',
            width: 60,
            height: 60,
          }}
        >
          <WhatsAppIcon fontSize="large" />
        </Avatar>
      </IconButton>
    </Box>
  );
};
