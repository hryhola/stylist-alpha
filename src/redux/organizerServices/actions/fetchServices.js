import { firestore } from '../../../firebase/firebase.utils';
import { types } from '../types';

const getDataFromCollectionSnapshot = (snapshot) =>
  snapshot.docs.map((s) => ({
    id: s.id,
    ...s.data(),
  }));

export const fetchServicesStarted = () => ({
  type: types.FETCH_SERVICES_START,
});

export const fetchServicesSuccess = (services) => ({
  type: types.FETCH_SERVICES_SUCCESS,
  payload: services,
});

export const fetchServicesFailure = (error) => ({
  type: types.FETCH_SERVICES_FALIURE,
  payload: error,
});

export const fetchServicesAsync = (id) => {
  return async (dispatch) => {
    dispatch(fetchServicesStarted());
    try {
      const stylistRef = firestore.collection('stylists').doc(id);
      const stylistSnapshot = await stylistRef.get();
      if (stylistSnapshot.exists) {
        const servicesRef = stylistRef.collection('services');
        const servicesSnapshop = await servicesRef.get();
        const services = getDataFromCollectionSnapshot(servicesSnapshop);

        dispatch(fetchServicesSuccess(services));
      } else {
        dispatch(fetchServicesFailure({ message: 'Not exists' }));
      }
    } catch (error) {
      dispatch(fetchServicesFailure(error));
    }
  };
};
