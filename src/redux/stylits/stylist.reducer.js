import { StylistTypes } from './stylist.types';

const INITIAL_STATE = {
  currentStylist: null,
  stylistList: null,
  stylistListLoading: true,
  fetchStylistError: null,
};

const stylistReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case StylistTypes.SET_CURRENT_STYLIST:
      return {
        ...state,
        currentStylist: payload,
      };
    case StylistTypes.FETCH_STYLIST_LIST_START: {
      return {
        ...state,
        stylistListLoading: true,
      };
    }
    case StylistTypes.FETCH_STYLIST_LIST_FAILURE: {
      return {
        ...state,
        stylistListLoading: false,
        fetchStylistError: payload,
      };
    }
    case StylistTypes.FETCH_STYLIST_LIST_SUCCESS: {
      return {
        ...state,
        stylistListLoading: false,
        fetchStylistError: null,
        stylistList: payload,
      };
    }
    default:
      return state;
  }
};

export default stylistReducer;
