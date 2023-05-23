import React, {useContext} from 'react';
import InputRow from './InputRow';
import {View} from 'react-native';
import {TripInfoContext} from '../../context/TripInfoContext';
import {InputModalButton} from '../Buttons/InputModalButton';
import modalTripStyles from '../../styles/inputModalStyles';
import ModalDatePicker from '../Picker/ModalDatePicker';

const TripForm = () => {
  const {tripInfo, addTripFirestore} = useContext(TripInfoContext);

  return (
    <>
      {/* Pick date modal */}
      <ModalDatePicker />

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
        />
      </View>

      {/* Buttons */}
      <View style={modalTripStyles.btnContainer}>
        {/* Boton modificar/añadir */}
        <InputModalButton
          btnTitle={addTripFirestore ? 'Añadir' : 'Modificar'}
        />

        {/* Boton cancelar */}
        <InputModalButton btnTitle="Cancelar" />
      </View>
    </>
  );
};

export default TripForm;
