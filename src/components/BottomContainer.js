import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import buttonStyles from '../styles/buttonStyle';

export const BottomContainer = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity
        style={buttonStyles.btn}
        onPress={() => navigation.navigate('TripsListScreen')}>
        <Text style={buttonStyles.textBtn}>Ver todos los viajes</Text>
      </TouchableOpacity>
    </View>
  );
};
