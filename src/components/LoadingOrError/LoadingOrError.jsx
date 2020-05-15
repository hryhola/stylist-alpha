import React from 'react';
import { CircularProgress, Typography, Grid } from '@material-ui/core';

const LoadingOrError = ({ error }) => {
  return (
    <Grid container spacing={3} justify='center'>
      {!!error ? (
        <Typography color='error'>
          {JSON.stringify(error).toString()}
        </Typography>
      ) : (
        <CircularProgress />
      )}
    </Grid>
  );
};

export default LoadingOrError;
