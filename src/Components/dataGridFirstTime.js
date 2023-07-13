import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { DataGridPro } from '@mui/x-data-grid-pro';
import {
  randomCreatedDate,
  randomPrice,
  randomCurrency,
  randomCountry,
  randomCity,
  randomEmail,
  randomInt,
  randomAddress,
  randomCommodity,
} from '@mui/x-data-grid-generator';
import FullWidthTabs from './tabs';

function DetailPanelContent({ row: rowProp }) {
  return (
    <Stack
      sx={{ py: 2, height: '600', boxSizing: 'border-box', marginLeft:2 }}
      direction="column" spacing={2}
    >
        <Paper sx={{ width: '95%', height:30, p: 1,paddingBottom:3 }}>
            {getTargetDesign(8,7,9,'NA','NA')}
        </Paper>
        <Paper sx={{ width: '95%', height:250, p: 1,paddingBottom:3 }}>
            <Stack direction="column" spacing={1} >
                <Typography variant="h6">{`Account 1 : #${rowProp.id}`}</Typography>
                {getTargetDesign(8,7,7.5,'NA','NA')}
                <Grid container>
                    <FullWidthTabs />
                </Grid>
            </Stack>
        </Paper>
        <Paper sx={{ width: '95%', height:250, p: 1,paddingBottom:3 }}>
            <Stack direction="column" spacing={1} >
                <Typography variant="h6">{`Account 2 : #${rowProp.id}`}</Typography>
                {getTargetDesign(8,5,7.5,'NA','NA')}
                <Grid container>
                    <FullWidthTabs />
                </Grid>
            </Stack>
        </Paper>
    </Stack>
  );
}

const columns = [
  { field: 'id', headerName: 'KPI', width:600 },
];

function generateProducts() {
  const quantity = randomInt(1, 5);
  return [...Array(quantity)].map((_, index) => ({
    id: index,
    name: randomCommodity(),
    quantity: randomInt(1, 5),
    unitPrice: randomPrice(1, 1000),
  }));
}

const getTargetDesign = (target,q1,q2,q3,q4,q5) => {
  return (
    <Stack direction="row" spacing={5} >
        <Grid item md={6}>
            <Typography variant="body2" color="textSecondary">
                Target FY24
            </Typography>
            <Typography variant="body1">{target}%</Typography>
            </Grid>
            <Grid item md={6}>
            <Typography variant="body2" color="textSecondary">
                Actual Q1
            </Typography>
            <Typography variant="body1">{q1}%</Typography>
            </Grid>
            <Grid item md={6}>
            <Typography variant="body2" color="textSecondary">
                Actual Q2
            </Typography>
            <Typography variant="body1">{q2}%</Typography>
            </Grid>
            <Grid item md={6}>
            <Typography variant="body2" color="textSecondary">
                Actual Q3
            </Typography>
            <Typography variant="body1">{q3}</Typography>
            </Grid>
            <Grid item md={6}>
            <Typography variant="body2" color="textSecondary">
                Actual Q4
            </Typography>
            <Typography variant="body1">{q4}</Typography>
        </Grid>            
    </Stack>)
}

const rows = [
  {
    id: 'CSAT',
    customer: 'Matheus',
    email: randomEmail(),
    date: randomCreatedDate(),
    address: randomAddress(),
    country: randomCountry(),
    city: randomCity(),
    currency: randomCurrency(),
    products: generateProducts(),
  },
  {
    id: 'ERR',
    customer: 'Olivier',
    email: randomEmail(),
    date: randomCreatedDate(),
    address: randomAddress(),
    country: randomCountry(),
    city: randomCity(),
    currency: randomCurrency(),
    products: generateProducts(),
  }
];

export default function BasicDetailPanelsFirstTime() {
  const getDetailPanelContent = React.useCallback(
    ({ row }) => <DetailPanelContent row={row} />,
    [],
  );

  const getDetailPanelHeight = React.useCallback(() => 700, []);

  return (
    <Box sx={{ width: '100%', height: 400 }}>
      <DataGridPro
        columns={columns}
        rows={rows}
        rowThreshold={0}
        getDetailPanelHeight={getDetailPanelHeight}
        getDetailPanelContent={getDetailPanelContent}
      />
    </Box>
  );
}