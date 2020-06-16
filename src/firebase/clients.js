import { firestore } from './firebase.utils';
import firebase from 'firebase/app';

export const addClient = async (id, client) => {
  try {
    const clientsRef = firestore
      .collection('stylists')
      .doc(id)
      .collection('clients');

    const response = await clientsRef.add({
      ...client,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    });
    return response.id;
  } catch (error) {
    console.error('error', error);
  }
};

export const updateClient = async (id, client) => {
  try {
    const clientRef = firestore
      .collection('stylists')
      .doc(id)
      .collection('clients')
      .doc(client.id);

    const body = { ...client };
    delete body.id;

    await clientRef.update({
      ...body,
      updatedAt: firebase.firestore.Timestamp.fromDate(new Date()),
    });
  } catch (error) {
    console.error('error', error);
  }
};

export const deleteClient = async (id, client) => {
  try {
    const clientRef = firestore
      .collection('stylists')
      .doc(id)
      .collection('services')
      .doc(client.id);

    await clientRef.delete();
  } catch (error) {
    console.error('error', error);
  }
};
