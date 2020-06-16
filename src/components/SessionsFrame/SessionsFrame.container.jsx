import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectStylistId } from '../../redux/organizer/organizer.selectors';
import {
  selectIsLoadingRequests,
  selectIsLoadingSessions,
  selectRequests,
  selectRequestsError,
  selectSessions,
  selectSessionsError,
} from '../../redux/organizerSessions/sessions.selectors';

import { fetchRequestsAsync } from '../../redux/organizerSessions/actions/fetchRequests';
import { fetchSessionsAsync } from '../../redux/organizerSessions/actions/fetchSessions';

import SessionsFrame from './SessionsFrame';

const mapStateToProps = createStructuredSelector({
  isLoadingRequests: selectIsLoadingRequests,
  isLoadingSessions: selectIsLoadingSessions,
  requests: selectRequests,
  requestsError: selectRequestsError,
  sessions: selectSessions,
  sessionsError: selectSessionsError,
  id: selectStylistId,
});

const mapDispatchToProps = {
  fetchRequests: fetchRequestsAsync,
  fetchSessions: fetchSessionsAsync,
};

const SessionsFrameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionsFrame);

export default SessionsFrameContainer;
