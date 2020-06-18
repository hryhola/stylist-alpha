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
    shopAddress,
  },
}) => {
  const classes = useStyles();

  return (
    <Paper className={classes.stylistItem}>
      <Grid container direction='row'>
        <Grid container direction='row' wrap='nowrap' justify='space-between'>
          <Grid className={classes.info} container direction='column'>
            <Typography variant='h4'>
              <RouterLink to={`/stylist-alpha/stylist/${id}`}>
                {stylistName}
              </RouterLink>
            </Typography>
            <Typography color='textSecondary'>{shopAddress}</Typography>
            <Typography color='textSecondary'>{phoneNumber}</Typography>
          </Grid>
          <Grid
            container
            className={classes.workTime}
            direction='column'
            justify='center'
            alignItems='center'
          >
            <Typography variant='h5'>{workTimeStart}</Typography>
            <Typography variant='h5'>{workTimeEnd}</Typography>
          </Grid>
        </Grid>
        <div>
          <p>{about}</p>
        </div>
      </Grid>
    </Paper>
  );
};

export default StylistListItem;
