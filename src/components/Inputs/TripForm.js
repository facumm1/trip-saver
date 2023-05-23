import React, {useContext} from 'react';
import InputRow from './InputRow';
import {View} from 'react-native';
import {TripInfoContext} from '../../context/TripInfoContext';
import {InputModalButton} from '../Buttons/InputModalButton';
import modalTripStyles from '../../styles/inputModalStyles';
import ModalDatePicker from '../Picker/ModalDatePicker';
import useTripActions from '../../hooks/useTripsActions';

const TripForm = () => {
  const {tripInfo, addTripFirestore} = useContext(TripInfoContext);
  const {modalDatePicker, setModalDate} = useTripActions();

  return (
    <>
      {/* Pick date modal */}
      <ModalDatePicker
        modalDatePicker={modalDatePicker}
        setModalDate={setModalDate}
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
          setModalDate={setModalDate}
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
          setModalDate={setModalDate}
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
