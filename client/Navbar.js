import React from 'react';
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  MenuIcon,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';

const Navbar = () => {
  const useStyles = makeStyles(theme => {
    console.log(theme);
    return {
      root: {
        flexGrow: 1,
      },
      avatar: {
        margin: 10,
      },
      title: {
        flexGrow: 1,
      },
    };
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.menuBar}>
          <Typography className={classes.title} variant="h3">
            Dx Prediction
          </Typography>
          <Avatar
            alt="Margaret Hamburg"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Margaret_Hamburg_official_portrait.jpg"
            variant="circle"
            className={classes.avatar}
          />
          <Button>Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
