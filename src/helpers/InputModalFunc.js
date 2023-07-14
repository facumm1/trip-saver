import {updateFireStore, writeFirestore} from '../firebase/firestoreActions';
import initialTripInfo from './initialTripInfo';

//TODO refactor para estas funciones

export const add = (setTripModal, selectedTrip, setSelectedTrip, uid) => {
  writeFirestore(selectedTrip, uid);

  setSelectedTrip(initialTripInfo());
  setTripModal(prevStatus => !prevStatus);
};

export const modify = (
  setTripModal,
  selectedTrip,
  setSelectedTrip,
  setEditedTrip,
) => {
  updateFireStore(selectedTrip);
  setEditedTrip(prev => ({updated: true, id: ''}));

  setSelectedTrip(initialTripInfo());
  setTripModal(prevStatus => !prevStatus);
};

export const cancel = (setTripModal, setSelectedTrip, setEditedTrip) => {
  if (setEditedTrip) {
    setEditedTrip(prev => ({...prev, id: ''}));
  }

  setSelectedTrip(initialTripInfo());
  setTripModal(prevStatus => !prevStatus);
};
