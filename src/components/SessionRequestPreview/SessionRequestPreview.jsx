import React from 'react';

import { Paper, Typography } from '@material-ui/core';

import useStyles from './SessionRequestPreview.styles';

const SessionRequestPreview = ({ sessionRequest }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} key={sessionRequest.id}>
      <Typography variant='h5'>{sessionRequest.clientName}</Typography>
      <Typography>{sessionRequest.service}</Typography>
      <Typography>{sessionRequest.dateTime}</Typography>
    </Paper>
  );
};

export default SessionRequestPreview;
