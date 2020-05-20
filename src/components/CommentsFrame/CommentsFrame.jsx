import React from 'react';

import CommentsFrameTable from './CommentsFrame.table';

const CommentsFrame = ({ fetchServices, id, isLoading }) => {
  return (
    <>
      <CommentsFrameTable
        comments={[
          {
            commentatorName: 'Василь',
            commentatorEmail: 'mail@mail.m',
            text:
              'Lorem sdf p;wdfk pofjkdp oewkp ewpofepwfkwfkwopf kwowijwo fjoiewjiojfsd',
            createdAt: new Date().toTimeString(),
          },
          {
            commentatorName: 'Петро',
            commentatorEmail: '3уцфы@mail.m',
            text:
              'Loвфывыфвыфв ывфdp oewkp ewpofepwfkwfkwopf kwowijwo fjoiewjiojfsd',
            createdAt: new Date().toTimeString(),
          },
        ]}
      />
    </>
  );
};

export default CommentsFrame;
