import { OrganizerTypes as OT } from './organizer.types';

export const setStylistData = (stylistData) => ({
  type: OT.SET_STYLIST_DATA,
  payload: stylistData,
});

export const updataStylistData = (stylistData) => ({
  type: OT.UPDATE_USER_PROFILE,
  payload: stylistData,
});
