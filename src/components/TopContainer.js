import React, {useContext} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import InputTripModal from './Modals/InputTripModal';
import {TripCounter} from './Counters/TripCounter';
import FirestoreContext from '../context/Firestore/FirestoreContext';

const {height} = Dimensions.get('window');

export const TopContainer = ({userName, addTripModal}) => {
  const {setTripModal} = useContext(FirestoreContext);

  // TODO usar una ventana modal distinta para add o modify un trip
  return (
    <View style={topContainerStyles.container}>
      {addTripModal && (
        <InputTripModal
          title="Añadir un viaje nuevo"
          addTripFirestore
          setTripModal={setTripModal}
        />
      )}
      <View>
        <Text style={topContainerStyles.appTitle}>Trip Saver</Text>
      </View>
      <View style={topContainerStyles.content}>
        <Text style={topContainerStyles.username}>Hola, {userName}!</Text>

        <TripCounter />
      </View>
    </View>
  );
};

const topContainerStyles = StyleSheet.create({
  container: {backgroundColor: '#000', height: height / 2.14},
  content: {
    borderWidth: 2,
    paddingLeft: 20,
    alignItems: 'flex-start',
  },
  appTitle: {
    fontWeight: 'bold',
    fontSize: 32.5,
    textAlign: 'center',
    color: '#fff',
    marginVertical: 10,
  },
  username: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 10,
  },
});
