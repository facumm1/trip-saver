import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';

export const TripsListScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
        Lista de viajes
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'gray',
          width: '40%',
          borderRadius: 30,
          alignSelf: 'center',
        }}
        onPress={() => navigation.navigate('MainScreen')}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
            padding: 10,
          }}>
          Volver
        </Text>
      </TouchableOpacity>
    </View>
  );
};
