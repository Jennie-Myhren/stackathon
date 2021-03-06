import React from 'react';
import { makeStyles } from '@material-ui/core';
import ButtonBase from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function ButtonView() {
  const images = [
    {
      url: 'http://placeimg.com/400/400/tech?t=1573929820220',
      title: 'Run Test Data',
      width: '50%',
    },
    {
      url: 'https://placeimg.com/400/400/tech?t=1574044568669',
      title: 'Input New Patient Data',
      width: '50%',
    },
  ];

  //styles
  const useStyles = makeStyles(theme => ({
    //container
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 400,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 400,
      //breakpoint for extra-small screens
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 200,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        //hides the underline under the button text
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid white',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      //typeface color
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
        6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      {images.map(image => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
          href={
            image.title === 'Run Test Data'
              ? 'http://localhost:1234/run-test-data'
              : 'http://localhost:1234/input-patient-data'
          }
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      ))}
    </div>
  );
}
