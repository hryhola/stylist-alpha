import { firestore } from '../../../firebase/firebase.utils';
import { StylistTypes } from '../stylist.types';

export const sendSessionRequestStarted = () => ({
  type: StylistTypes.SEND_SESSION_REQUEST_START,
});

export const sendSessionRequestSuccess = () => ({
  type: StylistTypes.SEND_SESSION_REQUEST_SUCCESS,
});

export const sendSessionRequestFailure = (error) => ({
  type: StylistTypes.SEND_SESSION_REQUEST_FAILURE,
  payload: error,
});

export const sendSessionRequestAsync = ({
  stylistId,
  sessionRequest: {
    clientName,
    clientPhoneNumber,
    clientSocialLink,
    dataTime,
    service,
  },
}) => {
  return async (dispatch) => {
    dispatch(sendSessionRequestStarted());
    try {
      const commentsRef = firestore
        .collection('stylists')
        .doc(stylistId)
        .collection('sessionRequests');

      const serviceRef = firestore
        .collection('stylists')
        .doc(stylistId)
        .collection('services')
        .doc(service);

      const response = await commentsRef.add({
        clientName,
        clientPhoneNumber,
        clientSocialLink,
        dataTime: new Date(dataTime),
        service: serviceRef,
      });
      if (response.id) dispatch(sendSessionRequestSuccess());
    } catch (error) {
      console.error('error', error);
      dispatch(sendSessionRequestFailure(error));
    }
  };
};
