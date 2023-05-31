import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../../styles/buttonStyle';
import FirestoreContext from '../../context/Firestore/FirestoreContext';

export const AddTripButton = () => {
  const {setTripModal} = useContext(FirestoreContext);

  return (
    <TouchableOpacity
      onPress={() => setTripModal(true)}
      style={addTripButtonStyles.btn}>
      <Text style={addTripButtonStyles.textBtn}>Nuevo viaje</Text>
    </TouchableOpacity>
  );
};

const addTripButtonStyles = StyleSheet.create({
  btn: {
    ...buttonStyles.btn,
    alignSelf: 'auto',
    marginVertical: 20,
    width: '70%',
  },
  textBtn: {...buttonStyles.textBtn, paddingHorizontal: 20},
});
