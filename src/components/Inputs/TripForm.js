import React, {useContext, useState} from 'react';
import InputRow from './InputRow';
import {View} from 'react-native';
import {mapDateToSeconds, mapSecondsToDate} from '../../helpers/mapDate';
import DatePicker from 'react-native-date-picker';
import {TripInfoContext} from '../../store/TripInfoContext';

const TripForm = ({addTripFirestore}) => {
  const [modalDatePicker, setModalDate] = useState(false);
  const {tripInfo, setTripInfo} = useContext(TripInfoContext);

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
        <InputRow
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

        <InputRow
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
