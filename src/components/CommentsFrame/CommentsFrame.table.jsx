import React, { useState } from 'react';
import MaterialTable from 'material-table';

import localization from '../../shared/material-table-localization';

import { deleteComment } from '../../firebase/comments';

const CommentsFrameTable = ({ comments, id }) => {
  const [commentsDate, setCommentsData] = useState(comments);
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
      onClick: (event, rowData) =>
        new Promise((resolve, reject) => {
          deleteComment(id, rowData)
            .then(() => {
              const newDataList = [
                ...commentsDate.filter((s) => s.id !== rowData.id),
              ];
              setCommentsData(newDataList);
              resolve();
            })
            .catch((error) => reject());
        }),
    },
  ];
  return (
    <MaterialTable
      columns={columns}
      data={commentsDate}
      actions={actions}
      title='Відгуки'
      localization={localization}
    />
  );
};

export default CommentsFrameTable;
