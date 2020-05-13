import { firestore } from '../../../firebase/firebase.utils';
import { StylistTypes } from '../stylist.types';

const getDataFromCollectionSpapshot = (snapshot) =>
  snapshot.docs.map((s) => ({
    id: s.id,
    ...s.data(),
  }));

export const fetchStylistContentStarted = () => ({
  type: StylistTypes.FETCH_STYLIST_CONTENT_START,
});

export const fetchStylistContentSuccess = (stylistContent) => ({
  type: StylistTypes.FETCH_STYLIST_CONTENT_SUCCESS,
  payload: stylistContent,
});

export const fetchStylistContentFailure = (error) => ({
  type: StylistTypes.FETCH_STYLIST_CONTENT_FAILURE,
  payload: error,
});

export const fetchStylistContentAsync = (id) => {
  return async (dispatch) => {
    dispatch(fetchStylistContentStarted());
    try {
      const stylistRef = firestore.collection('stylists').doc(id);
      const stylistSnapshot = await stylistRef.get();

      if (stylistSnapshot.exists) {
        const servicesRef = stylistRef.collection('services');
        const servicesSnapshot = await servicesRef.get();
        const services = getDataFromCollectionSpapshot(servicesSnapshot);

        const commentsRef = stylistRef.collection('comments');
        const commentsSnapshop = await commentsRef.get();
        const comments = getDataFromCollectionSpapshot(commentsSnapshop);

        const stylistContent = {
          id,
          services,
          comments,
        };
        dispatch(fetchStylistContentSuccess(stylistContent));
      } else {
        dispatch(fetchStylistContentFailure({ message: 'Not exists' }));
      }
    } catch (error) {
      dispatch(fetchStylistContentFailure(error));
    }
  };
};
