import React from 'react';

import { Paper, Typography } from '@material-ui/core';

import useStyles from './Comment.styles';

const Comment = ({ comment }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.comment} key={comment.id}>
      <Typography variant='h5'>{comment.commentatorName}</Typography>
      <Typography>{comment.text}</Typography>
    </Paper>
  );
};

export default Comment;
