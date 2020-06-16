import { firestore } from './firebase.utils';

export const confirmRequest = async (id, request) => {
  try {
    const requestRef = firestore
      .collection('stylists')
      .doc(id)
      .collection('sessionRequests')
      .doc(request.id);

    await requestRef.delete();

    const sessionsRef = firestore
      .collection('stylists')
      .doc(id)
      .collection('sessions');

    const body = { ...request };

    body.serviceName = request.service.displayName;
    body.isDone = false;
    body.totalPrice = request.service.price;

    delete body.service;
    delete body.id;

    const response = await sessionsRef.add(body);
    return response.id;
  } catch (error) {
    console.error(error);
  }
};

export const deleteRequest = async (id, request) => {
  try {
    const requestRef = firestore
      .collection('stylists')
      .doc(id)
      .collection('sessionRequests')
      .doc(request.id);

    await requestRef.delete();
  } catch (error) {
    console.error(error);
  }
};

export const deleteSession = async (id, session) => {
  try {
    const sessionRef = firestore
      .collection('stylists')
      .doc(id)
      .collection('sessions')
      .doc(session.id);

    await sessionRef.delete();
  } catch (error) {
    console.error(error);
  }
};

export const setIsDoneSession = async (id, session) => {
  try {
    const sessionRef = firestore
      .collection('stylists')
      .doc(id)
      .collection('sessions')
      .doc(session.id);

    await sessionRef.update({ isDone: true });
  } catch (error) {
    console.error(error);
  }
};
