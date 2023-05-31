import React, {useContext, useMemo} from 'react';
import {mapDateToSeconds, mapSecondsToDate} from '../../helpers/mapDate';
import DatePicker from 'react-native-date-picker';
import FirestoreContext from '../../context/Firestore/FirestoreContext';

const ModalDatePicker = ({modalDatePicker, setModalDate}) => {
  const {selectedTrip, setSelectedTrip} = useContext(FirestoreContext);

  const checkTripFromDB = useMemo(() => {
    return selectedTrip.fecha.seconds
      ? mapSecondsToDate(selectedTrip.fecha)
      : new Date();
  }, [selectedTrip.fecha]);

  const handleConfirm = date => {
    console.log('Date Selected: ', date);

    setSelectedTrip(prevSelecTrip => ({
      ...prevSelecTrip,
      fecha: mapDateToSeconds(date),
      dateSelected: true,
    }));

    handleCancel();
  };

  const handleCancel = () => {
    setModalDate(false);
  };

  return (
    <DatePicker
      modal
      open={modalDatePicker}
      date={checkTripFromDB}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};

export default ModalDatePicker;
