import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';
import {cancel, modify} from '../../helpers/InputModalFunc';
import {validateTripProps} from '../../helpers/validateData';
import {TripInfoContext} from '../../store/TripInfoContext';

export const InputModalButton = ({
  btnTitle,
  setTripModal,
  setEditedTrip,
  setFormInvalid,
}) => {
  const {tripInfo, setTripInfo} = useContext(TripInfoContext);

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
            validateTripProps(
              tripInfo,
              tripInfo,
              setFormInvalid,
              setTripModal,
              setTripInfo,
            );
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
