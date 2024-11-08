'use client';
import {
  AccordionDetails,
  AccordionSummary,
  Accordion as MuiAccordion,
  Stack,
  Typography,
} from '@mui/material';

import { PropsWithChildren } from 'react';
import { useHandlePanelOpen } from '../../store/useHandlePanelOpen';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface Props {
  panel: string;
  summary: string;
}

export const Accordion = ({
  panel,
  summary,
  children,
}: PropsWithChildren<Props>) => {
  const { handleChange, panelOpen } = useHandlePanelOpen();
  return (
    <MuiAccordion
      sx={{
        '&:hover': {
          transition: 'background .5s',
        },
      }}
      expanded={panelOpen === panel}
      onChange={handleChange(panel)}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Stack paddingY={2}>
          <Typography fontWeight={600}>{summary}</Typography>
        </Stack>
      </AccordionSummary>

      <AccordionDetails>{children}</AccordionDetails>
    </MuiAccordion>
  );
};
