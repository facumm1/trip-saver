import React, {useContext, useMemo} from 'react';
import Carousel from 'react-native-new-snap-carousel/src/carousel/Carousel';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {mapSecondsToString} from '../../helpers/mapDate';
import FirestoreContext from '../../context/Firestore/FirestoreContext';

const {width} = Dimensions.get('window');

const CarouselCard = ({pasajero, importe, desde, hacia, fecha}) => {
  return (
    <View style={tripCarouselStyles.cardContainer}>
      <Text style={tripCarouselStyles.passengerText}>{pasajero}</Text>
      <Text>Importe: ${importe}</Text>
      <Text>Desde: {desde}</Text>
      <Text>Hacia: {hacia}</Text>

      <Text style={tripCarouselStyles.cardDate}>
        {mapSecondsToString(fecha)}
      </Text>
    </View>
  );
};

export const TripsCarousel = () => {
  const {trips, isDataLoading} = useContext(FirestoreContext);

  const sortLatestTrips = useMemo(() => {
    return () =>
      Object.values(trips)
        .sort((a, b) => b.fecha.seconds - a.fecha.seconds)
        .slice(0, 3);
  }, [trips]);

  return isDataLoading ? (
    <ActivityIndicator size="large" color="#000" />
  ) : (
    <Carousel
      data={sortLatestTrips()}
      renderItem={({item}) => <CarouselCard {...item} />}
      sliderWidth={width}
      itemWidth={width / 1.5}
      inactiveSlideOpacity={0.4}
      containerCustomStyle={{marginTop: 12.5}}
    />
  );
};

const tripCarouselStyles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  cardDate: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 2.5,
    fontSize: 17.5,
    fontWeight: 'bold',
    borderWidth: 1,
  },
  passengerText: {fontSize: 20, fontWeight: 'bold'},
});
