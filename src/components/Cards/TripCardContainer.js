import React, {useContext} from 'react';
import {ActivityIndicator, Dimensions, FlatList, View} from 'react-native';
import TripCard from './TripCard';
import FirestoreContext from '../../context/Firestore/FirestoreContext';

const {width, height} = Dimensions.get('window');

const TripSeparator = () => (
  <View
    style={{
      height: 1.5,
      backgroundColor: '#000',
    }}
  />
);

export const TripCardContainer = ({setUpdTripModal}) => {
  //TODO modulizar estos componentes
  const {trips, setTrips, isDataLoading, setEditedTrip} =
    useContext(FirestoreContext);

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

  const sortTrips = () => {
    return Object.values(trips).sort(
      (a, b) => b.fecha.seconds - a.fecha.seconds,
    );
  };

  return (
    <View style={{borderWidth: 0, height: height - 140}}>
      {isDataLoading ? (
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
