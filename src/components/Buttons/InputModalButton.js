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
            add(setTripModal, tripInfo, setTripInfo);
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
