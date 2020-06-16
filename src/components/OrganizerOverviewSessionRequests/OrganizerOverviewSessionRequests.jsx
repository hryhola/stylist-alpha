import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
  selectIsLoadingOverviewRequests,
  selectOverviewRequests,
} from '../../redux/organizer/organizer.selectors';
import { Grid, Typography } from '@material-ui/core';

import LoadingOrError from '../LoadingOrError/LoadingOrError';

import SessionRequestPreview from '../SessionRequestPreview/SessionRequestPreview';

const OrganizerOverviewSessionRequests = ({ requests, isLoading }) => {
  return (
    <Grid container spacing={3} style={{ paddingBottom: '25px' }}>
      {!isLoading && requests ? (
        <>
          {requests.map((row) => (
            <Grid item xs='auto' md={3} key={row.id}>
              <SessionRequestPreview sessionRequest={row} />
            </Grid>
          ))}
          {!requests.length && (
            <Grid item style={{ marginLeft: '1.2em' }}>
              <Typography color='textSecondary'>Немає запитів</Typography>
            </Grid>
          )}
        </>
      ) : (
        <LoadingOrError />
      )}
    </Grid>
  );
};

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoadingOverviewRequests,
  requests: selectOverviewRequests,
});
export default connect(mapStateToProps, null)(OrganizerOverviewSessionRequests);
