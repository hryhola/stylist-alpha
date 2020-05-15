import React from 'react';

import { CircularProgress, Typography } from '@material-ui/core';

const StylistPageLoading = ({ error }) => {
  return (
    <>
      {error ? (
        <Typography variant='h5' color='error'>
          <br />
          {error.message}
        </Typography>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default StylistPageLoading;
