import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import buttonStyles from '../styles/buttonStyle';

const {height} = Dimensions.get('window');

export const BottomContainer = () => {
  const navigation = useNavigation();

  return (
    <View style={bottomContainerStyles.container}>
      <TouchableOpacity
        style={buttonStyles.btn}
        onPress={() => navigation.navigate('TripsListScreen')}>
        <Text style={buttonStyles.textBtn}>Ver todos los viajes</Text>
      </TouchableOpacity>
    </View>
  );
};

const bottomContainerStyles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    height: height,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
  },
});
