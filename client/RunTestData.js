import React, { useState } from 'react';
import { accuracy } from '../brain/neuralNet';
import {
  makeStyles,
  Button,
  List,
  ListItem,
  ListItemText,
  DialogTitle,
  Dialog,
  Typography,
} from '@material-ui/core';
import TestDataTable from './TestDataTable';
import Modal from './Modal';

const RunTestData = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <br />
      <Typography>Last Test Run (n=284)</Typography>
      <br />
      <Button variant="outlined" color="secondary" onClick={handleOpen}>
        View Accuracy Stats
      </Button>
      <br />
      <br />
      <Modal />
      <TestDataTable />
    </div>
  );
};

export default RunTestData;
