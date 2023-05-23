import {useState} from 'react';
import initialTripInfo from '../helpers/initialTripInfo';
import {updateFireStore, writeFirestore} from '../firebase/firestoreActions';

const useTripActions = (setTripModal, setEditedTrip) => {
  const [tripInfo, setTripInfo] = useState(initialTripInfo());
  const [modalDatePicker, setModalDate] = useState(false);

  const addTrip = () => {
    writeFirestore(tripInfo);

    setTripInfo(initialTripInfo());
    setTripModal(prevStatus => !prevStatus);
  };

  const modifyTrip = () => {
    updateFireStore(tripInfo);

    setEditedTrip(prev => ({updated: true, id: ''}));
    setTripInfo(initialTripInfo());
    setTripModal(prevStatus => !prevStatus);
  };

  const cancelTrip = () => {
    if (setEditedTrip) {
      setEditedTrip(prev => ({...prev, id: ''}));
    }
    setTripInfo(initialTripInfo());
    setTripModal(prevStatus => !prevStatus);
  };

  return {
    modalDatePicker,
    setModalDate,
    tripInfo,
    setTripInfo,
    addTrip,
    modifyTrip,
    cancelTrip,
  };
};

export default useTripActions;
