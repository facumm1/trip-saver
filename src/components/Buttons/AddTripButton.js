import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';

export const AddTripButton = ({setAddTripModal}) => {
  return (
    <TouchableOpacity
      onPress={() => setAddTripModal(prevStatus => !prevStatus)}
      style={buttonStyles.btn}>
      <Text style={buttonStyles.textBtn}>Agregar viaje</Text>
    </TouchableOpacity>
  );
};
