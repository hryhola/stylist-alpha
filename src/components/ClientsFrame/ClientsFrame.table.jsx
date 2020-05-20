import React from 'react';
import MaterialTable from 'material-table';

const ClientsFrameTable = ({ clients, id }) => {
  const columnRender = (row) => (
    <a href={row.socialLink} target='_blank' rel='noopener noreferrer'>
      {row.socialLink}
    </a>
  );
  const columns = [
    {
      title: "Ім'я",
      field: 'displayName',
    },
    {
      title: 'Номер телефону',
      field: 'phoneNumber',
    },
    {
      title: 'Профіль соц.мережі',
      field: 'socialLink',
      render: columnRender,
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
      data={clients}
      editable={editable}
      title='Клієнти'
    />
  );
};

export default ClientsFrameTable;
