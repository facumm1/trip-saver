import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';

export const AddTripButton = ({setTripModal}) => {
  return (
    <TouchableOpacity
      onPress={() => setTripModal(prevStatus => !prevStatus)}
      style={buttonStyles.btn}>
      <Text style={buttonStyles.textBtn}>Agregar viaje</Text>
    </TouchableOpacity>
  );
};
