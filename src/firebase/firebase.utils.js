import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBvUtwBktDOesgEL2StMnKhJlbu-8rtgak',
  authDomain: 'stylist-963c3.firebaseapp.com',
  databaseURL: 'https://stylist-963c3.firebaseio.com',
  projectId: 'stylist-963c3',
  storageBucket: 'stylist-963c3.appspot.com',
  messagingSenderId: '910322828701',
  appId: '1:910322828701:web:eb6665c35319d8d0615b74',
  measurementId: 'G-QMFZKPSPQ4',
};
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createProfieDocument = async (stylistAuth, additionalData) => {
  if (!stylistAuth) return null;

  const stylistRef = firestore.doc(`stylists/${stylistAuth.uid}`);

  const snapShot = await stylistRef.get();

  if (!snapShot.exists) {
    const { stylistName, email } = stylistAuth;
    const createdAt = new Date();

    try {
      await stylistRef.set({
        stylistName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return stylistRef;
};
