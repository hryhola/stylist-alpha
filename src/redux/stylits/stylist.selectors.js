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

export const selectSendCommentError = createSelector(
  [selectStylist],
  (stylist) => stylist.sendingCommentError
);

export const selectIsSendingComment = createSelector(
  [selectStylist],
  (stylist) => stylist.isSendingComment
);

export const selectSendSessionRequestError = createSelector(
  [selectStylist],
  (stylist) => stylist.sendingSessionRequestError
);

export const selectIsSendingSessionRequest = createSelector(
  [selectStylist],
  (stylist) => stylist.isSendingSessionRequest
);
