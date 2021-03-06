import { OrganizerTypes as OT } from './organizer.types';
import { handleActions } from 'redux-actions';

const INITIAL_STATE = {
  stylistData: null,

  overviewSessionRequests: [],
  overviewComments: [],
  clients: [],
  comments: [],
  services: [],
  sessions: [],
  sessionRequests: [],

  loadingOverviewSessionRequestsError: null,
  loadingOverviewCommentsError: null,
  loadingClientsError: null,
  loadingCommentsError: null,
  loadingServicesError: null,
  loadingSessionsError: null,
  loadingSessionRequestsError: null,

  isLoadingOverviewSessionRequests: false,
  isLoadingOverviewComments: false,
  isLoadingClients: false,
  isLoadingComments: false,
  isLoadingServices: false,
  isLoadingSessions: false,
  isLoadingSessionRequests: false,
};

const ACTIONS_MAP = {
  [OT.SET_STYLIST_DATA]: (state, { payload }) => ({
    ...state,
    stylistData: payload,
  }),
  [OT.FETCH_OVERVIEW_COMMENTS_START]: (state) => ({
    ...state,
    isLoadingOverviewComments: true,
  }),
  [OT.FETCH_OVERVIEW_COMMENTS_FALIURE]: (state, { payload }) => ({
    ...state,
    isLoadingOverviewComments: false,
    loadingOverviewCommentsError: payload,
  }),
  [OT.FETCH_OVERVIEW_COMMENTS_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoadingOverviewComments: false,
    loadingOverviewCommentsError: null,
    overviewComments: payload,
  }),
  [OT.FETCH_OVERVIEW_REQUESTS_START]: (state) => ({
    ...state,
    isLoadingOverviewSessionRequests: true,
  }),
  [OT.FETCH_OVERVIEW_REQUESTS_FALIURE]: (state, { payload }) => ({
    ...state,
    isLoadingOverviewSessionRequests: false,
    loadingOverviewSessionRequestsError: payload,
  }),
  [OT.FETCH_OVERVIEW_REQUESTS_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoadingOverviewSessionRequests: false,
    loadingOverviewSessionRequestsError: null,
    overviewSessionRequests: payload,
  }),
};

const organizerReducer = handleActions(ACTIONS_MAP, INITIAL_STATE);

export default organizerReducer;
