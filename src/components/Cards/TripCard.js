import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {mapSecondsToString} from '../../helpers/mapDate';
import {delFirestore} from '../../firebase/firestoreActions';
import tripsScreenStyles from '../../styles/tripsScreenStyles';

const TripCard = ({trip, setTrips, setUpdTripModal, setEditedTrip}) => {
  return (
    <View style={tripsScreenStyles.tripContainer}>
      {/* Data del viaje */}
      <View style={{marginHorizontal: 10}}>
        <Text style={{fontSize: 20, fontWeight: '500'}}>{trip.pasajero}</Text>
        <Text style={{fontSize: 15}}>Importe: ${trip.importe}</Text>
        <Text style={{fontSize: 15}}>Desde: {trip.desde}</Text>
        <Text style={{fontSize: 15}}>Hacia: {trip.hacia}</Text>
      </View>

      <Text style={tripsScreenStyles.tripDate}>
        {mapSecondsToString(trip.fecha)}
      </Text>

      {/* Trip buttons */}
      <View
        style={{
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}>
        {/* Boton Editar */}
        <TouchableOpacity
          onPress={() => {
            setUpdTripModal(prevStatus => !prevStatus);
            setEditedTrip(prev => ({...prev, id: trip.id}));
          }}
          style={{
            backgroundColor: '#1f3dff',
            marginHorizontal: 5,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}>
          <Text
            style={{
              color: '#fff',
              padding: 5,
              fontSize: 17,
            }}>
            Editar
          </Text>
        </TouchableOpacity>

        {/* Boton Borrar */}
        <TouchableOpacity
          onPress={() => {
            delFirestore(trip.id);
            setTrips(prevTrips => {
              const tripsArray = Object.entries(prevTrips).filter(
                ([id]) => id !== trip.id,
              );

              return Object.fromEntries(tripsArray);
            });
          }}
          style={tripsScreenStyles.btnDel}>
          <Text style={{fontSize: 17, color: '#fff', padding: 5}}>Borrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TripCard;
