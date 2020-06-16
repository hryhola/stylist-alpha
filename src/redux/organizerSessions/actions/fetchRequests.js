import { firestore } from '../../../firebase/firebase.utils';
import { types } from '../sessions.types';

const getDataFromCollectionSnapshot = (snapshot) =>
  snapshot.docs.map((s) => ({
    id: s.id,
    ...s.data(),
  }));

export const fetchRequestsStarted = () => ({
  type: types.FETCH_REQUSETS_START,
});

export const fetchRequestsSuccess = (requests) => ({
  type: types.FETCH_REQUSETS_SUCCESS,
  payload: requests,
});

export const fetchRequestsFailure = (error) => ({
  type: types.FETCH_REQUSETS_FALIURE,
  payload: error,
});

export const fetchRequestsAsync = (id) => {
  return async (dispatch) => {
    dispatch(fetchRequestsStarted());
    try {
      const stylistRef = firestore.collection('stylists').doc(id);
      const stylistSnapshot = await stylistRef.get();
      if (stylistSnapshot.exists) {
        const requestsRef = stylistRef.collection('sessionRequests');
        const requestsSnapshop = await requestsRef.get();
        const requests = getDataFromCollectionSnapshot(requestsSnapshop);

        const requestsWithServices = requests.map(async (r) => {
          const serviceSnapshot = await r.service.get();
          const date = r.dateTime.toDate();
          const created = r.createdAt.toDate();
          return {
            ...r,
            createdAt: `${created.toLocaleDateString()} ${created.toLocaleTimeString()}`,
            dateTime: `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`,
            service: { id: serviceSnapshot.id, ...serviceSnapshot.data() },
          };
        });
        Promise.all(requestsWithServices).then((completeRequestsList) => {
          dispatch(fetchRequestsSuccess(completeRequestsList));
        });
      } else {
        dispatch(fetchRequestsFailure({ message: 'Not exists' }));
      }
    } catch (error) {
      dispatch(fetchRequestsFailure(error));
    }
  };
};
