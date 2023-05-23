import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';

export const AddTripButton = ({setTripModal}) => {
  return (
    <TouchableOpacity
      onPress={() => setTripModal(prevStatus => !prevStatus)}
      style={{
        ...buttonStyles.btn,
        alignSelf: 'auto',
        marginVertical: 20,
        width: '70%',
      }}>
      <Text style={{...buttonStyles.textBtn, paddingHorizontal: 20}}>
        Nuevo viaje
      </Text>
    </TouchableOpacity>
  );
};
