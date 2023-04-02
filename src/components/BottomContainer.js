import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const BottomContainer = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('TripsListScreen')}>
        <Text>Ver todos los viajes</Text>
      </TouchableOpacity>
    </View>
  );
};
