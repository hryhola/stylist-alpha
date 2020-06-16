import { createSelector } from 'reselect';

const selectOrganizerSessions = (state) => state.organizerSessions;

export const selectSessions = createSelector(
  [selectOrganizerSessions],
  (organizer) => organizer.sessions
);

export const selectIsLoadingSessions = createSelector(
  [selectOrganizerSessions],
  (organizer) => organizer.isLoadingSessions
);

export const selectSessionsError = createSelector(
  [selectOrganizerSessions],
  (organizer) => organizer.sessionsError
);

export const selectRequests = createSelector(
  [selectOrganizerSessions],
  (organizer) => organizer.requests
);

export const selectIsLoadingRequests = createSelector(
  [selectOrganizerSessions],
  (organizer) => organizer.isLoadingRequests
);

export const selectRequestsError = createSelector(
  [selectOrganizerSessions],
  (organizer) => organizer.requestsError
);
