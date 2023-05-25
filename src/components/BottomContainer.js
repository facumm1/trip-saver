import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TripsCarousel} from './Carousel/TripsCarousel';
import {NavScreenButton} from './Buttons/NavScreenButton';

const {height} = Dimensions.get('window');

export const BottomContainer = () => {
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
    backgroundColor: '#fff',
    height: height,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    borderWidth: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {fontWeight: 'bold', fontSize: 20, marginLeft: 15},
});
