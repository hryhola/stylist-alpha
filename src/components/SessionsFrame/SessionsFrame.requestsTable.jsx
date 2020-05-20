import React from 'react';
import MaterialTable from 'material-table';

const SessionsFrameRequestsTable = ({ sessionRequests }) => {
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
      field: 'service',
    },
    {
      title: 'Соц.мережа',
      field: 'clientSocialLink',
    },
  ];
  const actions = [
    {
      icon: 'done',
      tooltip: 'Підтвердити',
      onClick: (event, rowData) => alert('Ти підтвердив замовлення'),
    },
    {
      icon: 'close',
      tooltip: 'Відмовити',
      onClick: (event, rowData) => alert('Ти відмовив запиту'),
    },
  ];
  return (
    <MaterialTable
      actions={actions}
      columns={columns}
      data={sessionRequests}
      title='Запити'
    />
  );
};

export default SessionsFrameRequestsTable;
