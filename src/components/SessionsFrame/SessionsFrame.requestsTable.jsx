import React, { useState } from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';

import { confirmRequest as confirmRequestAction } from '../../redux/organizerSessions/actions/confirmRequest';
import { confirmRequest, deleteRequest } from '../../firebase/sessions';

import localization from '../../shared/material-table-localization';

const SessionsFrameRequestsTable = ({
  sessionRequests,
  confirmRequestAction,
  id,
}) => {
  const [data, setData] = useState(sessionRequests);
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
      field: 'service.displayName',
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
      onClick: (event, rowData) =>
        new Promise((resolve, reject) => {
          confirmRequest(id, rowData)
            .then((id) => {
              const newDataList = [...data.filter((s) => s.id !== rowData.id)];
              setData(newDataList);
              confirmRequestAction({ id, ...rowData });
              resolve();
            })
            .catch((error) => reject());
        }),
    },
    {
      icon: 'close',
      tooltip: 'Відмовити',
      onClick: (event, rowData) =>
        new Promise((resolve, reject) => {
          deleteRequest(id, rowData)
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
      title='Запити'
      localization={localization}
    />
  );
};

const mapDispatchToProps = {
  confirmRequestAction,
};

export default connect(null, mapDispatchToProps)(SessionsFrameRequestsTable);
