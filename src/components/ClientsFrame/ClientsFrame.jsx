import React from 'react';

import ClientsFrameTable from './ClientsFrame.table';

const ClientsFrame = ({ fetchServices, id, isLoading }) => {
  return (
    <>
      <ClientsFrameTable
        clients={[
          {
            displayName: 'Василь',
            phoneNumber: '+3806693423',
            socialLink: 'https://www.instagram.com/realdonaldtrump',
          },
          {
            displayName: 'Петро',
            phoneNumber: '+382343',
            socialLink: 'https://www.instagram.com/realdonaldtrump',
          },
          {
            displayName: 'Олег',
            phoneNumber: '+343243243423',
            socialLink: 'https://www.instagram.com/realdonaldtrump',
          },
        ]}
      />
    </>
  );
};

export default ClientsFrame;
