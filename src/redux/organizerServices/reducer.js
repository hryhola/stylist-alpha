import { handleActions } from 'redux-actions';
import { types } from './types';

const INITIAL_STATE = {
  isLoading: false,
  services: [],
  error: null,
};

const ACTIONS_MAP = {
  [types.FETCH_SERVICES_START]: (state, { payload }) => ({
    ...state,
    isLoading: true,
  }),
  [types.FETCH_SERVICES_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    services: payload,
    error: null,
  }),
  [types.FETCH_SERVICES_FALIURE]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),
};

const organizerServicesReducer = handleActions(ACTIONS_MAP, INITIAL_STATE);

export default organizerServicesReducer;
