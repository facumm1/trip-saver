import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {readFirestore} from '../firebase/firestoreActions';
import buttonStyles from '../styles/buttonStyle';
import InputTripModal from '../components/Modals/InputTripModal';
import TripCard from '../components/Cards/TripCard';
import tripsScreenStyles from '../styles/tripsScreenStyles';

export const TripsListScreen = () => {
  const navigation = useNavigation();
  const [trips, setTrips] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [updTripModal, setUpdTripModal] = useState(false);
  const [editedTrip, setEditedTrip] = useState({id: '', updated: false});

  useEffect(() => {
    if (isLoading || editedTrip.updated) {
      setEditedTrip(prev => ({...prev, updated: false}));

      readFirestore()
        .then(res => {
          res.forEach(trip =>
            setTrips(prev => ({...prev, [trip.data().id]: trip.data()})),
          );
          setIsLoading(false);
        })
        .catch(console.error);
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
      <View style={{alignItems: 'center'}}>
        {isLoading ? (
          <View style={{paddingVertical: 50, width: '100%'}}>
            <ActivityIndicator size="large" color="#000" />
          </View>
        ) : (
          Object.values(trips).map(trip => (
            <TripCard
              key={trip.id}
              trip={trip}
              setTrips={setTrips}
              setUpdTripModal={setUpdTripModal}
              setEditedTrip={setEditedTrip}
            />
          ))
        )}
      </View>

      {/* Screen buttons */}
      <TouchableOpacity
        style={buttonStyles.btn}
        onPress={() => navigation.navigate('MainScreen')}>
        <Text style={buttonStyles.textBtn}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};
