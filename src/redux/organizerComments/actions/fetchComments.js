import { firestore } from '../../../firebase/firebase.utils';
import { types } from '../comments.types';

const getDataFromCollectionSnapshot = (snapshot) =>
  snapshot.docs.map((s) => ({
    id: s.id,
    ...s.data(),
  }));

export const fetchCommentsStarted = () => ({
  type: types.FETCH_COMMENTS_START,
});

export const fetchCommentsSuccess = (comments) => ({
  type: types.FETCH_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchCommentsFailure = (error) => ({
  type: types.FETCH_COMMENTS_FALIURE,
  payload: error,
});

export const fetchCommentsAsync = (id) => {
  return async (dispatch) => {
    dispatch(fetchCommentsStarted());
    try {
      const stylistRef = firestore.collection('stylists').doc(id);
      const stylistSnapshot = await stylistRef.get();
      if (stylistSnapshot.exists) {
        const commentsRef = stylistRef.collection('comments');

        const commentsSnapshop = await commentsRef.get();
        const comments = getDataFromCollectionSnapshot(commentsSnapshop);

        dispatch(
          fetchCommentsSuccess(
            comments.map((c) => ({
              ...c,
              createdAt: `${c.createdAt
                .toDate()
                .toLocaleTimeString()} ${c.createdAt
                .toDate()
                .toLocaleDateString()}`,
            }))
          )
        );
      } else {
        dispatch(fetchCommentsFailure({ message: 'Not exists' }));
      }
    } catch (error) {
      dispatch(fetchCommentsFailure(error));
    }
  };
};
