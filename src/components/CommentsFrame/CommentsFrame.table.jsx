import React from 'react';
import MaterialTable from 'material-table';

const CommentsFrameTable = ({ comments, id }) => {
  const columns = [
    {
      title: "Ім'я",
      field: 'commentatorName',
    },
    {
      title: 'Електронна пошта',
      field: 'commentatorEmail',
    },
    {
      title: 'Коментар',
      field: 'text',
    },
    {
      title: 'Дата',
      field: 'createdAt',
    },
  ];
  const actions = [
    {
      icon: 'delete',
      tooltip: 'Видалити коментар',
      onClick: (event, rowData) => alert('Ти видалив коментар'),
    },
  ];
  return (
    <MaterialTable
      columns={columns}
      data={comments}
      actions={actions}
      title='Відгуки'
    />
  );
};

export default CommentsFrameTable;
