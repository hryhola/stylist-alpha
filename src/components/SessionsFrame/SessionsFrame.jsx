import React, { useEffect } from 'react';

import LoadingOrError from '../LoadingOrError/LoadingOrError';
import SessionsFrameTable from './SessionsFrame.table';
import SessionsFrameRequestsTable from './SessionsFrame.requestsTable';
import { Grid } from '@material-ui/core';

const SessionsFrame = ({
  fetchRequests,
  fetchSessions,
  isLoadingRequests,
  isLoadingSessions,
  requests,
  requestsError,
  sessions,
  sessionsError,
  id,
}) => {
  useEffect(() => {
    const get = async (id) => {
      fetchRequests(id);
      fetchSessions(id);
    };
    get(id);
  }, [fetchRequests, fetchSessions, id]);
  return (
    <Grid container spacing={2} direction='column'>
      <Grid item>
        {isLoadingRequests ? (
          <LoadingOrError error={requestsError} />
        ) : (
          <SessionsFrameRequestsTable sessionRequests={requests} id={id} />
        )}
      </Grid>
      <Grid item>
        {isLoadingSessions ? (
          <LoadingOrError error={sessionsError} />
        ) : (
          <SessionsFrameTable sessions={sessions} id={id} />
        )}
      </Grid>
    </Grid>
  );
};

export default SessionsFrame;
