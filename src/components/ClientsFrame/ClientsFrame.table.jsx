import React, { useState } from 'react';
import MaterialTable from 'material-table';

import { addClient, updateClient, deleteClient } from '../../firebase/clients';

import localization from '../../shared/material-table-localization';

const ClientsFrameTable = ({ clients, id }) => {
  const [clientsData, setClientsData] = useState(clients);
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
        if (newData.displayName && newData.phoneNumber && newData.socialLink) {
          addClient(id, newData)
            .then((id) => {
              const newDataList = [...clientsData, { id, ...newData }];
              setClientsData(newDataList);
              resolve();
            })
            .catch((error) => reject());
        } else {
          reject();
        }
      }),
    onRowUpdate: (newData, oldData) =>
      new Promise((resolve, reject) => {
        if (newData.displayName && newData.phoneNumber && newData.socialLink) {
          updateClient(id, newData)
            .then((id) => {
              const newDataList = [
                ...clientsData.filter((s) => s.id !== newData.id),
                newData,
              ];
              setClientsData(newDataList);
              resolve();
            })
            .catch((error) => reject());
        } else {
          reject();
        }
      }),
    onRowDelete: (oldData) =>
      new Promise((resolve, reject) => {
        deleteClient(id, oldData)
          .then(() => {
            const newDataList = [
              ...clientsData.filter((s) => s.id !== oldData.id),
            ];
            setClientsData(newDataList);
            resolve();
          })
          .catch((error) => reject());
      }),
  };
  return (
    <MaterialTable
      columns={columns}
      data={clientsData}
      editable={editable}
      title='Клієнти'
      localization={localization}
    />
  );
};

export default ClientsFrameTable;
