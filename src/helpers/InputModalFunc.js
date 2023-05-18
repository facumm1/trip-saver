import {updateFireStore, writeFirestore} from '../firebase/firestoreActions';
import initialTripInfo from './initialTripInfo';

export const add = (setTripModal, tripInfo, setTripInfo) => {
  writeFirestore(tripInfo);

  setTripInfo(initialTripInfo());
  setTripModal(prevStatus => !prevStatus);
};

export const modify = (setTripModal, tripInfo, setTripInfo, setEditedTrip) => {
  updateFireStore(tripInfo);
  setEditedTrip(prev => ({updated: true, id: ''}));

  setTripInfo(initialTripInfo());
  setTripModal(prevStatus => !prevStatus);
};

export const cancel = (setTripModal, setTripInfo, setEditedTrip) => {
  if (setEditedTrip) {
    setEditedTrip(prev => ({...prev, id: ''}));
  }

  setTripInfo(initialTripInfo());
  setTripModal(prevStatus => !prevStatus);
};
