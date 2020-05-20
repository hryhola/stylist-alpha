import React from 'react';
import MaterialTable from 'material-table';

const ServicesFrameTable = ({ services, id }) => {
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
        setTimeout(() => {
          resolve();
        }, 1000);
      }),
    onRowUpdate: (newData, oldData) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      }),
    onRowDelete: (oldData) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      }),
  };
  return (
    <MaterialTable
      columns={columns}
      data={services}
      editable={editable}
      title='Послуги'
    />
  );
};

export default ServicesFrameTable;
