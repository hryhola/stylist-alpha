import React, { useState } from 'react';
import MaterialTable from 'material-table';

import { deleteSession, setIsDoneSession } from '../../firebase/sessions';

import localization from '../../shared/material-table-localization';

const SessionsFrameTable = ({ sessions, id }) => {
  const [data, setData] = useState(sessions);
  const columns = [
    {
      title: "Ім'я",
      field: 'clientName',
    },
    {
      title: 'Номер телефону',
      field: 'clientPhoneNumber',
    },
    {
      title: 'Дата та час',
      field: 'dateTime',
    },
    {
      title: 'Послуга',
      field: 'serviceName',
    },
    {
      title: 'Виконаний',
      field: 'isDone',
      render: (row) => (row.isDone === true ? '✓' : ' '),
    },
    {
      title: 'Ціна',
      field: 'totalPrice',
    },
    {
      title: 'Соц.мережа',
      field: 'clientSocialLink',
    },
  ];
  const actions = [
    (rowData) => ({
      icon: 'done',
      tooltip: 'Підтвердити',
      onClick: (event, rowData) =>
        new Promise((resolve, reject) => {
          setIsDoneSession(id, rowData)
            .then((id) => {
              const index = data.findIndex((row) => row.id === rowData.id);
              const newDataList = [...data];
              newDataList[index].isDone = true;
              setData(newDataList);
              resolve();
            })
            .catch((error) => reject());
        }),
      disabled: rowData.isDone,
    }),
    {
      icon: 'delete',
      tooltip: 'Видалити',
      onClick: (event, rowData) =>
        new Promise((resolve, reject) => {
          deleteSession(id, rowData)
            .then((id) => {
              const newDataList = [...data.filter((s) => s.id !== rowData.id)];
              setData(newDataList);
              resolve();
            })
            .catch((error) => reject());
        }),
    },
  ];
  return (
    <MaterialTable
      actions={actions}
      columns={columns}
      data={data}
      title='Сеанси'
      localization={localization}
    />
  );
};

export default SessionsFrameTable;
