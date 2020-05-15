import { OrganizerTypes as OT } from './organizer.types';

export const setStylistData = (stylistData) => ({
  type: OT.SET_STYLIST_DATA,
  payload: stylistData,
});
