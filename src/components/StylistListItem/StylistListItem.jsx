import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Paper, Grid } from '@material-ui/core';

import useStyles from './StylistListItem.styles';

const StylistListItem = ({
  stylist: {
    id,
    email,
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
          <Typography variant='h4' to={`/stylist/${id}`} component={RouterLink}>
            {stylistName}
          </Typography>
          <Typography color='textSecondary'>{shopAddres}</Typography>
          <Typography color='textSecondary'>{email}</Typography>
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
