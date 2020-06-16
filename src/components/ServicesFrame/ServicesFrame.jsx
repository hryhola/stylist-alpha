import React, { useEffect } from 'react';

import ServicesFrameTable from './ServicesFrame.table';
import LoadingOrError from '../LoadingOrError/LoadingOrError';

const ServicesFrame = ({ fetchServices, id, isLoading, services, error }) => {
  useEffect(() => {
    const get = async (id) => {
      fetchServices(id);
    };
    get(id);
  }, [fetchServices, id]);
  return (
    <>
      {isLoading ? (
        <LoadingOrError error={error} />
      ) : (
        <ServicesFrameTable services={services} id={id} />
      )}
    </>
  );
};

export default ServicesFrame;
