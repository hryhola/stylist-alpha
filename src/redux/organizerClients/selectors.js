import { createSelector } from 'reselect';

const selectOrganizerClients = (state) => state.organizerClients;

export const selectClients = createSelector(
  [selectOrganizerClients],
  (organizer) => organizer.clients
);

export const selectIsLoading = createSelector(
  [selectOrganizerClients],
  (organizer) => organizer.isLoading
);

export const selectError = createSelector(
  [selectOrganizerClients],
  (organizer) => organizer.error
);
