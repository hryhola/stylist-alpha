import React, { useEffect } from 'react';

import CommentsFrameTable from './CommentsFrame.table';
import LoadingOrError from '../LoadingOrError/LoadingOrError';

const CommentsFrame = ({ fetchComments, id, isLoading, error, comments }) => {
  useEffect(() => {
    const get = async (id) => {
      fetchComments(id);
    };
    get(id);
  }, [fetchComments, id]);
  return (
    <>
      {isLoading ? (
        <LoadingOrError error={error} />
      ) : (
        <CommentsFrameTable comments={comments} id={id} />
      )}
    </>
  );
};

export default CommentsFrame;
