import React, {useContext} from 'react';
import {mapDateToSeconds, mapSecondsToDate} from '../../helpers/mapDate';
import {TripInfoContext} from '../../store/TripInfoContext';
import DatePicker from 'react-native-date-picker';

const ModalDatePicker = ({modalDatePicker, setModalDate}) => {
  const {tripInfo, setTripInfo} = useContext(TripInfoContext);

  const checkTripFromDB = () => {
    if (tripInfo.fecha.seconds) {
      return mapSecondsToDate(tripInfo.fecha);
    }
    return new Date();
  };

  return (
    <DatePicker
      modal
      open={modalDatePicker}
      date={checkTripFromDB()}
      onConfirm={date => {
        console.log('date', date);
        setTripInfo(prevTripInfo => ({
          ...prevTripInfo,
          fecha: mapDateToSeconds(date),
          dateSelected: true,
        }));

        setModalDate(false);
      }}
      onCancel={() => {
        setModalDate(false);
      }}
    />
  );
};

export default ModalDatePicker;
