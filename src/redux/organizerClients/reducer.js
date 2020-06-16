import { handleActions } from 'redux-actions';
import { types } from './types';

const INITIAL_STATE = {
  isLoading: false,
  clients: [],
  error: null,
};

const ACTIONS_MAP = {
  [types.FETCH_CLIENTS_START]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [types.FETCH_CLIENTS_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    clients: payload,
    error: null,
  }),
  [types.FETCH_CLIENTS_FALIURE]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),
};

const organizerClientsReducer = handleActions(ACTIONS_MAP, INITIAL_STATE);

export default organizerClientsReducer;
