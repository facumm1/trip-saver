import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import TripCard from './TripCard';

export const TripCardContainer = ({
  isLoading,
  trips,
  setTrips,
  setUpdTripModal,
  setEditedTrip,
}) => {
  return (
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
  );
};
