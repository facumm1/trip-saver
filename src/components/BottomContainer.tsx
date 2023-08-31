import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TripsCarousel} from './Carousel/TripsCarousel';
import {NavScreenButton} from './Buttons/NavScreenButton';

const BottomContainer = () => {
  return (
    <View style={bottomContainerStyles.container}>
      <View style={bottomContainerStyles.header}>
        <Text style={bottomContainerStyles.title}>Tus últimos 3 viajes</Text>

        <NavScreenButton screenName="TripsListScreen" />
      </View>

      <TripsCarousel />
    </View>
  );
};

const bottomContainerStyles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {fontWeight: 'bold', fontSize: 20, marginLeft: 15},
});

export default BottomContainer;
