import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectStylistId } from '../../redux/organizer/organizer.selectors';
import {
  selectIsLoading,
  selectError,
  selectClients,
} from '../../redux/organizerClients/selectors';

import { fetchClientsAsync } from '../../redux/organizerClients/actions/fetchClients';

import ClientsFrame from './ClientsFrame';

const mapStateToProps = createStructuredSelector({
  id: selectStylistId,
  isLoading: selectIsLoading,
  error: selectError,
  clients: selectClients,
});

const mapDispatchToProps = {
  fetchClients: fetchClientsAsync,
};

const ClientsFrameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientsFrame);

export default ClientsFrameContainer;
