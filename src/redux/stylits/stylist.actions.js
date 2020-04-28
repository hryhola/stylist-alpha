import { StylistTypes } from './stylist.types';

export const setCurrentStylist = (stylist) => ({
  type: StylistTypes.SET_CURRENT_STYLIST,
  payload: stylist,
});
