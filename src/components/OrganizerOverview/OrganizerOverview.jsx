import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';

import OrganizerOverviewCommentsContainer from '../OrganizerOverviewComments/OrganizerOverviewComments.container';
import OrganizerOverviewSessionRequests from '../OrganizerOverviewSessionRequests/OrganizerOverviewSessionRequests';

import useStyles from './OrganizerOverview.styles';

const OrganizerOverview = ({
  fetchOverviewComments,
  fetchOverviewRequests,
  id,
}) => {
  useEffect(() => {
    const get = async (id) => {
      fetchOverviewComments(id);
      fetchOverviewRequests(id);
    };
    get(id);
  }, [fetchOverviewComments, fetchOverviewRequests, id]);

  const classes = useStyles();
  return (
    <>
      <Typography className={classes.title} variant='h4'>
        Останні запити
      </Typography>
      <OrganizerOverviewSessionRequests />
      <Typography className={classes.title} variant='h4'>
        Останні відгуки
      </Typography>
      <OrganizerOverviewCommentsContainer />
    </>
  );
};

export default OrganizerOverview;
