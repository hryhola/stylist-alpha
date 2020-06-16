import React, { useEffect } from 'react';

import ClientsFrameTable from './ClientsFrame.table';

import LoadingOrError from '../LoadingOrError/LoadingOrError';

const ClientsFrame = ({ fetchClients, id, isLoading, error, clients }) => {
  useEffect(() => {
    const get = async (id) => {
      fetchClients(id);
    };
    get(id);
  }, [fetchClients, id]);
  return (
    <>
      {isLoading ? (
        <LoadingOrError error={error} />
      ) : (
        <ClientsFrameTable clients={clients} id={id} />
      )}
    </>
  );
};

export default ClientsFrame;
