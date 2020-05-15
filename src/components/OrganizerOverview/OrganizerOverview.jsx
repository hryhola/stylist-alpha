import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';

import OrganizerOverviewCommentsContainer from '../OrganizerOverviewComments/OrganizerOverviewComments.container';

import useStyles from './OrganizerOverview.styles';

const OrganizerOverview = ({ fetchOverviewComments, id }) => {
  useEffect(() => {
    const fetchComments = async (id) => fetchOverviewComments(id);
    fetchComments(id);
  }, [fetchOverviewComments, id]);

  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant='h4'>
        Останні запити
      </Typography>
      <Typography className={classes.title} variant='h4'>
        Останні відгуки
      </Typography>
      <OrganizerOverviewCommentsContainer />
    </>
  );
};

export default OrganizerOverview;
