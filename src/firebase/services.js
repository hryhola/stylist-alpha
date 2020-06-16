import { firestore } from './firebase.utils';

export const addService = async (id, service) => {
  try {
    const servicesRef = firestore
      .collection('stylists')
      .doc(id)
      .collection('services');

    const response = await servicesRef.add({
      ...service,
      createdAt: new Date(),
    });
    return response.id;
  } catch (error) {
    console.error('error', error);
  }
};

export const updateService = async (id, service) => {
  try {
    const serviceRef = firestore
      .collection('stylists')
      .doc(id)
      .collection('services')
      .doc(service.id);

    const body = { ...service };
    delete body.id;

    await serviceRef.update({
      ...body,
      updatedAt: new Date(),
    });
  } catch (error) {
    console.error('error', error);
  }
};

export const deleteService = async (id, service) => {
  try {
    const serviceRef = firestore
      .collection('stylists')
      .doc(id)
      .collection('services')
      .doc(service.id);

    await serviceRef.delete();
  } catch (error) {
    console.error('error', error);
  }
};
