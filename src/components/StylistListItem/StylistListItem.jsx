import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Paper, Grid } from '@material-ui/core';

import useStyles from './StylistListItem.styles';

const StylistListItem = ({
  stylist: {
    id,
    phoneNumber,
    stylistName,
    workTimeStart,
    workTimeEnd,
    about,
    shopAddres,
  },
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.stylistItem}>
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='center'
      >
        <div>
          <Typography variant='h4'>
            <RouterLink to={`/stylist/${id}`}>{stylistName}</RouterLink>
          </Typography>
          <Typography color='textSecondary'>{shopAddres}</Typography>
          <Typography color='textSecondary'>{phoneNumber}</Typography>
          <p>{about}</p>
        </div>
        <div>
          <Grid
            container
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Typography variant='h5'>{workTimeStart}</Typography>
            <Typography variant='h5'>{workTimeEnd}</Typography>
          </Grid>
        </div>
      </Grid>
    </Paper>
  );
};

export default StylistListItem;
