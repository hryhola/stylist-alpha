import { firestore } from '../../../firebase/firebase.utils';
import { types } from '../types';

const getDataFromCollectionSnapshot = (snapshot) =>
  snapshot.docs.map((s) => ({
    id: s.id,
    ...s.data(),
  }));

export const fetchClientsStarted = () => ({
  type: types.FETCH_CLIENTS_START,
});

export const fetchClientsSuccess = (services) => ({
  type: types.FETCH_CLIENTS_SUCCESS,
  payload: services,
});

export const fetchClientsFailure = (error) => ({
  type: types.FETCH_CLIENTS_FALIURE,
  payload: error,
});

export const fetchClientsAsync = (id) => {
  return async (dispatch) => {
    dispatch(fetchClientsStarted());
    try {
      const stylistRef = firestore.collection('stylists').doc(id);
      const stylistSnapshot = await stylistRef.get();
      if (stylistSnapshot.exists) {
        const clientsRef = stylistRef.collection('clients');
        const clientsSnapshop = await clientsRef.get();
        const clients = getDataFromCollectionSnapshot(clientsSnapshop);

        dispatch(fetchClientsSuccess(clients));
      } else {
        dispatch(fetchClientsFailure({ message: 'Not exists' }));
      }
    } catch (error) {
      console.error(error);
      dispatch(fetchClientsFailure(error));
    }
  };
};
