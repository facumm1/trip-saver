import firestore from '@react-native-firebase/firestore';

const readFirestore = async () => {
  try {
    const tripsData = await firestore().collection('viajes').get();
    //tripsData.docs.forEach(trip => console.log(trip.data()));
    return tripsData.docs;
  } catch (err) {
    console.error('loadFirestoreError', err);
  }
};

export default readFirestore;
