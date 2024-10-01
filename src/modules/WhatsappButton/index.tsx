import { Avatar, Box, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export const WhatsappButton = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 4,
        right: 8,
      }}
    >
      <IconButton>
        <Avatar
          component={'a'}
          sx={{
            backgroundColor: '#25d366',
            width: 45,
            height: 45,
          }}
        >
          <WhatsAppIcon fontSize="large" />
        </Avatar>
      </IconButton>
    </Box>
  );
};
