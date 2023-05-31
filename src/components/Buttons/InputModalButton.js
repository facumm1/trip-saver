import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';
import {add, cancel, modify} from '../../helpers/InputModalFunc';
import FirestoreContext from '../../context/Firestore/FirestoreContext';

export const InputModalButton = ({btnTitle, setFormInvalid}) => {
  const {selectedTrip, setSelectedTrip, setEditedTrip, setTripModal} =
    useContext(FirestoreContext);

  const validateTripProps = () => {
    const {pasajero, importe, desde, hacia} = selectedTrip;

    const isPasajeroValid = pasajero.length >= 3;
    const isImporteValid = importe.length >= 3;
    const isDesdeValid = desde.length >= 3;
    const isHaciaValid = hacia.length >= 3;

    if (isPasajeroValid && isImporteValid && isDesdeValid && isHaciaValid) {
      setFormInvalid(false);
      return true;
    }

    setFormInvalid(true);
    return false;
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
            if (validateTripProps()) {
              add(setTripModal, selectedTrip, setSelectedTrip);
            }
            break;
          case 'Modificar':
            if (validateTripProps()) {
              modify(
                setTripModal,
                selectedTrip,
                setSelectedTrip,
                setEditedTrip,
              );
            }
            break;
          case 'Cancelar':
            cancel(setTripModal, setSelectedTrip, setEditedTrip);
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
