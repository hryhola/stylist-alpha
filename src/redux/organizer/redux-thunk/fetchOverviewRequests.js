import { firestore } from '../../../firebase/firebase.utils';
import { OrganizerTypes as OT } from '../organizer.types';

const getDataFromCollectionSnapshot = (snapshot) =>
  snapshot.docs.map((s) => ({
    id: s.id,
    ...s.data(),
  }));

export const fetchOverviewRequestsStarted = () => ({
  type: OT.FETCH_OVERVIEW_REQUESTS_START,
});

export const fetchOverviewRequestsSuccess = (requests) => ({
  type: OT.FETCH_OVERVIEW_REQUESTS_SUCCESS,
  payload: requests,
});

export const fetchOverviewRequestsFailure = (error) => ({
  type: OT.FETCH_OVERVIEW_REQUESTS_FALIURE,
  payload: error,
});

export const fetchOverviewRequestsAsync = (id) => {
  return async (dispatch) => {
    dispatch(fetchOverviewRequestsStarted());
    try {
      const stylistRef = firestore.collection('stylists').doc(id);
      const stylistSnapshot = await stylistRef.get();
      if (stylistSnapshot.exists) {
        const requestsRef = stylistRef
          .collection('sessionRequests')
          .orderBy('createdAt', 'desc')
          .limit(4);
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
          dispatch(fetchOverviewRequestsSuccess(completeRequestsList));
        });
      } else {
        dispatch(fetchOverviewRequestsFailure({ message: 'Not exists' }));
      }
    } catch (error) {
      console.log(error);
      dispatch(fetchOverviewRequestsFailure(error));
    }
  };
};
