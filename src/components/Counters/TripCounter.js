import React, {useContext} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {AddTripButton} from '../Buttons/AddTripButton';
import FirestoreContext from '../../context/Firestore/FirestoreContext';

export const TripCounter = () => {
  const {trips, isDataLoading} = useContext(FirestoreContext);
  //TODO agregar un refresher para el contador de viajes realizados
  //TODO agregar filtro de viajes esta semana/dia/mes
  return (
    <View>
      <Text style={tripCounterStyles.title}>Viajes realizados</Text>
      {isDataLoading ? (
        <ActivityIndicator
          color={'#fff'}
          size={'large'}
          style={tripCounterStyles.indicator}
        />
      ) : (
        <Text style={tripCounterStyles.counterText}>
          {Object.keys(trips).length}
        </Text>
      )}
      <AddTripButton />
    </View>
  );
};

const tripCounterStyles = StyleSheet.create({
  title: {fontSize: 17.5, color: '#fff'},
  indicator: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
  },
  counterText: {
    fontSize: 45,
    color: '#fff',
  },
});
