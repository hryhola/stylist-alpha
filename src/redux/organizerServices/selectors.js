import { createSelector } from 'reselect';

const selectOrganizerServices = (state) => state.organizerServices;

export const selectServices = createSelector(
  [selectOrganizerServices],
  (organizer) => organizer.services
);

export const selectIsLoading = createSelector(
  [selectOrganizerServices],
  (organizer) => organizer.isLoading
);

export const selectError = createSelector(
  [selectOrganizerServices],
  (organizer) => organizer.error
);
