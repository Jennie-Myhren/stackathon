import React from 'react';
import { Typography } from '@material-ui/core';
import TestDataTable from './TestDataTable';
import StatsPopover from './StatsPopover';

const RunTestData = () => {
  return (
    <div>
      <br />
      <Typography>Last Test Run (n=284)</Typography>
      <br />
      <StatsPopover />
      <br />
      <br />
      <TestDataTable />
    </div>
  );
};

export default RunTestData;
