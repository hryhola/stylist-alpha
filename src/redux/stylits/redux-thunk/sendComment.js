import { firestore } from '../../../firebase/firebase.utils';
import { StylistTypes } from '../stylist.types';

export const sendCommentStarted = () => ({
  type: StylistTypes.SEND_COMMENT_START,
});

export const sendCommentSuccess = ({ stylistId, comment }) => ({
  type: StylistTypes.SEND_COMMENT_SUCCESS,
  payload: { stylistId, comment },
});

export const sendCommentFailure = (error) => ({
  type: StylistTypes.SEND_COMMENT_FAILURE,
  payload: error,
});

export const sendCommentAsync = ({
  stylistId,
  comment: { name, email, text },
}) => {
  return async (dispatch) => {
    dispatch(sendCommentStarted());
    try {
      const commentsRef = firestore
        .collection('stylists')
        .doc(stylistId)
        .collection('comments');

      const response = await commentsRef.add({
        commentatorName: name,
        commentatorEmail: email,
        text,
      });
      if (response.id)
        dispatch(
          sendCommentSuccess({ stylistId, comment: { name, email, text } })
        );
      console.log(response);
    } catch (error) {
      console.error('error', error);
      dispatch(sendCommentFailure(error));
    }
  };
};
