import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {delFirestore, readFirestore} from '../helpers/firestoreActions';
import buttonStyles from '../styles/buttonStyle';

export const TripsListScreen = () => {
  const navigation = useNavigation();
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      readFirestore()
        .then(res => {
          res.forEach(trip => setTrips(prev => [...prev, trip.data()]));
          setIsLoading(false);
        })
        .catch(console.error);
    }
  }, []);

  return (
    <View>
      {/* Title */}
      <Text style={tripsScreenStyles.title}>Lista de viajes</Text>

      {/* Trips */}
      <View style={{alignItems: 'center'}}>
        {isLoading ? (
          <View style={{paddingVertical: 50, width: '100%'}}>
            <ActivityIndicator size="large" color="#000" />
          </View>
        ) : (
          trips.map((trip, index) => (
            <View style={tripsScreenStyles.tripContainer} key={index + 1}>
              <View style={{marginHorizontal: 10}}>
                <Text style={{fontSize: 20, fontWeight: '500'}}>
                  {trip.pasajero}
                </Text>
                <Text style={{fontSize: 15}}>Importe: ${trip.importe}</Text>
                <Text style={{fontSize: 15}}>Desde: {trip.desde}</Text>
                <Text style={{fontSize: 15}}>Hacia: {trip.hacia}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {}}
                style={tripsScreenStyles.tripDate}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 22,
                  }}>
                  {trip.fecha}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  delFirestore(trip.id);
                  setTrips(prevTrips =>
                    prevTrips.filter(item => item.id !== trip.id),
                  );
                }}
                style={tripsScreenStyles.btnDel}>
                <Text style={{fontSize: 17, color: '#fff', padding: 5}}>
                  Borrar
                </Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={buttonStyles.btn}
        onPress={() => navigation.navigate('MainScreen')}>
        <Text style={buttonStyles.textBtn}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

const tripsScreenStyles = StyleSheet.create({
  title: {textAlign: 'center', fontSize: 25, fontWeight: 'bold'},
  tripContainer: {
    margin: 5,
    width: '75%',
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  tripDate: {
    fontWeight: 'bold',
    fontSize: 22,
    borderWidth: 1,
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 5,
  },
  btnDel: {
    backgroundColor: '#b32727',
    position: 'absolute',
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 10,
  },
});
