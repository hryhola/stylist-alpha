import { firestore } from '../../../firebase/firebase.utils';
import { types } from '../sessions.types';

const getDataFromCollectionSnapshot = (snapshot) =>
  snapshot.docs.map((s) => ({
    id: s.id,
    ...s.data(),
  }));

export const fetchSessionsStarted = () => ({
  type: types.FETCH_SESSIONS_START,
});

export const fetchSessionsSuccess = (sessions) => ({
  type: types.FETCH_SESSIONS_SUCCESS,
  payload: sessions,
});

export const fetchSessionsFailure = (error) => ({
  type: types.FETCH_SESSIONS_FALIURE,
  payload: error,
});

export const fetchSessionsAsync = (id) => {
  return async (dispatch) => {
    dispatch(fetchSessionsStarted());
    try {
      const stylistRef = firestore.collection('stylists').doc(id);
      const stylistSnapshot = await stylistRef.get();
      if (stylistSnapshot.exists) {
        const sessionsRef = stylistRef.collection('sessions');
        const sessionsSnapshop = await sessionsRef.get();
        const sessions = getDataFromCollectionSnapshot(sessionsSnapshop);

        const sessionsWithDate = sessions.map((r) => {
          const date =
            typeof r.dateTime == 'string' ? r.dateTime : r.dateTime.toDate();
          return {
            ...r,
            dateTime:
              typeof r.dateTime == 'string'
                ? r.dateTime
                : `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
          };
        });
        dispatch(fetchSessionsSuccess(sessionsWithDate));
      } else {
        dispatch(fetchSessionsFailure({ message: 'Not exists' }));
      }
    } catch (error) {
      dispatch(fetchSessionsFailure(error));
    }
  };
};
