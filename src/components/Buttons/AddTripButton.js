import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const AddTripButton = ({setAddTripModal}) => {
  return (
    <TouchableOpacity
      onPress={() => setAddTripModal(prevStatus => !prevStatus)}
      style={{
        backgroundColor: 'gray',
        width: '40%',
        borderRadius: 30,
        alignSelf: 'center',
      }}>
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 20,
          padding: 10,
        }}>
        Agregar viaje
      </Text>
    </TouchableOpacity>
  );
};
