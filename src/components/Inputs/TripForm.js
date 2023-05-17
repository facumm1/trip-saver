import React, {useState} from 'react';
import {InputContainer} from './InputContainer';
import {View} from 'react-native';
import {mapDateToSeconds, mapSecondsToDate} from '../../helpers/mapDate';
import DatePicker from 'react-native-date-picker';

const TripForm = ({tripInfo, setTripInfo, addTripFirestore}) => {
  const [modalDatePicker, setModalDate] = useState(false);

  return (
    <>
      {/* Pick date modal */}
      <DatePicker
        modal
        open={modalDatePicker}
        date={addTripFirestore ? new Date() : mapSecondsToDate(tripInfo.fecha)}
        onConfirm={date => {
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

      <View style={{alignItems: 'center'}}>
        <InputContainer
          tripInfo={{
            pasajero: {
              value: tripInfo.pasajero,
              placeholder: 'Pasajero',
            },
            importe: {
              value: tripInfo.importe,
              placeholder: 'Importe',
            },
          }}
          setTripInfo={setTripInfo}
        />

        <InputContainer
          tripInfo={{
            desde: {
              value: tripInfo.desde,
              placeholder: 'Desde',
            },
            hacia: {
              value: tripInfo.hacia,
              placeholder: 'Hacia',
            },
          }}
          dateInfo={tripInfo.fecha}
          setTripInfo={setTripInfo}
          setModalDate={setModalDate}
        />
      </View>
    </>
  );
};

export default TripForm;
