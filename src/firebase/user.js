import firebase from 'firebase/app';
import 'firebase/auth';

import { auth, firestore } from './firebase.utils';

export const updateUserProfile = async (
  id,
  { oldPassword, newPassword, oldEmail, newEmail, ...body }
) => {
  const user = auth.currentUser;
  const stylistRef = firestore.collection('stylists').doc(id);

  const credential = firebase.auth.EmailAuthProvider.credential(
    oldEmail,
    oldPassword
  );

  await user.reauthenticateWithCredential(credential);

  if (oldPassword !== newPassword) await user.updatePassword(newPassword);

  if (oldEmail !== newEmail) await user.updateEmail(newEmail);

  await stylistRef.update({ ...body, email: newEmail, password: newPassword });
};
