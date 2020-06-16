import { handleActions } from 'redux-actions';
import { types } from './sessions.types';

const INITIAL_STATE = {
  isLoadingSessions: false,
  sessions: [],
  sessionsError: null,

  isLoadingRequests: false,
  requests: [],
  requestsError: null,
};

const ACTIONS_MAP = {
  [types.FETCH_SESSIONS_START]: (state, { payload }) => ({
    ...state,
    isLoadingSessions: true,
  }),
  [types.FETCH_SESSIONS_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoadingSessions: false,
    sessions: payload,
    sessionsError: null,
  }),
  [types.FETCH_SESSIONS_FALIURE]: (state, { payload }) => ({
    ...state,
    isLoadingSessions: false,
    sessionsError: payload,
  }),

  [types.FETCH_REQUSETS_START]: (state, { payload }) => ({
    ...state,
    isLoadingRequests: true,
  }),
  [types.FETCH_REQUSETS_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoadingRequests: false,
    requests: payload,
    requestsError: null,
  }),
  [types.FETCH_SESSIONS_FALIURE]: (state, { payload }) => ({
    ...state,
    isLoadingRequests: false,
    requestsError: payload,
  }),
  [types.CONFIRM_REQUEST]: (state, { payload }) => ({
    ...state,
    requests: state.requests.filter((r) => r.id !== payload.id),
    sessions: [
      ...state.sessions,
      {
        ...payload,
        isDone: false,
        totalPrice: payload.service.price,
        serviceName: payload.service.displayName,
      },
    ],
  }),
};

const organizerSessionsReducer = handleActions(ACTIONS_MAP, INITIAL_STATE);

export default organizerSessionsReducer;
