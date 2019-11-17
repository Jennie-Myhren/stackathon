import React, { useState } from 'react';
import { Button, makeStyles, Popover, Typography } from '@material-ui/core';
import { accuracy } from '../brain/neuralNet';

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

const StatsPopover = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = anchorEl !== null;
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="outlined"
        color="secondary"
        onClick={handleClick}
      >
        View Accuracy Stats
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Typography className={classes.typography}>
          <p>Accuracy: {accuracy}</p>
        </Typography>
      </Popover>
    </div>
  );
};

export default StatsPopover;
