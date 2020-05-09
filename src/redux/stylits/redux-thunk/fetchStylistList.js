import { firestore } from '../../../firebase/firebase.utils';
import { StylistTypes } from '../stylist.types';

export const fetchStylistListStarted = () => ({
  type: StylistTypes.FETCH_STYLIST_LIST_START,
});

export const fetchStylistListSuccess = (list) => ({
  type: StylistTypes.FETCH_STYLIST_LIST_SUCCESS,
  payload: list,
});

export const fetchStylistListFailure = (error) => ({
  type: StylistTypes.FETCH_STYLIST_LIST_FAILURE,
  payload: error,
});

export const fetchStylistListAsync = () => {
  return async (dispatch) => {
    dispatch(fetchStylistListStarted());
    try {
      const listRef = firestore.collection('stylists');
      const snapshot = await listRef.get();
      const list = snapshot.docs.map((s) => ({ ...s.data(), id: s.id }));
      dispatch(fetchStylistListSuccess(list));
    } catch (error) {
      dispatch(fetchStylistListFailure(error));
    }
  };
};
