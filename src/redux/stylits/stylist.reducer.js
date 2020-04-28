import { StylistTypes } from './stylist.types';

const INITIAL_STATE = {
  currentStylist: null,
};

const stylistReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StylistTypes.SET_CURRENT_STYLIST:
      return {
        ...state,
        currentStylist: action.payload,
      };
    default:
      return state;
  }
};

export default stylistReducer;
