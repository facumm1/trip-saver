import React, {useContext} from 'react';
import {View} from 'react-native';
import InputRow from './InputRow';
import FirestoreContext from '../../context/Firestore/FirestoreContext';

const InputContainer = ({setModalDate}) => {
  const {selectedTrip} = useContext(FirestoreContext);

  return (
    <View style={{alignItems: 'center'}}>
      <InputRow
        tripInfo={{
          pasajero: {
            value: selectedTrip.pasajero,
            placeholder: 'Pasajero',
          },
          importe: {
            value: selectedTrip.importe,
            placeholder: 'Importe',
          },
        }}
        setModalDate={setModalDate}
      />

      <InputRow
        tripInfo={{
          desde: {
            value: selectedTrip.desde,
            placeholder: 'Desde',
          },
          hacia: {
            value: selectedTrip.hacia,
            placeholder: 'Hacia',
          },
        }}
        dateInfo={selectedTrip.fecha}
        setModalDate={setModalDate}
      />
    </View>
  );
};

export default InputContainer;
