import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TouchableOpacity} from 'react-native';
import readFirestore from '../helpers/readFirestore';

export const TripsListScreen = () => {
  const navigation = useNavigation();
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    readFirestore()
      .then(res => {
        setTrips(res);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  //useEffect(() => console.log(trips[0].data().pasajero), [trips]);

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 25, fontWeight: 'bold'}}>
        Lista de viajes
      </Text>

      <View style={{borderWidth: 2}}>
        {isLoading ? (
          <Text>Cargando...</Text>
        ) : (
          <View style={{borderWidth: 1, margin: 10, width: '45%'}}>
            <Text>{trips[0].data().pasajero}</Text>
            <Text>{trips[0].data().importe}</Text>
            <Text>{trips[0].data().desde}</Text>
            <Text>{trips[0].data().hacia}</Text>
          </View>
        )}
      </View>

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
