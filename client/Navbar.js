import React from 'react';
import {
  AppBar,
  Avatar,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles(theme => {
  return {
    root: {
      flexGrow: 1,
    },
    avatar: {
      margin: 10,
      border: '3px solid black',
    },
    title: {
      flexGrow: 1,
    },
  };
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.menuBar}>
          <Typography
            color="textPrimary"
            className={classes.title}
            variant="h3"
          >
            Dx Prediction
          </Typography>
          <br />
          <Avatar
            alt="Avatar Image"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/User_md_font_awesome.svg/800px-User_md_font_awesome.svg.png"
            variant="circle"
            className={classes.avatar}
          />
          <Typography>Welcome, Dr. Smythe!</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
