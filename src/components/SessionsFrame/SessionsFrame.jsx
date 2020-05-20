import React from 'react';

import SessionsFrameTable from './SessionsFrame.table';
import SessionsFrameRequestsTable from './SessionsFrame.requestsTable';
import { Grid } from '@material-ui/core';

const SessionsFrame = () => {
  return (
    <Grid container spacing={2} direction='column'>
      <Grid item>
        <SessionsFrameRequestsTable
          sessionRequests={[
            {
              clientName: 'Петро',
              clientPhoneNumber: '+39099324343',
              clientSocialLink: '',
              dateTime: new Date().toTimeString(),
              service: 'Стрижка',
            },
            {
              clientName: 'Василь',
              clientPhoneNumber: '+3923423443',
              clientSocialLink: '',
              dateTime: new Date().toTimeString(),
              service: 'Стрижка крута',
            },
          ]}
        />
      </Grid>
      <Grid item>
        <SessionsFrameTable
          sessions={[
            {
              clientId: undefined,
              clientName: 'Григорій',
              clientPhoneNumber: '+39099324343',
              clientSocialLink: undefined,
              dateTime: new Date().toTimeString(),
              serviceName: 'Стрижка',
              isDone: true,
              totalPrice: 1000,
            },
          ]}
        />
      </Grid>
    </Grid>
  );
};

export default SessionsFrame;
