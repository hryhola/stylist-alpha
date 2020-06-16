import { firestore } from './firebase.utils';

export const deleteComment = async (id, comment) => {
  try {
    const commentsRef = firestore
      .collection('stylists')
      .doc(id)
      .collection('comments')
      .doc(comment.id);

    await commentsRef.delete();
  } catch (error) {
    console.error('error', error);
  }
};
