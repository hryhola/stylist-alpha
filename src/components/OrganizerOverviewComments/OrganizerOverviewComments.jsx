import React from 'react';
import { Grid } from '@material-ui/core';

import Comment from '../Comment/Comment';
import LoadingOrError from '../LoadingOrError/LoadingOrError';

const OrganizerOverviewComments = ({
  overviewComments,
  isLoadingOverviewComments,
  loadingOverviewCommentsError,
}) => {
  console.log(overviewComments);
  return (
    <Grid container spacing={3}>
      {!isLoadingOverviewComments && overviewComments ? (
        overviewComments.map((comment) => (
          <Grid item xs='auto' md={3} key={comment.id}>
            <Comment comment={comment} />
          </Grid>
        ))
      ) : (
        <LoadingOrError error={loadingOverviewCommentsError} />
      )}
    </Grid>
  );
};

export default OrganizerOverviewComments;
