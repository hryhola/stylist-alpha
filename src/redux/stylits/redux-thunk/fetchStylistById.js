import { firestore } from '../../../firebase/firebase.utils';
import { StylistTypes } from '../stylist.types';

export const fetchStylistStarted = () => ({
  type: StylistTypes.FETCH_STYLIST_START,
});

export const fetchStylistSuccess = (stylist) => ({
  type: StylistTypes.FETCH_STYLIST_SUCCESS,
  payload: stylist,
});

export const fetchStylistFailure = (error) => ({
  type: StylistTypes.FETCH_STYLIST_FAILURE,
  payload: error,
});

export const fetchStylistListByIdAsync = (id) => {
  return async (dispatch) => {
    dispatch(fetchStylistStarted());
    try {
      const stylistRef = firestore.collection('stylists').doc(id);
      const stylistSnapshot = await stylistRef.get();

      if (stylistSnapshot.exists) {
        const servicesRef = stylistRef.collection('services');
        const servicesSnapshot = await servicesRef.get();
        const services = servicesSnapshot.docs.map((s) => ({
          id: s.id,
          ...s.data(),
        }));

        const stylistData = stylistSnapshot.data();

        const stylist = {
          id: stylistSnapshot.id,
          ...stylistData,
          services,
        };
        dispatch(fetchStylistSuccess(stylist));
      } else {
        dispatch(fetchStylistFailure({ message: 'Not exists' }));
      }
    } catch (error) {
      console.log('error', error);
      dispatch(fetchStylistFailure(error));
    }
  };
};
