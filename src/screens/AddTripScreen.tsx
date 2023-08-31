import React from 'react';
import {StyleSheet, Text} from 'react-native';

import appColors from '../styles/appColors';
import TripForm from '../components/Forms/TripForm';
import {ScrollView} from 'react-native-gesture-handler';

const AddTripScreen: React.FC = () => {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      <Text style={styles.title}>Agregar un nuevo viaje</Text>

      <TripForm />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: appColors.white},
  title: {
    color: appColors.darkBlue,
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  mapContainer: {alignSelf: 'center', marginBottom: 20, width: '70%'},
});

export default AddTripScreen;
