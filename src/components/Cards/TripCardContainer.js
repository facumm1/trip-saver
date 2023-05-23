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

  React.useEffect(() => console.log(JSON.stringify(trips, null, 3)), []);

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
            data={Object.values(trips)}
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
