import { StylistTypes } from './stylist.types';

const INITIAL_STATE = {
  currentStylist: null,
  stylistList: [],
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
        stylistList: [...payload],
      };
    }
    case StylistTypes.FETCH_STYLIST_START: {
      return {
        ...state,
        fetchStylistError: null,
      };
    }
    case StylistTypes.FETCH_STYLIST_FAILURE: {
      return {
        ...state,
        fetchStylistError: payload,
      };
    }
    case StylistTypes.FETCH_STYLIST_SUCCESS: {
      return {
        ...state,
        fetchStylistError: null,
        stylistList: [
          ...state.stylistList.filter((s) => s.id !== payload.id),
          payload,
        ],
      };
    }
    case StylistTypes.FETCH_STYLIST_CONTENT_SUCCESS: {
      return {
        ...state,
        stylistList: [
          ...state.stylistList.filter((s) => s.id !== payload.id),
          { ...state.stylistList.find((s) => s.id === payload.id), ...payload },
        ],
      };
    }
    default:
      return state;
  }
};

export default stylistReducer;
