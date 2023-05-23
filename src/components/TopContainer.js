import React, {useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {AddTripButton} from './Buttons/AddTripButton';
import InputTripModal from './Modals/InputTripModal';
import {readFirestore} from '../firebase/firestoreActions';

const {height} = Dimensions.get('window');

export const TopContainer = ({userName}) => {
  const [addTripModal, setAddTripModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [trips, setTrips] = useState({});

  const readTripsData = () => {
    readFirestore()
      .then(res => {
        res.forEach(trip =>
          setTrips(prev => ({...prev, [trip.data().id]: trip.data()})),
        );
        setIsLoading(false);
      })
      .catch(console.error);
  };

  React.useEffect(() => {
    readTripsData();
  }, []);

  return (
    <View style={{backgroundColor: '#000', height: height / 2.14}}>
      {addTripModal && (
        <InputTripModal
          modalTitle="Añadir un viaje nuevo"
          addTripFirestore
          setTripModal={setAddTripModal}
        />
      )}

      <View>
        <Text style={topContainerStyles.appTitle}>Trip Saver</Text>
      </View>

      <View
        style={{
          borderWidth: 2,
          paddingLeft: 20,
          alignItems: 'flex-start',
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#fff',
            marginVertical: 10,
          }}>
          Hola, {userName}!
        </Text>

        <View>
          <Text style={{fontSize: 17.5, color: '#fff'}}>
            Viajes realizados este mes
          </Text>
          {isLoading ? (
            <ActivityIndicator
              color={'#fff'}
              size={'large'}
              style={{
                alignSelf: 'flex-start',
                paddingVertical: 10,
              }}
            />
          ) : (
            <Text
              style={{
                fontSize: 45,
                color: '#fff',
              }}>
              {Object.keys(trips).length}
            </Text>
          )}
          <AddTripButton setTripModal={setAddTripModal} />
        </View>
      </View>
    </View>
  );
};

const topContainerStyles = StyleSheet.create({
  appTitle: {
    fontWeight: 'bold',
    fontSize: 32.5,
    textAlign: 'center',
    color: '#fff',
    marginVertical: 10,
  },
});
