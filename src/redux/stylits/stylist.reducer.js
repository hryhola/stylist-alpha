import { StylistTypes } from './stylist.types';

const INITIAL_STATE = {
  currentStylist: null,
  stylistList: [],
  stylistListLoading: true,
  fetchStylistError: null,

  isSendingComment: false,
  sendingCommentError: null,

  isSendingSessionRequest: false,
  sendingSessionRequestError: null,
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
    case StylistTypes.SEND_COMMENT_START: {
      return {
        ...state,
        isSendingComment: true,
        sendingCommentError: null,
      };
    }
    case StylistTypes.SEND_COMMENT_FAILURE: {
      return {
        ...state,
        isSendingComment: false,
        sendingCommentError: payload,
      };
    }
    case StylistTypes.SEND_COMMENT_SUCCESS: {
      const stylist = state.stylistList.find((s) => s.id === payload.stylistId);
      stylist.comments.push({
        commentatorName: payload.comment.name,
        commentatorEmail: payload.comment.email,
        text: payload.comment.text,
      });
      return {
        ...state,
        isSendingComment: false,
        sendingCommentError: null,
        stylistList: [
          ...state.stylistList.filter((s) => s.id !== payload.stylistId),
          stylist,
        ],
      };
    }
    case StylistTypes.SEND_SESSION_REQUEST_START: {
      return {
        ...state,
        isSendingSessionRequest: true,
        sendingSessionRequestError: null,
      };
    }
    case StylistTypes.SEND_SESSION_REQUEST_FAILURE: {
      return {
        ...state,
        isSendingSessionRequest: false,
        sendingSessionRequestError: payload,
      };
    }
    case StylistTypes.SEND_SESSION_REQUEST_SUCCESS: {
      return {
        ...state,
        isSendingSessionRequest: false,
        sendingSessionRequestError: null,
      };
    }
    default:
      return state;
  }
};

export default stylistReducer;
