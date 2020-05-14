import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import SessionRequestDialog from './SessionRequestDialog';

import {
  selectSendSessionRequestError,
  selectIsSendingSessionRequest,
} from '../../redux/stylits/stylist.selectors';
import { sendSessionRequestAsync } from '../../redux/stylits/redux-thunk/sendSessionRequest';

const mapStateToProps = createStructuredSelector({
  isSending: selectIsSendingSessionRequest,
  error: selectSendSessionRequestError,
});

const mapDispatchToProps = (dispatch) => ({
  sendSessionRequest: (args) => dispatch(sendSessionRequestAsync(args)),
});

const SessionRequestDialogContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionRequestDialog);

export default SessionRequestDialogContainer;
