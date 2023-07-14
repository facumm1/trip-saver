import firestore from '@react-native-firebase/firestore';

export const readFirestore = async uid => {
  try {
    const tripsData = await firestore()
      .collection('usuarios')
      .doc(uid)
      .collection('viajes')
      .get();

    console.log('tripsData', tripsData.docs);

    console.log('Reading trips...');

    return tripsData.docs;
  } catch (err) {
    console.error('readFirestore error:', err);
  }
};

export const writeFirestore = async (tripInfo, uid) => {
  try {
    const {id, pasajero, importe, desde, hacia, fecha} = tripInfo;
    console.log('id:', uid);

    await firestore()
      .collection('usuarios')
      .doc(uid)
      .collection('viajes')
      .doc(id)
      .set({id, pasajero, importe, desde, hacia, fecha});

    console.log('Adding new trip...');
  } catch (err) {
    console.error('writeFirestore error:', err);
  }
};

export const delFirestore = async tripId => {
  try {
    await firestore().collection('viajes').doc(tripId).delete();

    console.log('Deleting trip...');
  } catch (err) {
    console.log('delFirestore error:', err);
  }
};

// TODO limpiar trips con la prop dateSelected de firestore
export const updateFireStore = async tripInfo => {
  const {id, pasajero, importe, desde, hacia, fecha} = tripInfo;

  try {
    await firestore()
      .collection('viajes')
      .doc(tripInfo.id)
      .update({id, pasajero, importe, desde, hacia, fecha})
      .then(() => {
        console.log('Updating user...');
      });
  } catch (err) {
    console.log('delFirestore error:', err);
  }
};
