import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import buttonStyles from '../styles/buttonStyle';
import InputTripModal from '../components/Modals/InputTripModal';
import tripsScreenStyles from '../styles/tripsScreenStyles';
import {TripCardContainer} from '../components/Cards/TripCardContainer';
import FirestoreProvider from '../context/Firestore/FirestoreProvider';

export const TripsListScreen = ({route}) => {
  const navigation = useNavigation();
  const {uid} = route.params; // Acceder a la prop pasada

  const [updTripModal, setUpdTripModal] = useState(false);

  React.useEffect(() => console.log('uid list screen', uid), [uid]);

  return (
    <View>
      {/* Title */}
      <Text style={tripsScreenStyles.title}>Lista de viajes</Text>

      <FirestoreProvider setTripModal={setUpdTripModal} uid={uid}>
        {/* Modal for updating trip data */}
        {updTripModal && <InputTripModal title="Modificar datos del viaje" />}

        {/* Trips */}
        <TripCardContainer setUpdTripModal={setUpdTripModal} />
      </FirestoreProvider>

      {/* Screen buttons */}
      <TouchableOpacity
        style={{...buttonStyles.btn, marginVertical: 7.5}}
        onPress={() => navigation.navigate('MainScreen')}>
        <Text style={buttonStyles.textBtn}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};
