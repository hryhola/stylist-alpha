import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Comment from '../Comment/Comment';
import LoadingOrError from '../LoadingOrError/LoadingOrError';

const OrganizerOverviewComments = ({
  overviewComments,
  isLoadingOverviewComments,
  loadingOverviewCommentsError,
}) => {
  return (
    <Grid container spacing={3}>
      {!isLoadingOverviewComments && overviewComments ? (
        <>
          {!overviewComments.length && (
            <Grid item style={{ marginLeft: '1.2em' }}>
              <Typography color='textSecondary'>Немає відгуків</Typography>
            </Grid>
          )}
          {overviewComments.map((comment) => (
            <Grid item xs='auto' md={3} key={comment.id}>
              <Comment comment={comment} />
            </Grid>
          ))}
        </>
      ) : (
        <LoadingOrError error={loadingOverviewCommentsError} />
      )}
    </Grid>
  );
};

export default OrganizerOverviewComments;
