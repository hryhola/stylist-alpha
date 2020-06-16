import { handleActions } from 'redux-actions';
import { types } from './comments.types';

const INITIAL_STATE = {
  isLoading: false,
  comments: [],
  error: null,
};

const ACTIONS_MAP = {
  [types.FETCH_COMMENTS_START]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [types.FETCH_COMMENTS_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    comments: payload,
    error: null,
  }),
  [types.FETCH_COMMENTS_FALIURE]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),
};

const organizeraCommentsReducer = handleActions(ACTIONS_MAP, INITIAL_STATE);

export default organizeraCommentsReducer;
