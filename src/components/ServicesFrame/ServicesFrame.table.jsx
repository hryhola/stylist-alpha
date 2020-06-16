import React, { useState } from 'react';

import {
  addService,
  updateService,
  deleteService,
} from '../../firebase/services';

import localization from '../../shared/material-table-localization';

import MaterialTable from 'material-table';

const ServicesFrameTable = ({ services, id }) => {
  const [servicesData, setServices] = useState(services);
  const columns = [
    {
      title: 'Назва',
      field: 'displayName',
    },
    {
      title: 'Тривалість у хвилинах',
      field: 'durationInMinutes',
    },
    {
      title: 'Вартість у гривнях',
      field: 'price',
    },
  ];
  const editable = {
    isEditable: (rowData) => true, // only name(a) rows would be editable
    isDeletable: (rowData) => true, // only name(a) rows would be deletable
    onRowAdd: (newData) =>
      new Promise((resolve, reject) => {
        if (newData.displayName && newData.durationInMinutes && newData.price) {
          addService(id, newData)
            .then((id) => {
              const newDataList = [...servicesData, { id, ...newData }];
              setServices(newDataList);
              resolve();
            })
            .catch((error) => reject());
        } else {
          reject();
        }
      }),
    onRowUpdate: (newData, oldData) =>
      new Promise((resolve, reject) => {
        if (newData.displayName && newData.durationInMinutes && newData.price) {
          updateService(id, newData)
            .then((id) => {
              const newDataList = [
                ...servicesData.filter((s) => s.id !== newData.id),
                newData,
              ];
              setServices(newDataList);
              resolve();
            })
            .catch((error) => reject());
        } else {
          reject();
        }
      }),
    onRowDelete: (oldData) =>
      new Promise((resolve, reject) => {
        deleteService(id, oldData)
          .then(() => {
            const newDataList = [
              ...servicesData.filter((s) => s.id !== oldData.id),
            ];
            setServices(newDataList);
            resolve();
          })
          .catch((error) => reject());
      }),
  };
  return (
    <MaterialTable
      columns={columns}
      data={servicesData}
      editable={editable}
      title='Послуги'
      localization={localization}
    />
  );
};

export default ServicesFrameTable;
