import React from 'react';
import { Typography } from '@material-ui/core';
import TestDataTable from './TestDataTable';
import StatsPopover from './StatsPopover';

// const useStyles = makeStyles(theme => ({
//   typography: {
//     padding: theme.spacing(2),
//   },
// }));

const RunTestData = () => {
  // const [isClicked, setClicked] = useState(false);

  // const [open, setOpen] = useState(false);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
    <div>
      <br />
      <Typography>Last Test Run (n=284)</Typography>
      <br />
      <StatsPopover />
      {/* <Button type="button" variant="outlined" color="secondary">
        View Accuracy Stats
      </Button> */}
      <br />
      <br />
      <TestDataTable />
    </div>
  );
};

export default RunTestData;
