import { createSelector } from 'reselect';

const selectOrganizerComments = (state) => state.organizerComments;

export const selectComments = createSelector(
  [selectOrganizerComments],
  (organizer) => organizer.comments
);

export const selectIsLoading = createSelector(
  [selectOrganizerComments],
  (organizer) => organizer.isLoading
);

export const selectError = createSelector(
  [selectOrganizerComments],
  (organizer) => organizer.error
);
