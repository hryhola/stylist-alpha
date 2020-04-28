import { createSelector } from 'reselect';

const selectStylist = (state) => state.stylist;

export const selectCurrentStylist = createSelector(
  [selectStylist],
  (stylist) => stylist.currentStylist
);
