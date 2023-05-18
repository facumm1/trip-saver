import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';
import {add, cancel, modify} from '../../helpers/InputModalFunc';

export const InputModalButton = ({
  btnTitle,
  tripInfo,
  setTripInfo,
  setTripModal,
  setEditedTrip,
}) => {
  const validateTripProps = trip => {
    console.log(tripInfo);

    const {pasajero, importe, desde, hacia} = trip;

    const isPasajeroValid = pasajero.length >= 3;
    const isImporteValid = importe.length >= 3;
    const isDesdeValid = desde.length >= 3;
    const isHaciaValid = hacia.length >= 3;

    if (isPasajeroValid && isImporteValid && isDesdeValid && isHaciaValid) {
      console.log('Validas');
    } else {
      alert('Los valores deben tener mas de 3 caracteres o digitos');
    }
  };

  return (
    <TouchableOpacity
      style={{
        ...buttonStyles.btn,
        backgroundColor: '#fff',
        marginRight: 6,
      }}
      onPress={() => {
        switch (btnTitle) {
          case 'Añadir':
            validateTripProps(tripInfo);
            //add(setTripModal, tripInfo, setTripInfo);
            break;
          case 'Modificar':
            modify(setTripModal, tripInfo, setTripInfo, setEditedTrip);
            break;
          case 'Cancelar':
            cancel(setTripModal, setTripInfo, setEditedTrip);
            break;
          default:
            console.warn('Input modal btn error');
            break;
        }
      }}>
      <Text
        style={{
          ...buttonStyles.textBtn,
          color: 'gray',
          marginHorizontal: 5,
        }}>
        {btnTitle}
      </Text>
    </TouchableOpacity>
  );
};
