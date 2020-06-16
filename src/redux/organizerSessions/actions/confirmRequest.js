import { types } from '../sessions.types';

export const confirmRequest = (request) => ({
  type: types.CONFIRM_REQUEST,
  payload: request,
});
