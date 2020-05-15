import { firestore } from '../../../firebase/firebase.utils';
import { OrganizerTypes as OT } from '../organizer.types';

const getDataFromCollectionSnapshot = (snapshot) =>
  snapshot.docs.map((s) => ({
    id: s.id,
    ...s.data(),
  }));

export const fetchOverviewCommentsStarted = () => ({
  type: OT.FETCH_OVERVIEW_COMMENTS_START,
});

export const fetchOverviewCommentsSuccess = (comments) => ({
  type: OT.FETCH_OVERVIEW_COMMENTS_SUCCESS,
  payload: comments,
});

export const fetchOverviewCommentsFailure = (error) => ({
  type: OT.FETCH_OVERVIEW_COMMENTS_FALIURE,
  payload: error,
});

export const fetchOverviewCommentsAsync = (id) => {
  return async (dispatch) => {
    dispatch(fetchOverviewCommentsStarted());
    try {
      const stylistRef = firestore.collection('stylists').doc(id);
      const stylistSnapshot = await stylistRef.get();
      if (stylistSnapshot.exists) {
        const commentsRef = stylistRef
          .collection('comments')
          .orderBy('createdAt', 'desc')
          .limit(4);
        const commentsSnapshop = await commentsRef.get();
        const comments = getDataFromCollectionSnapshot(commentsSnapshop);

        dispatch(fetchOverviewCommentsSuccess(comments));
      } else {
        dispatch(fetchOverviewCommentsFailure({ message: 'Not exists' }));
      }
    } catch (error) {
      dispatch(fetchOverviewCommentsFailure(error));
    }
  };
};
