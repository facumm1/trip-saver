import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import {readFirestore} from '../firebase/firestoreActions';
import buttonStyles from '../styles/buttonStyle';
import InputTripModal from '../components/Modals/InputTripModal';
import tripsScreenStyles from '../styles/tripsScreenStyles';
import {TripCardContainer} from '../components/Cards/TripCardContainer';

export const TripsListScreen = () => {
  const navigation = useNavigation();
  const [trips, setTrips] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [updTripModal, setUpdTripModal] = useState(false);
  const [editedTrip, setEditedTrip] = useState({id: '', updated: false});

  const readTripsData = () => {
    setEditedTrip(prev => ({...prev, updated: false}));

    readFirestore()
      .then(res => {
        res.forEach(trip =>
          setTrips(prev => ({...prev, [trip.data().id]: trip.data()})),
        );
        setIsLoading(false);
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (isLoading || editedTrip.updated) {
      readTripsData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editedTrip.updated]);

  return (
    <View>
      {/* Title */}
      <Text style={tripsScreenStyles.title}>Lista de viajes</Text>

      {/* Modal for updating trip data */}
      {updTripModal && (
        <InputTripModal
          tripModal={updTripModal}
          tripFromDB={trips[editedTrip.id]}
          title="Modificar datos del viaje"
          setTripModal={setUpdTripModal}
          setEditedTrip={setEditedTrip}
        />
      )}

      {/* Trips */}
      <TripCardContainer
        isLoading={isLoading}
        trips={trips}
        setTrips={setTrips}
        setUpdTripModal={setUpdTripModal}
        setEditedTrip={setEditedTrip}
      />

      {/* Screen buttons */}
      <TouchableOpacity
        style={{...buttonStyles.btn, marginVertical: 7.5}}
        onPress={() => navigation.navigate('MainScreen')}>
        <Text style={buttonStyles.textBtn}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};
