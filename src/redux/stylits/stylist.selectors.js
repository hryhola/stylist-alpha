import { createSelector } from 'reselect';

const selectStylist = (state) => state.stylist;

export const selectCurrentStylist = createSelector(
  [selectStylist],
  (stylist) => stylist.currentStylist
);

export const selectStylistList = createSelector(
  [selectStylist],
  (stylist) => stylist.stylistList
);

export const selectStylistListLoading = createSelector(
  [selectStylist],
  (stylist) => stylist.stylistListLoading
);

export const selectFetchStylistError = createSelector(
  [selectStylist],
  (stylist) => stylist.fetchStylistError
);
