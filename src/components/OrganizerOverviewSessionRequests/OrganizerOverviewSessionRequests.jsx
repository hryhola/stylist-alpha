import React from 'react';
import { Grid } from '@material-ui/core';

import SessionRequestPreview from '../SessionRequestPreview/SessionRequestPreview';

const OrganizerOverviewSessionRequests = (overviewSessionRequests) => {
  overviewSessionRequests = [
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
  ];
  return (
    <Grid container spacing={3} style={{ paddingBottom: '25px' }}>
      {overviewSessionRequests.map((row) => (
        <Grid item xs='auto' md={3} key={row.id}>
          <SessionRequestPreview sessionRequest={row} />
        </Grid>
      ))}
    </Grid>
  );
};

export default OrganizerOverviewSessionRequests;
