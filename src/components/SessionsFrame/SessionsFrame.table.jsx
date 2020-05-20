import React from 'react';
import MaterialTable from 'material-table';

const SessionsFrameTable = ({ sessions }) => {
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
    {
      icon: 'done',
      tooltip: 'Підтвердити',
      onClick: (event, rowData) => alert('Ти виконав замовлення'),
    },
    {
      icon: 'delete',
      tooltip: 'Видалити',
      onClick: (event, rowData) => alert('Ти видалив замовлення'),
    },
  ];
  return (
    <MaterialTable
      actions={actions}
      columns={columns}
      data={sessions}
      title='Сеанси'
    />
  );
};

export default SessionsFrameTable;
