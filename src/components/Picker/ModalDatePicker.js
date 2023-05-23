import React, {useContext, useMemo} from 'react';
import {mapDateToSeconds, mapSecondsToDate} from '../../helpers/mapDate';
import {TripInfoContext} from '../../context/TripInfoContext';
import DatePicker from 'react-native-date-picker';
import useTripActions from '../../hooks/useTripsActions';

const ModalDatePicker = () => {
  const {tripInfo, setTripInfo} = useContext(TripInfoContext);
  const {modalDatePicker, setModalDate} = useTripActions();

  const checkTripFromDB = useMemo(() => {
    if (tripInfo.fecha.seconds) {
      return mapSecondsToDate(tripInfo.fecha);
    }
    return new Date();
  }, [tripInfo.fecha]);

  const handleConfirm = date => {
    console.log('Date Selected: ', date);

    setTripInfo(prevTripInfo => ({
      ...prevTripInfo,
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
