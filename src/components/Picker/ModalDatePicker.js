import React, {useContext, useMemo} from 'react';
import {mapDateToSeconds, mapSecondsToDate} from '../../helpers/mapDate';
import {TripInfoContext} from '../../context/TripInfoContext';
import DatePicker from 'react-native-date-picker';

const ModalDatePicker = ({modalDatePicker, setModalDate}) => {
  const {tripInfo, setTripInfo} = useContext(TripInfoContext);

  const checkTripFromDB = useMemo(() => {
    return tripInfo.fecha.seconds
      ? mapSecondsToDate(tripInfo.fecha)
      : new Date();
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
