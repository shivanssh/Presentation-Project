import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BasicDetailPanels from './dataGridNorthStar';
import BasicDetailPanelsFirstTime from './dataGridFirstTime';
import BasicDetailPanelsBeTheBest from './dataGridBeTheBest';
import BasicDetailPanelsTrueGlobal from './dataGridTrueGlobal';

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Objective : North Star</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <BasicDetailPanels />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Objective : First Time Right</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <BasicDetailPanelsFirstTime />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Objective:BeThe Best</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <BasicDetailPanelsBeTheBest />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Objective:True Global</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <BasicDetailPanelsTrueGlobal />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}