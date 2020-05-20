import React from 'react';

import ServicesFrameTable from './ServicesFrame.table';

const ServicesFrame = ({ fetchServices, id, isLoading }) => {
  return (
    <>
      <ServicesFrameTable
        services={[
          {
            displayName: 'Прікол',
            durationInMinutes: 12,
            price: 100,
          },
          {
            displayName: 'Клас',
            durationInMinutes: 22,
            price: 123,
          },
          {
            displayName: 'Посл',
            durationInMinutes: 100,
            price: 321,
          },
        ]}
      />
    </>
  );
};

export default ServicesFrame;
