import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BasicDetailPanels from "./dataGridNorthStar";
import BasicDetailPanelsFirstTime from "./dataGridFirstTime";
import BasicDetailPanelsBeTheBest from "./dataGridBeTheBest";
import BasicDetailPanelsTrueGlobal, {
  getTargetDesign,
} from "./dataGridTrueGlobal";
import { Paper, Stack } from "@mui/material";

export default function BasicAccordion() {
  const AccordionHeader = (...args) => (
    <Paper sx={{ width: "auto", height: 50, padding: 2 }}>
      <Stack direction="column" spacing={1}>
        <Stack direction="row" spacing={2} padding={1}>
          <Typography variant="h6" fontWeight={700}>KPI : </Typography>
          {getTargetDesign(...args)}
        </Stack>
      </Stack>
    </Paper>
  );

  return (
    <div>
      <Typography variant="h4" fontWeight={800}>
        BFS Unit Score Board - 4 Strategic Objectives
      </Typography>
      <hr />
      <div style={{ paddingBottom: "20px" }}></div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{ fontWeight: 700 }}>
            Objective : North Star
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {AccordionHeader(90, 89, 90, "NA", "NA")}
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
          <Typography style={{ fontWeight: 700 }}>
            Objective : First Time Right
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {AccordionHeader(8, 7, 9, "NA", "NA")}
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
          <Typography style={{ fontWeight: 700 }}>
            Objective : BeThe Best
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {AccordionHeader(5, 4, 9, "NA", "NA")}
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
          <Typography style={{ fontWeight: 700 }}>
            Objective : True Global
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {AccordionHeader(8, 7, 9, "NA", "NA")}
          <Typography>
            <BasicDetailPanelsTrueGlobal />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
