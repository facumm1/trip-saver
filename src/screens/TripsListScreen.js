import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

export const TripsListScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>TripsListScreen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}>
        <Text>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};
