import React from 'react';
import {ActivityIndicator, Dimensions, FlatList, View} from 'react-native';
import TripCard from './TripCard';

const {width, height} = Dimensions.get('window');

export const TripCardContainer = ({
  isLoading,
  trips,
  setTrips,
  setUpdTripModal,
  setEditedTrip,
}) => {
  const renderTripCard = ({item}) => (
    <TripCard
      key={item.id}
      trip={item}
      setTrips={setTrips}
      setUpdTripModal={setUpdTripModal}
      setEditedTrip={setEditedTrip}
    />
  );

  const keyExtractor = item => item.id;

  const TripSeparator = () => (
    <View
      style={{
        height: 1.5,
        backgroundColor: '#000',
      }}
    />
  );

  const sortTrips = () => {
    return Object.values(trips).sort(
      (a, b) => b.fecha.seconds - a.fecha.seconds,
    );
  };

  return (
    <View style={{borderWidth: 0, height: height - 140}}>
      {isLoading ? (
        <View style={{paddingVertical: 50, width}}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      ) : (
        <>
          <TripSeparator />
          <FlatList
            data={sortTrips()}
            renderItem={renderTripCard}
            keyExtractor={keyExtractor}
            ItemSeparatorComponent={TripSeparator}
          />
          <TripSeparator />
        </>
      )}
    </View>
  );
};
