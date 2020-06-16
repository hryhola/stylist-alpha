import { createSelector } from 'reselect';

const selectOrganizer = (state) => state.organizer;

export const selectStylistData = createSelector(
  [selectOrganizer],
  (organizer) => organizer.stylistData
);
export const selectStylistId = createSelector(
  [selectStylistData],
  (stylist) => stylist.id
);
export const selectOverviewComments = createSelector(
  [selectOrganizer],
  (organizer) => organizer.overviewComments
);
export const selectLoadingOverviewCommentsError = createSelector(
  [selectOrganizer],
  (organizer) => organizer.loadingOverviewCommentsError
);
export const selectIsLoadingOverviewComments = createSelector(
  [selectOrganizer],
  (organizer) => organizer.isLoadingOverviewComments
);
export const selectOverviewRequests = createSelector(
  [selectOrganizer],
  (organizer) => organizer.overviewSessionRequests
);
export const selectLoadingOverviewRequestsError = createSelector(
  [selectOrganizer],
  (organizer) => organizer.loadingOverviewCommentsError
);
export const selectIsLoadingOverviewRequests = createSelector(
  [selectOrganizer],
  (organizer) => organizer.isLoadingOverviewSessionRequests
);
